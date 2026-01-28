/**
 * UP ?�략 (ID: 1-25)
 * 15분봉 기�? ?�승 ?�측 ?�략
 */

export class StrategiesUp {
    
    /**
     * ?�략 1: RSI Oversold + MACD Golden Cross
     * RSI가 30 ?�하 과매??+ MACD 골든?�로??
     */
    static strategy1(ind) {
        const rsiOversold = ind.rsi < 30;
        const macdHistPositive = ind.macd && ind.macd?.histogram > 0;
        const macdGolden = ind.macd && ind.macd?.MACD > ind.macd?.signal;
        
        const match = rsiOversold && macdHistPositive && macdGolden;
        
        return {
            id: 1,
            name: 'RSI Oversold + MACD Golden Cross',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? (ind.rsi < 25 ? 80 : 70) : 0
        };
    }
    
    /**
     * ?�략 2: EMA Uptrend + RSI Strength
     * EMA20 > EMA50 골든 + RSI 50-65 강세구간 + MACD ?�수
     */
    static strategy2(ind) {
        const emaGolden = ind.ema20 > ind.ema50;
        const rsiStrong = ind.rsi >= 50 && ind.rsi <= 65;
        const macdHistPositive = ind.macd && ind.macd?.histogram > 0;
        
        const match = emaGolden && rsiStrong && macdHistPositive;
        
        return {
            id: 2,
            name: 'EMA Uptrend + RSI Strength',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 72 : 0
        };
    }
    
    /**
     * ?�략 3: Trend Confirmation + Momentum Confluence
     * EMA 골든 + MACD 골든 + RSI 45-60
     */
    static strategy3(ind) {
        const emaGolden = ind.ema20 > ind.ema50;
        const macdGolden = ind.macd && ind.macd?.MACD > ind.macd?.signal;
        const rsiNeutralUp = ind.rsi >= 45 && ind.rsi <= 60;
        
        const match = emaGolden && macdGolden && rsiNeutralUp;
        
        return {
            id: 3,
            name: 'Trend Confirmation + Momentum Confluence',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 73 : 0
        };
    }
    
    /**
     * ?�략 4: MACD Zero Line Golden Cross
     * MACD가 0??근처?�서 골든?�로??
     */
    static strategy4(ind) {
        const macdNearZero = ind.macd && Math.abs(ind.macd?.MACD) < Math.abs(ind.macd?.signal) * 1.5;
        const macdHistPositive = ind.macd && ind.macd?.histogram > 0;
        const macdGolden = ind.macd && ind.macd?.MACD > ind.macd?.signal;
        const macdAboveMinus100 = ind.macd && ind.macd?.MACD > -100;
        
        const match = macdNearZero && macdHistPositive && macdGolden && macdAboveMinus100;
        
        return {
            id: 4,
            name: 'MACD Zero Line Golden Cross',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 75 : 0
        };
    }
    
    /**
     * ?�략 5: BB Width Expansion + Upward Breakout
     * BB ??5% ?�상 ?�장 + 가격이 BB 중간 ??+ RSI 45-65
     */
    static strategy5(ind) {
        const bbExpanding = ind.bollingerBands && ind.bollingerBands?.bandwidth > 5;
        const priceAboveMid = ind.bollingerBands && ind.bollingerBands?.position > 50;
        const rsiHealthy = ind.rsi >= 45 && ind.rsi <= 65;
        
        const match = bbExpanding && priceAboveMid && rsiHealthy;
        
        return {
            id: 5,
            name: 'BB Width Expansion + Upward Breakout',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 75 : 0
        };
    }
    
    /**
     * ?�략 6: Triple Indicator Buy Consensus
     * RSI < 40 + MACD ?�수/골든 + BB ?�단 (position < 20)
     */
    static strategy6(ind) {
        const rsiBuy = ind.rsi < 40;
        const macdHistPositive = ind.macd && ind.macd?.histogram > 0;
        const macdGolden = ind.macd && ind.macd?.MACD > ind.macd?.signal;
        const bbLower = ind.bollingerBands && ind.bollingerBands?.position < 20;
        
        const match = rsiBuy && macdHistPositive && macdGolden && bbLower;
        
        return {
            id: 6,
            name: 'Triple Indicator Buy Consensus',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 85 : 0
        };
    }
    
    /**
     * ?�략 7: Extreme Fear + Momentum Recovery
     * Fear & Greed < 25 + RSI < 50 + MACD histogram ?�수
     */
    static strategy7(ind) {
        const extremeFear = ind.fearGreed < 25;
        const rsiBelow50 = ind.rsi < 50;
        const macdHistPositive = ind.macd && ind.macd?.histogram > 0;
        
        const match = extremeFear && rsiBelow50 && macdHistPositive;
        
        return {
            id: 7,
            name: 'Extreme Fear + Momentum Recovery',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 72 : 0
        };
    }
    
    /**
     * ?�략 8: MACD Positive Transition + Price Rise
     * MACD > 0 + MACD > Signal + RSI 45-70
     */
    static strategy8(ind) {
        const macdPositive = ind.macd && ind.macd?.MACD > 0;
        const macdGolden = ind.macd && ind.macd?.MACD > ind.macd?.signal;
        const rsiHealthy = ind.rsi >= 45 && ind.rsi <= 70;
        
        const match = macdPositive && macdGolden && rsiHealthy;
        
        return {
            id: 8,
            name: 'MACD Positive Transition + Price Rise',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 70 : 0
        };
    }
    
    /**
     * ?�략 9: EMA Support + Bounce Confirmation
     * 가격이 EMA20 근처(±1%) + EMA ?�승 + MACD ?�수 + RSI < 65
     */
    static strategy9(ind) {
        const nearEMA20 = ind.ema20 && Math.abs(ind.price - ind.ema20) / ind.ema20 < 0.01;
        const emaUptrend = ind.ema20 > ind.ema50;
        const macdHistPositive = ind.macd && ind.macd?.histogram > 0;
        const rsiBelow65 = ind.rsi < 65;
        
        const match = nearEMA20 && emaUptrend && macdHistPositive && rsiBelow65;
        
        return {
            id: 9,
            name: 'EMA Support + Bounce Confirmation',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 71 : 0
        };
    }
    
    /**
     * ?�략 10: RSI 50 Breakout + MACD Confirmation
     * RSI 50-60 + MACD histogram ?�수 + MACD 골든
     */
    static strategy10(ind) {
        const rsi50Break = ind.rsi >= 50 && ind.rsi <= 60;
        const macdHistPositive = ind.macd && ind.macd?.histogram > 0;
        const macdGolden = ind.macd && ind.macd?.MACD > ind.macd?.signal;
        
        const match = rsi50Break && macdHistPositive && macdGolden;
        
        return {
            id: 10,
            name: 'RSI 50 Breakout + MACD Confirmation',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 72 : 0
        };
    }
    
    /**
     * ?�략 11: Continuous Bullish Momentum
     * MACD histogram > 10 + MACD 골든 + RSI 48-65 + EMA 골든
     */
    static strategy11(ind) {
        const macdHistStrong = ind.macd && ind.macd?.histogram > 10;
        const macdGolden = ind.macd && ind.macd?.MACD > ind.macd?.signal;
        const rsiStrong = ind.rsi >= 48 && ind.rsi <= 65;
        const emaGolden = ind.ema20 > ind.ema50;
        
        const match = macdHistStrong && macdGolden && rsiStrong && emaGolden;
        
        return {
            id: 11,
            name: 'Continuous Bullish Momentum',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 78 : 0
        };
    }
    
    /**
     * ?�략 12: Support Bounce + Volume Confirmation
     * 가격이 EMA50 근처(±0.5%) + RSI > 35 + EMA 골든
     */
    static strategy12(ind) {
        const nearEMA50 = ind.ema50 && Math.abs(ind.price - ind.ema50) / ind.ema50 < 0.005;
        const rsiAbove35 = ind.rsi > 35;
        const emaGolden = ind.ema20 > ind.ema50;
        
        const match = nearEMA50 && rsiAbove35 && emaGolden;
        
        return {
            id: 12,
            name: 'Support Bounce + Volume Confirmation',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 70 : 0
        };
    }
    
    /**
     * ?�략 13: MACD Histogram Turning Up
     * MACD histogram 0-20 (�??�수 ?�환) + RSI 40-55
     */
    static strategy13(ind) {
        const macdHistTurning = ind.macd && ind.macd?.histogram > 0 && ind.macd?.histogram < 20;
        const rsiRecovery = ind.rsi >= 40 && ind.rsi <= 55;
        
        const match = macdHistTurning && rsiRecovery;
        
        return {
            id: 13,
            name: 'MACD Histogram Turning Up',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 68 : 0
        };
    }
    
    /**
     * ?�략 14: RSI 50 Golden + BB Mid Breakout
     * RSI 48-52 (50??근처) + BB ?�치 > 50 + MACD 골든 + EMA 골든
     */
    static strategy14(ind) {
        const rsiNear50 = ind.rsi >= 48 && ind.rsi <= 52;
        const bbAboveMid = ind.bollingerBands && ind.bollingerBands?.position > 50;
        const macdGolden = ind.macd && ind.macd?.MACD > ind.macd?.signal;
        const emaGolden = ind.ema20 > ind.ema50;
        
        const match = rsiNear50 && bbAboveMid && macdGolden && emaGolden;
        
        return {
            id: 14,
            name: 'RSI 50 Golden + BB Mid Breakout',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 73 : 0
        };
    }
    
    /**
     * ?�략 15: Volume Spike + RSI Rising
     * 매수 ?�력 > 60% + RSI 45-65 + MACD histogram ?�수
     */
    static strategy15(ind) {
        const buyPressure = ind.volumeProfile && ind.volumeProfile.buyPressure > 60;
        const rsiRising = ind.rsi >= 45 && ind.rsi <= 65;
        const macdHistPositive = ind.macd && ind.macd?.histogram > 0;
        
        const match = buyPressure && rsiRising && macdHistPositive;
        
        return {
            id: 15,
            name: 'Volume Spike + RSI Rising',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 74 : 0
        };
    }
    
    /**
     * ?�략 16: EMA20 Pullback + MACD Positive Hold
     * 가격이 EMA20 근처(±0.3%) + MACD > 0 + RSI 40-60 + EMA 골든
     */
    static strategy16(ind) {
        const nearEMA20 = ind.ema20 && Math.abs(ind.price - ind.ema20) / ind.ema20 < 0.003;
        const macdPositive = ind.macd && ind.macd?.MACD > 0;
        const rsiNeutral = ind.rsi >= 40 && ind.rsi <= 60;
        const emaGolden = ind.ema20 > ind.ema50;
        
        const match = nearEMA20 && macdPositive && rsiNeutral && emaGolden;
        
        return {
            id: 16,
            name: 'EMA20 Pullback + MACD Positive Hold',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 71 : 0
        };
    }
    
    /**
     * ?�략 17: Fear&Greed Extreme Fear + MACD Golden
     * Fear & Greed < 30 + RSI < 40 + MACD 골든 + MACD histogram ?�수
     */
    static strategy17(ind) {
        const fearBelow30 = ind.fearGreed < 30;
        const rsiBelow40 = ind.rsi < 40;
        const macdGolden = ind.macd && ind.macd?.MACD > ind.macd?.signal;
        const macdHistPositive = ind.macd && ind.macd?.histogram > 0;
        
        const match = fearBelow30 && rsiBelow40 && macdGolden && macdHistPositive;
        
        return {
            id: 17,
            name: 'Fear&Greed Extreme Fear + MACD Golden',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 75 : 0
        };
    }
    
    /**
     * ?�략 18: EMA Golden Recent + BB Expanding
     * EMA 골든 + EMA �?< 1% (최근 골든) + BB ??> 3%
     */
    static strategy18(ind) {
        const emaGolden = ind.ema20 > ind.ema50;
        const emaGapSmall = ind.ema50 && (ind.ema20 - ind.ema50) / ind.ema50 < 0.01;
        const bbExpanding = ind.bollingerBands && ind.bollingerBands?.bandwidth > 3;
        
        const match = emaGolden && emaGapSmall && bbExpanding;
        
        return {
            id: 18,
            name: 'EMA Golden Recent + BB Expanding',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 72 : 0
        };
    }
    
    /**
     * ?�략 19: RSI Rising + MACD Positive + BB Lower
     * RSI 40-55 + MACD histogram ?�수 + BB position < 45 + EMA ?�승
     */
    static strategy19(ind) {
        const rsiRising = ind.rsi >= 40 && ind.rsi <= 55;
        const macdHistPositive = ind.macd && ind.macd?.histogram > 0;
        const bbLower = ind.bollingerBands && ind.bollingerBands?.position < 45;
        const emaUptrend = ind.ema20 > ind.ema50;
        
        const match = rsiRising && macdHistPositive && bbLower && emaUptrend;
        
        return {
            id: 19,
            name: 'RSI Rising + MACD Positive + BB Lower',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 71 : 0
        };
    }
    
    /**
     * ?�략 20: BB Squeeze Release Breakout Up
     * BB ??2-4% (?�퀴즈 ?�제) + BB position > 55 + MACD histogram ?�수
     */
    static strategy20(ind) {
        const bbSqueezeRelease = ind.bollingerBands && 
            ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth <= 4;
        const breakingUp = ind.bollingerBands && ind.bollingerBands?.position > 55;
        const macdHistPositive = ind.macd && ind.macd?.histogram > 0;
        
        const match = bbSqueezeRelease && breakingUp && macdHistPositive;
        
        return {
            id: 20,
            name: 'BB Squeeze Release Breakout Up',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 74 : 0
        };
    }
    
    /**
     * ?�략 21: Trend Strengthen + Momentum
     * EMA �?> 0.3% + MACD histogram > 20 + RSI 50-65 + MACD 골든
     */
    static strategy21(ind) {
        const emaGapStrong = ind.ema50 && (ind.ema20 - ind.ema50) / ind.ema50 > 0.003;
        const macdHistStrong = ind.macd && ind.macd?.histogram > 20;
        const rsiStrong = ind.rsi >= 50 && ind.rsi <= 65;
        const macdGolden = ind.macd && ind.macd?.MACD > ind.macd?.signal;
        
        const match = emaGapStrong && macdHistStrong && rsiStrong && macdGolden;
        
        return {
            id: 21,
            name: 'Trend Strengthen + Momentum',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 76 : 0
        };
    }
    
    /**
     * ?�략 22: MACD Histogram Reversal + RSI Up
     * MACD histogram 0-30 (�?반전) + RSI 45-60 + MACD > -50
     */
    static strategy22(ind) {
        const macdHistReversal = ind.macd && ind.macd?.histogram > 0 && ind.macd?.histogram < 30;
        const rsiUp = ind.rsi >= 45 && ind.rsi <= 60;
        const macdRecovering = ind.macd && ind.macd?.MACD > -50;
        
        const match = macdHistReversal && rsiUp && macdRecovering;
        
        return {
            id: 22,
            name: 'MACD Histogram Reversal + RSI Up',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 70 : 0
        };
    }
    
    /**
     * ?�략 23: Multi Signal Bullish Confirmation
     * EMA 골든 + MACD 골든 + MACD histogram ?�수 + RSI 50-62
     */
    static strategy23(ind) {
        const emaGolden = ind.ema20 > ind.ema50;
        const macdGolden = ind.macd && ind.macd?.MACD > ind.macd?.signal;
        const macdHistPositive = ind.macd && ind.macd?.histogram > 0;
        const rsiBullish = ind.rsi >= 50 && ind.rsi <= 62;
        
        const match = emaGolden && macdGolden && macdHistPositive && rsiBullish;
        
        return {
            id: 23,
            name: 'Multi Signal Bullish Confirmation',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 77 : 0
        };
    }
    
    /**
     * ?�략 24: Fear&Greed Rebound + RSI
     * Fear & Greed 25-40 (공포?�서 반등) + RSI 35-50
     */
    static strategy24(ind) {
        const fearRebound = ind.fearGreed >= 25 && ind.fearGreed <= 40;
        const rsiRecovery = ind.rsi >= 35 && ind.rsi <= 50;
        
        const match = fearRebound && rsiRecovery;
        
        return {
            id: 24,
            name: 'Fear&Greed Rebound + RSI',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 68 : 0
        };
    }
    
    /**
     * ?�략 25: Multi Indicator Mild Up + EMA
     * RSI 48-58 + MACD histogram 5-50 + BB position 35-50 + EMA ?�승
     */
    static strategy25(ind) {
        const rsiMild = ind.rsi >= 48 && ind.rsi <= 58;
        const macdHistMild = ind.macd && ind.macd?.histogram >= 5 && ind.macd?.histogram <= 50;
        const bbLowerMid = ind.bollingerBands && 
            ind.bollingerBands?.position >= 35 && ind.bollingerBands?.position <= 50;
        const emaUptrend = ind.ema20 > ind.ema50;
        
        const match = rsiMild && macdHistMild && bbLowerMid && emaUptrend;
        
        return {
            id: 25,
            name: 'Multi Indicator Mild Up + EMA',
            direction: 'UP',
            match: Boolean(match),
            confidence: match ? 69 : 0
        };
    }
    
    /**
     * 모든 UP ?�략 ?�행
     */
    static analyzeAll(indicators) {
        return [
            this.strategy1(indicators),
            this.strategy2(indicators),
            this.strategy3(indicators),
            this.strategy4(indicators),
            this.strategy5(indicators),
            this.strategy6(indicators),
            this.strategy7(indicators),
            this.strategy8(indicators),
            this.strategy9(indicators),
            this.strategy10(indicators),
            this.strategy11(indicators),
            this.strategy12(indicators),
            this.strategy13(indicators),
            this.strategy14(indicators),
            this.strategy15(indicators),
            this.strategy16(indicators),
            this.strategy17(indicators),
            this.strategy18(indicators),
            this.strategy19(indicators),
            this.strategy20(indicators),
            this.strategy21(indicators),
            this.strategy22(indicators),
            this.strategy23(indicators),
            this.strategy24(indicators),
            this.strategy25(indicators)
        ];
    }
}

