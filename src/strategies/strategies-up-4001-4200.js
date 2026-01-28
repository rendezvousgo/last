/**
 * UP ?�략 ?�장 (ID: 4001-4200)
 * 
 * STRATEGY_IDEAS.txt 기반 체계??구성:
 * - 4001-4100: ?�퀴즈/?�장 (100�?
 * - 4101-4200: 복합 ?�수 ?�스??(100�?
 */

export class StrategiesUp4001 {
    
    // ==================== ?�퀴즈/?�장 (4001-4100) ====================
    // 변?�성 ?�퀴즈 ???�장 ?�파 ?�략
    
    // --- ?�퀴즈 감�? (4001-4020) ---
    
    /** BB + ATR ?�퀴즈 */
    static strategy4001(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 2 && atrRatio < 0.7; return { id: 4001, name: 'Double Squeeze BB+ATR', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy4002(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 1.5 && atrRatio < 0.6; return { id: 4002, name: 'Tight Double Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4003(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 1.5 && atrRatio < 0.5; return { id: 4003, name: 'Extreme Double Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    /** ?�퀴즈 + BB ?�치 */
    static strategy4004(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const pos = ind.bollingerBands?.position || 50; const match = bw < 2 && pos < 30; return { id: 4004, name: 'Squeeze + Lower Zone', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy4005(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const pos = ind.bollingerBands?.position || 50; const match = bw < 1.5 && pos < 25; return { id: 4005, name: 'Tight Squeeze + Lower25', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4006(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const pos = ind.bollingerBands?.position || 50; const match = bw < 1.5 && pos < 20; return { id: 4006, name: 'Tight Squeeze + Lower20', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4007(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const pos = ind.bollingerBands?.position || 50; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 1.5 && atrRatio < 0.6 && pos < 25; return { id: 4007, name: 'Double Squeeze + Lower25', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    
    /** ?�퀴즈 + 중앙??기�? */
    static strategy4008(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const mid = ind.bollingerBands?.middle || ind.sma20 || 0; const match = bw < 2 && ind.close < mid; return { id: 4008, name: 'Squeeze Below Middle', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy4009(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const mid = ind.bollingerBands?.middle || ind.sma20 || 0; const match = bw < 1.5 && ind.close < mid; return { id: 4009, name: 'Tight Squeeze Below Mid', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy4010(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const mid = ind.bollingerBands?.middle || ind.sma20 || 0; const match = bw < 2 && ind.close > mid; return { id: 4010, name: 'Squeeze Above Middle', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    
    /** ?�속 ?�퀴즈 */
    static strategy4011(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw; const match = bw < 2 && prevBw < 2; return { id: 4011, name: 'Consecutive Squeeze 2 Bars', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy4012(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw; const match = bw < 1.5 && prevBw < 1.5; return { id: 4012, name: 'Consecutive Tight Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy4013(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw; const match = bw < prevBw && prevBw < 2; return { id: 4013, name: 'Tightening Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy4014(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw; const match = bw < prevBw && bw < 1.5; return { id: 4014, name: 'Tightening to Extreme', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    /** ?�퀴즈 강도 */
    static strategy4015(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1.2; return { id: 4015, name: 'Ultra Tight Squeeze <1.2%', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4016(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1.0; return { id: 4016, name: 'Extreme Squeeze <1%', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4017(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 0.8; return { id: 4017, name: 'Super Extreme Squeeze <0.8%', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4018(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 1 && atrRatio < 0.5; return { id: 4018, name: 'Ultra Squeeze BB+ATR', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4019(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 0.8 && atrRatio < 0.4; return { id: 4019, name: 'Maximum Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4020(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const pos = ind.bollingerBands?.position || 50; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 1 && atrRatio < 0.5 && pos < 30; return { id: 4020, name: 'Ultimate Squeeze Lower', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    
    // --- ?�퀴즈 릴리???�장 (4021-4040) ---
    
    /** ?�퀴즈 릴리??기본 */
    static strategy4021(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 2 && bw >= 2 && ind.priceChange > 0; return { id: 4021, name: 'Squeeze Release Up', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy4022(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 1.5 && bw >= 2 && ind.priceChange > 0; return { id: 4022, name: 'Tight Squeeze Release Up', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4023(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = (prevBw < 1.5 && bw >= 2.5 && ind.priceChange > 0) && ind.macd?.histogram > -5 && ind.volume > (ind.avgVolume || ind.volume) * 1.25; return { id: 4023, name: 'Strong Squeeze Release Up', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4024(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 1.5 && bw >= 3 && ind.priceChange > 0; return { id: 4024, name: 'Explosive Squeeze Release', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4025(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 1 && bw >= 2.5 && ind.priceChange > 0; return { id: 4025, name: 'Ultra Squeeze Explosion', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    
    /** ?�퀴즈 릴리??+ 가�??�동 */
    static strategy4026(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 2 && bw >= 2 && ind.priceChange >= 0.5; return { id: 4026, name: 'Squeeze Release +0.5%', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4027(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 2 && bw >= 2.5 && ind.priceChange >= 1; return { id: 4027, name: 'Squeeze Release +1%', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4028(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 1.5 && bw >= 3 && ind.priceChange >= 1.5; return { id: 4028, name: 'Strong Release +1.5%', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4029(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = (prevBw < 1.5 && bw >= 3 && ind.priceChange >= 2) && ind.ema10 > ind.ema20 && ind.volume > ind.avgVolume * 1.5; return { id: 4029, name: 'Explosive Release +2%', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4030(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 1 && bw >= 3.5 && ind.priceChange >= 2.5; return { id: 4030, name: 'Ultra Explosive +2.5%', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    
    /** ATR ?�장 */
    static strategy4031(ind) { const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const prevAtr = ind.prevAtr || atr * 0.9; const match = prevAtr < avgAtr * 0.7 && atr >= avgAtr && ind.priceChange > 0; return { id: 4031, name: 'ATR Expansion Up', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy4032(ind) { const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const prevAtr = ind.prevAtr || atr * 0.9; const match = prevAtr < avgAtr * 0.6 && atr >= avgAtr * 1.2 && ind.priceChange > 0; return { id: 4032, name: 'Strong ATR Expansion Up', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4033(ind) { const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const prevAtr = ind.prevAtr || atr * 0.9; const match = prevAtr < avgAtr * 0.5 && atr >= avgAtr * 1.5 && ind.priceChange > 0; return { id: 4033, name: 'Explosive ATR Expansion', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    /** ?�블 ?�장 (BB + ATR) */
    static strategy4034(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const prevAtr = ind.prevAtr || atr * 0.9; const bwExpand = prevBw < 2 && bw >= 2.5; const atrExpand = prevAtr < avgAtr * 0.7 && atr >= avgAtr; const match = (bwExpand && atrExpand && ind.priceChange > 0) && ind.atr > 100; return { id: 4034, name: 'Double Expansion Up', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4035(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const prevAtr = ind.prevAtr || atr * 0.9; const bwExpand = prevBw < 1.5 && bw >= 3; const atrExpand = prevAtr < avgAtr * 0.6 && atr >= avgAtr * 1.3; const match = bwExpand && atrExpand && ind.priceChange > 0 && ind.volume > (ind.avgVolume || ind.volume) * 1.1; return { id: 4035, name: 'Strong Double Expansion', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4036(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const prevAtr = ind.prevAtr || atr * 0.9; const bwExpand = prevBw < 1 && bw >= 3; const atrExpand = prevAtr < avgAtr * 0.5 && atr >= avgAtr * 1.5; const match = bwExpand && atrExpand && ind.priceChange >= 1; return { id: 4036, name: 'Explosive Double Expansion', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    
    /** 밴드??변?�율 */
    static strategy4037(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const change = prevBw > 0 ? (bw - prevBw) / prevBw * 100 : 0; const match = change >= 30 && ind.priceChange > 0; return { id: 4037, name: 'BW Expansion 30%+ Up', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy4038(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const change = prevBw > 0 ? (bw - prevBw) / prevBw * 100 : 0; const match = change >= 50 && ind.priceChange > 0; return { id: 4038, name: 'BW Expansion 50%+ Up', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4039(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const change = prevBw > 0 ? (bw - prevBw) / prevBw * 100 : 0; const match = change >= 70 && ind.priceChange > 0; return { id: 4039, name: 'BW Expansion 70%+ Up', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4040(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const change = prevBw > 0 ? (bw - prevBw) / prevBw * 100 : 0; const match = change >= 100 && ind.priceChange >= 1; return { id: 4040, name: 'BW Explosion 100%+ Up', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    
    // --- ?�퀴즈 + RSI (4041-4055) ---
    
    /** ?�퀴즈 + RSI 과매??*/
    static strategy4041(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = (bw < 2 && ind.rsi < 35) && ind.ema50 > ind.ema100 && ind.volume > ind.avgVolume * 1.1; return { id: 4041, name: 'Squeeze + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4042(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = (bw < 2 && ind.rsi < 30) && ind.ema20 > ind.ema50 && ind.obv > (ind.prevObv || 0); return { id: 4042, name: 'Squeeze + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4043(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = (bw < 1.5 && ind.rsi < 30) && ind.ema10 < ind.ema20 && ind.volume > (ind.avgVolume || ind.volume) * 1.25; return { id: 4043, name: 'Tight Squeeze + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4044(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = (bw < 1.5 && ind.rsi < 25) && ind.sma20 > ind.sma50 && ind.volume > (ind.prevVolume || ind.volume) * 1.1300000000000001; return { id: 4044, name: 'Tight Squeeze + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4045(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1 && ind.rsi < 25; return { id: 4045, name: 'Extreme Squeeze + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    
    /** ?�퀴즈 릴리??+ RSI */
    static strategy4046(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 2 && bw >= 2 && ind.rsi < 40 && ind.priceChange > 0; return { id: 4046, name: 'Release + RSI40 Up', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy4047(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 2 && bw >= 2.5 && ind.rsi < 35 && ind.priceChange > 0; return { id: 4047, name: 'Strong Release + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4048(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = (prevBw < 1.5 && bw >= 2.5 && ind.rsi < 30 && ind.priceChange > 0) && ind.sma20 < ind.sma50 && ind.volume > (ind.prevVolume || ind.volume) * 1.21; return { id: 4048, name: 'Tight Release + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4049(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 1.5 && bw >= 3 && ind.rsi < 30 && ind.priceChange >= 1; return { id: 4049, name: 'Explosive Release + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4050(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 1 && bw >= 3 && ind.rsi < 25 && ind.priceChange >= 1.5; return { id: 4050, name: 'Ultra Release + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    
    /** ?�블 ?�퀴즈 + RSI */
    static strategy4051(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 2 && atrRatio < 0.7 && ind.rsi < 35; return { id: 4051, name: 'Double Squeeze + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4052(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 1.5 && atrRatio < 0.6 && ind.rsi < 30; return { id: 4052, name: 'Tight Double + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4053(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 1 && atrRatio < 0.5 && ind.rsi < 30; return { id: 4053, name: 'Extreme Double + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4054(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 1 && atrRatio < 0.5 && ind.rsi < 25; return { id: 4054, name: 'Extreme Double + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4055(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const pos = ind.bollingerBands?.position || 50; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 1 && atrRatio < 0.5 && pos < 20 && ind.rsi < 25; return { id: 4055, name: 'Ultimate Squeeze + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    
    // --- ?�퀴즈 + MACD (4056-4070) ---
    
    /** ?�퀴즈 + MACD */
    static strategy4056(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = (bw < 2 && ind.macd?.MACD > ind.macd?.signal) && ind.bollingerBands?.position < 50 && ind.volume > (ind.prevVolume || ind.volume) * 1.17; return { id: 4056, name: 'Squeeze + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy4057(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = (bw < 1.5 && ind.macd?.MACD > ind.macd?.signal) && ind.bollingerBands?.position > 50 && ind.volume > ind.avgVolume * 1.1; return { id: 4057, name: 'Tight Squeeze + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4058(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = (bw < 2 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal) && ind.bollingerBands?.position < 30 && ind.obv > (ind.prevObv || 0); return { id: 4058, name: 'Squeeze + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy4059(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = (bw < 1.5 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal) && ind.bollingerBands?.position > 70 && ind.volume > (ind.avgVolume || ind.volume) * 1.3; return { id: 4059, name: 'Tight + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4060(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 4060, name: 'Extreme + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** ?�퀴즈 릴리??+ MACD */
    static strategy4061(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 2 && bw >= 2 && ind.macd?.MACD > ind.macd?.signal && ind.priceChange > 0; return { id: 4061, name: 'Release + MACD Up', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4062(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 1.5 && bw >= 2.5 && ind.macd?.MACD > ind.macd?.signal && ind.priceChange > 0; return { id: 4062, name: 'Strong Release + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4063(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 1.5 && bw >= 2.5 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.priceChange > 0; return { id: 4063, name: 'Release + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4064(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 1 && bw >= 3 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.priceChange >= 1; return { id: 4064, name: 'Explosive + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4065(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const hist = ind.macd?.histogram || 0; const prevHist = ind.macd?.prevHistogram || hist; const match = prevBw < 1.5 && bw >= 2.5 && hist > prevHist && ind.macd?.MACD > ind.macd?.signal && ind.priceChange > 0; return { id: 4065, name: 'Release + MACD Rising', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    
    /** ?�블 ?�퀴즈 + MACD */
    static strategy4066(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 2 && atrRatio < 0.7 && ind.macd?.MACD > ind.macd?.signal; return { id: 4066, name: 'Double Squeeze + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4067(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 1.5 && atrRatio < 0.6 && ind.macd?.MACD > ind.macd?.signal; return { id: 4067, name: 'Tight Double + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4068(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 1.5 && atrRatio < 0.6 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 4068, name: 'Tight Double + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4069(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 1 && atrRatio < 0.5 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 4069, name: 'Extreme Double + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4070(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const pos = ind.bollingerBands?.position || 50; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 1 && atrRatio < 0.5 && pos < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 4070, name: 'Ultimate Squeeze + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    
    // --- ?�퀴즈 + EMA (4071-4085) ---
    
    /** ?�퀴즈 + EMA ?�배??*/
    static strategy4071(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = (bw < 2 && ind.ema20 > ind.ema50) && ind.bollingerBands?.bandwidth > 5 && ind.volume > (ind.avgVolume || ind.volume) * 1.1500000000000001; return { id: 4071, name: 'Squeeze + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy4072(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = (bw < 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50) && ind.bollingerBands?.bandwidth < 10 && ind.volume > (ind.prevVolume || ind.volume) * 1.09; return { id: 4072, name: 'Squeeze + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy4073(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = (bw < 1.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50) && ind.volumeRatio > 1.0 && ind.volume > ind.avgVolume * 1.1; return { id: 4073, name: 'Tight Squeeze + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4074(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4074, name: 'Extreme + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    
    /** ?�퀴즈 릴리??+ EMA */
    static strategy4075(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 2 && bw >= 2 && ind.ema20 > ind.ema50 && ind.priceChange > 0; return { id: 4075, name: 'Release + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4076(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 2 && bw >= 2.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.priceChange > 0; return { id: 4076, name: 'Strong Release + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4077(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 1.5 && bw >= 2.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.priceChange > 0; return { id: 4077, name: 'Tight Release + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4078(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = prevBw < 1 && bw >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.priceChange >= 1; return { id: 4078, name: 'Explosive Release + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    
    /** ?�퀴즈 + EMA 지지 반등 */
    static strategy4079(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2 && ind.low <= ind.ema20 * 1.01 && ind.close > ind.ema20; return { id: 4079, name: 'Squeeze + EMA20 Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy4080(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1.5 && ind.low <= ind.ema20 * 1.01 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4080, name: 'Tight + EMA20 Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4081(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = (bw < 2 && ind.low <= ind.ema50 * 1.01 && ind.close > ind.ema50 && ind.ema20 > ind.ema50) && ind.volumeRatio > 1.2 && ind.volume > ind.avgVolume * 1.1; return { id: 4081, name: 'Squeeze + EMA50 Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4082(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1.5 && ind.low <= ind.ema50 * 1.01 && ind.close > ind.ema50 && ind.ema20 > ind.ema50; return { id: 4082, name: 'Tight + EMA50 Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    /** ?�블 ?�퀴즈 + EMA */
    static strategy4083(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 2 && atrRatio < 0.7 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4083, name: 'Double Squeeze + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4084(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 1.5 && atrRatio < 0.6 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4084, name: 'Tight Double + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4085(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 1 && atrRatio < 0.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.close > ind.sma200; return { id: 4085, name: 'Extreme Double + Full EMA', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    
    // --- ?�퀴즈 + 복합 (4086-4100) ---
    
    /** ?�퀴즈 + RSI + MACD */
    static strategy4086(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = (bw < 2 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal) && ind.volumeRatio > 1.5 && ind.obv > (ind.prevObv || 0); return { id: 4086, name: 'Squeeze + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4087(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = (bw < 1.5 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal) && ind.volumeRatio < 1.0 && ind.volume > (ind.avgVolume || ind.volume) * 1.2000000000000002; return { id: 4087, name: 'Tight + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4088(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1 && ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 4088, name: 'Extreme + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    
    /** ?�퀴즈 + RSI + EMA */
    static strategy4089(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2 && ind.rsi < 35 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4089, name: 'Squeeze + RSI + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4090(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1.5 && ind.rsi < 30 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4090, name: 'Tight + RSI30 + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4091(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1 && ind.rsi < 30 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4091, name: 'Extreme + RSI30 + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    
    /** ?�퀴즈 + MACD + EMA */
    static strategy4092(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4092, name: 'Squeeze + MACD + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4093(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1.5 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4093, name: 'Tight + MACD + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    
    /** ?�퀴즈 Ultimate */
    static strategy4094(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 2 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4094, name: 'Squeeze + All Indicators', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4095(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = (bw < 1.5 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50) && ind.volumeRatio > 0.8 && ind.volume > (ind.avgVolume || ind.volume) * 1.1; return { id: 4095, name: 'Tight + All Indicators', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4096(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const match = bw < 1 && ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4096, name: 'Extreme + All Above0', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy4097(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const pos = ind.bollingerBands?.position || 50; const match = bw < 1 && pos < 25 && ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4097, name: 'Extreme Lower + All', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    static strategy4098(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 1 && atrRatio < 0.5 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4098, name: 'Double Extreme + All', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    static strategy4099(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const pos = ind.bollingerBands?.position || 50; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = bw < 1 && atrRatio < 0.5 && pos < 20 && ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4099, name: 'Maximum Squeeze + All', direction: 'UP', match: Boolean(match), confidence: match ? 98 : 0 }; }
    static strategy4100(ind) { const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const pos = ind.bollingerBands?.position || 50; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = prevBw < 1 && bw >= 2 && atrRatio >= 1 && pos < 30 && ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.priceChange >= 1; return { id: 4100, name: 'Ultimate Squeeze Breakout', direction: 'UP', match: Boolean(match), confidence: match ? 99 : 0 }; }
    
    // ==================== 복합 ?�수 ?�스??(4101-4200) ====================
    // ?�중 지??가중치 기반 ?�수 ?�출
    
    // --- RSI ?�수 기반 (4101-4120) ---
    
    /** RSI ?�수 계산 */
    static getRsiScore(rsi) {
        if (rsi <= 20) return 30;
        if (rsi <= 25) return 27;
        if (rsi <= 30) return 24;
        if (rsi <= 35) return 21;
        if (rsi <= 40) return 18;
        if (rsi <= 45) return 15;
        if (rsi <= 50) return 12;
        if (rsi <= 55) return 9;
        if (rsi <= 60) return 6;
        if (rsi <= 65) return 3;
        return 0;
    }
    
    static strategy4101(ind) { const score = this.getRsiScore(ind.rsi); const match = (score >= 30) && ind.atr < 500; return { id: 4101, name: 'RSI Score 30', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4102(ind) { const score = this.getRsiScore(ind.rsi); const match = score >= 27; return { id: 4102, name: 'RSI Score 27+', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4103(ind) { const score = this.getRsiScore(ind.rsi); const match = score >= 24; return { id: 4103, name: 'RSI Score 24+', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy4104(ind) { const score = this.getRsiScore(ind.rsi); const match = score >= 21; return { id: 4104, name: 'RSI Score 21+', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy4105(ind) { const score = this.getRsiScore(ind.rsi); const match = score >= 18; return { id: 4105, name: 'RSI Score 18+', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy4106(ind) { const score = this.getRsiScore(ind.rsi); const match = (score >= 15) && ind.atr > 200; return { id: 4106, name: 'RSI Score 15+', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy4107(ind) { const score = this.getRsiScore(ind.rsi); const match = (score >= 12) && ind.stochastic?.k < ind.stochastic?.d; return { id: 4107, name: 'RSI Score 12+', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    
    /** RSI ?�수 + 추�? 조건 */
    static strategy4108(ind) { const score = this.getRsiScore(ind.rsi); const match = score >= 24 && ind.priceChange > 0; return { id: 4108, name: 'RSI Score 24 + Green', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4109(ind) { const score = this.getRsiScore(ind.rsi); const match = score >= 24 && ind.close > ind.ema20; return { id: 4109, name: 'RSI Score 24 + EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4110(ind) { const score = this.getRsiScore(ind.rsi); const match = score >= 24 && ind.macd?.MACD > ind.macd?.signal; return { id: 4110, name: 'RSI Score 24 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4111(ind) { const score = this.getRsiScore(ind.rsi); const match = score >= 21 && ind.priceChange > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 4111, name: 'RSI Score 21 + Green + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4112(ind) { const score = this.getRsiScore(ind.rsi); const match = score >= 24 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4112, name: 'RSI Score 24 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4113(ind) { const score = this.getRsiScore(ind.rsi); const match = score >= 27 && ind.priceChange > 0 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4113, name: 'RSI Score 27 + Green + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4114(ind) { const score = this.getRsiScore(ind.rsi); const match = score >= 27 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4114, name: 'RSI Score 27 + MACD + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4115(ind) { const score = this.getRsiScore(ind.rsi); const match = score >= 30 && ind.priceChange > 0 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4115, name: 'RSI Score 30 + All', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4116(ind) { const score = this.getRsiScore(ind.rsi); const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 24 && bw < 2; return { id: 4116, name: 'RSI Score 24 + Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4117(ind) { const score = this.getRsiScore(ind.rsi); const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 27 && bw < 1.5; return { id: 4117, name: 'RSI Score 27 + Tight', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4118(ind) { const score = this.getRsiScore(ind.rsi); const pos = ind.bollingerBands?.position || 50; const match = score >= 24 && pos < 25; return { id: 4118, name: 'RSI Score 24 + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4119(ind) { const score = this.getRsiScore(ind.rsi); const pos = ind.bollingerBands?.position || 50; const match = score >= 27 && pos < 20; return { id: 4119, name: 'RSI Score 27 + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4120(ind) { const score = this.getRsiScore(ind.rsi); const pos = ind.bollingerBands?.position || 50; const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 30 && pos < 20 && bw < 1.5; return { id: 4120, name: 'RSI Score 30 + BB20 + Tight', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    
    // --- MACD ?�수 기반 (4121-4140) ---
    
    /** MACD ?�수 계산 */
    static getMacdScore(macd) {
        if (!macd) return 0;
        let score = 0;
        if (macd.MACD > macd.signal) score += 10;
        if (macd.MACD > 0) score += 10;
        if (macd.histogram > 0) score += 5;
        const prevHist = macd.prevHistogram || macd.histogram;
        if (macd.histogram > prevHist) score += 5;
        return score;
    }
    
    static strategy4121(ind) { const score = this.getMacdScore(ind.macd); const match = score >= 30 && ind.volume > ind.avgVolume * 1.1; return { id: 4121, name: 'MACD Score 30', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4122(ind) { const score = this.getMacdScore(ind.macd); const match = score >= 25; return { id: 4122, name: 'MACD Score 25+', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4123(ind) { const score = this.getMacdScore(ind.macd); const match = (score >= 20) && ind.stochastic?.k > 30; return { id: 4123, name: 'MACD Score 20+', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy4124(ind) { const score = this.getMacdScore(ind.macd); const match = (score >= 15) && ind.stochastic?.k > ind.stochastic?.d && ind.volume > (ind.prevVolume || ind.volume) * 1.1300000000000001; return { id: 4124, name: 'MACD Score 15+', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy4125(ind) { const score = this.getMacdScore(ind.macd); const match = (score >= 10) && ind.adx?.plusDI > ind.adx?.minusDI; return { id: 4125, name: 'MACD Score 10+', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    
    /** MACD ?�수 + 추�? 조건 */
    static strategy4126(ind) { const score = this.getMacdScore(ind.macd); const match = score >= 20 && ind.rsi < 40; return { id: 4126, name: 'MACD Score 20 + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4127(ind) { const score = this.getMacdScore(ind.macd); const match = (score >= 20 && ind.rsi < 35) && ind.priceChange > -1; return { id: 4127, name: 'MACD Score 20 + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4128(ind) { const score = this.getMacdScore(ind.macd); const match = score >= 25 && ind.rsi < 35; return { id: 4128, name: 'MACD Score 25 + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4129(ind) { const score = this.getMacdScore(ind.macd); const match = score >= 30 && ind.rsi < 30; return { id: 4129, name: 'MACD Score 30 + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4130(ind) { const score = this.getMacdScore(ind.macd); const match = (score >= 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50) && ind.priceChange < 3; return { id: 4130, name: 'MACD Score 20 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4131(ind) { const score = this.getMacdScore(ind.macd); const match = score >= 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4131, name: 'MACD Score 25 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4132(ind) { const score = this.getMacdScore(ind.macd); const match = score >= 30 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4132, name: 'MACD Score 30 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4133(ind) { const score = this.getMacdScore(ind.macd); const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 20 && bw < 2; return { id: 4133, name: 'MACD Score 20 + Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4134(ind) { const score = this.getMacdScore(ind.macd); const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 25 && bw < 1.5; return { id: 4134, name: 'MACD Score 25 + Tight', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4135(ind) { const score = this.getMacdScore(ind.macd); const pos = ind.bollingerBands?.position || 50; const match = score >= 20 && pos < 30; return { id: 4135, name: 'MACD Score 20 + BB30', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4136(ind) { const score = this.getMacdScore(ind.macd); const pos = ind.bollingerBands?.position || 50; const match = score >= 25 && pos < 25; return { id: 4136, name: 'MACD Score 25 + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4137(ind) { const score = this.getMacdScore(ind.macd); const match = score >= 25 && ind.rsi < 35 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4137, name: 'MACD Score 25 + RSI + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4138(ind) { const score = this.getMacdScore(ind.macd); const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 25 && ind.rsi < 35 && bw < 2; return { id: 4138, name: 'MACD Score 25 + RSI + Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4139(ind) { const score = this.getMacdScore(ind.macd); const pos = ind.bollingerBands?.position || 50; const match = score >= 30 && ind.rsi < 30 && pos < 25; return { id: 4139, name: 'MACD Score 30 + RSI30 + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4140(ind) { const score = this.getMacdScore(ind.macd); const pos = ind.bollingerBands?.position || 50; const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 30 && ind.rsi < 30 && pos < 20 && bw < 1.5; return { id: 4140, name: 'MACD Score 30 + All Extreme', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    
    // --- BB ?�수 기반 (4141-4160) ---
    
    /** BB ?�수 계산 */
    static getBbScore(bb) {
        if (!bb) return 0;
        let score = 0;
        const pos = bb.position || 50;
        if (pos <= 10) score += 20;
        else if (pos <= 20) score += 16;
        else if (pos <= 30) score += 12;
        else if (pos <= 40) score += 8;
        else if (pos <= 50) score += 4;
        return score;
    }
    
    static strategy4141(ind) { const score = this.getBbScore(ind.bollingerBands); const match = (score >= 20) && ind.stochastic?.k < 70 && ind.volume > ind.avgVolume * 1.5; return { id: 4141, name: 'BB Score 20', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4142(ind) { const score = this.getBbScore(ind.bollingerBands); const match = score >= 16; return { id: 4142, name: 'BB Score 16+', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4143(ind) { const score = this.getBbScore(ind.bollingerBands); const match = score >= 12 && ind.volume > (ind.avgVolume || ind.volume) * 1.25; return { id: 4143, name: 'BB Score 12+', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy4144(ind) { const score = this.getBbScore(ind.bollingerBands); const match = score >= 8; return { id: 4144, name: 'BB Score 8+', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy4145(ind) { const score = this.getBbScore(ind.bollingerBands); const match = score >= 4; return { id: 4145, name: 'BB Score 4+', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    
    /** BB ?�수 + 추�? 조건 */
    static strategy4146(ind) { const score = this.getBbScore(ind.bollingerBands); const match = score >= 12 && ind.rsi < 40; return { id: 4146, name: 'BB Score 12 + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4147(ind) { const score = this.getBbScore(ind.bollingerBands); const match = score >= 16 && ind.rsi < 35; return { id: 4147, name: 'BB Score 16 + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4148(ind) { const score = this.getBbScore(ind.bollingerBands); const match = (score >= 20 && ind.rsi < 30) && ind.consecutiveGreen >= 2; return { id: 4148, name: 'BB Score 20 + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4149(ind) { const score = this.getBbScore(ind.bollingerBands); const match = score >= 16 && ind.macd?.MACD > ind.macd?.signal; return { id: 4149, name: 'BB Score 16 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4150(ind) { const score = this.getBbScore(ind.bollingerBands); const match = (score >= 20 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal) && ind.consecutiveRed <= 2; return { id: 4150, name: 'BB Score 20 + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4151(ind) { const score = this.getBbScore(ind.bollingerBands); const match = score >= 16 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4151, name: 'BB Score 16 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4152(ind) { const score = this.getBbScore(ind.bollingerBands); const match = score >= 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.volume > (ind.prevVolume || ind.volume) * 1.09; return { id: 4152, name: 'BB Score 20 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4153(ind) { const score = this.getBbScore(ind.bollingerBands); const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 16 && bw < 2; return { id: 4153, name: 'BB Score 16 + Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4154(ind) { const score = this.getBbScore(ind.bollingerBands); const bw = ind.bollingerBands?.bandwidth || 0; const match = (score >= 20 && bw < 1.5) && ind.fearGreedIndex < 60; return { id: 4154, name: 'BB Score 20 + Tight', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4155(ind) { const score = this.getBbScore(ind.bollingerBands); const match = score >= 16 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 4155, name: 'BB Score 16 + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4156(ind) { const score = this.getBbScore(ind.bollingerBands); const match = (score >= 20 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal) && ind.fearGreedIndex > 30; return { id: 4156, name: 'BB Score 20 + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4157(ind) { const score = this.getBbScore(ind.bollingerBands); const match = score >= 16 && ind.rsi < 35 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4157, name: 'BB Score 16 + RSI + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4158(ind) { const score = this.getBbScore(ind.bollingerBands); const match = score >= 20 && ind.rsi < 30 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4158, name: 'BB Score 20 + RSI30 + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4159(ind) { const score = this.getBbScore(ind.bollingerBands); const match = score >= 20 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4159, name: 'BB Score 20 + All', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy4160(ind) { const score = this.getBbScore(ind.bollingerBands); const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 20 && bw < 1.5 && ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4160, name: 'BB Score 20 + All Extreme', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    
    // --- EMA ?�수 기반 (4161-4180) ---
    
    /** EMA ?�수 계산 */
    static getEmaScore(ind) {
        let score = 0;
        if (ind.close > ind.ema20) score += 5;
        if (ind.ema20 > ind.ema50) score += 5;
        if (ind.ema50 > ind.ema100) score += 5;
        if (ind.close > ind.sma200) score += 5;
        return score;
    }
    
    static strategy4161(ind) { const score = this.getEmaScore(ind); const match = score >= 20 && ind.volume > ind.avgVolume * 1.1; return { id: 4161, name: 'EMA Score 20', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4162(ind) { const score = this.getEmaScore(ind); const match = score >= 15 && ind.obv > (ind.prevObv || 0); return { id: 4162, name: 'EMA Score 15+', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4163(ind) { const score = this.getEmaScore(ind); const match = score >= 10 && ind.volume > (ind.avgVolume || ind.volume) * 1.25; return { id: 4163, name: 'EMA Score 10+', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy4164(ind) { const score = this.getEmaScore(ind); const match = score >= 5; return { id: 4164, name: 'EMA Score 5+', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    
    /** EMA ?�수 + 추�? 조건 */
    static strategy4165(ind) { const score = this.getEmaScore(ind); const match = score >= 15 && ind.rsi < 40; return { id: 4165, name: 'EMA Score 15 + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4166(ind) { const score = this.getEmaScore(ind); const match = score >= 15 && ind.rsi < 35; return { id: 4166, name: 'EMA Score 15 + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4167(ind) { const score = this.getEmaScore(ind); const match = score >= 20 && ind.rsi < 35 && ind.volume > (ind.avgVolume || ind.volume) * 1.2000000000000002; return { id: 4167, name: 'EMA Score 20 + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4168(ind) { const score = this.getEmaScore(ind); const match = score >= 20 && ind.rsi < 30 && ind.volume > (ind.prevVolume || ind.volume) * 1.21; return { id: 4168, name: 'EMA Score 20 + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4169(ind) { const score = this.getEmaScore(ind); const match = score >= 15 && ind.macd?.MACD > ind.macd?.signal; return { id: 4169, name: 'EMA Score 15 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4170(ind) { const score = this.getEmaScore(ind); const match = score >= 20 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.obv > (ind.prevObv || 0); return { id: 4170, name: 'EMA Score 20 + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4171(ind) { const score = this.getEmaScore(ind); const pos = ind.bollingerBands?.position || 50; const match = score >= 15 && pos < 30; return { id: 4171, name: 'EMA Score 15 + BB30', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4172(ind) { const score = this.getEmaScore(ind); const pos = ind.bollingerBands?.position || 50; const match = score >= 20 && pos < 25; return { id: 4172, name: 'EMA Score 20 + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4173(ind) { const score = this.getEmaScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 15 && bw < 2; return { id: 4173, name: 'EMA Score 15 + Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4174(ind) { const score = this.getEmaScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 20 && bw < 1.5 && ind.obv > (ind.prevObv || 0); return { id: 4174, name: 'EMA Score 20 + Tight', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4175(ind) { const score = this.getEmaScore(ind); const match = score >= 15 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 4175, name: 'EMA Score 15 + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4176(ind) { const score = this.getEmaScore(ind); const match = score >= 20 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.volume > (ind.prevVolume || ind.volume) * 1.17; return { id: 4176, name: 'EMA Score 20 + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4177(ind) { const score = this.getEmaScore(ind); const pos = ind.bollingerBands?.position || 50; const match = score >= 20 && ind.rsi < 30 && pos < 25; return { id: 4177, name: 'EMA Score 20 + RSI30 + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4178(ind) { const score = this.getEmaScore(ind); const pos = ind.bollingerBands?.position || 50; const match = score >= 20 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && pos < 25; return { id: 4178, name: 'EMA Score 20 + All + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4179(ind) { const score = this.getEmaScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 20 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && bw < 1.5; return { id: 4179, name: 'EMA Score 20 + All + Tight', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy4180(ind) { const score = this.getEmaScore(ind); const pos = ind.bollingerBands?.position || 50; const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 20 && ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && pos < 20 && bw < 1.5; return { id: 4180, name: 'EMA Score 20 + All Extreme', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    
    // --- 종합 ?�수 (4181-4200) ---
    
    /** 종합 ?�수 계산 */
    static getTotalScore(ind) {
        const rsiScore = this.getRsiScore(ind.rsi);
        const macdScore = this.getMacdScore(ind.macd);
        const bbScore = this.getBbScore(ind.bollingerBands);
        const emaScore = this.getEmaScore(ind);
        return rsiScore + macdScore + bbScore + emaScore;
    }
    
    static strategy4181(ind) { const score = this.getTotalScore(ind); const match = score >= 90; return { id: 4181, name: 'Total Score 90+', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy4182(ind) { const score = this.getTotalScore(ind); const match = score >= 85; return { id: 4182, name: 'Total Score 85+', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4183(ind) { const score = this.getTotalScore(ind); const match = score >= 80; return { id: 4183, name: 'Total Score 80+', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4184(ind) { const score = this.getTotalScore(ind); const match = score >= 75; return { id: 4184, name: 'Total Score 75+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4185(ind) { const score = this.getTotalScore(ind); const match = score >= 70; return { id: 4185, name: 'Total Score 70+', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4186(ind) { const score = this.getTotalScore(ind); const match = score >= 65; return { id: 4186, name: 'Total Score 65+', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4187(ind) { const score = this.getTotalScore(ind); const match = score >= 60; return { id: 4187, name: 'Total Score 60+', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy4188(ind) { const score = this.getTotalScore(ind); const match = score >= 55; return { id: 4188, name: 'Total Score 55+', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy4189(ind) { const score = this.getTotalScore(ind); const match = score >= 50; return { id: 4189, name: 'Total Score 50+', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy4190(ind) { const score = this.getTotalScore(ind); const match = score >= 45; return { id: 4190, name: 'Total Score 45+', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    
    /** 종합 ?�수 + 추�? 조건 */
    static strategy4191(ind) { const score = this.getTotalScore(ind); const match = score >= 70 && ind.priceChange > 0; return { id: 4191, name: 'Total 70+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4192(ind) { const score = this.getTotalScore(ind); const match = score >= 75 && ind.priceChange > 0; return { id: 4192, name: 'Total 75+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4193(ind) { const score = this.getTotalScore(ind); const match = score >= 80 && ind.priceChange > 0; return { id: 4193, name: 'Total 80+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4194(ind) { const score = this.getTotalScore(ind); const match = score >= 85 && ind.priceChange >= 0.5; return { id: 4194, name: 'Total 85+ 0.5%', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy4195(ind) { const score = this.getTotalScore(ind); const match = score >= 90 && ind.priceChange >= 1; return { id: 4195, name: 'Total 90+ 1%', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    static strategy4196(ind) { const score = this.getTotalScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 70 && bw < 2; return { id: 4196, name: 'Total 70+ Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4197(ind) { const score = this.getTotalScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 80 && bw < 1.5; return { id: 4197, name: 'Total 80+ Tight', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4198(ind) { const score = this.getTotalScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = score >= 75 && prevBw < 2 && bw >= 2.5 && ind.priceChange > 0; return { id: 4198, name: 'Total 75+ Release Up', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4199(ind) { const score = this.getTotalScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = score >= 80 && prevBw < 1.5 && bw >= 2.5 && ind.priceChange >= 0.5; return { id: 4199, name: 'Total 80+ Strong Release', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy4200(ind) { const score = this.getTotalScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = score >= 90 && prevBw < 1.5 && bw >= 3 && atrRatio >= 1.5 && ind.priceChange >= 1; return { id: 4200, name: 'Ultimate Score Breakout', direction: 'UP', match: Boolean(match), confidence: match ? 99 : 0 }; }

    /** 모든 ?�략 ?�행 (4001-4200) */
    static analyzeAll(indicators) {
        return [
            this.strategy4001(indicators), this.strategy4002(indicators), this.strategy4003(indicators),
            this.strategy4004(indicators), this.strategy4005(indicators), this.strategy4006(indicators),
            this.strategy4007(indicators), this.strategy4008(indicators), this.strategy4009(indicators),
            this.strategy4010(indicators), this.strategy4011(indicators), this.strategy4012(indicators),
            this.strategy4013(indicators), this.strategy4014(indicators), this.strategy4015(indicators),
            this.strategy4016(indicators), this.strategy4017(indicators), this.strategy4018(indicators),
            this.strategy4019(indicators), this.strategy4020(indicators), this.strategy4021(indicators),
            this.strategy4022(indicators), this.strategy4023(indicators), this.strategy4024(indicators),
            this.strategy4025(indicators), this.strategy4026(indicators), this.strategy4027(indicators),
            this.strategy4028(indicators), this.strategy4029(indicators), this.strategy4030(indicators),
            this.strategy4031(indicators), this.strategy4032(indicators), this.strategy4033(indicators),
            this.strategy4034(indicators), this.strategy4035(indicators), this.strategy4036(indicators),
            this.strategy4037(indicators), this.strategy4038(indicators), this.strategy4039(indicators),
            this.strategy4040(indicators), this.strategy4041(indicators), this.strategy4042(indicators),
            this.strategy4043(indicators), this.strategy4044(indicators), this.strategy4045(indicators),
            this.strategy4046(indicators), this.strategy4047(indicators), this.strategy4048(indicators),
            this.strategy4049(indicators), this.strategy4050(indicators), this.strategy4051(indicators),
            this.strategy4052(indicators), this.strategy4053(indicators), this.strategy4054(indicators),
            this.strategy4055(indicators), this.strategy4056(indicators), this.strategy4057(indicators),
            this.strategy4058(indicators), this.strategy4059(indicators), this.strategy4060(indicators),
            this.strategy4061(indicators), this.strategy4062(indicators), this.strategy4063(indicators),
            this.strategy4064(indicators), this.strategy4065(indicators), this.strategy4066(indicators),
            this.strategy4067(indicators), this.strategy4068(indicators), this.strategy4069(indicators),
            this.strategy4070(indicators), this.strategy4071(indicators), this.strategy4072(indicators),
            this.strategy4073(indicators), this.strategy4074(indicators), this.strategy4075(indicators),
            this.strategy4076(indicators), this.strategy4077(indicators), this.strategy4078(indicators),
            this.strategy4079(indicators), this.strategy4080(indicators), this.strategy4081(indicators),
            this.strategy4082(indicators), this.strategy4083(indicators), this.strategy4084(indicators),
            this.strategy4085(indicators), this.strategy4086(indicators), this.strategy4087(indicators),
            this.strategy4088(indicators), this.strategy4089(indicators), this.strategy4090(indicators),
            this.strategy4091(indicators), this.strategy4092(indicators), this.strategy4093(indicators),
            this.strategy4094(indicators), this.strategy4095(indicators), this.strategy4096(indicators),
            this.strategy4097(indicators), this.strategy4098(indicators), this.strategy4099(indicators),
            this.strategy4100(indicators), this.strategy4101(indicators), this.strategy4102(indicators),
            this.strategy4103(indicators), this.strategy4104(indicators), this.strategy4105(indicators),
            this.strategy4106(indicators), this.strategy4107(indicators), this.strategy4108(indicators),
            this.strategy4109(indicators), this.strategy4110(indicators), this.strategy4111(indicators),
            this.strategy4112(indicators), this.strategy4113(indicators), this.strategy4114(indicators),
            this.strategy4115(indicators), this.strategy4116(indicators), this.strategy4117(indicators),
            this.strategy4118(indicators), this.strategy4119(indicators), this.strategy4120(indicators),
            this.strategy4121(indicators), this.strategy4122(indicators), this.strategy4123(indicators),
            this.strategy4124(indicators), this.strategy4125(indicators), this.strategy4126(indicators),
            this.strategy4127(indicators), this.strategy4128(indicators), this.strategy4129(indicators),
            this.strategy4130(indicators), this.strategy4131(indicators), this.strategy4132(indicators),
            this.strategy4133(indicators), this.strategy4134(indicators), this.strategy4135(indicators),
            this.strategy4136(indicators), this.strategy4137(indicators), this.strategy4138(indicators),
            this.strategy4139(indicators), this.strategy4140(indicators), this.strategy4141(indicators),
            this.strategy4142(indicators), this.strategy4143(indicators), this.strategy4144(indicators),
            this.strategy4145(indicators), this.strategy4146(indicators), this.strategy4147(indicators),
            this.strategy4148(indicators), this.strategy4149(indicators), this.strategy4150(indicators),
            this.strategy4151(indicators), this.strategy4152(indicators), this.strategy4153(indicators),
            this.strategy4154(indicators), this.strategy4155(indicators), this.strategy4156(indicators),
            this.strategy4157(indicators), this.strategy4158(indicators), this.strategy4159(indicators),
            this.strategy4160(indicators), this.strategy4161(indicators), this.strategy4162(indicators),
            this.strategy4163(indicators), this.strategy4164(indicators), this.strategy4165(indicators),
            this.strategy4166(indicators), this.strategy4167(indicators), this.strategy4168(indicators),
            this.strategy4169(indicators), this.strategy4170(indicators), this.strategy4171(indicators),
            this.strategy4172(indicators), this.strategy4173(indicators), this.strategy4174(indicators),
            this.strategy4175(indicators), this.strategy4176(indicators), this.strategy4177(indicators),
            this.strategy4178(indicators), this.strategy4179(indicators), this.strategy4180(indicators),
            this.strategy4181(indicators), this.strategy4182(indicators), this.strategy4183(indicators),
            this.strategy4184(indicators), this.strategy4185(indicators), this.strategy4186(indicators),
            this.strategy4187(indicators), this.strategy4188(indicators), this.strategy4189(indicators),
            this.strategy4190(indicators), this.strategy4191(indicators), this.strategy4192(indicators),
            this.strategy4193(indicators), this.strategy4194(indicators), this.strategy4195(indicators),
            this.strategy4196(indicators), this.strategy4197(indicators), this.strategy4198(indicators),
            this.strategy4199(indicators), this.strategy4200(indicators)
        ];
    }
}

