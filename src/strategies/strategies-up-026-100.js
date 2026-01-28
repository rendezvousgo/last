/**
 * UP ?�략 ?�장 (ID: 26-100)
 * 기존 ?�략 ?�라미터 변??- RSI, MACD ?�계�?조정
 */

export class StrategiesUp026 {
    
    // ==================== RSI ?�계�?변??(26-50) ====================
    
    /** ?�략 26: RSI 과매??20 + MACD 골든 */
    static strategy26(ind) {
        const match = ind.rsi < 20 && ind.macd?.histogram > 0 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 26, name: 'RSI Oversold 20 + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ?�략 27: RSI 과매??25 + MACD 골든 */
    static strategy27(ind) {
        const match = ind.rsi < 25 && ind.macd?.histogram > 0 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 27, name: 'RSI Oversold 25 + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ?�략 28: RSI 과매??28 + MACD 골든 */
    static strategy28(ind) {
        const match = ind.rsi < 28 && ind.macd?.histogram > 0 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 28, name: 'RSI Oversold 28 + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 29: RSI 과매??32 + MACD 골든 */
    static strategy29(ind) {
        const match = ind.rsi < 32 && ind.macd?.histogram > 0 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 29, name: 'RSI Oversold 32 + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 30: RSI 과매??35 + MACD 골든 */
    static strategy30(ind) {
        const match = ind.rsi < 35 && ind.macd?.histogram > 0 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 30, name: 'RSI Oversold 35 + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 31: RSI 과매??20 + EMA 골든 */
    static strategy31(ind) {
        const match = ind.rsi < 20 && ind.ema20 > ind.ema50;
        return { id: 31, name: 'RSI Oversold 20 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ?�략 32: RSI 과매??25 + EMA 골든 */
    static strategy32(ind) {
        const match = ind.rsi < 25 && ind.ema20 > ind.ema50;
        return { id: 32, name: 'RSI Oversold 25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ?�략 33: RSI 과매??28 + EMA 골든 */
    static strategy33(ind) {
        const match = ind.rsi < 28 && ind.ema20 > ind.ema50;
        return { id: 33, name: 'RSI Oversold 28 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 34: RSI 과매??32 + EMA 골든 */
    static strategy34(ind) {
        const match = ind.rsi < 32 && ind.ema20 > ind.ema50;
        return { id: 34, name: 'RSI Oversold 32 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 35: RSI 과매??35 + EMA 골든 */
    static strategy35(ind) {
        const match = ind.rsi < 35 && ind.ema20 > ind.ema50;
        return { id: 35, name: 'RSI Oversold 35 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ?�략 36: RSI 20 ?�하 ?�독 (극단??과매?? */
    static strategy36(ind) {
        const match = ind.rsi < 20;
        return { id: 36, name: 'RSI Extreme Oversold 20', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 37: RSI 22 ?�하 ?�독 */
    static strategy37(ind) {
        const match = ind.rsi < 22;
        return { id: 37, name: 'RSI Extreme Oversold 22', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 38: RSI 25 ?�하 + BB ?�단 30% */
    static strategy38(ind) {
        const match = ind.rsi < 25 && ind.bollingerBands?.position < 30;
        return { id: 38, name: 'RSI 25 + BB Lower 30', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ?�략 39: RSI 28 ?�하 + BB ?�단 25% */
    static strategy39(ind) {
        const match = ind.rsi < 28 && ind.bollingerBands?.position < 25;
        return { id: 39, name: 'RSI 28 + BB Lower 25', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ?�략 40: RSI 30 ?�하 + BB ?�단 20% */
    static strategy40(ind) {
        const match = ind.rsi < 30 && ind.bollingerBands?.position < 20;
        return { id: 40, name: 'RSI 30 + BB Lower 20', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 41: RSI 32 ?�하 + BB ?�단 15% */
    static strategy41(ind) {
        const match = ind.rsi < 32 && ind.bollingerBands?.position < 15;
        return { id: 41, name: 'RSI 32 + BB Lower 15', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 42: RSI 35 ?�하 + BB ?�단 10% */
    static strategy42(ind) {
        const match = ind.rsi < 35 && ind.bollingerBands?.position < 10;
        return { id: 42, name: 'RSI 35 + BB Lower 10', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 43: RSI ?�승 45??5 + MACD ?�수 */
    static strategy43(ind) {
        const match = ind.rsi >= 45 && ind.rsi <= 55 && ind.macd?.histogram > 0;
        return { id: 43, name: 'RSI Rising 45-55 + MACD Positive', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ?�략 44: RSI ?�승 48??8 + MACD ?�수 */
    static strategy44(ind) {
        const match = ind.rsi >= 48 && ind.rsi <= 58 && ind.macd?.histogram > 0;
        return { id: 44, name: 'RSI Rising 48-58 + MACD Positive', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ?�략 45: RSI ?�승 50??0 + MACD 골든 */
    static strategy45(ind) {
        const match = ind.rsi >= 50 && ind.rsi <= 60 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 45, name: 'RSI Rising 50-60 + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 46: RSI ?�승 52??2 + EMA 골든 */
    static strategy46(ind) {
        const match = ind.rsi >= 52 && ind.rsi <= 62 && ind.ema20 > ind.ema50;
        return { id: 46, name: 'RSI Rising 52-62 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 47: RSI ?�승 55??5 + EMA 골든 + MACD ?�수 */
    static strategy47(ind) {
        const match = ind.rsi >= 55 && ind.rsi <= 65 && ind.ema20 > ind.ema50 && ind.macd?.histogram > 0;
        return { id: 47, name: 'RSI Strong 55-65 + EMA + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 48: RSI 40-50 ?�복 + MACD 골든 */
    static strategy48(ind) {
        const match = ind.rsi >= 40 && ind.rsi <= 50 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 48, name: 'RSI Recovery 40-50 + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ?�략 49: RSI 38-48 ?�복 + EMA 골든 */
    static strategy49(ind) {
        const match = ind.rsi >= 38 && ind.rsi <= 48 && ind.ema20 > ind.ema50;
        return { id: 49, name: 'RSI Recovery 38-48 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ?�략 50: RSI 35-45 ?�복 + BB 중간 ??*/
    static strategy50(ind) {
        const match = ind.rsi >= 35 && ind.rsi <= 45 && ind.bollingerBands?.position > 40;
        return { id: 50, name: 'RSI Recovery 35-45 + BB Mid Up', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 };
    }
    
    // ==================== MACD ?�계�?변??(51-75) ====================
    
    /** ?�략 51: MACD ?�스?�그??> 5 + RSI < 40 */
    static strategy51(ind) {
        const match = ind.macd?.histogram > 5 && ind.rsi < 40;
        return { id: 51, name: 'MACD Hist 5 + RSI Below 40', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 52: MACD ?�스?�그??> 10 + RSI < 45 */
    static strategy52(ind) {
        const match = ind.macd?.histogram > 10 && ind.rsi < 45;
        return { id: 52, name: 'MACD Hist 10 + RSI Below 45', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 53: MACD ?�스?�그??> 15 + RSI < 50 */
    static strategy53(ind) {
        const match = ind.macd?.histogram > 15 && ind.rsi < 50;
        return { id: 53, name: 'MACD Hist 15 + RSI Below 50', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 54: MACD ?�스?�그??> 20 + RSI 45-55 */
    static strategy54(ind) {
        const match = ind.macd?.histogram > 20 && ind.rsi >= 45 && ind.rsi <= 55;
        return { id: 54, name: 'MACD Hist 20 + RSI 45-55', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 55: MACD ?�스?�그??> 30 + RSI 50-60 */
    static strategy55(ind) {
        const match = ind.macd?.histogram > 30 && ind.rsi >= 50 && ind.rsi <= 60;
        return { id: 55, name: 'MACD Hist 30 + RSI 50-60', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 56: MACD ?�스?�그??> 50 + EMA 골든 */
    static strategy56(ind) {
        const match = ind.macd?.histogram > 50 && ind.ema20 > ind.ema50;
        return { id: 56, name: 'MACD Hist Strong 50 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ?�략 57: MACD ?�인 > 0 + ?�스?�그??> 0 + RSI < 55 */
    static strategy57(ind) {
        const match = ind.macd?.MACD > 0 && ind.macd?.histogram > 0 && ind.rsi < 55;
        return { id: 57, name: 'MACD Positive Zone + RSI Below 55', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 58: MACD ?�인 > 0 + ?�스?�그??> 10 + RSI < 60 */
    static strategy58(ind) {
        const match = ind.macd?.MACD > 0 && ind.macd?.histogram > 10 && ind.rsi < 60;
        return { id: 58, name: 'MACD Positive + Hist 10 + RSI Below 60', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 59: MACD ?�인 > 10 + 골든?�로??*/
    static strategy59(ind) {
        const match = ind.macd?.MACD > 10 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 59, name: 'MACD Line 10 + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 60: MACD ?�인 > 20 + 골든?�로??*/
    static strategy60(ind) {
        const match = ind.macd?.MACD > 20 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 60, name: 'MACD Line 20 + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 61: MACD ?�인 > 50 + 골든?�로??+ EMA 골든 */
    static strategy61(ind) {
        const match = ind.macd?.MACD > 50 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50;
        return { id: 61, name: 'MACD Line 50 + Golden + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ?�략 62: MACD ?�그???�로??직후 (histogram 0-5) */
    static strategy62(ind) {
        const match = ind.macd?.histogram > 0 && ind.macd?.histogram < 5 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 62, name: 'MACD Just Crossed Golden', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ?�략 63: MACD ?�그???�로??직후 (histogram 0-10) */
    static strategy63(ind) {
        const match = ind.macd?.histogram > 0 && ind.macd?.histogram < 10 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 63, name: 'MACD Recent Golden 0-10', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ?�략 64: MACD 0???�파 직후 (MACD 0-20) */
    static strategy64(ind) {
        const match = ind.macd?.MACD > 0 && ind.macd?.MACD < 20 && ind.macd?.histogram > 0;
        return { id: 64, name: 'MACD Zero Break 0-20', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 65: MACD 0???�파 직후 (MACD 0-50) */
    static strategy65(ind) {
        const match = ind.macd?.MACD > 0 && ind.macd?.MACD < 50 && ind.macd?.histogram > 0;
        return { id: 65, name: 'MACD Zero Break 0-50', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 66: MACD ?�수?�서 ?�복 (-50 ~ 0) + 골든 */
    static strategy66(ind) {
        const match = ind.macd?.MACD > -50 && ind.macd?.MACD < 0 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 66, name: 'MACD Recovery -50 to 0 + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ?�략 67: MACD ?�수?�서 ?�복 (-100 ~ -50) + 골든 */
    static strategy67(ind) {
        const match = ind.macd?.MACD > -100 && ind.macd?.MACD < -50 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 67, name: 'MACD Recovery -100 to -50 + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ?�략 68: MACD ?�스?�그???�승 ?�환 (prevHist < 0, hist > 0) */
    static strategy68(ind) {
        const match = ind.macd?.prevHistogram < 0 && ind.macd?.histogram > 0;
        return { id: 68, name: 'MACD Histogram Turn Positive', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 69: MACD ?�스?�그???�승 ?�환 + RSI < 50 */
    static strategy69(ind) {
        const match = ind.macd?.prevHistogram < 0 && ind.macd?.histogram > 0 && ind.rsi < 50;
        return { id: 69, name: 'MACD Hist Turn + RSI Below 50', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 70: MACD ?�스?�그???�승 ?�환 + EMA 골든 */
    static strategy70(ind) {
        const match = ind.macd?.prevHistogram < 0 && ind.macd?.histogram > 0 && ind.ema20 > ind.ema50;
        return { id: 70, name: 'MACD Hist Turn + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 71: MACD 골든 + BB ?�단 30% */
    static strategy71(ind) {
        const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30;
        return { id: 71, name: 'MACD Golden + BB Lower 30', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 72: MACD 골든 + BB ?�단 25% */
    static strategy72(ind) {
        const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25;
        return { id: 72, name: 'MACD Golden + BB Lower 25', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 73: MACD 골든 + BB ?�단 20% */
    static strategy73(ind) {
        const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20;
        return { id: 73, name: 'MACD Golden + BB Lower 20', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ?�략 74: MACD ?�스?�그??증�? (hist > prevHist) + RSI ?�승 */
    static strategy74(ind) {
        const histIncreasing = ind.macd?.histogram > (ind.macd?.prevHistogram || 0);
        const match = histIncreasing && ind.macd?.histogram > 0 && ind.rsi >= 40 && ind.rsi <= 60;
        return { id: 74, name: 'MACD Hist Increasing + RSI 40-60', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 75: MACD ?�스?�그??증�? + EMA 골든 */
    static strategy75(ind) {
        const histIncreasing = ind.macd?.histogram > (ind.macd?.prevHistogram || 0);
        const match = histIncreasing && ind.macd?.histogram > 0 && ind.ema20 > ind.ema50;
        return { id: 75, name: 'MACD Hist Increasing + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    // ==================== BB/EMA ?�계�?변??(76-100) ====================
    
    /** ?�략 76: BB ?�단 5% + RSI < 30 */
    static strategy76(ind) {
        const match = ind.bollingerBands?.position < 5 && ind.rsi < 30;
        return { id: 76, name: 'BB Lower 5 + RSI Oversold 30', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ?�략 77: BB ?�단 10% + RSI < 35 */
    static strategy77(ind) {
        const match = ind.bollingerBands?.position < 10 && ind.rsi < 35;
        return { id: 77, name: 'BB Lower 10 + RSI Oversold 35', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ?�략 78: BB ?�단 15% + RSI < 40 */
    static strategy78(ind) {
        const match = ind.bollingerBands?.position < 15 && ind.rsi < 40;
        return { id: 78, name: 'BB Lower 15 + RSI Below 40', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 79: BB ?�단 20% + MACD 골든 */
    static strategy79(ind) {
        const match = ind.bollingerBands?.position < 20 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 79, name: 'BB Lower 20 + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 80: BB ?�단 25% + MACD ?�수 */
    static strategy80(ind) {
        const match = ind.bollingerBands?.position < 25 && ind.macd?.histogram > 0;
        return { id: 80, name: 'BB Lower 25 + MACD Positive', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 81: BB 중간???�파 (position 48-52) + MACD ?�수 */
    static strategy81(ind) {
        const match = ind.bollingerBands?.position >= 48 && ind.bollingerBands?.position <= 52 && ind.macd?.histogram > 0;
        return { id: 81, name: 'BB Mid Break + MACD Positive', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ?�략 82: BB 중간????(position 52-60) + EMA 골든 */
    static strategy82(ind) {
        const match = ind.bollingerBands?.position >= 52 && ind.bollingerBands?.position <= 60 && ind.ema20 > ind.ema50;
        return { id: 82, name: 'BB Above Mid + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 83: BB 밴드??< 2% (?�퀴즈) + RSI 45-55 */
    static strategy83(ind) {
        const match = ind.bollingerBands?.bandwidth < 2 && ind.rsi >= 45 && ind.rsi <= 55;
        return { id: 83, name: 'BB Squeeze + RSI Neutral', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 };
    }
    
    /** ?�략 84: BB 밴드??< 3% (?�퀴즈) + MACD 골든 */
    static strategy84(ind) {
        const match = ind.bollingerBands?.bandwidth < 3 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 84, name: 'BB Squeeze 3 + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ?�략 85: BB 밴드???�장 (> 4%) + position > 50 */
    static strategy85(ind) {
        const match = ind.bollingerBands?.bandwidth > 4 && ind.bollingerBands?.position > 50;
        return { id: 85, name: 'BB Expansion + Above Mid', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 86: BB 밴드???�장 (> 5%) + position > 55 + MACD ?�수 */
    static strategy86(ind) {
        const match = ind.bollingerBands?.bandwidth > 5 && ind.bollingerBands?.position > 55 && ind.macd?.histogram > 0;
        return { id: 86, name: 'BB Expand 5% + MACD Up', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 87: EMA20 > EMA50 (�?0.1% ?�상) + RSI < 60 */
    static strategy87(ind) {
        const emaGap = ind.ema50 ? (ind.ema20 - ind.ema50) / ind.ema50 : 0;
        const match = emaGap > 0.001 && ind.rsi < 60;
        return { id: 87, name: 'EMA Gap 0.1% + RSI Below 60', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ?�략 88: EMA20 > EMA50 (�?0.2% ?�상) + RSI < 55 */
    static strategy88(ind) {
        const emaGap = ind.ema50 ? (ind.ema20 - ind.ema50) / ind.ema50 : 0;
        const match = emaGap > 0.002 && ind.rsi < 55;
        return { id: 88, name: 'EMA Gap 0.2% + RSI Below 55', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 89: EMA20 > EMA50 (�?0.3% ?�상) + MACD ?�수 */
    static strategy89(ind) {
        const emaGap = ind.ema50 ? (ind.ema20 - ind.ema50) / ind.ema50 : 0;
        const match = emaGap > 0.003 && ind.macd?.histogram > 0;
        return { id: 89, name: 'EMA Gap 0.3% + MACD Positive', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 90: EMA20 > EMA50 (�?0.5% ?�상) + MACD 골든 */
    static strategy90(ind) {
        const emaGap = ind.ema50 ? (ind.ema20 - ind.ema50) / ind.ema50 : 0;
        const match = emaGap > 0.005 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 90, name: 'EMA Gap 0.5% + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 91: 가�?> EMA20 (0.5% ?�상) + RSI 45-60 */
    static strategy91(ind) {
        const priceAboveEMA = ind.ema20 ? (ind.price - ind.ema20) / ind.ema20 : 0;
        const match = priceAboveEMA > 0.005 && ind.rsi >= 45 && ind.rsi <= 60;
        return { id: 91, name: 'Price Above EMA20 0.5% + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ?�략 92: 가�?> EMA20 (1% ?�상) + MACD ?�수 */
    static strategy92(ind) {
        const priceAboveEMA = ind.ema20 ? (ind.price - ind.ema20) / ind.ema20 : 0;
        const match = priceAboveEMA > 0.01 && ind.macd?.histogram > 0;
        return { id: 92, name: 'Price Above EMA20 1% + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 93: 가�?EMA20 근접 (±0.2%) + EMA 골든 */
    static strategy93(ind) {
        const nearEMA = ind.ema20 ? Math.abs(ind.price - ind.ema20) / ind.ema20 : 1;
        const match = nearEMA < 0.002 && ind.ema20 > ind.ema50;
        return { id: 93, name: 'Price Near EMA20 + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 94: 가�?EMA20 근접 (±0.5%) + MACD 골든 */
    static strategy94(ind) {
        const nearEMA = ind.ema20 ? Math.abs(ind.price - ind.ema20) / ind.ema20 : 1;
        const match = nearEMA < 0.005 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 94, name: 'Price Near EMA20 0.5% + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 95: 가�?> EMA50 + 가�?< EMA20 (?��? + MACD ?�수 */
    static strategy95(ind) {
        const match = ind.price > ind.ema50 && ind.price < ind.ema20 && ind.macd?.histogram > 0;
        return { id: 95, name: 'EMA Pullback Zone + MACD Positive', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ?�략 96: SMA20 > SMA50 + RSI 45-60 */
    static strategy96(ind) {
        const match = ind.sma20 > ind.sma50 && ind.rsi >= 45 && ind.rsi <= 60;
        return { id: 96, name: 'SMA Golden + RSI 45-60', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ?�략 97: SMA20 > SMA50 + MACD 골든 */
    static strategy97(ind) {
        const match = ind.sma20 > ind.sma50 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 97, name: 'SMA Golden + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 98: EMA 골든 + SMA 골든 (?�중 ?�인) */
    static strategy98(ind) {
        const match = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50;
        return { id: 98, name: 'Double Golden EMA + SMA', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 99: EMA 골든 + SMA 골든 + RSI < 60 */
    static strategy99(ind) {
        const match = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.rsi < 60;
        return { id: 99, name: 'Double Golden + RSI Below 60', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 100: EMA 골든 + SMA 골든 + MACD ?�수 + RSI 45-65 */
    static strategy100(ind) {
        const match = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.macd?.histogram > 0 && ind.rsi >= 45 && ind.rsi <= 65;
        return { id: 100, name: 'Full Golden Alignment', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** 모든 ?�략 ?�행 (26-100) */
    static analyzeAll(indicators) {
        return [
            this.strategy26(indicators), this.strategy27(indicators), this.strategy28(indicators),
            this.strategy29(indicators), this.strategy30(indicators), this.strategy31(indicators),
            this.strategy32(indicators), this.strategy33(indicators), this.strategy34(indicators),
            this.strategy35(indicators), this.strategy36(indicators), this.strategy37(indicators),
            this.strategy38(indicators), this.strategy39(indicators), this.strategy40(indicators),
            this.strategy41(indicators), this.strategy42(indicators), this.strategy43(indicators),
            this.strategy44(indicators), this.strategy45(indicators), this.strategy46(indicators),
            this.strategy47(indicators), this.strategy48(indicators), this.strategy49(indicators),
            this.strategy50(indicators), this.strategy51(indicators), this.strategy52(indicators),
            this.strategy53(indicators), this.strategy54(indicators), this.strategy55(indicators),
            this.strategy56(indicators), this.strategy57(indicators), this.strategy58(indicators),
            this.strategy59(indicators), this.strategy60(indicators), this.strategy61(indicators),
            this.strategy62(indicators), this.strategy63(indicators), this.strategy64(indicators),
            this.strategy65(indicators), this.strategy66(indicators), this.strategy67(indicators),
            this.strategy68(indicators), this.strategy69(indicators), this.strategy70(indicators),
            this.strategy71(indicators), this.strategy72(indicators), this.strategy73(indicators),
            this.strategy74(indicators), this.strategy75(indicators), this.strategy76(indicators),
            this.strategy77(indicators), this.strategy78(indicators), this.strategy79(indicators),
            this.strategy80(indicators), this.strategy81(indicators), this.strategy82(indicators),
            this.strategy83(indicators), this.strategy84(indicators), this.strategy85(indicators),
            this.strategy86(indicators), this.strategy87(indicators), this.strategy88(indicators),
            this.strategy89(indicators), this.strategy90(indicators), this.strategy91(indicators),
            this.strategy92(indicators), this.strategy93(indicators), this.strategy94(indicators),
            this.strategy95(indicators), this.strategy96(indicators), this.strategy97(indicators),
            this.strategy98(indicators), this.strategy99(indicators), this.strategy100(indicators)
        ];
    }
}

