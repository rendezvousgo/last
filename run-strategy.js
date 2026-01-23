/**
 * 전략 시스템 테스트 실행
 * 1회 분석 또는 스케줄러 시작
 */

import { AIDataCollector } from './src/data/ai-data-collector.js';
import { StrategyEngine } from './src/strategies/strategy-engine.js';
import { StrategyScheduler } from './src/strategies/strategy-scheduler.js';

async function runOnce() {
    console.log('🔍 1회 분석 실행\n');
    
    const collector = new AIDataCollector();
    const data = await collector.collectForAI('BTCUSDT', '15m');
    const result = StrategyEngine.analyze(data);
    
    console.log('═'.repeat(60));
    console.log('📊 분석 결과');
    console.log('═'.repeat(60));
    
    console.log(`\n💰 현재가: $${data.currentPrice?.toLocaleString()}`);
    console.log(`📈 Fear & Greed: ${data.fearGreed?.value || 'N/A'}`);
    
    console.log(`\n📊 지표:`);
    console.log(`   RSI: ${data.indicators.rsi?.toFixed(1)}`);
    console.log(`   MACD Hist: ${data.indicators.macd?.histogram?.toFixed(2)}`);
    console.log(`   BB Position: ${data.indicators.bollingerBands?.position?.toFixed(1)}%`);
    console.log(`   BB Squeeze: ${data.indicators.bollingerBands?.squeeze?.toFixed(1)}%`);
    console.log(`   EMA20: ${data.indicators.ema20?.toFixed(0)}`);
    console.log(`   EMA50: ${data.indicators.ema50?.toFixed(0)}`);
    console.log(`   거래량 급증: ${data.volumeProfile?.surge ? '예' : '아니오'}`);
    
    console.log(`\n🎯 매칭 전략 (${result.matchedStrategies.length}개):`);
    
    if (result.buyStrategies.length > 0) {
        console.log(`\n   🟢 BUY:`);
        result.buyStrategies.forEach(s => {
            console.log(`      [${s.id}] ${s.name} (${s.confidence}%)`);
        });
    }
    
    if (result.sellStrategies.length > 0) {
        console.log(`\n   🔴 SELL:`);
        result.sellStrategies.forEach(s => {
            console.log(`      [${s.id}] ${s.name} (${s.confidence}%)`);
        });
    }
    
    const emoji = result.decision === 'BUY' ? '🟢' : 
                  result.decision === 'SELL' ? '🔴' : '⚪';
    
    console.log(`\n${'─'.repeat(60)}`);
    console.log(`${emoji} 최종: ${result.decision} (신뢰도 ${result.confidence}%)`);
    console.log(`💬 ${result.reason}`);
    console.log('─'.repeat(60));
    
    return result;
}

async function runScheduler() {
    console.log('🚀 15분 스케줄러 시작\n');
    
    const scheduler = new StrategyScheduler({
        symbol: 'BTCUSDT'
    });
    
    scheduler.start();
    
    // Ctrl+C 처리
    process.on('SIGINT', () => {
        console.log('\n\n📊 통계:');
        console.log(JSON.stringify(scheduler.getStats(), null, 2));
        scheduler.stop();
        process.exit(0);
    });
}

// 실행
const args = process.argv.slice(2);

if (args.includes('--schedule') || args.includes('-s')) {
    runScheduler();
} else {
    runOnce().then(() => process.exit(0));
}
