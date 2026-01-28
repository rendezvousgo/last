/**
 * UP ?�략 ?�장 (ID: 3201-3400)
 * 
 * STRATEGY_IDEAS.txt 기반 체계??구성:
 * - 3201-3350: 추세 강도 (150�?
 * - 3351-3400: 모멘?� (50�?
 */

export class StrategiesUp3201 {
    
    // ==================== 추세 강도 (3201-3350) ====================
    // ADX, ?�렌???�인, EMA ?�택, 가�?모멘?� ??
    
    // --- ADX 기반 추세 강도 (3201-3230) ---
    
    /** ADX 기본 */
    static strategy3201(ind) { const adx = ind.adx?.adx || ind.adx || 0; const match = adx >= 20; return { id: 3201, name: 'ADX Trend 20+', direction: 'UP', match: Boolean(match), confidence: match ? 62 : 0 }; }
    static strategy3202(ind) { const adx = ind.adx?.adx || ind.adx || 0; const match = adx >= 25; return { id: 3202, name: 'ADX Trend 25+', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 }; }
    static strategy3203(ind) { const adx = ind.adx?.adx || ind.adx || 0; const match = adx >= 30; return { id: 3203, name: 'ADX Strong Trend 30+', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3204(ind) { const adx = ind.adx?.adx || ind.adx || 0; const match = adx >= 35; return { id: 3204, name: 'ADX Strong Trend 35+', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3205(ind) { const adx = ind.adx?.adx || ind.adx || 0; const match = adx >= 40; return { id: 3205, name: 'ADX Very Strong 40+', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3206(ind) { const adx = ind.adx?.adx || ind.adx || 0; const match = adx >= 50; return { id: 3206, name: 'ADX Extreme Trend 50+', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    
    /** ADX + DI+ (?�승추세) */
    static strategy3207(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 20 && diPlus > diMinus; return { id: 3207, name: 'ADX20 + DI+ Lead', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy3208(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 25 && diPlus > diMinus; return { id: 3208, name: 'ADX25 + DI+ Lead', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3209(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 30 && diPlus > diMinus; return { id: 3209, name: 'ADX30 + DI+ Lead', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3210(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 35 && diPlus > diMinus; return { id: 3210, name: 'ADX35 + DI+ Lead', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3211(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 40 && diPlus > diMinus; return { id: 3211, name: 'ADX40 + DI+ Lead', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    /** ADX + DI ?�로??(골든?�로?? */
    static strategy3212(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const prevDiPlus = ind.adx?.prevDiPlus || 0; const prevDiMinus = ind.adx?.prevDiMinus || 0; const cross = diPlus > diMinus && prevDiPlus <= prevDiMinus; const match = adx >= 20 && cross; return { id: 3212, name: 'ADX20 + DI Golden Cross', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3213(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const prevDiPlus = ind.adx?.prevDiPlus || 0; const prevDiMinus = ind.adx?.prevDiMinus || 0; const cross = diPlus > diMinus && prevDiPlus <= prevDiMinus; const match = adx >= 25 && cross; return { id: 3213, name: 'ADX25 + DI Golden Cross', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3214(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const prevDiPlus = ind.adx?.prevDiPlus || 0; const prevDiMinus = ind.adx?.prevDiMinus || 0; const cross = diPlus > diMinus && prevDiPlus <= prevDiMinus; const match = adx >= 30 && cross; return { id: 3214, name: 'ADX30 + DI Golden Cross', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    
    /** ADX ?�승 추세 */
    static strategy3215(ind) { const adx = ind.adx?.adx || ind.adx || 0; const prevAdx = ind.adx?.prevAdx || 0; const match = adx > prevAdx && adx >= 20; return { id: 3215, name: 'ADX Rising + Trend', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3216(ind) { const adx = ind.adx?.adx || ind.adx || 0; const prevAdx = ind.adx?.prevAdx || 0; const match = adx > prevAdx && adx >= 25; return { id: 3216, name: 'ADX Rising + Strong Trend', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3217(ind) { const adx = ind.adx?.adx || ind.adx || 0; const prevAdx = ind.adx?.prevAdx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx > prevAdx && adx >= 20 && diPlus > diMinus; return { id: 3217, name: 'ADX Rising + DI+ Lead', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3218(ind) { const adx = ind.adx?.adx || ind.adx || 0; const prevAdx = ind.adx?.prevAdx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx > prevAdx && adx >= 25 && diPlus > diMinus; return { id: 3218, name: 'ADX Rising Strong + DI+', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3219(ind) { const adx = ind.adx?.adx || ind.adx || 0; const prevAdx = ind.adx?.prevAdx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx > prevAdx && adx >= 30 && diPlus > diMinus; return { id: 3219, name: 'ADX Rising Very Strong + DI+', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    /** ADX + RSI */
    static strategy3220(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 25 && diPlus > diMinus && ind.rsi < 35; return { id: 3220, name: 'ADX25 DI+ + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3221(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 25 && diPlus > diMinus && ind.rsi < 30; return { id: 3221, name: 'ADX25 DI+ + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy3222(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 30 && diPlus > diMinus && ind.rsi < 35; return { id: 3222, name: 'ADX30 DI+ + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy3223(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 30 && diPlus > diMinus && ind.rsi < 30; return { id: 3223, name: 'ADX30 DI+ + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    
    /** ADX + MACD */
    static strategy3224(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 25 && diPlus > diMinus && ind.macd?.MACD > ind.macd?.signal; return { id: 3224, name: 'ADX25 DI+ + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy3225(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 30 && diPlus > diMinus && ind.macd?.MACD > ind.macd?.signal; return { id: 3225, name: 'ADX30 DI+ + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy3226(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 25 && diPlus > diMinus && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3226, name: 'ADX25 DI+ + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3227(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 30 && diPlus > diMinus && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3227, name: 'ADX30 DI+ + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    
    /** ADX + EMA */
    static strategy3228(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 25 && diPlus > diMinus && ind.ema20 > ind.ema50; return { id: 3228, name: 'ADX25 DI+ + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3229(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 30 && diPlus > diMinus && ind.ema20 > ind.ema50; return { id: 3229, name: 'ADX30 DI+ + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3230(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = (adx >= 30 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50) && ind.ema10 > ind.ema20; return { id: 3230, name: 'ADX30 DI+ + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    
    // --- EMA/SMA 기반 추세 강도 (3231-3260) ---
    
    /** EMA ?�배??(?�승추세 ?�인) */
    static strategy3231(ind) { const match = ind.ema20 > ind.ema50; return { id: 3231, name: 'EMA20 > EMA50', direction: 'UP', match: Boolean(match), confidence: match ? 60 : 0 }; }
    static strategy3232(ind) { const match = ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3232, name: 'Price > EMA20 > EMA50', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy3233(ind) { const match = (ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.ema50 > ind.sma200) && ind.ema20 > ind.ema50; return { id: 3233, name: 'EMA Full Stack + SMA200', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3234(ind) { const match = ind.sma20 > ind.sma50; return { id: 3234, name: 'SMA20 > SMA50', direction: 'UP', match: Boolean(match), confidence: match ? 58 : 0 }; }
    static strategy3235(ind) { const match = ind.close > ind.sma20 && ind.sma20 > ind.sma50; return { id: 3235, name: 'Price > SMA20 > SMA50', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 }; }
    static strategy3236(ind) { const match = (ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50) && ind.rsi > 25 && ind.rsi < 75 && ind.volume > (ind.prevVolume || ind.volume) * 1.17; return { id: 3236, name: 'EMA & SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3237(ind) { const match = ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.close > ind.sma20 && ind.sma20 > ind.sma50; return { id: 3237, name: 'Full EMA & SMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    
    /** EMA/SMA 거리 기반 추세 강도 */
    static strategy3238(ind) { const emaGap = ind.ema50 > 0 ? (ind.ema20 - ind.ema50) / ind.ema50 * 100 : 0; const match = emaGap >= 1 && ind.ema20 > ind.ema50; return { id: 3238, name: 'EMA Gap 1%+', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    static strategy3239(ind) { const emaGap = ind.ema50 > 0 ? (ind.ema20 - ind.ema50) / ind.ema50 * 100 : 0; const match = emaGap >= 2 && ind.ema20 > ind.ema50; return { id: 3239, name: 'EMA Gap 2%+', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3240(ind) { const emaGap = ind.ema50 > 0 ? (ind.ema20 - ind.ema50) / ind.ema50 * 100 : 0; const match = emaGap >= 3 && ind.ema20 > ind.ema50; return { id: 3240, name: 'EMA Gap 3%+ Strong', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3241(ind) { const priceAboveEma = ind.ema20 > 0 ? (ind.close - ind.ema20) / ind.ema20 * 100 : 0; const match = priceAboveEma >= 0 && priceAboveEma <= 2 && ind.ema20 > ind.ema50; return { id: 3241, name: 'Near EMA20 + Uptrend', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3242(ind) { const priceAboveEma = ind.ema50 > 0 ? (ind.close - ind.ema50) / ind.ema50 * 100 : 0; const match = priceAboveEma >= 0 && priceAboveEma <= 3 && ind.ema20 > ind.ema50; return { id: 3242, name: 'Near EMA50 + Uptrend', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    
    /** EMA 골든?�로??*/
    static strategy3243(ind) { const cross = ind.ema20 > ind.ema50 && (ind.prevEma20 || 0) <= (ind.prevEma50 || 0); const match = (cross) && ind.ema50 > ind.ema100; return { id: 3243, name: 'EMA20/50 Golden Cross', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3244(ind) { const cross = ind.ema20 > ind.ema50 && (ind.prevEma20 || 0) <= (ind.prevEma50 || 0); const match = cross && ind.close > ind.ema20; return { id: 3244, name: 'EMA Cross + Above EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3245(ind) { const cross = ind.sma20 > ind.sma50 && (ind.prevSma20 || 0) <= (ind.prevSma50 || 0); const match = (cross) && ind.ema10 < ind.ema20 && ind.volume > ind.avgVolume * 1.5; return { id: 3245, name: 'SMA20/50 Golden Cross', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3246(ind) { const cross = ind.sma20 > ind.sma50 && (ind.prevSma20 || 0) <= (ind.prevSma50 || 0); const match = cross && ind.close > ind.sma20; return { id: 3246, name: 'SMA Cross + Above SMA20', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    /** EMA/SMA ?�승 기울�?*/
    static strategy3247(ind) { const emaRising = ind.ema20 > (ind.prevEma20 || 0); const match = (emaRising && ind.ema20 > ind.ema50) && ind.bollingerBands?.position > 70; return { id: 3247, name: 'EMA20 Rising + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy3248(ind) { const emaRising = ind.ema50 > (ind.prevEma50 || 0); const match = emaRising && ind.ema20 > ind.ema50 && ind.volume > (ind.prevVolume || ind.volume) * 1.21; return { id: 3248, name: 'EMA50 Rising + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3249(ind) { const ema20Rising = ind.ema20 > (ind.prevEma20 || 0); const ema50Rising = ind.ema50 > (ind.prevEma50 || 0); const match = ema20Rising && ema50Rising && ind.ema20 > ind.ema50; return { id: 3249, name: 'Both EMA Rising + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3250(ind) { const ema20Rising = ind.ema20 > (ind.prevEma20 || 0); const ema50Rising = ind.ema50 > (ind.prevEma50 || 0); const match = ema20Rising && ema50Rising && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3250, name: 'All Rising + Stack', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    
    /** EMA + 지??복합 */
    static strategy3251(ind) { const match = ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 35; return { id: 3251, name: 'EMA Stack + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3252(ind) { const match = ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 30; return { id: 3252, name: 'EMA Stack + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy3253(ind) { const match = ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal; return { id: 3253, name: 'EMA Stack + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy3254(ind) { const match = ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3254, name: 'EMA Stack + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy3255(ind) { const match = ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.bollingerBands?.position < 30; return { id: 3255, name: 'EMA Stack + BB30', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy3256(ind) { const match = ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.bollingerBands?.position < 25; return { id: 3256, name: 'EMA Stack + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3257(ind) { const match = ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 3257, name: 'EMA Stack + RSI35 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy3258(ind) { const match = ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 3258, name: 'EMA Stack + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy3259(ind) { const match = ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 35 && ind.bollingerBands?.position < 25; return { id: 3259, name: 'EMA Stack + RSI35 + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy3260(ind) { const match = ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25; return { id: 3260, name: 'EMA Stack + RSI + MACD + BB', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    
    // --- 가�??�치 기반 추세 강도 (3261-3290) ---
    
    /** ?�동?�균 지지 */
    static strategy3261(ind) { const match = ind.low <= ind.ema20 * 1.01 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3261, name: 'EMA20 Support Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3262(ind) { const match = ind.low <= ind.ema50 * 1.01 && ind.close > ind.ema50 && ind.ema20 > ind.ema50; return { id: 3262, name: 'EMA50 Support Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3263(ind) { const match = ind.low <= ind.sma20 * 1.01 && ind.close > ind.sma20 && ind.sma20 > ind.sma50; return { id: 3263, name: 'SMA20 Support Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3264(ind) { const match = ind.low <= ind.sma50 * 1.01 && ind.close > ind.sma50 && ind.sma20 > ind.sma50; return { id: 3264, name: 'SMA50 Support Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3265(ind) { const match = ind.low <= ind.ema20 * 1.01 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.priceChange > 0; return { id: 3265, name: 'EMA20 Bounce + Green', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3266(ind) { const match = ind.low <= ind.ema50 * 1.01 && ind.close > ind.ema50 && ind.ema20 > ind.ema50 && ind.priceChange > 0; return { id: 3266, name: 'EMA50 Bounce + Green', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    /** ?�동?�균 ?�파 */
    static strategy3267(ind) { const cross = ind.close > ind.ema20 && ind.open < ind.ema20; const match = cross && ind.ema20 > ind.ema50; return { id: 3267, name: 'EMA20 Break Up + Uptrend', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy3268(ind) { const cross = ind.close > ind.ema50 && ind.open < ind.ema50; const match = (cross) && ind.sma20 > ind.sma50 && ind.volume > (ind.prevVolume || ind.volume) * 1.21; return { id: 3268, name: 'EMA50 Break Up', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3269(ind) { const cross = ind.close > ind.sma20 && ind.open < ind.sma20; const match = cross && ind.sma20 > ind.sma50; return { id: 3269, name: 'SMA20 Break Up + Uptrend', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy3270(ind) { const cross = ind.close > ind.sma50 && ind.open < ind.sma50; const match = (cross) && ind.sma20 < ind.sma50 && ind.obv > (ind.prevObv || 0); return { id: 3270, name: 'SMA50 Break Up', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    
    /** ?�속 ?�승 캔들 + 추세 */
    static strategy3271(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 2 && ind.ema20 > ind.ema50; return { id: 3271, name: '2 Green + EMA Uptrend', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3272(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 3 && ind.ema20 > ind.ema50; return { id: 3272, name: '3 Green + EMA Uptrend', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3273(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3273, name: '2 Green + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3274(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3274, name: '3 Green + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    
    /** 가�??�승�?+ 추세 */
    static strategy3275(ind) { const match = ind.priceChange >= 1 && ind.ema20 > ind.ema50; return { id: 3275, name: 'Price +1% + EMA Uptrend', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy3276(ind) { const match = ind.priceChange >= 2 && ind.ema20 > ind.ema50; return { id: 3276, name: 'Price +2% + EMA Uptrend', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3277(ind) { const match = ind.priceChange >= 3 && ind.ema20 > ind.ema50; return { id: 3277, name: 'Price +3% + EMA Uptrend', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3278(ind) { const match = ind.priceChange >= 1 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3278, name: 'Price +1% + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy3279(ind) { const match = ind.priceChange >= 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3279, name: 'Price +2% + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy3280(ind) { const match = ind.priceChange >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3280, name: 'Price +3% + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    
    /** 복합 추세 강도 */
    static strategy3281(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 25 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3281, name: 'ADX25 + DI+ + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy3282(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 30 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.obv > (ind.prevObv || 0); return { id: 3282, name: 'ADX30 + DI+ + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy3283(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 25 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 35; return { id: 3283, name: 'ADX + EMA Stack + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy3284(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 25 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal; return { id: 3284, name: 'ADX + EMA Stack + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy3285(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 30 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 3285, name: 'ADX30 + EMA + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    
    /** SMA200 기반 ?�기 추세 */
    static strategy3286(ind) { const match = ind.close > ind.sma200; return { id: 3286, name: 'Above SMA200', direction: 'UP', match: Boolean(match), confidence: match ? 62 : 0 }; }
    static strategy3287(ind) { const match = ind.close > ind.sma200 && ind.ema20 > ind.ema50; return { id: 3287, name: 'Above SMA200 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3288(ind) { const match = ind.close > ind.sma200 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3288, name: 'Above SMA200 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3289(ind) { const match = ind.low <= ind.sma200 * 1.02 && ind.close > ind.sma200 && ind.priceChange > 0; return { id: 3289, name: 'SMA200 Support Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3290(ind) { const cross = ind.close > ind.sma200 && ind.open < ind.sma200; const match = Boolean(cross) && ind.obv > (ind.prevObv || 0); return { id: 3290, name: 'SMA200 Break Up', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    // --- 추세 강도 Ultimate (3291-3350) ---
    
    /** ?�리???�동?�균 ?�배??*/
    static strategy3291(ind) { const match = ind.ema20 > ind.ema50 && ind.ema50 > ind.sma200; return { id: 3291, name: 'Triple MA Alignment', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3292(ind) { const match = ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.ema50 > ind.sma200 && ind.volume > (ind.prevVolume || ind.volume) * 1.09; return { id: 3292, name: 'Price + Triple MA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3293(ind) { const match = ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.sma200; return { id: 3293, name: 'Full MA Alignment', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    /** ADX + ?�동?�균 + RSI */
    static strategy3294(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 25 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 30; return { id: 3294, name: 'ADX + EMA + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy3295(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 30 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 30; return { id: 3295, name: 'ADX30 + EMA + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy3296(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 25 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 30 && ind.bollingerBands?.position < 25; return { id: 3296, name: 'ADX + EMA + RSI + BB', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    
    /** ADX + ?�동?�균 + MACD */
    static strategy3297(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 25 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3297, name: 'ADX + EMA + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy3298(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 30 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3298, name: 'ADX30 + EMA + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    
    /** 골든 ?�로??+ 복합 */
    static strategy3299(ind) { const cross = ind.ema20 > ind.ema50 && (ind.prevEma20 || 0) <= (ind.prevEma50 || 0); const match = cross && ind.rsi < 35; return { id: 3299, name: 'EMA Golden Cross + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy3300(ind) { const cross = ind.ema20 > ind.ema50 && (ind.prevEma20 || 0) <= (ind.prevEma50 || 0); const match = cross && ind.rsi < 30; return { id: 3300, name: 'EMA Golden Cross + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy3301(ind) { const cross = ind.ema20 > ind.ema50 && (ind.prevEma20 || 0) <= (ind.prevEma50 || 0); const match = cross && ind.macd?.MACD > ind.macd?.signal; return { id: 3301, name: 'EMA Golden Cross + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy3302(ind) { const cross = ind.ema20 > ind.ema50 && (ind.prevEma20 || 0) <= (ind.prevEma50 || 0); const match = cross && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 3302, name: 'EMA Cross + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    
    /** ?�동?�균 지지 + 복합 */
    static strategy3303(ind) { const match = ind.low <= ind.ema20 * 1.01 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 35; return { id: 3303, name: 'EMA20 Bounce + Trend + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy3304(ind) { const match = ind.low <= ind.ema20 * 1.01 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal; return { id: 3304, name: 'EMA20 Bounce + Trend + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3305(ind) { const match = ind.low <= ind.ema50 * 1.01 && ind.close > ind.ema50 && ind.ema20 > ind.ema50 && ind.rsi < 35; return { id: 3305, name: 'EMA50 Bounce + Trend + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy3306(ind) { const match = ind.low <= ind.ema50 * 1.01 && ind.close > ind.ema50 && ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal; return { id: 3306, name: 'EMA50 Bounce + Trend + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy3307(ind) { const match = ind.low <= ind.ema20 * 1.01 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 3307, name: 'EMA20 Bounce + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy3308(ind) { const match = ind.low <= ind.ema50 * 1.01 && ind.close > ind.ema50 && ind.ema20 > ind.ema50 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 3308, name: 'EMA50 Bounce + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    
    /** SMA200 + 복합 */
    static strategy3309(ind) { const match = ind.close > ind.sma200 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 35; return { id: 3309, name: 'Above SMA200 + EMA + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy3310(ind) { const match = ind.close > ind.sma200 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal; return { id: 3310, name: 'Above SMA200 + EMA + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy3311(ind) { const match = ind.low <= ind.sma200 * 1.02 && ind.close > ind.sma200 && ind.ema20 > ind.ema50 && ind.rsi < 35; return { id: 3311, name: 'SMA200 Bounce + EMA + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy3312(ind) { const match = ind.low <= ind.sma200 * 1.02 && ind.close > ind.sma200 && ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal; return { id: 3312, name: 'SMA200 Bounce + EMA + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    /** ?�속 ?�승 + 추세 + 지??*/
    static strategy3313(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 40; return { id: 3313, name: '3 Green + EMA + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3314(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal; return { id: 3314, name: '3 Green + EMA + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy3315(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 40 && ind.macd?.MACD > ind.macd?.signal; return { id: 3315, name: '2 Green + EMA + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    
    /** 가�??�승�?+ 추세 + 지??*/
    static strategy3316(ind) { const match = ind.priceChange >= 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 40; return { id: 3316, name: 'Price +2% + EMA + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3317(ind) { const match = ind.priceChange >= 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal; return { id: 3317, name: 'Price +2% + EMA + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy3318(ind) { const match = ind.priceChange >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 45 && ind.macd?.MACD > ind.macd?.signal; return { id: 3318, name: 'Price +3% + EMA + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    /** ADX ?�로??+ 복합 */
    static strategy3319(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const prevDiPlus = ind.adx?.prevDiPlus || 0; const prevDiMinus = ind.adx?.prevDiMinus || 0; const cross = diPlus > diMinus && prevDiPlus <= prevDiMinus; const match = adx >= 25 && cross && ind.rsi < 40; return { id: 3319, name: 'DI Cross + ADX25 + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy3320(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const prevDiPlus = ind.adx?.prevDiPlus || 0; const prevDiMinus = ind.adx?.prevDiMinus || 0; const cross = diPlus > diMinus && prevDiPlus <= prevDiMinus; const match = adx >= 25 && cross && ind.macd?.MACD > ind.macd?.signal; return { id: 3320, name: 'DI Cross + ADX25 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy3321(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const prevDiPlus = ind.adx?.prevDiPlus || 0; const prevDiMinus = ind.adx?.prevDiMinus || 0; const cross = diPlus > diMinus && prevDiPlus <= prevDiMinus; const match = adx >= 25 && cross && ind.ema20 > ind.ema50; return { id: 3321, name: 'DI Cross + ADX25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy3322(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const prevDiPlus = ind.adx?.prevDiPlus || 0; const prevDiMinus = ind.adx?.prevDiMinus || 0; const cross = diPlus > diMinus && prevDiPlus <= prevDiMinus; const match = adx >= 25 && cross && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3322, name: 'DI Cross + ADX + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** Ultimate 추세 강도 */
    static strategy3323(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 30 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30; return { id: 3323, name: 'ADX30 + EMA + RSI + MACD + BB', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy3324(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const cross = ind.ema20 > ind.ema50 && (ind.prevEma20 || 0) <= (ind.prevEma50 || 0); const match = adx >= 25 && diPlus > diMinus && cross && ind.rsi < 35; return { id: 3324, name: 'ADX + EMA Cross + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy3325(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 35 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.close > ind.sma200 && ind.rsi < 40; return { id: 3325, name: 'ADX35 + Full MA + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy3326(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 35 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.close > ind.sma200 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3326, name: 'ADX35 + Full MA + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy3327(ind) { const greenCandles = ind.consecutiveGreen || 0; const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = greenCandles >= 3 && adx >= 25 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal; return { id: 3327, name: '3 Green + ADX + EMA + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy3328(ind) { const match = ind.priceChange >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.close > ind.sma200 && ind.rsi < 50 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3328, name: 'Price +3% + All MA + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy3329(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const prevAdx = ind.adx?.prevAdx || 0; const match = adx > prevAdx && adx >= 25 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 40 && ind.macd?.MACD > ind.macd?.signal; return { id: 3329, name: 'ADX Rising + EMA + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy3330(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const ema20Rising = ind.ema20 > (ind.prevEma20 || 0); const ema50Rising = ind.ema50 > (ind.prevEma50 || 0); const match = adx >= 30 && diPlus > diMinus && ema20Rising && ema50Rising && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 45; return { id: 3330, name: 'ADX30 + Rising EMA + RSI45', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    
    /** 추세 강도 + BB */
    static strategy3331(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 25 && diPlus > diMinus && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 3; return { id: 3331, name: 'ADX + DI+ + BB25 Expand', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy3332(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 25 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.bollingerBands?.position < 30 && ind.bollingerBands?.bandwidth >= 3; return { id: 3332, name: 'ADX + EMA + BB Expand', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy3333(ind) { const match = ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth < 2; return { id: 3333, name: 'EMA Stack + BB Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3334(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 20 && adx < 25 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.bollingerBands?.bandwidth < 2; return { id: 3334, name: 'ADX Low + EMA + BB Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    
    /** ?�보?�치 + 추세 */
    static strategy3335(ind) { const fibLevel = ind.fibonacci?.level618; const match = (fibLevel && ind.low <= fibLevel && ind.close > fibLevel && ind.ema20 > ind.ema50) && ind.rsi > 30 && ind.rsi < 70 && ind.volume > (ind.avgVolume || ind.volume) * 1.1; return { id: 3335, name: 'Fib 61.8% Bounce + EMA Uptrend', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy3336(ind) { const fibLevel = ind.fibonacci?.level618; const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = fibLevel && ind.low <= fibLevel && ind.close > fibLevel && adx >= 25 && diPlus > diMinus; return { id: 3336, name: 'Fib 61.8% Bounce + ADX25 DI+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy3337(ind) { const fibLevel = ind.fibonacci?.level618; const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = fibLevel && ind.low <= fibLevel && ind.close > fibLevel && adx >= 25 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3337, name: 'Fib 61.8% + ADX + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    
    /** 24?�간 + 추세 */
    static strategy3338(ind) { const low24h = ind.low24h || ind.low; const match = low24h && ind.low <= low24h * 1.02 && ind.close > low24h && ind.ema20 > ind.ema50; return { id: 3338, name: '24h Low + EMA Uptrend', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3339(ind) { const low24h = ind.low24h || ind.low; const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = low24h && ind.low <= low24h * 1.02 && ind.close > low24h && adx >= 25 && diPlus > diMinus; return { id: 3339, name: '24h Low + ADX25 DI+', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy3340(ind) { const low24h = ind.low24h || ind.low; const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = low24h && ind.low <= low24h * 1.02 && ind.close > low24h && adx >= 25 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3340, name: '24h Low + ADX + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** Ultimate Trend Strength */
    static strategy3341(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 30 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.close > ind.sma200 && ind.rsi < 35 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30; return { id: 3341, name: 'Ultimate Trend + All Indicators', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    static strategy3342(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const fibLevel = ind.fibonacci?.level618; const match = adx >= 25 && diPlus > diMinus && fibLevel && ind.low <= fibLevel && ind.close > fibLevel && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 35; return { id: 3342, name: 'ADX + Fib + EMA + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy3343(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const low24h = ind.low24h || ind.low; const match = adx >= 25 && diPlus > diMinus && low24h && ind.low <= low24h * 1.02 && ind.close > low24h && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 35; return { id: 3343, name: 'ADX + 24h Low + EMA + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy3344(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const greenCandles = ind.consecutiveGreen || 0; const match = adx >= 30 && diPlus > diMinus && greenCandles >= 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 40 && ind.macd?.MACD > ind.macd?.signal; return { id: 3344, name: 'ADX30 + 2 Green + EMA + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy3345(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const prevAdx = ind.adx?.prevAdx || 0; const ema20Rising = ind.ema20 > (ind.prevEma20 || 0); const match = adx > prevAdx && adx >= 25 && diPlus > diMinus && ema20Rising && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 3345, name: 'ADX Rising + EMA Rising + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy3346(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const prevDiPlus = ind.adx?.prevDiPlus || 0; const prevDiMinus = ind.adx?.prevDiMinus || 0; const cross = diPlus > diMinus && prevDiPlus <= prevDiMinus; const match = adx >= 25 && cross && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 3346, name: 'DI Cross + EMA + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy3347(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 40 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.macd?.MACD > 0; return { id: 3347, name: 'ADX40 Extreme + EMA + MACD+', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy3348(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = adx >= 35 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.sma200 && ind.rsi < 40 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 40; return { id: 3348, name: 'ADX35 + Full Stack + All', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy3349(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const prevAdx = ind.adx?.prevAdx || 0; const match = adx > prevAdx && adx >= 30 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.sma200 && ind.rsi < 35 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30; return { id: 3349, name: 'Ultimate Rising ADX Signal', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    static strategy3350(ind) { const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const prevAdx = ind.adx?.prevAdx || 0; const ema20Rising = ind.ema20 > (ind.prevEma20 || 0); const ema50Rising = ind.ema50 > (ind.prevEma50 || 0); const greenCandles = ind.consecutiveGreen || 0; const match = adx > prevAdx && adx >= 30 && diPlus > diMinus && ema20Rising && ema50Rising && greenCandles >= 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.close > ind.sma200 && ind.rsi < 35 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30; return { id: 3350, name: 'Ultimate Trend Strength Signal', direction: 'UP', match: Boolean(match), confidence: match ? 98 : 0 }; }
    
    // ==================== 모멘?� (3351-3400) ====================
    // ROC, 모멘?� 지?? 가�?가?�도 ??
    
    // --- ROC (Rate of Change) 기반 (3351-3370) ---
    
    /** ROC 기본 */
    static strategy3351(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const match = roc > 0; return { id: 3351, name: 'ROC Positive', direction: 'UP', match: Boolean(match), confidence: match ? 58 : 0 }; }
    static strategy3352(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const match = roc >= 1; return { id: 3352, name: 'ROC +1%', direction: 'UP', match: Boolean(match), confidence: match ? 62 : 0 }; }
    static strategy3353(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const match = roc >= 2; return { id: 3353, name: 'ROC +2%', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 }; }
    static strategy3354(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const match = roc >= 3; return { id: 3354, name: 'ROC +3%', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3355(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const match = roc >= 5; return { id: 3355, name: 'ROC +5% Strong', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3356(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const match = roc >= 7; return { id: 3356, name: 'ROC +7% Very Strong', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3357(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const match = roc >= 10; return { id: 3357, name: 'ROC +10% Extreme', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    
    /** ROC ?�환 (?�에???�으�? */
    static strategy3358(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const prevRoc = ind.prevRoc || ind.momentum?.prevRoc || 0; const match = roc > 0 && prevRoc <= 0; return { id: 3358, name: 'ROC Zero Cross Up', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3359(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const prevRoc = ind.prevRoc || ind.momentum?.prevRoc || 0; const match = roc >= 1 && prevRoc <= 0; return { id: 3359, name: 'ROC Strong Cross Up', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3360(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const prevRoc = ind.prevRoc || ind.momentum?.prevRoc || 0; const match = roc > prevRoc && roc > 0; return { id: 3360, name: 'ROC Rising + Positive', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    
    /** ROC + 지??복합 */
    static strategy3361(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const match = roc >= 2 && ind.rsi < 35; return { id: 3361, name: 'ROC +2% + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3362(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const match = roc >= 2 && ind.rsi < 30; return { id: 3362, name: 'ROC +2% + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3363(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const match = roc >= 2 && ind.macd?.MACD > ind.macd?.signal; return { id: 3363, name: 'ROC +2% + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3364(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const match = roc >= 3 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3364, name: 'ROC +3% + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3365(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const match = roc >= 2 && ind.ema20 > ind.ema50; return { id: 3365, name: 'ROC +2% + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3366(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const match = roc >= 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3366, name: 'ROC +2% + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3367(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const match = roc >= 3 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 3367, name: 'ROC +3% + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy3368(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const match = roc >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 40; return { id: 3368, name: 'ROC +3% + EMA + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy3369(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const match = roc >= 5 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50; return { id: 3369, name: 'ROC +5% + RSI + MACD + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy3370(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const prevRoc = ind.prevRoc || ind.momentum?.prevRoc || 0; const match = roc > 0 && prevRoc <= 0 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 3370, name: 'ROC Cross Up + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    
    // --- 가�?모멘?� (3371-3390) ---
    
    /** ?�속 ?�승 모멘?� */
    static strategy3371(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 2 && ind.priceChange > 0; return { id: 3371, name: '2 Green Momentum', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    static strategy3372(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 3 && ind.priceChange > 0; return { id: 3372, name: '3 Green Momentum', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3373(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 4 && ind.priceChange > 0; return { id: 3373, name: '4 Green Momentum', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3374(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 5; return { id: 3374, name: '5 Green Strong Momentum', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    /** 가�?가?�도 */
    static strategy3375(ind) { const priceAcc = ind.priceChange > (ind.prevPriceChange || 0); const match = priceAcc && ind.priceChange > 0; return { id: 3375, name: 'Price Acceleration Up', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy3376(ind) { const priceAcc = ind.priceChange > (ind.prevPriceChange || 0); const match = priceAcc && ind.priceChange >= 1; return { id: 3376, name: 'Price Acc +1%', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3377(ind) { const priceAcc = ind.priceChange > (ind.prevPriceChange || 0); const match = priceAcc && ind.priceChange >= 2; return { id: 3377, name: 'Price Acc +2%', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3378(ind) { const priceAcc = ind.priceChange > (ind.prevPriceChange || 0); const match = priceAcc && ind.priceChange >= 3; return { id: 3378, name: 'Price Acc +3%', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    /** 모멘?� + 지??*/
    static strategy3379(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 2 && ind.rsi < 40; return { id: 3379, name: '2 Green + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3380(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 2 && ind.rsi < 35; return { id: 3380, name: '2 Green + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3381(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 3 && ind.rsi < 40; return { id: 3381, name: '3 Green + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3382(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 2 && ind.macd?.MACD > ind.macd?.signal; return { id: 3382, name: '2 Green + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3383(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 3 && ind.macd?.MACD > ind.macd?.signal; return { id: 3383, name: '3 Green + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy3384(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 2 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3384, name: '2 Green + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3385(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 2 && ind.rsi < 40 && ind.macd?.MACD > ind.macd?.signal; return { id: 3385, name: '2 Green + RSI40 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3386(ind) { const greenCandles = ind.consecutiveGreen || 0; const match = greenCandles >= 3 && ind.rsi < 40 && ind.macd?.MACD > ind.macd?.signal; return { id: 3386, name: '3 Green + RSI40 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    /** 모멘?� + 볼륨 */
    static strategy3387(ind) { const greenCandles = ind.consecutiveGreen || 0; const volumeSpike = ind.volumeChange >= 50; const match = (greenCandles >= 2 && volumeSpike) && ind.stochastic?.k < 70; return { id: 3387, name: '2 Green + Volume Spike 50%', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3388(ind) { const greenCandles = ind.consecutiveGreen || 0; const volumeSpike = ind.volumeChange >= 100; const match = greenCandles >= 2 && volumeSpike && (ind.atr || 0) > 1.3; return { id: 3388, name: '2 Green + Volume Spike 100%', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3389(ind) { const priceAcc = ind.priceChange > (ind.prevPriceChange || 0); const volumeSpike = ind.volumeChange >= 50; const match = priceAcc && ind.priceChange >= 1 && volumeSpike; return { id: 3389, name: 'Price Acc + Volume Spike', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3390(ind) { const greenCandles = ind.consecutiveGreen || 0; const volumeSpike = ind.volumeChange >= 50; const match = greenCandles >= 3 && volumeSpike && ind.macd?.MACD > ind.macd?.signal; return { id: 3390, name: '3 Green + Volume + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    
    // --- 모멘?� Ultimate (3391-3400) ---
    
    /** Ultimate Momentum */
    static strategy3391(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const greenCandles = ind.consecutiveGreen || 0; const match = roc >= 3 && greenCandles >= 2 && ind.rsi < 40; return { id: 3391, name: 'ROC + Green + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy3392(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const greenCandles = ind.consecutiveGreen || 0; const match = roc >= 3 && greenCandles >= 2 && ind.macd?.MACD > ind.macd?.signal; return { id: 3392, name: 'ROC + Green + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy3393(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const greenCandles = ind.consecutiveGreen || 0; const match = roc >= 3 && greenCandles >= 2 && ind.ema20 > ind.ema50; return { id: 3393, name: 'ROC + Green + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3394(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const greenCandles = ind.consecutiveGreen || 0; const match = roc >= 3 && greenCandles >= 2 && ind.rsi < 40 && ind.macd?.MACD > ind.macd?.signal; return { id: 3394, name: 'ROC + Green + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy3395(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const greenCandles = ind.consecutiveGreen || 0; const match = roc >= 3 && greenCandles >= 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 45; return { id: 3395, name: 'ROC + Green + EMA Stack + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy3396(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const greenCandles = ind.consecutiveGreen || 0; const volumeSpike = ind.volumeChange >= 50; const match = roc >= 3 && greenCandles >= 2 && volumeSpike && ind.rsi < 45; return { id: 3396, name: 'ROC + Green + Volume + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy3397(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const greenCandles = ind.consecutiveGreen || 0; const volumeSpike = ind.volumeChange >= 50; const match = roc >= 5 && greenCandles >= 3 && volumeSpike && ind.macd?.MACD > ind.macd?.signal; return { id: 3397, name: 'Strong ROC + 3 Green + Vol + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy3398(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const greenCandles = ind.consecutiveGreen || 0; const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = roc >= 3 && greenCandles >= 2 && adx >= 25 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3398, name: 'ROC + Green + ADX + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy3399(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const greenCandles = ind.consecutiveGreen || 0; const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const match = roc >= 5 && greenCandles >= 3 && adx >= 25 && diPlus > diMinus && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 45 && ind.macd?.MACD > ind.macd?.signal; return { id: 3399, name: 'Strong Momentum + ADX + All', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy3400(ind) { const roc = ind.roc || ind.momentum?.roc || 0; const greenCandles = ind.consecutiveGreen || 0; const adx = ind.adx?.adx || ind.adx || 0; const diPlus = ind.adx?.plusDI || ind.plusDI || 0; const diMinus = ind.adx?.minusDI || ind.minusDI || 0; const volumeSpike = ind.volumeChange >= 100; const match = roc >= 5 && greenCandles >= 3 && adx >= 30 && diPlus > diMinus && volumeSpike && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.close > ind.sma200 && ind.rsi < 50 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 50; return { id: 3400, name: 'Ultimate Momentum Signal', direction: 'UP', match: Boolean(match), confidence: match ? 98 : 0 }; }

    /** 모든 ?�략 ?�행 (3201-3400) */
    static analyzeAll(indicators) {
        return [
            this.strategy3201(indicators), this.strategy3202(indicators), this.strategy3203(indicators),
            this.strategy3204(indicators), this.strategy3205(indicators), this.strategy3206(indicators),
            this.strategy3207(indicators), this.strategy3208(indicators), this.strategy3209(indicators),
            this.strategy3210(indicators), this.strategy3211(indicators), this.strategy3212(indicators),
            this.strategy3213(indicators), this.strategy3214(indicators), this.strategy3215(indicators),
            this.strategy3216(indicators), this.strategy3217(indicators), this.strategy3218(indicators),
            this.strategy3219(indicators), this.strategy3220(indicators), this.strategy3221(indicators),
            this.strategy3222(indicators), this.strategy3223(indicators), this.strategy3224(indicators),
            this.strategy3225(indicators), this.strategy3226(indicators), this.strategy3227(indicators),
            this.strategy3228(indicators), this.strategy3229(indicators), this.strategy3230(indicators),
            this.strategy3231(indicators), this.strategy3232(indicators), this.strategy3233(indicators),
            this.strategy3234(indicators), this.strategy3235(indicators), this.strategy3236(indicators),
            this.strategy3237(indicators), this.strategy3238(indicators), this.strategy3239(indicators),
            this.strategy3240(indicators), this.strategy3241(indicators), this.strategy3242(indicators),
            this.strategy3243(indicators), this.strategy3244(indicators), this.strategy3245(indicators),
            this.strategy3246(indicators), this.strategy3247(indicators), this.strategy3248(indicators),
            this.strategy3249(indicators), this.strategy3250(indicators), this.strategy3251(indicators),
            this.strategy3252(indicators), this.strategy3253(indicators), this.strategy3254(indicators),
            this.strategy3255(indicators), this.strategy3256(indicators), this.strategy3257(indicators),
            this.strategy3258(indicators), this.strategy3259(indicators), this.strategy3260(indicators),
            this.strategy3261(indicators), this.strategy3262(indicators), this.strategy3263(indicators),
            this.strategy3264(indicators), this.strategy3265(indicators), this.strategy3266(indicators),
            this.strategy3267(indicators), this.strategy3268(indicators), this.strategy3269(indicators),
            this.strategy3270(indicators), this.strategy3271(indicators), this.strategy3272(indicators),
            this.strategy3273(indicators), this.strategy3274(indicators), this.strategy3275(indicators),
            this.strategy3276(indicators), this.strategy3277(indicators), this.strategy3278(indicators),
            this.strategy3279(indicators), this.strategy3280(indicators), this.strategy3281(indicators),
            this.strategy3282(indicators), this.strategy3283(indicators), this.strategy3284(indicators),
            this.strategy3285(indicators), this.strategy3286(indicators), this.strategy3287(indicators),
            this.strategy3288(indicators), this.strategy3289(indicators), this.strategy3290(indicators),
            this.strategy3291(indicators), this.strategy3292(indicators), this.strategy3293(indicators),
            this.strategy3294(indicators), this.strategy3295(indicators), this.strategy3296(indicators),
            this.strategy3297(indicators), this.strategy3298(indicators), this.strategy3299(indicators),
            this.strategy3300(indicators), this.strategy3301(indicators), this.strategy3302(indicators),
            this.strategy3303(indicators), this.strategy3304(indicators), this.strategy3305(indicators),
            this.strategy3306(indicators), this.strategy3307(indicators), this.strategy3308(indicators),
            this.strategy3309(indicators), this.strategy3310(indicators), this.strategy3311(indicators),
            this.strategy3312(indicators), this.strategy3313(indicators), this.strategy3314(indicators),
            this.strategy3315(indicators), this.strategy3316(indicators), this.strategy3317(indicators),
            this.strategy3318(indicators), this.strategy3319(indicators), this.strategy3320(indicators),
            this.strategy3321(indicators), this.strategy3322(indicators), this.strategy3323(indicators),
            this.strategy3324(indicators), this.strategy3325(indicators), this.strategy3326(indicators),
            this.strategy3327(indicators), this.strategy3328(indicators), this.strategy3329(indicators),
            this.strategy3330(indicators), this.strategy3331(indicators), this.strategy3332(indicators),
            this.strategy3333(indicators), this.strategy3334(indicators), this.strategy3335(indicators),
            this.strategy3336(indicators), this.strategy3337(indicators), this.strategy3338(indicators),
            this.strategy3339(indicators), this.strategy3340(indicators), this.strategy3341(indicators),
            this.strategy3342(indicators), this.strategy3343(indicators), this.strategy3344(indicators),
            this.strategy3345(indicators), this.strategy3346(indicators), this.strategy3347(indicators),
            this.strategy3348(indicators), this.strategy3349(indicators), this.strategy3350(indicators),
            this.strategy3351(indicators), this.strategy3352(indicators), this.strategy3353(indicators),
            this.strategy3354(indicators), this.strategy3355(indicators), this.strategy3356(indicators),
            this.strategy3357(indicators), this.strategy3358(indicators), this.strategy3359(indicators),
            this.strategy3360(indicators), this.strategy3361(indicators), this.strategy3362(indicators),
            this.strategy3363(indicators), this.strategy3364(indicators), this.strategy3365(indicators),
            this.strategy3366(indicators), this.strategy3367(indicators), this.strategy3368(indicators),
            this.strategy3369(indicators), this.strategy3370(indicators), this.strategy3371(indicators),
            this.strategy3372(indicators), this.strategy3373(indicators), this.strategy3374(indicators),
            this.strategy3375(indicators), this.strategy3376(indicators), this.strategy3377(indicators),
            this.strategy3378(indicators), this.strategy3379(indicators), this.strategy3380(indicators),
            this.strategy3381(indicators), this.strategy3382(indicators), this.strategy3383(indicators),
            this.strategy3384(indicators), this.strategy3385(indicators), this.strategy3386(indicators),
            this.strategy3387(indicators), this.strategy3388(indicators), this.strategy3389(indicators),
            this.strategy3390(indicators), this.strategy3391(indicators), this.strategy3392(indicators),
            this.strategy3393(indicators), this.strategy3394(indicators), this.strategy3395(indicators),
            this.strategy3396(indicators), this.strategy3397(indicators), this.strategy3398(indicators),
            this.strategy3399(indicators), this.strategy3400(indicators)
        ];
    }
}

