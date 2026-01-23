#!/usr/bin/env node

import { TradingStrategy } from './src/strategy/trading-strategy.js';
import { BinanceAPI } from './src/data/binance-api.js';
import { promises as fs } from 'fs';
import path from 'path';

/**
 * 15분 간격 정확도 테스트
 */
class AccuracyTester {
    constructor() {
        this.strategy = new TradingStrategy();
        this.binance = new BinanceAPI();
        this.predictions = [];
        this.results = [];
        this.testInterval = 15 * 60 * 1000; // 15분 (밀리초)
        this.symbol = 'BTCUSDT';
        this.resultsDir = 'results';
    }

    /**
     * 예측 기록
     */
    async recordPrediction() {
        try {
            console.log('\n' + '='.repeat(60));
            console.log(`🔮 예측 기록 중... (${new Date().toLocaleString('ko-KR')})`);
            console.log('='.repeat(60));

            // 현재 가격
            const currentPrice = await this.binance.getCurrentPrice(this.symbol);
            
            // 전략 분석 (상세 출력 억제)
            const originalLog = console.log;
            const logs = [];
            console.log = (...args) => logs.push(args.join(' '));
            
            const analysis = await this.strategy.analyze(this.symbol, '15m', 50);
            
            console.log = originalLog;

            const prediction = {
                timestamp: new Date(),
                price: currentPrice,
                decision: analysis.finalDecision.decision,
                confidence: analysis.aiDecision.confidence,
                rsi: analysis.indicators.rsi,
                macd: analysis.indicators.macd.histogram,
                bollingerPosition: analysis.indicators.bollingerBands.position,
                trend: analysis.signals.trend,
                fearGreed: analysis.fearGreed?.value,
                signals: {
                    rsi: analysis.signals.rsi,
                    macd: analysis.signals.macd,
                    bb: analysis.signals.bollingerBands,
                    overall: analysis.signals.overall
                }
            };

            this.predictions.push(prediction);

            console.log(`\n💰 현재 가격: $${currentPrice.toFixed(2)}`);
            console.log(`📊 RSI: ${prediction.rsi.toFixed(2)} | MACD: ${prediction.macd.toFixed(4)}`);
            console.log(`😱 Fear & Greed: ${prediction.fearGreed}/100`);
            console.log(`🎯 예측 결정: ${prediction.decision} (신뢰도: ${prediction.confidence}%)`);
            console.log(`\n⏳ 15분 후 결과 확인 대기중...\n`);

            return prediction;

        } catch (error) {
            console.error('❌ 예측 기록 오류:', error.message);
            return null;
        }
    }

    /**
     * 결과 검증
     */
    async verifyPrediction(prediction) {
        try {
            const actualPrice = await this.binance.getCurrentPrice(this.symbol);
            const priceChange = actualPrice - prediction.price;
            const priceChangePercent = (priceChange / prediction.price) * 100;

            // 실제 방향 (단순: 올랐으면 BUY, 내렸으면 SELL)
            const actualDirection = priceChangePercent >= 0 ? 'BUY' : 'SELL';

            // 정확도 판단
            const isCorrect = prediction.decision === actualDirection;

            const result = {
                predictionTime: prediction.timestamp,
                verificationTime: new Date(),
                predictedPrice: prediction.price,
                actualPrice: actualPrice,
                priceChange: priceChange,
                priceChangePercent: priceChangePercent,
                predictedDecision: prediction.decision,
                actualDirection: actualDirection,
                isCorrect: isCorrect,
                confidence: prediction.confidence,
                indicators: {
                    rsi: prediction.rsi,
                    macd: prediction.macd,
                    fearGreed: prediction.fearGreed
                }
            };

            this.results.push(result);

            console.log('\n' + '='.repeat(60));
            console.log(`✅ 결과 검증 완료 (${new Date().toLocaleString('ko-KR')})`);
            console.log('='.repeat(60));
            console.log(`\n📈 예측: ${prediction.decision} → 실제: ${actualDirection}`);
            console.log(`💵 가격 변화: $${prediction.price.toFixed(2)} → $${actualPrice.toFixed(2)} (${priceChangePercent >= 0 ? '+' : ''}${priceChangePercent.toFixed(3)}%)`);
            console.log(`${isCorrect ? '✅ 정확' : '❌ 오답'} (신뢰도: ${prediction.confidence}%)`);

            return result;

        } catch (error) {
            console.error('❌ 결과 검증 오류:', error.message);
            return null;
        }
    }

    /**
     * 통계 계산 및 출력
     */
    printStatistics() {
        if (this.results.length === 0) {
            console.log('\n⚠️  아직 검증된 결과가 없습니다.\n');
            return;
        }

        const correct = this.results.filter(r => r.isCorrect).length;
        const total = this.results.length;
        const accuracy = (correct / total) * 100;

        // 방향별 정확도
        const buyPredictions = this.results.filter(r => r.predictedDecision === 'BUY');
        const sellPredictions = this.results.filter(r => r.predictedDecision === 'SELL');

        const buyAccuracy = buyPredictions.length > 0 
            ? (buyPredictions.filter(r => r.isCorrect).length / buyPredictions.length) * 100 
            : 0;
        const sellAccuracy = sellPredictions.length > 0 
            ? (sellPredictions.filter(r => r.isCorrect).length / sellPredictions.length) * 100 
            : 0;

        // 평균 가격 변화
        const avgPriceChange = this.results.reduce((sum, r) => sum + r.priceChangePercent, 0) / total;

        console.log('\n' + '='.repeat(60));
        console.log('📊 정확도 통계');
        console.log('='.repeat(60));
        console.log(`\n🎯 전체 정확도: ${correct}/${total} (${accuracy.toFixed(2)}%)`);
        console.log(`\n📈 방향별 정확도:`);
        console.log(`  - BUY:  ${buyPredictions.filter(r => r.isCorrect).length}/${buyPredictions.length} (${buyAccuracy.toFixed(2)}%)`);
        console.log(`  - SELL: ${sellPredictions.filter(r => r.isCorrect).length}/${sellPredictions.length} (${sellAccuracy.toFixed(2)}%)`);
        console.log(`  - 예측 비율: BUY ${buyPredictions.length}회, SELL ${sellPredictions.length}회`);
        console.log(`\n💹 평균 가격 변화: ${avgPriceChange >= 0 ? '+' : ''}${avgPriceChange.toFixed(3)}%`);
        console.log('\n' + '='.repeat(60) + '\n');
    }

    /**
     * 결과 저장
     */
    async saveResults() {
        try {
            // results 디렉토리 생성
            try {
                await fs.mkdir(this.resultsDir, { recursive: true });
            } catch (e) {}

            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const filename = path.join(this.resultsDir, `accuracy-test-${timestamp}.json`);

            const data = {
                testInfo: {
                    symbol: this.symbol,
                    interval: '15m',
                    startTime: this.predictions[0]?.timestamp,
                    endTime: new Date(),
                    totalPredictions: this.predictions.length,
                    totalResults: this.results.length
                },
                predictions: this.predictions,
                results: this.results,
                statistics: this.calculateStatistics()
            };

            await fs.writeFile(filename, JSON.stringify(data, null, 2));
            console.log(`💾 결과 저장 완료: ${filename}\n`);

        } catch (error) {
            console.error('❌ 결과 저장 오류:', error.message);
        }
    }

    /**
     * 통계 계산
     */
    calculateStatistics() {
        if (this.results.length === 0) return null;

        const correct = this.results.filter(r => r.isCorrect).length;
        const total = this.results.length;

        return {
            totalTests: total,
            correctPredictions: correct,
            accuracy: (correct / total) * 100,
            byDecision: {
                buy: this.getDecisionStats('BUY'),
                sell: this.getDecisionStats('SELL')
            },
            averagePriceChange: this.results.reduce((sum, r) => sum + r.priceChangePercent, 0) / total,
            averageConfidence: this.results.reduce((sum, r) => sum + r.confidence, 0) / total
        };
    }

    /**
     * 결정별 통계
     */
    getDecisionStats(decision) {
        const filtered = this.results.filter(r => r.predictedDecision === decision);
        if (filtered.length === 0) return { count: 0, correct: 0, accuracy: 0 };

        const correct = filtered.filter(r => r.isCorrect).length;
        return {
            count: filtered.length,
            correct: correct,
            accuracy: (correct / filtered.length) * 100
        };
    }

    /**
     * 테스트 시작
     */
    async start(maxIterations = 10) {
        console.log('🚀 15분 간격 정확도 테스트 시작');
        console.log(`📊 심볼: ${this.symbol}`);
        console.log(`⏱️  간격: 15분`);
        console.log(`🔄 최대 반복: ${maxIterations}회\n`);

        let iteration = 0;

        while (iteration < maxIterations) {
            console.log(`\n${'*'.repeat(60)}`);
            console.log(`반복 ${iteration + 1}/${maxIterations}`);
            console.log('*'.repeat(60));

            // 1. 예측 기록
            const prediction = await this.recordPrediction();
            
            if (!prediction) {
                console.log('⚠️  예측 기록 실패, 1분 후 재시도...\n');
                await this.sleep(60 * 1000);
                continue;
            }

            // 2. 15분 대기 (진행 표시)
            console.log('⏳ 15분 대기 중...');
            const intervals = 15;
            for (let i = 0; i < intervals; i++) {
                await this.sleep(60 * 1000); // 1분마다
                const remaining = intervals - i - 1;
                process.stdout.write(`\r   ${remaining}분 남음...`);
            }
            console.log('\r   ✅ 대기 완료!     \n');

            // 3. 결과 검증 (이전 예측)
            if (this.predictions.length > 1) {
                const prevPrediction = this.predictions[this.predictions.length - 2];
                await this.verifyPrediction(prevPrediction);
                this.printStatistics();
            }

            iteration++;
        }

        // 마지막 예측 검증
        if (this.predictions.length > 0) {
            console.log('\n⏳ 마지막 예측 검증을 위해 15분 대기...\n');
            await this.sleep(this.testInterval);
            const lastPrediction = this.predictions[this.predictions.length - 1];
            await this.verifyPrediction(lastPrediction);
        }

        // 최종 통계
        console.log('\n' + '🎉'.repeat(20));
        console.log('테스트 완료!');
        console.log('🎉'.repeat(20));
        this.printStatistics();

        // 결과 저장
        await this.saveResults();
    }

    /**
     * 대기
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// 실행
const args = process.argv.slice(2);
const maxIterations = parseInt(args[0]) || 10;

const tester = new AccuracyTester();
tester.start(maxIterations).catch(error => {
    console.error('❌ 테스트 오류:', error);
    process.exit(1);
});
