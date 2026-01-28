/**
 * UP ?�략 ?�장 (ID: 3801-4000)
 * 
 * STRATEGY_IDEAS.txt 기반 체계??구성:
 * - 3801-3900: ATR 기반 변?�성 (100�?
 * - 3901-4000: BB 밴드??기반 (100�?
 */

export class StrategiesUp3801 {
    
    // ==================== ATR 기반 변?�성 (3801-3900) ====================
    // ATR(Average True Range) 변?�성 지???�용
    
    // --- ATR 기본 (3801-3820) ---
    
    /** ATR 변?�성 ?�벨 */
    static strategy3801(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7; return { id: 3801, name: 'ATR Low Volatility', direction: 'UP', match: Boolean(match), confidence: match ? 60 : 0 }; }
    static strategy3802(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.5; return { id: 3802, name: 'ATR Very Low Volatility', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    static strategy3803(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 1.5; return { id: 3803, name: 'ATR High Volatility 1.5x', direction: 'UP', match: Boolean(match), confidence: match ? 62 : 0 }; }
    static strategy3804(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 2.0; return { id: 3804, name: 'ATR High Volatility 2x', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 }; }
    static strategy3805(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 2.5; return { id: 3805, name: 'ATR Extreme Volatility 2.5x', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3806(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 3.0; return { id: 3806, name: 'ATR Extreme Volatility 3x', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    
    /** ATR ?�승/?�락 */
    static strategy3807(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const match = atr > prevAtr; return { id: 3807, name: 'ATR Rising', direction: 'UP', match: Boolean(match), confidence: match ? 58 : 0 }; }
    static strategy3808(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const match = atr < prevAtr; return { id: 3808, name: 'ATR Falling', direction: 'UP', match: Boolean(match), confidence: match ? 56 : 0 }; }
    static strategy3809(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const change = prevAtr > 0 ? (atr - prevAtr) / prevAtr * 100 : 0; const match = (change >= 10) && ind.rsi > 30 && ind.rsi < 70; return { id: 3809, name: 'ATR Rising 10%+', direction: 'UP', match: Boolean(match), confidence: match ? 64 : 0 }; }
    static strategy3810(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const change = prevAtr > 0 ? (atr - prevAtr) / prevAtr * 100 : 0; const match = (change >= 20) && ind.rsi > 35 && ind.rsi < 65; return { id: 3810, name: 'ATR Rising 20%+', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy3811(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const change = prevAtr > 0 ? (atr - prevAtr) / prevAtr * 100 : 0; const match = (change >= 30) && ind.rsi > 40 && ind.rsi < 60; return { id: 3811, name: 'ATR Spike 30%+', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    
    /** ATR ?��?가�??�동 */
    static strategy3812(ind) { const atr = ind.atr || ind.atr14 || 0; const priceMove = Math.abs(ind.close - ind.open); const ratio = atr > 0 ? priceMove / atr : 0; const match = (ratio >= 0.5 && ind.priceChange > 0) && ind.rsi > 20 && ind.rsi < 80; return { id: 3812, name: 'Price Move 0.5x ATR Up', direction: 'UP', match: Boolean(match), confidence: match ? 64 : 0 }; }
    static strategy3813(ind) { const atr = ind.atr || ind.atr14 || 0; const priceMove = Math.abs(ind.close - ind.open); const ratio = atr > 0 ? priceMove / atr : 0; const match = (ratio >= 1.0 && ind.priceChange > 0) && ind.macd?.histogram > 0; return { id: 3813, name: 'Price Move 1x ATR Up', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3814(ind) { const atr = ind.atr || ind.atr14 || 0; const priceMove = Math.abs(ind.close - ind.open); const ratio = atr > 0 ? priceMove / atr : 0; const match = ratio >= 1.5 && ind.priceChange > 0; return { id: 3814, name: 'Price Move 1.5x ATR Up', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3815(ind) { const atr = ind.atr || ind.atr14 || 0; const priceMove = Math.abs(ind.close - ind.open); const ratio = atr > 0 ? priceMove / atr : 0; const match = ratio >= 2.0 && ind.priceChange > 0; return { id: 3815, name: 'Price Move 2x ATR Up', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    /** ATR ?�??반등 */
    static strategy3816(ind) { const atr = ind.atr || ind.atr14 || 0; const dropFromHigh = ind.high - ind.close; const ratio = atr > 0 ? dropFromHigh / atr : 0; const match = ratio < 0.3 && ind.priceChange > 0; return { id: 3816, name: 'ATR Close Near High', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy3817(ind) { const atr = ind.atr || ind.atr14 || 0; const bounce = ind.close - ind.low; const ratio = atr > 0 ? bounce / atr : 0; const match = ratio >= 0.5 && ind.priceChange > 0 && ind.volume > ind.avgVolume * 1.1; return { id: 3817, name: 'ATR Bounce 0.5x', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 }; }
    static strategy3818(ind) { const atr = ind.atr || ind.atr14 || 0; const bounce = ind.close - ind.low; const ratio = atr > 0 ? bounce / atr : 0; const match = ratio >= 1.0 && ind.priceChange > 0 && ind.obv > (ind.prevObv || 0); return { id: 3818, name: 'ATR Strong Bounce 1x', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3819(ind) { const atr = ind.atr || ind.atr14 || 0; const range = ind.high - ind.low; const ratio = atr > 0 ? range / atr : 0; const match = ratio >= 1.5 && ind.close > ind.open; return { id: 3819, name: 'ATR Wide Range + Green', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3820(ind) { const atr = ind.atr || ind.atr14 || 0; const range = ind.high - ind.low; const ratio = atr > 0 ? range / atr : 0; const match = ratio >= 2.0 && ind.close > ind.open; return { id: 3820, name: 'ATR Very Wide Range + Green', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    
    // --- ATR + RSI (3821-3835) ---
    
    /** ATR ?�변?�성 + RSI */
    static strategy3821(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7 && ind.rsi < 30; return { id: 3821, name: 'ATR Low + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3822(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7 && ind.rsi < 35; return { id: 3822, name: 'ATR Low + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3823(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.5 && ind.rsi < 30; return { id: 3823, name: 'ATR Very Low + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3824(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.5 && ind.rsi < 25; return { id: 3824, name: 'ATR Very Low + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    /** ATR 고�??�성 + RSI */
    static strategy3825(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 1.5 && ind.rsi < 30; return { id: 3825, name: 'ATR High + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3826(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 2.0 && ind.rsi < 30; return { id: 3826, name: 'ATR 2x + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy3827(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 2.0 && ind.rsi < 25; return { id: 3827, name: 'ATR 2x + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** ATR ?�승 + RSI */
    static strategy3828(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const atrRising = atr > prevAtr; const match = atrRising && ind.rsi < 35; return { id: 3828, name: 'ATR Rising + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3829(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const atrRising = atr > prevAtr; const match = atrRising && ind.rsi < 30; return { id: 3829, name: 'ATR Rising + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3830(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const change = prevAtr > 0 ? (atr - prevAtr) / prevAtr * 100 : 0; const match = change >= 20 && ind.rsi < 30; return { id: 3830, name: 'ATR Spike 20% + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    
    /** ATR 가격이??+ RSI */
    static strategy3831(ind) { const atr = ind.atr || ind.atr14 || 0; const priceMove = Math.abs(ind.close - ind.open); const ratio = atr > 0 ? priceMove / atr : 0; const match = ratio >= 1.0 && ind.priceChange > 0 && ind.rsi < 40; return { id: 3831, name: 'ATR Move 1x Up + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3832(ind) { const atr = ind.atr || ind.atr14 || 0; const priceMove = Math.abs(ind.close - ind.open); const ratio = atr > 0 ? priceMove / atr : 0; const match = ratio >= 1.0 && ind.priceChange > 0 && ind.rsi < 35; return { id: 3832, name: 'ATR Move 1x Up + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3833(ind) { const atr = ind.atr || ind.atr14 || 0; const priceMove = Math.abs(ind.close - ind.open); const ratio = atr > 0 ? priceMove / atr : 0; const match = ratio >= 1.5 && ind.priceChange > 0 && ind.rsi < 40; return { id: 3833, name: 'ATR Move 1.5x Up + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3834(ind) { const atr = ind.atr || ind.atr14 || 0; const priceMove = Math.abs(ind.close - ind.open); const ratio = atr > 0 ? priceMove / atr : 0; const match = ratio >= 1.5 && ind.priceChange > 0 && ind.rsi < 35; return { id: 3834, name: 'ATR Move 1.5x Up + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy3835(ind) { const atr = ind.atr || ind.atr14 || 0; const priceMove = Math.abs(ind.close - ind.open); const ratio = atr > 0 ? priceMove / atr : 0; const match = ratio >= 2.0 && ind.priceChange > 0 && ind.rsi < 45; return { id: 3835, name: 'ATR Move 2x Up + RSI45', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    // --- ATR + MACD (3836-3850) ---
    
    /** ATR ?�변?�성 + MACD */
    static strategy3836(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7 && ind.macd?.MACD > ind.macd?.signal; return { id: 3836, name: 'ATR Low + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3837(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.5 && ind.macd?.MACD > ind.macd?.signal; return { id: 3837, name: 'ATR Very Low + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy3838(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3838, name: 'ATR Low + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3839(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.5 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3839, name: 'ATR Very Low + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    
    /** ATR 고�??�성 + MACD */
    static strategy3840(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 1.5 && ind.macd?.MACD > ind.macd?.signal; return { id: 3840, name: 'ATR High + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3841(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 2.0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3841, name: 'ATR 2x + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3842(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 1.5 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3842, name: 'ATR High + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy3843(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 2.0 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3843, name: 'ATR 2x + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    
    /** ATR ?�승 + MACD */
    static strategy3844(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const atrRising = atr > prevAtr; const match = atrRising && ind.macd?.MACD > ind.macd?.signal; return { id: 3844, name: 'ATR Rising + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3845(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const atrRising = atr > prevAtr; const match = atrRising && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3845, name: 'ATR Rising + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3846(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const change = prevAtr > 0 ? (atr - prevAtr) / prevAtr * 100 : 0; const match = (change >= 20 && ind.macd?.MACD > ind.macd?.signal) && ind.macd?.histogram < 0; return { id: 3846, name: 'ATR Spike 20% + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3847(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const change = prevAtr > 0 ? (atr - prevAtr) / prevAtr * 100 : 0; const match = (change >= 30 && ind.macd?.MACD > ind.macd?.signal) && ind.macd?.histogram > 5; return { id: 3847, name: 'ATR Spike 30% + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    /** ATR 가격이??+ MACD */
    static strategy3848(ind) { const atr = ind.atr || ind.atr14 || 0; const priceMove = Math.abs(ind.close - ind.open); const ratio = atr > 0 ? priceMove / atr : 0; const match = ratio >= 1.0 && ind.priceChange > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3848, name: 'ATR Move 1x + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3849(ind) { const atr = ind.atr || ind.atr14 || 0; const priceMove = Math.abs(ind.close - ind.open); const ratio = atr > 0 ? priceMove / atr : 0; const match = ratio >= 1.5 && ind.priceChange > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3849, name: 'ATR Move 1.5x + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3850(ind) { const atr = ind.atr || ind.atr14 || 0; const priceMove = Math.abs(ind.close - ind.open); const ratio = atr > 0 ? priceMove / atr : 0; const match = ratio >= 2.0 && ind.priceChange > 0 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3850, name: 'ATR Move 2x + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    
    // --- ATR + BB (3851-3865) ---
    
    /** ATR + BB ?�치 */
    static strategy3851(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7 && ind.bollingerBands?.position < 25; return { id: 3851, name: 'ATR Low + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy3852(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.5 && ind.bollingerBands?.position < 20; return { id: 3852, name: 'ATR Very Low + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy3853(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 1.5 && ind.bollingerBands?.position < 25; return { id: 3853, name: 'ATR High + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3854(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 2.0 && ind.bollingerBands?.position < 20; return { id: 3854, name: 'ATR 2x + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    
    /** ATR + BB 밴드??*/
    static strategy3855(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7 && ind.bollingerBands?.bandwidth < 2; return { id: 3855, name: 'ATR Low + BB Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3856(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.5 && ind.bollingerBands?.bandwidth < 1.5; return { id: 3856, name: 'ATR Very Low + Tight Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3857(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 1.5 && ind.bollingerBands?.bandwidth >= 3; return { id: 3857, name: 'ATR High + BB Expand', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3858(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 2.0 && ind.bollingerBands?.bandwidth >= 4; return { id: 3858, name: 'ATR 2x + BB Wide Expand', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    /** ATR ?�승 + BB */
    static strategy3859(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const atrRising = atr > prevAtr; const match = atrRising && ind.bollingerBands?.position < 25; return { id: 3859, name: 'ATR Rising + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy3860(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const atrRising = atr > prevAtr; const match = atrRising && ind.bollingerBands?.position < 20; return { id: 3860, name: 'ATR Rising + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy3861(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const change = prevAtr > 0 ? (atr - prevAtr) / prevAtr * 100 : 0; const match = change >= 20 && ind.bollingerBands?.position < 25; return { id: 3861, name: 'ATR Spike 20% + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy3862(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const change = prevAtr > 0 ? (atr - prevAtr) / prevAtr * 100 : 0; const match = change >= 20 && ind.bollingerBands?.bandwidth >= 3; return { id: 3862, name: 'ATR Spike 20% + BB Expand', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy3863(ind) { const atr = ind.atr || ind.atr14 || 0; const priceMove = Math.abs(ind.close - ind.open); const ratio = atr > 0 ? priceMove / atr : 0; const match = ratio >= 1.0 && ind.priceChange > 0 && ind.bollingerBands?.position < 30; return { id: 3863, name: 'ATR Move 1x + BB30', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3864(ind) { const atr = ind.atr || ind.atr14 || 0; const priceMove = Math.abs(ind.close - ind.open); const ratio = atr > 0 ? priceMove / atr : 0; const match = ratio >= 1.5 && ind.priceChange > 0 && ind.bollingerBands?.position < 25; return { id: 3864, name: 'ATR Move 1.5x + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3865(ind) { const atr = ind.atr || ind.atr14 || 0; const priceMove = Math.abs(ind.close - ind.open); const ratio = atr > 0 ? priceMove / atr : 0; const match = ratio >= 2.0 && ind.priceChange > 0 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 3; return { id: 3865, name: 'ATR Move 2x + BB25 Expand', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    // --- ATR + EMA (3866-3880) ---
    
    /** ATR + EMA ?�배??*/
    static strategy3866(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7 && ind.ema20 > ind.ema50; return { id: 3866, name: 'ATR Low + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3867(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3867, name: 'ATR Low + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3868(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3868, name: 'ATR Very Low + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3869(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 1.5 && ind.ema20 > ind.ema50; return { id: 3869, name: 'ATR High + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3870(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 1.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3870, name: 'ATR High + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy3871(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 2.0 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3871, name: 'ATR 2x + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    
    /** ATR + EMA 지지 반등 */
    static strategy3872(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7 && ind.low <= ind.ema20 * 1.01 && ind.close > ind.ema20; return { id: 3872, name: 'ATR Low + EMA20 Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy3873(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 1.5 && ind.low <= ind.ema20 * 1.01 && ind.close > ind.ema20; return { id: 3873, name: 'ATR High + EMA20 Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy3874(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7 && ind.low <= ind.ema50 * 1.01 && ind.close > ind.ema50 && ind.ema20 > ind.ema50; return { id: 3874, name: 'ATR Low + EMA50 Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3875(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 1.5 && ind.low <= ind.ema50 * 1.01 && ind.close > ind.ema50 && ind.ema20 > ind.ema50; return { id: 3875, name: 'ATR High + EMA50 Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    
    /** ATR ?�승 + EMA */
    static strategy3876(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const atrRising = atr > prevAtr; const match = atrRising && ind.ema20 > ind.ema50; return { id: 3876, name: 'ATR Rising + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy3877(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const atrRising = atr > prevAtr; const match = atrRising && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3877, name: 'ATR Rising + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3878(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const change = prevAtr > 0 ? (atr - prevAtr) / prevAtr * 100 : 0; const match = (change >= 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50) && ind.macd?.histogram > 10; return { id: 3878, name: 'ATR Spike 20% + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy3879(ind) { const atr = ind.atr || ind.atr14 || 0; const priceMove = Math.abs(ind.close - ind.open); const ratio = atr > 0 ? priceMove / atr : 0; const match = ratio >= 1.0 && ind.priceChange > 0 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3879, name: 'ATR Move 1x + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3880(ind) { const atr = ind.atr || ind.atr14 || 0; const priceMove = Math.abs(ind.close - ind.open); const ratio = atr > 0 ? priceMove / atr : 0; const match = ratio >= 1.5 && ind.priceChange > 0 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3880, name: 'ATR Move 1.5x + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    // --- ATR + 복합 (3881-3900) ---
    
    /** ATR + RSI + MACD */
    static strategy3881(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 3881, name: 'ATR Low + RSI35 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy3882(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 3882, name: 'ATR Low + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy3883(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 1.5 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 3883, name: 'ATR High + RSI35 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy3884(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 2.0 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 3884, name: 'ATR 2x + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    
    /** ATR + RSI + BB */
    static strategy3885(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7 && ind.rsi < 35 && ind.bollingerBands?.position < 25; return { id: 3885, name: 'ATR Low + RSI35 + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy3886(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7 && ind.rsi < 30 && ind.bollingerBands?.position < 20; return { id: 3886, name: 'ATR Low + RSI30 + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy3887(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 2.0 && ind.rsi < 30 && ind.bollingerBands?.position < 20; return { id: 3887, name: 'ATR 2x + RSI30 + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    
    /** ATR + EMA + 지??*/
    static strategy3888(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 40; return { id: 3888, name: 'ATR Low + EMA Stack + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy3889(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal; return { id: 3889, name: 'ATR Low + EMA Stack + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy3890(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 1.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 40; return { id: 3890, name: 'ATR High + EMA Stack + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy3891(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 1.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal; return { id: 3891, name: 'ATR High + EMA Stack + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    
    /** ATR Ultimate */
    static strategy3892(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25; return { id: 3892, name: 'ATR Low + RSI + MACD + BB', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy3893(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.7 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50; return { id: 3893, name: 'ATR Low + RSI + MACD + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy3894(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 1.5 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25; return { id: 3894, name: 'ATR High + RSI + MACD + BB', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy3895(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 1.5 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3895, name: 'ATR High + RSI + MACD + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy3896(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio < 0.5 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 3896, name: 'ATR Very Low + All Indicators', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy3897(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const match = ratio >= 2.0 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 3897, name: 'ATR 2x + All Indicators', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy3898(ind) { const atr = ind.atr || ind.atr14 || 0; const prevAtr = ind.prevAtr || ind.atr * 0.95 || 0; const change = prevAtr > 0 ? (atr - prevAtr) / prevAtr * 100 : 0; const match = change >= 30 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25; return { id: 3898, name: 'ATR Spike 30% + RSI + MACD + BB', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy3899(ind) { const atr = ind.atr || ind.atr14 || 0; const priceMove = Math.abs(ind.close - ind.open); const moveRatio = atr > 0 ? priceMove / atr : 0; const match = moveRatio >= 2.0 && ind.priceChange > 0 && ind.rsi < 40 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3899, name: 'ATR Move 2x + RSI + MACD + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy3900(ind) { const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const ratio = avgAtr > 0 ? atr / avgAtr : 1; const priceMove = Math.abs(ind.close - ind.open); const moveRatio = atr > 0 ? priceMove / atr : 0; const match = ratio >= 2.0 && moveRatio >= 1.5 && ind.priceChange > 0 && ind.rsi < 35 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3900, name: 'Ultimate ATR Volatility Signal', direction: 'UP', match: Boolean(match), confidence: match ? 98 : 0 }; }
    
    // ==================== BB 밴드??기반 (3901-4000) ====================
    // 볼린?�밴드 밴드??Bandwidth) 변?�성 ?�용
    
    // --- BB 밴드??기본 (3901-3920) ---
    
    /** BB 밴드???�벨 */
    static strategy3901(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1.5; return { id: 3901, name: 'BB Tight Squeeze <1.5%', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    static strategy3902(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2; return { id: 3902, name: 'BB Squeeze <2%', direction: 'UP', match: Boolean(match), confidence: match ? 62 : 0 }; }
    static strategy3903(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2.5; return { id: 3903, name: 'BB Narrow <2.5%', direction: 'UP', match: Boolean(match), confidence: match ? 60 : 0 }; }
    static strategy3904(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 3; return { id: 3904, name: 'BB Expanding >3%', direction: 'UP', match: Boolean(match), confidence: match ? 58 : 0 }; }
    static strategy3905(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 4; return { id: 3905, name: 'BB Wide >4%', direction: 'UP', match: Boolean(match), confidence: match ? 60 : 0 }; }
    static strategy3906(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 5; return { id: 3906, name: 'BB Very Wide >5%', direction: 'UP', match: Boolean(match), confidence: match ? 62 : 0 }; }
    static strategy3907(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 6; return { id: 3907, name: 'BB Extreme Wide >6%', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    
    /** BB 밴드??변??*/
    static strategy3908(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = bw > prevBw; return { id: 3908, name: 'BB Width Expanding', direction: 'UP', match: Boolean(match), confidence: match ? 60 : 0 }; }
    static strategy3909(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = bw < prevBw; return { id: 3909, name: 'BB Width Contracting', direction: 'UP', match: Boolean(match), confidence: match ? 58 : 0 }; }
    static strategy3910(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const change = prevBw > 0 ? (bw - prevBw) / prevBw * 100 : 0; const match = change >= 10 && ind.obv > (ind.prevObv || 0); return { id: 3910, name: 'BB Width +10%', direction: 'UP', match: Boolean(match), confidence: match ? 64 : 0 }; }
    static strategy3911(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const change = prevBw > 0 ? (bw - prevBw) / prevBw * 100 : 0; const match = change >= 20 && ind.volume > (ind.avgVolume || ind.volume) * 1.1500000000000001; return { id: 3911, name: 'BB Width +20%', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy3912(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const change = prevBw > 0 ? (bw - prevBw) / prevBw * 100 : 0; const match = change >= 30 && ind.volume > (ind.prevVolume || ind.volume) * 1.09; return { id: 3912, name: 'BB Width Spike +30%', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    
    /** BB ?�퀴즈 릴리??*/
    static strategy3913(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 2 && bw >= 2; return { id: 3913, name: 'BB Squeeze Release 2%', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy3914(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 2 && bw >= 2.5; return { id: 3914, name: 'BB Squeeze Release 2.5%', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3915(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 1.5 && bw >= 2; return { id: 3915, name: 'BB Tight Squeeze Release', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3916(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 1.5 && bw >= 2.5 && ind.priceChange > 0; return { id: 3916, name: 'BB Squeeze Breakout Up', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3917(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 2 && bw >= 3 && ind.priceChange > 0; return { id: 3917, name: 'BB Strong Breakout Up', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy3918(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 2 && bw >= 3 && ind.priceChange >= 1; return { id: 3918, name: 'BB Breakout +1% Price', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy3919(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 1.5 && bw >= 3 && ind.priceChange >= 2; return { id: 3919, name: 'BB Explosive Breakout +2%', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy3920(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const pos = ind.bollingerBands?.position || 50; const match = bw < 2 && pos < 25; return { id: 3920, name: 'BB Squeeze + Lower Band', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    
    // --- BB 밴드??+ RSI (3921-3935) ---
    
    /** BB ?�퀴즈 + RSI */
    static strategy3921(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2 && ind.rsi < 30; return { id: 3921, name: 'BB Squeeze + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3922(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2 && ind.rsi < 35; return { id: 3922, name: 'BB Squeeze + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy3923(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1.5 && ind.rsi < 30; return { id: 3923, name: 'BB Tight Squeeze + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy3924(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1.5 && ind.rsi < 25; return { id: 3924, name: 'BB Tight Squeeze + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    
    /** BB ?�장 + RSI */
    static strategy3925(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 3 && ind.rsi < 30; return { id: 3925, name: 'BB Expanding + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy3926(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 4 && ind.rsi < 30; return { id: 3926, name: 'BB Wide + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy3927(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 5 && ind.rsi < 25; return { id: 3927, name: 'BB Very Wide + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** BB ?�퀴즈 릴리??+ RSI */
    static strategy3928(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 2 && bw >= 2 && ind.rsi < 40; return { id: 3928, name: 'BB Release + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy3929(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 2 && bw >= 2 && ind.rsi < 35; return { id: 3929, name: 'BB Release + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy3930(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 1.5 && bw >= 2.5 && ind.rsi < 35; return { id: 3930, name: 'BB Strong Release + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy3931(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 1.5 && bw >= 2.5 && ind.rsi < 30 && ind.priceChange > 0; return { id: 3931, name: 'BB Release + RSI30 + Green', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy3932(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 2 && bw >= 3 && ind.rsi < 30 && ind.priceChange >= 1; return { id: 3932, name: 'BB Breakout + RSI30 + 1%', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    
    /** BB 밴드??변??+ RSI */
    static strategy3933(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const change = prevBw > 0 ? (bw - prevBw) / prevBw * 100 : 0; const match = change >= 20 && ind.rsi < 35; return { id: 3933, name: 'BB Width +20% + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3934(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const change = prevBw > 0 ? (bw - prevBw) / prevBw * 100 : 0; const match = change >= 30 && ind.rsi < 35; return { id: 3934, name: 'BB Width Spike + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy3935(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const change = prevBw > 0 ? (bw - prevBw) / prevBw * 100 : 0; const match = change >= 30 && ind.rsi < 30 && ind.priceChange > 0; return { id: 3935, name: 'BB Spike + RSI30 + Green', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    // --- BB 밴드??+ MACD (3936-3950) ---
    
    /** BB ?�퀴즈 + MACD */
    static strategy3936(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2 && ind.macd?.MACD > ind.macd?.signal; return { id: 3936, name: 'BB Squeeze + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3937(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1.5 && ind.macd?.MACD > ind.macd?.signal; return { id: 3937, name: 'BB Tight Squeeze + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3938(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3938, name: 'BB Squeeze + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy3939(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1.5 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3939, name: 'BB Tight Squeeze + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    /** BB ?�장 + MACD */
    static strategy3940(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 3 && ind.macd?.MACD > ind.macd?.signal; return { id: 3940, name: 'BB Expanding + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy3941(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 4 && ind.macd?.MACD > ind.macd?.signal; return { id: 3941, name: 'BB Wide + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3942(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 3 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3942, name: 'BB Expanding + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3943(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 4 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3943, name: 'BB Wide + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    
    /** BB ?�퀴즈 릴리??+ MACD */
    static strategy3944(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 2 && bw >= 2 && ind.macd?.MACD > ind.macd?.signal; return { id: 3944, name: 'BB Release + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy3945(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 2 && bw >= 2.5 && ind.macd?.MACD > ind.macd?.signal; return { id: 3945, name: 'BB Strong Release + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy3946(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 1.5 && bw >= 2.5 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3946, name: 'BB Release + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy3947(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 2 && bw >= 3 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.priceChange > 0; return { id: 3947, name: 'BB Breakout + MACD + Green', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    
    /** BB 밴드??변??+ MACD */
    static strategy3948(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const change = prevBw > 0 ? (bw - prevBw) / prevBw * 100 : 0; const match = change >= 20 && ind.macd?.MACD > ind.macd?.signal && ind.volume > (ind.prevVolume || ind.volume) * 1.21; return { id: 3948, name: 'BB Width +20% + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3949(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const change = prevBw > 0 ? (bw - prevBw) / prevBw * 100 : 0; const match = change >= 30 && ind.macd?.MACD > ind.macd?.signal && ind.volume > ind.avgVolume * 1.5; return { id: 3949, name: 'BB Spike + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy3950(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const change = prevBw > 0 ? (bw - prevBw) / prevBw * 100 : 0; const match = change >= 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.priceChange > 0; return { id: 3950, name: 'BB Spike + MACD Above0 + Green', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    
    // --- BB 밴드??+ EMA (3951-3965) ---
    
    /** BB ?�퀴즈 + EMA */
    static strategy3951(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2 && ind.ema20 > ind.ema50; return { id: 3951, name: 'BB Squeeze + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3952(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3952, name: 'BB Squeeze + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy3953(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3953, name: 'BB Tight Squeeze + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    
    /** BB ?�장 + EMA */
    static strategy3954(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 3 && ind.ema20 > ind.ema50; return { id: 3954, name: 'BB Expanding + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3955(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3955, name: 'BB Expanding + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3956(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 4 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3956, name: 'BB Wide + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    
    /** BB ?�퀴즈 릴리??+ EMA */
    static strategy3957(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 2 && bw >= 2 && ind.ema20 > ind.ema50; return { id: 3957, name: 'BB Release + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3958(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 2 && bw >= 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3958, name: 'BB Release + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3959(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 1.5 && bw >= 2.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3959, name: 'BB Strong Release + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy3960(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 2 && bw >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.priceChange > 0; return { id: 3960, name: 'BB Breakout + EMA Stack + Green', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** BB + EMA 지지 반등 */
    static strategy3961(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2 && ind.low <= ind.ema20 * 1.01 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3961, name: 'BB Squeeze + EMA20 Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy3962(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 3 && ind.low <= ind.ema20 * 1.01 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3962, name: 'BB Expanding + EMA20 Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3963(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2 && ind.low <= ind.ema50 * 1.01 && ind.close > ind.ema50 && ind.ema20 > ind.ema50; return { id: 3963, name: 'BB Squeeze + EMA50 Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy3964(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 2 && bw >= 2.5 && ind.low <= ind.ema20 * 1.01 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3964, name: 'BB Release + EMA20 Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy3965(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const change = prevBw > 0 ? (bw - prevBw) / prevBw * 100 : 0; const match = change >= 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.volume > ind.avgVolume * 1.5; return { id: 3965, name: 'BB Width +20% + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    
    // --- BB 밴드??+ 복합 (3966-4000) ---
    
    /** BB ?�퀴즈 + RSI + MACD */
    static strategy3966(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 3966, name: 'BB Squeeze + RSI35 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy3967(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 3967, name: 'BB Squeeze + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy3968(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1.5 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 3968, name: 'BB Tight + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy3969(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1.5 && ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3969, name: 'BB Tight + RSI30 + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    
    /** BB ?�장 + RSI + MACD */
    static strategy3970(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 3 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 3970, name: 'BB Expanding + RSI35 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy3971(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 4 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 3971, name: 'BB Wide + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy3972(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 4 && ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3972, name: 'BB Wide + RSI30 + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    
    /** BB ?�퀴즈 릴리??+ RSI + MACD */
    static strategy3973(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 2 && bw >= 2.5 && ind.rsi < 40 && ind.macd?.MACD > ind.macd?.signal; return { id: 3973, name: 'BB Release + RSI40 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy3974(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 2 && bw >= 2.5 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 3974, name: 'BB Release + RSI35 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy3975(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 1.5 && bw >= 2.5 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 3975, name: 'BB Strong Release + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy3976(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 1.5 && bw >= 3 && ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.priceChange > 0; return { id: 3976, name: 'BB Breakout + RSI30 + MACD + Green', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    
    /** BB + EMA + RSI */
    static strategy3977(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 40; return { id: 3977, name: 'BB Squeeze + EMA + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy3978(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 35; return { id: 3978, name: 'BB Squeeze + EMA + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy3979(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 40; return { id: 3979, name: 'BB Expanding + EMA + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy3980(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi < 35; return { id: 3980, name: 'BB Expanding + EMA + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** BB + EMA + MACD */
    static strategy3981(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal; return { id: 3981, name: 'BB Squeeze + EMA + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy3982(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal; return { id: 3982, name: 'BB Tight + EMA + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy3983(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal; return { id: 3983, name: 'BB Expanding + EMA + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy3984(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3984, name: 'BB Expanding + EMA + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    
    /** BB + 모든 지??*/
    static strategy3985(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50; return { id: 3985, name: 'BB Squeeze + RSI + MACD + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy3986(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1.5 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3986, name: 'BB Tight + RSI30 + MACD + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy3987(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 3 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50; return { id: 3987, name: 'BB Expanding + RSI + MACD + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy3988(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw >= 3 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3988, name: 'BB Wide + RSI30 + MACD + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    
    /** BB ?�퀴즈 릴리??+ 모든 지??*/
    static strategy3989(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 2 && bw >= 2.5 && ind.rsi < 40 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50; return { id: 3989, name: 'BB Release + All Indicators', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy3990(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 2 && bw >= 2.5 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3990, name: 'BB Release + All + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy3991(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 1.5 && bw >= 2.5 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3991, name: 'BB Strong Release + All', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy3992(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 1.5 && bw >= 3 && ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.priceChange > 0; return { id: 3992, name: 'BB Breakout + All + Green', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    
    /** BB Ultimate */
    static strategy3993(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const pos = ind.bollingerBands?.position || 50; const match = bw < 2 && pos < 25 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 3993, name: 'BB Squeeze Lower + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy3994(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const pos = ind.bollingerBands?.position || 50; const match = bw < 1.5 && pos < 20 && ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal; return { id: 3994, name: 'BB Tight Lower + RSI25 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy3995(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const pos = ind.bollingerBands?.position || 50; const match = prevBw < 2 && bw >= 3 && pos < 30 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50; return { id: 3995, name: 'BB Breakout Lower + All', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy3996(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const change = prevBw > 0 ? (bw - prevBw) / prevBw * 100 : 0; const match = change >= 30 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3996, name: 'BB Spike + RSI30 + MACD + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy3997(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const pos = ind.bollingerBands?.position || 50; const match = prevBw < 1.5 && bw >= 3 && pos < 25 && ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 3997, name: 'BB Ultimate Breakout Lower', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    static strategy3998(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const match = prevBw < 1.5 && bw >= 3 && ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.priceChange >= 1; return { id: 3998, name: 'BB Explosive + RSI25 + All + 1%', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    static strategy3999(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const pos = ind.bollingerBands?.position || 50; const match = prevBw < 1.5 && bw >= 3 && pos < 20 && ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.priceChange >= 2; return { id: 3999, name: 'BB Super Explosive + All + 2%', direction: 'UP', match: Boolean(match), confidence: match ? 98 : 0 }; }
    static strategy4000(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.95; const change = prevBw > 0 ? (bw - prevBw) / prevBw * 100 : 0; const pos = ind.bollingerBands?.position || 50; const atr = ind.atr || ind.atr14 || 0; const avgAtr = ind.avgAtr || ind.atr20 || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = prevBw < 1.5 && bw >= 3 && change >= 50 && pos < 20 && atrRatio >= 1.5 && ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.sma200 && ind.priceChange >= 2; return { id: 4000, name: 'Ultimate Volatility Breakout Signal', direction: 'UP', match: Boolean(match), confidence: match ? 99 : 0 }; }

    /** 모든 ?�략 ?�행 (3801-4000) */
    static analyzeAll(indicators) {
        return [
            this.strategy3801(indicators), this.strategy3802(indicators), this.strategy3803(indicators),
            this.strategy3804(indicators), this.strategy3805(indicators), this.strategy3806(indicators),
            this.strategy3807(indicators), this.strategy3808(indicators), this.strategy3809(indicators),
            this.strategy3810(indicators), this.strategy3811(indicators), this.strategy3812(indicators),
            this.strategy3813(indicators), this.strategy3814(indicators), this.strategy3815(indicators),
            this.strategy3816(indicators), this.strategy3817(indicators), this.strategy3818(indicators),
            this.strategy3819(indicators), this.strategy3820(indicators), this.strategy3821(indicators),
            this.strategy3822(indicators), this.strategy3823(indicators), this.strategy3824(indicators),
            this.strategy3825(indicators), this.strategy3826(indicators), this.strategy3827(indicators),
            this.strategy3828(indicators), this.strategy3829(indicators), this.strategy3830(indicators),
            this.strategy3831(indicators), this.strategy3832(indicators), this.strategy3833(indicators),
            this.strategy3834(indicators), this.strategy3835(indicators), this.strategy3836(indicators),
            this.strategy3837(indicators), this.strategy3838(indicators), this.strategy3839(indicators),
            this.strategy3840(indicators), this.strategy3841(indicators), this.strategy3842(indicators),
            this.strategy3843(indicators), this.strategy3844(indicators), this.strategy3845(indicators),
            this.strategy3846(indicators), this.strategy3847(indicators), this.strategy3848(indicators),
            this.strategy3849(indicators), this.strategy3850(indicators), this.strategy3851(indicators),
            this.strategy3852(indicators), this.strategy3853(indicators), this.strategy3854(indicators),
            this.strategy3855(indicators), this.strategy3856(indicators), this.strategy3857(indicators),
            this.strategy3858(indicators), this.strategy3859(indicators), this.strategy3860(indicators),
            this.strategy3861(indicators), this.strategy3862(indicators), this.strategy3863(indicators),
            this.strategy3864(indicators), this.strategy3865(indicators), this.strategy3866(indicators),
            this.strategy3867(indicators), this.strategy3868(indicators), this.strategy3869(indicators),
            this.strategy3870(indicators), this.strategy3871(indicators), this.strategy3872(indicators),
            this.strategy3873(indicators), this.strategy3874(indicators), this.strategy3875(indicators),
            this.strategy3876(indicators), this.strategy3877(indicators), this.strategy3878(indicators),
            this.strategy3879(indicators), this.strategy3880(indicators), this.strategy3881(indicators),
            this.strategy3882(indicators), this.strategy3883(indicators), this.strategy3884(indicators),
            this.strategy3885(indicators), this.strategy3886(indicators), this.strategy3887(indicators),
            this.strategy3888(indicators), this.strategy3889(indicators), this.strategy3890(indicators),
            this.strategy3891(indicators), this.strategy3892(indicators), this.strategy3893(indicators),
            this.strategy3894(indicators), this.strategy3895(indicators), this.strategy3896(indicators),
            this.strategy3897(indicators), this.strategy3898(indicators), this.strategy3899(indicators),
            this.strategy3900(indicators), this.strategy3901(indicators), this.strategy3902(indicators),
            this.strategy3903(indicators), this.strategy3904(indicators), this.strategy3905(indicators),
            this.strategy3906(indicators), this.strategy3907(indicators), this.strategy3908(indicators),
            this.strategy3909(indicators), this.strategy3910(indicators), this.strategy3911(indicators),
            this.strategy3912(indicators), this.strategy3913(indicators), this.strategy3914(indicators),
            this.strategy3915(indicators), this.strategy3916(indicators), this.strategy3917(indicators),
            this.strategy3918(indicators), this.strategy3919(indicators), this.strategy3920(indicators),
            this.strategy3921(indicators), this.strategy3922(indicators), this.strategy3923(indicators),
            this.strategy3924(indicators), this.strategy3925(indicators), this.strategy3926(indicators),
            this.strategy3927(indicators), this.strategy3928(indicators), this.strategy3929(indicators),
            this.strategy3930(indicators), this.strategy3931(indicators), this.strategy3932(indicators),
            this.strategy3933(indicators), this.strategy3934(indicators), this.strategy3935(indicators),
            this.strategy3936(indicators), this.strategy3937(indicators), this.strategy3938(indicators),
            this.strategy3939(indicators), this.strategy3940(indicators), this.strategy3941(indicators),
            this.strategy3942(indicators), this.strategy3943(indicators), this.strategy3944(indicators),
            this.strategy3945(indicators), this.strategy3946(indicators), this.strategy3947(indicators),
            this.strategy3948(indicators), this.strategy3949(indicators), this.strategy3950(indicators),
            this.strategy3951(indicators), this.strategy3952(indicators), this.strategy3953(indicators),
            this.strategy3954(indicators), this.strategy3955(indicators), this.strategy3956(indicators),
            this.strategy3957(indicators), this.strategy3958(indicators), this.strategy3959(indicators),
            this.strategy3960(indicators), this.strategy3961(indicators), this.strategy3962(indicators),
            this.strategy3963(indicators), this.strategy3964(indicators), this.strategy3965(indicators),
            this.strategy3966(indicators), this.strategy3967(indicators), this.strategy3968(indicators),
            this.strategy3969(indicators), this.strategy3970(indicators), this.strategy3971(indicators),
            this.strategy3972(indicators), this.strategy3973(indicators), this.strategy3974(indicators),
            this.strategy3975(indicators), this.strategy3976(indicators), this.strategy3977(indicators),
            this.strategy3978(indicators), this.strategy3979(indicators), this.strategy3980(indicators),
            this.strategy3981(indicators), this.strategy3982(indicators), this.strategy3983(indicators),
            this.strategy3984(indicators), this.strategy3985(indicators), this.strategy3986(indicators),
            this.strategy3987(indicators), this.strategy3988(indicators), this.strategy3989(indicators),
            this.strategy3990(indicators), this.strategy3991(indicators), this.strategy3992(indicators),
            this.strategy3993(indicators), this.strategy3994(indicators), this.strategy3995(indicators),
            this.strategy3996(indicators), this.strategy3997(indicators), this.strategy3998(indicators),
            this.strategy3999(indicators), this.strategy4000(indicators)
        ];
    }
}

