/**
 * 20개 전략 엔진
 * 각 전략의 조건을 체크하고 매칭된 전략 반환
 */

export class StrategyEngine {
    
    /**
     * 모든 전략 체크 실행
     * @param {Object} data - AIDataCollector.collectForAI() 결과
     * @returns {Object} 분석 결과
     */
    static analyze(data) {
        const { indicators, signals, volumeProfile, fearGreed, recentCandles } = data;
        
        const matched = [];
        
        // ===== BUY 전략 (1-25) =====
        const strategies = [
            this.strategy01(indicators),
            this.strategy02(indicators, volumeProfile),
            this.strategy03(indicators),
            this.strategy04(indicators),
            this.strategy05(indicators, recentCandles),
            this.strategy06(indicators, signals),
            this.strategy07(indicators, fearGreed),
            this.strategy08(indicators, volumeProfile),
            this.strategy09(indicators),
            this.strategy10(indicators),
            this.strategy21(indicators),
            this.strategy22(indicators),
            this.strategy23(indicators),
            this.strategy24(indicators, volumeProfile),
            this.strategy25(indicators),
            this.strategy26(indicators, fearGreed),
            this.strategy27(indicators),
            this.strategy28(indicators),
            this.strategy29(indicators),
            this.strategy30(indicators),
            this.strategy31(indicators, volumeProfile),
            this.strategy32(indicators),
            this.strategy33(indicators),
            this.strategy34(indicators, fearGreed),
            this.strategy35(indicators),
            // ===== SELL 전략 (11-20, 36-50) =====
            this.strategy11(indicators),
            this.strategy12(indicators, volumeProfile),
            this.strategy13(indicators),
            this.strategy14(indicators),
            this.strategy15(indicators, recentCandles),
            this.strategy16(indicators, signals),
            this.strategy17(indicators, fearGreed),
            this.strategy18(indicators, volumeProfile),
            this.strategy19(indicators),
            this.strategy20(indicators),
            this.strategy36(indicators),
            this.strategy37(indicators),
            this.strategy38(indicators),
            this.strategy39(indicators, volumeProfile),
            this.strategy40(indicators),
            this.strategy41(indicators, fearGreed),
            this.strategy42(indicators),
            this.strategy43(indicators),
            this.strategy44(indicators),
            this.strategy45(indicators),
            this.strategy46(indicators, volumeProfile),
            this.strategy47(indicators),
            this.strategy48(indicators),
            this.strategy49(indicators, fearGreed),
            this.strategy50(indicators)
        ];
        
        strategies.forEach(s => {
            if (s.match) matched.push(s);
        });
        
        return this.makeDecision(matched);
    }
    
    // ═══════════════════════════════════════════════════════════════
    // BUY 전략 (1-10)
    // ═══════════════════════════════════════════════════════════════
    
    /**
     * 전략 1: RSI 과매도 + MACD 골든크로스
     */
    static strategy01(ind) {
        const rsiOversold = ind.rsi < 30;
        const macdGolden = ind.macd && 
            ind.macd.histogram > 0 && 
            ind.macd.MACD > ind.macd.signal;
        
        const match = rsiOversold && macdGolden;
        let confidence = 70;
        if (match && ind.rsi < 25) confidence += 10;
        
        return {
            id: 1,
            name: 'RSI 과매도 + MACD 골든크로스',
            direction: 'BUY',
            match,
            confidence: match ? confidence : 0,
            conditions: { rsi: ind.rsi, macdHist: ind.macd?.histogram, macdGolden }
        };
    }
    
    /**
     * 전략 2: 볼린저 하단 터치 + 거래량 급증
     */
    static strategy02(ind, vol) {
        const bbLower = ind.bollingerBands && ind.bollingerBands.position < 20;
        const volumeSurge = vol && vol.surge;
        
        const match = bbLower && volumeSurge;
        let confidence = 72;
        if (match && ind.bollingerBands.position < 10) confidence += 5;
        if (match && vol.current > vol.average * 2) confidence += 5;
        
        return {
            id: 2,
            name: '볼린저 하단 + 거래량 급증',
            direction: 'BUY',
            match,
            confidence: match ? confidence : 0,
            conditions: { bbPosition: ind.bollingerBands?.position, volumeSurge }
        };
    }
    
    /**
     * 전략 3: 볼린저 Mean Reversion 매수
     * - BB position < 40 (하단 근처)
     * - RSI 40-55 (중립으로 회복 중)
     * - MACD histogram 상승 반전 (히스토 > 0)
     */
    static strategy03(ind) {
        const bbLowerArea = ind.bollingerBands && ind.bollingerBands.position < 40;
        const rsiRecovering = ind.rsi > 40 && ind.rsi < 55;
        const macdTurning = ind.macd && ind.macd.histogram > 0;
        
        const match = bbLowerArea && rsiRecovering && macdTurning;
        let confidence = 70;
        if (match && ind.bollingerBands.position < 30) confidence += 5;
        
        return {
            id: 3,
            name: 'BB 하단 Mean Reversion',
            direction: 'BUY',
            match,
            confidence: match ? confidence : 0,
            conditions: { bbPosition: ind.bollingerBands?.position, rsi: ind.rsi, macdHist: ind.macd?.histogram }
        };
    }
    
    /**
     * 전략 4: MACD 0선 골든크로스
     * MACD가 0선 근처에서 상향 돌파
     */
    static strategy04(ind) {
        // MACD 절대값이 Signal 절대값의 50% 이내면 0선 근처로 판단
        const macdNearZero = ind.macd && 
            Math.abs(ind.macd.MACD) < Math.abs(ind.macd.signal) * 1.5;
        const macdCrossUp = ind.macd && 
            ind.macd.histogram > 0 && 
            ind.macd.MACD > ind.macd.signal;
        // 추가: MACD가 음수에서 양수로 전환 중이거나 이미 양수
        const macdTurningPositive = ind.macd && ind.macd.MACD > -100;
        
        const match = macdNearZero && macdCrossUp && macdTurningPositive;
        
        return {
            id: 4,
            name: 'MACD 0선 골든크로스',
            direction: 'BUY',
            match,
            confidence: match ? 75 : 0,
            conditions: { macd: ind.macd?.MACD, signal: ind.macd?.signal }
        };
    }
    
    /**
     * 전략 5: RSI 강세 다이버전스
     */
    static strategy05(ind, candles) {
        const divergence = this.detectBullishDivergence(ind, candles);
        const rsiLow = ind.rsi < 40;
        
        const match = divergence.found && rsiLow;
        let confidence = 75;
        if (match && ind.rsi < 30) confidence += 5;
        
        return {
            id: 5,
            name: 'RSI 강세 다이버전스',
            direction: 'BUY',
            match,
            confidence: match ? confidence : 0,
            conditions: { divergence: divergence.found, rsi: ind.rsi, detail: divergence }
        };
    }
    
    /**
     * 전략 6: 3중 지표 매수 합의
     */
    static strategy06(ind, signals) {
        const rsiBuy = ind.rsi < 40;
        const macdBuy = ind.macd && 
            ind.macd.histogram > 0 && 
            ind.macd.MACD > ind.macd.signal;
        const bbBuy = ind.bollingerBands && ind.bollingerBands.position < 20;
        
        const match = rsiBuy && macdBuy && bbBuy;
        let confidence = 85;
        if (match && ind.ema20 > ind.ema50) confidence += 5;
        
        return {
            id: 6,
            name: '3중 지표 매수 합의',
            direction: 'BUY',
            match,
            confidence: match ? confidence : 0,
            conditions: { rsiBuy, macdBuy, bbBuy }
        };
    }
    
    /**
     * 전략 7: 극도 공포 매수 (RSI 조건 완화)
     * - Fear & Greed < 25 = 극도 공포 → 반등 기대
     * - RSI < 50 (과매도까지 안 가도 됨)
     * - MACD histogram 양수 (모멘텀 회복)
     */
    static strategy07(ind, fearGreed) {
        const extremeFear = fearGreed && fearGreed.value < 25;
        const rsiNotOverbought = ind.rsi < 50;
        const macdRecovering = ind.macd && ind.macd.histogram > 0;
        
        const match = extremeFear && rsiNotOverbought && macdRecovering;
        let confidence = 72;
        if (match && fearGreed.value < 20) confidence += 5;
        if (match && ind.rsi < 40) confidence += 3;
        
        return {
            id: 7,
            name: '극도 공포 + 모멘텀 회복',
            direction: 'BUY',
            match,
            confidence: match ? confidence : 0,
            conditions: { fearGreed: fearGreed?.value, rsi: ind.rsi, macdHist: ind.macd?.histogram }
        };
    }
    
    /**
     * 전략 8: 볼린저 Squeeze 상향 돌파
     * Squeeze 상태에서 가격이 중간선 위로 돌파
     */
    static strategy08(ind, vol) {
        // Squeeze: 밴드 폭이 좁음 (변동성 축소)
        const squeeze = ind.bollingerBands && ind.bollingerBands.squeeze < 5;
        // 상향 돌파: 중간선(50%) 위로 올라가며 상단으로 향함
        const breakoutUp = ind.bollingerBands && 
            ind.bollingerBands.position > 50 && 
            ind.bollingerBands.position < 85;
        
        const match = squeeze && breakoutUp;
        let confidence = 65;
        if (match && vol && vol.surge) confidence += 5;
        
        return {
            id: 8,
            name: '볼린저 Squeeze 상향 돌파',
            direction: 'BUY',
            match,
            confidence: match ? confidence : 0,
            conditions: { squeeze: ind.bollingerBands?.squeeze, position: ind.bollingerBands?.position }
        };
    }
    
    /**
     * 전략 9: RSI 반등 + BB 중앙 회귀
     * - RSI 45-60 (중립~약간 상승)
     * - BB position 30-60 (중간 영역)
     * - MACD > Signal (골든)
     */
    static strategy09(ind) {
        const rsiMidRange = ind.rsi > 45 && ind.rsi < 60;
        const bbMiddle = ind.bollingerBands && 
            ind.bollingerBands.position > 30 && 
            ind.bollingerBands.position < 60;
        const macdBullish = ind.macd && ind.macd.MACD > ind.macd.signal;
        
        const match = rsiMidRange && bbMiddle && macdBullish;
        let confidence = 68;
        if (match && ind.macd?.histogram > 0) confidence += 4;
        
        return {
            id: 9,
            name: 'RSI 반등 + BB 중앙 회귀',
            direction: 'BUY',
            match,
            confidence: match ? confidence : 0,
            conditions: { rsi: ind.rsi, bbPosition: ind.bollingerBands?.position, macdGolden: ind.macd?.MACD > ind.macd?.signal }
        };
    }
    
    /**
     * 전략 10: MACD 히스토그램 상승 + RSI 상승세
     * - MACD histogram > 0 (모멘텀 양수)
     * - RSI > 45 (중립 이상이면 충분)
     * - BB position < 70 (아직 과열 아님)
     */
    static strategy10(ind) {
        const macdPositive = ind.macd && ind.macd.histogram > 0;
        const rsiRising = ind.rsi > 45 && ind.rsi < 65;
        const notOverbought = ind.bollingerBands && ind.bollingerBands.position < 70;
        
        const match = macdPositive && rsiRising && notOverbought;
        let confidence = 68;
        if (match && ind.rsi > 50) confidence += 3;
        
        return {
            id: 10,
            name: 'MACD 양수 + RSI 상승세',
            direction: 'BUY',
            match,
            confidence: match ? confidence : 0,
            conditions: { macdHist: ind.macd?.histogram, rsi: ind.rsi, bbPos: ind.bollingerBands?.position }
        };
    }
    
    // ═══════════════════════════════════════════════════════════════
    // SELL 전략 (11-20)
    // ═══════════════════════════════════════════════════════════════
    
    /**
     * 전략 11: RSI 과매수 + MACD 데드크로스
     */
    static strategy11(ind) {
        const rsiOverbought = ind.rsi > 70;
        const macdDead = ind.macd && 
            ind.macd.histogram < 0 && 
            ind.macd.MACD < ind.macd.signal;
        
        const match = rsiOverbought && macdDead;
        let confidence = 70;
        if (match && ind.rsi > 75) confidence += 10;
        
        return {
            id: 11,
            name: 'RSI 과매수 + MACD 데드크로스',
            direction: 'SELL',
            match,
            confidence: match ? confidence : 0,
            conditions: { rsi: ind.rsi, macdHist: ind.macd?.histogram, macdDead }
        };
    }
    
    /**
     * 전략 12: 볼린저 상단 터치 + 거래량 급증
     */
    static strategy12(ind, vol) {
        const bbUpper = ind.bollingerBands && ind.bollingerBands.position > 80;
        const volumeSurge = vol && vol.surge;
        
        const match = bbUpper && volumeSurge;
        let confidence = 72;
        if (match && ind.bollingerBands.position > 90) confidence += 5;
        if (match && vol.current > vol.average * 2) confidence += 5;
        
        return {
            id: 12,
            name: '볼린저 상단 + 거래량 급증',
            direction: 'SELL',
            match,
            confidence: match ? confidence : 0,
            conditions: { bbPosition: ind.bollingerBands?.position, volumeSurge }
        };
    }
    
    /**
     * 전략 13: EMA 데드 + RSI 하락 반전 확인
     * - EMA20 < EMA50 (하락 추세)
     * - RSI 55-65 (과매수 영역에서 하락 시작)
     * - MACD histogram 음수 (모멘텀 하락)
     */
    static strategy13(ind) {
        const emaDead = ind.ema20 < ind.ema50;
        const rsiTurningDown = ind.rsi > 55 && ind.rsi < 65;
        const macdNegative = ind.macd && ind.macd.histogram < 0;
        
        const match = emaDead && rsiTurningDown && macdNegative;
        
        return {
            id: 13,
            name: 'EMA 데드 + RSI 하락 반전',
            direction: 'SELL',
            match,
            confidence: match ? 68 : 0,
            conditions: { ema20: ind.ema20, ema50: ind.ema50, rsi: ind.rsi, macdHist: ind.macd?.histogram }
        };
    }
    
    /**
     * 전략 14: MACD 0선 데드크로스
     * MACD가 0선 근처에서 하향 돌파
     */
    static strategy14(ind) {
        // MACD 절대값이 Signal 절대값의 50% 이내면 0선 근처로 판단
        const macdNearZero = ind.macd && 
            Math.abs(ind.macd.MACD) < Math.abs(ind.macd.signal) * 1.5;
        const macdCrossDown = ind.macd && 
            ind.macd.histogram < 0 && 
            ind.macd.MACD < ind.macd.signal;
        // 추가: MACD가 양수에서 음수로 전환 중이거나 이미 음수
        const macdTurningNegative = ind.macd && ind.macd.MACD < 100;
        
        const match = macdNearZero && macdCrossDown && macdTurningNegative;
        
        return {
            id: 14,
            name: 'MACD 0선 데드크로스',
            direction: 'SELL',
            match,
            confidence: match ? 75 : 0,
            conditions: { macd: ind.macd?.MACD, signal: ind.macd?.signal }
        };
    }
    
    /**
     * 전략 15: RSI 약세 다이버전스
     */
    static strategy15(ind, candles) {
        const divergence = this.detectBearishDivergence(ind, candles);
        const rsiHigh = ind.rsi > 60;
        
        const match = divergence.found && rsiHigh;
        let confidence = 75;
        if (match && ind.rsi > 70) confidence += 5;
        
        return {
            id: 15,
            name: 'RSI 약세 다이버전스',
            direction: 'SELL',
            match,
            confidence: match ? confidence : 0,
            conditions: { divergence: divergence.found, rsi: ind.rsi, detail: divergence }
        };
    }
    
    /**
     * 전략 16: 3중 지표 매도 합의
     */
    static strategy16(ind, signals) {
        const rsiSell = ind.rsi > 60;
        const macdSell = ind.macd && 
            ind.macd.histogram < 0 && 
            ind.macd.MACD < ind.macd.signal;
        const bbSell = ind.bollingerBands && ind.bollingerBands.position > 80;
        
        const match = rsiSell && macdSell && bbSell;
        let confidence = 85;
        if (match && ind.ema20 < ind.ema50) confidence += 5;
        
        return {
            id: 16,
            name: '3중 지표 매도 합의',
            direction: 'SELL',
            match,
            confidence: match ? confidence : 0,
            conditions: { rsiSell, macdSell, bbSell }
        };
    }
    
    /**
     * 전략 17: 극도 탐욕 + RSI 과매수
     */
    static strategy17(ind, fearGreed) {
        const extremeGreed = fearGreed && fearGreed.value > 75;
        const rsiHigh = ind.rsi > 65;
        
        const match = extremeGreed && rsiHigh;
        let confidence = 70;
        if (match && fearGreed.value > 80) confidence += 5;
        if (match && ind.rsi > 70) confidence += 5;
        
        return {
            id: 17,
            name: '극도 탐욕 + RSI 과매수',
            direction: 'SELL',
            match,
            confidence: match ? confidence : 0,
            conditions: { fearGreed: fearGreed?.value, rsi: ind.rsi }
        };
    }
    
    /**
     * 전략 18: 볼린저 Squeeze 하향 돌파
     * Squeeze 상태에서 가격이 중간선 아래로 돌파
     */
    static strategy18(ind, vol) {
        // Squeeze: 밴드 폭이 좁음 (변동성 축소)
        const squeeze = ind.bollingerBands && ind.bollingerBands.squeeze < 5;
        // 하향 돌파: 중간선(50%) 아래로 내려가며 하단으로 향함
        const breakoutDown = ind.bollingerBands && 
            ind.bollingerBands.position < 50 && 
            ind.bollingerBands.position > 15;
        
        const match = squeeze && breakoutDown;
        let confidence = 65;
        if (match && vol && vol.surge) confidence += 5;
        
        return {
            id: 18,
            name: '볼린저 Squeeze 하향 돌파',
            direction: 'SELL',
            match,
            confidence: match ? confidence : 0,
            conditions: { squeeze: ind.bollingerBands?.squeeze, position: ind.bollingerBands?.position }
        };
    }
    
    /**
     * 전략 19: 하락 추세 지속 확인
     * - EMA20 < EMA50 (하락 추세)
     * - RSI 40-55 (과매도 아닌 하락세)
     * - MACD < Signal (하락 모멘텀)
     * - BB position > 30 (바닥 아님)
     */
    static strategy19(ind) {
        const emaBearish = ind.ema20 < ind.ema50;
        const rsiMidFalling = ind.rsi > 40 && ind.rsi < 55;
        const macdBearish = ind.macd && ind.macd.MACD < ind.macd.signal;
        const notAtBottom = ind.bollingerBands && ind.bollingerBands.position > 30;
        
        const match = emaBearish && rsiMidFalling && macdBearish && notAtBottom;
        let confidence = 65;
        if (match && ind.macd?.histogram < 0) confidence += 5;
        
        return {
            id: 19,
            name: '하락 추세 지속',
            direction: 'SELL',
            match,
            confidence: match ? confidence : 0,
            conditions: { ema20: ind.ema20, ema50: ind.ema50, rsi: ind.rsi, macdSignal: ind.macd?.MACD < ind.macd?.signal }
        };
    }
    
    /**
     * 전략 20: MACD 데드 + RSI 하락세 + 볼밴 상단
     * - MACD < Signal (데드 크로스)
     * - RSI 50-60 (과매수 직전에서 하락)
     * - BB position > 60 (상단 근처)
     */
    static strategy20(ind) {
        const macdDead = ind.macd && ind.macd.MACD < ind.macd.signal;
        const rsiHighish = ind.rsi > 50 && ind.rsi < 65;
        const bbUpperArea = ind.bollingerBands && ind.bollingerBands.position > 60;
        
        const match = macdDead && rsiHighish && bbUpperArea;
        
        return {
            id: 20,
            name: 'MACD 데드 + BB 상단',
            direction: 'SELL',
            match,
            confidence: match ? 70 : 0,
            conditions: { macdDead: macdDead, rsi: ind.rsi, bbPos: ind.bollingerBands?.position }
        };
    }
    
    // ═══════════════════════════════════════════════════════════════
    // 추가 BUY 전략 (21-35)
    // ═══════════════════════════════════════════════════════════════
    
    /**
     * 전략 21: 극단적 과매도 (RSI 30-40 + BB < 30)
     */
    static strategy21(ind) {
        const rsiOversoldZone = ind.rsi > 30 && ind.rsi < 40;
        const bbLowExtreme = ind.bollingerBands && ind.bollingerBands.position < 30;
        
        const match = rsiOversoldZone && bbLowExtreme;
        
        return {
            id: 21,
            name: '극단적 과매도',
            direction: 'BUY',
            match,
            confidence: match ? 68 : 0
        };
    }
    
    /**
     * 전략 22: MACD 히스토그램 상승 전환 + RSI > 40
     */
    static strategy22(ind) {
        const macdTurningUp = ind.macd && ind.macd.histogram > -20 && ind.macd.histogram < 20 && ind.macd.histogram > 0;
        const rsiRecovering = ind.rsi > 40 && ind.rsi < 55;
        
        const match = macdTurningUp && rsiRecovering;
        
        return {
            id: 22,
            name: 'MACD 히스토그램 상승 전환',
            direction: 'BUY',
            match,
            confidence: match ? 65 : 0
        };
    }
    
    /**
     * 전략 23: EMA 골든 + RSI 중립 + BB 하단
     */
    static strategy23(ind) {
        const emaGolden = ind.ema20 > ind.ema50;
        const rsiNeutral = ind.rsi > 40 && ind.rsi < 60;
        const bbLower = ind.bollingerBands && ind.bollingerBands.position < 50;
        
        const match = emaGolden && rsiNeutral && bbLower;
        
        return {
            id: 23,
            name: 'EMA 골든 + RSI 중립 + BB 하단',
            direction: 'BUY',
            match,
            confidence: match ? 67 : 0
        };
    }
    
    /**
     * 전략 24: 볼륨 급증 + RSI 상승 + MACD > 0
     */
    static strategy24(ind, vol) {
        const volumeSpike = vol && vol.buyPressure > 60;
        const rsiRising = ind.rsi > 45 && ind.rsi < 65;
        const macdPositive = ind.macd && ind.macd.histogram > 0;
        
        const match = volumeSpike && rsiRising && macdPositive;
        
        return {
            id: 24,
            name: '볼륨 급증 + RSI 상승',
            direction: 'BUY',
            match,
            confidence: match ? 70 : 0
        };
    }
    
    /**
     * 전략 25: BB 하단 근처 + RSI 상승 추세
     */
    static strategy25(ind) {
        const bbNearLower = ind.bollingerBands && ind.bollingerBands.position > 20 && ind.bollingerBands.position < 40;
        const rsiUptrend = ind.rsi > 35 && ind.rsi < 50;
        
        const match = bbNearLower && rsiUptrend;
        
        return {
            id: 25,
            name: 'BB 하단 근처 + RSI 상승',
            direction: 'BUY',
            match,
            confidence: match ? 64 : 0
        };
    }
    
    /**
     * 전략 26: Fear&Greed 극단 공포 + RSI < 40 + MACD 골든
     */
    static strategy26(ind, fg) {
        const extremeFear = fg && fg.value < 30;
        const rsiLow = ind.rsi < 40;
        const macdGolden = ind.macd && ind.macd.MACD > ind.macd.signal && ind.macd.histogram > 0;
        
        const match = extremeFear && rsiLow && macdGolden;
        
        return {
            id: 26,
            name: 'Fear&Greed 극공포 + MACD 골든',
            direction: 'BUY',
            match,
            confidence: match ? 72 : 0
        };
    }
    
    /**
     * 전략 27: EMA 골든 직후 + BB 확장
     */
    static strategy27(ind) {
        const emaGoldenRecent = ind.ema20 > ind.ema50 && (ind.ema20 - ind.ema50) < ind.ema50 * 0.01; // 1% 이내
        const bbExpanding = ind.bollingerBands && ind.bollingerBands.bandwidth > 3;
        
        const match = emaGoldenRecent && bbExpanding;
        
        return {
            id: 27,
            name: 'EMA 골든 직후 + BB 확장',
            direction: 'BUY',
            match,
            confidence: match ? 66 : 0
        };
    }
    
    /**
     * 전략 28: RSI 상승 + MACD 양수 + BB 하단 + EMA 상승
     */
    static strategy28(ind) {
        const rsiRising = ind.rsi > 40 && ind.rsi < 55;
        const macdPositive = ind.macd && ind.macd.histogram > 0;
        const bbLowerHalf = ind.bollingerBands && ind.bollingerBands.position < 45;
        const emaUptrend = ind.ema20 > ind.ema50;
        
        const match = rsiRising && macdPositive && bbLowerHalf && emaUptrend;
        
        return {
            id: 28,
            name: 'RSI 상승 + MACD 양수 + BB 하단',
            direction: 'BUY',
            match,
            confidence: match ? 66 : 0
        };
    }
    
    /**
     * 전략 29: BB Squeeze 해제 + 상향 돌파
     */
    static strategy29(ind) {
        const squeezeRelease = ind.bollingerBands && 
            ind.bollingerBands.bandwidth > 2 && 
            ind.bollingerBands.bandwidth < 4;
        const breakingUp = ind.bollingerBands && ind.bollingerBands.position > 55;
        const macdSupport = ind.macd && ind.macd.histogram > 0;
        
        const match = squeezeRelease && breakingUp && macdSupport;
        
        return {
            id: 29,
            name: 'BB Squeeze 해제 상향',
            direction: 'BUY',
            match,
            confidence: match ? 69 : 0
        };
    }
    
    /**
     * 전략 30: MACD 골든 + BB 중하단
     */
    static strategy30(ind) {
        const macdGolden = ind.macd && ind.macd.MACD > ind.macd.signal;
        const bbLowerMid = ind.bollingerBands && 
            ind.bollingerBands.position > 30 && 
            ind.bollingerBands.position < 50;
        
        const match = macdGolden && bbLowerMid;
        
        return {
            id: 30,
            name: 'MACD 골든 + BB 중하단',
            direction: 'BUY',
            match,
            confidence: match ? 66 : 0
        };
    }
    
    /**
     * 전략 31: RSI 과매도 탈출 + 볼륨 증가
     */
    static strategy31(ind, vol) {
        const rsiEscaping = ind.rsi > 30 && ind.rsi < 45;
        const volumeUp = vol && vol.buyPressure > 55;
        
        const match = rsiEscaping && volumeUp;
        
        return {
            id: 31,
            name: 'RSI 과매도 탈출 + 볼륨',
            direction: 'BUY',
            match,
            confidence: match ? 67 : 0
        };
    }
    
    /**
     * 전략 32: EMA 상승세 + RSI 50 돌파
     */
    static strategy32(ind) {
        const emaUptrend = ind.ema20 > ind.ema50;
        const rsiBreaking50 = ind.rsi > 50 && ind.rsi < 60;
        
        const match = emaUptrend && rsiBreaking50;
        
        return {
            id: 32,
            name: 'EMA 상승 + RSI 50 돌파',
            direction: 'BUY',
            match,
            confidence: match ? 65 : 0
        };
    }
    
    /**
     * 전략 33: BB 중앙선 상향 돌파 + MACD 골든 + RSI 상승
     */
    static strategy33(ind) {
        const bbMidBreakUp = ind.bollingerBands && 
            ind.bollingerBands.position > 50 && 
            ind.bollingerBands.position < 60;
        const macdGolden = ind.macd && ind.macd.MACD > ind.macd.signal && ind.macd.histogram > 0;
        const rsiRising = ind.rsi > 45 && ind.rsi < 60;
        
        const match = bbMidBreakUp && macdGolden && rsiRising;
        
        return {
            id: 33,
            name: 'BB 중앙선 상향 + MACD 골든',
            direction: 'BUY',
            match,
            confidence: match ? 67 : 0
        };
    }
    
    /**
     * 전략 34: Fear&Greed 급락 후 반등 + RSI > 35
     */
    static strategy34(ind, fg) {
        const fearRebounding = fg && fg.value > 25 && fg.value < 40;
        const rsiRecovering = ind.rsi > 35 && ind.rsi < 50;
        
        const match = fearRebounding && rsiRecovering;
        
        return {
            id: 34,
            name: 'Fear&Greed 반등 + RSI',
            direction: 'BUY',
            match,
            confidence: match ? 62 : 0
        };
    }
    
    /**
     * 전략 35: 다중 지표 약상승 + EMA 상승
     */
    static strategy35(ind) {
        const rsiMidUp = ind.rsi > 48 && ind.rsi < 58;
        const macdMildPositive = ind.macd && ind.macd.histogram > 5 && ind.macd.histogram < 50;
        const bbLowerMid = ind.bollingerBands && 
            ind.bollingerBands.position > 35 && 
            ind.bollingerBands.position < 50;
        const emaUptrend = ind.ema20 > ind.ema50;
        
        const match = rsiMidUp && macdMildPositive && bbLowerMid && emaUptrend;
        
        return {
            id: 35,
            name: '다중 지표 약상승 + EMA',
            direction: 'BUY',
            match,
            confidence: match ? 64 : 0
        };
    }
    
    // ═══════════════════════════════════════════════════════════════
    // 추가 SELL 전략 (36-50)
    // ═══════════════════════════════════════════════════════════════
    
    /**
     * 전략 36: 극단적 과매수 (RSI 60-70 + BB > 70)
     */
    static strategy36(ind) {
        const rsiOverboughtZone = ind.rsi > 60 && ind.rsi < 70;
        const bbHighExtreme = ind.bollingerBands && ind.bollingerBands.position > 70;
        
        const match = rsiOverboughtZone && bbHighExtreme;
        
        return {
            id: 36,
            name: '극단적 과매수',
            direction: 'SELL',
            match,
            confidence: match ? 68 : 0
        };
    }
    
    /**
     * 전략 37: MACD 히스토그램 하락 전환 + RSI < 60
     */
    static strategy37(ind) {
        const macdTurningDown = ind.macd && ind.macd.histogram < 20 && ind.macd.histogram > -20 && ind.macd.histogram < 0;
        const rsiWeakening = ind.rsi > 45 && ind.rsi < 60;
        
        const match = macdTurningDown && rsiWeakening;
        
        return {
            id: 37,
            name: 'MACD 히스토그램 하락 전환',
            direction: 'SELL',
            match,
            confidence: match ? 65 : 0
        };
    }
    
    /**
     * 전략 38: EMA 데드 + RSI 중립 + BB 상단
     */
    static strategy38(ind) {
        const emaDead = ind.ema20 < ind.ema50;
        const rsiNeutral = ind.rsi > 40 && ind.rsi < 60;
        const bbUpper = ind.bollingerBands && ind.bollingerBands.position > 50;
        
        const match = emaDead && rsiNeutral && bbUpper;
        
        return {
            id: 38,
            name: 'EMA 데드 + RSI 중립 + BB 상단',
            direction: 'SELL',
            match,
            confidence: match ? 67 : 0
        };
    }
    
    /**
     * 전략 39: 볼륨 급증 + RSI 하락 + MACD < 0
     */
    static strategy39(ind, vol) {
        const volumeSpike = vol && vol.sellPressure > 60;
        const rsiFalling = ind.rsi > 35 && ind.rsi < 55;
        const macdNegative = ind.macd && ind.macd.histogram < 0;
        
        const match = volumeSpike && rsiFalling && macdNegative;
        
        return {
            id: 39,
            name: '볼륨 급증 + RSI 하락',
            direction: 'SELL',
            match,
            confidence: match ? 70 : 0
        };
    }
    
    /**
     * 전략 40: BB 상단 근처 + RSI 하락 추세
     */
    static strategy40(ind) {
        const bbNearUpper = ind.bollingerBands && ind.bollingerBands.position > 60 && ind.bollingerBands.position < 80;
        const rsiDowntrend = ind.rsi > 50 && ind.rsi < 65;
        
        const match = bbNearUpper && rsiDowntrend;
        
        return {
            id: 40,
            name: 'BB 상단 근처 + RSI 하락',
            direction: 'SELL',
            match,
            confidence: match ? 64 : 0
        };
    }
    
    /**
     * 전략 41: Fear&Greed 극단 탐욕 + RSI > 60 + MACD 데드
     */
    static strategy41(ind, fg) {
        const extremeGreed = fg && fg.value > 70;
        const rsiHigh = ind.rsi > 60;
        const macdDead = ind.macd && ind.macd.MACD < ind.macd.signal && ind.macd.histogram < 0;
        
        const match = extremeGreed && rsiHigh && macdDead;
        
        return {
            id: 41,
            name: 'Fear&Greed 극탐욕 + MACD 데드',
            direction: 'SELL',
            match,
            confidence: match ? 72 : 0
        };
    }
    
    /**
     * 전략 42: EMA 데드 직후 + BB 확장
     */
    static strategy42(ind) {
        const emaDeadRecent = ind.ema20 < ind.ema50 && (ind.ema50 - ind.ema20) < ind.ema50 * 0.01;
        const bbExpanding = ind.bollingerBands && ind.bollingerBands.bandwidth > 3;
        
        const match = emaDeadRecent && bbExpanding;
        
        return {
            id: 42,
            name: 'EMA 데드 직후 + BB 확장',
            direction: 'SELL',
            match,
            confidence: match ? 66 : 0
        };
    }
    
    /**
     * 전략 43: RSI 하락 + MACD 음수 + BB 상단 + EMA 하락
     */
    static strategy43(ind) {
        const rsiFalling = ind.rsi > 45 && ind.rsi < 60;
        const macdNegative = ind.macd && ind.macd.histogram < 0;
        const bbUpperHalf = ind.bollingerBands && ind.bollingerBands.position > 55;
        const emaDowntrend = ind.ema20 < ind.ema50;
        
        const match = rsiFalling && macdNegative && bbUpperHalf && emaDowntrend;
        
        return {
            id: 43,
            name: 'RSI 하락 + MACD 음수 + BB 상단',
            direction: 'SELL',
            match,
            confidence: match ? 66 : 0
        };
    }
    
    /**
     * 전략 44: BB Squeeze 해제 + 하향 돌파
     */
    static strategy44(ind) {
        const squeezeRelease = ind.bollingerBands && 
            ind.bollingerBands.bandwidth > 2 && 
            ind.bollingerBands.bandwidth < 4;
        const breakingDown = ind.bollingerBands && ind.bollingerBands.position < 45;
        const macdSupport = ind.macd && ind.macd.histogram < 0;
        
        const match = squeezeRelease && breakingDown && macdSupport;
        
        return {
            id: 44,
            name: 'BB Squeeze 해제 하향',
            direction: 'SELL',
            match,
            confidence: match ? 69 : 0
        };
    }
    
    /**
     * 전략 45: MACD 데드 + BB 중상단
     */
    static strategy45(ind) {
        const macdDead = ind.macd && ind.macd.MACD < ind.macd.signal;
        const bbUpperMid = ind.bollingerBands && 
            ind.bollingerBands.position > 50 && 
            ind.bollingerBands.position < 70;
        
        const match = macdDead && bbUpperMid;
        
        return {
            id: 45,
            name: 'MACD 데드 + BB 중상단',
            direction: 'SELL',
            match,
            confidence: match ? 66 : 0
        };
    }
    
    /**
     * 전략 46: RSI 과매수 진입 + 볼륨 증가
     */
    static strategy46(ind, vol) {
        const rsiEnteringOverbought = ind.rsi > 55 && ind.rsi < 70;
        const volumeUp = vol && vol.sellPressure > 55;
        
        const match = rsiEnteringOverbought && volumeUp;
        
        return {
            id: 46,
            name: 'RSI 과매수 진입 + 볼륨',
            direction: 'SELL',
            match,
            confidence: match ? 67 : 0
        };
    }
    
    /**
     * 전략 47: EMA 하락세 + RSI 50 하향 돌파
     */
    static strategy47(ind) {
        const emaDowntrend = ind.ema20 < ind.ema50;
        const rsiBreaking50Down = ind.rsi > 40 && ind.rsi < 50;
        
        const match = emaDowntrend && rsiBreaking50Down;
        
        return {
            id: 47,
            name: 'EMA 하락 + RSI 50 하향',
            direction: 'SELL',
            match,
            confidence: match ? 65 : 0
        };
    }
    
    /**
     * 전략 48: BB 중앙선 하향 돌파 + MACD 데드 + RSI 하락
     */
    static strategy48(ind) {
        const bbMidBreakDown = ind.bollingerBands && 
            ind.bollingerBands.position > 40 && 
            ind.bollingerBands.position < 50;
        const macdDead = ind.macd && ind.macd.MACD < ind.macd.signal && ind.macd.histogram < 0;
        const rsiFalling = ind.rsi > 40 && ind.rsi < 55;
        
        const match = bbMidBreakDown && macdDead && rsiFalling;
        
        return {
            id: 48,
            name: 'BB 중앙선 하향 + MACD 데드',
            direction: 'SELL',
            match,
            confidence: match ? 67 : 0
        };
    }
    
    /**
     * 전략 49: Fear&Greed 급등 후 하락 + RSI < 65
     */
    static strategy49(ind, fg) {
        const greedFalling = fg && fg.value > 60 && fg.value < 75;
        const rsiWeakening = ind.rsi > 50 && ind.rsi < 65;
        
        const match = greedFalling && rsiWeakening;
        
        return {
            id: 49,
            name: 'Fear&Greed 하락 + RSI',
            direction: 'SELL',
            match,
            confidence: match ? 62 : 0
        };
    }
    
    /**
     * 전략 50: 다중 지표 약하락 + EMA 하락
     */
    static strategy50(ind) {
        const rsiMidDown = ind.rsi > 42 && ind.rsi < 52;
        const macdMildNegative = ind.macd && ind.macd.histogram < -5 && ind.macd.histogram > -50;
        const bbUpperMid = ind.bollingerBands && 
            ind.bollingerBands.position > 50 && 
            ind.bollingerBands.position < 65;
        const emaDowntrend = ind.ema20 < ind.ema50;
        
        const match = rsiMidDown && macdMildNegative && bbUpperMid && emaDowntrend;
        
        return {
            id: 50,
            name: '다중 지표 약하락 + EMA',
            direction: 'SELL',
            match,
            confidence: match ? 64 : 0
        };
    }
    
    // ═══════════════════════════════════════════════════════════════
    // 다이버전스 감지
    // ═══════════════════════════════════════════════════════════════
    
    /**
     * 강세 다이버전스 감지 (가격 ↓, RSI ↑)
     */
    static detectBullishDivergence(ind, candles) {
        if (!candles || candles.length < 20) {
            return { found: false, reason: '캔들 데이터 부족' };
        }
        
        // 최근 20캔들에서 저점 2개 찾기
        const lows = this.findPivotLows(candles, 20);
        
        if (lows.length < 2) {
            return { found: false, reason: '저점 2개 미발견' };
        }
        
        const [low1, low2] = lows.slice(-2); // 가장 최근 2개
        
        // 가격: Lower Low (저점2 < 저점1)
        const priceLowerLow = low2.price < low1.price;
        
        // RSI는 현재값과 이전 저점 비교 (간략화)
        // 실제로는 저점 시점의 RSI를 추적해야 하지만, 현재 RSI가 상승 중인지로 대체
        const rsiHigherLow = ind.rsi > 30 && ind.rsi < 45; // 상승 추세 중
        
        const found = priceLowerLow && rsiHigherLow;
        
        return {
            found,
            low1: low1.price,
            low2: low2.price,
            priceLowerLow,
            rsiHigherLow,
            currentRsi: ind.rsi
        };
    }
    
    /**
     * 약세 다이버전스 감지 (가격 ↑, RSI ↓)
     */
    static detectBearishDivergence(ind, candles) {
        if (!candles || candles.length < 20) {
            return { found: false, reason: '캔들 데이터 부족' };
        }
        
        // 최근 20캔들에서 고점 2개 찾기
        const highs = this.findPivotHighs(candles, 20);
        
        if (highs.length < 2) {
            return { found: false, reason: '고점 2개 미발견' };
        }
        
        const [high1, high2] = highs.slice(-2); // 가장 최근 2개
        
        // 가격: Higher High (고점2 > 고점1)
        const priceHigherHigh = high2.price > high1.price;
        
        // RSI는 하락 추세 중인지로 대체
        const rsiLowerHigh = ind.rsi > 55 && ind.rsi < 70; // 하락 추세 중
        
        const found = priceHigherHigh && rsiLowerHigh;
        
        return {
            found,
            high1: high1.price,
            high2: high2.price,
            priceHigherHigh,
            rsiLowerHigh,
            currentRsi: ind.rsi
        };
    }
    
    /**
     * 저점 찾기 (피봇 로우)
     */
    static findPivotLows(candles, lookback = 20) {
        const pivots = [];
        if (!candles || candles.length < lookback) {
            return pivots;
        }
        const data = candles.slice(-lookback);
        
        for (let i = 2; i < data.length - 2; i++) {
            const prev2 = data[i - 2].low;
            const prev1 = data[i - 1].low;
            const curr = data[i].low;
            const next1 = data[i + 1].low;
            const next2 = data[i + 2].low;
            
            // 5개 캔들 중 가운데가 가장 낮으면 피봇 로우
            if (curr < prev1 && curr < prev2 && curr < next1 && curr < next2) {
                pivots.push({ index: i, price: curr });
            }
        }
        
        return pivots;
    }
    
    /**
     * 고점 찾기 (피봇 하이)
     */
    static findPivotHighs(candles, lookback = 20) {
        const pivots = [];
        if (!candles || candles.length < lookback) {
            return pivots;
        }
        const data = candles.slice(-lookback);
        
        for (let i = 2; i < data.length - 2; i++) {
            const prev2 = data[i - 2].high;
            const prev1 = data[i - 1].high;
            const curr = data[i].high;
            const next1 = data[i + 1].high;
            const next2 = data[i + 2].high;
            
            // 5개 캔들 중 가운데가 가장 높으면 피봇 하이
            if (curr > prev1 && curr > prev2 && curr > next1 && curr > next2) {
                pivots.push({ index: i, price: curr });
            }
        }
        
        return pivots;
    }
    
    // ═══════════════════════════════════════════════════════════════
    // 최종 결정
    // ═══════════════════════════════════════════════════════════════
    
    /**
     * 매칭된 전략들로 최종 결정 (투표 방식)
     * - BUY 신호 vs SELL 신호 개수 비교
     * - 동점이면 신뢰도 합산이 높은 쪽
     */
    static makeDecision(matchedStrategies, indicators = null) {
        const buyStrategies = matchedStrategies.filter(s => s.direction === 'BUY');
        const sellStrategies = matchedStrategies.filter(s => s.direction === 'SELL');
        
        const buyCount = buyStrategies.length;
        const sellCount = sellStrategies.length;
        
        const buyConfTotal = buyStrategies.reduce((sum, s) => sum + s.confidence, 0);
        const sellConfTotal = sellStrategies.reduce((sum, s) => sum + s.confidence, 0);
        
        const buyConfAvg = buyCount > 0 ? buyConfTotal / buyCount : 0;
        const sellConfAvg = sellCount > 0 ? sellConfTotal / sellCount : 0;
        
        let decision, confidence, reason;
        
        if (buyCount > sellCount) {
            // BUY 신호가 더 많음
            decision = 'BUY';
            confidence = Math.min(Math.round(buyConfAvg + (buyCount - sellCount) * 2), 95);
            reason = `BUY 투표 우세 (${buyCount}:${sellCount})`;
        } else if (sellCount > buyCount) {
            // SELL 신호가 더 많음
            decision = 'SELL';
            confidence = Math.min(Math.round(sellConfAvg + (sellCount - buyCount) * 2), 95);
            reason = `SELL 투표 우세 (${sellCount}:${buyCount})`;
        } else if (buyCount === sellCount && buyCount > 0) {
            // 동점: 신뢰도 합산 비교
            if (buyConfTotal > sellConfTotal) {
                decision = 'BUY';
                confidence = Math.round(buyConfAvg);
                reason = `동점, BUY 신뢰도 우세 (${buyConfTotal.toFixed(0)} vs ${sellConfTotal.toFixed(0)})`;
            } else if (sellConfTotal > buyConfTotal) {
                decision = 'SELL';
                confidence = Math.round(sellConfAvg);
                reason = `동점, SELL 신뢰도 우세 (${sellConfTotal.toFixed(0)} vs ${buyConfTotal.toFixed(0)})`;
            } else {
                // 완전 동점: BUY 우선
                decision = 'BUY';
                confidence = Math.round(buyConfAvg);
                reason = `완전 동점, BUY 선택`;
            }
        } else {
            // 매칭 전략 없음: 기본 BUY
            decision = 'BUY';
            confidence = 51;
            reason = '매칭 전략 없음 - 기본 BUY';
        }
        
        return {
            decision,
            confidence,
            matchedStrategies,
            buyStrategies,
            sellStrategies,
            buyCount,
            sellCount,
            buyConfAvg: Math.round(buyConfAvg),
            sellConfAvg: Math.round(sellConfAvg),
            buyConfTotal: Math.round(buyConfTotal),
            sellConfTotal: Math.round(sellConfTotal),
            reason
        };
    }
}
