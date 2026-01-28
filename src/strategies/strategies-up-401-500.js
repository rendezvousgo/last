/**
 * UP ?�략 ?�장 (ID: 401-600)
 * ATR, 볼륨, 가�??�턴 기반 ?�략
 */

export class StrategiesUp401 {
    
    // ==================== ATR 기반 (401-450) ====================
    
    /** ?�략 401: ATR ??�� (변?�성 축소) + MACD 골든 */
    static strategy401(ind) {
        const atrLow = ind.atrPercent < 1;
        const match = atrLow && ind.macd?.MACD > ind.macd?.signal;
        return { id: 401, name: 'Low ATR + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ?�략 402: ATR ??�� + EMA 골든 */
    static strategy402(ind) {
        const atrLow = ind.atrPercent < 1.2;
        const match = atrLow && ind.ema20 > ind.ema50;
        return { id: 402, name: 'Low ATR + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ?�략 403: ATR ??�� + BB ?�퀴즈 */
    static strategy403(ind) {
        const match = ind.atrPercent < 1 && ind.bollingerBands?.bandwidth < 2;
        return { id: 403, name: 'Low ATR + BB Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 };
    }
    
    /** ?�략 404: ATR ??�� + RSI 45-55 (축적) */
    static strategy404(ind) {
        const match = ind.atrPercent < 1.2 && ind.rsi >= 45 && ind.rsi <= 55;
        return { id: 404, name: 'Low ATR + RSI Neutral', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 };
    }
    
    /** ?�략 405: ATR 증�? + MACD 골든 (변?�성 ?�장 ?�작) */
    static strategy405(ind) {
        const atrRising = ind.atrPercent > (ind.prevAtrPercent || 0);
        const match = atrRising && ind.macd?.MACD > ind.macd?.signal && ind.rsi < 60;
        return { id: 405, name: 'Rising ATR + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 406: ATR 증�? + BB ?�장 + ?�단 방향 */
    static strategy406(ind) {
        const atrRising = ind.atrPercent > (ind.prevAtrPercent || 0);
        const match = atrRising && ind.bollingerBands?.bandwidth > 2 && ind.bollingerBands?.position > 50;
        return { id: 406, name: 'Rising ATR + BB Expansion Up', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 407: ATR 1-1.5% + EMA 골든 + RSI < 58 */
    static strategy407(ind) {
        const match = ind.atrPercent >= 1 && ind.atrPercent <= 1.5 && ind.ema20 > ind.ema50 && ind.rsi < 58;
        return { id: 407, name: 'Moderate ATR + EMA + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ?�략 408: ATR 1.5-2% + MACD hist > 10 */
    static strategy408(ind) {
        const match = ind.atrPercent >= 1.5 && ind.atrPercent <= 2 && ind.macd?.histogram > 10;
        return { id: 408, name: 'Good ATR + Strong MACD', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 409: ATR 2-3% + 추세 ?�인 (EMA + MACD) */
    static strategy409(ind) {
        const match = ind.atrPercent >= 2 && ind.atrPercent <= 3 && ind.ema20 > ind.ema50 && ind.macd?.histogram > 0;
        return { id: 409, name: 'Higher ATR + Trend Confirm', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 410: ATR > 3% + 강한 모멘?� */
    static strategy410(ind) {
        const match = ind.atrPercent > 3 && ind.macd?.histogram > 20 && ind.rsi >= 50 && ind.rsi <= 65;
        return { id: 410, name: 'High ATR + Strong Momentum', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 411: ATR < 0.8% + Stochastic 골든 */
    static strategy411(ind) {
        const match = ind.atrPercent < 0.8 && ind.stochastic?.k > ind.stochastic?.d;
        return { id: 411, name: 'Very Low ATR + Stoch Golden', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 };
    }
    
    /** ?�략 412: ATR < 1% + ADX < 20 (?�보 축적) */
    static strategy412(ind) {
        const match = ind.atrPercent < 1 && ind.adx?.adx < 20;
        return { id: 412, name: 'Low ATR + Low ADX', direction: 'UP', match: Boolean(match), confidence: match ? 64 : 0 };
    }
    
    /** ?�략 413: ATR 증�? + ADX > 25 */
    static strategy413(ind) {
        const atrRising = ind.atrPercent > (ind.prevAtrPercent || 0);
        const match = atrRising && ind.adx?.adx > 25;
        return { id: 413, name: 'Rising ATR + Strong ADX', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 414: ATR + ADX + +DI ?�승 */
    static strategy414(ind) {
        const atrRising = ind.atrPercent > (ind.prevAtrPercent || 0);
        const match = atrRising && ind.adx?.adx > 25 && ind.adx?.plusDI > ind.adx?.minusDI;
        return { id: 414, name: 'Rising ATR ADX DI', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 415: ??? ATR + RSI 과매??*/
    static strategy415(ind) {
        const match = ind.atrPercent < 1.5 && ind.rsi < 30;
        return { id: 415, name: 'Low ATR + RSI Oversold', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 416: ??? ATR + BB ?�단 */
    static strategy416(ind) {
        const match = ind.atrPercent < 1.5 && ind.bollingerBands?.position < 20;
        return { id: 416, name: 'Low ATR + BB Lower', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ?�략 417: ATR 증�? ?�작 + RSI 반등 */
    static strategy417(ind) {
        const atrRising = ind.atrPercent > (ind.prevAtrPercent || 0);
        const match = atrRising && ind.rsi >= 35 && ind.rsi <= 50;
        return { id: 417, name: 'ATR Rising + RSI Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ?�략 418: ATR 0.5-1% (매우 ??��) + 모든 MA 골든 */
    static strategy418(ind) {
        const match = ind.atrPercent >= 0.5 && ind.atrPercent <= 1 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50;
        return { id: 418, name: 'Very Low ATR + All MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ?�략 419: ATR + BB ?�시 ?�장 + ?�승 */
    static strategy419(ind) {
        const atrRising = ind.atrPercent > (ind.prevAtrPercent || 0);
        const bbExpanding = ind.bollingerBands?.bandwidth > 2.5;
        const match = atrRising && bbExpanding && ind.bollingerBands?.position > 55;
        return { id: 419, name: 'ATR BB Both Expanding Up', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 420: ATR + Stochastic + RSI 3�??�인 */
    static strategy420(ind) {
        const match = ind.atrPercent >= 1 && ind.atrPercent <= 2.5 && ind.stochastic?.k > ind.stochastic?.d && ind.rsi >= 45 && ind.rsi <= 58;
        return { id: 420, name: 'ATR Stoch RSI Triple', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    // ==================== 볼륨/거래??기반 (421-470) ====================
    
    /** ?�략 421: 볼륨 증�? + MACD 골든 */
    static strategy421(ind) {
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.2;
        const match = volUp && ind.macd?.MACD > ind.macd?.signal;
        return { id: 421, name: 'Volume Up + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 422: 볼륨 증�? + EMA 골든 */
    static strategy422(ind) {
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.3;
        const match = volUp && ind.ema20 > ind.ema50;
        return { id: 422, name: 'Volume Up + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 423: 볼륨 급증 (1.5�? + RSI < 60 */
    static strategy423(ind) {
        const volSpike = ind.volume > (ind.avgVolume || 0) * 1.5;
        const match = volSpike && ind.rsi < 60;
        return { id: 423, name: 'Volume Spike + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 424: 볼륨 급증 (2�? + 추세 ?�인 */
    static strategy424(ind) {
        const volSpike = ind.volume > (ind.avgVolume || 0) * 2;
        const match = volSpike && ind.ema20 > ind.ema50 && ind.macd?.histogram > 0;
        return { id: 424, name: 'Strong Volume Spike + Trend', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ?�략 425: 볼륨 증�? + BB ?�단 ?�파 */
    static strategy425(ind) {
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.3;
        const match = volUp && ind.bollingerBands?.position > 60;
        return { id: 425, name: 'Volume Up + BB Upper', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 426: 볼륨 증�? + Stochastic 골든 */
    static strategy426(ind) {
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.2;
        const match = volUp && ind.stochastic?.k > ind.stochastic?.d;
        return { id: 426, name: 'Volume Up + Stoch Golden', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 427: 볼륨 증�? + ADX > 25 + +DI */
    static strategy427(ind) {
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.2;
        const match = volUp && ind.adx?.adx > 25 && ind.adx?.plusDI > ind.adx?.minusDI;
        return { id: 427, name: 'Volume Up + ADX Strong', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 428: 볼륨 감소 + 가�??�정 (축적) */
    static strategy428(ind) {
        const volDown = ind.volume < (ind.avgVolume || 999999) * 0.8;
        const match = volDown && ind.bollingerBands?.bandwidth < 2 && ind.rsi >= 45 && ind.rsi <= 55;
        return { id: 428, name: 'Low Volume Accumulation', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 };
    }
    
    /** ?�략 429: 볼륨 급증 + RSI 과매???�출 */
    static strategy429(ind) {
        const volSpike = ind.volume > (ind.avgVolume || 0) * 1.5;
        const match = volSpike && ind.rsi >= 30 && ind.rsi <= 45;
        return { id: 429, name: 'Volume Spike + RSI Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 430: 볼륨 급증 + BB ?�단?�서 반등 */
    static strategy430(ind) {
        const volSpike = ind.volume > (ind.avgVolume || 0) * 1.5;
        const match = volSpike && ind.bollingerBands?.position < 30 && ind.bollingerBands?.position > 15;
        return { id: 430, name: 'Volume Spike + BB Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 431: 볼륨 + ATR ?�시 증�? */
    static strategy431(ind) {
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.3;
        const atrRising = ind.atrPercent > (ind.prevAtrPercent || 0);
        const match = volUp && atrRising;
        return { id: 431, name: 'Volume + ATR Both Rising', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 432: 볼륨 증�? + MACD ?�환 */
    static strategy432(ind) {
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.3;
        const match = volUp && ind.macd?.prevHistogram < 0 && ind.macd?.histogram > 0;
        return { id: 432, name: 'Volume Up + MACD Turn', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 433: 볼륨 1.2-1.5�?+ 중립 RSI */
    static strategy433(ind) {
        const volMod = ind.volume > (ind.avgVolume || 0) * 1.2 && ind.volume < (ind.avgVolume || 0) * 1.5;
        const match = volMod && ind.rsi >= 45 && ind.rsi <= 55;
        return { id: 433, name: 'Moderate Volume + Neutral RSI', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ?�략 434: 볼륨 1.5-2�?+ EMA 골든 + RSI < 60 */
    static strategy434(ind) {
        const volGood = ind.volume > (ind.avgVolume || 0) * 1.5 && ind.volume < (ind.avgVolume || 0) * 2;
        const match = volGood && ind.ema20 > ind.ema50 && ind.rsi < 60;
        return { id: 434, name: 'Good Volume + EMA + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 435: 볼륨 > 2�?+ 강한 추세 ?�호 */
    static strategy435(ind) {
        const volStrong = ind.volume > (ind.avgVolume || 0) * 2;
        const match = volStrong && ind.macd?.histogram > 15 && ind.ema20 > ind.ema50;
        return { id: 435, name: 'Strong Volume + Strong Trend', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ?�략 436: 볼륨 + Stochastic + MACD 3�?*/
    static strategy436(ind) {
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.2;
        const match = volUp && ind.stochastic?.k > ind.stochastic?.d && ind.macd?.MACD > ind.macd?.signal;
        return { id: 436, name: 'Volume + Stoch + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 437: 볼륨 증�? + RSI 50 ?�파 */
    static strategy437(ind) {
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.2;
        const match = volUp && ind.rsi >= 50 && ind.rsi <= 55;
        return { id: 437, name: 'Volume Up + RSI 50 Break', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 438: 볼륨 증�? + BB 중간 ?�파 */
    static strategy438(ind) {
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.2;
        const match = volUp && ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 58;
        return { id: 438, name: 'Volume Up + BB Mid Break', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ?�략 439: 볼륨 급증 + 모든 골든 */
    static strategy439(ind) {
        const volSpike = ind.volume > (ind.avgVolume || 0) * 1.5;
        const allGolden = ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal && ind.stochastic?.k > ind.stochastic?.d;
        const match = volSpike && allGolden;
        return { id: 439, name: 'Volume Spike + All Golden', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ?�략 440: 볼륨 + 가�?> MA20 + MA50 */
    static strategy440(ind) {
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.2;
        const match = volUp && ind.price > ind.ema20 && ind.price > ind.ema50;
        return { id: 440, name: 'Volume Up + Price Above MA', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    // ==================== 가�??�턴 기반 (441-500) ====================
    
    /** ?�략 441: 가�?EMA20 ??+ EMA50 ??+ MACD > 0 */
    static strategy441(ind) {
        const match = ind.price > ind.ema20 && ind.price > ind.ema50 && ind.macd?.histogram > 0;
        return { id: 441, name: 'Price Above All + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 442: 가�?SMA20 ?�치 지지 + EMA 골든 */
    static strategy442(ind) {
        const nearSMA = ind.sma20 ? Math.abs(ind.price - ind.sma20) / ind.sma20 < 0.003 : false;
        const match = nearSMA && ind.ema20 > ind.ema50;
        return { id: 442, name: 'Price SMA20 Support + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ?�략 443: 가�?BB ?�단 근접 + RSI < 35 + Stochastic ?�인 */
    static strategy443(ind) {
        const match = ind.bollingerBands?.position < 15 && ind.rsi < 35 && ind.stochastic?.k < 35;
        return { id: 443, name: 'Price Near BB Lower + RSI + Stoch', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ?�략 444: 가�?BB 중간 ?�파 + MACD ?�환 */
    static strategy444(ind) {
        const match = ind.bollingerBands?.position >= 48 && ind.bollingerBands?.position <= 55 && ind.macd?.prevHistogram < 0 && ind.macd?.histogram > 0;
        return { id: 444, name: 'Price BB Mid + MACD Turn', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 445: 가�?EMA20 ?�래?�서 ?�치 ??반등 */
    static strategy445(ind) {
        const nearEMA = ind.ema20 ? Math.abs(ind.price - ind.ema20) / ind.ema20 < 0.005 : false;
        const match = nearEMA && ind.price >= ind.ema20 && ind.macd?.histogram > 0;
        return { id: 445, name: 'Price EMA20 Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 446: 가�?EMA50 ?�래?�서 ?�치 ??반등 */
    static strategy446(ind) {
        const nearEMA50 = ind.ema50 ? Math.abs(ind.price - ind.ema50) / ind.ema50 < 0.005 : false;
        const match = nearEMA50 && ind.price >= ind.ema50 && ind.rsi < 55;
        return { id: 446, name: 'Price EMA50 Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ?�략 447: 가�?> 모든 MA + RSI 50-62 */
    static strategy447(ind) {
        const aboveAll = ind.price > ind.ema20 && ind.price > ind.ema50 && ind.price > ind.sma20 && ind.price > ind.sma50;
        const match = aboveAll && ind.rsi >= 50 && ind.rsi <= 62;
        return { id: 447, name: 'Price Above All MA + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 448: 가�?0.5% ?�승 + 볼륨 증�? */
    static strategy448(ind) {
        const priceUp = ind.priceChange > 0.5;
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.2;
        const match = priceUp && volUp;
        return { id: 448, name: 'Price Up + Volume Up', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ?�략 449: 가�?1% ?�승 + MACD > 0 + RSI < 65 */
    static strategy449(ind) {
        const priceUp = ind.priceChange > 1;
        const match = priceUp && ind.macd?.histogram > 0 && ind.rsi < 65;
        return { id: 449, name: 'Price Strong Up + MACD RSI', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 450: 가�?BB ?�단 70% ?�상 + 추세 ?�인 */
    static strategy450(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.ema20 > ind.ema50 && ind.rsi < 70;
        return { id: 450, name: 'Price BB Upper + Trend', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    // ==================== 복합 지??조합 (451-500) ====================
    
    /** ?�략 451: RSI + Stochastic + MACD + EMA 4�?*/
    static strategy451(ind) {
        const match = ind.rsi >= 45 && ind.rsi <= 60 && ind.stochastic?.k > ind.stochastic?.d &&
                     ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50;
        return { id: 451, name: 'Quad Signal RSI Stoch MACD EMA', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ?�략 452: RSI + BB + ATR + 볼륨 4�?*/
    static strategy452(ind) {
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.2;
        const match = ind.rsi >= 45 && ind.rsi <= 58 && ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 65 &&
                     ind.atrPercent >= 1 && ind.atrPercent <= 2.5 && volUp;
        return { id: 452, name: 'Quad Signal RSI BB ATR Vol', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ?�략 453: ADX + DI + Stochastic + MACD 4�?*/
    static strategy453(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.plusDI > ind.adx?.minusDI &&
                     ind.stochastic?.k > ind.stochastic?.d && ind.macd?.histogram > 10;
        return { id: 453, name: 'Quad Signal ADX DI Stoch MACD', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ?�략 454: 5�?골든 (EMA + SMA + MACD + Stochastic + ADX) */
    static strategy454(ind) {
        const allGolden = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.macd?.MACD > ind.macd?.signal &&
                        ind.stochastic?.k > ind.stochastic?.d && ind.adx?.plusDI > ind.adx?.minusDI;
        const match = Boolean(allGolden);
        return { id: 454, name: 'Penta Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ?�략 455: 5�?골든 + RSI ?�인 */
    static strategy455(ind) {
        const allGolden = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.macd?.MACD > ind.macd?.signal &&
                        ind.stochastic?.k > ind.stochastic?.d && ind.adx?.plusDI > ind.adx?.minusDI;
        const match = allGolden && ind.rsi >= 45 && ind.rsi <= 62;
        return { id: 455, name: 'Penta Golden + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ?�략 456: ?�체 과매??반등 (RSI + Stochastic + BB) */
    static strategy456(ind) {
        const allOversold = ind.rsi < 30 && ind.stochastic?.k < 20 && ind.bollingerBands?.position < 15;
        const match = Boolean(allOversold);
        return { id: 456, name: 'Triple Extreme Oversold', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ?�략 457: ?�체 과매??+ MACD 개선 */
    static strategy457(ind) {
        const allOversold = ind.rsi < 35 && ind.stochastic?.k < 25 && ind.bollingerBands?.position < 20;
        const macdImproving = ind.macd?.histogram > (ind.macd?.prevHistogram || -999);
        const match = allOversold && macdImproving;
        return { id: 457, name: 'Triple Oversold + MACD Improving', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ?�략 458: ?�체 과매??+ EMA 골든 */
    static strategy458(ind) {
        const allOversold = ind.rsi < 35 && ind.stochastic?.k < 30 && ind.bollingerBands?.position < 25;
        const match = allOversold && ind.ema20 > ind.ema50;
        return { id: 458, name: 'Triple Oversold + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ?�략 459: ?�체 중립 ?�승 (모든 지??45-55) */
    static strategy459(ind) {
        const allNeutral = ind.rsi >= 48 && ind.rsi <= 55 && ind.stochastic?.k >= 45 && ind.stochastic?.k <= 55 &&
                         ind.bollingerBands?.position >= 48 && ind.bollingerBands?.position <= 55;
        const match = allNeutral && ind.macd?.histogram > 0;
        return { id: 459, name: 'All Neutral + MACD Up', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ?�략 460: ?�체 ?�승 초기 (모든 지??50-60) */
    static strategy460(ind) {
        const allEarlyUp = ind.rsi >= 50 && ind.rsi <= 60 && ind.stochastic?.k >= 50 && ind.stochastic?.k <= 65 &&
                         ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 62;
        const match = allEarlyUp && ind.ema20 > ind.ema50;
        return { id: 460, name: 'All Early Bullish', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 461: 볼륨 + ATR + MACD 3�??�승 */
    static strategy461(ind) {
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.3;
        const atrRising = ind.atrPercent > (ind.prevAtrPercent || 0);
        const match = volUp && atrRising && ind.macd?.histogram > 10;
        return { id: 461, name: 'Vol ATR MACD Triple Up', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 462: 볼륨 + ATR + ADX 3�??�승 */
    static strategy462(ind) {
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.3;
        const atrRising = ind.atrPercent > (ind.prevAtrPercent || 0);
        const match = volUp && atrRising && ind.adx?.adx > 25 && ind.adx?.plusDI > ind.adx?.minusDI;
        return { id: 462, name: 'Vol ATR ADX Triple Up', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ?�략 463: ?�변?�성 축적 ??브레?�크?�웃 */
    static strategy463(ind) {
        const lowVol = ind.atrPercent < 1.2 && ind.bollingerBands?.bandwidth < 2;
        const breakout = ind.bollingerBands?.position > 52 && ind.macd?.histogram > 0;
        const match = lowVol && breakout;
        return { id: 463, name: 'Low Vol Breakout Up', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 464: 고�??�성 추세 추종 */
    static strategy464(ind) {
        const highVol = ind.atrPercent > 2 && ind.bollingerBands?.bandwidth > 3;
        const trend = ind.ema20 > ind.ema50 && ind.bollingerBands?.position > 55;
        const match = highVol && trend;
        return { id: 464, name: 'High Vol Trend Following', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ?�략 465: 모든 모멘?� 지???�수 */
    static strategy465(ind) {
        const allPositive = ind.macd?.histogram > 0 && ind.macd?.MACD > 0 && ind.rsi > 50 && ind.stochastic?.k > 50;
        const match = Boolean(allPositive);
        return { id: 465, name: 'All Momentum Positive', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ?�략 466: 모든 추세 지???�승 */
    static strategy466(ind) {
        const allTrendUp = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.adx?.plusDI > ind.adx?.minusDI && ind.price > ind.ema20;
        const match = Boolean(allTrendUp);
        return { id: 466, name: 'All Trend Indicators Up', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ?�략 467: Fear & Greed 극도??공포 + 기술??반등 */
    static strategy467(ind) {
        const extremeFear = ind.fearGreedIndex < 20;
        const techBounce = ind.rsi < 35 && ind.macd?.histogram > (ind.macd?.prevHistogram || -999);
        const match = extremeFear && techBounce;
        return { id: 467, name: 'Extreme Fear + Tech Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ?�략 468: Fear & Greed 공포 + 모든 골든 */
    static strategy468(ind) {
        const fear = ind.fearGreedIndex < 30;
        const allGolden = ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal;
        const match = fear && allGolden;
        return { id: 468, name: 'Fear Zone + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ?�략 469: Fear & Greed 중립 + 강한 기술???�호 */
    static strategy469(ind) {
        const neutral = ind.fearGreedIndex >= 40 && ind.fearGreedIndex <= 60;
        const strongTech = ind.macd?.histogram > 20 && ind.rsi >= 50 && ind.rsi <= 60;
        const match = neutral && strongTech;
        return { id: 469, name: 'Neutral Fear + Strong Tech', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ?�략 470: Fear & Greed 공포 + Stochastic 과매??*/
    static strategy470(ind) {
        const fear = ind.fearGreedIndex < 35;
        const stochOversold = ind.stochastic?.k < 25;
        const match = fear && stochOversold;
        return { id: 470, name: 'Fear + Stoch Oversold', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    // ==================== 추�? 복합 ?�략 (471-500) ====================
    
    /** ?�략 471: RSI + MACD + BB + EMA + Stochastic 5�?*/
    static strategy471(ind) {
        const match = ind.rsi >= 45 && ind.rsi <= 60 && ind.macd?.histogram > 5 && ind.bollingerBands?.position >= 45 &&
                     ind.bollingerBands?.position <= 65 && ind.ema20 > ind.ema50 && ind.stochastic?.k > ind.stochastic?.d;
        return { id: 471, name: 'Penta Confirm', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ?�략 472: RSI + MACD + ADX + DI 4�?*/
    static strategy472(ind) {
        const match = ind.rsi >= 45 && ind.rsi <= 60 && ind.macd?.MACD > ind.macd?.signal &&
                     ind.adx?.adx > 25 && ind.adx?.plusDI > ind.adx?.minusDI;
        return { id: 472, name: 'Quad RSI MACD ADX DI', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ?�략 473: ?�??반등 종합 */
    static strategy473(ind) {
        const lowPoint = ind.rsi < 35 && ind.bollingerBands?.position < 25 && ind.stochastic?.k < 30;
        const improving = ind.macd?.histogram > (ind.macd?.prevHistogram || -999);
        const match = lowPoint && improving;
        return { id: 473, name: 'Bottom Bounce Comprehensive', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ?�략 474: 추세 강화 종합 */
    static strategy474(ind) {
        const trendStrong = ind.ema20 > ind.ema50 && ind.adx?.adx > 30 && ind.adx?.plusDI > ind.adx?.minusDI;
        const momentum = ind.macd?.histogram > 15 && ind.rsi >= 50 && ind.rsi <= 65;
        const match = trendStrong && momentum;
        return { id: 474, name: 'Trend Strengthen Comprehensive', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ?�략 475: 변?�성 ?�파 종합 */
    static strategy475(ind) {
        const volBreak = ind.bollingerBands?.bandwidth > 2.5 && ind.bollingerBands?.position > 55;
        const confirmed = ind.ema20 > ind.ema50 && ind.macd?.histogram > 10;
        const match = volBreak && confirmed;
        return { id: 475, name: 'Volatility Breakout Comprehensive', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    static strategy476(ind) {
        const match = ind.rsi >= 40 && ind.rsi <= 50 && ind.stochastic?.k >= 35 && ind.stochastic?.k <= 50 && ind.macd?.histogram > 0;
        return { id: 476, name: 'RSI Stoch Pre-Breakout', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    static strategy477(ind) {
        const match = ind.rsi >= 50 && ind.rsi <= 58 && ind.stochastic?.k >= 50 && ind.stochastic?.k <= 62 && ind.ema20 > ind.ema50;
        return { id: 477, name: 'RSI Stoch EMA Breakout', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    static strategy478(ind) {
        const match = ind.rsi >= 55 && ind.rsi <= 65 && ind.stochastic?.k >= 55 && ind.stochastic?.k <= 70 && ind.adx?.adx > 25;
        return { id: 478, name: 'RSI Stoch ADX Bullish', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    static strategy479(ind) {
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.3;
        const match = volUp && ind.rsi >= 45 && ind.rsi <= 58 && ind.stochastic?.k > ind.stochastic?.d;
        return { id: 479, name: 'Volume RSI Stoch Up', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    static strategy480(ind) {
        const match = ind.atrPercent >= 1.5 && ind.atrPercent <= 3 && ind.macd?.histogram > 10 && ind.rsi >= 48 && ind.rsi <= 60;
        return { id: 480, name: 'ATR MACD RSI Balanced', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    static strategy481(ind) {
        const match = ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth <= 4 && ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 65 && ind.adx?.adx > 25;
        return { id: 481, name: 'BB Expansion + ADX', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    static strategy482(ind) {
        const match = ind.rsi >= 30 && ind.rsi <= 42 && ind.macd?.prevHistogram < 0 && ind.macd?.histogram > 0 && ind.stochastic?.k < 40;
        return { id: 482, name: 'Recovery Turn Triple', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    static strategy483(ind) {
        const match = ind.rsi >= 42 && ind.rsi <= 52 && ind.stochastic?.k >= 38 && ind.stochastic?.k <= 52 && ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 55;
        return { id: 483, name: 'Triple Mid Zone', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    static strategy484(ind) {
        const match = ind.rsi >= 52 && ind.rsi <= 60 && ind.stochastic?.k >= 52 && ind.stochastic?.k <= 65 && ind.macd?.histogram >= 10 && ind.macd?.histogram <= 30;
        return { id: 484, name: 'Triple Upper Mid', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    static strategy485(ind) {
        const allGolden = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.macd?.MACD > ind.macd?.signal && ind.stochastic?.k > ind.stochastic?.d;
        const match = allGolden && ind.rsi >= 48 && ind.rsi <= 60;
        return { id: 485, name: 'All Golden + RSI Range', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    static strategy486(ind) {
        const match = ind.price > ind.ema20 && ind.price > ind.sma20 && ind.rsi >= 48 && ind.rsi <= 60 && ind.macd?.histogram > 5;
        return { id: 486, name: 'Price Above + RSI MACD', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    static strategy487(ind) {
        const match = ind.price > ind.ema50 && ind.ema20 > ind.ema50 && ind.stochastic?.k > ind.stochastic?.d && ind.adx?.plusDI > ind.adx?.minusDI;
        return { id: 487, name: 'Price EMA Stoch DI', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    static strategy488(ind) {
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.5;
        const match = volUp && ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 70 && ind.macd?.histogram > 10;
        return { id: 488, name: 'Volume BB MACD Strong', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    static strategy489(ind) {
        const match = ind.atrPercent >= 1 && ind.atrPercent <= 2 && ind.adx?.adx >= 25 && ind.adx?.adx <= 40 && ind.adx?.plusDI > ind.adx?.minusDI;
        return { id: 489, name: 'ATR ADX DI Moderate', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    static strategy490(ind) {
        const match = ind.fearGreedIndex < 40 && ind.rsi < 40 && ind.stochastic?.k < 35 && ind.macd?.histogram > (ind.macd?.prevHistogram || -999);
        return { id: 490, name: 'Fear + Triple Oversold Improving', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    static strategy491(ind) {
        const match = ind.rsi >= 45 && ind.rsi <= 55 && ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 55 && ind.atrPercent < 1.5;
        return { id: 491, name: 'Neutral Zone Low Vol', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 };
    }
    
    static strategy492(ind) {
        const match = ind.rsi >= 50 && ind.rsi <= 60 && ind.stochastic?.k >= 50 && ind.stochastic?.k <= 65 && ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 65;
        return { id: 492, name: 'Triple Upper Mid Zone', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    static strategy493(ind) {
        const match = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.adx?.adx > 25 && ind.rsi >= 48 && ind.rsi <= 62;
        return { id: 493, name: 'Double MA Golden + ADX RSI', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    static strategy494(ind) {
        const match = ind.macd?.histogram > 15 && ind.macd?.MACD > 20 && ind.stochastic?.k > 50 && ind.stochastic?.k < 70;
        return { id: 494, name: 'Strong MACD + Mid Stoch', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    static strategy495(ind) {
        const match = ind.bollingerBands?.bandwidth >= 2.5 && ind.bollingerBands?.bandwidth <= 4 && ind.bollingerBands?.position >= 55 && ind.bollingerBands?.position <= 72 && ind.rsi >= 52 && ind.rsi <= 65;
        return { id: 495, name: 'BB Expansion + RSI Upper', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    static strategy496(ind) {
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.2;
        const match = volUp && ind.adx?.adx > 25 && ind.adx?.plusDI > ind.adx?.minusDI && ind.ema20 > ind.ema50;
        return { id: 496, name: 'Volume ADX DI EMA', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    static strategy497(ind) {
        const match = ind.rsi >= 35 && ind.rsi <= 45 && ind.stochastic?.k >= 30 && ind.stochastic?.k <= 45 && ind.macd?.histogram > 0 && ind.ema20 > ind.ema50;
        return { id: 497, name: 'Recovery Zone All Confirm', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    static strategy498(ind) {
        const match = ind.rsi >= 55 && ind.rsi <= 65 && ind.stochastic?.k >= 55 && ind.stochastic?.k <= 72 && ind.macd?.histogram > 20 && ind.adx?.adx > 30;
        return { id: 498, name: 'Strong Zone All Confirm', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    static strategy499(ind) {
        const allSignals = ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal && ind.stochastic?.k > ind.stochastic?.d &&
                         ind.adx?.plusDI > ind.adx?.minusDI && ind.rsi >= 48 && ind.rsi <= 62 && ind.bollingerBands?.position >= 48 && ind.bollingerBands?.position <= 65;
        const match = (allSignals) && ind.ema10 < ind.ema20;
        return { id: 499, name: 'Hexa Signal Alignment', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    static strategy500(ind) {
        const volUp = ind.volume > (ind.avgVolume || 0) * 1.2;
        const allSignals = ind.ema20 > ind.ema50 && ind.macd?.histogram > 10 && ind.stochastic?.k > ind.stochastic?.d &&
                         ind.adx?.adx > 25 && ind.adx?.plusDI > ind.adx?.minusDI && ind.rsi >= 48 && ind.rsi <= 62 && volUp;
        const match = Boolean(allSignals) && ind.volume > (ind.prevVolume || ind.volume) * 1.05;
        return { id: 500, name: 'Ultimate Signal Combination', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 };
    }

    /** 모든 ?�략 ?�행 (401-500) */
    static analyzeAll(indicators) {
        return [
            this.strategy401(indicators), this.strategy402(indicators), this.strategy403(indicators),
            this.strategy404(indicators), this.strategy405(indicators), this.strategy406(indicators),
            this.strategy407(indicators), this.strategy408(indicators), this.strategy409(indicators),
            this.strategy410(indicators), this.strategy411(indicators), this.strategy412(indicators),
            this.strategy413(indicators), this.strategy414(indicators), this.strategy415(indicators),
            this.strategy416(indicators), this.strategy417(indicators), this.strategy418(indicators),
            this.strategy419(indicators), this.strategy420(indicators), this.strategy421(indicators),
            this.strategy422(indicators), this.strategy423(indicators), this.strategy424(indicators),
            this.strategy425(indicators), this.strategy426(indicators), this.strategy427(indicators),
            this.strategy428(indicators), this.strategy429(indicators), this.strategy430(indicators),
            this.strategy431(indicators), this.strategy432(indicators), this.strategy433(indicators),
            this.strategy434(indicators), this.strategy435(indicators), this.strategy436(indicators),
            this.strategy437(indicators), this.strategy438(indicators), this.strategy439(indicators),
            this.strategy440(indicators), this.strategy441(indicators), this.strategy442(indicators),
            this.strategy443(indicators), this.strategy444(indicators), this.strategy445(indicators),
            this.strategy446(indicators), this.strategy447(indicators), this.strategy448(indicators),
            this.strategy449(indicators), this.strategy450(indicators), this.strategy451(indicators),
            this.strategy452(indicators), this.strategy453(indicators), this.strategy454(indicators),
            this.strategy455(indicators), this.strategy456(indicators), this.strategy457(indicators),
            this.strategy458(indicators), this.strategy459(indicators), this.strategy460(indicators),
            this.strategy461(indicators), this.strategy462(indicators), this.strategy463(indicators),
            this.strategy464(indicators), this.strategy465(indicators), this.strategy466(indicators),
            this.strategy467(indicators), this.strategy468(indicators), this.strategy469(indicators),
            this.strategy470(indicators), this.strategy471(indicators), this.strategy472(indicators),
            this.strategy473(indicators), this.strategy474(indicators), this.strategy475(indicators),
            this.strategy476(indicators), this.strategy477(indicators), this.strategy478(indicators),
            this.strategy479(indicators), this.strategy480(indicators), this.strategy481(indicators),
            this.strategy482(indicators), this.strategy483(indicators), this.strategy484(indicators),
            this.strategy485(indicators), this.strategy486(indicators), this.strategy487(indicators),
            this.strategy488(indicators), this.strategy489(indicators), this.strategy490(indicators),
            this.strategy491(indicators), this.strategy492(indicators), this.strategy493(indicators),
            this.strategy494(indicators), this.strategy495(indicators), this.strategy496(indicators),
            this.strategy497(indicators), this.strategy498(indicators), this.strategy499(indicators),
            this.strategy500(indicators)
        ];
    }
}

