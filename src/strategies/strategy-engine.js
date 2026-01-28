/**
 * ?�략 ?�진 메인
 * UP (1-5000) / DOWN (5001-10000) ?�략 ?�합 ?�행
 */

import { StrategiesUp } from './strategies-up.js';
import { StrategiesUp026 } from './strategies-up-026-100.js';
import { StrategiesUp101 } from './strategies-up-101-300.js';
import { StrategiesUp301 } from './strategies-up-301-400.js';
import { StrategiesUp401 } from './strategies-up-401-500.js';
import { StrategiesUp501 } from './strategies-up-501-700.js';
import { StrategiesUp701 } from './strategies-up-701-900.js';
import { StrategiesUp901 } from './strategies-up-901-1000.js';
import { StrategiesUp1001 } from './strategies-up-1001-1200.js';
import { StrategiesUp1201 } from './strategies-up-1201-1400.js';
import { StrategiesUp1401 } from './strategies-up-1401-1600.js';
import { StrategiesUp1601 } from './strategies-up-1601-1800.js';
import { StrategiesUp1801 } from './strategies-up-1801-2000.js';
import { StrategiesUp2001 } from './strategies-up-2001-2200.js';
import { StrategiesUp2201 } from './strategies-up-2201-2400.js';
import { StrategiesUp2401 } from './strategies-up-2401-2600.js';
import { StrategiesUp2601 } from './strategies-up-2601-2800.js';
import { StrategiesUp2801 } from './strategies-up-2801-3000.js';
import { StrategiesUp3001 } from './strategies-up-3001-3200.js';
import { StrategiesUp3201 } from './strategies-up-3201-3400.js';
import { StrategiesUp3401 } from './strategies-up-3401-3600.js';
import { StrategiesUp3601 } from './strategies-up-3601-3800.js';
import { StrategiesUp3801 } from './strategies-up-3801-4000.js';
import { StrategiesUp4001 } from './strategies-up-4001-4200.js';
import { StrategiesUp4201 } from './strategies-up-4201-4400.js';
import { StrategiesUp4401 } from './strategies-up-4401-4600.js';
import { StrategiesUp4601 } from './strategies-up-4601-4800.js';
import { StrategiesUp4801 } from './strategies-up-4801-5000.js';

import { StrategiesDown } from './strategies-down.js';
import { StrategiesDown5026 } from './strategies-down-5026-5100.js';
import { StrategiesDown5101 } from './strategies-down-5101-5300.js';
import { StrategiesDown5301 } from './strategies-down-5301-5400.js';
import { StrategiesDown5401 } from './strategies-down-5401-5500.js';
import { StrategiesDown5501 } from './strategies-down-5501-5700.js';
import { StrategiesDown5701 } from './strategies-down-5701-5900.js';
import { StrategiesDown5901 } from './strategies-down-5901-6000.js';
import { StrategiesDown6001 } from './strategies-down-6001-6200.js';
import { StrategiesDown6201 } from './strategies-down-6201-6400.js';
import { StrategiesDown6401 } from './strategies-down-6401-6600.js';
import { StrategiesDown6601 } from './strategies-down-6601-6800.js';
import { StrategiesDown6801 } from './strategies-down-6801-7000.js';
import { StrategiesDown7001 } from './strategies-down-7001-7200.js';
import { StrategiesDown7201 } from './strategies-down-7201-7400.js';
import { StrategiesDown7401 } from './strategies-down-7401-7600.js';
import { StrategiesDown7601 } from './strategies-down-7601-7800.js';
import { StrategiesDown7801 } from './strategies-down-7801-8000.js';
import { StrategiesDown8001 } from './strategies-down-8001-8200.js';
import { StrategiesDown8201 } from './strategies-down-8201-8400.js';
import { StrategiesDown8401 } from './strategies-down-8401-8600.js';
import { StrategiesDown8601 } from './strategies-down-8601-8800.js';
import { StrategiesDown8801 } from './strategies-down-8801-9000.js';
import { StrategiesDown9001 } from './strategies-down-9001-9200.js';
import { StrategiesDown9201 } from './strategies-down-9201-9400.js';
import { StrategiesDown9401 } from './strategies-down-9401-9600.js';
import { StrategiesDown9601 } from './strategies-down-9601-9800.js';
import { StrategiesDown9801 } from './strategies-down-9801-10000.js';

export class StrategyEngine {
    
    /**
     * 모든 ?�략 분석 ?�행
     * @param {Object} data - AIDataCollector.collectForAI() 결과
     * @returns {Object} 분석 결과
     */
    static analyze(data) {
        const { indicators, volumeProfile, fearGreed, prevFearGreed } = data;
        
        // indicators??추�? ?�성 병합
        const fgValue = fearGreed?.value || fearGreed || 50;
        const prevFgValue = prevFearGreed?.value || prevFearGreed || null;
        const ind = { 
            ...indicators, 
            close: indicators.price,
            fearGreed: fgValue,
            fearGreedIndex: fgValue,
            prevFearGreed: prevFgValue,  // null이면 전략에서 현재값 사용
            volumeProfile: volumeProfile
        };
        
        // UP ?�략 ?�행 (ID 1-5000)
        const upStrategies = [
            ...StrategiesUp.analyzeAll(ind),      // 1-25
            ...StrategiesUp026.analyzeAll(ind),                             // 26-100
            ...StrategiesUp101.analyzeAll(ind),                              // 101-300
            ...StrategiesUp301.analyzeAll(ind),                              // 301-400
            ...StrategiesUp401.analyzeAll(ind),                              // 401-500
            ...StrategiesUp501.analyzeAll(ind),                              // 501-700
            ...StrategiesUp701.analyzeAll(ind),                              // 701-900
            ...StrategiesUp901.analyzeAll(ind),                              // 901-1000
            ...StrategiesUp1001.analyzeAll(ind),                             // 1001-1200
            ...StrategiesUp1201.analyzeAll(ind),                             // 1201-1400
            ...StrategiesUp1401.analyzeAll(ind),                             // 1401-1600
            ...StrategiesUp1601.analyzeAll(ind),                             // 1601-1800
            ...StrategiesUp1801.analyzeAll(ind),                             // 1801-2000
            ...StrategiesUp2001.analyzeAll(ind),                             // 2001-2200
            ...StrategiesUp2201.analyzeAll(ind),                             // 2201-2400
            ...StrategiesUp2401.analyzeAll(ind),                             // 2401-2600
            ...StrategiesUp2601.analyzeAll(ind),                             // 2601-2800
            ...StrategiesUp2801.analyzeAll(ind),                             // 2801-3000
            ...StrategiesUp3001.analyzeAll(ind),                             // 3001-3200
            ...StrategiesUp3201.analyzeAll(ind),                             // 3201-3400
            ...StrategiesUp3401.analyzeAll(ind),                             // 3401-3600
            ...StrategiesUp3601.analyzeAll(ind),                             // 3601-3800
            ...StrategiesUp3801.analyzeAll(ind),                             // 3801-4000
            ...StrategiesUp4001.analyzeAll(ind),                             // 4001-4200
            ...StrategiesUp4201.analyzeAll(ind),                             // 4201-4400
            ...StrategiesUp4401.analyzeAll(ind),                             // 4401-4600
            ...StrategiesUp4601.analyzeAll(ind),                             // 4601-4800
            ...StrategiesUp4801.analyzeAll(ind),                             // 4801-5000
        ];
        
        // DOWN ?�략 ?�행 (ID 5001-10000)
        const downStrategies = [
            ...StrategiesDown.analyzeAll(ind),  // 5001-5025
            ...StrategiesDown5026.analyzeAll(ind),                          // 5026-5100
            ...StrategiesDown5101.analyzeAll(ind),                          // 5101-5300
            ...StrategiesDown5301.analyzeAll(ind),                          // 5301-5400
            ...StrategiesDown5401.analyzeAll(ind),                          // 5401-5500
            ...StrategiesDown5501.analyzeAll(ind),                          // 5501-5700
            ...StrategiesDown5701.analyzeAll(ind),                          // 5701-5900
            ...StrategiesDown5901.analyzeAll(ind),                          // 5901-6000
            ...StrategiesDown6001.analyzeAll(ind),                         // 6001-6200
            ...StrategiesDown6201.analyzeAll(ind),                         // 6201-6400
            ...StrategiesDown6401.analyzeAll(ind),                         // 6401-6600
            ...StrategiesDown6601.analyzeAll(ind),                         // 6601-6800
            ...StrategiesDown6801.analyzeAll(ind),                         // 6801-7000
            ...StrategiesDown7001.analyzeAll(ind),                         // 7001-7200
            ...StrategiesDown7201.analyzeAll(ind),                         // 7201-7400
            ...StrategiesDown7401.analyzeAll(ind),                         // 7401-7600
            ...StrategiesDown7601.analyzeAll(ind),                         // 7601-7800
            ...StrategiesDown7801.analyzeAll(ind),                         // 7801-8000
            ...StrategiesDown8001.analyzeAll(ind),                         // 8001-8200
            ...StrategiesDown8201.analyzeAll(ind),                         // 8201-8400
            ...StrategiesDown8401.analyzeAll(ind),                         // 8401-8600
            ...StrategiesDown8601.analyzeAll(ind),                         // 8601-8800
            ...StrategiesDown8801.analyzeAll(ind),                         // 8801-9000
            ...StrategiesDown9001.analyzeAll(ind),                         // 9001-9200
            ...StrategiesDown9201.analyzeAll(ind),                         // 9201-9400
            ...StrategiesDown9401.analyzeAll(ind),                         // 9401-9600
            ...StrategiesDown9601.analyzeAll(ind),                         // 9601-9800
            ...StrategiesDown9801.analyzeAll(ind),                         // 9801-10000
        ];
        
        // 매칭???�략 ?�터�?
        const matchedUp = upStrategies.filter(s => s.match);
        const matchedDown = downStrategies.filter(s => s.match);
        
        // 최종 결정
        return this.makeDecision(matchedUp, matchedDown, indicators);
    }
    
    /**
     * 최종 방향 결정
     */
    static makeDecision(matchedUp, matchedDown, indicators) {
        const upCount = matchedUp.length;
        const downCount = matchedDown.length;
        
        // ?�균 confidence 계산
        const avgUpConf = upCount > 0 
            ? matchedUp.reduce((sum, s) => sum + s.confidence, 0) / upCount 
            : 0;
        const avgDownConf = downCount > 0 
            ? matchedDown.reduce((sum, s) => sum + s.confidence, 0) / downCount 
            : 0;
        
        // 최고 confidence ?�략
        const bestUp = matchedUp.length > 0 
            ? matchedUp.reduce((best, s) => s.confidence > best.confidence ? s : best) 
            : null;
        const bestDown = matchedDown.length > 0 
            ? matchedDown.reduce((best, s) => s.confidence > best.confidence ? s : best) 
            : null;
        
        // 방향 결정 로직
        let direction = 'NEUTRAL';
        let confidence = 50;
        let reason = '';
        
        if (upCount === 0 && downCount === 0) {
            direction = 'NEUTRAL';
            confidence = 50;
            reason = 'No strategy matched';
        } else if (upCount > 0 && downCount === 0) {
            direction = 'UP';
            confidence = avgUpConf;
            reason = `${upCount} UP strategies matched`;
        } else if (downCount > 0 && upCount === 0) {
            direction = 'DOWN';
            confidence = avgDownConf;
            reason = `${downCount} DOWN strategies matched`;
        } else {
            // ?�쪽 ??매칭??경우 - ??강한 �??�택
            const upScore = upCount * avgUpConf;
            const downScore = downCount * avgDownConf;
            
            if (upScore > downScore * 1.2) {
                direction = 'UP';
                confidence = avgUpConf;
                reason = `UP stronger (${upCount} vs ${downCount})`;
            } else if (downScore > upScore * 1.2) {
                direction = 'DOWN';
                confidence = avgDownConf;
                reason = `DOWN stronger (${downCount} vs ${upCount})`;
            } else {
                direction = 'NEUTRAL';
                confidence = 50;
                reason = `Conflicting signals (UP:${upCount} vs DOWN:${downCount})`;
            }
        }
        
        return {
            direction,
            confidence: Math.round(confidence),
            reason,
            matchedUp,
            matchedDown,
            bestUp,
            bestDown,
            summary: {
                upCount,
                downCount,
                avgUpConf: Math.round(avgUpConf),
                avgDownConf: Math.round(avgDownConf)
            },
            indicators: {
                rsi: indicators.rsi,
                macd: indicators.macd?.histogram,
                bbPosition: indicators.bollingerBands?.position,
                emaGolden: indicators.ema20 > indicators.ema50
            }
        };
    }
}

