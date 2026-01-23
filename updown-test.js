/**
 * 15분 업다운 예측 백테스트 시스템
 * - 15분마다 예측 → 15분 후 결과 검증 → 즉시 로그 저장
 * - 프로그램 재시작해도 기존 로그 유지
 */

import { AIDataCollector } from './src/data/ai-data-collector.js';
import { StrategyEngine } from './src/strategies/strategy-engine.js';
import { BinanceAPI } from './src/data/binance-api.js';
import fs from 'fs';
import path from 'path';

class UpDownTester {
    constructor(options = {}) {
        this.symbol = options.symbol || 'BTCUSDT';
        this.collector = new AIDataCollector();
        this.binance = new BinanceAPI();
        
        this.isRunning = false;
        this.timer = null;
        
        // 로그 파일 설정
        this.logDir = options.logDir || './logs';
        this.logFile = path.join(this.logDir, `updown-test-${this.getDateString()}.json`);
        this.summaryFile = path.join(this.logDir, `updown-summary-${this.getDateString()}.txt`);
        
        // 로그 디렉토리 생성
        if (!fs.existsSync(this.logDir)) {
            fs.mkdirSync(this.logDir, { recursive: true });
        }
        
        // 기존 로그 불러오기
        this.loadExistingData();
    }
    
    getDateString() {
        return new Date().toISOString().split('T')[0];
    }
    
    /**
     * 기존 로그 데이터 불러오기
     */
    loadExistingData() {
        this.predictions = [];
        this.results = [];
        
        if (fs.existsSync(this.logFile)) {
            try {
                const data = JSON.parse(fs.readFileSync(this.logFile, 'utf8'));
                this.predictions = data.pendingPredictions || [];
                this.results = data.completedResults || [];
                console.log(`📂 기존 로그 불러옴: ${this.results.length}개 결과, ${this.predictions.length}개 대기 중`);
            } catch (e) {
                console.log('📂 새 로그 파일 시작');
            }
        } else {
            console.log('📂 새 로그 파일 시작');
        }
    }
    
    /**
     * 즉시 로그 저장 (매 사이클마다 호출)
     */
    saveImmediately() {
        const data = {
            symbol: this.symbol,
            startTime: this.results[0]?.timestamp || this.predictions[0]?.timestamp || new Date().toISOString(),
            lastUpdate: new Date().toISOString(),
            stats: this.getStats(),
            pendingPredictions: this.predictions,
            completedResults: this.results
        };
        
        // JSON 저장 (동기적으로)
        fs.writeFileSync(this.logFile, JSON.stringify(data, null, 2), 'utf8');
        
        // 요약 텍스트 저장
        this.saveSummary();
    }
    
    /**
     * 요약 파일 저장
     */
    saveSummary() {
        const stats = this.getStats();
        const summary = `
═══════════════════════════════════════════════════════════
15분 업다운 테스트 결과 요약
═══════════════════════════════════════════════════════════
심볼: ${this.symbol}
최종 업데이트: ${new Date().toLocaleString('ko-KR')}

📊 전체 통계
───────────────────────────────────────────────────────────
총 예측: ${stats.total}회
정확: ${stats.correct}회
정확도: ${stats.accuracy}%

📈 방향별 정확도
───────────────────────────────────────────────────────────
UP (BUY):   ${stats.buyAccuracy}% (${stats.buyCorrect}/${stats.buyPredictions})
DOWN (SELL): ${stats.sellAccuracy}% (${stats.sellCorrect}/${stats.sellPredictions})

🎯 전략별 정확도 (Top 10)
───────────────────────────────────────────────────────────
${(stats.strategyStats || []).slice(0, 10).map(s => 
    `[${s.id.toString().padStart(2)}] ${s.name.padEnd(30)} ${s.accuracy.padStart(5)}% (${s.correct}/${s.total})`
).join('\n') || '(아직 결과 없음)'}

📋 최근 예측 기록
───────────────────────────────────────────────────────────
${this.results.slice(-10).map(r => {
    const time = new Date(r.timestamp).toLocaleTimeString('ko-KR');
    const emoji = r.correct ? '✅' : '❌';
    const dirEmoji = r.decision === 'BUY' ? '🟢' : r.decision === 'SELL' ? '🔴' : '⚪';
    const resultEmoji = r.result === 'UP' ? '📈' : r.result === 'DOWN' ? '📉' : '➡️';
    return `${emoji} ${time} ${dirEmoji}${r.decision} → ${resultEmoji}${r.result} (${r.priceChangePercent}%)`;
}).join('\n') || '(아직 결과 없음)'}
═══════════════════════════════════════════════════════════
`;
        fs.writeFileSync(this.summaryFile, summary, 'utf8');
    }
    
    /**
     * 테스터 시작
     */
    start() {
        if (this.isRunning) {
            console.log('⚠️ 테스터가 이미 실행 중입니다.');
            return;
        }
        
        this.isRunning = true;
        console.log('═'.repeat(60));
        console.log('🚀 15분 업다운 테스트 시작');
        console.log('═'.repeat(60));
        console.log(`   심볼: ${this.symbol}`);
        console.log(`   간격: 15분`);
        console.log(`   로그: ${this.logFile}`);
        console.log(`   기존 결과: ${this.results.length}개`);
        console.log('═'.repeat(60) + '\n');
        
        // 즉시 1회 실행
        this.runCycle();
        
        // 15분마다 실행
        this.timer = setInterval(() => {
            this.runCycle();
        }, 15 * 60 * 1000);
    }
    
    /**
     * 테스터 정지
     */
    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        this.isRunning = false;
        
        // 최종 저장
        this.saveImmediately();
        this.printFinalStats();
        
        console.log('\n🛑 테스터 정지');
    }
    
    /**
     * 1 사이클 실행: 이전 예측 검증 → 새 예측 생성
     */
    async runCycle() {
        const now = new Date();
        console.log(`\n${'─'.repeat(60)}`);
        console.log(`⏰ ${now.toLocaleString('ko-KR')}`);
        console.log('─'.repeat(60));
        
        try {
            // 1. 현재 가격 조회
            const currentPrice = await this.binance.getCurrentPrice(this.symbol);
            
            // 2. 이전 예측 검증 (15분 지난 것들)
            await this.verifyPredictions(currentPrice, now);
            
            // 3. 데이터 수집 및 새 예측 생성
            const data = await this.collector.collectForAI(this.symbol, '15m');
            
            if (!data || !data.indicators) {
                console.error('❌ 데이터 수집 실패');
                return;
            }
            
            const analysis = StrategyEngine.analyze(data);
            
            // 4. 예측 저장
            const prediction = {
                timestamp: now.toISOString(),
                priceAtPrediction: currentPrice,
                decision: analysis.decision,
                confidence: analysis.confidence,
                matchedStrategies: analysis.matchedStrategies.map(s => ({
                    id: s.id,
                    name: s.name,
                    direction: s.direction,
                    confidence: s.confidence
                })),
                buyCount: analysis.buyCount,
                sellCount: analysis.sellCount,
                indicators: {
                    rsi: data.indicators.rsi,
                    macdHist: data.indicators.macd?.histogram,
                    bbPosition: data.indicators.bollingerBands?.position,
                    ema20: data.indicators.ema20,
                    ema50: data.indicators.ema50
                },
                fearGreed: data.fearGreed?.value,
                result: null,
                priceAfter15m: null,
                priceChange: null,
                correct: null
            };
            
            this.predictions.push(prediction);
            
            // 5. 예측 출력
            this.printPrediction(prediction, analysis);
            
            // 6. 즉시 로그 저장!!!
            this.saveImmediately();
            console.log('💾 로그 저장 완료');
            
        } catch (error) {
            console.error('❌ 오류:', error.message);
        }
    }
    
    /**
     * 이전 예측 검증
     */
    async verifyPredictions(currentPrice, now) {
        const toVerify = [];
        const stillPending = [];
        
        for (const pred of this.predictions) {
            const predTime = new Date(pred.timestamp);
            const elapsed = (now - predTime) / 1000 / 60;
            
            if (elapsed >= 15 && pred.result === null) {
                toVerify.push(pred);
            } else if (pred.result === null) {
                stillPending.push(pred);
            }
        }
        
        for (const pred of toVerify) {
            pred.priceAfter15m = currentPrice;
            pred.priceChange = currentPrice - pred.priceAtPrediction;
            pred.priceChangePercent = ((currentPrice - pred.priceAtPrediction) / pred.priceAtPrediction * 100).toFixed(3);
            
            if (pred.priceChange > 0) {
                pred.result = 'UP';
            } else if (pred.priceChange < 0) {
                pred.result = 'DOWN';
            } else {
                pred.result = 'FLAT';
            }
            
            if (pred.decision === 'BUY' && pred.result === 'UP') {
                pred.correct = true;
            } else if (pred.decision === 'SELL' && pred.result === 'DOWN') {
                pred.correct = true;
            } else {
                pred.correct = false;
            }
            
            this.results.push(pred);
            this.printVerification(pred);
            
            // 검증 완료 즉시 저장!!!
            this.saveImmediately();
        }
        
        this.predictions = stillPending;
    }
    
    /**
     * 예측 출력
     */
    printPrediction(pred, analysis) {
        const emoji = pred.decision === 'BUY' ? '🟢' : 
                      pred.decision === 'SELL' ? '🔴' : '⚪';
        
        console.log(`\n📊 새 예측 생성`);
        console.log(`   💰 현재가: $${pred.priceAtPrediction.toLocaleString()}`);
        console.log(`   📈 Fear & Greed: ${pred.fearGreed || 'N/A'}`);
        console.log(`   📊 RSI: ${pred.indicators.rsi?.toFixed(1)}`);
        
        if (analysis.matchedStrategies.length > 0) {
            console.log(`   🎯 매칭 전략: ${analysis.matchedStrategies.map(s => `[${s.id}]`).join(', ')}`);
        }
        
        console.log(`\n   ${emoji} 예측: ${pred.decision} (신뢰도 ${pred.confidence}%)`);
        console.log(`   ⏳ 15분 후 검증 예정`);
    }
    
    /**
     * 검증 결과 출력
     */
    printVerification(pred) {
        const predEmoji = pred.decision === 'BUY' ? '🟢' : 
                         pred.decision === 'SELL' ? '🔴' : '⚪';
        const resultEmoji = pred.result === 'UP' ? '📈' : 
                           pred.result === 'DOWN' ? '📉' : '➡️';
        const correctEmoji = pred.correct ? '✅' : '❌';
        
        console.log(`\n${correctEmoji} 예측 검증 완료`);
        console.log(`   예측 시점: ${new Date(pred.timestamp).toLocaleTimeString('ko-KR')}`);
        console.log(`   ${predEmoji} 예측: ${pred.decision} (${pred.confidence}%)`);
        console.log(`   ${resultEmoji} 실제: ${pred.result} (${pred.priceChangePercent}%)`);
        console.log(`   💰 ${pred.priceAtPrediction.toFixed(0)} → ${pred.priceAfter15m.toFixed(0)} ($${pred.priceChange.toFixed(0)})`);
        
        const stats = this.getStats();
        console.log(`   📊 현재 정확도: ${stats.accuracy}% (${stats.correct}/${stats.total})`);
    }
    
    /**
     * 통계 계산
     */
    getStats() {
        const total = this.results.length;
        if (total === 0) {
            return { 
                total: 0, correct: 0, accuracy: '0',
                buyPredictions: 0, buyCorrect: 0, buyAccuracy: 'N/A',
                sellPredictions: 0, sellCorrect: 0, sellAccuracy: 'N/A',
                strategyStats: []
            };
        }
        
        const correct = this.results.filter(r => r.correct).length;
        const accuracy = ((correct / total) * 100).toFixed(1);
        
        const buyPredictions = this.results.filter(r => r.decision === 'BUY');
        const buyCorrect = buyPredictions.filter(r => r.correct).length;
        const buyAccuracy = buyPredictions.length > 0 
            ? ((buyCorrect / buyPredictions.length) * 100).toFixed(1) : 'N/A';
        
        const sellPredictions = this.results.filter(r => r.decision === 'SELL');
        const sellCorrect = sellPredictions.filter(r => r.correct).length;
        const sellAccuracy = sellPredictions.length > 0 
            ? ((sellCorrect / sellPredictions.length) * 100).toFixed(1) : 'N/A';
        

        
        const strategyStats = {};
        for (const result of this.results) {
            for (const s of result.matchedStrategies) {
                if (!strategyStats[s.id]) {
                    strategyStats[s.id] = { id: s.id, name: s.name, total: 0, correct: 0 };
                }
                strategyStats[s.id].total++;
                if (result.correct) strategyStats[s.id].correct++;
            }
        }
        
        for (const key in strategyStats) {
            const s = strategyStats[key];
            s.accuracy = ((s.correct / s.total) * 100).toFixed(1);
        }
        
        return {
            total, correct, accuracy,
            buyPredictions: buyPredictions.length, buyCorrect, buyAccuracy,
            sellPredictions: sellPredictions.length, sellCorrect, sellAccuracy,
            strategyStats: Object.values(strategyStats).sort((a, b) => b.total - a.total)
        };
    }
    
    /**
     * 최종 통계 출력
     */
    printFinalStats() {
        const stats = this.getStats();
        
        console.log('\n' + '═'.repeat(60));
        console.log('📊 최종 통계');
        console.log('═'.repeat(60));
        console.log(`\n총 예측: ${stats.total}회`);
        console.log(`정확: ${stats.correct}회`);
        console.log(`정확도: ${stats.accuracy}%`);
        
        console.log(`\n📈 방향별 정확도:`);
        console.log(`   BUY:  ${stats.buyAccuracy}% (${stats.buyCorrect}/${stats.buyPredictions})`);
        console.log(`   SELL: ${stats.sellAccuracy}% (${stats.sellCorrect}/${stats.sellPredictions})`);
        console.log(`   HOLD: ${stats.holdAccuracy}% (${stats.holdCorrect}/${stats.holdPredictions})`);
        
        if (stats.strategyStats && stats.strategyStats.length > 0) {
            console.log(`\n🎯 전략별 정확도:`);
            for (const s of stats.strategyStats.slice(0, 10)) {
                console.log(`   [${s.id}] ${s.name}: ${s.accuracy}% (${s.correct}/${s.total})`);
            }
        }
        console.log('═'.repeat(60));
    }
}

// ═══════════════════════════════════════════════════════════════
// 메인 실행
// ═══════════════════════════════════════════════════════════════

async function main() {
    const tester = new UpDownTester({
        symbol: 'BTCUSDT',
        logDir: './logs'
    });
    
    tester.start();
    
    // Ctrl+C 처리
    process.on('SIGINT', () => {
        tester.stop();
        process.exit(0);
    });
    
    // 예상치 못한 종료 시에도 저장
    process.on('uncaughtException', (err) => {
        console.error('❌ 예상치 못한 오류:', err);
        tester.saveImmediately();
        process.exit(1);
    });
    
    process.on('unhandledRejection', (err) => {
        console.error('❌ 처리되지 않은 프로미스:', err);
        tester.saveImmediately();
    });
}

main();
