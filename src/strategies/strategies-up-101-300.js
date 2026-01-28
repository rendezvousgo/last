/**
 * UP ?�략 ?�장 (ID: 101-300)
 * ?�라미터 변??계속 + 복합 조건 ?�작
 */

export class StrategiesUp101 {
    
    // ==================== 복합 ?�라미터 변??(101-150) ====================
    
    /** ?�략 101: RSI 20 + MACD 골든 + BB ?�단 10% */
    static strategy101(ind) {
        const match = ind.rsi < 20 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 10;
        return { id: 101, name: 'Triple Oversold RSI20 MACD BB10', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ?�략 102: RSI 22 + MACD 골든 + BB ?�단 15% */
    static strategy102(ind) {
        const match = ind.rsi < 22 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 15;
        return { id: 102, name: 'Triple Oversold RSI22 MACD BB15', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ?�략 103: RSI 25 + MACD 골든 + BB ?�단 20% */
    static strategy103(ind) {
        const match = ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20;
        return { id: 103, name: 'Triple Oversold RSI25 MACD BB20', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ?�략 104: RSI 28 + MACD 골든 + BB ?�단 25% */
    static strategy104(ind) {
        const match = ind.rsi < 28 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25;
        return { id: 104, name: 'Triple Oversold RSI28 MACD BB25', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ?�략 105: RSI 30 + MACD 골든 + BB ?�단 30% */
    static strategy105(ind) {
        const match = ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30;
        return { id: 105, name: 'Triple Oversold RSI30 MACD BB30', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ?�략 106: RSI 20 + EMA 골든 + BB ?�단 10% */
    static strategy106(ind) {
        const match = ind.rsi < 20 && ind.ema20 > ind.ema50 && ind.bollingerBands?.position < 10;
        return { id: 106, name: 'Triple Oversold RSI20 EMA BB10', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ?�략 107: RSI 25 + EMA 골든 + BB ?�단 15% */
    static strategy107(ind) {
        const match = ind.rsi < 25 && ind.ema20 > ind.ema50 && ind.bollingerBands?.position < 15;
        return { id: 107, name: 'Triple Oversold RSI25 EMA BB15', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ?�략 108: RSI 30 + EMA 골든 + BB ?�단 20% */
    static strategy108(ind) {
        const match = ind.rsi < 30 && ind.ema20 > ind.ema50 && ind.bollingerBands?.position < 20;
        return { id: 108, name: 'Triple Oversold RSI30 EMA BB20', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ?�략 109: RSI 20 + MACD hist > 10 + EMA 골든 */
    static strategy109(ind) {
        const match = ind.rsi < 20 && ind.macd?.histogram > 10 && ind.ema20 > ind.ema50;
        return { id: 109, name: 'Strong Recovery RSI20 MACD10 EMA', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ?�략 110: RSI 25 + MACD hist > 15 + EMA 골든 */
    static strategy110(ind) {
        const match = ind.rsi < 25 && ind.macd?.histogram > 15 && ind.ema20 > ind.ema50;
        return { id: 110, name: 'Strong Recovery RSI25 MACD15 EMA', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ?�략 111: RSI 30 + MACD hist > 20 + EMA 골든 */
    static strategy111(ind) {
        const match = ind.rsi < 30 && ind.macd?.histogram > 20 && ind.ema20 > ind.ema50;
        return { id: 111, name: 'Strong Recovery RSI30 MACD20 EMA', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ?�략 112: BB ?�단 5% + MACD hist > 0 + RSI < 35 */
    static strategy112(ind) {
        const match = ind.bollingerBands?.position < 5 && ind.macd?.histogram > 0 && ind.rsi < 35;
        return { id: 112, name: 'BB Extreme Low + MACD + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ?�략 113: BB ?�단 10% + MACD hist > 5 + RSI < 40 */
    static strategy113(ind) {
        const match = ind.bollingerBands?.position < 10 && ind.macd?.histogram > 5 && ind.rsi < 40;
        return { id: 113, name: 'BB Low 10 + MACD5 + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ?�략 114: BB ?�단 15% + MACD hist > 10 + RSI < 45 */
    static strategy114(ind) {
        const match = ind.bollingerBands?.position < 15 && ind.macd?.histogram > 10 && ind.rsi < 45;
        return { id: 114, name: 'BB Low 15 + MACD10 + RSI45', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 115: BB ?�단 20% + MACD hist > 15 + RSI < 50 */
    static strategy115(ind) {
        const match = ind.bollingerBands?.position < 20 && ind.macd?.histogram > 15 && ind.rsi < 50;
        return { id: 115, name: 'BB Low 20 + MACD15 + RSI50', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 116: EMA �?0.1% + MACD 골든 + RSI 40-55 */
    static strategy116(ind) {
        const emaGap = ind.ema50 ? (ind.ema20 - ind.ema50) / ind.ema50 : 0;
        const match = emaGap > 0.001 && ind.macd?.MACD > ind.macd?.signal && ind.rsi >= 40 && ind.rsi <= 55;
        return { id: 116, name: 'EMA Gap 0.1 + MACD Golden + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 117: EMA �?0.2% + MACD 골든 + RSI 45-60 */
    static strategy117(ind) {
        const emaGap = ind.ema50 ? (ind.ema20 - ind.ema50) / ind.ema50 : 0;
        const match = emaGap > 0.002 && ind.macd?.MACD > ind.macd?.signal && ind.rsi >= 45 && ind.rsi <= 60;
        return { id: 117, name: 'EMA Gap 0.2 + MACD Golden + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 118: EMA �?0.3% + MACD 골든 + BB > 50 */
    static strategy118(ind) {
        const emaGap = ind.ema50 ? (ind.ema20 - ind.ema50) / ind.ema50 : 0;
        const match = emaGap > 0.003 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position > 50;
        return { id: 118, name: 'EMA Gap 0.3 + MACD Golden + BB Up', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 119: EMA �?0.5% + MACD hist > 20 + RSI 50-65 */
    static strategy119(ind) {
        const emaGap = ind.ema50 ? (ind.ema20 - ind.ema50) / ind.ema50 : 0;
        const match = emaGap > 0.005 && ind.macd?.histogram > 20 && ind.rsi >= 50 && ind.rsi <= 65;
        return { id: 119, name: 'EMA Gap 0.5 + MACD Strong + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ?�략 120: 가�?> EMA20 0.3% + 가�?> EMA50 + MACD ?�수 */
    static strategy120(ind) {
        const aboveEMA20 = ind.ema20 ? (ind.price - ind.ema20) / ind.ema20 > 0.003 : false;
        const aboveEMA50 = ind.price > ind.ema50;
        const match = aboveEMA20 && aboveEMA50 && ind.macd?.histogram > 0;
        return { id: 120, name: 'Price Above Both EMA + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 121: RSI 35-45 + MACD ?�환 + BB 30-50 */
    static strategy121(ind) {
        const match = ind.rsi >= 35 && ind.rsi <= 45 && ind.macd?.prevHistogram < 0 && ind.macd?.histogram > 0 && 
                     ind.bollingerBands?.position >= 30 && ind.bollingerBands?.position <= 50;
        return { id: 121, name: 'Recovery Zone RSI MACD BB', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 122: RSI 40-50 + MACD ?�환 + EMA 골든 */
    static strategy122(ind) {
        const match = ind.rsi >= 40 && ind.rsi <= 50 && ind.macd?.prevHistogram < 0 && ind.macd?.histogram > 0 && ind.ema20 > ind.ema50;
        return { id: 122, name: 'Recovery Zone RSI MACD EMA', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 123: RSI 45-55 + MACD hist 5-20 + BB 40-60 */
    static strategy123(ind) {
        const match = ind.rsi >= 45 && ind.rsi <= 55 && ind.macd?.histogram >= 5 && ind.macd?.histogram <= 20 &&
                     ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 60;
        return { id: 123, name: 'Neutral Build Up', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ?�략 124: RSI 50-60 + MACD hist 10-30 + EMA 골든 */
    static strategy124(ind) {
        const match = ind.rsi >= 50 && ind.rsi <= 60 && ind.macd?.histogram >= 10 && ind.macd?.histogram <= 30 && ind.ema20 > ind.ema50;
        return { id: 124, name: 'Bullish Continuation Zone', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 125: RSI 55-65 + MACD hist > 20 + BB > 55 */
    static strategy125(ind) {
        const match = ind.rsi >= 55 && ind.rsi <= 65 && ind.macd?.histogram > 20 && ind.bollingerBands?.position > 55;
        return { id: 125, name: 'Strong Bullish Zone', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 126: MACD ?�인 -30 ~ 0 + 골든 + RSI 35-50 */
    static strategy126(ind) {
        const match = ind.macd?.MACD > -30 && ind.macd?.MACD < 0 && ind.macd?.MACD > ind.macd?.signal && ind.rsi >= 35 && ind.rsi <= 50;
        return { id: 126, name: 'MACD Recovery Zone -30 to 0', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 127: MACD ?�인 -50 ~ -20 + 골든 + RSI < 45 */
    static strategy127(ind) {
        const match = ind.macd?.MACD > -50 && ind.macd?.MACD < -20 && ind.macd?.MACD > ind.macd?.signal && ind.rsi < 45;
        return { id: 127, name: 'MACD Recovery Zone -50 to -20', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ?�략 128: MACD ?�인 -100 ~ -50 + 골든 + RSI < 40 */
    static strategy128(ind) {
        const match = ind.macd?.MACD > -100 && ind.macd?.MACD < -50 && ind.macd?.MACD > ind.macd?.signal && ind.rsi < 40;
        return { id: 128, name: 'MACD Deep Recovery -100 to -50', direction: 'UP', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ?�략 129: MACD ?�인 0-30 + hist > 10 + RSI 45-60 */
    static strategy129(ind) {
        const match = ind.macd?.MACD > 0 && ind.macd?.MACD < 30 && ind.macd?.histogram > 10 && ind.rsi >= 45 && ind.rsi <= 60;
        return { id: 129, name: 'MACD Early Positive 0-30', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 130: MACD ?�인 30-60 + hist > 15 + EMA 골든 */
    static strategy130(ind) {
        const match = ind.macd?.MACD > 30 && ind.macd?.MACD < 60 && ind.macd?.histogram > 15 && ind.ema20 > ind.ema50;
        return { id: 130, name: 'MACD Mid Positive 30-60', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    // ==================== ?�로??조합 (131-200) ====================
    
    /** ?�략 131: RSI 20-25 + BB < 5 */
    static strategy131(ind) {
        const match = ind.rsi >= 20 && ind.rsi <= 25 && ind.bollingerBands?.position < 5;
        return { id: 131, name: 'Extreme Oversold RSI20-25 BB5', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ?�략 132: RSI 25-30 + BB < 8 */
    static strategy132(ind) {
        const match = ind.rsi >= 25 && ind.rsi <= 30 && ind.bollingerBands?.position < 8;
        return { id: 132, name: 'Deep Oversold RSI25-30 BB8', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ?�략 133: RSI 30-35 + BB < 12 */
    static strategy133(ind) {
        const match = ind.rsi >= 30 && ind.rsi <= 35 && ind.bollingerBands?.position < 12;
        return { id: 133, name: 'Oversold RSI30-35 BB12', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 134: RSI < 25 + MACD hist 증�? */
    static strategy134(ind) {
        const histIncreasing = ind.macd?.histogram > (ind.macd?.prevHistogram || -999);
        const match = ind.rsi < 25 && histIncreasing && ind.macd?.histogram > -50;
        return { id: 134, name: 'RSI25 + MACD Hist Increasing', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ?�략 135: RSI < 30 + MACD hist 증�? + EMA 골든 */
    static strategy135(ind) {
        const histIncreasing = ind.macd?.histogram > (ind.macd?.prevHistogram || -999);
        const match = ind.rsi < 30 && histIncreasing && ind.ema20 > ind.ema50;
        return { id: 135, name: 'RSI30 + MACD Inc + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 136: BB < 10 + MACD 골든 + EMA 골든 */
    static strategy136(ind) {
        const match = ind.bollingerBands?.position < 10 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50;
        return { id: 136, name: 'BB10 + Double Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ?�략 137: BB < 15 + MACD 골든 + RSI < 40 */
    static strategy137(ind) {
        const match = ind.bollingerBands?.position < 15 && ind.macd?.MACD > ind.macd?.signal && ind.rsi < 40;
        return { id: 137, name: 'BB15 + MACD Golden + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ?�략 138: BB < 20 + EMA 골든 + RSI < 45 */
    static strategy138(ind) {
        const match = ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50 && ind.rsi < 45;
        return { id: 138, name: 'BB20 + EMA Golden + RSI45', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 139: BB 밴드??< 1.5% + MACD ?�환 */
    static strategy139(ind) {
        const match = ind.bollingerBands?.bandwidth < 1.5 && ind.macd?.prevHistogram < 0 && ind.macd?.histogram > 0;
        return { id: 139, name: 'BB Tight Squeeze + MACD Turn', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 140: BB 밴드??< 2% + position > 50 + MACD ?�수 */
    static strategy140(ind) {
        const match = ind.bollingerBands?.bandwidth < 2 && ind.bollingerBands?.position > 50 && ind.macd?.histogram > 0;
        return { id: 140, name: 'BB Squeeze Break Up', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 141: BB 밴드??2-3% + position 55-70 + EMA 골든 */
    static strategy141(ind) {
        const match = ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth <= 3 &&
                     ind.bollingerBands?.position >= 55 && ind.bollingerBands?.position <= 70 && ind.ema20 > ind.ema50;
        return { id: 141, name: 'BB Expansion Start Up', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 142: BB 밴드??3-4% + position > 60 + MACD > 0 */
    static strategy142(ind) {
        const match = ind.bollingerBands?.bandwidth >= 3 && ind.bollingerBands?.bandwidth <= 4 &&
                     ind.bollingerBands?.position > 60 && ind.macd?.MACD > 0;
        return { id: 142, name: 'BB Momentum Expansion', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 143: 가�?< EMA20 < EMA50 + MACD 골든 (??��??반등) */
    static strategy143(ind) {
        const match = ind.price < ind.ema20 && ind.ema20 < ind.ema50 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 143, name: 'Counter Trend Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ?�략 144: 가�?> EMA20 > EMA50 + RSI 45-60 (추세 ?�인) */
    static strategy144(ind) {
        const match = ind.price > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi >= 45 && ind.rsi <= 60;
        return { id: 144, name: 'Trend Confirmed Setup', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 145: 가�?> EMA20 > EMA50 + MACD hist > 10 */
    static strategy145(ind) {
        const match = ind.price > ind.ema20 && ind.ema20 > ind.ema50 && ind.macd?.histogram > 10;
        return { id: 145, name: 'Trend + Momentum Aligned', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 146: SMA20 > SMA50 + EMA20 > EMA50 + RSI < 60 */
    static strategy146(ind) {
        const match = ind.sma20 > ind.sma50 && ind.ema20 > ind.ema50 && ind.rsi < 60;
        return { id: 146, name: 'Double MA Golden + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 147: SMA20 > SMA50 + MACD 골든 + BB > 45 */
    static strategy147(ind) {
        const match = ind.sma20 > ind.sma50 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position > 45;
        return { id: 147, name: 'SMA Golden + MACD + BB', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 148: EMA �?< 0.1% (초기 골든) + MACD ?�수 */
    static strategy148(ind) {
        const emaGap = ind.ema50 ? (ind.ema20 - ind.ema50) / ind.ema50 : 0;
        const match = emaGap > 0 && emaGap < 0.001 && ind.macd?.histogram > 0;
        return { id: 148, name: 'Early EMA Golden + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ?�략 149: EMA �?0.1-0.2% + MACD hist 5-15 */
    static strategy149(ind) {
        const emaGap = ind.ema50 ? (ind.ema20 - ind.ema50) / ind.ema50 : 0;
        const match = emaGap >= 0.001 && emaGap <= 0.002 && ind.macd?.histogram >= 5 && ind.macd?.histogram <= 15;
        return { id: 149, name: 'EMA Developing + MACD Mild', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 150: EMA �?0.2-0.4% + MACD hist 10-25 + RSI 50-62 */
    static strategy150(ind) {
        const emaGap = ind.ema50 ? (ind.ema20 - ind.ema50) / ind.ema50 : 0;
        const match = emaGap >= 0.002 && emaGap <= 0.004 && ind.macd?.histogram >= 10 && ind.macd?.histogram <= 25 && ind.rsi >= 50 && ind.rsi <= 62;
        return { id: 150, name: 'EMA Strong + MACD + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    // ==================== ?�양??조합 계속 (151-200) ====================
    
    /** ?�략 151: RSI ?�승??(40??5??0 ?�턴 ?��??�이?? + MACD ?�수 */
    static strategy151(ind) {
        const match = ind.rsi >= 45 && ind.rsi <= 52 && ind.macd?.histogram > 0 && ind.macd?.histogram > (ind.macd?.prevHistogram || 0);
        return { id: 151, name: 'RSI Rising Pattern + MACD Up', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 152: RSI 50 ?�파 직후 (50-53) + EMA 골든 */
    static strategy152(ind) {
        const match = ind.rsi >= 50 && ind.rsi <= 53 && ind.ema20 > ind.ema50;
        return { id: 152, name: 'RSI 50 Just Break + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ?�략 153: RSI 50 ?�파 직후 (50-53) + MACD 골든 */
    static strategy153(ind) {
        const match = ind.rsi >= 50 && ind.rsi <= 53 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 153, name: 'RSI 50 Just Break + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 154: RSI 50 ?�파 + BB 중간 ?�파 (position 50-55) */
    static strategy154(ind) {
        const match = ind.rsi >= 50 && ind.rsi <= 55 && ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 55;
        return { id: 154, name: 'RSI + BB Mid Break', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ?�략 155: BB position 증�? (40??0??0 ?��?) + MACD ?�수 */
    static strategy155(ind) {
        const match = ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 62 && ind.macd?.histogram > 0;
        return { id: 155, name: 'BB Rising Pattern + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ?�략 156: MACD hist ?�진??증�? (5-15 구간) + RSI ?�정 */
    static strategy156(ind) {
        const match = ind.macd?.histogram >= 5 && ind.macd?.histogram <= 15 && ind.rsi >= 45 && ind.rsi <= 58;
        return { id: 156, name: 'MACD Gradual Rise + RSI Stable', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ?�략 157: MACD hist ?�진??증�? (15-30) + EMA 골든 */
    static strategy157(ind) {
        const match = ind.macd?.histogram >= 15 && ind.macd?.histogram <= 30 && ind.ema20 > ind.ema50;
        return { id: 157, name: 'MACD Building + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 158: MACD hist 강세 (30-50) + RSI 55-68 */
    static strategy158(ind) {
        const match = ind.macd?.histogram >= 30 && ind.macd?.histogram <= 50 && ind.rsi >= 55 && ind.rsi <= 68;
        return { id: 158, name: 'MACD Strong + RSI Bullish', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 159: MACD hist 50+ + BB > 60 */
    static strategy159(ind) {
        const match = ind.macd?.histogram > 50 && ind.bollingerBands?.position > 60;
        return { id: 159, name: 'MACD Very Strong + BB High', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ?�략 160: 4�??�인 - EMA골든 + MACD골든 + RSI<60 + BB>45 */
    static strategy160(ind) {
        const match = ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal && ind.rsi < 60 && ind.bollingerBands?.position > 45;
        return { id: 160, name: 'Quad Confirm Bullish', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ?�략 161: RSI 28-33 + MACD hist > 0 */
    static strategy161(ind) {
        const match = ind.rsi >= 28 && ind.rsi <= 33 && ind.macd?.histogram > 0;
        return { id: 161, name: 'RSI 28-33 Recovery + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 162: RSI 33-38 + MACD hist > 5 */
    static strategy162(ind) {
        const match = ind.rsi >= 33 && ind.rsi <= 38 && ind.macd?.histogram > 5;
        return { id: 162, name: 'RSI 33-38 Recovery + MACD5', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 163: RSI 38-43 + MACD hist > 10 */
    static strategy163(ind) {
        const match = ind.rsi >= 38 && ind.rsi <= 43 && ind.macd?.histogram > 10;
        return { id: 163, name: 'RSI 38-43 + MACD Strong', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ?�략 164: RSI 43-48 + MACD 골든 + EMA 골든 */
    static strategy164(ind) {
        const match = ind.rsi >= 43 && ind.rsi <= 48 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50;
        return { id: 164, name: 'RSI Pre-50 + Double Golden', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 165: BB < 25 + RSI < 38 + MACD ?�환 */
    static strategy165(ind) {
        const match = ind.bollingerBands?.position < 25 && ind.rsi < 38 && ind.macd?.prevHistogram < 0 && ind.macd?.histogram > 0;
        return { id: 165, name: 'BB Low + RSI Low + MACD Turn', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ?�략 166: BB 25-35 + RSI 35-45 + MACD > 0 */
    static strategy166(ind) {
        const match = ind.bollingerBands?.position >= 25 && ind.bollingerBands?.position <= 35 && 
                     ind.rsi >= 35 && ind.rsi <= 45 && ind.macd?.histogram > 0;
        return { id: 166, name: 'BB25-35 RSI35-45 MACD+', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 167: BB 35-45 + RSI 45-52 + EMA 골든 */
    static strategy167(ind) {
        const match = ind.bollingerBands?.position >= 35 && ind.bollingerBands?.position <= 45 &&
                     ind.rsi >= 45 && ind.rsi <= 52 && ind.ema20 > ind.ema50;
        return { id: 167, name: 'Mid Zone Setup + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ?�략 168: BB 45-55 + RSI 52-58 + MACD hist > 10 */
    static strategy168(ind) {
        const match = ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 55 &&
                     ind.rsi >= 52 && ind.rsi <= 58 && ind.macd?.histogram > 10;
        return { id: 168, name: 'Mid to Upper Zone + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 169: BB 55-65 + RSI 55-62 + MACD 골든 */
    static strategy169(ind) {
        const match = ind.bollingerBands?.position >= 55 && ind.bollingerBands?.position <= 65 &&
                     ind.rsi >= 55 && ind.rsi <= 62 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 169, name: 'Upper Zone Bullish', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 170: 가�?EMA20 ?�치 (±0.1%) + EMA골든 + MACD?�수 */
    static strategy170(ind) {
        const nearEMA = ind.ema20 ? Math.abs(ind.price - ind.ema20) / ind.ema20 : 1;
        const match = nearEMA < 0.001 && ind.ema20 > ind.ema50 && ind.macd?.histogram > 0;
        return { id: 170, name: 'EMA20 Touch Support', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 171: 가�?EMA50 ?�치 (±0.2%) + RSI < 50 + MACD 골든 */
    static strategy171(ind) {
        const nearEMA50 = ind.ema50 ? Math.abs(ind.price - ind.ema50) / ind.ema50 : 1;
        const match = nearEMA50 < 0.002 && ind.rsi < 50 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 171, name: 'EMA50 Touch Support', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 172: 가�?> SMA20 + 가�?> SMA50 + RSI 50-65 */
    static strategy172(ind) {
        const match = ind.price > ind.sma20 && ind.price > ind.sma50 && ind.rsi >= 50 && ind.rsi <= 65;
        return { id: 172, name: 'Price Above Both SMA + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 173: 가�?> EMA20 + 가�?> SMA20 + MACD ?�수 */
    static strategy173(ind) {
        const match = ind.price > ind.ema20 && ind.price > ind.sma20 && ind.macd?.histogram > 0;
        return { id: 173, name: 'Price Above EMA20 SMA20', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ?�략 174: EMA20 > SMA20 + EMA50 > SMA50 + RSI < 60 */
    static strategy174(ind) {
        const match = ind.ema20 > ind.sma20 && ind.ema50 > ind.sma50 && ind.rsi < 60;
        return { id: 174, name: 'EMA Leading SMA', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ?�략 175: RSI ??(< 25) + ?�기 반등 (hist > -10 and increasing) */
    static strategy175(ind) {
        const histImproving = ind.macd?.histogram > (ind.macd?.prevHistogram || -999);
        const match = ind.rsi < 25 && ind.macd?.histogram > -10 && histImproving;
        return { id: 175, name: 'RSI Deep + Momentum Improving', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 176: BB < 8 + MACD hist 증�? */
    static strategy176(ind) {
        const histIncreasing = ind.macd?.histogram > (ind.macd?.prevHistogram || -999);
        const match = ind.bollingerBands?.position < 8 && histIncreasing;
        return { id: 176, name: 'BB Extreme Low + MACD Improving', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ?�략 177: RSI 30-35 + BB 15-25 + EMA 골든 */
    static strategy177(ind) {
        const match = ind.rsi >= 30 && ind.rsi <= 35 && ind.bollingerBands?.position >= 15 && 
                     ind.bollingerBands?.position <= 25 && ind.ema20 > ind.ema50;
        return { id: 177, name: 'Recovery Zone Triple', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 178: RSI 35-42 + BB 25-35 + MACD hist > 0 */
    static strategy178(ind) {
        const match = ind.rsi >= 35 && ind.rsi <= 42 && ind.bollingerBands?.position >= 25 &&
                     ind.bollingerBands?.position <= 35 && ind.macd?.histogram > 0;
        return { id: 178, name: 'Early Recovery Triple', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 179: RSI 42-48 + BB 35-45 + MACD 골든 */
    static strategy179(ind) {
        const match = ind.rsi >= 42 && ind.rsi <= 48 && ind.bollingerBands?.position >= 35 &&
                     ind.bollingerBands?.position <= 45 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 179, name: 'Pre-Breakout Triple', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 180: RSI 48-55 + BB 45-55 + EMA골든 + MACD?�수 */
    static strategy180(ind) {
        const match = ind.rsi >= 48 && ind.rsi <= 55 && ind.bollingerBands?.position >= 45 &&
                     ind.bollingerBands?.position <= 55 && ind.ema20 > ind.ema50 && ind.macd?.histogram > 0;
        return { id: 180, name: 'Breakout Zone Quad', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 181: RSI 55-60 + BB 55-65 + MACD hist > 15 */
    static strategy181(ind) {
        const match = ind.rsi >= 55 && ind.rsi <= 60 && ind.bollingerBands?.position >= 55 &&
                     ind.bollingerBands?.position <= 65 && ind.macd?.histogram > 15;
        return { id: 181, name: 'Bullish Zone Confirmed', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 182: MACD ?�인 -20~0 + hist 0~10 + RSI 40-52 */
    static strategy182(ind) {
        const match = ind.macd?.MACD > -20 && ind.macd?.MACD <= 0 && ind.macd?.histogram > 0 &&
                     ind.macd?.histogram <= 10 && ind.rsi >= 40 && ind.rsi <= 52;
        return { id: 182, name: 'MACD Zero Cross Zone', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 183: MACD ?�인 0~20 + hist 10~25 + BB > 50 */
    static strategy183(ind) {
        const match = ind.macd?.MACD > 0 && ind.macd?.MACD <= 20 && ind.macd?.histogram >= 10 &&
                     ind.macd?.histogram <= 25 && ind.bollingerBands?.position > 50;
        return { id: 183, name: 'MACD Early Positive Zone', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 184: MACD ?�인 20~50 + EMA 골든 + RSI 50-62 */
    static strategy184(ind) {
        const match = ind.macd?.MACD > 20 && ind.macd?.MACD <= 50 && ind.ema20 > ind.ema50 && ind.rsi >= 50 && ind.rsi <= 62;
        return { id: 184, name: 'MACD Mid Positive + Trend', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 185: MACD ?�인 > 50 + hist > 30 + RSI 55-68 */
    static strategy185(ind) {
        const match = ind.macd?.MACD > 50 && ind.macd?.histogram > 30 && ind.rsi >= 55 && ind.rsi <= 68;
        return { id: 185, name: 'MACD Strong Momentum', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ?�략 186: BB ?�퀴즈 (<2%) + RSI 45-55 + MACD 골든 */
    static strategy186(ind) {
        const match = ind.bollingerBands?.bandwidth < 2 && ind.rsi >= 45 && ind.rsi <= 55 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 186, name: 'Squeeze + Neutral RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 187: BB ?�퀴즈 ?�제 (2-3%) + position > 52 + EMA 골든 */
    static strategy187(ind) {
        const match = ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth <= 3 &&
                     ind.bollingerBands?.position > 52 && ind.ema20 > ind.ema50;
        return { id: 187, name: 'Squeeze Release Up + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 188: BB ?�장 (3-5%) + position > 58 + MACD hist > 15 */
    static strategy188(ind) {
        const match = ind.bollingerBands?.bandwidth >= 3 && ind.bollingerBands?.bandwidth <= 5 &&
                     ind.bollingerBands?.position > 58 && ind.macd?.histogram > 15;
        return { id: 188, name: 'BB Expansion Momentum', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 189: BB 강한 ?�장 (>5%) + position > 65 + RSI 55-70 */
    static strategy189(ind) {
        const match = ind.bollingerBands?.bandwidth > 5 && ind.bollingerBands?.position > 65 && ind.rsi >= 55 && ind.rsi <= 70;
        return { id: 189, name: 'BB Expand 5% + RSI Mid', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ?�략 190: 가�?변???�음 + MACD ?�적 ?�수 */
    static strategy190(ind) {
        const match = ind.bollingerBands?.bandwidth < 2.5 && ind.macd?.MACD > 0 && ind.macd?.histogram > 0;
        return { id: 190, name: 'Low Volatility Accumulation', direction: 'UP', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ?�략 191: 3�??�승 - RSI ?�승?� + MACD ?�승 + BB ?�승 */
    static strategy191(ind) {
        const rsiUp = ind.rsi >= 48 && ind.rsi <= 62;
        const macdUp = ind.macd?.histogram > 5 && ind.macd?.histogram > (ind.macd?.prevHistogram || 0);
        const bbUp = ind.bollingerBands?.position >= 48 && ind.bollingerBands?.position <= 65;
        const match = rsiUp && macdUp && bbUp;
        return { id: 191, name: 'Triple Rising Alignment', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 192: 모멘?� ?�환 초기 */
    static strategy192(ind) {
        const match = ind.macd?.prevHistogram < 0 && ind.macd?.histogram > 0 && ind.rsi >= 35 && ind.rsi <= 50;
        return { id: 192, name: 'Early Momentum Turn', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 193: 모멘?� ?�환 ?�인 */
    static strategy193(ind) {
        const match = ind.macd?.prevHistogram < 0 && ind.macd?.histogram > 0 && ind.ema20 > ind.ema50 && ind.rsi < 55;
        return { id: 193, name: 'Momentum Turn Confirmed', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 194: RSI + BB ?�시 ?�??*/
    static strategy194(ind) {
        const match = ind.rsi < 28 && ind.bollingerBands?.position < 12;
        return { id: 194, name: 'RSI + BB Double Bottom', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ?�략 195: RSI + BB ?�시 ?�??+ MACD ?�환 */
    static strategy195(ind) {
        const match = ind.rsi < 32 && ind.bollingerBands?.position < 18 && ind.macd?.prevHistogram < 0 && ind.macd?.histogram > 0;
        return { id: 195, name: 'Double Bottom + MACD Turn', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ?�략 196: ?�체 ?�렬 강세 */
    static strategy196(ind) {
        const match = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.macd?.MACD > ind.macd?.signal &&
                     ind.macd?.histogram > 10 && ind.rsi >= 50 && ind.rsi <= 65;
        return { id: 196, name: 'Full Bullish Alignment', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ?�략 197: 보수??매수 - 모든 지??중립~강세 */
    static strategy197(ind) {
        const match = ind.rsi >= 45 && ind.rsi <= 58 && ind.macd?.histogram >= 5 && ind.macd?.histogram <= 30 &&
                     ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 60 && ind.ema20 > ind.ema50;
        return { id: 197, name: 'Conservative Buy Setup', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 198: 공격??매수 - 과매??반등 */
    static strategy198(ind) {
        const match = ind.rsi < 25 && ind.bollingerBands?.position < 10 && ind.macd?.histogram > (ind.macd?.prevHistogram || -999);
        return { id: 198, name: 'Aggressive Oversold Buy', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ?�략 199: 추세 추종 매수 */
    static strategy199(ind) {
        const match = ind.ema20 > ind.ema50 && ind.price > ind.ema20 && ind.macd?.MACD > 0 && ind.rsi >= 50 && ind.rsi <= 65;
        return { id: 199, name: 'Trend Following Buy', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 200: 균형 ?�힌 매수 ?�호 */
    static strategy200(ind) {
        const match = ind.rsi >= 40 && ind.rsi <= 60 && ind.macd?.histogram > 0 && ind.bollingerBands?.position >= 35 &&
                     ind.bollingerBands?.position <= 65 && ind.ema20 >= ind.ema50 * 0.998;
        return { id: 200, name: 'Balanced Buy Signal', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    // ==================== 추�? ?�략 (201-300) ====================
    
    /** ?�략 201: RSI 18 ?�하 극단??과매??*/
    static strategy201(ind) {
        const match = ind.rsi < 18;
        return { id: 201, name: 'RSI Ultra Oversold 18', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ?�략 202: RSI 15 ?�하 + MACD ?�떤 ?�태??*/
    static strategy202(ind) {
        const match = ind.rsi < 15;
        return { id: 202, name: 'RSI Extreme 15', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ?�략 203: BB < 3% + RSI < 25 */
    static strategy203(ind) {
        const match = ind.bollingerBands?.position < 3 && ind.rsi < 25;
        return { id: 203, name: 'BB Extreme 3 + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ?�략 204: BB < 5% + RSI < 22 + MACD ?�환 */
    static strategy204(ind) {
        const match = ind.bollingerBands?.position < 5 && ind.rsi < 22 && ind.macd?.prevHistogram < 0 && ind.macd?.histogram > 0;
        return { id: 204, name: 'Triple Extreme + MACD Turn', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** ?�략 205: EMA 골든 + MACD ?�인 0 ?�로??*/
    static strategy205(ind) {
        const match = ind.ema20 > ind.ema50 && ind.macd?.MACD > 0 && ind.macd?.MACD < 10;
        return { id: 205, name: 'EMA Golden + MACD Zero Cross', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 206: SMA 골든 + MACD ?�인 0 ?�로??*/
    static strategy206(ind) {
        const match = ind.sma20 > ind.sma50 && ind.macd?.MACD > 0 && ind.macd?.MACD < 10;
        return { id: 206, name: 'SMA Golden + MACD Zero Cross', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 207: ?�중 MA 골든 + MACD 0 ?�로??*/
    static strategy207(ind) {
        const match = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.macd?.MACD > 0 && ind.macd?.MACD < 15;
        return { id: 207, name: 'Double MA + MACD Zero', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 208: RSI 33-40 + BB 20-30 */
    static strategy208(ind) {
        const match = ind.rsi >= 33 && ind.rsi <= 40 && ind.bollingerBands?.position >= 20 && ind.bollingerBands?.position <= 30;
        return { id: 208, name: 'RSI BB Recovery Zone', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ?�략 209: RSI 40-45 + BB 30-40 + MACD > 0 */
    static strategy209(ind) {
        const match = ind.rsi >= 40 && ind.rsi <= 45 && ind.bollingerBands?.position >= 30 &&
                     ind.bollingerBands?.position <= 40 && ind.macd?.histogram > 0;
        return { id: 209, name: 'RSI BB Mid Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ?�략 210: RSI 53-58 + BB 58-68 + EMA 골든 */
    static strategy210(ind) {
        const match = ind.rsi >= 53 && ind.rsi <= 58 && ind.bollingerBands?.position >= 58 &&
                     ind.bollingerBands?.position <= 68 && ind.ema20 > ind.ema50;
        return { id: 210, name: 'RSI BB Upper Zone', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 211-230: MACD ?�그??�?기반 */
    static strategy211(ind) {
        const gap = ind.macd ? ind.macd?.MACD - ind.macd?.signal : 0;
        const match = gap > 5 && gap < 15 && ind.rsi < 55;
        return { id: 211, name: 'MACD Signal Gap 5-15', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    static strategy212(ind) {
        const gap = ind.macd ? ind.macd?.MACD - ind.macd?.signal : 0;
        const match = gap > 15 && gap < 30 && ind.rsi < 60;
        return { id: 212, name: 'MACD Signal Gap 15-30', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    static strategy213(ind) {
        const gap = ind.macd ? ind.macd?.MACD - ind.macd?.signal : 0;
        const match = gap > 30 && ind.ema20 > ind.ema50;
        return { id: 213, name: 'MACD Signal Gap 30+ EMA', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    static strategy214(ind) {
        const gap = ind.macd ? ind.macd?.MACD - ind.macd?.signal : 0;
        const match = gap > 0 && gap < 5 && ind.macd?.histogram > 0;
        return { id: 214, name: 'MACD Fresh Cross Gap 0-5', direction: 'UP', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    static strategy215(ind) {
        const gap = ind.macd ? ind.macd?.MACD - ind.macd?.signal : 0;
        const match = gap > 10 && ind.rsi >= 45 && ind.rsi <= 58;
        return { id: 215, name: 'MACD Gap 10 + RSI 45-58', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 216-220: 가�??�치 기반 */
    static strategy216(ind) {
        const aboveEMA20 = ind.ema20 ? (ind.price - ind.ema20) / ind.ema20 : 0;
        const match = aboveEMA20 > 0.002 && aboveEMA20 < 0.008 && ind.macd?.histogram > 0;
        return { id: 216, name: 'Price 0.2-0.8% Above EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    static strategy217(ind) {
        const aboveEMA20 = ind.ema20 ? (ind.price - ind.ema20) / ind.ema20 : 0;
        const match = aboveEMA20 > 0.008 && aboveEMA20 < 0.015 && ind.ema20 > ind.ema50;
        return { id: 217, name: 'Price 0.8-1.5% Above EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    static strategy218(ind) {
        const aboveEMA50 = ind.ema50 ? (ind.price - ind.ema50) / ind.ema50 : 0;
        const match = aboveEMA50 > 0.005 && aboveEMA50 < 0.015 && ind.rsi >= 48 && ind.rsi <= 60;
        return { id: 218, name: 'Price 0.5-1.5% Above EMA50', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    static strategy219(ind) {
        const aboveEMA50 = ind.ema50 ? (ind.price - ind.ema50) / ind.ema50 : 0;
        const match = aboveEMA50 > 0.015 && aboveEMA50 < 0.03 && ind.macd?.MACD > 0;
        return { id: 219, name: 'Price 1.5-3% Above EMA50', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    static strategy220(ind) {
        const belowEMA20 = ind.ema20 ? (ind.ema20 - ind.price) / ind.ema20 : 0;
        const match = belowEMA20 > 0 && belowEMA20 < 0.005 && ind.ema20 > ind.ema50 && ind.macd?.histogram > 0;
        return { id: 220, name: 'Price Just Below EMA20 Pullback', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 221-240: BB 밴드??+ ?�치 조합 */
    static strategy221(ind) {
        const match = ind.bollingerBands?.bandwidth < 1.5 && ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 55;
        return { id: 221, name: 'BB Tight Squeeze Mid', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 };
    }
    
    static strategy222(ind) {
        const match = ind.bollingerBands?.bandwidth >= 1.5 && ind.bollingerBands?.bandwidth < 2 && ind.bollingerBands?.position > 52;
        return { id: 222, name: 'BB Starting Expansion Up', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    static strategy223(ind) {
        const match = ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth < 2.5 && ind.bollingerBands?.position > 55 && ind.macd?.histogram > 0;
        return { id: 223, name: 'BB Early Expansion + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    static strategy224(ind) {
        const match = ind.bollingerBands?.bandwidth >= 2.5 && ind.bollingerBands?.bandwidth < 3 && ind.bollingerBands?.position > 58 && ind.ema20 > ind.ema50;
        return { id: 224, name: 'BB Mid Expansion + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    static strategy225(ind) {
        const match = ind.bollingerBands?.bandwidth >= 3 && ind.bollingerBands?.bandwidth < 4 && ind.bollingerBands?.position > 62 && ind.rsi >= 52 && ind.rsi <= 65;
        return { id: 225, name: 'BB Good Expansion + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    static strategy226(ind) {
        const match = ind.bollingerBands?.bandwidth >= 4 && ind.bollingerBands?.bandwidth < 5 && ind.bollingerBands?.position > 65;
        return { id: 226, name: 'BB Strong Expansion Upper', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    static strategy227(ind) {
        const match = ind.bollingerBands?.bandwidth >= 5 && ind.bollingerBands?.position > 70 && ind.macd?.histogram > 20;
        return { id: 227, name: 'BB Very Strong Expansion', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    static strategy228(ind) {
        const match = ind.bollingerBands?.bandwidth < 2 && ind.bollingerBands?.position < 20 && ind.rsi < 35;
        return { id: 228, name: 'BB Squeeze at Bottom', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    static strategy229(ind) {
        const match = ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth < 3 && 
                     ind.bollingerBands?.position >= 20 && ind.bollingerBands?.position <= 35 && ind.macd?.histogram > 0;
        return { id: 229, name: 'BB Recovery from Bottom', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    static strategy230(ind) {
        const match = ind.bollingerBands?.bandwidth >= 3 && ind.bollingerBands?.position >= 35 && 
                     ind.bollingerBands?.position <= 50 && ind.ema20 > ind.ema50;
        return { id: 230, name: 'BB Mid Zone + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 231-250: 복합 ?�인 ?�략 */
    static strategy231(ind) {
        const match = ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50 * 0.99;
        return { id: 231, name: 'Quad Oversold Buy Signal', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    static strategy232(ind) {
        const match = ind.rsi >= 40 && ind.rsi <= 50 && ind.macd?.histogram > 5 && ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 55;
        return { id: 232, name: 'Quad Neutral-Bullish', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    static strategy233(ind) {
        const match = ind.rsi >= 50 && ind.rsi <= 58 && ind.macd?.histogram > 15 && ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 65 && ind.ema20 > ind.ema50;
        return { id: 233, name: 'Quad Bullish Confirmed', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    static strategy234(ind) {
        const match = ind.rsi >= 55 && ind.rsi <= 65 && ind.macd?.histogram > 25 && ind.bollingerBands?.position > 60 && ind.macd?.MACD > 20;
        return { id: 234, name: 'Quad Strong Bullish', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    static strategy235(ind) {
        const histImproving = ind.macd?.histogram > (ind.macd?.prevHistogram || -999);
        const match = ind.rsi < 35 && histImproving && ind.bollingerBands?.position < 25;
        return { id: 235, name: 'Triple Improving from Low', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    static strategy236(ind) {
        const histImproving = ind.macd?.histogram > (ind.macd?.prevHistogram || -999);
        const match = ind.rsi >= 35 && ind.rsi <= 45 && histImproving && ind.macd?.histogram > 0;
        return { id: 236, name: 'RSI Recovery + MACD Improving', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    static strategy237(ind) {
        const histImproving = ind.macd?.histogram > (ind.macd?.prevHistogram || -999);
        const match = ind.rsi >= 45 && ind.rsi <= 52 && histImproving && ind.ema20 > ind.ema50;
        return { id: 237, name: 'RSI Mid + MACD Improving + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    static strategy238(ind) {
        const match = ind.rsi >= 48 && ind.rsi <= 55 && ind.macd?.histogram >= 10 && ind.macd?.histogram <= 25 &&
                     ind.bollingerBands?.position >= 48 && ind.bollingerBands?.position <= 58;
        return { id: 238, name: 'Triple Mid Zone Alignment', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    static strategy239(ind) {
        const match = ind.rsi >= 52 && ind.rsi <= 60 && ind.macd?.histogram > 20 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50;
        return { id: 239, name: 'Triple Bullish Momentum', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    static strategy240(ind) {
        const match = ind.rsi >= 55 && ind.rsi <= 68 && ind.macd?.histogram > 30 && ind.bollingerBands?.position > 60 && ind.ema20 > ind.ema50;
        return { id: 240, name: 'Quad Strong Trend', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ?�략 241-260: ?�수 ?�턴 */
    static strategy241(ind) {
        const nearMid = ind.bollingerBands?.position >= 48 && ind.bollingerBands?.position <= 52;
        const match = nearMid && ind.macd?.MACD > ind.macd?.signal && ind.rsi >= 48 && ind.rsi <= 55;
        return { id: 241, name: 'BB Mid Touch + Golden + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    static strategy242(ind) {
        const match = ind.rsi >= 30 && ind.rsi <= 35 && ind.bollingerBands?.position >= 10 && ind.bollingerBands?.position <= 20 &&
                     ind.macd?.prevHistogram < ind.macd?.histogram;
        return { id: 242, name: 'Double Low Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    static strategy243(ind) {
        const emaConverging = ind.ema50 ? Math.abs(ind.ema20 - ind.ema50) / ind.ema50 < 0.003 : false;
        const match = emaConverging && ind.ema20 > ind.ema50 && ind.macd?.histogram > 0;
        return { id: 243, name: 'EMA Converging Golden', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    static strategy244(ind) {
        const emaGap = ind.ema50 ? (ind.ema20 - ind.ema50) / ind.ema50 : 0;
        const match = emaGap > 0.003 && emaGap < 0.008 && ind.rsi >= 48 && ind.rsi <= 58 && ind.macd?.histogram > 5;
        return { id: 244, name: 'EMA Healthy Gap + Momentum', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    static strategy245(ind) {
        const match = ind.price > ind.ema20 && ind.price > ind.ema50 && ind.price > ind.sma20 && ind.price > ind.sma50 && ind.rsi < 65;
        return { id: 245, name: 'Price Above All MA', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    static strategy246(ind) {
        const match = ind.ema20 > ind.ema50 && ind.ema50 > ind.sma50 && ind.macd?.histogram > 10;
        return { id: 246, name: 'Triple MA Alignment', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    static strategy247(ind) {
        const match = ind.rsi >= 45 && ind.rsi <= 55 && ind.macd?.MACD > -10 && ind.macd?.MACD < 10 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 247, name: 'Neutral Zone + Fresh Golden', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    static strategy248(ind) {
        const match = ind.bollingerBands?.bandwidth < 2.5 && ind.macd?.histogram > 5 && ind.macd?.histogram < 20 && ind.rsi >= 48 && ind.rsi <= 55;
        return { id: 248, name: 'Low Vol + Building Momentum', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    static strategy249(ind) {
        const match = ind.bollingerBands?.bandwidth >= 3 && ind.bollingerBands?.position >= 55 && ind.bollingerBands?.position <= 70 &&
                     ind.rsi >= 52 && ind.rsi <= 62;
        return { id: 249, name: 'Volatility Break Bullish', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    static strategy250(ind) {
        const match = ind.macd?.MACD > 0 && ind.macd?.signal > 0 && ind.macd?.histogram > 10 && ind.ema20 > ind.ema50;
        return { id: 250, name: 'MACD Both Positive + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 251-270: 추�? 변??*/
    static strategy251(ind) {
        const match = ind.rsi >= 25 && ind.rsi <= 30 && ind.macd?.histogram > -20 && ind.macd?.histogram < 5;
        return { id: 251, name: 'RSI 25-30 MACD Neutral', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    static strategy252(ind) {
        const match = ind.rsi >= 30 && ind.rsi <= 38 && ind.macd?.histogram > 0 && ind.macd?.histogram < 15;
        return { id: 252, name: 'RSI 30-38 MACD Early Positive', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    static strategy253(ind) {
        const match = ind.rsi >= 38 && ind.rsi <= 45 && ind.macd?.histogram >= 5 && ind.macd?.histogram <= 20;
        return { id: 253, name: 'RSI 38-45 MACD Building', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    static strategy254(ind) {
        const match = ind.rsi >= 45 && ind.rsi <= 50 && ind.macd?.histogram >= 10 && ind.macd?.histogram <= 25 && ind.ema20 > ind.ema50;
        return { id: 254, name: 'RSI 45-50 MACD Good + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    static strategy255(ind) {
        const match = ind.rsi >= 50 && ind.rsi <= 55 && ind.macd?.histogram >= 15 && ind.macd?.histogram <= 35;
        return { id: 255, name: 'RSI 50-55 MACD Strong', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    static strategy256(ind) {
        const match = ind.rsi >= 55 && ind.rsi <= 60 && ind.macd?.histogram >= 20 && ind.macd?.histogram <= 45 && ind.macd?.MACD > 0;
        return { id: 256, name: 'RSI 55-60 MACD Very Strong', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    static strategy257(ind) {
        const match = ind.rsi >= 60 && ind.rsi <= 65 && ind.macd?.histogram > 30 && ind.ema20 > ind.ema50;
        return { id: 257, name: 'RSI 60-65 Strong Momentum', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    static strategy258(ind) {
        const match = ind.bollingerBands?.position < 15 && ind.rsi < 33 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 258, name: 'BB15 RSI33 MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    static strategy259(ind) {
        const match = ind.bollingerBands?.position >= 15 && ind.bollingerBands?.position <= 25 && ind.rsi >= 33 && ind.rsi <= 40;
        return { id: 259, name: 'BB15-25 RSI33-40 Zone', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    static strategy260(ind) {
        const match = ind.bollingerBands?.position >= 25 && ind.bollingerBands?.position <= 38 && ind.rsi >= 40 && ind.rsi <= 48 && ind.macd?.histogram > 0;
        return { id: 260, name: 'BB RSI Mid Low + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ?�략 261-280: ??많�? 조합 */
    static strategy261(ind) {
        const match = ind.bollingerBands?.position >= 38 && ind.bollingerBands?.position <= 48 && ind.rsi >= 48 && ind.rsi <= 52;
        return { id: 261, name: 'BB RSI Both Near Mid', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 };
    }
    
    static strategy262(ind) {
        const match = ind.bollingerBands?.position >= 48 && ind.bollingerBands?.position <= 58 && ind.rsi >= 50 && ind.rsi <= 56 && ind.ema20 > ind.ema50;
        return { id: 262, name: 'BB RSI Mid Up + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    static strategy263(ind) {
        const match = ind.bollingerBands?.position >= 58 && ind.bollingerBands?.position <= 68 && ind.rsi >= 54 && ind.rsi <= 62 && ind.macd?.histogram > 15;
        return { id: 263, name: 'BB RSI Upper Mid + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    static strategy264(ind) {
        const match = ind.bollingerBands?.position > 65 && ind.rsi >= 58 && ind.rsi <= 68 && ind.macd?.MACD > 30;
        return { id: 264, name: 'BB RSI Upper + Strong MACD', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    static strategy265(ind) {
        const match = ind.macd?.prevHistogram < -10 && ind.macd?.histogram > -5;
        return { id: 265, name: 'MACD Hist Improving from Deep', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    static strategy266(ind) {
        const match = ind.macd?.prevHistogram >= -5 && ind.macd?.prevHistogram < 0 && ind.macd?.histogram >= 0 && ind.macd?.histogram < 5;
        return { id: 266, name: 'MACD Hist Just Turned Positive', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    static strategy267(ind) {
        const match = ind.macd?.prevHistogram >= 0 && ind.macd?.prevHistogram < 10 && ind.macd?.histogram >= 10 && ind.macd?.histogram < 20;
        return { id: 267, name: 'MACD Hist Accelerating', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    static strategy268(ind) {
        const match = ind.macd?.prevHistogram >= 10 && ind.macd?.histogram > ind.macd?.prevHistogram && ind.rsi < 62;
        return { id: 268, name: 'MACD Hist Strong Momentum', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    static strategy269(ind) {
        const match = ind.macd?.MACD > -30 && ind.macd?.MACD < -10 && ind.macd?.MACD > ind.macd?.signal && ind.rsi < 42;
        return { id: 269, name: 'MACD Recovery Zone -30 to -10', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    static strategy270(ind) {
        const match = ind.macd?.MACD >= -10 && ind.macd?.MACD < 5 && ind.macd?.MACD > ind.macd?.signal && ind.rsi >= 42 && ind.rsi <= 52;
        return { id: 270, name: 'MACD Near Zero Golden', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 271-290: ???�양??조합 */
    static strategy271(ind) {
        const match = ind.macd?.MACD >= 5 && ind.macd?.MACD < 20 && ind.macd?.histogram > 5 && ind.rsi >= 48 && ind.rsi <= 58;
        return { id: 271, name: 'MACD Early Positive + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    static strategy272(ind) {
        const match = ind.macd?.MACD >= 20 && ind.macd?.MACD < 40 && ind.macd?.histogram > 15 && ind.ema20 > ind.ema50;
        return { id: 272, name: 'MACD Mid Positive + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    static strategy273(ind) {
        const match = ind.macd?.MACD >= 40 && ind.macd?.histogram > 25 && ind.rsi >= 52 && ind.rsi <= 65;
        return { id: 273, name: 'MACD Strong Positive + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    static strategy274(ind) {
        const priceVsEMA20 = ind.ema20 ? (ind.price - ind.ema20) / ind.ema20 : 0;
        const match = priceVsEMA20 > -0.005 && priceVsEMA20 < 0.003 && ind.ema20 > ind.ema50 && ind.macd?.histogram > 0;
        return { id: 274, name: 'Price Near EMA20 Support', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    static strategy275(ind) {
        const priceVsEMA50 = ind.ema50 ? (ind.price - ind.ema50) / ind.ema50 : 0;
        const match = priceVsEMA50 > -0.003 && priceVsEMA50 < 0.005 && ind.rsi < 50 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 275, name: 'Price Near EMA50 Support', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    static strategy276(ind) {
        const match = ind.sma20 > ind.sma50 && ind.rsi >= 42 && ind.rsi <= 55 && ind.macd?.histogram > 0;
        return { id: 276, name: 'SMA Golden + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    static strategy277(ind) {
        const match = ind.ema20 > ind.sma20 && ind.price > ind.ema20 && ind.rsi >= 48 && ind.rsi <= 58;
        return { id: 277, name: 'EMA Leading + Price Above', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    static strategy278(ind) {
        const match = ind.ema50 > ind.sma50 && ind.ema20 > ind.ema50 && ind.macd?.histogram > 10;
        return { id: 278, name: 'EMA Leading Both + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    static strategy279(ind) {
        const match = ind.rsi < 28 && ind.bollingerBands?.position < 10 && ind.macd?.histogram > -30;
        return { id: 279, name: 'Extreme Low + MACD Not Terrible', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    static strategy280(ind) {
        const match = ind.rsi >= 28 && ind.rsi <= 35 && ind.bollingerBands?.position >= 10 && ind.bollingerBands?.position <= 20 && ind.macd?.histogram > -10;
        return { id: 280, name: 'Low Zone Recovery Setup', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 281-300: 마�?�?배치 */
    static strategy281(ind) {
        const match = ind.rsi >= 35 && ind.rsi <= 42 && ind.bollingerBands?.position >= 20 && ind.bollingerBands?.position <= 32 && ind.macd?.histogram > 0;
        return { id: 281, name: 'Lower Mid Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    static strategy282(ind) {
        const match = ind.rsi >= 42 && ind.rsi <= 48 && ind.bollingerBands?.position >= 32 && ind.bollingerBands?.position <= 45 && ind.ema20 > ind.ema50;
        return { id: 282, name: 'Mid Zone + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    static strategy283(ind) {
        const match = ind.rsi >= 48 && ind.rsi <= 53 && ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 55 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 283, name: 'Breakout Zone Setup', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    static strategy284(ind) {
        const match = ind.rsi >= 53 && ind.rsi <= 58 && ind.bollingerBands?.position >= 55 && ind.bollingerBands?.position <= 65 && ind.macd?.histogram > 15;
        return { id: 284, name: 'Confirmed Breakout Zone', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    static strategy285(ind) {
        const match = ind.rsi >= 58 && ind.rsi <= 65 && ind.bollingerBands?.position > 65 && ind.macd?.histogram > 25;
        return { id: 285, name: 'Strong Trend Zone', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    static strategy286(ind) {
        const allGolden = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.macd?.MACD > ind.macd?.signal;
        const match = allGolden && ind.rsi >= 45 && ind.rsi <= 60;
        return { id: 286, name: 'Triple Golden + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    static strategy287(ind) {
        const allGolden = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.macd?.MACD > ind.macd?.signal;
        const match = allGolden && ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 65;
        return { id: 287, name: 'Triple Golden + BB Zone', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    static strategy288(ind) {
        const allGolden = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.macd?.MACD > ind.macd?.signal;
        const match = allGolden && ind.macd?.histogram > 10 && ind.macd?.histogram < 40;
        return { id: 288, name: 'Triple Golden + MACD Moderate', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    static strategy289(ind) {
        const match = ind.rsi >= 40 && ind.rsi <= 55 && ind.macd?.histogram > 0 && ind.macd?.histogram < 25 &&
                     ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 60 &&
                     ind.ema20 > ind.ema50;
        return { id: 289, name: 'Balanced Bullish Setup', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    static strategy290(ind) {
        const match = ind.rsi >= 45 && ind.rsi <= 58 && ind.macd?.histogram >= 5 && ind.macd?.histogram <= 30 &&
                     ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 62 &&
                     ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50;
        return { id: 290, name: 'Optimal Buy Zone', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    static strategy291(ind) {
        const match = ind.rsi < 22 && ind.macd?.prevHistogram < 0 && ind.macd?.histogram > ind.macd?.prevHistogram;
        return { id: 291, name: 'Ultra Oversold + MACD Improving', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    static strategy292(ind) {
        const match = ind.bollingerBands?.position < 5 && ind.macd?.prevHistogram < 0 && ind.macd?.histogram > ind.macd?.prevHistogram;
        return { id: 292, name: 'BB Extreme + MACD Improving', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    static strategy293(ind) {
        const match = ind.rsi < 25 && ind.bollingerBands?.position < 8 && ind.ema20 > ind.ema50 * 0.995;
        return { id: 293, name: 'Double Extreme + EMA Close', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    static strategy294(ind) {
        const match = ind.rsi >= 48 && ind.rsi <= 52 && ind.bollingerBands?.position >= 48 && ind.bollingerBands?.position <= 52 &&
                     ind.macd?.MACD > ind.macd?.signal;
        return { id: 294, name: 'Perfect Neutral + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    static strategy295(ind) {
        const match = ind.rsi >= 50 && ind.rsi <= 55 && ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 58 &&
                     ind.macd?.histogram >= 8 && ind.macd?.histogram <= 18;
        return { id: 295, name: 'Breakout Confirmation Zone', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    static strategy296(ind) {
        const priceAboveAllMA = ind.price > ind.ema20 && ind.price > ind.ema50 && ind.price > ind.sma20 && ind.price > ind.sma50;
        const match = priceAboveAllMA && ind.rsi >= 50 && ind.rsi <= 62 && ind.macd?.histogram > 5;
        return { id: 296, name: 'Price Above All MA + Momentum', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    static strategy297(ind) {
        const allMAGolden = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50;
        const match = allMAGolden && ind.price > ind.ema20 && ind.rsi >= 48 && ind.rsi <= 60;
        return { id: 297, name: 'Full MA Alignment + Price', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    static strategy298(ind) {
        const match = ind.rsi >= 30 && ind.rsi <= 40 && ind.macd?.histogram > 0 && ind.bollingerBands?.position >= 15 &&
                     ind.bollingerBands?.position <= 30 && ind.ema20 > ind.ema50;
        return { id: 298, name: 'Early Recovery Quad', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    static strategy299(ind) {
        const match = ind.rsi >= 52 && ind.rsi <= 62 && ind.macd?.histogram > 15 && ind.bollingerBands?.position >= 55 &&
                     ind.bollingerBands?.position <= 70 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50;
        return { id: 299, name: 'Strong Bullish Quad', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    static strategy300(ind) {
        const match = ind.rsi >= 45 && ind.rsi <= 60 && ind.macd?.histogram > 0 && ind.macd?.MACD > ind.macd?.signal &&
                     ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 65 &&
                     ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50;
        return { id: 300, name: 'Ultimate Buy Signal', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }

    /** 모든 ?�략 ?�행 (101-300) */
    static analyzeAll(indicators) {
        return [
            this.strategy101(indicators), this.strategy102(indicators), this.strategy103(indicators),
            this.strategy104(indicators), this.strategy105(indicators), this.strategy106(indicators),
            this.strategy107(indicators), this.strategy108(indicators), this.strategy109(indicators),
            this.strategy110(indicators), this.strategy111(indicators), this.strategy112(indicators),
            this.strategy113(indicators), this.strategy114(indicators), this.strategy115(indicators),
            this.strategy116(indicators), this.strategy117(indicators), this.strategy118(indicators),
            this.strategy119(indicators), this.strategy120(indicators), this.strategy121(indicators),
            this.strategy122(indicators), this.strategy123(indicators), this.strategy124(indicators),
            this.strategy125(indicators), this.strategy126(indicators), this.strategy127(indicators),
            this.strategy128(indicators), this.strategy129(indicators), this.strategy130(indicators),
            this.strategy131(indicators), this.strategy132(indicators), this.strategy133(indicators),
            this.strategy134(indicators), this.strategy135(indicators), this.strategy136(indicators),
            this.strategy137(indicators), this.strategy138(indicators), this.strategy139(indicators),
            this.strategy140(indicators), this.strategy141(indicators), this.strategy142(indicators),
            this.strategy143(indicators), this.strategy144(indicators), this.strategy145(indicators),
            this.strategy146(indicators), this.strategy147(indicators), this.strategy148(indicators),
            this.strategy149(indicators), this.strategy150(indicators), this.strategy151(indicators),
            this.strategy152(indicators), this.strategy153(indicators), this.strategy154(indicators),
            this.strategy155(indicators), this.strategy156(indicators), this.strategy157(indicators),
            this.strategy158(indicators), this.strategy159(indicators), this.strategy160(indicators),
            this.strategy161(indicators), this.strategy162(indicators), this.strategy163(indicators),
            this.strategy164(indicators), this.strategy165(indicators), this.strategy166(indicators),
            this.strategy167(indicators), this.strategy168(indicators), this.strategy169(indicators),
            this.strategy170(indicators), this.strategy171(indicators), this.strategy172(indicators),
            this.strategy173(indicators), this.strategy174(indicators), this.strategy175(indicators),
            this.strategy176(indicators), this.strategy177(indicators), this.strategy178(indicators),
            this.strategy179(indicators), this.strategy180(indicators), this.strategy181(indicators),
            this.strategy182(indicators), this.strategy183(indicators), this.strategy184(indicators),
            this.strategy185(indicators), this.strategy186(indicators), this.strategy187(indicators),
            this.strategy188(indicators), this.strategy189(indicators), this.strategy190(indicators),
            this.strategy191(indicators), this.strategy192(indicators), this.strategy193(indicators),
            this.strategy194(indicators), this.strategy195(indicators), this.strategy196(indicators),
            this.strategy197(indicators), this.strategy198(indicators), this.strategy199(indicators),
            this.strategy200(indicators), this.strategy201(indicators), this.strategy202(indicators),
            this.strategy203(indicators), this.strategy204(indicators), this.strategy205(indicators),
            this.strategy206(indicators), this.strategy207(indicators), this.strategy208(indicators),
            this.strategy209(indicators), this.strategy210(indicators), this.strategy211(indicators),
            this.strategy212(indicators), this.strategy213(indicators), this.strategy214(indicators),
            this.strategy215(indicators), this.strategy216(indicators), this.strategy217(indicators),
            this.strategy218(indicators), this.strategy219(indicators), this.strategy220(indicators),
            this.strategy221(indicators), this.strategy222(indicators), this.strategy223(indicators),
            this.strategy224(indicators), this.strategy225(indicators), this.strategy226(indicators),
            this.strategy227(indicators), this.strategy228(indicators), this.strategy229(indicators),
            this.strategy230(indicators), this.strategy231(indicators), this.strategy232(indicators),
            this.strategy233(indicators), this.strategy234(indicators), this.strategy235(indicators),
            this.strategy236(indicators), this.strategy237(indicators), this.strategy238(indicators),
            this.strategy239(indicators), this.strategy240(indicators), this.strategy241(indicators),
            this.strategy242(indicators), this.strategy243(indicators), this.strategy244(indicators),
            this.strategy245(indicators), this.strategy246(indicators), this.strategy247(indicators),
            this.strategy248(indicators), this.strategy249(indicators), this.strategy250(indicators),
            this.strategy251(indicators), this.strategy252(indicators), this.strategy253(indicators),
            this.strategy254(indicators), this.strategy255(indicators), this.strategy256(indicators),
            this.strategy257(indicators), this.strategy258(indicators), this.strategy259(indicators),
            this.strategy260(indicators), this.strategy261(indicators), this.strategy262(indicators),
            this.strategy263(indicators), this.strategy264(indicators), this.strategy265(indicators),
            this.strategy266(indicators), this.strategy267(indicators), this.strategy268(indicators),
            this.strategy269(indicators), this.strategy270(indicators), this.strategy271(indicators),
            this.strategy272(indicators), this.strategy273(indicators), this.strategy274(indicators),
            this.strategy275(indicators), this.strategy276(indicators), this.strategy277(indicators),
            this.strategy278(indicators), this.strategy279(indicators), this.strategy280(indicators),
            this.strategy281(indicators), this.strategy282(indicators), this.strategy283(indicators),
            this.strategy284(indicators), this.strategy285(indicators), this.strategy286(indicators),
            this.strategy287(indicators), this.strategy288(indicators), this.strategy289(indicators),
            this.strategy290(indicators), this.strategy291(indicators), this.strategy292(indicators),
            this.strategy293(indicators), this.strategy294(indicators), this.strategy295(indicators),
            this.strategy296(indicators), this.strategy297(indicators), this.strategy298(indicators),
            this.strategy299(indicators), this.strategy300(indicators)
        ];
    }
}

