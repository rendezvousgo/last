/**
 * 15분 전략 스케줄러
 * 15분마다 데이터 수집 → 20개 전략 체크 → 결과 저장/출력
 */

import { AIDataCollector } from '../data/ai-data-collector.js';
import { StrategyEngine } from './strategy-engine.js';

export class StrategyScheduler {
    constructor(options = {}) {
        this.symbol = options.symbol || 'BTCUSDT';
        this.interval = options.interval || '15m';
        this.collector = new AIDataCollector();
        
        this.isRunning = false;
        this.timer = null;
        this.results = [];
        this.maxResults = options.maxResults || 100; // 최근 100개 결과 저장
        
        // 콜백
        this.onAnalysis = options.onAnalysis || null;
        this.onError = options.onError || null;
    }
    
    /**
     * 스케줄러 시작
     */
    start() {
        if (this.isRunning) {
            console.log('⚠️ 스케줄러가 이미 실행 중입니다.');
            return;
        }
        
        this.isRunning = true;
        console.log('🚀 전략 스케줄러 시작');
        console.log(`   심볼: ${this.symbol}`);
        console.log(`   간격: 15분`);
        console.log(`   전략: 20개\n`);
        
        // 즉시 1회 실행
        this.runAnalysis();
        
        // 15분마다 실행 (15 * 60 * 1000 = 900000ms)
        this.timer = setInterval(() => {
            this.runAnalysis();
        }, 15 * 60 * 1000);
    }
    
    /**
     * 스케줄러 정지
     */
    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        this.isRunning = false;
        console.log('🛑 전략 스케줄러 정지');
    }
    
    /**
     * 분석 1회 실행
     */
    async runAnalysis() {
        const startTime = Date.now();
        console.log(`\n${'═'.repeat(60)}`);
        console.log(`📊 분석 시작: ${new Date().toLocaleString('ko-KR')}`);
        console.log(`${'═'.repeat(60)}`);
        
        try {
            // 1. 데이터 수집
            const data = await this.collector.collectForAI(this.symbol, this.interval);
            
            // 2. 20개 전략 분석
            const result = StrategyEngine.analyze(data);
            
            // 3. 결과에 메타데이터 추가
            const analysisResult = {
                timestamp: new Date(),
                symbol: this.symbol,
                currentPrice: data.currentPrice,
                indicators: {
                    rsi: data.indicators.rsi,
                    macd: data.indicators.macd,
                    bbPosition: data.indicators.bollingerBands?.position,
                    bbSqueeze: data.indicators.bollingerBands?.squeeze,
                    ema20: data.indicators.ema20,
                    ema50: data.indicators.ema50
                },
                fearGreed: data.fearGreed?.value,
                volumeSurge: data.volumeProfile?.surge,
                ...result,
                executionTime: Date.now() - startTime
            };
            
            // 4. 결과 저장
            this.results.push(analysisResult);
            if (this.results.length > this.maxResults) {
                this.results.shift();
            }
            
            // 5. 결과 출력
            this.printResult(analysisResult);
            
            // 6. 콜백 호출
            if (this.onAnalysis) {
                this.onAnalysis(analysisResult);
            }
            
            return analysisResult;
            
        } catch (error) {
            console.error('❌ 분석 오류:', error.message);
            if (this.onError) {
                this.onError(error);
            }
        }
    }
    
    /**
     * 결과 출력
     */
    printResult(result) {
        // 기본 정보
        console.log(`\n💰 현재가: $${result.currentPrice?.toLocaleString()}`);
        console.log(`📈 Fear & Greed: ${result.fearGreed || 'N/A'}`);
        
        // 지표 요약
        console.log(`\n📊 지표 현황:`);
        console.log(`   RSI: ${result.indicators.rsi?.toFixed(1) || 'N/A'}`);
        console.log(`   MACD: ${result.indicators.macd?.histogram?.toFixed(2) || 'N/A'}`);
        console.log(`   BB Position: ${result.indicators.bbPosition?.toFixed(1) || 'N/A'}%`);
        console.log(`   EMA: ${result.indicators.ema20 > result.indicators.ema50 ? '상승 정렬 🟢' : '하락 정렬 🔴'}`);
        
        // 매칭된 전략
        console.log(`\n🎯 매칭된 전략 (${result.matchedStrategies.length}개):`);
        
        if (result.buyStrategies.length > 0) {
            console.log(`\n   🟢 BUY 전략 (${result.buyStrategies.length}개):`);
            result.buyStrategies.forEach(s => {
                console.log(`      [${s.id}] ${s.name} (신뢰도: ${s.confidence}%)`);
            });
        }
        
        if (result.sellStrategies.length > 0) {
            console.log(`\n   🔴 SELL 전략 (${result.sellStrategies.length}개):`);
            result.sellStrategies.forEach(s => {
                console.log(`      [${s.id}] ${s.name} (신뢰도: ${s.confidence}%)`);
            });
        }
        
        if (result.matchedStrategies.length === 0) {
            console.log(`   (매칭 없음)`);
        }
        
        // 최종 결정
        const emoji = result.decision === 'BUY' ? '🟢' : 
                      result.decision === 'SELL' ? '🔴' : '⚪';
        
        console.log(`\n${'─'.repeat(60)}`);
        console.log(`${emoji} 최종 결정: ${result.decision}`);
        console.log(`📊 신뢰도: ${result.confidence}%`);
        console.log(`💬 이유: ${result.reason}`);
        console.log(`⏱️ 실행시간: ${result.executionTime}ms`);
        console.log(`${'─'.repeat(60)}`);
        
        // 다음 분석 시간
        const nextTime = new Date(Date.now() + 15 * 60 * 1000);
        console.log(`\n⏰ 다음 분석: ${nextTime.toLocaleTimeString('ko-KR')}`);
    }
    
    /**
     * 최근 결과 조회
     */
    getRecentResults(count = 10) {
        return this.results.slice(-count);
    }
    
    /**
     * 통계 조회
     */
    getStats() {
        if (this.results.length === 0) {
            return { message: '분석 결과 없음' };
        }
        
        const buyCount = this.results.filter(r => r.decision === 'BUY').length;
        const sellCount = this.results.filter(r => r.decision === 'SELL').length;
        const holdCount = this.results.filter(r => r.decision === 'HOLD').length;
        
        const avgConfidence = this.results.reduce((a, r) => a + r.confidence, 0) / this.results.length;
        
        // 가장 자주 매칭된 전략
        const strategyCount = {};
        this.results.forEach(r => {
            r.matchedStrategies.forEach(s => {
                strategyCount[s.id] = (strategyCount[s.id] || 0) + 1;
            });
        });
        
        const topStrategies = Object.entries(strategyCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
        
        return {
            totalAnalyses: this.results.length,
            decisions: { BUY: buyCount, SELL: sellCount, HOLD: holdCount },
            avgConfidence: avgConfidence.toFixed(1),
            topStrategies,
            firstAnalysis: this.results[0]?.timestamp,
            lastAnalysis: this.results[this.results.length - 1]?.timestamp
        };
    }
}

// ═══════════════════════════════════════════════════════════════
// 단독 실행용
// ═══════════════════════════════════════════════════════════════

async function main() {
    const scheduler = new StrategyScheduler({
        symbol: 'BTCUSDT',
        onAnalysis: (result) => {
            // 여기서 추가 작업 가능 (DB 저장, 알림 등)
            // console.log('분석 완료:', result.decision);
        }
    });
    
    // 스케줄러 시작
    scheduler.start();
    
    // Ctrl+C로 종료 처리
    process.on('SIGINT', () => {
        console.log('\n\n📊 최종 통계:');
        console.log(scheduler.getStats());
        scheduler.stop();
        process.exit(0);
    });
}

// 직접 실행 시
const isMainModule = import.meta.url === `file://${process.argv[1].replace(/\\/g, '/')}`;
if (isMainModule) {
    main();
}
