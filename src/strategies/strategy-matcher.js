/**
 * 전략 매칭 시스템
 * 현재 지표 상태를 기반으로 적합한 전략 문서를 선택
 */

export class StrategyMatcher {
    
    /**
     * 모든 전략 체크 후 매칭되는 것들 반환
     * @param {Object} indicators - TechnicalIndicators.calculateAll() 결과
     * @param {Object} signals - TechnicalIndicators.generateSignals() 결과
     * @param {Object} volumeProfile - 거래량 분석 데이터
     * @param {Object} fearGreed - 공포탐욕지수 데이터
     * @returns {Array} 매칭된 전략 목록
     */
    static matchStrategies(indicators, signals, volumeProfile, fearGreed) {
        const matched = [];
        
        // ===== 상승 예측 전략 (1-10) =====
        
        // 전략 1: RSI 과매도 + MACD 골든크로스
        const s1 = this.checkStrategy01(indicators, signals);
        if (s1.match) matched.push({ id: 1, ...s1 });
        
        // 전략 2: 볼린저 하단 터치 + 거래량 급증
        const s2 = this.checkStrategy02(indicators, volumeProfile);
        if (s2.match) matched.push({ id: 2, ...s2 });
        
        // 전략 3: EMA 골든 크로스 + RSI 중립
        const s3 = this.checkStrategy03(indicators, signals);
        if (s3.match) matched.push({ id: 3, ...s3 });
        
        // 전략 4: MACD 0선 골든크로스
        const s4 = this.checkStrategy04(indicators);
        if (s4.match) matched.push({ id: 4, ...s4 });
        
        // 전략 5: RSI 강세 다이버전스 (별도 구현 필요)
        // const s5 = this.checkStrategy05(indicators);
        // if (s5.match) matched.push({ id: 5, ...s5 });
        
        // 전략 6: 3중 지표 매수 합의
        const s6 = this.checkStrategy06(signals);
        if (s6.match) matched.push({ id: 6, ...s6 });
        
        // 전략 7: 공포 과열 + RSI 과매도
        const s7 = this.checkStrategy07(indicators, fearGreed);
        if (s7.match) matched.push({ id: 7, ...s7 });
        
        // 전략 8: 볼린저 Squeeze 상향 돌파
        const s8 = this.checkStrategy08(indicators, signals);
        if (s8.match) matched.push({ id: 8, ...s8 });
        
        // 전략 9: EMA 재확인 + RSI 상승
        const s9 = this.checkStrategy09(indicators, signals);
        if (s9.match) matched.push({ id: 9, ...s9 });
        
        // 전략 10: MACD + RSI 동시 상승 전환
        const s10 = this.checkStrategy10(indicators, signals);
        if (s10.match) matched.push({ id: 10, ...s10 });
        
        // ===== 하락 예측 전략 (11-20) =====
        
        // 전략 11: RSI 과매수 + MACD 데드크로스
        const s11 = this.checkStrategy11(indicators, signals);
        if (s11.match) matched.push({ id: 11, ...s11 });
        
        // 전략 12: 볼린저 상단 터치 + 거래량 급증
        const s12 = this.checkStrategy12(indicators, volumeProfile);
        if (s12.match) matched.push({ id: 12, ...s12 });
        
        // 전략 13: EMA 데드 크로스 + RSI 중립
        const s13 = this.checkStrategy13(indicators, signals);
        if (s13.match) matched.push({ id: 13, ...s13 });
        
        // 전략 14: MACD 0선 데드크로스
        const s14 = this.checkStrategy14(indicators);
        if (s14.match) matched.push({ id: 14, ...s14 });
        
        // 전략 15: RSI 약세 다이버전스 (별도 구현 필요)
        // const s15 = this.checkStrategy15(indicators);
        // if (s15.match) matched.push({ id: 15, ...s15 });
        
        // 전략 16: 3중 지표 매도 합의
        const s16 = this.checkStrategy16(signals);
        if (s16.match) matched.push({ id: 16, ...s16 });
        
        // 전략 17: 탐욕 과열 + RSI 과매수
        const s17 = this.checkStrategy17(indicators, fearGreed);
        if (s17.match) matched.push({ id: 17, ...s17 });
        
        // 전략 18: 볼린저 Squeeze 하향 돌파
        const s18 = this.checkStrategy18(indicators, signals);
        if (s18.match) matched.push({ id: 18, ...s18 });
        
        // 전략 19: EMA 재확인 + RSI 하락
        const s19 = this.checkStrategy19(indicators, signals);
        if (s19.match) matched.push({ id: 19, ...s19 });
        
        // 전략 20: MACD + RSI 동시 하락 전환
        const s20 = this.checkStrategy20(indicators, signals);
        if (s20.match) matched.push({ id: 20, ...s20 });
        
        return matched;
    }
    
    // ==========================================
    // 상승 예측 전략 (1-10)
    // ==========================================
    
    /**
     * 전략 1: RSI 과매도 + MACD 골든크로스
     * 조건: RSI < 30 AND MACD 히스토그램 > 0 AND MACD > Signal
     */
    static checkStrategy01(indicators, signals) {
        const rsiOversold = indicators.rsi < 30;
        const macdGoldenCross = indicators.macd && 
            indicators.macd.histogram > 0 && 
            indicators.macd.MACD > indicators.macd.signal;
        
        const match = rsiOversold && macdGoldenCross;
        
        return {
            match,
            name: 'RSI 과매도 + MACD 골든크로스',
            direction: 'BUY',
            confidence: match ? (indicators.rsi < 25 ? 80 : 70) : 0,
            reason: match ? `RSI(${indicators.rsi.toFixed(1)}) 과매도 + MACD 골든크로스` : null
        };
    }
    
    /**
     * 전략 2: 볼린저 하단 터치 + 거래량 급증
     * 조건: BB position < 20% AND 거래량 > 평균 1.5배
     */
    static checkStrategy02(indicators, volumeProfile) {
        const bbLower = indicators.bollingerBands && indicators.bollingerBands.position < 20;
        const volumeSurge = volumeProfile && volumeProfile.surge;
        
        const match = bbLower && volumeSurge;
        
        return {
            match,
            name: '볼린저 하단 터치 + 거래량 급증',
            direction: 'BUY',
            confidence: match ? 72 : 0,
            reason: match ? `볼린저(${indicators.bollingerBands.position.toFixed(1)}%) 하단 + 거래량 급증` : null
        };
    }
    
    /**
     * 전략 3: EMA 골든 크로스 + RSI 중립
     * 조건: EMA20 > EMA50 AND 45 < RSI < 55
     */
    static checkStrategy03(indicators, signals) {
        const emaGolden = indicators.ema20 > indicators.ema50;
        const rsiNeutral = indicators.rsi > 45 && indicators.rsi < 55;
        
        const match = emaGolden && rsiNeutral;
        
        return {
            match,
            name: 'EMA 골든 크로스 + RSI 중립',
            direction: 'BUY',
            confidence: match ? 68 : 0,
            reason: match ? `EMA20>${'EMA50'} + RSI(${indicators.rsi.toFixed(1)}) 중립` : null
        };
    }
    
    /**
     * 전략 4: MACD 0선 골든크로스
     * 조건: MACD < 0 에서 상향 돌파 AND 히스토그램 > 0
     */
    static checkStrategy04(indicators) {
        const macdNearZero = indicators.macd && 
            indicators.macd.MACD > -50 && indicators.macd.MACD < 50;
        const macdCrossUp = indicators.macd && 
            indicators.macd.histogram > 0 && 
            indicators.macd.MACD > indicators.macd.signal;
        
        const match = macdNearZero && macdCrossUp;
        
        return {
            match,
            name: 'MACD 0선 골든크로스',
            direction: 'BUY',
            confidence: match ? 75 : 0,
            reason: match ? `MACD(${indicators.macd.MACD.toFixed(2)}) 0선 돌파 상승` : null
        };
    }
    
    /**
     * 전략 6: 3중 지표 매수 합의
     * 조건: RSI, MACD, BB 모두 BUY 신호
     */
    static checkStrategy06(signals) {
        const rsiBuy = signals.rsi && signals.rsi.includes('BUY');
        const macdBuy = signals.macd === 'BUY';
        const bbBuy = signals.bollingerBands === 'BUY';
        
        const match = rsiBuy && macdBuy && bbBuy;
        
        return {
            match,
            name: '3중 지표 매수 합의',
            direction: 'BUY',
            confidence: match ? 85 : 0,
            reason: match ? 'RSI + MACD + 볼린저 밴드 모두 매수 신호' : null
        };
    }
    
    /**
     * 전략 7: 공포 과열 + RSI 과매도
     * 조건: Fear & Greed < 25 AND RSI < 35
     */
    static checkStrategy07(indicators, fearGreed) {
        const extremeFear = fearGreed && fearGreed.value < 25;
        const rsiLow = indicators.rsi < 35;
        
        const match = extremeFear && rsiLow;
        
        return {
            match,
            name: '극도 공포 + RSI 과매도',
            direction: 'BUY',
            confidence: match ? 70 : 0,
            reason: match ? `공포지수(${fearGreed.value}) + RSI(${indicators.rsi.toFixed(1)}) 극단적 공포` : null
        };
    }
    
    /**
     * 전략 8: 볼린저 Squeeze 상향 돌파
     * 조건: Squeeze < 7% AND 상단 돌파 (BB position > 80)
     */
    static checkStrategy08(indicators, signals) {
        const squeeze = indicators.bollingerBands && indicators.bollingerBands.squeeze < 7;
        const breakoutUp = indicators.bollingerBands && indicators.bollingerBands.position > 80;
        
        const match = squeeze && breakoutUp;
        
        return {
            match,
            name: '볼린저 Squeeze 상향 돌파',
            direction: 'BUY',
            confidence: match ? 65 : 0,
            reason: match ? `Squeeze(${indicators.bollingerBands.squeeze.toFixed(1)}%) 후 상단 돌파` : null
        };
    }
    
    /**
     * 전략 9: EMA 재확인 + RSI 상승
     * 조건: EMA20 > EMA50 (재정렬) AND RSI > 50
     */
    static checkStrategy09(indicators, signals) {
        const emaBullish = indicators.ema20 > indicators.ema50;
        const rsiRising = indicators.rsi > 50 && indicators.rsi < 65;
        
        const match = emaBullish && rsiRising;
        
        return {
            match,
            name: 'EMA 상승 정렬 + RSI 상승',
            direction: 'BUY',
            confidence: match ? 68 : 0,
            reason: match ? `EMA 상승 정렬 + RSI(${indicators.rsi.toFixed(1)}) 상승 모멘텀` : null
        };
    }
    
    /**
     * 전략 10: MACD + RSI 동시 상승 전환
     * 조건: MACD 히스토그램 > 0 AND RSI > 50
     */
    static checkStrategy10(indicators, signals) {
        const macdPositive = indicators.macd && indicators.macd.histogram > 0;
        const rsiAbove50 = indicators.rsi > 50;
        
        const match = macdPositive && rsiAbove50;
        
        return {
            match,
            name: 'MACD + RSI 동시 상승',
            direction: 'BUY',
            confidence: match ? 65 : 0,
            reason: match ? `MACD 히스토그램(+) + RSI(${indicators.rsi.toFixed(1)}) > 50` : null
        };
    }
    
    // ==========================================
    // 하락 예측 전략 (11-20)
    // ==========================================
    
    /**
     * 전략 11: RSI 과매수 + MACD 데드크로스
     * 조건: RSI > 70 AND MACD 히스토그램 < 0 AND MACD < Signal
     */
    static checkStrategy11(indicators, signals) {
        const rsiOverbought = indicators.rsi > 70;
        const macdDeadCross = indicators.macd && 
            indicators.macd.histogram < 0 && 
            indicators.macd.MACD < indicators.macd.signal;
        
        const match = rsiOverbought && macdDeadCross;
        
        return {
            match,
            name: 'RSI 과매수 + MACD 데드크로스',
            direction: 'SELL',
            confidence: match ? (indicators.rsi > 75 ? 80 : 70) : 0,
            reason: match ? `RSI(${indicators.rsi.toFixed(1)}) 과매수 + MACD 데드크로스` : null
        };
    }
    
    /**
     * 전략 12: 볼린저 상단 터치 + 거래량 급증
     * 조건: BB position > 80% AND 거래량 > 평균 1.5배
     */
    static checkStrategy12(indicators, volumeProfile) {
        const bbUpper = indicators.bollingerBands && indicators.bollingerBands.position > 80;
        const volumeSurge = volumeProfile && volumeProfile.surge;
        
        const match = bbUpper && volumeSurge;
        
        return {
            match,
            name: '볼린저 상단 터치 + 거래량 급증',
            direction: 'SELL',
            confidence: match ? 72 : 0,
            reason: match ? `볼린저(${indicators.bollingerBands.position.toFixed(1)}%) 상단 + 거래량 급증` : null
        };
    }
    
    /**
     * 전략 13: EMA 데드 크로스 + RSI 중립
     * 조건: EMA20 < EMA50 AND 45 < RSI < 55
     */
    static checkStrategy13(indicators, signals) {
        const emaDead = indicators.ema20 < indicators.ema50;
        const rsiNeutral = indicators.rsi > 45 && indicators.rsi < 55;
        
        const match = emaDead && rsiNeutral;
        
        return {
            match,
            name: 'EMA 데드 크로스 + RSI 중립',
            direction: 'SELL',
            confidence: match ? 68 : 0,
            reason: match ? `EMA20<EMA50 + RSI(${indicators.rsi.toFixed(1)}) 중립` : null
        };
    }
    
    /**
     * 전략 14: MACD 0선 데드크로스
     * 조건: MACD > 0 에서 하향 돌파 AND 히스토그램 < 0
     */
    static checkStrategy14(indicators) {
        const macdNearZero = indicators.macd && 
            indicators.macd.MACD > -50 && indicators.macd.MACD < 50;
        const macdCrossDown = indicators.macd && 
            indicators.macd.histogram < 0 && 
            indicators.macd.MACD < indicators.macd.signal;
        
        const match = macdNearZero && macdCrossDown;
        
        return {
            match,
            name: 'MACD 0선 데드크로스',
            direction: 'SELL',
            confidence: match ? 75 : 0,
            reason: match ? `MACD(${indicators.macd.MACD.toFixed(2)}) 0선 돌파 하락` : null
        };
    }
    
    /**
     * 전략 16: 3중 지표 매도 합의
     * 조건: RSI, MACD, BB 모두 SELL 신호
     */
    static checkStrategy16(signals) {
        const rsiSell = signals.rsi && signals.rsi.includes('SELL');
        const macdSell = signals.macd === 'SELL';
        const bbSell = signals.bollingerBands === 'SELL';
        
        const match = rsiSell && macdSell && bbSell;
        
        return {
            match,
            name: '3중 지표 매도 합의',
            direction: 'SELL',
            confidence: match ? 85 : 0,
            reason: match ? 'RSI + MACD + 볼린저 밴드 모두 매도 신호' : null
        };
    }
    
    /**
     * 전략 17: 탐욕 과열 + RSI 과매수
     * 조건: Fear & Greed > 75 AND RSI > 65
     */
    static checkStrategy17(indicators, fearGreed) {
        const extremeGreed = fearGreed && fearGreed.value > 75;
        const rsiHigh = indicators.rsi > 65;
        
        const match = extremeGreed && rsiHigh;
        
        return {
            match,
            name: '극도 탐욕 + RSI 과매수',
            direction: 'SELL',
            confidence: match ? 70 : 0,
            reason: match ? `탐욕지수(${fearGreed.value}) + RSI(${indicators.rsi.toFixed(1)}) 극단적 과열` : null
        };
    }
    
    /**
     * 전략 18: 볼린저 Squeeze 하향 돌파
     * 조건: Squeeze < 7% AND 하단 돌파 (BB position < 20)
     */
    static checkStrategy18(indicators, signals) {
        const squeeze = indicators.bollingerBands && indicators.bollingerBands.squeeze < 7;
        const breakoutDown = indicators.bollingerBands && indicators.bollingerBands.position < 20;
        
        const match = squeeze && breakoutDown;
        
        return {
            match,
            name: '볼린저 Squeeze 하향 돌파',
            direction: 'SELL',
            confidence: match ? 65 : 0,
            reason: match ? `Squeeze(${indicators.bollingerBands.squeeze.toFixed(1)}%) 후 하단 돌파` : null
        };
    }
    
    /**
     * 전략 19: EMA 재확인 + RSI 하락
     * 조건: EMA20 < EMA50 (재정렬) AND RSI < 50
     */
    static checkStrategy19(indicators, signals) {
        const emaBearish = indicators.ema20 < indicators.ema50;
        const rsiFalling = indicators.rsi < 50 && indicators.rsi > 35;
        
        const match = emaBearish && rsiFalling;
        
        return {
            match,
            name: 'EMA 하락 정렬 + RSI 하락',
            direction: 'SELL',
            confidence: match ? 68 : 0,
            reason: match ? `EMA 하락 정렬 + RSI(${indicators.rsi.toFixed(1)}) 하락 모멘텀` : null
        };
    }
    
    /**
     * 전략 20: MACD + RSI 동시 하락 전환
     * 조건: MACD 히스토그램 < 0 AND RSI < 50
     */
    static checkStrategy20(indicators, signals) {
        const macdNegative = indicators.macd && indicators.macd.histogram < 0;
        const rsiBelow50 = indicators.rsi < 50;
        
        const match = macdNegative && rsiBelow50;
        
        return {
            match,
            name: 'MACD + RSI 동시 하락',
            direction: 'SELL',
            confidence: match ? 65 : 0,
            reason: match ? `MACD 히스토그램(-) + RSI(${indicators.rsi.toFixed(1)}) < 50` : null
        };
    }
    
    // ==========================================
    // 유틸리티
    // ==========================================
    
    /**
     * 매칭된 전략들로 최종 결정
     */
    static makeDecision(matchedStrategies) {
        if (matchedStrategies.length === 0) {
            return {
                decision: 'HOLD',
                confidence: 50,
                strategies: [],
                reason: '매칭되는 전략 없음'
            };
        }
        
        // BUY/SELL 각각 카운트 및 신뢰도 합산
        let buyCount = 0, sellCount = 0;
        let buyConfidence = 0, sellConfidence = 0;
        
        for (const s of matchedStrategies) {
            if (s.direction === 'BUY') {
                buyCount++;
                buyConfidence += s.confidence;
            } else if (s.direction === 'SELL') {
                sellCount++;
                sellConfidence += s.confidence;
            }
        }
        
        // 평균 신뢰도
        const avgBuyConf = buyCount > 0 ? buyConfidence / buyCount : 0;
        const avgSellConf = sellCount > 0 ? sellConfidence / sellCount : 0;
        
        // 결정
        let decision, confidence, reason;
        
        if (buyCount > sellCount) {
            decision = 'BUY';
            confidence = Math.min(avgBuyConf + (buyCount - sellCount) * 5, 95);
            reason = `${buyCount}개 매수 전략 매칭 (vs ${sellCount}개 매도)`;
        } else if (sellCount > buyCount) {
            decision = 'SELL';
            confidence = Math.min(avgSellConf + (sellCount - buyCount) * 5, 95);
            reason = `${sellCount}개 매도 전략 매칭 (vs ${buyCount}개 매수)`;
        } else {
            // 동점이면 신뢰도로 결정
            if (avgBuyConf > avgSellConf) {
                decision = 'BUY';
                confidence = avgBuyConf;
                reason = `매수/매도 동점, 매수 신뢰도(${avgBuyConf.toFixed(0)}%) 우세`;
            } else if (avgSellConf > avgBuyConf) {
                decision = 'SELL';
                confidence = avgSellConf;
                reason = `매수/매도 동점, 매도 신뢰도(${avgSellConf.toFixed(0)}%) 우세`;
            } else {
                decision = 'HOLD';
                confidence = 50;
                reason = '매수/매도 신호 균형';
            }
        }
        
        return {
            decision,
            confidence: Math.round(confidence),
            strategies: matchedStrategies,
            buyStrategies: matchedStrategies.filter(s => s.direction === 'BUY'),
            sellStrategies: matchedStrategies.filter(s => s.direction === 'SELL'),
            reason
        };
    }
    
    /**
     * 전체 분석 실행
     */
    static analyze(indicators, signals, volumeProfile, fearGreed) {
        const matched = this.matchStrategies(indicators, signals, volumeProfile, fearGreed);
        const decision = this.makeDecision(matched);
        
        return decision;
    }
}
