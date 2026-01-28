/**
 * DOWN 전략 확장 (ID: 6201-6400)
 * 4-지표 조합 패턴
 * 6201-6250: RSI/MACD/BB/EMA 기반 4-지표 조합
 * 6251-6300: Stoch/ADX/CCI/Williams 기반 4-지표 조합
 * 6301-6350: CCI/Williams/OBV/ATR 기반 4-지표 조합
 * 6351-6400: 복합 크로스오버 및 다이버전스 4-지표 조합
 */

export class StrategiesDown6201 {
    
    // ==================== RSI 기반 4-지표 조합 (6201-6225) ====================
    
    /** 전략 6201: RSI + MACD + BB + EMA 쿼드 */
    static strategy6201(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50;
        return { id: 6201, name: 'RSI MACD BB EMA Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6202: RSI + MACD + BB + Stoch 쿼드 */
    static strategy6202(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 70 && ind.stochastic?.k > 70;
        return { id: 6202, name: 'RSI MACD BB Stoch Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6203: RSI + MACD + BB + ADX 쿼드 */
    static strategy6203(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 65 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6203, name: 'RSI MACD BB ADX Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6204: RSI + MACD + BB + CCI 쿼드 */
    static strategy6204(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 65 && ind.cci > 80;
        return { id: 6204, name: 'RSI MACD BB CCI Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6205: RSI + MACD + BB + Williams 쿼드 */
    static strategy6205(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 65 && ind.williamsR > -30;
        return { id: 6205, name: 'RSI MACD BB Williams Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6206: RSI + MACD + BB + OBV 쿼드 */
    static strategy6206(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 65 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6206, name: 'RSI MACD BB OBV Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** 전략 6207: RSI + MACD + BB + ATR 쿼드 */
    static strategy6207(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 65 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6207, name: 'RSI MACD BB ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6208: RSI + MACD + EMA + Stoch 쿼드 */
    static strategy6208(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50 && ind.stochastic?.k > 70;
        return { id: 6208, name: 'RSI MACD EMA Stoch Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6209: RSI + MACD + EMA + ADX 쿼드 */
    static strategy6209(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6209, name: 'RSI MACD EMA ADX Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6210: RSI + MACD + EMA + CCI 쿼드 */
    static strategy6210(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50 && ind.cci > 80;
        return { id: 6210, name: 'RSI MACD EMA CCI Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6211: RSI + MACD + EMA + Williams 쿼드 */
    static strategy6211(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50 && ind.williamsR > -30;
        return { id: 6211, name: 'RSI MACD EMA Williams Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6212: RSI + MACD + EMA + OBV 쿼드 */
    static strategy6212(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6212, name: 'RSI MACD EMA OBV Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** 전략 6213: RSI + MACD + EMA + ATR 쿼드 */
    static strategy6213(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6213, name: 'RSI MACD EMA ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6214: RSI + MACD + Stoch + ADX 쿼드 */
    static strategy6214(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.stochastic?.k > 70 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6214, name: 'RSI MACD Stoch ADX Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6215: RSI + MACD + Stoch + CCI 쿼드 */
    static strategy6215(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.stochastic?.k > 70 && ind.cci > 80;
        return { id: 6215, name: 'RSI MACD Stoch CCI Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6216: RSI + MACD + Stoch + Williams 쿼드 */
    static strategy6216(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.stochastic?.k > 70 && ind.williamsR > -30;
        return { id: 6216, name: 'RSI MACD Stoch Williams Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6217: RSI + MACD + ADX + CCI 쿼드 */
    static strategy6217(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 60;
        return { id: 6217, name: 'RSI MACD ADX CCI Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6218: RSI + MACD + ADX + Williams 쿼드 */
    static strategy6218(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -35;
        return { id: 6218, name: 'RSI MACD ADX Williams Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6219: RSI + MACD + CCI + Williams 쿼드 */
    static strategy6219(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.cci > 80 && ind.williamsR > -30;
        return { id: 6219, name: 'RSI MACD CCI Williams Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6220: RSI + MACD + CCI + OBV 쿼드 */
    static strategy6220(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.cci > 80 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6220, name: 'RSI MACD CCI OBV Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** 전략 6221: RSI + MACD + Williams + OBV 쿼드 */
    static strategy6221(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6221, name: 'RSI MACD Williams OBV Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** 전략 6222: RSI + MACD + Williams + ATR 쿼드 */
    static strategy6222(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.williamsR > -30 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6222, name: 'RSI MACD Williams ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6223: RSI + MACD + OBV + ATR 쿼드 */
    static strategy6223(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6223, name: 'RSI MACD OBV ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** 전략 6224: RSI 70+ MACD 데드 + BB + Stoch */
    static strategy6224(ind) {
        const macdCross = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const match = ind.rsi > 70 && macdCross && ind.bollingerBands?.position > 75 && ind.stochastic?.k > 75;
        return { id: 6224, name: 'RSI 70 + MACD Cross BB Stoch', direction: 'DOWN', match: Boolean(match), confidence: match ? 89 : 0 };
    }
    
    /** 전략 6225: RSI 70+ MACD 데드 + EMA + ADX */
    static strategy6225(ind) {
        const macdCross = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const match = ind.rsi > 70 && macdCross && ind.ema20 < ind.ema50 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6225, name: 'RSI 70 + MACD Cross EMA ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 90 : 0 };
    }
    
    // ==================== BB 기반 4-지표 조합 (6226-6250) ====================
    
    /** 전략 6226: BB + EMA + Stoch + ADX 쿼드 */
    static strategy6226(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50 && ind.stochastic?.k > 70 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6226, name: 'BB EMA Stoch ADX Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6227: BB + EMA + Stoch + CCI 쿼드 */
    static strategy6227(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50 && ind.stochastic?.k > 70 && ind.cci > 80;
        return { id: 6227, name: 'BB EMA Stoch CCI Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6228: BB + EMA + Stoch + Williams 쿼드 */
    static strategy6228(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50 && ind.stochastic?.k > 70 && ind.williamsR > -30;
        return { id: 6228, name: 'BB EMA Stoch Williams Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6229: BB + EMA + Stoch + OBV 쿼드 */
    static strategy6229(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50 && ind.stochastic?.k > 70 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6229, name: 'BB EMA Stoch OBV Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6230: BB + EMA + Stoch + ATR 쿼드 */
    static strategy6230(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50 && ind.stochastic?.k > 70 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6230, name: 'BB EMA Stoch ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6231: BB + EMA + ADX + CCI 쿼드 */
    static strategy6231(ind) {
        const match = ind.bollingerBands?.position > 65 && ind.ema20 < ind.ema50 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 60;
        return { id: 6231, name: 'BB EMA ADX CCI Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6232: BB + EMA + ADX + Williams 쿼드 */
    static strategy6232(ind) {
        const match = ind.bollingerBands?.position > 65 && ind.ema20 < ind.ema50 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -35;
        return { id: 6232, name: 'BB EMA ADX Williams Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6233: BB + EMA + ADX + OBV 쿼드 */
    static strategy6233(ind) {
        const match = ind.bollingerBands?.position > 65 && ind.ema20 < ind.ema50 && ind.adx?.minusDI > ind.adx?.plusDI && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6233, name: 'BB EMA ADX OBV Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6234: BB + EMA + ADX + ATR 쿼드 */
    static strategy6234(ind) {
        const match = ind.bollingerBands?.position > 65 && ind.ema20 < ind.ema50 && ind.adx?.minusDI > ind.adx?.plusDI && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6234, name: 'BB EMA ADX ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6235: BB + EMA + CCI + Williams 쿼드 */
    static strategy6235(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50 && ind.cci > 80 && ind.williamsR > -30;
        return { id: 6235, name: 'BB EMA CCI Williams Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6236: BB + EMA + CCI + OBV 쿼드 */
    static strategy6236(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50 && ind.cci > 80 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6236, name: 'BB EMA CCI OBV Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** 전략 6237: BB + EMA + CCI + ATR 쿼드 */
    static strategy6237(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50 && ind.cci > 80 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6237, name: 'BB EMA CCI ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6238: BB + EMA + Williams + OBV 쿼드 */
    static strategy6238(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50 && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6238, name: 'BB EMA Williams OBV Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** 전략 6239: BB + EMA + Williams + ATR 쿼드 */
    static strategy6239(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50 && ind.williamsR > -30 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6239, name: 'BB EMA Williams ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6240: BB + EMA + OBV + ATR 쿼드 */
    static strategy6240(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6240, name: 'BB EMA OBV ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6241: BB + Stoch + ADX + CCI 쿼드 */
    static strategy6241(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.stochastic?.k > 70 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 60;
        return { id: 6241, name: 'BB Stoch ADX CCI Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6242: BB + Stoch + ADX + Williams 쿼드 */
    static strategy6242(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.stochastic?.k > 70 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -35;
        return { id: 6242, name: 'BB Stoch ADX Williams Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6243: BB + Stoch + CCI + Williams 쿼드 */
    static strategy6243(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.stochastic?.k > 70 && ind.cci > 80 && ind.williamsR > -30;
        return { id: 6243, name: 'BB Stoch CCI Williams Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6244: BB + Stoch + CCI + OBV 쿼드 */
    static strategy6244(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.stochastic?.k > 70 && ind.cci > 80 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6244, name: 'BB Stoch CCI OBV Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6245: BB + Stoch + Williams + ATR 쿼드 */
    static strategy6245(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.stochastic?.k > 70 && ind.williamsR > -30 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6245, name: 'BB Stoch Williams ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6246: BB + ADX + CCI + Williams 쿼드 */
    static strategy6246(ind) {
        const match = ind.bollingerBands?.position > 65 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 60 && ind.williamsR > -35;
        return { id: 6246, name: 'BB ADX CCI Williams Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6247: BB + ADX + CCI + OBV 쿼드 */
    static strategy6247(ind) {
        const match = ind.bollingerBands?.position > 65 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 60 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6247, name: 'BB ADX CCI OBV Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6248: BB + ADX + Williams + ATR 쿼드 */
    static strategy6248(ind) {
        const match = ind.bollingerBands?.position > 65 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -35 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6248, name: 'BB ADX Williams ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6249: BB 상단 + EMA 데드 + Stoch 데드 + ADX */
    static strategy6249(ind) {
        const stochCross = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = ind.bollingerBands?.position > 80 && ind.ema20 < ind.ema50 && stochCross && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6249, name: 'BB Top + EMA Stoch Dead + ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6250: BB 스퀴즈 해제 + EMA + ADX + CCI */
    static strategy6250(ind) {
        const squeeze = ind.bollingerBands?.prevBandwidth < 3 && ind.bollingerBands?.bandwidth > 3;
        const match = squeeze && ind.ema20 < ind.ema50 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 30;
        return { id: 6250, name: 'BB Squeeze Release Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    // ==================== Stoch 기반 4-지표 조합 (6251-6275) ====================
    
    /** 전략 6251: Stoch + ADX + CCI + Williams 쿼드 */
    static strategy6251(ind) {
        const match = ind.stochastic?.k > 70 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 80 && ind.williamsR > -30;
        return { id: 6251, name: 'Stoch ADX CCI Williams Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6252: Stoch + ADX + CCI + OBV 쿼드 */
    static strategy6252(ind) {
        const match = ind.stochastic?.k > 70 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 80 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6252, name: 'Stoch ADX CCI OBV Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6253: Stoch + ADX + CCI + ATR 쿼드 */
    static strategy6253(ind) {
        const match = ind.stochastic?.k > 70 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 80 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6253, name: 'Stoch ADX CCI ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6254: Stoch + ADX + Williams + OBV 쿼드 */
    static strategy6254(ind) {
        const match = ind.stochastic?.k > 70 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6254, name: 'Stoch ADX Williams OBV Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6255: Stoch + ADX + Williams + ATR 쿼드 */
    static strategy6255(ind) {
        const match = ind.stochastic?.k > 70 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -30 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6255, name: 'Stoch ADX Williams ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6256: Stoch + ADX + OBV + ATR 쿼드 */
    static strategy6256(ind) {
        const match = ind.stochastic?.k > 70 && ind.adx?.minusDI > ind.adx?.plusDI && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6256, name: 'Stoch ADX OBV ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6257: Stoch + CCI + Williams + OBV 쿼드 */
    static strategy6257(ind) {
        const match = ind.stochastic?.k > 70 && ind.cci > 80 && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6257, name: 'Stoch CCI Williams OBV Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6258: Stoch + CCI + Williams + ATR 쿼드 */
    static strategy6258(ind) {
        const match = ind.stochastic?.k > 70 && ind.cci > 80 && ind.williamsR > -30 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6258, name: 'Stoch CCI Williams ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6259: Stoch + CCI + OBV + ATR 쿼드 */
    static strategy6259(ind) {
        const match = ind.stochastic?.k > 70 && ind.cci > 80 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6259, name: 'Stoch CCI OBV ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6260: Stoch + Williams + OBV + ATR 쿼드 */
    static strategy6260(ind) {
        const match = ind.stochastic?.k > 70 && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6260, name: 'Stoch Williams OBV ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6261: Stoch 데드크로스 + ADX + CCI + Williams */
    static strategy6261(ind) {
        const stochCross = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = stochCross && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 50 && ind.williamsR > -40;
        return { id: 6261, name: 'Stoch Cross + ADX CCI W', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6262: Stoch 데드크로스 + ADX + CCI + OBV */
    static strategy6262(ind) {
        const stochCross = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = stochCross && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 50 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6262, name: 'Stoch Cross + ADX CCI OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6263: Stoch 데드크로스 + CCI + Williams + ATR */
    static strategy6263(ind) {
        const stochCross = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = stochCross && ind.cci > 50 && ind.williamsR > -40 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6263, name: 'Stoch Cross + CCI W ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6264: Stoch 80 이탈 + ADX + CCI + Williams */
    static strategy6264(ind) {
        const stochExit = ind.stochastic?.k < 80 && ind.stochastic?.prevK >= 80;
        const match = stochExit && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 40 && ind.williamsR > -40;
        return { id: 6264, name: 'Stoch Exit + ADX CCI W', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6265: Stoch 80 이탈 + ADX + OBV + ATR */
    static strategy6265(ind) {
        const stochExit = ind.stochastic?.k < 80 && ind.stochastic?.prevK >= 80;
        const match = stochExit && ind.adx?.minusDI > ind.adx?.plusDI && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6265, name: 'Stoch Exit + ADX OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6266: Stoch 85+ + ADX 30+ + CCI 100+ + Williams */
    static strategy6266(ind) {
        const match = ind.stochastic?.k > 85 && ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 100 && ind.williamsR > -20;
        return { id: 6266, name: 'Stoch ADX CCI W Extreme', direction: 'DOWN', match: Boolean(match), confidence: match ? 90 : 0 };
    }
    
    /** 전략 6267: Stoch 85+ + CCI 100+ + Williams -15 + OBV */
    static strategy6267(ind) {
        const match = ind.stochastic?.k > 85 && ind.cci > 100 && ind.williamsR > -15 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6267, name: 'Stoch CCI W OBV Extreme', direction: 'DOWN', match: Boolean(match), confidence: match ? 89 : 0 };
    }
    
    /** 전략 6268: Stoch 85+ + CCI 100+ + OBV + ATR 급등 */
    static strategy6268(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = ind.stochastic?.k > 85 && ind.cci > 100 && (ind.obv || 0) < (ind.prevObv || 0) && atrSpike;
        return { id: 6268, name: 'Stoch CCI OBV ATR Extreme', direction: 'DOWN', match: Boolean(match), confidence: match ? 90 : 0 };
    }
    
    /** 전략 6269: Stoch 하락 + ADX 상승 + CCI 하락 + OBV 하락 */
    static strategy6269(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.prevK && ind.adx?.adx > ind.adx?.prevAdx && ind.cci < ind.prevCci && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6269, name: 'Stoch ADX CCI OBV Momentum', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6270: Stoch 하락 + ADX 상승 + Williams 하락 + ATR 상승 */
    static strategy6270(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.prevK && ind.adx?.adx > ind.adx?.prevAdx && ind.williamsR < ind.prevWilliamsR && (ind.atr || 0) > (ind.prevAtr || 0);
        return { id: 6270, name: 'Stoch ADX W ATR Momentum', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6271: Stoch %K < %D + ADX + CCI + OBV */
    static strategy6271(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.adx?.adx > 20 && ind.cci > 30 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6271, name: 'Stoch Dead + ADX CCI OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** 전략 6272: Stoch %K < %D + CCI + Williams + ATR */
    static strategy6272(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.cci > 30 && ind.williamsR > -45 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6272, name: 'Stoch Dead + CCI W ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** 전략 6273: Stoch 연속 하락 + ADX + CCI + Williams */
    static strategy6273(ind) {
        const stochFalling = ind.stochastic?.k < ind.stochastic?.prevK && ind.stochastic?.prevK < ind.stochastic?.prev2K;
        const match = stochFalling && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 20 && ind.williamsR > -50;
        return { id: 6273, name: 'Stoch Falling + ADX CCI W', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6274: Stoch 연속 하락 + CCI + OBV + ATR */
    static strategy6274(ind) {
        const stochFalling = ind.stochastic?.k < ind.stochastic?.prevK && ind.stochastic?.prevK < ind.stochastic?.prev2K;
        const match = stochFalling && ind.cci > 20 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6274, name: 'Stoch Falling + CCI OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6275: Stoch 50선 하향 + ADX + Williams + OBV */
    static strategy6275(ind) {
        const stochBreak = ind.stochastic?.k < 50 && ind.stochastic?.prevK >= 50;
        const match = stochBreak && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR < ind.prevWilliamsR && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6275, name: 'Stoch 50 Break + ADX W OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    // ==================== ADX 기반 4-지표 조합 (6276-6300) ====================
    
    /** 전략 6276: ADX + CCI + Williams + OBV 쿼드 */
    static strategy6276(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 80 && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6276, name: 'ADX CCI Williams OBV Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6277: ADX + CCI + Williams + ATR 쿼드 */
    static strategy6277(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 80 && ind.williamsR > -30 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6277, name: 'ADX CCI Williams ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6278: ADX + CCI + OBV + ATR 쿼드 */
    static strategy6278(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 80 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6278, name: 'ADX CCI OBV ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6279: ADX + Williams + OBV + ATR 쿼드 */
    static strategy6279(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6279, name: 'ADX Williams OBV ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6280: DI 데드크로스 + CCI + Williams + OBV */
    static strategy6280(ind) {
        const diCross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = diCross && ind.cci > 50 && ind.williamsR > -40 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6280, name: 'DI Cross + CCI W OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6281: DI 데드크로스 + CCI + Williams + ATR */
    static strategy6281(ind) {
        const diCross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = diCross && ind.cci > 50 && ind.williamsR > -40 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6281, name: 'DI Cross + CCI W ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6282: DI 데드크로스 + CCI + OBV + ATR */
    static strategy6282(ind) {
        const diCross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = diCross && ind.cci > 50 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6282, name: 'DI Cross + CCI OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6283: DI 데드크로스 + Williams + OBV + ATR */
    static strategy6283(ind) {
        const diCross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = diCross && ind.williamsR > -40 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6283, name: 'DI Cross + W OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6284: ADX > 30 + CCI > 100 + Williams > -20 + OBV */
    static strategy6284(ind) {
        const match = ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 100 && ind.williamsR > -20 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6284, name: 'ADX 30 + CCI 100 + W OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 89 : 0 };
    }
    
    /** 전략 6285: ADX > 30 + CCI > 100 + Williams > -20 + ATR 급등 */
    static strategy6285(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 100 && ind.williamsR > -20 && atrSpike;
        return { id: 6285, name: 'ADX 30 + CCI 100 + W ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 91 : 0 };
    }
    
    /** 전략 6286: ADX > 30 + CCI > 100 + OBV + ATR 급등 */
    static strategy6286(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 100 && (ind.obv || 0) < (ind.prevObv || 0) && atrSpike;
        return { id: 6286, name: 'ADX 30 + CCI 100 + OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 90 : 0 };
    }
    
    /** 전략 6287: ADX > 35 + Williams > -15 + OBV + ATR 급등 */
    static strategy6287(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = ind.adx?.adx > 35 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -15 && (ind.obv || 0) < (ind.prevObv || 0) && atrSpike;
        return { id: 6287, name: 'ADX 35 + W 15 + OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 91 : 0 };
    }
    
    /** 전략 6288: ADX 상승 + -DI 상승 + CCI 하락 + OBV 하락 */
    static strategy6288(ind) {
        const match = ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.prevMinusDI && ind.cci < ind.prevCci && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6288, name: 'ADX -DI Up + CCI OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6289: ADX 상승 + -DI 상승 + Williams 하락 + ATR 상승 */
    static strategy6289(ind) {
        const match = ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.prevMinusDI && ind.williamsR < ind.prevWilliamsR && (ind.atr || 0) > (ind.prevAtr || 0);
        return { id: 6289, name: 'ADX -DI Up + W Down + ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6290: ADX 상승 + -DI 상승 + CCI 하락 + Williams 하락 */
    static strategy6290(ind) {
        const match = ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.prevMinusDI && ind.cci < ind.prevCci && ind.williamsR < ind.prevWilliamsR;
        return { id: 6290, name: 'ADX -DI Up + CCI W Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6291: ADX 상승 + -DI 상승 + OBV 하락 + ATR 상승 */
    static strategy6291(ind) {
        const match = ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.prevMinusDI && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.prevAtr || 0);
        return { id: 6291, name: 'ADX -DI + OBV Down + ATR Up', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6292: -DI > 30 + CCI + Williams + OBV */
    static strategy6292(ind) {
        const match = ind.adx?.minusDI > 30 && ind.cci > 50 && ind.williamsR > -40 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6292, name: '-DI 30 + CCI W OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6293: -DI > 30 + CCI + Williams + ATR */
    static strategy6293(ind) {
        const match = ind.adx?.minusDI > 30 && ind.cci > 50 && ind.williamsR > -40 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6293, name: '-DI 30 + CCI W ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6294: -DI > 30 + CCI + OBV + ATR */
    static strategy6294(ind) {
        const match = ind.adx?.minusDI > 30 && ind.cci > 50 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6294, name: '-DI 30 + CCI OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6295: -DI > 30 + Williams + OBV + ATR */
    static strategy6295(ind) {
        const match = ind.adx?.minusDI > 30 && ind.williamsR > -40 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6295, name: '-DI 30 + W OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6296: ADX > 40 + CCI + Williams + OBV */
    static strategy6296(ind) {
        const match = ind.adx?.adx > 40 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 40 && ind.williamsR > -45 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6296, name: 'ADX 40 + CCI W OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6297: ADX > 40 + CCI + Williams + ATR */
    static strategy6297(ind) {
        const match = ind.adx?.adx > 40 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 40 && ind.williamsR > -45 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6297, name: 'ADX 40 + CCI W ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 89 : 0 };
    }
    
    /** 전략 6298: ADX > 40 + CCI + OBV + ATR */
    static strategy6298(ind) {
        const match = ind.adx?.adx > 40 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 40 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6298, name: 'ADX 40 + CCI OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 89 : 0 };
    }
    
    /** 전략 6299: ADX > 40 + Williams + OBV + ATR */
    static strategy6299(ind) {
        const match = ind.adx?.adx > 40 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -45 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6299, name: 'ADX 40 + W OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6300: 4-지표 조합 마일스톤 */
    static strategy6300(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 50 && ind.williamsR > -40 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6300, name: 'Quad Indicator Milestone', direction: 'DOWN', match: Boolean(match), confidence: match ? 90 : 0 };
    }
    
    // ==================== CCI/Williams/OBV/ATR 기반 4-지표 조합 (6301-6350) ====================
    
    /** 전략 6301: CCI + Williams + OBV + ATR 쿼드 */
    static strategy6301(ind) {
        const match = ind.cci > 80 && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6301, name: 'CCI Williams OBV ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6302: CCI 100+ + Williams -20+ + OBV + ATR */
    static strategy6302(ind) {
        const match = ind.cci > 100 && ind.williamsR > -20 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6302, name: 'CCI 100 W 20 OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6303: CCI 120+ + Williams -15+ + OBV + ATR 급등 */
    static strategy6303(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = ind.cci > 120 && ind.williamsR > -15 && (ind.obv || 0) < (ind.prevObv || 0) && atrSpike;
        return { id: 6303, name: 'CCI 120 W 15 OBV ATR Spike', direction: 'DOWN', match: Boolean(match), confidence: match ? 90 : 0 };
    }
    
    /** 전략 6304: CCI 150+ + Williams -10+ + OBV + ATR 2x */
    static strategy6304(ind) {
        const atrExtreme = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 2;
        const match = ind.cci > 150 && ind.williamsR > -10 && (ind.obv || 0) < (ind.prevObv || 0) && atrExtreme;
        return { id: 6304, name: 'CCI 150 W 10 OBV ATR 2x', direction: 'DOWN', match: Boolean(match), confidence: match ? 92 : 0 };
    }
    
    /** 전략 6305: CCI 하락 + Williams 하락 + OBV 하락 + ATR 상승 */
    static strategy6305(ind) {
        const match = ind.cci < ind.prevCci && ind.williamsR < ind.prevWilliamsR && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.prevAtr || 0);
        return { id: 6305, name: 'CCI W OBV Down + ATR Up', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** 전략 6306: CCI 연속 하락 + Williams + OBV + ATR */
    static strategy6306(ind) {
        const cciFalling = ind.cci < ind.prevCci && ind.prevCci < ind.prev2Cci;
        const match = cciFalling && ind.williamsR > -40 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6306, name: 'CCI Falling + W OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6307: Williams 연속 하락 + CCI + OBV + ATR */
    static strategy6307(ind) {
        const wFalling = ind.williamsR < ind.prevWilliamsR && ind.prevWilliamsR < ind.prev2WilliamsR;
        const match = wFalling && ind.cci > 40 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6307, name: 'W Falling + CCI OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** 전략 6308: OBV 하락 + CCI + Williams + ATR */
    static strategy6308(ind) {
        const obvFalling = (ind.obv || 0) < (ind.prevObv || 0);
        const match = obvFalling && ind.cci > 40 && ind.williamsR > -45 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6308, name: 'OBV Down + CCI W ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6309: ATR 상승 + CCI + Williams + OBV */
    static strategy6309(ind) {
        const atrRising = (ind.atr || 0) > (ind.prevAtr || 0);
        const match = atrRising && ind.cci > 40 && ind.williamsR > -45 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6309, name: 'ATR Rising + CCI W OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6310: CCI 0선 하향 + Williams + OBV + ATR */
    static strategy6310(ind) {
        const cciBreak = ind.cci < 0 && ind.prevCci >= 0;
        const match = cciBreak && ind.williamsR > -50 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6310, name: 'CCI Zero Break + W OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** 전략 6311: Williams -50 하향 + CCI + OBV + ATR */
    static strategy6311(ind) {
        const wBreak = ind.williamsR < -50 && ind.prevWilliamsR >= -50;
        const match = wBreak && ind.cci > 20 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6311, name: 'W 50 Break + CCI OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** 전략 6312: CCI 100 이탈 + Williams + OBV + ATR */
    static strategy6312(ind) {
        const cciExit = ind.cci < 100 && ind.prevCci >= 100;
        const match = cciExit && ind.williamsR > -35 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6312, name: 'CCI 100 Exit + W OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6313: Williams -20 이탈 + CCI + OBV + ATR */
    static strategy6313(ind) {
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const match = wExit && ind.cci > 60 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6313, name: 'W 20 Exit + CCI OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6314: CCI + Williams 동시 이탈 + OBV + ATR */
    static strategy6314(ind) {
        const cciExit = ind.cci < 100 && ind.prevCci >= 100;
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const match = cciExit && wExit && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6314, name: 'CCI W Double Exit + OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 89 : 0 };
    }
    
    /** 전략 6315: CCI + Williams 다이버전스 + OBV + ATR */
    static strategy6315(ind) {
        const cciDiv = ind.priceChange > 0 && ind.cci < ind.prevCci;
        const wDiv = ind.priceChange > 0 && ind.williamsR < ind.prevWilliamsR;
        const match = cciDiv && wDiv && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6315, name: 'CCI W Divergence + OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6316: CCI + OBV 다이버전스 + Williams + ATR */
    static strategy6316(ind) {
        const cciDiv = ind.priceChange > 0 && ind.cci < ind.prevCci;
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = cciDiv && obvDiv && ind.williamsR > -40 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6316, name: 'CCI OBV Div + W ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6317: Williams + OBV 다이버전스 + CCI + ATR */
    static strategy6317(ind) {
        const wDiv = ind.priceChange > 0 && ind.williamsR < ind.prevWilliamsR;
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = wDiv && obvDiv && ind.cci > 40 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6317, name: 'W OBV Div + CCI ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6318: CCI + Williams + OBV + ATR 모두 다이버전스 */
    static strategy6318(ind) {
        const cciDiv = ind.priceChange > 0 && ind.cci < ind.prevCci;
        const wDiv = ind.priceChange > 0 && ind.williamsR < ind.prevWilliamsR;
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = cciDiv && wDiv && obvDiv && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6318, name: 'CCI W OBV Triple Div + ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 89 : 0 };
    }
    
    /** 전략 6319: CCI + Williams + 거래량 급증 + ATR */
    static strategy6319(ind) {
        const match = ind.cci > 60 && ind.williamsR > -35 && ind.volume > ind.avgVolume * 1.5 && ind.priceChange < 0 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6319, name: 'CCI W Volume + ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6320: CCI + OBV + 거래량 급증 + ATR */
    static strategy6320(ind) {
        const match = ind.cci > 60 && (ind.obv || 0) < (ind.prevObv || 0) && ind.volume > ind.avgVolume * 1.5 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6320, name: 'CCI OBV Volume + ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6321: Williams + OBV + 거래량 급증 + ATR */
    static strategy6321(ind) {
        const match = ind.williamsR > -35 && (ind.obv || 0) < (ind.prevObv || 0) && ind.volume > ind.avgVolume * 1.5 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6321, name: 'W OBV Volume + ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6322: CCI + Williams + OBV + 거래량 2x */
    static strategy6322(ind) {
        const match = ind.cci > 60 && ind.williamsR > -35 && (ind.obv || 0) < (ind.prevObv || 0) && ind.volume > ind.avgVolume * 2;
        return { id: 6322, name: 'CCI W OBV + Volume 2x', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6323: CCI + Williams + ATR + 거래량 2x */
    static strategy6323(ind) {
        const match = ind.cci > 60 && ind.williamsR > -35 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5 && ind.volume > ind.avgVolume * 2;
        return { id: 6323, name: 'CCI W ATR + Volume 2x', direction: 'DOWN', match: Boolean(match), confidence: match ? 89 : 0 };
    }
    
    /** 전략 6324: CCI + Williams + OBV + 연속 하락 */
    static strategy6324(ind) {
        const match = ind.cci > 50 && ind.williamsR > -40 && (ind.obv || 0) < (ind.prevObv || 0) && ind.consecutiveDown >= 2;
        return { id: 6324, name: 'CCI W OBV + Consecutive', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** 전략 6325: CCI + Williams + ATR + 연속 하락 */
    static strategy6325(ind) {
        const match = ind.cci > 50 && ind.williamsR > -40 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.consecutiveDown >= 2;
        return { id: 6325, name: 'CCI W ATR + Consecutive', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6326: CCI + OBV + ATR + 연속 하락 */
    static strategy6326(ind) {
        const match = ind.cci > 50 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.consecutiveDown >= 2;
        return { id: 6326, name: 'CCI OBV ATR + Consecutive', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6327: Williams + OBV + ATR + 연속 하락 */
    static strategy6327(ind) {
        const match = ind.williamsR > -40 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.consecutiveDown >= 2;
        return { id: 6327, name: 'W OBV ATR + Consecutive', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6328: CCI + Williams + OBV + ATR + 연속 하락 3일 */
    static strategy6328(ind) {
        const match = ind.cci > 40 && ind.williamsR > -45 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.consecutiveDown >= 3;
        return { id: 6328, name: 'CCI W OBV ATR + 3 Consec', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6329: CCI 급락 + Williams + OBV + ATR */
    static strategy6329(ind) {
        const cciDrop = ind.prevCci - ind.cci > 30;
        const match = cciDrop && ind.williamsR > -40 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6329, name: 'CCI Drop + W OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6330: Williams 급락 + CCI + OBV + ATR */
    static strategy6330(ind) {
        const wDrop = ind.prevWilliamsR - ind.williamsR > 20;
        const match = wDrop && ind.cci > 40 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6330, name: 'W Drop + CCI OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6331: OBV 급락 + CCI + Williams + ATR */
    static strategy6331(ind) {
        const obvDrop = ((ind.prevObv || 0) - (ind.obv || 0)) / Math.abs((ind.prevObv || 0)) > 0.03;
        const match = obvDrop && ind.cci > 40 && ind.williamsR > -45 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6331, name: 'OBV Drop + CCI W ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6332: ATR 급등 + CCI + Williams + OBV */
    static strategy6332(ind) {
        const atrSpike = (ind.atr || 0) > (ind.prevAtr || 0) * 1.3;
        const match = atrSpike && ind.cci > 40 && ind.williamsR > -45 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6332, name: 'ATR Spike + CCI W OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6333: CCI + Williams 과매수 + OBV 급락 + ATR 급등 */
    static strategy6333(ind) {
        const obvDrop = ((ind.prevObv || 0) - (ind.obv || 0)) / Math.abs((ind.prevObv || 0)) > 0.03;
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = ind.cci > 100 && ind.williamsR > -20 && obvDrop && atrSpike;
        return { id: 6333, name: 'CCI W OB + OBV ATR Spike', direction: 'DOWN', match: Boolean(match), confidence: match ? 90 : 0 };
    }
    
    /** 전략 6334: CCI 과매수 이탈 + Williams 이탈 + OBV 급락 + ATR 급등 */
    static strategy6334(ind) {
        const cciExit = ind.cci < 100 && ind.prevCci >= 100;
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const obvDrop = ((ind.prevObv || 0) - (ind.obv || 0)) / Math.abs((ind.prevObv || 0)) > 0.02;
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.3;
        const match = cciExit && wExit && obvDrop && atrSpike;
        return { id: 6334, name: 'CCI W Exit + OBV ATR Spike', direction: 'DOWN', match: Boolean(match), confidence: match ? 91 : 0 };
    }
    
    /** 전략 6335: CCI + Williams + OBV + ATR + 하락 캔들 */
    static strategy6335(ind) {
        const match = ind.cci > 50 && ind.williamsR > -40 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.priceChange < 0;
        return { id: 6335, name: 'CCI W OBV ATR + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6336: CCI + Williams + OBV + ATR + 큰 하락 캔들 */
    static strategy6336(ind) {
        const bigDown = ind.priceChange < -1;
        const match = ind.cci > 50 && ind.williamsR > -40 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && bigDown;
        return { id: 6336, name: 'CCI W OBV ATR + Big Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6337: CCI 80-120 + Williams + OBV + ATR */
    static strategy6337(ind) {
        const match = ind.cci > 80 && ind.cci < 120 && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6337, name: 'CCI 80-120 + W OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6338: Williams -20~-10 + CCI + OBV + ATR */
    static strategy6338(ind) {
        const match = ind.williamsR > -20 && ind.williamsR < -10 && ind.cci > 80 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6338, name: 'W 20-10 + CCI OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6339: CCI + Williams 동시 과매수 + OBV + ATR 동시 조건 */
    static strategy6339(ind) {
        const match = ind.cci > 100 && ind.williamsR > -15 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.3;
        return { id: 6339, name: 'CCI W OB + OBV ATR Strong', direction: 'DOWN', match: Boolean(match), confidence: match ? 89 : 0 };
    }
    
    /** 전략 6340: CCI + Williams + OBV + ATR 최고점 근처 */
    static strategy6340(ind) {
        const nearHigh = ind.price > ind.high52w * 0.95;
        const match = nearHigh && ind.cci > 80 && ind.williamsR > -25 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6340, name: 'Near High + CCI W OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6341: CCI + Williams + OBV + ATR + 저항선 근처 */
    static strategy6341(ind) {
        const nearResistance = ind.price > ind.resistance * 0.98;
        const match = nearResistance && ind.cci > 70 && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6341, name: 'Resistance + CCI W OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6342: CCI + Williams + OBV 하락 + ATR > 1.2x */
    static strategy6342(ind) {
        const match = ind.cci > 70 && ind.williamsR > -35 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.2;
        return { id: 6342, name: 'CCI W + OBV Down + ATR 1.2x', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6343: CCI + Williams + OBV 하락 + ATR > 1.5x */
    static strategy6343(ind) {
        const match = ind.cci > 70 && ind.williamsR > -35 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        return { id: 6343, name: 'CCI W + OBV Down + ATR 1.5x', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6344: CCI + Williams + OBV 하락 + ATR > 2x */
    static strategy6344(ind) {
        const match = ind.cci > 60 && ind.williamsR > -40 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 2;
        return { id: 6344, name: 'CCI W + OBV Down + ATR 2x', direction: 'DOWN', match: Boolean(match), confidence: match ? 90 : 0 };
    }
    
    /** 전략 6345: CCI + Williams 하락세 + OBV 하락세 + ATR 상승세 */
    static strategy6345(ind) {
        const cciFalling = ind.cci < ind.prevCci;
        const wFalling = ind.williamsR < ind.prevWilliamsR;
        const obvFalling = (ind.obv || 0) < (ind.prevObv || 0);
        const atrRising = (ind.atr || 0) > (ind.prevAtr || 0);
        const match = cciFalling && wFalling && obvFalling && atrRising;
        return { id: 6345, name: 'CCI W OBV Fall + ATR Rise', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** 전략 6346: CCI 상위 25% + Williams + OBV + ATR */
    static strategy6346(ind) {
        const match = ind.cci > 75 && ind.williamsR > -25 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6346, name: 'CCI Top 25% + W OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6347: Williams 상위 25% + CCI + OBV + ATR */
    static strategy6347(ind) {
        const match = ind.williamsR > -25 && ind.cci > 75 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6347, name: 'W Top 25% + CCI OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6348: CCI + Williams 극단 + OBV 극단 + ATR 극단 */
    static strategy6348(ind) {
        const obvExtreme = ((ind.prevObv || 0) - (ind.obv || 0)) / Math.abs((ind.prevObv || 0)) > 0.05;
        const atrExtreme = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 2;
        const match = ind.cci > 120 && ind.williamsR > -15 && obvExtreme && atrExtreme;
        return { id: 6348, name: 'CCI W OBV ATR All Extreme', direction: 'DOWN', match: Boolean(match), confidence: match ? 92 : 0 };
    }
    
    /** 전략 6349: CCI + Williams + OBV + ATR 표준편차 기반 */
    static strategy6349(ind) {
        const cciHigh = ind.cci > ind.cciMean + ind.cciStd;
        const match = cciHigh && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6349, name: 'CCI StdDev + W OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6350: CCI/Williams/OBV/ATR 4-지표 + ADX 강화 */
    static strategy6350(ind) {
        const match = ind.cci > 100 && ind.williamsR > -20 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && (ind.adx?.adx || ind.adx || 0) > 25;
        return { id: 6350, name: 'CCI W OBV ATR Quad Base', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    // ==================== 복합 크로스오버 및 다이버전스 4-지표 조합 (6351-6400) ====================
    
    /** 전략 6351: RSI + MACD 데드 + BB + EMA 데드 */
    static strategy6351(ind) {
        const macdDead = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const emaDead = ind.ema20 < ind.ema50 && ind.prevEma20 >= ind.prevEma50;
        const match = ind.rsi > 60 && macdDead && ind.bollingerBands?.position > 65 && emaDead;
        return { id: 6351, name: 'RSI + MACD EMA Double Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 91 : 0 };
    }
    
    /** 전략 6352: RSI + MACD 데드 + Stoch 데드 + ADX */
    static strategy6352(ind) {
        const macdDead = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const stochDead = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = ind.rsi > 60 && macdDead && stochDead && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6352, name: 'RSI + MACD Stoch Dead + ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 92 : 0 };
    }
    
    /** 전략 6353: RSI + MACD 데드 + EMA 데드 + ADX */
    static strategy6353(ind) {
        const macdDead = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const emaDead = ind.ema20 < ind.ema50 && ind.prevEma20 >= ind.prevEma50;
        const match = ind.rsi > 60 && macdDead && emaDead && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6353, name: 'RSI + MACD EMA Dead + ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 93 : 0 };
    }
    
    /** 전략 6354: RSI + Stoch 데드 + EMA 데드 + BB */
    static strategy6354(ind) {
        const stochDead = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const emaDead = ind.ema20 < ind.ema50 && ind.prevEma20 >= ind.prevEma50;
        const match = ind.rsi > 60 && stochDead && emaDead && ind.bollingerBands?.position > 65;
        return { id: 6354, name: 'RSI + Stoch EMA Dead + BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 90 : 0 };
    }
    
    /** 전략 6355: RSI + DI 데드 + Stoch 데드 + BB */
    static strategy6355(ind) {
        const diDead = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const stochDead = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = ind.rsi > 60 && diDead && stochDead && ind.bollingerBands?.position > 65;
        return { id: 6355, name: 'RSI + DI Stoch Dead + BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 91 : 0 };
    }
    
    /** 전략 6356: MACD 데드 + Stoch 데드 + EMA 데드 + BB */
    static strategy6356(ind) {
        const macdDead = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const stochDead = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const emaDead = ind.ema20 < ind.ema50 && ind.prevEma20 >= ind.prevEma50;
        const match = macdDead && stochDead && emaDead && ind.bollingerBands?.position > 60;
        return { id: 6356, name: 'MACD Stoch EMA Dead + BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 92 : 0 };
    }
    
    /** 전략 6357: MACD 데드 + DI 데드 + BB + EMA */
    static strategy6357(ind) {
        const macdDead = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const diDead = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = macdDead && diDead && ind.bollingerBands?.position > 60 && ind.ema20 < ind.ema50;
        return { id: 6357, name: 'MACD DI Dead + BB EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 93 : 0 };
    }
    
    /** 전략 6358: MACD 데드 + DI 데드 + Stoch + CCI */
    static strategy6358(ind) {
        const macdDead = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const diDead = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = macdDead && diDead && ind.stochastic?.k > 60 && ind.cci > 50;
        return { id: 6358, name: 'MACD DI Dead + Stoch CCI', direction: 'DOWN', match: Boolean(match), confidence: match ? 91 : 0 };
    }
    
    /** 전략 6359: Stoch 데드 + DI 데드 + EMA 데드 + CCI */
    static strategy6359(ind) {
        const stochDead = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const diDead = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const emaDead = ind.ema20 < ind.ema50 && ind.prevEma20 >= ind.prevEma50;
        const match = stochDead && diDead && emaDead && ind.cci > 50;
        return { id: 6359, name: 'Stoch DI EMA Dead + CCI', direction: 'DOWN', match: Boolean(match), confidence: match ? 92 : 0 };
    }
    
    /** 전략 6360: 트리플 데드크로스 + BB */
    static strategy6360(ind) {
        const macdDead = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const stochDead = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const emaDead = ind.ema20 < ind.ema50 && ind.prevEma20 >= ind.prevEma50;
        const match = macdDead && stochDead && emaDead && ind.bollingerBands?.position > 55;
        return { id: 6360, name: 'Triple Dead Cross + BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 93 : 0 };
    }
    
    /** 전략 6361: RSI 다이버전스 + MACD + BB + Stoch */
    static strategy6361(ind) {
        const rsiDiv = ind.priceChange > 0 && ind.rsi < ind.prevRsi;
        const match = rsiDiv && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 65 && ind.stochastic?.k > 60;
        return { id: 6361, name: 'RSI Div + MACD BB Stoch', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6362: RSI 다이버전스 + MACD 다이버전스 + BB + EMA */
    static strategy6362(ind) {
        const rsiDiv = ind.priceChange > 0 && ind.rsi < ind.prevRsi;
        const macdDiv = ind.priceChange > 0 && ind.macd?.histogram < ind.macd?.prevHistogram;
        const match = rsiDiv && macdDiv && ind.bollingerBands?.position > 60 && ind.ema20 < ind.ema50;
        return { id: 6362, name: 'RSI MACD Div + BB EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 90 : 0 };
    }
    
    /** 전략 6363: RSI 다이버전스 + Stoch 다이버전스 + BB + ADX */
    static strategy6363(ind) {
        const rsiDiv = ind.priceChange > 0 && ind.rsi < ind.prevRsi;
        const stochDiv = ind.priceChange > 0 && ind.stochastic?.k < ind.stochastic?.prevK;
        const match = rsiDiv && stochDiv && ind.bollingerBands?.position > 60 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6363, name: 'RSI Stoch Div + BB ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 89 : 0 };
    }
    
    /** 전략 6364: MACD 다이버전스 + Stoch 다이버전스 + BB + EMA */
    static strategy6364(ind) {
        const macdDiv = ind.priceChange > 0 && ind.macd?.histogram < ind.macd?.prevHistogram;
        const stochDiv = ind.priceChange > 0 && ind.stochastic?.k < ind.stochastic?.prevK;
        const match = macdDiv && stochDiv && ind.bollingerBands?.position > 60 && ind.ema20 < ind.ema50;
        return { id: 6364, name: 'MACD Stoch Div + BB EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6365: RSI 다이버전스 + MACD 다이버전스 + Stoch 다이버전스 + BB */
    static strategy6365(ind) {
        const rsiDiv = ind.priceChange > 0 && ind.rsi < ind.prevRsi;
        const macdDiv = ind.priceChange > 0 && ind.macd?.histogram < ind.macd?.prevHistogram;
        const stochDiv = ind.priceChange > 0 && ind.stochastic?.k < ind.stochastic?.prevK;
        const match = rsiDiv && macdDiv && stochDiv && ind.bollingerBands?.position > 55;
        return { id: 6365, name: 'Triple Divergence + BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 91 : 0 };
    }
    
    /** 전략 6366: RSI + OBV 다이버전스 + MACD + BB */
    static strategy6366(ind) {
        const rsiDiv = ind.priceChange > 0 && ind.rsi < ind.prevRsi;
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = rsiDiv && obvDiv && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 60;
        return { id: 6366, name: 'RSI OBV Div + MACD BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 89 : 0 };
    }
    
    /** 전략 6367: RSI + CCI 다이버전스 + MACD + EMA */
    static strategy6367(ind) {
        const rsiDiv = ind.priceChange > 0 && ind.rsi < ind.prevRsi;
        const cciDiv = ind.priceChange > 0 && ind.cci < ind.prevCci;
        const match = rsiDiv && cciDiv && ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50;
        return { id: 6367, name: 'RSI CCI Div + MACD EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6368: MACD + OBV 다이버전스 + BB + ADX */
    static strategy6368(ind) {
        const macdDiv = ind.priceChange > 0 && ind.macd?.histogram < ind.macd?.prevHistogram;
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = macdDiv && obvDiv && ind.bollingerBands?.position > 60 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6368, name: 'MACD OBV Div + BB ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6369: Stoch + CCI 다이버전스 + BB + EMA */
    static strategy6369(ind) {
        const stochDiv = ind.priceChange > 0 && ind.stochastic?.k < ind.stochastic?.prevK;
        const cciDiv = ind.priceChange > 0 && ind.cci < ind.prevCci;
        const match = stochDiv && cciDiv && ind.bollingerBands?.position > 60 && ind.ema20 < ind.ema50;
        return { id: 6369, name: 'Stoch CCI Div + BB EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6370: 쿼드러플 다이버전스 */
    static strategy6370(ind) {
        const rsiDiv = ind.priceChange > 0 && ind.rsi < ind.prevRsi;
        const macdDiv = ind.priceChange > 0 && ind.macd?.histogram < ind.macd?.prevHistogram;
        const stochDiv = ind.priceChange > 0 && ind.stochastic?.k < ind.stochastic?.prevK;
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = rsiDiv && macdDiv && stochDiv && obvDiv;
        return { id: 6370, name: 'Quadruple Divergence', direction: 'DOWN', match: Boolean(match), confidence: match ? 93 : 0 };
    }
    
    /** 전략 6371: RSI 70 이탈 + MACD + BB + Stoch */
    static strategy6371(ind) {
        const rsiExit = ind.rsi > 30 && ind.prevRsi >= 70;
        const match = rsiExit && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 65 && ind.stochastic?.k > 60;
        return { id: 6371, name: 'RSI 70 Exit + MACD BB Stoch', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6372: RSI 70 이탈 + MACD 데드 + BB + ADX */
    static strategy6372(ind) {
        const rsiExit = ind.rsi > 30 && ind.prevRsi >= 70;
        const macdDead = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const match = rsiExit && macdDead && ind.bollingerBands?.position > 60 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6372, name: 'RSI 70 Exit + MACD Dead ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 91 : 0 };
    }
    
    /** 전략 6373: RSI 70 이탈 + Stoch 80 이탈 + BB + EMA */
    static strategy6373(ind) {
        const rsiExit = ind.rsi > 30 && ind.prevRsi >= 70;
        const stochExit = ind.stochastic?.k < 80 && ind.stochastic?.prevK >= 80;
        const match = rsiExit && stochExit && ind.bollingerBands?.position > 60 && ind.ema20 < ind.ema50;
        return { id: 6373, name: 'RSI Stoch Exit + BB EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 90 : 0 };
    }
    
    /** 전략 6374: BB 상단 이탈 + MACD + Stoch + ADX */
    static strategy6374(ind) {
        const bbExit = ind.bollingerBands?.position < 85 && ind.bollingerBands?.prevPosition >= 85;
        const match = bbExit && ind.macd?.MACD < ind.macd?.signal && ind.stochastic?.k > 60 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6374, name: 'BB Exit + MACD Stoch ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6375: BB 상단 이탈 + RSI + EMA + CCI */
    static strategy6375(ind) {
        const bbExit = ind.bollingerBands?.position < 85 && ind.bollingerBands?.prevPosition >= 85;
        const match = bbExit && ind.rsi > 55 && ind.ema20 < ind.ema50 && ind.cci > 40;
        return { id: 6375, name: 'BB Exit + RSI EMA CCI', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6376: Stoch 80 이탈 + MACD + BB + Williams */
    static strategy6376(ind) {
        const stochExit = ind.stochastic?.k < 80 && ind.stochastic?.prevK >= 80;
        const match = stochExit && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 60 && ind.williamsR > -40;
        return { id: 6376, name: 'Stoch Exit + MACD BB W', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6377: Stoch 80 이탈 + RSI + EMA + ADX */
    static strategy6377(ind) {
        const stochExit = ind.stochastic?.k < 80 && ind.stochastic?.prevK >= 80;
        const match = stochExit && ind.rsi > 55 && ind.ema20 < ind.ema50 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6377, name: 'Stoch Exit + RSI EMA ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6378: CCI 100 이탈 + RSI + MACD + BB */
    static strategy6378(ind) {
        const cciExit = ind.cci < 100 && ind.prevCci >= 100;
        const match = cciExit && ind.rsi > 55 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 55;
        return { id: 6378, name: 'CCI Exit + RSI MACD BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6379: CCI 100 이탈 + Stoch + EMA + ADX */
    static strategy6379(ind) {
        const cciExit = ind.cci < 100 && ind.prevCci >= 100;
        const match = cciExit && ind.stochastic?.k > 55 && ind.ema20 < ind.ema50 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6379, name: 'CCI Exit + Stoch EMA ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6380: Williams -20 이탈 + RSI + MACD + BB */
    static strategy6380(ind) {
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const match = wExit && ind.rsi > 55 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 55;
        return { id: 6380, name: 'W Exit + RSI MACD BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6381: 다중 이탈 (RSI + Stoch + CCI) + BB */
    static strategy6381(ind) {
        const rsiExit = ind.rsi > 30 && ind.prevRsi >= 70;
        const stochExit = ind.stochastic?.k < 80 && ind.stochastic?.prevK >= 80;
        const cciExit = ind.cci < 100 && ind.prevCci >= 100;
        const match = rsiExit && stochExit && cciExit && ind.bollingerBands?.position > 50;
        return { id: 6381, name: 'Triple Exit + BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 92 : 0 };
    }
    
    /** 전략 6382: RSI + BB 스퀴즈 해제 하락 + MACD + Stoch */
    static strategy6382(ind) {
        const squeeze = ind.bollingerBands?.prevBandwidth < 3 && ind.bollingerBands?.position < 45;
        const match = ind.rsi > 55 && squeeze && ind.macd?.MACD < ind.macd?.signal && ind.stochastic?.k < ind.stochastic?.prevK;
        return { id: 6382, name: 'RSI + BB Squeeze Down + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6383: MACD 0선 하향 + RSI + BB + Stoch */
    static strategy6383(ind) {
        const macdBreak = ind.macd?.MACD < 0 && ind.macd?.prevMACD >= 0;
        const match = macdBreak && ind.rsi > 50 && ind.bollingerBands?.position > 50 && ind.stochastic?.k > 50;
        return { id: 6383, name: 'MACD Zero Break + RSI BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6384: MACD 0선 하향 + EMA + ADX + CCI */
    static strategy6384(ind) {
        const macdBreak = ind.macd?.MACD < 0 && ind.macd?.prevMACD >= 0;
        const match = macdBreak && ind.ema20 < ind.ema50 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 30;
        return { id: 6384, name: 'MACD Zero Break + EMA ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6385: RSI + MACD + BB 밴드폭 확장 + 하락 */
    static strategy6385(ind) {
        const bbExpand = ind.bollingerBands?.bandwidth > ind.bollingerBands?.prevBandwidth * 1.2;
        const match = ind.rsi > 55 && ind.macd?.MACD < ind.macd?.signal && bbExpand && ind.priceChange < 0;
        return { id: 6385, name: 'RSI MACD + BB Expand Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6386: EMA 역배열 + MACD + BB + Stoch */
    static strategy6386(ind) {
        const emaStack = ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100;
        const match = emaStack && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 55 && ind.stochastic?.k > 55;
        return { id: 6386, name: 'EMA Stack + MACD BB Stoch', direction: 'DOWN', match: Boolean(match), confidence: match ? 89 : 0 };
    }
    
    /** 전략 6387: EMA 역배열 + ADX + CCI + Williams */
    static strategy6387(ind) {
        const emaStack = ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100;
        const match = emaStack && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 50 && ind.williamsR > -40;
        return { id: 6387, name: 'EMA Stack + ADX CCI W', direction: 'DOWN', match: Boolean(match), confidence: match ? 90 : 0 };
    }
    
    /** 전략 6388: 가격 < EMA20 + MACD + BB + Stoch */
    static strategy6388(ind) {
        const match = ind.price < ind.ema20 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 50 && ind.stochastic?.k > 50;
        return { id: 6388, name: 'Below EMA + MACD BB Stoch', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** 전략 6389: 가격 < EMA20 + ADX + CCI + Williams */
    static strategy6389(ind) {
        const match = ind.price < ind.ema20 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 40 && ind.williamsR > -45;
        return { id: 6389, name: 'Below EMA + ADX CCI W', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** 전략 6390: RSI + MACD + EMA + ADX 종합 */
    static strategy6390(ind) {
        const match = ind.rsi > 60 && ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6390, name: 'RSI MACD EMA ADX Complete', direction: 'DOWN', match: Boolean(match), confidence: match ? 89 : 0 };
    }
    
    /** 전략 6391: RSI + BB + Stoch + Williams 종합 */
    static strategy6391(ind) {
        const match = ind.rsi > 60 && ind.bollingerBands?.position > 65 && ind.stochastic?.k > 65 && ind.williamsR > -35;
        return { id: 6391, name: 'RSI BB Stoch W Complete', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6392: MACD + BB + ADX + CCI 종합 */
    static strategy6392(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 60 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 60;
        return { id: 6392, name: 'MACD BB ADX CCI Complete', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6393: EMA + Stoch + ADX + Williams 종합 */
    static strategy6393(ind) {
        const match = ind.ema20 < ind.ema50 && ind.stochastic?.k > 60 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -35;
        return { id: 6393, name: 'EMA Stoch ADX W Complete', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6394: RSI + MACD + BB + OBV 종합 */
    static strategy6394(ind) {
        const match = ind.rsi > 60 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 60 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6394, name: 'RSI MACD BB OBV Complete', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6395: RSI + EMA + ADX + ATR 종합 */
    static strategy6395(ind) {
        const match = ind.rsi > 60 && ind.ema20 < ind.ema50 && ind.adx?.minusDI > ind.adx?.plusDI && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6395, name: 'RSI EMA ADX ATR Complete', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6396: MACD + Stoch + CCI + OBV 종합 */
    static strategy6396(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.stochastic?.k > 60 && ind.cci > 60 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6396, name: 'MACD Stoch CCI OBV Complete', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6397: BB + ADX + Williams + ATR 종합 */
    static strategy6397(ind) {
        const match = ind.bollingerBands?.position > 60 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -35 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6397, name: 'BB ADX W ATR Complete', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 };
    }
    
    /** 전략 6398: Stoch + CCI + Williams + OBV 종합 */
    static strategy6398(ind) {
        const match = ind.stochastic?.k > 65 && ind.cci > 70 && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6398, name: 'Stoch CCI W OBV Complete', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** 전략 6399: ADX + CCI + OBV + ATR 종합 */
    static strategy6399(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 60 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6399, name: 'ADX CCI OBV ATR Complete', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** 전략 6400: 4-지표 조합 최종 마일스톤 */
    static strategy6400(ind) {
        const match = ind.rsi > 55 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 55 && ind.ema20 < ind.ema50 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6400, name: 'Quad Indicator Final Milestone', direction: 'DOWN', match: Boolean(match), confidence: match ? 90 : 0 };
    }
    
    /** 모든 전략 실행 (6201-6400) */
    static analyzeAll(indicators) {
        return [
            this.strategy6201(indicators), this.strategy6202(indicators), this.strategy6203(indicators),
            this.strategy6204(indicators), this.strategy6205(indicators), this.strategy6206(indicators),
            this.strategy6207(indicators), this.strategy6208(indicators), this.strategy6209(indicators),
            this.strategy6210(indicators), this.strategy6211(indicators), this.strategy6212(indicators),
            this.strategy6213(indicators), this.strategy6214(indicators), this.strategy6215(indicators),
            this.strategy6216(indicators), this.strategy6217(indicators), this.strategy6218(indicators),
            this.strategy6219(indicators), this.strategy6220(indicators), this.strategy6221(indicators),
            this.strategy6222(indicators), this.strategy6223(indicators), this.strategy6224(indicators),
            this.strategy6225(indicators), this.strategy6226(indicators), this.strategy6227(indicators),
            this.strategy6228(indicators), this.strategy6229(indicators), this.strategy6230(indicators),
            this.strategy6231(indicators), this.strategy6232(indicators), this.strategy6233(indicators),
            this.strategy6234(indicators), this.strategy6235(indicators), this.strategy6236(indicators),
            this.strategy6237(indicators), this.strategy6238(indicators), this.strategy6239(indicators),
            this.strategy6240(indicators), this.strategy6241(indicators), this.strategy6242(indicators),
            this.strategy6243(indicators), this.strategy6244(indicators), this.strategy6245(indicators),
            this.strategy6246(indicators), this.strategy6247(indicators), this.strategy6248(indicators),
            this.strategy6249(indicators), this.strategy6250(indicators), this.strategy6251(indicators),
            this.strategy6252(indicators), this.strategy6253(indicators), this.strategy6254(indicators),
            this.strategy6255(indicators), this.strategy6256(indicators), this.strategy6257(indicators),
            this.strategy6258(indicators), this.strategy6259(indicators), this.strategy6260(indicators),
            this.strategy6261(indicators), this.strategy6262(indicators), this.strategy6263(indicators),
            this.strategy6264(indicators), this.strategy6265(indicators), this.strategy6266(indicators),
            this.strategy6267(indicators), this.strategy6268(indicators), this.strategy6269(indicators),
            this.strategy6270(indicators), this.strategy6271(indicators), this.strategy6272(indicators),
            this.strategy6273(indicators), this.strategy6274(indicators), this.strategy6275(indicators),
            this.strategy6276(indicators), this.strategy6277(indicators), this.strategy6278(indicators),
            this.strategy6279(indicators), this.strategy6280(indicators), this.strategy6281(indicators),
            this.strategy6282(indicators), this.strategy6283(indicators), this.strategy6284(indicators),
            this.strategy6285(indicators), this.strategy6286(indicators), this.strategy6287(indicators),
            this.strategy6288(indicators), this.strategy6289(indicators), this.strategy6290(indicators),
            this.strategy6291(indicators), this.strategy6292(indicators), this.strategy6293(indicators),
            this.strategy6294(indicators), this.strategy6295(indicators), this.strategy6296(indicators),
            this.strategy6297(indicators), this.strategy6298(indicators), this.strategy6299(indicators),
            this.strategy6300(indicators), this.strategy6301(indicators), this.strategy6302(indicators),
            this.strategy6303(indicators), this.strategy6304(indicators), this.strategy6305(indicators),
            this.strategy6306(indicators), this.strategy6307(indicators), this.strategy6308(indicators),
            this.strategy6309(indicators), this.strategy6310(indicators), this.strategy6311(indicators),
            this.strategy6312(indicators), this.strategy6313(indicators), this.strategy6314(indicators),
            this.strategy6315(indicators), this.strategy6316(indicators), this.strategy6317(indicators),
            this.strategy6318(indicators), this.strategy6319(indicators), this.strategy6320(indicators),
            this.strategy6321(indicators), this.strategy6322(indicators), this.strategy6323(indicators),
            this.strategy6324(indicators), this.strategy6325(indicators), this.strategy6326(indicators),
            this.strategy6327(indicators), this.strategy6328(indicators), this.strategy6329(indicators),
            this.strategy6330(indicators), this.strategy6331(indicators), this.strategy6332(indicators),
            this.strategy6333(indicators), this.strategy6334(indicators), this.strategy6335(indicators),
            this.strategy6336(indicators), this.strategy6337(indicators), this.strategy6338(indicators),
            this.strategy6339(indicators), this.strategy6340(indicators), this.strategy6341(indicators),
            this.strategy6342(indicators), this.strategy6343(indicators), this.strategy6344(indicators),
            this.strategy6345(indicators), this.strategy6346(indicators), this.strategy6347(indicators),
            this.strategy6348(indicators), this.strategy6349(indicators), this.strategy6350(indicators),
            this.strategy6351(indicators), this.strategy6352(indicators), this.strategy6353(indicators),
            this.strategy6354(indicators), this.strategy6355(indicators), this.strategy6356(indicators),
            this.strategy6357(indicators), this.strategy6358(indicators), this.strategy6359(indicators),
            this.strategy6360(indicators), this.strategy6361(indicators), this.strategy6362(indicators),
            this.strategy6363(indicators), this.strategy6364(indicators), this.strategy6365(indicators),
            this.strategy6366(indicators), this.strategy6367(indicators), this.strategy6368(indicators),
            this.strategy6369(indicators), this.strategy6370(indicators), this.strategy6371(indicators),
            this.strategy6372(indicators), this.strategy6373(indicators), this.strategy6374(indicators),
            this.strategy6375(indicators), this.strategy6376(indicators), this.strategy6377(indicators),
            this.strategy6378(indicators), this.strategy6379(indicators), this.strategy6380(indicators),
            this.strategy6381(indicators), this.strategy6382(indicators), this.strategy6383(indicators),
            this.strategy6384(indicators), this.strategy6385(indicators), this.strategy6386(indicators),
            this.strategy6387(indicators), this.strategy6388(indicators), this.strategy6389(indicators),
            this.strategy6390(indicators), this.strategy6391(indicators), this.strategy6392(indicators),
            this.strategy6393(indicators), this.strategy6394(indicators), this.strategy6395(indicators),
            this.strategy6396(indicators), this.strategy6397(indicators), this.strategy6398(indicators),
            this.strategy6399(indicators), this.strategy6400(indicators)
        ];
    }
}


