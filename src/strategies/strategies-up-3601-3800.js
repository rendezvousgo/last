/**
 * UP ?�략 ?�장 (ID: 3601-3800)
 * 
 * STRATEGY_IDEAS.txt 기반 체계??구성:
 * - 3601-3700: 지??N�??�속 조건 (100�?
 * - 3701-3800: 조건 지???�간 기반 (100�?
 */

export class StrategiesUp3601 {
    
    // ==================== 지??N�??�속 조건 (3601-3700) ====================
    // RSI, MACD, BB, EMA ??지?�의 ?�속???�태/변??감�?
    
    // --- RSI N�??�속 ?�승/개선 (3601-3620) ---
    
    /** RSI ?�속 ?�승 */
    static strategy3601(ind) { const prev = ind.prevRsi || []; const rising = prev.length >= 2 && prev[0] < prev[1] && prev[1] < ind.rsi; const match = (rising && ind.rsi < 50) && ind.priceChange < 5; return { id: 3601, name: 'RSI 3-Bar Rising Below 50', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy3602(ind) { const prev = ind.prevRsi || []; const rising = prev.length >= 3 && prev[0] < prev[1] && prev[1] < prev[2] && prev[2] < ind.rsi; const match = (rising && ind.rsi < 50) && ind.consecutiveGreen >= 1 && ind.obv > (ind.prevObv || 0); return { id: 3602, name: 'RSI 4-Bar Rising Below 50', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3603(ind) { const prev = ind.prevRsi || []; const rising = prev.length >= 4 && prev.every((v, i) => i === 0 || prev[i-1] < v) && prev[prev.length-1] < ind.rsi; const match = rising && ind.rsi < 50 && ind.volume > (ind.avgVolume || ind.volume) * 1.25; return { id: 3603, name: 'RSI 5-Bar Rising Below 50', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3604(ind) { const prev = ind.prevRsi || []; const rising = prev.length >= 2 && prev[0] < prev[1] && prev[1] < ind.rsi; const match = (rising && ind.rsi < 40) && ind.consecutiveGreen >= 2; return { id: 3604, name: 'RSI 3-Bar Rising Below 40', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy3605(ind) { const prev = ind.prevRsi || []; const rising = prev.length >= 3 && prev[0] < prev[1] && prev[1] < prev[2] && prev[2] < ind.rsi; const match = rising && ind.rsi < 40 && ind.volume > ind.avgVolume * 1.5; return { id: 3605, name: 'RSI 4-Bar Rising Below 40', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    
    /** RSI 과매???�출 ?�속 */
    static strategy3606(ind) { const prev = ind.prevRsi || []; const wasOversold = prev.length >= 1 && prev[0] < 30; const match = wasOversold && ind.rsi >= 30 && ind.rsi < 40; return { id: 3606, name: 'RSI Oversold Exit Fresh', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3607(ind) { const prev = ind.prevRsi || []; const wasOversold = prev.length >= 2 && prev[0] < 30 && prev[1] < 30; const match = (wasOversold && ind.rsi >= 30) && ind.consecutiveRed <= 2; return { id: 3607, name: 'RSI 2-Bar Oversold Exit', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3608(ind) { const prev = ind.prevRsi || []; const wasOversold = prev.length >= 3 && prev[0] < 30 && prev[1] < 30 && prev[2] < 30; const match = wasOversold && ind.rsi >= 30 && ind.volume > (ind.prevVolume || ind.volume) * 1.21; return { id: 3608, name: 'RSI 3-Bar Oversold Exit', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3609(ind) { const prev = ind.prevRsi || []; const wasOversold = prev.length >= 2 && prev[0] < 25 && prev[1] < 25; const match = wasOversold && ind.rsi >= 25; return { id: 3609, name: 'RSI Deep Oversold Exit', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3610(ind) { const prev = ind.prevRsi || []; const wasOversold = prev.length >= 3 && prev.every(v => v < 25); const match = wasOversold && ind.rsi >= 25 && ind.rsi < 35; return { id: 3610, name: 'RSI 3-Bar Deep Oversold Exit', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    
    /** RSI 50???�파 ?�속 ?�인 */
    static strategy3611(ind) { const prev = ind.prevRsi || []; const cross50 = prev.length >= 1 && prev[0] < 50 && ind.rsi >= 50; const match = cross50 && ind.rsi < 55; return { id: 3611, name: 'RSI 50 Fresh Cross', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    static strategy3612(ind) { const prev = ind.prevRsi || []; const below50 = prev.length >= 2 && prev.every(v => v < 50); const match = below50 && ind.rsi >= 50 && ind.rsi < 55; return { id: 3612, name: 'RSI 50 Cross After 2-Bar Below', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 }; }
    static strategy3613(ind) { const prev = ind.prevRsi || []; const below50 = prev.length >= 3 && prev.every(v => v < 50); const match = below50 && ind.rsi >= 50 && ind.rsi < 60; return { id: 3613, name: 'RSI 50 Cross After 3-Bar Below', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy3614(ind) { const prev = ind.prevRsi || []; const rising = prev.length >= 2 && prev[0] < prev[1] && prev[1] < 50 && ind.rsi >= 50; const match = Boolean(rising); return { id: 3614, name: 'RSI Rising Cross 50', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy3615(ind) { const prev = ind.prevRsi || []; const consolidate = prev.length >= 2 && Math.abs(prev[0] - prev[1]) < 3 && prev[1] < 50 && ind.rsi >= 50; const match = Boolean(consolidate); return { id: 3615, name: 'RSI Consolidate Cross 50', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    
    /** RSI 강도 ?�속 증�? */
    static strategy3616(ind) { const prev = ind.prevRsi || []; const accel = prev.length >= 2 && (ind.rsi - prev[1]) > (prev[1] - prev[0]) && (prev[1] - prev[0]) > 0; const match = accel && ind.rsi < 60; return { id: 3616, name: 'RSI Accelerating Rise', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3617(ind) { const prev = ind.prevRsi || []; const bigMove = prev.length >= 1 && (ind.rsi - prev[0]) >= 5; const match = bigMove && ind.rsi < 50; return { id: 3617, name: 'RSI +5 Jump Below 50', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3618(ind) { const prev = ind.prevRsi || []; const bigMove = prev.length >= 1 && (ind.rsi - prev[0]) >= 7; const match = bigMove && ind.rsi < 55; return { id: 3618, name: 'RSI +7 Jump', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3619(ind) { const prev = ind.prevRsi || []; const bigMove = prev.length >= 1 && (ind.rsi - prev[0]) >= 10; const match = bigMove && ind.rsi < 60; return { id: 3619, name: 'RSI +10 Strong Jump', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3620(ind) { const prev = ind.prevRsi || []; const recovery = prev.length >= 2 && prev[0] < 25 && (ind.rsi - prev[0]) >= 10; const match = Boolean(recovery); return { id: 3620, name: 'RSI Strong Recovery from Deep', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    
    // --- MACD N�??�속 조건 (3621-3645) ---
    
    /** MACD ?�스?�그???�속 ?�승 */
    static strategy3621(ind) { const hist = ind.macd?.histogram || 0; const prevHist = ind.macd?.prevHistogram || 0; const prev2Hist = ind.macd?.prev2Histogram || prevHist; const rising = prev2Hist < prevHist && prevHist < hist; const match = (rising && hist < 0) && ind.fearGreedIndex > 30; return { id: 3621, name: 'MACD Hist 3-Bar Rising Negative', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3622(ind) { const hist = ind.macd?.histogram || 0; const prevHist = ind.macd?.prevHistogram || 0; const prev2Hist = ind.macd?.prev2Histogram || prevHist; const prev3Hist = ind.macd?.prev3Histogram || prev2Hist; const rising = prev3Hist < prev2Hist && prev2Hist < prevHist && prevHist < hist; const match = rising && hist < 0 && ind.obv > (ind.prevObv || 0); return { id: 3622, name: 'MACD Hist 4-Bar Rising Negative', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3623(ind) { const hist = ind.macd?.histogram || 0; const prevHist = ind.macd?.prevHistogram || 0; const prev2Hist = ind.macd?.prev2Histogram || prevHist; const rising = prev2Hist < prevHist && prevHist < hist; const match = (rising && hist >= 0) && ind.fearGreedIndex < 70; return { id: 3623, name: 'MACD Hist 3-Bar Rising Positive', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3624(ind) { const hist = ind.macd?.histogram || 0; const prevHist = ind.macd?.prevHistogram || 0; const prev2Hist = ind.macd?.prev2Histogram || prevHist; const prev3Hist = ind.macd?.prev3Histogram || prev2Hist; const rising = prev3Hist < prev2Hist && prev2Hist < prevHist && prevHist < hist; const match = rising && hist >= 0 && ind.volume > (ind.prevVolume || ind.volume) * 1.1300000000000001; return { id: 3624, name: 'MACD Hist 4-Bar Rising Positive', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3625(ind) { const hist = ind.macd?.histogram || 0; const prevHist = ind.macd?.prevHistogram || 0; const prev2Hist = ind.macd?.prev2Histogram || prevHist; const cross = prev2Hist < 0 && prevHist < 0 && hist >= 0; const match = (cross) && ind.bollingerBands?.position < 30 && ind.volume > ind.avgVolume * 1.1; return { id: 3625, name: 'MACD Hist Cross 0 After 2-Bar Neg', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    
    /** MACD 골든?�로???�속 ?�인 */
    static strategy3626(ind) { const macd = ind.macd?.MACD || 0; const signal = ind.macd?.signal || 0; const prevMacd = ind.macd?.prevMACD || 0; const prevSignal = ind.macd?.prevSignal || 0; const freshCross = prevMacd <= prevSignal && macd > signal; const match = (freshCross) && ind.fearGreedIndex > 20; return { id: 3626, name: 'MACD Fresh Golden Cross', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy3627(ind) { const macd = ind.macd?.MACD || 0; const signal = ind.macd?.signal || 0; const prevMacd = ind.macd?.prevMACD || 0; const prevSignal = ind.macd?.prevSignal || 0; const freshCross = prevMacd <= prevSignal && macd > signal; const match = freshCross && macd < 0; return { id: 3627, name: 'MACD Golden Cross Below 0', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3628(ind) { const macd = ind.macd?.MACD || 0; const signal = ind.macd?.signal || 0; const gapWidening = (macd - signal) > (ind.macd?.prevMACD - ind.macd?.prevSignal || 0); const match = macd > signal && gapWidening; return { id: 3628, name: 'MACD Golden Gap Widening', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3629(ind) { const macd = ind.macd?.MACD || 0; const signal = ind.macd?.signal || 0; const match = macd > signal && macd > (ind.macd?.prevMACD || 0) && signal > (ind.macd?.prevSignal || 0); return { id: 3629, name: 'MACD Both Lines Rising Golden', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3630(ind) { const macd = ind.macd?.MACD || 0; const prevMacd = ind.macd?.prevMACD || 0; const prev2Macd = ind.macd?.prev2MACD || prevMacd; const rising = prev2Macd < prevMacd && prevMacd < macd; const match = rising && macd < 0; return { id: 3630, name: 'MACD Line 3-Bar Rising Negative', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    
    /** MACD 0???�로???�속 */
    static strategy3631(ind) { const macd = ind.macd?.MACD || 0; const prevMacd = ind.macd?.prevMACD || 0; const cross0 = prevMacd < 0 && macd >= 0; const match = cross0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3631, name: 'MACD Cross 0 Line + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3632(ind) { const macd = ind.macd?.MACD || 0; const prevMacd = ind.macd?.prevMACD || 0; const prev2Macd = ind.macd?.prev2MACD || prevMacd; const deepRecovery = prev2Macd < -50 && prevMacd < 0 && macd >= 0; const match = Boolean(deepRecovery); return { id: 3632, name: 'MACD Deep Recovery Cross 0', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3633(ind) { const macd = ind.macd?.MACD || 0; const prevMacd = ind.macd?.prevMACD || 0; const approach0 = prevMacd < -20 && macd > -10 && macd < 10; const match = approach0 && macd > prevMacd; return { id: 3633, name: 'MACD Approaching 0 Rising', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy3634(ind) { const macd = ind.macd?.MACD || 0; const prevMacd = ind.macd?.prevMACD || 0; const nearZero = Math.abs(macd) < 20 && Math.abs(prevMacd) < 20; const match = nearZero && macd > prevMacd && ind.macd?.histogram > 0; return { id: 3634, name: 'MACD Near 0 Rising + Hist+', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy3635(ind) { const hist = ind.macd?.histogram || 0; const prevHist = ind.macd?.prevHistogram || 0; const prev2Hist = ind.macd?.prev2Histogram || prevHist; const bottomForm = prev2Hist < prevHist && prevHist < hist && Math.abs(prev2Hist) > Math.abs(hist); const match = bottomForm && hist < 0; return { id: 3635, name: 'MACD Hist Bottom Forming', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    
    /** MACD 모멘?� 가??*/
    static strategy3636(ind) { const hist = ind.macd?.histogram || 0; const prevHist = ind.macd?.prevHistogram || 0; const accel = hist > 0 && (hist - prevHist) > prevHist * 0.3; const match = (accel) && ind.ema50 > ind.sma50; return { id: 3636, name: 'MACD Hist Accelerating +30%', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3637(ind) { const hist = ind.macd?.histogram || 0; const prevHist = ind.macd?.prevHistogram || 0; const accel = hist > 0 && (hist - prevHist) > prevHist * 0.5; const match = Boolean(accel) && ind.volume > ind.avgVolume * 1.5; return { id: 3637, name: 'MACD Hist Accelerating +50%', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3638(ind) { const hist = ind.macd?.histogram || 0; const prevHist = ind.macd?.prevHistogram || 0; const bigJump = hist > prevHist + 20; const match = (bigJump) && ind.rsi > 25 && ind.rsi < 75; return { id: 3638, name: 'MACD Hist +20 Jump', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3639(ind) { const hist = ind.macd?.histogram || 0; const prevHist = ind.macd?.prevHistogram || 0; const bigJump = hist > prevHist + 50; const match = Boolean(bigJump) && ind.volume > (ind.avgVolume || ind.volume) * 1.3; return { id: 3639, name: 'MACD Hist +50 Strong Jump', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3640(ind) { const macd = ind.macd?.MACD || 0; const prevMacd = ind.macd?.prevMACD || 0; const bigJump = macd > prevMacd + 30; const match = bigJump && macd > ind.macd?.signal; return { id: 3640, name: 'MACD Line +30 Strong Jump', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    
    /** MACD ?�속 강세 ?�인 */
    static strategy3641(ind) { const hist = ind.macd?.histogram || 0; const match = hist > 10 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.MACD > 0; return { id: 3641, name: 'MACD Triple Bullish Hist10', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3642(ind) { const hist = ind.macd?.histogram || 0; const match = hist > 20 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.MACD > 0; return { id: 3642, name: 'MACD Triple Bullish Hist20', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3643(ind) { const hist = ind.macd?.histogram || 0; const prevHist = ind.macd?.prevHistogram || 0; const match = hist > 0 && prevHist > 0 && hist > prevHist && ind.macd?.MACD > 0; return { id: 3643, name: 'MACD 2-Bar Positive Growing', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3644(ind) { const hist = ind.macd?.histogram || 0; const prevHist = ind.macd?.prevHistogram || 0; const prev2Hist = ind.macd?.prev2Histogram || prevHist; const match = hist > 0 && prevHist > 0 && prev2Hist > 0 && hist > prevHist; return { id: 3644, name: 'MACD 3-Bar Positive Growing', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3645(ind) { const macd = ind.macd?.MACD || 0; const signal = ind.macd?.signal || 0; const hist = ind.macd?.histogram || 0; const match = macd > 0 && signal > 0 && hist > 0 && macd > signal; return { id: 3645, name: 'MACD All Components Positive', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    
    // --- 볼린?�밴드 N�??�속 조건 (3646-3665) ---
    
    /** BB ?�단 ?�속 체류 ??반등 */
    static strategy3646(ind) { const pos = ind.bollingerBands?.position || 50; const prevPos = ind.bollingerBands?.prevPosition || 50; const match = prevPos < 20 && pos >= 20 && pos < 40; return { id: 3646, name: 'BB Lower Exit Fresh', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3647(ind) { const pos = ind.bollingerBands?.position || 50; const prevPos = ind.bollingerBands?.prevPosition || 50; const prev2Pos = ind.bollingerBands?.prev2Position || prevPos; const match = prev2Pos < 20 && prevPos < 20 && pos >= 20; return { id: 3647, name: 'BB 2-Bar Lower Exit', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3648(ind) { const pos = ind.bollingerBands?.position || 50; const prevPos = ind.bollingerBands?.prevPosition || 50; const prev2Pos = ind.bollingerBands?.prev2Position || prevPos; const prev3Pos = ind.bollingerBands?.prev3Position || prev2Pos; const match = prev3Pos < 15 && prev2Pos < 15 && prevPos < 20 && pos >= 20; return { id: 3648, name: 'BB 3-Bar Deep Lower Exit', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3649(ind) { const pos = ind.bollingerBands?.position || 50; const prevPos = ind.bollingerBands?.prevPosition || 50; const prev2Pos = ind.bollingerBands?.prev2Position || prevPos; const rising = prev2Pos < prevPos && prevPos < pos; const match = rising && pos < 50; return { id: 3649, name: 'BB Position 3-Bar Rising', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy3650(ind) { const pos = ind.bollingerBands?.position || 50; const prevPos = ind.bollingerBands?.prevPosition || 50; const bigJump = pos - prevPos >= 10; const match = bigJump && prevPos < 30; return { id: 3650, name: 'BB Position +10 Jump from Low', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    
    /** BB 밴드???�속 변??*/
    static strategy3651(ind) { const bw = ind.bollingerBands?.bandwidth || 3; const prevBw = ind.bollingerBands?.prevBandwidth || bw; const squeeze = bw < 2 && prevBw < 2; const match = squeeze && ind.bollingerBands?.position < 40; return { id: 3651, name: 'BB 2-Bar Squeeze Below Mid', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3652(ind) { const bw = ind.bollingerBands?.bandwidth || 3; const prevBw = ind.bollingerBands?.prevBandwidth || bw; const prev2Bw = ind.bollingerBands?.prev2Bandwidth || prevBw; const squeezeRelease = prev2Bw < 2 && prevBw < 2 && bw >= 2; const match = squeezeRelease && ind.close > ind.open; return { id: 3652, name: 'BB Squeeze Release + Green', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3653(ind) { const bw = ind.bollingerBands?.bandwidth || 3; const prevBw = ind.bollingerBands?.prevBandwidth || bw; const expanding = bw > prevBw * 1.2; const match = expanding && bw >= 3 && ind.bollingerBands?.position > 50; return { id: 3653, name: 'BB Expanding +20% Upper Half', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3654(ind) { const bw = ind.bollingerBands?.bandwidth || 3; const prevBw = ind.bollingerBands?.prevBandwidth || bw; const prev2Bw = ind.bollingerBands?.prev2Bandwidth || prevBw; const contract = prev2Bw > prevBw && prevBw > bw; const match = contract && bw < 2; return { id: 3654, name: 'BB 3-Bar Contracting to Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy3655(ind) { const bw = ind.bollingerBands?.bandwidth || 3; const match = bw < 1.5 && ind.bollingerBands?.position < 30; return { id: 3655, name: 'BB Extreme Squeeze Lower', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    
    /** BB 중앙???�로???�속 */
    static strategy3656(ind) { const pos = ind.bollingerBands?.position || 50; const prevPos = ind.bollingerBands?.prevPosition || 50; const crossMid = prevPos < 50 && pos >= 50; const match = crossMid && pos < 60; return { id: 3656, name: 'BB Fresh Mid Cross Up', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy3657(ind) { const pos = ind.bollingerBands?.position || 50; const prevPos = ind.bollingerBands?.prevPosition || 50; const prev2Pos = ind.bollingerBands?.prev2Position || prevPos; const crossMid = prev2Pos < 45 && prevPos < 50 && pos >= 50; const match = Boolean(crossMid); return { id: 3657, name: 'BB Mid Cross After Accumulation', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3658(ind) { const pos = ind.bollingerBands?.position || 50; const prevPos = ind.bollingerBands?.prevPosition || 50; const prev2Pos = ind.bollingerBands?.prev2Position || prevPos; const rising = prev2Pos < prevPos && prevPos < pos && pos > 50; const match = rising && pos < 70; return { id: 3658, name: 'BB Rising Through Mid', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3659(ind) { const pos = ind.bollingerBands?.position || 50; const match = pos > 40 && pos < 60 && ind.bollingerBands?.bandwidth < 2.5; return { id: 3659, name: 'BB Mid Zone Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 }; }
    static strategy3660(ind) { const pos = ind.bollingerBands?.position || 50; const prevPos = ind.bollingerBands?.prevPosition || 50; const holding = pos > 50 && prevPos > 50 && pos > prevPos; const match = holding && pos < 75; return { id: 3660, name: 'BB Holding Above Mid Rising', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 }; }
    
    /** BB + 가�??�속 관�?*/
    static strategy3661(ind) { const touchLower = ind.low <= ind.bollingerBands?.lower; const closeAbove = ind.close > ind.bollingerBands?.lower; const match = touchLower && closeAbove && ind.close > ind.open; return { id: 3661, name: 'BB Lower Touch + Close Above + Green', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3662(ind) { const prevClose = ind.prevClose || ind.close; const breakLower = prevClose < ind.bollingerBands?.lower && ind.close > ind.bollingerBands?.lower; const match = Boolean(breakLower); return { id: 3662, name: 'BB Lower False Break Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3663(ind) { const pos = ind.bollingerBands?.position || 50; const prevPos = ind.bollingerBands?.prevPosition || 50; const bounce = prevPos < 10 && pos > 15; const match = bounce && ind.priceChange > 0; return { id: 3663, name: 'BB Extreme Lower Bounce +Price', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3664(ind) { const aboveMid = ind.close > ind.bollingerBands?.middle; const prevAbove = (ind.prevClose || ind.close) > (ind.bollingerBands?.prevMiddle || ind.bollingerBands?.middle); const match = aboveMid && prevAbove && ind.close > ind.open; return { id: 3664, name: 'BB 2-Bar Above Mid + Green', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy3665(ind) { const pos = ind.bollingerBands?.position || 50; const bw = ind.bollingerBands?.bandwidth || 3; const match = pos > 20 && pos < 40 && bw < 2 && ind.close > ind.open; return { id: 3665, name: 'BB Lower Mid Squeeze + Green', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    
    // --- EMA/SMA N�??�속 조건 (3666-3685) ---
    
    /** EMA 골든?�로???�속 ?�인 */
    static strategy3666(ind) { const golden = ind.ema20 > ind.ema50; const prevGolden = (ind.prevEma20 || ind.ema20) > (ind.prevEma50 || ind.ema50); const freshCross = !prevGolden && golden; const match = (freshCross) && ind.ema20 > ind.sma20 && ind.obv > (ind.prevObv || 0); return { id: 3666, name: 'EMA Fresh Golden Cross', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3667(ind) { const golden = ind.ema20 > ind.ema50; const gapWidening = (ind.ema20 - ind.ema50) > ((ind.prevEma20 || ind.ema20) - (ind.prevEma50 || ind.ema50)); const match = golden && gapWidening; return { id: 3667, name: 'EMA Golden Gap Widening', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3668(ind) { const golden = ind.ema20 > ind.ema50; const bothRising = ind.ema20 > (ind.prevEma20 || ind.ema20) && ind.ema50 > (ind.prevEma50 || ind.ema50); const match = golden && bothRising; return { id: 3668, name: 'EMA Golden Both Rising', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3669(ind) { const golden = ind.ema20 > ind.ema50; const stack = ind.close > ind.ema20; const match = golden && stack && ind.priceChange > 0; return { id: 3669, name: 'EMA Stack + Rising Price', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy3670(ind) { const golden = ind.ema20 > ind.ema50; const smaGolden = ind.sma20 > ind.sma50; const match = golden && smaGolden; return { id: 3670, name: 'EMA + SMA Both Golden', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    
    /** EMA 지지 ?�속 ?�인 */
    static strategy3671(ind) { const nearEma20 = Math.abs(ind.close - ind.ema20) / ind.ema20 < 0.01; const aboveEma50 = ind.close > ind.ema50; const match = nearEma20 && aboveEma50 && ind.ema20 > ind.ema50; return { id: 3671, name: 'EMA20 Support Touch Golden', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3672(ind) { const touchEma20 = ind.low <= ind.ema20 * 1.01 && ind.close > ind.ema20; const golden = ind.ema20 > ind.ema50; const match = touchEma20 && golden; return { id: 3672, name: 'EMA20 Touch Bounce Golden', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3673(ind) { const touchEma50 = ind.low <= ind.ema50 * 1.01 && ind.close > ind.ema50; const match = touchEma50 && ind.close > ind.open; return { id: 3673, name: 'EMA50 Touch Bounce + Green', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3674(ind) { const aboveBoth = ind.close > ind.ema20 && ind.close > ind.ema50; const prevAbove = (ind.prevClose || ind.close) > (ind.prevEma20 || ind.ema20); const match = aboveBoth && prevAbove && ind.ema20 > ind.ema50; return { id: 3674, name: 'EMA 2-Bar Above Both + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3675(ind) { const rising20 = ind.ema20 > (ind.prevEma20 || ind.ema20); const rising50 = ind.ema50 > (ind.prevEma50 || ind.ema50); const priceAbove = ind.close > ind.ema20; const match = rising20 && rising50 && priceAbove; return { id: 3675, name: 'EMA Both Rising + Price Above', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    
    /** EMA ?�로???�박/?�정 */
    static strategy3676(ind) { const gap = ind.ema20 - ind.ema50; const prevGap = (ind.prevEma20 || ind.ema20) - (ind.prevEma50 || ind.ema50); const narrowing = gap > prevGap && gap < 0; const match = narrowing && Math.abs(gap) < ind.close * 0.003; return { id: 3676, name: 'EMA Golden Cross Imminent', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3677(ind) { const gap = ind.ema20 - ind.ema50; const justCrossed = gap > 0 && gap < ind.close * 0.002; const match = justCrossed && ind.close > ind.ema20; return { id: 3677, name: 'EMA Golden Just Crossed', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3678(ind) { const gap = ind.ema20 - ind.ema50; const strongGolden = gap > ind.close * 0.005; const match = strongGolden && ind.close > ind.ema20; return { id: 3678, name: 'EMA Strong Golden State', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3679(ind) { const gap = ind.ema20 - ind.ema50; const veryStrong = gap > ind.close * 0.01; const match = veryStrong && ind.close > ind.ema20 && ind.priceChange > 0; return { id: 3679, name: 'EMA Very Strong Golden + Up', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3680(ind) { const fullStack = ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.ema50 > ind.sma50; const match = fullStack && ind.sma20 > ind.sma50; return { id: 3680, name: 'Full MA Stack Bullish', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    
    /** SMA ?�속 조건 */
    static strategy3681(ind) { const smaGolden = ind.sma20 > ind.sma50; const freshCross = (ind.prevSma20 || ind.sma20) <= (ind.prevSma50 || ind.sma50) && smaGolden; const match = Boolean(freshCross) && ind.volume > ind.avgVolume * 1.1; return { id: 3681, name: 'SMA Fresh Golden Cross', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy3682(ind) { const smaGolden = ind.sma20 > ind.sma50; const priceAbove = ind.close > ind.sma20; const match = smaGolden && priceAbove && ind.close > ind.open; return { id: 3682, name: 'SMA Golden + Price Above + Green', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy3683(ind) { const touch = ind.low <= ind.sma20 * 1.01 && ind.close > ind.sma20; const golden = ind.sma20 > ind.sma50; const match = touch && golden; return { id: 3683, name: 'SMA20 Touch Bounce Golden', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3684(ind) { const smaRising = ind.sma20 > (ind.prevSma20 || ind.sma20) && ind.sma50 > (ind.prevSma50 || ind.sma50); const match = smaRising && ind.sma20 > ind.sma50; return { id: 3684, name: 'SMA Both Rising Golden', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3685(ind) { const allGolden = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; const priceAboveAll = ind.close > ind.ema20 && ind.close > ind.sma20; const match = allGolden && priceAboveAll; return { id: 3685, name: 'All MA Golden + Price Above', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    
    // --- 가�?N�??�속 조건 (3686-3700) ---
    
    /** 가�??�속 ?�승 */
    static strategy3686(ind) { const green = ind.close > ind.open; const prevGreen = (ind.prevClose || ind.close) > (ind.prevOpen || ind.open); const match = green && prevGreen; return { id: 3686, name: '2-Bar Consecutive Green', direction: 'UP', match: Boolean(match), confidence: match ? 62 : 0 }; }
    static strategy3687(ind) { const greenStreak = ind.greenStreak || 0; const match = greenStreak >= 3; return { id: 3687, name: '3-Bar Consecutive Green', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy3688(ind) { const greenStreak = ind.greenStreak || 0; const match = greenStreak >= 4; return { id: 3688, name: '4-Bar Consecutive Green', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3689(ind) { const greenStreak = ind.greenStreak || 0; const match = greenStreak >= 5; return { id: 3689, name: '5-Bar Consecutive Green', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3690(ind) { const higherHigh = ind.high > (ind.prevHigh || ind.high); const higherLow = ind.low > (ind.prevLow || ind.low); const match = (higherHigh && higherLow) && ind.adx?.adx > 25 && ind.obv > (ind.prevObv || 0); return { id: 3690, name: 'Higher High + Higher Low', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    
    /** 가�??�속 ?�턴 */
    static strategy3691(ind) { const recovery = (ind.prevClose || ind.close) < (ind.prev2Close || ind.close) && ind.close > (ind.prevClose || ind.close); const match = recovery && ind.priceChange > 0.5; return { id: 3691, name: 'V-Shape Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy3692(ind) { const bigGreen = ind.close > ind.open && (ind.close - ind.open) / ind.open > 0.01; const prevSmall = Math.abs((ind.prevClose || ind.close) - (ind.prevOpen || ind.open)) < (ind.close - ind.open) * 0.3; const match = bigGreen && prevSmall; return { id: 3692, name: 'Breakout After Consolidation', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy3693(ind) { const longLowerWick = (Math.min(ind.open, ind.close) - ind.low) > (ind.high - ind.low) * 0.6; const greenClose = ind.close > ind.open; const match = longLowerWick && greenClose; return { id: 3693, name: 'Hammer Candle Pattern', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3694(ind) { const doji = Math.abs(ind.close - ind.open) < (ind.high - ind.low) * 0.1; const prevRed = (ind.prevClose || ind.close) < (ind.prevOpen || ind.open); const match = doji && prevRed && ind.close > ind.open; return { id: 3694, name: 'Doji After Red + Green', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3695(ind) { const engulfing = ind.close > ind.open && ind.close > (ind.prevOpen || ind.open) && ind.open < (ind.prevClose || ind.close); const prevRed = (ind.prevClose || ind.close) < (ind.prevOpen || ind.open); const match = engulfing && prevRed; return { id: 3695, name: 'Bullish Engulfing', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    
    /** 가�??�속 기술???�인 */
    static strategy3696(ind) { const closeAbovePrevHigh = ind.close > (ind.prevHigh || ind.high); const match = (closeAbovePrevHigh && ind.close > ind.open) && ind.adx?.adx < 40 && ind.volume > (ind.prevVolume || ind.volume) * 1.17; return { id: 3696, name: 'Close Above Prev High + Green', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3697(ind) { const breakout = ind.close > (ind.prev2High || ind.high) && ind.close > (ind.prevHigh || ind.high); const match = (breakout) && ind.volumeRatio > 1.5 && ind.volume > ind.avgVolume * 1.1; return { id: 3697, name: '2-Bar High Breakout', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3698(ind) { const aboveOpen = ind.close > ind.open && ind.close > (ind.prevOpen || ind.open); const match = aboveOpen && ind.priceChange > 0.5; return { id: 3698, name: 'Above Both Opens + 0.5%', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3699(ind) { const strongUp = ind.priceChange > 1 && (ind.prevPriceChange || 0) > 0; const match = Boolean(strongUp); return { id: 3699, name: '2-Bar Continuous Up 1%+', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3700(ind) { const momentum = ind.priceChange > 1.5 && ind.close > ind.ema20 && ind.rsi < 70; const match = Boolean(momentum); return { id: 3700, name: 'Strong Momentum + Not Overbought', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    
    // ==================== 조건 지???�간 기반 (3701-3800) ====================
    // ?�정 조건???�정 ?�간/�????�안 지?�된 ??변??감�?
    
    // --- RSI 지??조건 (3701-3720) ---
    
    /** RSI 과매??지?????�출 */
    static strategy3701(ind) { const oversoldBars = ind.rsiOversoldBars || 0; const match = oversoldBars >= 3 && ind.rsi >= 30 && ind.rsi < 40; return { id: 3701, name: 'RSI30 3-Bar Hold Exit', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3702(ind) { const oversoldBars = ind.rsiOversoldBars || 0; const match = oversoldBars >= 5 && ind.rsi >= 30 && ind.rsi < 45; return { id: 3702, name: 'RSI30 5-Bar Hold Exit', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3703(ind) { const oversoldBars = ind.rsiOversoldBars || 0; const match = oversoldBars >= 7 && ind.rsi >= 30; return { id: 3703, name: 'RSI30 7-Bar Hold Exit', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy3704(ind) { const deepOversoldBars = ind.rsiDeepOversoldBars || 0; const match = deepOversoldBars >= 2 && ind.rsi >= 25 && ind.rsi < 35; return { id: 3704, name: 'RSI25 2-Bar Deep Hold Exit', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3705(ind) { const deepOversoldBars = ind.rsiDeepOversoldBars || 0; const match = deepOversoldBars >= 3 && ind.rsi >= 25; return { id: 3705, name: 'RSI25 3-Bar Deep Hold Exit', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy3706(ind) { const deepOversoldBars = ind.rsiDeepOversoldBars || 0; const match = deepOversoldBars >= 5 && ind.rsi >= 25; return { id: 3706, name: 'RSI25 5-Bar Deep Hold Exit', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy3707(ind) { const extremeOversoldBars = ind.rsiExtremeOversoldBars || 0; const match = extremeOversoldBars >= 2 && ind.rsi >= 20; return { id: 3707, name: 'RSI20 2-Bar Extreme Exit', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy3708(ind) { const extremeOversoldBars = ind.rsiExtremeOversoldBars || 0; const match = extremeOversoldBars >= 3 && ind.rsi >= 20; return { id: 3708, name: 'RSI20 3-Bar Extreme Exit', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    
    /** RSI ?�보 ???�승 */
    static strategy3709(ind) { const flatBars = ind.rsiFlatBars || 0; const match = flatBars >= 3 && ind.rsi > (ind.prevRsi || ind.rsi) + 3; return { id: 3709, name: 'RSI 3-Bar Flat Then Rise', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3710(ind) { const flatBars = ind.rsiFlatBars || 0; const match = flatBars >= 5 && ind.rsi > (ind.prevRsi || ind.rsi) + 5; return { id: 3710, name: 'RSI 5-Bar Flat Then Rise', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3711(ind) { const below50Bars = ind.rsiBelow50Bars || 0; const match = below50Bars >= 5 && ind.rsi >= 50 && ind.rsi < 55; return { id: 3711, name: 'RSI 5-Bar Below50 Then Cross', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy3712(ind) { const below50Bars = ind.rsiBelow50Bars || 0; const match = below50Bars >= 10 && ind.rsi >= 50; return { id: 3712, name: 'RSI 10-Bar Below50 Then Cross', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy3713(ind) { const risingBars = ind.rsiRisingBars || 0; const match = risingBars >= 3 && ind.rsi < 60; return { id: 3713, name: 'RSI 3-Bar Consistent Rise', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy3714(ind) { const risingBars = ind.rsiRisingBars || 0; const match = risingBars >= 5 && ind.rsi < 65; return { id: 3714, name: 'RSI 5-Bar Consistent Rise', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    
    /** RSI ?�정 범위 지??*/
    static strategy3715(ind) { const neutralBars = ind.rsiNeutralBars || 0; const match = neutralBars >= 3 && ind.rsi > 55; return { id: 3715, name: 'RSI 3-Bar Neutral Then Break Up', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 }; }
    static strategy3716(ind) { const neutralBars = ind.rsiNeutralBars || 0; const match = neutralBars >= 5 && ind.rsi > 55 && ind.rsi < 70; return { id: 3716, name: 'RSI 5-Bar Neutral Then Break Up', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3717(ind) { const accumulationBars = ind.rsiAccumulationBars || 0; const match = accumulationBars >= 5 && ind.rsi > 45 && ind.rsi < 55 && ind.priceChange > 0.5; return { id: 3717, name: 'RSI 5-Bar Accumulation + Price Up', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy3718(ind) { const lowRangeBars = ind.rsiLowRangeBars || 0; const match = lowRangeBars >= 3 && ind.rsi > 40 && ind.rsi < 50; return { id: 3718, name: 'RSI 3-Bar Low Range Exit', direction: 'UP', match: Boolean(match), confidence: match ? 67 : 0 }; }
    static strategy3719(ind) { const lowRangeBars = ind.rsiLowRangeBars || 0; const match = lowRangeBars >= 5 && ind.rsi > 40; return { id: 3719, name: 'RSI 5-Bar Low Range Exit', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy3720(ind) { const oversoldBars = ind.rsiOversoldBars || 0; const match = oversoldBars >= 3 && ind.rsi >= 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 3720, name: 'RSI 3-Bar Oversold Exit + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    
    // --- MACD 지??조건 (3721-3740) ---
    
    /** MACD ?�수 지?????�복 */
    static strategy3721(ind) { const negBars = ind.macdNegativeBars || 0; const match = negBars >= 5 && ind.macd?.MACD >= 0; return { id: 3721, name: 'MACD 5-Bar Negative Then Cross 0', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3722(ind) { const negBars = ind.macdNegativeBars || 0; const match = negBars >= 10 && ind.macd?.MACD >= 0; return { id: 3722, name: 'MACD 10-Bar Negative Then Cross 0', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3723(ind) { const negBars = ind.macdNegativeBars || 0; const match = negBars >= 15 && ind.macd?.MACD >= 0; return { id: 3723, name: 'MACD 15-Bar Negative Then Cross 0', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy3724(ind) { const deepNegBars = ind.macdDeepNegativeBars || 0; const match = deepNegBars >= 3 && ind.macd?.MACD > -50; return { id: 3724, name: 'MACD 3-Bar Deep Neg Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3725(ind) { const deepNegBars = ind.macdDeepNegativeBars || 0; const match = deepNegBars >= 5 && ind.macd?.MACD > -30; return { id: 3725, name: 'MACD 5-Bar Deep Neg Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    
    /** MACD ?�스?�그??지??조건 */
    static strategy3726(ind) { const histNegBars = ind.macdHistNegativeBars || 0; const match = histNegBars >= 5 && ind.macd?.histogram >= 0; return { id: 3726, name: 'MACD Hist 5-Bar Neg Then Cross', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3727(ind) { const histNegBars = ind.macdHistNegativeBars || 0; const match = histNegBars >= 10 && ind.macd?.histogram >= 0; return { id: 3727, name: 'MACD Hist 10-Bar Neg Then Cross', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3728(ind) { const histRisingBars = ind.macdHistRisingBars || 0; const match = histRisingBars >= 3 && ind.macd?.histogram < 0; return { id: 3728, name: 'MACD Hist 3-Bar Rising in Neg', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy3729(ind) { const histRisingBars = ind.macdHistRisingBars || 0; const match = histRisingBars >= 5 && ind.macd?.histogram < 10; return { id: 3729, name: 'MACD Hist 5-Bar Consistent Rise', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3730(ind) { const histPositiveBars = ind.macdHistPositiveBars || 0; const match = histPositiveBars >= 3 && ind.macd?.histogram > 10; return { id: 3730, name: 'MACD Hist 3-Bar Positive Confirmed', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    
    /** MACD 골든?�로??지??*/
    static strategy3731(ind) { const goldenBars = ind.macdGoldenBars || 0; const match = goldenBars >= 2 && ind.macd?.MACD > ind.macd?.signal; return { id: 3731, name: 'MACD Golden 2-Bar Hold', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy3732(ind) { const goldenBars = ind.macdGoldenBars || 0; const match = goldenBars >= 3 && ind.macd?.histogram > 0; return { id: 3732, name: 'MACD Golden 3-Bar + Hist+', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3733(ind) { const goldenBars = ind.macdGoldenBars || 0; const match = goldenBars >= 5 && ind.macd?.MACD > 0; return { id: 3733, name: 'MACD Golden 5-Bar + Above 0', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3734(ind) { const freshGolden = (ind.macdGoldenBars || 0) === 1; const match = freshGolden && ind.macd?.MACD < 0; return { id: 3734, name: 'MACD Fresh Golden Below 0', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3735(ind) { const freshGolden = (ind.macdGoldenBars || 0) === 1; const match = freshGolden && ind.macd?.histogram > 5; return { id: 3735, name: 'MACD Fresh Golden + Strong Hist', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    
    /** MACD ?�렴 ??발산 */
    static strategy3736(ind) { const convergeBars = ind.macdConvergeBars || 0; const match = convergeBars >= 3 && Math.abs(ind.macd?.MACD - ind.macd?.signal) > 10; return { id: 3736, name: 'MACD 3-Bar Converge Then Diverge', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy3737(ind) { const convergeBars = ind.macdConvergeBars || 0; const match = convergeBars >= 5 && ind.macd?.MACD > ind.macd?.signal; return { id: 3737, name: 'MACD 5-Bar Converge Then Golden', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3738(ind) { const flatBars = ind.macdFlatBars || 0; const match = flatBars >= 5 && ind.macd?.histogram > 10; return { id: 3738, name: 'MACD 5-Bar Flat Then Breakout', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy3739(ind) { const negBars = ind.macdNegativeBars || 0; const match = negBars >= 5 && ind.macd?.MACD >= 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 3739, name: 'MACD 5-Bar Neg Then Full Bull', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3740(ind) { const negBars = ind.macdNegativeBars || 0; const match = negBars >= 10 && ind.macd?.MACD >= 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 10; return { id: 3740, name: 'MACD 10-Bar Neg Full Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    // --- BB 지??조건 (3741-3760) ---
    
    /** BB ?�단 지?????�출 */
    static strategy3741(ind) { const lowerBars = ind.bbLowerBars || 0; const match = lowerBars >= 2 && ind.bollingerBands?.position >= 20; return { id: 3741, name: 'BB 2-Bar Lower Exit', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3742(ind) { const lowerBars = ind.bbLowerBars || 0; const match = lowerBars >= 3 && ind.bollingerBands?.position >= 20; return { id: 3742, name: 'BB 3-Bar Lower Exit', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3743(ind) { const lowerBars = ind.bbLowerBars || 0; const match = lowerBars >= 5 && ind.bollingerBands?.position >= 25; return { id: 3743, name: 'BB 5-Bar Lower Exit', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3744(ind) { const extremeLowerBars = ind.bbExtremeLowerBars || 0; const match = extremeLowerBars >= 2 && ind.bollingerBands?.position >= 15; return { id: 3744, name: 'BB 2-Bar Extreme Lower Exit', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3745(ind) { const extremeLowerBars = ind.bbExtremeLowerBars || 0; const match = extremeLowerBars >= 3 && ind.bollingerBands?.position >= 20; return { id: 3745, name: 'BB 3-Bar Extreme Lower Exit', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    
    /** BB ?�퀴즈 지?????�파 */
    static strategy3746(ind) { const squeezeBars = ind.bbSqueezeBars || 0; const match = squeezeBars >= 3 && ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.position > 50; return { id: 3746, name: 'BB 3-Bar Squeeze Break Up', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3747(ind) { const squeezeBars = ind.bbSqueezeBars || 0; const match = squeezeBars >= 5 && ind.bollingerBands?.bandwidth >= 2 && ind.close > ind.open; return { id: 3747, name: 'BB 5-Bar Squeeze Break + Green', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy3748(ind) { const squeezeBars = ind.bbSqueezeBars || 0; const match = squeezeBars >= 7 && ind.bollingerBands?.bandwidth >= 2.5; return { id: 3748, name: 'BB 7-Bar Squeeze Release', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3749(ind) { const extremeSqueezeBars = ind.bbExtremeSqueezeBars || 0; const match = extremeSqueezeBars >= 3 && ind.bollingerBands?.bandwidth >= 1.5; return { id: 3749, name: 'BB 3-Bar Extreme Squeeze Release', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3750(ind) { const extremeSqueezeBars = ind.bbExtremeSqueezeBars || 0; const match = extremeSqueezeBars >= 5 && ind.bollingerBands?.bandwidth >= 2; return { id: 3750, name: 'BB 5-Bar Extreme Squeeze Release', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    /** BB 중간??지??조건 */
    static strategy3751(ind) { const belowMidBars = ind.bbBelowMidBars || 0; const match = belowMidBars >= 5 && ind.bollingerBands?.position >= 50; return { id: 3751, name: 'BB 5-Bar Below Mid Then Cross', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy3752(ind) { const belowMidBars = ind.bbBelowMidBars || 0; const match = belowMidBars >= 10 && ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position < 60; return { id: 3752, name: 'BB 10-Bar Below Mid Then Cross', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy3753(ind) { const aboveMidBars = ind.bbAboveMidBars || 0; const match = aboveMidBars >= 3 && ind.bollingerBands?.position > 55; return { id: 3753, name: 'BB 3-Bar Above Mid Holding', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy3754(ind) { const aboveMidBars = ind.bbAboveMidBars || 0; const match = aboveMidBars >= 5 && ind.bollingerBands?.position > 60; return { id: 3754, name: 'BB 5-Bar Above Mid Strong Hold', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3755(ind) { const nearMidBars = ind.bbNearMidBars || 0; const match = nearMidBars >= 3 && ind.bollingerBands?.position > 55; return { id: 3755, name: 'BB 3-Bar Near Mid Then Break Up', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    
    /** BB 밴드??지??조건 */
    static strategy3756(ind) { const narrowBars = ind.bbNarrowBars || 0; const match = narrowBars >= 5 && ind.bollingerBands?.bandwidth > 3; return { id: 3756, name: 'BB 5-Bar Narrow Then Expand', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3757(ind) { const narrowBars = ind.bbNarrowBars || 0; const match = narrowBars >= 5 && ind.bollingerBands?.bandwidth > 3 && ind.close > ind.open; return { id: 3757, name: 'BB 5-Bar Narrow Expand + Green', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3758(ind) { const expandingBars = ind.bbExpandingBars || 0; const match = expandingBars >= 3 && ind.bollingerBands?.position > 50; return { id: 3758, name: 'BB 3-Bar Expanding Upper Half', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy3759(ind) { const lowerBars = ind.bbLowerBars || 0; const match = lowerBars >= 3 && ind.bollingerBands?.position >= 25 && ind.rsi < 40; return { id: 3759, name: 'BB 3-Bar Lower Exit + RSI Low', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy3760(ind) { const lowerBars = ind.bbLowerBars || 0; const match = lowerBars >= 5 && ind.bollingerBands?.position >= 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 3760, name: 'BB 5-Bar Lower Exit + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    // --- 복합 지??조건 (3761-3780) ---
    
    /** RSI + BB 지??복합 */
    static strategy3761(ind) { const rsiLow = ind.rsiOversoldBars || 0; const bbLow = ind.bbLowerBars || 0; const match = rsiLow >= 2 && bbLow >= 2 && ind.rsi >= 30 && ind.bollingerBands?.position >= 20; return { id: 3761, name: 'RSI + BB 2-Bar Low Exit', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy3762(ind) { const rsiLow = ind.rsiOversoldBars || 0; const bbLow = ind.bbLowerBars || 0; const match = rsiLow >= 3 && bbLow >= 3 && ind.rsi >= 30 && ind.bollingerBands?.position >= 25; return { id: 3762, name: 'RSI + BB 3-Bar Low Exit', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy3763(ind) { const rsiLow = ind.rsiOversoldBars || 0; const bbLow = ind.bbLowerBars || 0; const match = rsiLow >= 5 && bbLow >= 5 && ind.rsi >= 35 && ind.bollingerBands?.position >= 30; return { id: 3763, name: 'RSI + BB 5-Bar Low Strong Exit', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    
    /** RSI + MACD 지??복합 */
    static strategy3764(ind) { const rsiLow = ind.rsiOversoldBars || 0; const macdNeg = ind.macdNegativeBars || 0; const match = rsiLow >= 3 && macdNeg >= 3 && ind.rsi >= 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 3764, name: 'RSI + MACD 3-Bar Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy3765(ind) { const rsiLow = ind.rsiOversoldBars || 0; const macdNeg = ind.macdNegativeBars || 0; const match = rsiLow >= 5 && macdNeg >= 5 && ind.rsi >= 35 && ind.macd?.MACD >= 0; return { id: 3765, name: 'RSI + MACD 5-Bar Full Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy3766(ind) { const rsiRising = ind.rsiRisingBars || 0; const macdGolden = ind.macdGoldenBars || 0; const match = rsiRising >= 3 && macdGolden >= 2; return { id: 3766, name: 'RSI Rising + MACD Golden Hold', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    
    /** MACD + BB 지??복합 */
    static strategy3767(ind) { const macdNeg = ind.macdNegativeBars || 0; const bbLow = ind.bbLowerBars || 0; const match = macdNeg >= 3 && bbLow >= 2 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position >= 20; return { id: 3767, name: 'MACD + BB Recovery Signal', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy3768(ind) { const macdNeg = ind.macdNegativeBars || 0; const squeeze = ind.bbSqueezeBars || 0; const match = macdNeg >= 5 && squeeze >= 3 && ind.macd?.MACD >= 0 && ind.bollingerBands?.bandwidth >= 2; return { id: 3768, name: 'MACD Recovery + BB Squeeze Release', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy3769(ind) { const histRising = ind.macdHistRisingBars || 0; const bbLow = ind.bbLowerBars || 0; const match = histRising >= 3 && bbLow >= 2 && ind.bollingerBands?.position >= 25; return { id: 3769, name: 'MACD Hist Rising + BB Low Exit', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    /** 3�?지??복합 */
    static strategy3770(ind) { const rsiLow = ind.rsiOversoldBars || 0; const macdNeg = ind.macdNegativeBars || 0; const bbLow = ind.bbLowerBars || 0; const match = rsiLow >= 2 && macdNeg >= 2 && bbLow >= 2 && ind.rsi >= 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position >= 20; return { id: 3770, name: 'Triple 2-Bar Low Exit', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy3771(ind) { const rsiLow = ind.rsiOversoldBars || 0; const macdNeg = ind.macdNegativeBars || 0; const bbLow = ind.bbLowerBars || 0; const match = rsiLow >= 3 && macdNeg >= 3 && bbLow >= 3 && ind.rsi >= 35 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position >= 25; return { id: 3771, name: 'Triple 3-Bar Low Exit', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy3772(ind) { const rsiLow = ind.rsiOversoldBars || 0; const macdNeg = ind.macdNegativeBars || 0; const bbLow = ind.bbLowerBars || 0; const match = rsiLow >= 5 && macdNeg >= 5 && bbLow >= 5 && ind.rsi >= 40 && ind.macd?.MACD >= 0 && ind.bollingerBands?.position >= 30; return { id: 3772, name: 'Triple 5-Bar Strong Exit', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    
    /** EMA 지??+ 기�? */
    static strategy3773(ind) { const emaGolden = ind.emaGoldenBars || 0; const match = emaGolden >= 3 && ind.close > ind.ema20 && ind.rsi < 60; return { id: 3773, name: 'EMA 3-Bar Golden + Price Above', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy3774(ind) { const emaGolden = ind.emaGoldenBars || 0; const match = emaGolden >= 5 && ind.close > ind.ema20 && ind.macd?.MACD > ind.macd?.signal; return { id: 3774, name: 'EMA 5-Bar Golden + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy3775(ind) { const emaGolden = ind.emaGoldenBars || 0; const rsiRising = ind.rsiRisingBars || 0; const match = emaGolden >= 3 && rsiRising >= 2 && ind.close > ind.ema20; return { id: 3775, name: 'EMA Golden + RSI Rising', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy3776(ind) { const smaDead = ind.smaDeadBars || 0; const match = smaDead >= 5 && ind.sma20 > ind.sma50; return { id: 3776, name: 'SMA 5-Bar Dead Then Golden', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy3777(ind) { const allGolden = ind.allMAGoldenBars || 0; const match = allGolden >= 3 && ind.close > ind.ema20; return { id: 3777, name: 'All MA 3-Bar Golden Hold', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy3778(ind) { const allGolden = ind.allMAGoldenBars || 0; const match = allGolden >= 5 && ind.close > ind.ema20 && ind.priceChange > 0; return { id: 3778, name: 'All MA 5-Bar Golden + Price Up', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    
    /** 가�??�션 지??*/
    static strategy3779(ind) { const greenBars = ind.greenStreak || 0; const match = greenBars >= 2 && ind.rsi < 65 && ind.close > ind.ema20; return { id: 3779, name: '2-Bar Green + RSI OK + EMA Above', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy3780(ind) { const greenBars = ind.greenStreak || 0; const match = greenBars >= 3 && ind.rsi < 70 && ind.macd?.MACD > ind.macd?.signal; return { id: 3780, name: '3-Bar Green + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    
    // --- Ultimate 지??조건 (3781-3800) ---
    
    /** ?�층 과매???�출 Ultimate */
    static strategy3781(ind) { const rsiDeep = ind.rsiDeepOversoldBars || 0; const bbExtreme = ind.bbExtremeLowerBars || 0; const match = rsiDeep >= 2 && bbExtreme >= 2 && ind.rsi >= 28 && ind.bollingerBands?.position >= 18 && ind.macd?.MACD > ind.macd?.signal; return { id: 3781, name: 'Deep Oversold 2-Bar Triple Exit', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy3782(ind) { const rsiDeep = ind.rsiDeepOversoldBars || 0; const bbExtreme = ind.bbExtremeLowerBars || 0; const match = rsiDeep >= 3 && bbExtreme >= 3 && ind.rsi >= 30 && ind.bollingerBands?.position >= 22 && ind.macd?.MACD > ind.macd?.signal; return { id: 3782, name: 'Deep Oversold 3-Bar Triple Exit', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy3783(ind) { const rsiExtreme = ind.rsiExtremeOversoldBars || 0; const macdDeep = ind.macdDeepNegativeBars || 0; const match = rsiExtreme >= 2 && macdDeep >= 2 && ind.rsi >= 23 && ind.macd?.MACD > -30; return { id: 3783, name: 'Extreme Oversold Double Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** ?�기 ?�보 ???�파 */
    static strategy3784(ind) { const flatBars = ind.priceFlatBars || 0; const match = flatBars >= 10 && ind.priceChange > 1 && ind.close > ind.open; return { id: 3784, name: '10-Bar Flat Then 1% Breakout', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy3785(ind) { const flatBars = ind.priceFlatBars || 0; const match = flatBars >= 15 && ind.priceChange > 1.5 && ind.rsi < 70; return { id: 3785, name: '15-Bar Flat Then 1.5% Breakout', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy3786(ind) { const squeeze = ind.bbSqueezeBars || 0; const flat = ind.rsiFlatBars || 0; const match = squeeze >= 5 && flat >= 5 && ind.bollingerBands?.bandwidth >= 2.5 && ind.rsi > 50; return { id: 3786, name: 'Double Flat Squeeze Release Up', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    
    /** ?�적 지??조건 */
    static strategy3787(ind) { const below50Total = ind.rsiBelow50Bars || 0; const match = below50Total >= 15 && ind.rsi >= 50 && ind.rsi < 55 && ind.macd?.MACD > ind.macd?.signal; return { id: 3787, name: 'RSI 15-Bar Accumulation Break + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy3788(ind) { const negTotal = ind.macdNegativeBars || 0; const match = negTotal >= 20 && ind.macd?.MACD >= 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 10; return { id: 3788, name: 'MACD 20-Bar Neg Full Bull Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy3789(ind) { const belowMid = ind.bbBelowMidBars || 0; const match = belowMid >= 15 && ind.bollingerBands?.position > 55 && ind.close > ind.open; return { id: 3789, name: 'BB 15-Bar Below Mid Strong Break', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    
    /** 복합 Ultimate */
    static strategy3790(ind) { const rsiLow = ind.rsiOversoldBars || 0; const macdNeg = ind.macdNegativeBars || 0; const bbLow = ind.bbLowerBars || 0; const emaGolden = ind.emaGoldenBars || 0; const match = rsiLow >= 3 && macdNeg >= 3 && bbLow >= 3 && emaGolden >= 1 && ind.rsi >= 35 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position >= 30; return { id: 3790, name: 'Quad 3-Bar Low + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy3791(ind) { const rsiLow = ind.rsiOversoldBars || 0; const macdNeg = ind.macdNegativeBars || 0; const bbLow = ind.bbLowerBars || 0; const match = rsiLow >= 5 && macdNeg >= 5 && bbLow >= 5 && ind.rsi >= 40 && ind.macd?.MACD >= 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position >= 35 && ind.close > ind.ema20; return { id: 3791, name: 'Triple 5-Bar + Price Above EMA', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    static strategy3792(ind) { const rsiDeep = ind.rsiDeepOversoldBars || 0; const macdDeep = ind.macdDeepNegativeBars || 0; const bbExtreme = ind.bbExtremeLowerBars || 0; const match = rsiDeep >= 3 && macdDeep >= 3 && bbExtreme >= 3 && ind.rsi >= 32 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position >= 25; return { id: 3792, name: 'Triple Deep 3-Bar Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    
    /** ?�간 기반 Ultimate */
    static strategy3793(ind) { const totalLowBars = (ind.rsiOversoldBars || 0) + (ind.bbLowerBars || 0); const match = totalLowBars >= 8 && ind.rsi >= 35 && ind.bollingerBands?.position >= 30 && ind.priceChange > 0.5; return { id: 3793, name: 'Combined 8-Bar Low Exit + Price Up', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy3794(ind) { const totalLowBars = (ind.rsiOversoldBars || 0) + (ind.bbLowerBars || 0) + (ind.macdNegativeBars || 0); const match = totalLowBars >= 12 && ind.rsi >= 40 && ind.bollingerBands?.position >= 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 3794, name: 'Combined 12-Bar Total Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy3795(ind) { const risingBars = (ind.rsiRisingBars || 0) + (ind.macdHistRisingBars || 0); const match = risingBars >= 6 && ind.rsi < 60 && ind.macd?.histogram > 0; return { id: 3795, name: 'Combined 6-Bar Rising Momentum', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    
    /** Final Ultimate Strategies */
    static strategy3796(ind) { const rsiLow = ind.rsiOversoldBars || 0; const macdNeg = ind.macdNegativeBars || 0; const bbLow = ind.bbLowerBars || 0; const squeeze = ind.bbSqueezeBars || 0; const match = rsiLow >= 3 && macdNeg >= 3 && bbLow >= 2 && squeeze >= 2 && ind.rsi >= 35 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position >= 30 && ind.bollingerBands?.bandwidth >= 2.5; return { id: 3796, name: 'Multi-Signal Squeeze Release', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy3797(ind) { const rsiLow = ind.rsiDeepOversoldBars || 0; const macdNeg = ind.macdDeepNegativeBars || 0; const match = rsiLow >= 3 && macdNeg >= 3 && ind.rsi >= 30 && ind.macd?.MACD > -20 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.open && ind.priceChange > 1; return { id: 3797, name: 'Deep Recovery + Strong Price Action', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy3798(ind) { const allBarsLow = (ind.rsiOversoldBars || 0) >= 5 && (ind.macdNegativeBars || 0) >= 5 && (ind.bbLowerBars || 0) >= 5; const recovered = ind.rsi >= 45 && ind.macd?.MACD >= 0 && ind.bollingerBands?.position >= 40; const match = allBarsLow && recovered && ind.close > ind.ema20; return { id: 3798, name: '5-Bar All Low Full Recovery + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    static strategy3799(ind) { const extremeCondition = (ind.rsiExtremeOversoldBars || 0) >= 2 && (ind.bbExtremeLowerBars || 0) >= 2 && (ind.macdDeepNegativeBars || 0) >= 2; const strongRecovery = ind.rsi >= 35 && ind.bollingerBands?.position >= 30 && ind.macd?.MACD > ind.macd?.signal && ind.priceChange > 1.5; const match = extremeCondition && strongRecovery; return { id: 3799, name: 'Extreme 2-Bar + Strong Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    static strategy3800(ind) { const extremeCondition = (ind.rsiExtremeOversoldBars || 0) >= 3 && (ind.bbExtremeLowerBars || 0) >= 3 && (ind.macdDeepNegativeBars || 0) >= 3; const fullRecovery = ind.rsi >= 40 && ind.bollingerBands?.position >= 40 && ind.macd?.MACD >= 0 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.priceChange > 2; const match = extremeCondition && fullRecovery; return { id: 3800, name: 'Ultimate Duration-Based Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 98 : 0 }; }

    /** 모든 ?�략 ?�행 (3601-3800) */
    static analyzeAll(indicators) {
        return [
            this.strategy3601(indicators), this.strategy3602(indicators), this.strategy3603(indicators),
            this.strategy3604(indicators), this.strategy3605(indicators), this.strategy3606(indicators),
            this.strategy3607(indicators), this.strategy3608(indicators), this.strategy3609(indicators),
            this.strategy3610(indicators), this.strategy3611(indicators), this.strategy3612(indicators),
            this.strategy3613(indicators), this.strategy3614(indicators), this.strategy3615(indicators),
            this.strategy3616(indicators), this.strategy3617(indicators), this.strategy3618(indicators),
            this.strategy3619(indicators), this.strategy3620(indicators), this.strategy3621(indicators),
            this.strategy3622(indicators), this.strategy3623(indicators), this.strategy3624(indicators),
            this.strategy3625(indicators), this.strategy3626(indicators), this.strategy3627(indicators),
            this.strategy3628(indicators), this.strategy3629(indicators), this.strategy3630(indicators),
            this.strategy3631(indicators), this.strategy3632(indicators), this.strategy3633(indicators),
            this.strategy3634(indicators), this.strategy3635(indicators), this.strategy3636(indicators),
            this.strategy3637(indicators), this.strategy3638(indicators), this.strategy3639(indicators),
            this.strategy3640(indicators), this.strategy3641(indicators), this.strategy3642(indicators),
            this.strategy3643(indicators), this.strategy3644(indicators), this.strategy3645(indicators),
            this.strategy3646(indicators), this.strategy3647(indicators), this.strategy3648(indicators),
            this.strategy3649(indicators), this.strategy3650(indicators), this.strategy3651(indicators),
            this.strategy3652(indicators), this.strategy3653(indicators), this.strategy3654(indicators),
            this.strategy3655(indicators), this.strategy3656(indicators), this.strategy3657(indicators),
            this.strategy3658(indicators), this.strategy3659(indicators), this.strategy3660(indicators),
            this.strategy3661(indicators), this.strategy3662(indicators), this.strategy3663(indicators),
            this.strategy3664(indicators), this.strategy3665(indicators), this.strategy3666(indicators),
            this.strategy3667(indicators), this.strategy3668(indicators), this.strategy3669(indicators),
            this.strategy3670(indicators), this.strategy3671(indicators), this.strategy3672(indicators),
            this.strategy3673(indicators), this.strategy3674(indicators), this.strategy3675(indicators),
            this.strategy3676(indicators), this.strategy3677(indicators), this.strategy3678(indicators),
            this.strategy3679(indicators), this.strategy3680(indicators), this.strategy3681(indicators),
            this.strategy3682(indicators), this.strategy3683(indicators), this.strategy3684(indicators),
            this.strategy3685(indicators), this.strategy3686(indicators), this.strategy3687(indicators),
            this.strategy3688(indicators), this.strategy3689(indicators), this.strategy3690(indicators),
            this.strategy3691(indicators), this.strategy3692(indicators), this.strategy3693(indicators),
            this.strategy3694(indicators), this.strategy3695(indicators), this.strategy3696(indicators),
            this.strategy3697(indicators), this.strategy3698(indicators), this.strategy3699(indicators),
            this.strategy3700(indicators), this.strategy3701(indicators), this.strategy3702(indicators),
            this.strategy3703(indicators), this.strategy3704(indicators), this.strategy3705(indicators),
            this.strategy3706(indicators), this.strategy3707(indicators), this.strategy3708(indicators),
            this.strategy3709(indicators), this.strategy3710(indicators), this.strategy3711(indicators),
            this.strategy3712(indicators), this.strategy3713(indicators), this.strategy3714(indicators),
            this.strategy3715(indicators), this.strategy3716(indicators), this.strategy3717(indicators),
            this.strategy3718(indicators), this.strategy3719(indicators), this.strategy3720(indicators),
            this.strategy3721(indicators), this.strategy3722(indicators), this.strategy3723(indicators),
            this.strategy3724(indicators), this.strategy3725(indicators), this.strategy3726(indicators),
            this.strategy3727(indicators), this.strategy3728(indicators), this.strategy3729(indicators),
            this.strategy3730(indicators), this.strategy3731(indicators), this.strategy3732(indicators),
            this.strategy3733(indicators), this.strategy3734(indicators), this.strategy3735(indicators),
            this.strategy3736(indicators), this.strategy3737(indicators), this.strategy3738(indicators),
            this.strategy3739(indicators), this.strategy3740(indicators), this.strategy3741(indicators),
            this.strategy3742(indicators), this.strategy3743(indicators), this.strategy3744(indicators),
            this.strategy3745(indicators), this.strategy3746(indicators), this.strategy3747(indicators),
            this.strategy3748(indicators), this.strategy3749(indicators), this.strategy3750(indicators),
            this.strategy3751(indicators), this.strategy3752(indicators), this.strategy3753(indicators),
            this.strategy3754(indicators), this.strategy3755(indicators), this.strategy3756(indicators),
            this.strategy3757(indicators), this.strategy3758(indicators), this.strategy3759(indicators),
            this.strategy3760(indicators), this.strategy3761(indicators), this.strategy3762(indicators),
            this.strategy3763(indicators), this.strategy3764(indicators), this.strategy3765(indicators),
            this.strategy3766(indicators), this.strategy3767(indicators), this.strategy3768(indicators),
            this.strategy3769(indicators), this.strategy3770(indicators), this.strategy3771(indicators),
            this.strategy3772(indicators), this.strategy3773(indicators), this.strategy3774(indicators),
            this.strategy3775(indicators), this.strategy3776(indicators), this.strategy3777(indicators),
            this.strategy3778(indicators), this.strategy3779(indicators), this.strategy3780(indicators),
            this.strategy3781(indicators), this.strategy3782(indicators), this.strategy3783(indicators),
            this.strategy3784(indicators), this.strategy3785(indicators), this.strategy3786(indicators),
            this.strategy3787(indicators), this.strategy3788(indicators), this.strategy3789(indicators),
            this.strategy3790(indicators), this.strategy3791(indicators), this.strategy3792(indicators),
            this.strategy3793(indicators), this.strategy3794(indicators), this.strategy3795(indicators),
            this.strategy3796(indicators), this.strategy3797(indicators), this.strategy3798(indicators),
            this.strategy3799(indicators), this.strategy3800(indicators)
        ];
    }
}


