import { BinanceAPI } from '../data/binance-api.js';
import { FearGreedAPI } from '../data/fear-greed-api.js';
import { TechnicalIndicators } from '../indicators/technical-indicators.js';
import { ProfessionalTradingAI } from '../ai/professional-trading-ai.js';

/**
 * AI에게 제공할 최적의 데이터 수집
 */
export class AIDataCollector {
    constructor() {
        this.binance = new BinanceAPI();
        this.fearGreed = new FearGreedAPI();
    }

    /**
     * AI 분석에 필요한 모든 데이터 수집
     */
    async collectForAI(symbol = 'BTCUSDT', interval = '15m') {
        console.log(`📊 ${symbol} 데이터 수집 중...`);

        // 병렬로 데이터 수집 (60개 캔들 = 15시간 데이터, EMA50 계산에 충분)
        const [klines, currentPrice, stats, fearGreedData] = await Promise.all([
            this.binance.getKlines(symbol, interval, 60), // 최근 60개 캔들 (15분봉 기준)
            this.binance.getCurrentPrice(symbol),
            this.binance.get24hrStats(symbol),
            this.fearGreed.getCurrent()
        ]);

        // 캔들 데이터 단순화 (AI가 이해하기 쉽게)
        const recentCandles = klines.map(k => ({
            time: new Date(k.openTime).toISOString(),
            open: k.open,
            high: k.high,
            low: k.low,
            close: k.close,
            volume: k.volume,
            // 캔들 타입 (AI가 쉽게 이해)
            type: k.close > k.open ? 'BULLISH' : 'BEARISH',
            // 몸통 크기 (중요도)
            bodySize: Math.abs(k.close - k.open),
            // 위/아래 꼬리 크기
            upperWick: k.high - Math.max(k.open, k.close),
            lowerWick: Math.min(k.open, k.close) - k.low
        }));

        // 기술적 지표 계산
        const closePrices = this.binance.extractClosePrices(klines);
        const indicators = TechnicalIndicators.calculateAll(closePrices);
        const signals = TechnicalIndicators.generateSignals(indicators);

        // 거래량 분석
        const volumes = klines.map(k => k.volume);
        const volumeMA = volumes.reduce((a, b) => a + b, 0) / volumes.length;
        const recentVolume = volumes.slice(-5).reduce((a, b) => a + b, 0) / 5;
        
        const volumeProfile = {
            current: klines[klines.length - 1].volume,
            average: volumeMA,
            recent5Average: recentVolume,
            trend: recentVolume > volumeMA ? 'INCREASING' : 'DECREASING',
            // 급등 여부
            surge: recentVolume > volumeMA * 1.5
        };

        // 주요 가격대 식별 (지지/저항)
        const keyLevels = this.identifyKeyLevels(klines, currentPrice);

        // 최종 데이터 패키지
        return {
            // 기본 정보
            symbol: symbol,
            interval: interval,
            timestamp: new Date(),
            
            // 현재 상태
            currentPrice: currentPrice,
            priceChange24h: stats.priceChange,
            priceChangePercent24h: stats.priceChangePercent,
            high24h: stats.highPrice,
            low24h: stats.lowPrice,
            
            // 캔들 데이터 (최근 100개)
            recentCandles: recentCandles,
            
            // 기술적 지표
            indicators: indicators,
            signals: signals,
            
            // 거래량 분석
            volumeProfile: volumeProfile,
            
            // 주요 가격대
            keyLevels: keyLevels,
            
            // 시장 심리
            fearGreed: fearGreedData
        };
    }

    /**
     * 주요 지지/저항선 식별
     * 최근 100개 캔들에서 가격이 여러 번 반등/하락한 구간 찾기
     */
    identifyKeyLevels(klines, currentPrice) {
        const pricePoints = [];
        
        // 모든 고점/저점 수집
        for (let i = 1; i < klines.length - 1; i++) {
            const prev = klines[i - 1];
            const curr = klines[i];
            const next = klines[i + 1];
            
            // 고점 (저항선 후보)
            if (curr.high > prev.high && curr.high > next.high) {
                pricePoints.push({ price: curr.high, type: 'resistance', count: 1 });
            }
            
            // 저점 (지지선 후보)
            if (curr.low < prev.low && curr.low < next.low) {
                pricePoints.push({ price: curr.low, type: 'support', count: 1 });
            }
        }

        // 비슷한 가격대 그룹화 (±0.5% 범위)
        const groupedLevels = this.groupSimilarPrices(pricePoints, 0.005);
        
        // 현재 가격 기준으로 위/아래 분류
        const resistances = groupedLevels
            .filter(l => l.type === 'resistance' && l.price > currentPrice)
            .sort((a, b) => a.price - b.price)
            .slice(0, 3); // 상위 3개
        
        const supports = groupedLevels
            .filter(l => l.type === 'support' && l.price < currentPrice)
            .sort((a, b) => b.price - a.price)
            .slice(0, 3); // 상위 3개

        return {
            resistances: resistances.map(r => r.price),
            supports: supports.map(s => s.price),
            // 가장 가까운 지지/저항
            nearestResistance: resistances[0]?.price || null,
            nearestSupport: supports[0]?.price || null
        };
    }

    /**
     * 비슷한 가격대 그룹화
     */
    groupSimilarPrices(pricePoints, threshold) {
        const grouped = [];
        
        for (const point of pricePoints) {
            // 기존 그룹 중 비슷한 가격대 찾기
            const existingGroup = grouped.find(g => 
                Math.abs(g.price - point.price) / g.price < threshold &&
                g.type === point.type
            );
            
            if (existingGroup) {
                // 평균 가격 업데이트
                existingGroup.price = (existingGroup.price * existingGroup.count + point.price) / (existingGroup.count + 1);
                existingGroup.count++;
            } else {
                grouped.push({ ...point });
            }
        }
        
        // 중요도 순으로 정렬 (여러 번 테스트된 레벨이 중요)
        return grouped.sort((a, b) => b.count - a.count);
    }

    /**
     * 데이터 요약 출력 (디버깅용)
     */
    printDataSummary(data) {
        console.log('\n' + '='.repeat(60));
        console.log('📊 AI 분석용 데이터 요약');
        console.log('='.repeat(60));
        console.log(`\n심볼: ${data.symbol}`);
        console.log(`현재 가격: $${data.currentPrice.toFixed(2)}`);
        console.log(`24시간 변동: ${data.priceChangePercent24h.toFixed(2)}%`);
        console.log(`\n캔들 데이터: ${data.recentCandles.length}개`);
        console.log(`  - 최근 5개 타입: ${data.recentCandles.slice(-5).map(c => c.type).join(', ')}`);
        console.log(`\n거래량:`);
        console.log(`  - 현재: ${data.volumeProfile.current.toFixed(0)}`);
        console.log(`  - 평균: ${data.volumeProfile.average.toFixed(0)}`);
        console.log(`  - 추세: ${data.volumeProfile.trend}`);
        console.log(`\n주요 가격대:`);
        console.log(`  - 저항선: ${data.keyLevels.resistances.map(r => '$' + r.toFixed(2)).join(', ')}`);
        console.log(`  - 지지선: ${data.keyLevels.supports.map(s => '$' + s.toFixed(2)).join(', ')}`);
        console.log(`\nFear & Greed: ${data.fearGreed.value}/100 (${data.fearGreed.classification})`);
        console.log('='.repeat(60) + '\n');
    }
}

/**
 * 사용 예시
 */
async function example() {
    const collector = new AIDataCollector();
    const ai = new ProfessionalTradingAI();
    
    // 데이터 수집
    const data = await collector.collectForAI('BTCUSDT', '15m');
    collector.printDataSummary(data);
    
    // AI 분석 (차트 이미지 없이)
    const analysis = await ai.analyzeTrade(data);
    
    console.log('🤖 AI 분석 결과:');
    console.log(JSON.stringify(analysis, null, 2));
}

// example();
