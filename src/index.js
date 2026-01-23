#!/usr/bin/env node

import { TradingStrategy } from './strategy/trading-strategy.js';
import dotenv from 'dotenv';

dotenv.config();

/**
 * 메인 실행 함수
 */
async function main() {
    console.log('🚀 AI 트레이딩 봇 시작\n');

    // OpenAI 키 확인
    if (!process.env.OPENAI_API_KEY) {
        console.log('⚠️  경고: OPENAI_API_KEY가 설정되지 않았습니다.');
        console.log('   .env 파일에 API 키를 추가하면 AI 분석을 사용할 수 있습니다.');
        console.log('   현재는 기술적 지표 기반으로만 분석합니다.\n');
    }

    const strategy = new TradingStrategy();

    // 명령줄 인자 파싱
    const args = process.argv.slice(2);
    const symbol = args[0] || 'BTCUSDT';
    const interval = args[1] || '1h';

    try {
        // 다중 코인 분석
        if (args[0] === '--multiple') {
            const symbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'SOLUSDT'];
            console.log(`📊 ${symbols.length}개 코인 분석 시작...\n`);
            
            const results = await strategy.analyzeMultiple(symbols, interval);
            
            // 요약 출력
            console.log('\n' + '='.repeat(60));
            console.log('📋 요약');
            console.log('='.repeat(60));
            
            results.forEach(result => {
                const emoji = result.finalDecision.decision === 'BUY' ? '🟢' : 
                             result.finalDecision.decision === 'SELL' ? '🔴' : '🟡';
                console.log(`${emoji} ${result.symbol}: ${result.finalDecision.decision} (신뢰도: ${result.aiDecision.confidence}%)`);
            });
            
            console.log('='.repeat(60) + '\n');
        }
        // 단일 코인 분석 (기본)
        else {
            await strategy.analyze(symbol, interval);
        }

    } catch (error) {
        console.error('❌ 오류 발생:', error.message);
        process.exit(1);
    }
}

// 실행
main();
