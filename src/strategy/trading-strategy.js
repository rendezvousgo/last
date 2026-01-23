import { BinanceAPI } from '../data/binance-api.js';
import { FearGreedAPI } from '../data/fear-greed-api.js';
import { TechnicalIndicators } from '../indicators/technical-indicators.js';
import { AIStrategy } from '../ai/openai-strategy.js';

/**
 * 통합 트레이딩 전략 클래스
 */
export class TradingStrategy {
    constructor() {
        this.binance = new BinanceAPI();
        this.fearGreed = new FearGreedAPI();
        this.aiStrategy = new AIStrategy();
    }

    /**
     * 전체 시장 분석 및 트레이딩 결정
     * @param {string} symbol - 거래쌍 (예: 'BTCUSDT')
     * @param {string} interval - 간격 (예: '1h')
     * @param {number} limit - 캔들 개수 (기본 100)
     * @returns {Promise<Object>} 분석 결과
     */
    async analyze(symbol = 'BTCUSDT', interval = '1h', limit = 100) {
        try {
            console.log(`\n📊 ${symbol} 분석 시작 (${interval} 간격)...\n`);

            // 1. 시장 데이터 수집
            console.log('1️⃣ 시장 데이터 수집 중...');
            const [klines, currentPrice, stats, fearGreedData] = await Promise.all([
                this.binance.getKlines(symbol, interval, limit),
                this.binance.getCurrentPrice(symbol),
                this.binance.get24hrStats(symbol),
                this.fearGreed.getCurrent()
            ]);

            // 2. 기술적 지표 계산
            console.log('2️⃣ 기술적 지표 계산 중...');
            const closePrices = this.binance.extractClosePrices(klines);
            const indicators = TechnicalIndicators.calculateAll(closePrices);
            const signals = TechnicalIndicators.generateSignals(indicators);

            // 3. 시장 데이터 구성
            const marketData = {
                symbol,
                price: currentPrice,
                indicators,
                signals,
                fearGreed: fearGreedData,
                stats,
                timestamp: new Date()
            };

            // 4. AI 전략 결정
            console.log('3️⃣ AI 분석 중...');
            let aiDecision;
            if (this.aiStrategy.isConfigured()) {
                aiDecision = await this.aiStrategy.analyzeTrade(marketData);
            } else {
                console.log('⚠️  OpenAI API 키가 설정되지 않음 - 기술적 지표 기반 결정');
                aiDecision = this.fallbackDecision(signals, fearGreedData);
            }

            // 5. 최종 결과
            const result = {
                ...marketData,
                aiDecision,
                finalDecision: this.calculateFinalDecision(signals, aiDecision, fearGreedData)
            };

            this.printAnalysis(result);
            return result;

        } catch (error) {
            console.error('❌ 분석 오류:', error.message);
            throw error;
        }
    }

    /**
     * AI 없을 때 대체 결정 (기술적 지표 기반)
     */
    fallbackDecision(signals, fearGreed) {
        let buyScore = 0;
        let sellScore = 0;

        // RSI 시그널
        if (signals.rsi === 'STRONG_BUY') buyScore += 3;
        else if (signals.rsi === 'BUY') buyScore += 1;
        else if (signals.rsi === 'STRONG_SELL') sellScore += 3;
        else if (signals.rsi === 'SELL') sellScore += 1;

        // MACD 시그널
        if (signals.macd === 'BUY') buyScore += 2;
        else if (signals.macd === 'SELL') sellScore += 2;

        // 볼린저 밴드
        if (signals.bollingerBands === 'BUY') buyScore += 1;
        else if (signals.bollingerBands === 'SELL') sellScore += 1;

        // Fear & Greed
        if (fearGreed?.interpretation?.signal === 'STRONG_BUY') buyScore += 2;
        else if (fearGreed?.interpretation?.signal === 'BUY') buyScore += 1;
        else if (fearGreed?.interpretation?.signal === 'STRONG_SELL') sellScore += 2;
        else if (fearGreed?.interpretation?.signal === 'SELL') sellScore += 1;

        // 추세
        if (signals.trend === 'BULLISH') buyScore += 1;
        else if (signals.trend === 'BEARISH') sellScore += 1;

        const totalScore = buyScore - sellScore;
        let decision, confidence;

        if (totalScore >= 0) {
            decision = 'BUY';
            confidence = Math.min(50 + Math.abs(totalScore) * 5, 95);
        } else {
            decision = 'SELL';
            confidence = Math.min(50 + Math.abs(totalScore) * 5, 95);
        }

        return {
            decision,
            confidence,
            reason: `기술적 지표 기반 결정 (매수: ${buyScore}, 매도: ${sellScore})`,
            riskLevel: totalScore === 0 ? 'LOW' : Math.abs(totalScore) >= 5 ? 'HIGH' : 'MEDIUM',
            recommendedPositionSize: confidence >= 70 ? 50 : confidence >= 60 ? 30 : 10
        };
    }

    /**
     * 최종 결정 계산
     */
    calculateFinalDecision(signals, aiDecision, fearGreed) {
        // Fear & Greed 시그널을 BUY/SELL로 변환
        let fgSignal = 'BUY'; // 기본값
        if (fearGreed?.value) {
            fgSignal = fearGreed.value <= 50 ? 'BUY' : 'SELL';
        }

        const decisions = [
            signals.overall,
            aiDecision.decision,
            fgSignal
        ];

        // 투표 방식 (다수결)
        const buyVotes = decisions.filter(d => d === 'BUY').length;
        const sellVotes = decisions.filter(d => d === 'SELL').length;

        const finalDecision = buyVotes >= sellVotes ? 'BUY' : 'SELL';

        return {
            decision: finalDecision,
            votes: { buy: buyVotes, sell: sellVotes },
            confidence: aiDecision.confidence,
            recommendation: this.generateRecommendation(finalDecision, aiDecision)
        };
    }

    /**
     * 추천 메시지 생성
     */
    generateRecommendation(decision, aiDecision) {
        const posSize = aiDecision.recommendedPositionSize;
        
        if (decision === 'BUY') {
            return `15분 후 상승 예상 (신뢰도: ${aiDecision.confidence}%, 포지션: ${posSize}%)`;
        } else {
            return `15분 후 하락 예상 (신뢰도: ${aiDecision.confidence}%, 포지션: ${posSize}%)`;
        }
    }

    /**
     * 분석 결과 출력
     */
    printAnalysis(result) {
        console.log('\n' + '='.repeat(60));
        console.log(`📈 ${result.symbol} 분석 결과`);
        console.log('='.repeat(60));

        // 현재 가격
        console.log(`\n💰 현재 가격: $${result.price.toFixed(2)}`);
        console.log(`📊 24시간 변동: ${result.stats.priceChangePercent.toFixed(2)}%`);

        // 기술적 지표
        console.log('\n📉 기술적 지표:');
        console.log(`  - RSI(14): ${result.indicators.rsi.toFixed(2)} → ${result.signals.rsi}`);
        console.log(`  - MACD: ${result.indicators.macd ? result.indicators.macd.histogram.toFixed(4) : 'N/A'} → ${result.signals.macd}`);
        console.log(`  - 볼린저 밴드: ${result.indicators.bollingerBands.position.toFixed(1)}% → ${result.signals.bollingerBands}`);
        console.log(`  - 추세: ${result.signals.trend} (EMA20: $${result.indicators.ema20.toFixed(2)}, EMA50: $${result.indicators.ema50.toFixed(2)})`);
        console.log(`  - 종합 시그널: ${result.signals.overall}`);

        // Fear & Greed
        if (result.fearGreed) {
            console.log('\n😱 시장 심리 (Fear & Greed):');
            console.log(`  - 지수: ${result.fearGreed.value}/100`);
            console.log(`  - 상태: ${result.fearGreed.classification}`);
            console.log(`  - 시그널: ${result.fearGreed.interpretation.signal}`);
        }

        // AI 분석
        console.log('\n🤖 AI 분석:');
        console.log(`  - 결정: ${result.aiDecision.decision}`);
        console.log(`  - 신뢰도: ${result.aiDecision.confidence}%`);
        console.log(`  - 리스크: ${result.aiDecision.riskLevel}`);
        console.log(`  - 포지션 크기: ${result.aiDecision.recommendedPositionSize}%`);
        console.log(`  - 이유: ${result.aiDecision.reason}`);

        // 최종 결정
        console.log('\n🎯 최종 결정 (15분 후 가격 방향):');
        console.log(`  - 예측: ${result.finalDecision.decision}`);
        console.log(`  - 투표: 매수(${result.finalDecision.votes.buy}) | 매도(${result.finalDecision.votes.sell})`);
        console.log(`  - 추천: ${result.finalDecision.recommendation}`);

        console.log('\n' + '='.repeat(60) + '\n');
    }

    /**
     * 여러 코인 동시 분석
     */
    async analyzeMultiple(symbols, interval = '1h') {
        const results = [];
        
        for (const symbol of symbols) {
            try {
                const result = await this.analyze(symbol, interval);
                results.push(result);
                
                // API 제한 방지 (1초 대기)
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (error) {
                console.error(`${symbol} 분석 실패:`, error.message);
            }
        }

        return results;
    }
}
