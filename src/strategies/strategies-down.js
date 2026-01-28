/**
 * DOWN ?�략 (ID: 5001-5025)
 * 15분봉 기�? ?�락 ?�측 ?�략
 */

export class StrategiesDown {
    
    /**
     * ?�략 5001: RSI Overbought + MACD Dead Cross
     * RSI > 70 과매??+ MACD ?�드?�로??
     */
    static strategy5001(ind) {
        const rsiOverbought = ind.rsi > 70;
        const macdHistNegative = ind.macd?.histogram < 0;
        const macdDead = ind.macd?.MACD < ind.macd?.signal;
        
        const match = rsiOverbought && macdHistNegative && macdDead;
        
        return {
            id: 5001,
            name: 'RSI Overbought + MACD Dead Cross',
            direction: 'DOWN',
            match,
            confidence: match ? (ind.rsi > 75 ? 80 : 70) : 0
        };
    }
    
    /**
     * ?�략 5002: BB Upper + Volume Surge
     * BB position > 80 + 거래??급증
     */
    static strategy5002(ind) {
        const bbUpper = ind.bollingerBands && ind.bollingerBands.position > 80;
        const volumeSurge = ind.volumeProfile && ind.volumeProfile.surge;
        
        const match = Boolean(bbUpper && volumeSurge);
        
        return {
            id: 5002,
            name: 'BB Upper + Volume Surge',
            direction: 'DOWN',
            match,
            confidence: match ? 72 : 0
        };
    }
    
    /**
     * ?�략 5003: EMA Dead + RSI Reversal Down
     * EMA20 < EMA50 ?�드 + RSI 55-65 + MACD histogram ?�수
     */
    static strategy5003(ind) {
        const emaDead = ind.ema20 < ind.ema50;
        const rsiFalling = ind.rsi >= 55 && ind.rsi <= 65;
        const macdHistNegative = ind.macd?.histogram < 0;
        
        const match = emaDead && rsiFalling && macdHistNegative;
        
        return {
            id: 5003,
            name: 'EMA Dead + RSI Reversal Down',
            direction: 'DOWN',
            match,
            confidence: match ? 68 : 0
        };
    }
    
    /**
     * ?�략 5004: MACD Zero Line Dead Cross
     * MACD 0??근처 + MACD histogram ?�수 + MACD ?�드 + MACD < 100
     */
    static strategy5004(ind) {
        const macdNearZero = ind.macd && Math.abs(ind.macd?.MACD) < Math.abs(ind.macd?.signal) * 1.5;
        const macdHistNegative = ind.macd?.histogram < 0;
        const macdDead = ind.macd?.MACD < ind.macd?.signal;
        const macdBelow100 = ind.macd?.MACD < 100;
        
        const match = Boolean(macdNearZero && macdHistNegative && macdDead && macdBelow100);
        
        return {
            id: 5004,
            name: 'MACD Zero Line Dead Cross',
            direction: 'DOWN',
            match,
            confidence: match ? 75 : 0
        };
    }
    
    /**
     * ?�략 5005: RSI Bearish Divergence
     * RSI ?�이버전??(가�??�고가, RSI ?�락) + RSI > 60
     * Note: ?�이버전??감�???별도 로직 ?�요, ?�기??근사 조건 ?�용
     */
    static strategy5005(ind) {
        // 간단???�이버전??근사: RSI가 ?��???MACD가 ?�해지??경우
        const rsiHigh = ind.rsi > 60;
        // prevHistogram???�으�??�재 histogram???�수?��?�??��?
        const macdWeakening = ind.macd && (
            (ind.macd?.prevHistogram !== undefined && ind.macd?.histogram < ind.macd?.prevHistogram) ||
            (ind.macd?.prevHistogram === undefined && ind.macd?.histogram < 0)
        );
        
        const match = rsiHigh && macdWeakening;
        
        return {
            id: 5005,
            name: 'RSI Bearish Divergence',
            direction: 'DOWN',
            match,
            confidence: match ? 65 : 0
        };
    }
    
    /**
     * ?�략 5006: Triple Indicator Sell Consensus
     * RSI > 60 + MACD histogram ?�수 + MACD ?�드 + BB position > 80
     */
    static strategy5006(ind) {
        const rsiHigh = ind.rsi > 60;
        const macdHistNegative = ind.macd?.histogram < 0;
        const macdDead = ind.macd?.MACD < ind.macd?.signal;
        const bbUpper = ind.bollingerBands?.position > 80;
        
        const match = rsiHigh && macdHistNegative && macdDead && bbUpper;
        
        return {
            id: 5006,
            name: 'Triple Indicator Sell Consensus',
            direction: 'DOWN',
            match,
            confidence: match ? 85 : 0
        };
    }
    
    /**
     * ?�략 5007: Extreme Greed + RSI Overbought
     * Fear & Greed > 75 + RSI > 65
     */
    static strategy5007(ind) {
        const extremeGreed = ind.fearGreed > 75;
        const rsiHigh = ind.rsi > 65;
        
        const match = Boolean(extremeGreed && rsiHigh);
        
        return {
            id: 5007,
            name: 'Extreme Greed + RSI Overbought',
            direction: 'DOWN',
            match,
            confidence: match ? 72 : 0
        };
    }
    
    /**
     * ?�략 5008: Downtrend Continuation
     * EMA ?�드 + RSI 40-55 + MACD ?�드 + BB position > 30
     */
    static strategy5008(ind) {
        const emaDead = ind.ema20 < ind.ema50;
        const rsiDown = ind.rsi >= 40 && ind.rsi <= 55;
        const macdDead = ind.macd?.MACD < ind.macd?.signal;
        const bbNotBottom = ind.bollingerBands?.position > 30;
        
        const match = emaDead && rsiDown && macdDead && bbNotBottom;
        
        return {
            id: 5008,
            name: 'Downtrend Continuation',
            direction: 'DOWN',
            match,
            confidence: match ? 70 : 0
        };
    }
    
    /**
     * ?�략 5009: MACD Dead + BB Upper
     * MACD ?�드 + RSI 50-65 + BB position > 60
     */
    static strategy5009(ind) {
        const macdDead = ind.macd?.MACD < ind.macd?.signal;
        const rsiMid = ind.rsi >= 50 && ind.rsi <= 65;
        const bbUpper = ind.bollingerBands?.position > 60;
        
        const match = Boolean(macdDead && rsiMid && bbUpper);
        
        return {
            id: 5009,
            name: 'MACD Dead + BB Upper',
            direction: 'DOWN',
            match,
            confidence: match ? 68 : 0
        };
    }
    
    /**
     * ?�략 5010: Resistance Rejection + Volume Surge
     * BB position > 80 + RSI > 55
     */
    static strategy5010(ind) {
        const bbNearUpper = ind.bollingerBands && ind.bollingerBands.position > 80;
        const rsiAbove55 = ind.rsi > 55;
        
        const match = Boolean(bbNearUpper && rsiAbove55);
        
        return {
            id: 5010,
            name: 'Resistance Rejection + Volume Surge',
            direction: 'DOWN',
            match,
            confidence: match ? 67 : 0
        };
    }
    
    /**
     * ?�략 5011: Extreme Overbought Zone
     * RSI 60-70 + BB position > 70
     */
    static strategy5011(ind) {
        const rsiOverboughtZone = ind.rsi >= 60 && ind.rsi <= 70;
        const bbHigh = ind.bollingerBands && ind.bollingerBands.position > 70;
        
        const match = rsiOverboughtZone && bbHigh;
        
        return {
            id: 5011,
            name: 'Extreme Overbought Zone',
            direction: 'DOWN',
            match,
            confidence: match ? 66 : 0
        };
    }
    
    /**
     * ?�략 5012: MACD Histogram Turning Down
     * MACD histogram -20 ~ 0 + RSI 45-60
     */
    static strategy5012(ind) {
        const macdHistTurning = ind.macd?.histogram >= -20 && ind.macd?.histogram < 0;
        const rsiMid = ind.rsi >= 45 && ind.rsi <= 60;
        
        const match = Boolean(macdHistTurning && rsiMid);
        
        return {
            id: 5012,
            name: 'MACD Histogram Turning Down',
            direction: 'DOWN',
            match,
            confidence: match ? 68 : 0
        };
    }
    
    /**
     * ?�략 5013: EMA Dead + RSI Neutral + BB Upper
     * EMA ?�드 + RSI 40-60 + BB position > 50
     */
    static strategy5013(ind) {
        const emaDead = ind.ema20 < ind.ema50;
        const rsiNeutral = ind.rsi >= 40 && ind.rsi <= 60;
        const bbAboveMid = ind.bollingerBands && ind.bollingerBands.position > 50;
        
        const match = emaDead && rsiNeutral && bbAboveMid;
        
        return {
            id: 5013,
            name: 'EMA Dead + RSI Neutral + BB Upper',
            direction: 'DOWN',
            match,
            confidence: match ? 67 : 0
        };
    }
    
    /**
     * ?�략 5014: Triple EMA Bearish Alignment + RSI Down
     * EMA ?�드 + RSI 45-65 + MACD ?�드 + BB position < 40
     */
    static strategy5014(ind) {
        const emaDead = ind.ema20 < ind.ema50;
        const rsiMid = ind.rsi >= 45 && ind.rsi <= 65;
        const macdDead = ind.macd?.MACD < ind.macd?.signal;
        const bbLower = ind.bollingerBands?.position < 40;
        
        const match = emaDead && rsiMid && macdDead && bbLower;
        
        return {
            id: 5014,
            name: 'Triple EMA Bearish Alignment + RSI Down',
            direction: 'DOWN',
            match,
            confidence: match ? 72 : 0
        };
    }
    
    /**
     * ?�략 5015: Overbought Peak + Momentum Exhaustion
     * RSI 65-80 + MACD ?�드
     */
    static strategy5015(ind) {
        const rsiPeak = ind.rsi >= 65 && ind.rsi <= 80;
        const macdDead = ind.macd?.MACD < ind.macd?.signal;
        
        const match = rsiPeak && macdDead;
        
        return {
            id: 5015,
            name: 'Overbought Peak + Momentum Exhaustion',
            direction: 'DOWN',
            match,
            confidence: match ? 71 : 0
        };
    }
    
    /**
     * ?�략 5016: Fear&Greed Extreme Greed + MACD Dead
     * Fear & Greed > 70 + RSI > 60 + MACD ?�드 + MACD histogram ?�수
     */
    static strategy5016(ind) {
        const greedHigh = ind.fearGreed > 70;
        const rsiHigh = ind.rsi > 60;
        const macdDead = ind.macd?.MACD < ind.macd?.signal;
        const macdHistNegative = ind.macd?.histogram < 0;
        
        const match = Boolean(greedHigh && rsiHigh && macdDead && macdHistNegative);
        
        return {
            id: 5016,
            name: 'Fear&Greed Extreme Greed + MACD Dead',
            direction: 'DOWN',
            match,
            confidence: match ? 75 : 0
        };
    }
    
    /**
     * ?�략 5017: EMA Dead Recent + BB Expanding
     * EMA ?�드 + EMA �?< 1% (최근 ?�드) + BB ??> 3%
     */
    static strategy5017(ind) {
        const emaDead = ind.ema20 < ind.ema50;
        const emaGapSmall = ind.ema50 && Math.abs(ind.ema20 - ind.ema50) / ind.ema50 < 0.01;
        const bbExpanding = ind.bollingerBands && ind.bollingerBands.bandwidth > 3;
        
        const match = emaDead && emaGapSmall && bbExpanding;
        
        return {
            id: 5017,
            name: 'EMA Dead Recent + BB Expanding',
            direction: 'DOWN',
            match,
            confidence: match ? 72 : 0
        };
    }
    
    /**
     * ?�략 5018: RSI Falling + MACD Negative + BB Upper
     * RSI 45-60 + MACD histogram ?�수 + BB position > 55 + EMA ?�락
     */
    static strategy5018(ind) {
        const rsiFalling = ind.rsi >= 45 && ind.rsi <= 60;
        const macdHistNegative = ind.macd?.histogram < 0;
        const bbUpper = ind.bollingerBands?.position > 55;
        const emaDowntrend = ind.ema20 < ind.ema50;
        
        const match = rsiFalling && macdHistNegative && bbUpper && emaDowntrend;
        
        return {
            id: 5018,
            name: 'RSI Falling + MACD Negative + BB Upper',
            direction: 'DOWN',
            match,
            confidence: match ? 71 : 0
        };
    }
    
    /**
     * ?�략 5019: BB Squeeze Release Breakout Down
     * BB ??2-4% + BB position < 45 + MACD histogram ?�수
     */
    static strategy5019(ind) {
        const bbSqueezeRelease = ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth <= 4;
        const breakingDown = ind.bollingerBands?.position < 45;
        const macdHistNegative = ind.macd?.histogram < 0;
        
        const match = Boolean(bbSqueezeRelease && breakingDown && macdHistNegative);
        
        return {
            id: 5019,
            name: 'BB Squeeze Release Breakout Down',
            direction: 'DOWN',
            match,
            confidence: match ? 74 : 0
        };
    }
    
    /**
     * ?�략 5020: MACD Dead + BB Upper Mid
     * MACD ?�드 + BB position 50-70
     */
    static strategy5020(ind) {
        const macdDead = ind.macd?.MACD < ind.macd?.signal;
        const bbUpperMid = ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 70;
        
        const match = Boolean(macdDead && bbUpperMid);
        
        return {
            id: 5020,
            name: 'MACD Dead + BB Upper Mid',
            direction: 'DOWN',
            match,
            confidence: match ? 66 : 0
        };
    }
    
    /**
     * ?�략 5021: BB Upper Rejection + MACD Weakening
     * BB position > 90 + RSI > 60
     */
    static strategy5021(ind) {
        const bbExtremeUpper = ind.bollingerBands && ind.bollingerBands.position > 90;
        const rsiHigh = ind.rsi > 60;
        
        const match = Boolean(bbExtremeUpper && rsiHigh);
        
        return {
            id: 5021,
            name: 'BB Upper Rejection + MACD Weakening',
            direction: 'DOWN',
            match,
            confidence: match ? 73 : 0
        };
    }
    
    /**
     * ?�략 5022: EMA Downtrend + RSI 50 Break Down
     * EMA ?�락 + RSI 40-50 (50???�래�??�탈)
     */
    static strategy5022(ind) {
        const emaDowntrend = ind.ema20 < ind.ema50;
        const rsiBreaking50 = ind.rsi >= 40 && ind.rsi <= 50;
        
        const match = emaDowntrend && rsiBreaking50;
        
        return {
            id: 5022,
            name: 'EMA Downtrend + RSI 50 Break Down',
            direction: 'DOWN',
            match,
            confidence: match ? 68 : 0
        };
    }
    
    /**
     * ?�략 5023: MACD Dead Cross + RSI 50 Breakdown
     * MACD ?�드 + RSI 48-52 + BB position < 50
     */
    static strategy5023(ind) {
        const macdDead = ind.macd?.MACD < ind.macd?.signal;
        const rsiNear50 = ind.rsi >= 48 && ind.rsi <= 52;
        const bbBelowMid = ind.bollingerBands?.position < 50;
        
        const match = Boolean(macdDead && rsiNear50 && bbBelowMid);
        
        return {
            id: 5023,
            name: 'MACD Dead Cross + RSI 50 Breakdown',
            direction: 'DOWN',
            match,
            confidence: match ? 69 : 0
        };
    }
    
    /**
     * ?�략 5024: Fear&Greed Falling + RSI
     * Fear & Greed 60-75 (?�욕?�서 ?�락) + RSI 50-65
     */
    static strategy5024(ind) {
        const greedFalling = ind.fearGreed >= 60 && ind.fearGreed <= 75;
        const rsiMid = ind.rsi >= 50 && ind.rsi <= 65;
        
        const match = Boolean(greedFalling && rsiMid);
        
        return {
            id: 5024,
            name: 'Fear&Greed Falling + RSI',
            direction: 'DOWN',
            match,
            confidence: match ? 68 : 0
        };
    }
    
    /**
     * ?�략 5025: Multi Indicator Mild Down + EMA
     * RSI 42-52 + MACD histogram -50 ~ -5 + BB position 50-65 + EMA ?�락
     */
    static strategy5025(ind) {
        const rsiMild = ind.rsi >= 42 && ind.rsi <= 52;
        const macdHistMild = ind.macd?.histogram >= -50 && ind.macd?.histogram <= -5;
        const bbUpperMid = ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 65;
        const emaDowntrend = ind.ema20 < ind.ema50;
        
        const match = rsiMild && macdHistMild && bbUpperMid && emaDowntrend;
        
        return {
            id: 5025,
            name: 'Multi Indicator Mild Down + EMA',
            direction: 'DOWN',
            match,
            confidence: match ? 69 : 0
        };
    }
    
    /**
     * 모든 DOWN ?�략 ?�행
     */
    static analyzeAll(indicators) {
        return [
            this.strategy5001(indicators),
            this.strategy5002(indicators),
            this.strategy5003(indicators),
            this.strategy5004(indicators),
            this.strategy5005(indicators),
            this.strategy5006(indicators),
            this.strategy5007(indicators),
            this.strategy5008(indicators),
            this.strategy5009(indicators),
            this.strategy5010(indicators),
            this.strategy5011(indicators),
            this.strategy5012(indicators),
            this.strategy5013(indicators),
            this.strategy5014(indicators),
            this.strategy5015(indicators),
            this.strategy5016(indicators),
            this.strategy5017(indicators),
            this.strategy5018(indicators),
            this.strategy5019(indicators),
            this.strategy5020(indicators),
            this.strategy5021(indicators),
            this.strategy5022(indicators),
            this.strategy5023(indicators),
            this.strategy5024(indicators),
            this.strategy5025(indicators)
        ];
    }
}

