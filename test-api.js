#!/usr/bin/env node

import { BinanceAPI } from './src/data/binance-api.js';
import { FearGreedAPI } from './src/data/fear-greed-api.js';

async function testAPIs() {
    console.log('🧪 API 테스트 시작\n');

    // Binance API 테스트
    console.log('1️⃣ Binance API 테스트...');
    const binance = new BinanceAPI();
    
    try {
        console.log('  - getCurrentPrice 호출 중...');
        const price = await binance.getCurrentPrice('BTCUSDT');
        console.log(`  ✅ 현재 가격: $${price.toFixed(2)}`);
    } catch (error) {
        console.error(`  ❌ 오류:`, error.message);
    }

    try {
        console.log('  - get24hrStats 호출 중...');
        const stats = await binance.get24hrStats('BTCUSDT');
        console.log(`  ✅ 24시간 변동: ${stats.priceChangePercent}%`);
    } catch (error) {
        console.error(`  ❌ 오류:`, error.message);
    }

    try {
        console.log('  - getKlines 호출 중 (10개만)...');
        const klines = await binance.getKlines('BTCUSDT', '1h', 10);
        console.log(`  ✅ 캔들 데이터: ${klines.length}개 수신`);
    } catch (error) {
        console.error(`  ❌ 오류:`, error.message);
    }

    // Fear & Greed API 테스트
    console.log('\n2️⃣ Fear & Greed API 테스트...');
    const fearGreed = new FearGreedAPI();
    
    try {
        console.log('  - getCurrent 호출 중...');
        const data = await fearGreed.getCurrent();
        console.log(`  ✅ Fear & Greed: ${data.value}/100 (${data.classification})`);
    } catch (error) {
        console.error(`  ❌ 오류:`, error.message);
    }

    console.log('\n✅ API 테스트 완료!');
}

testAPIs().catch(error => {
    console.error('❌ 테스트 실패:', error);
    process.exit(1);
});
