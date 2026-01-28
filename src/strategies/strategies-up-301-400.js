/**
 * UP Strategy Extension (ID: 301-500)
 * Stochastic, ADX 湲곕컲 ?꾨왂
 */

export class StrategiesUp301 {
    
    // ==================== Stochastic 湲곕컲 (301-400) ====================
    
    /** Strategy 301: Stochastic K < 20 Oversold*/
    static strategy301(ind) {
        const match = ind.stochastic?.k < 20;
        return { id: 301, name: 'Stoch K Oversold 20', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** Strategy 302: Stochastic K < 15 */
    static strategy302(ind) {
        const match = ind.stochastic?.k < 15;
        return { id: 302, name: 'Stoch K Oversold 15', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** Strategy 303: Stochastic K < 10 洹밸떒??Oversold*/
    static strategy303(ind) {
        const match = ind.stochastic?.k < 10;
        return { id: 303, name: 'Stoch K Extreme 10', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** Strategy 304: Stochastic K < 5 */
    static strategy304(ind) {
        const match = ind.stochastic?.k < 5;
        return { id: 304, name: 'Stoch K Ultra Extreme 5', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** Strategy 305: Stochastic K 怨⑤뱺 ?щ줈??(K > D, K < 30) */
    static strategy305(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.stochastic?.k < 30;
        return { id: 305, name: 'Stoch Golden Under 30', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** Strategy 306: Stochastic K 怨⑤뱺 (K > D, K < 25) */
    static strategy306(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.stochastic?.k < 25;
        return { id: 306, name: 'Stoch Golden Under 25', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** Strategy 307: Stochastic K 怨⑤뱺 (K > D, K < 20) */
    static strategy307(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.stochastic?.k < 20;
        return { id: 307, name: 'Stoch Golden Under 20', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** Strategy 308: Stochastic K 怨⑤뱺 (K > D, K < 15) */
    static strategy308(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.stochastic?.k < 15;
        return { id: 308, name: 'Stoch Golden Under 15', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** Strategy 309: Stochastic + RSI Oversold*/
    static strategy309(ind) {
        const match = ind.stochastic?.k < 20 && ind.rsi < 30;
        return { id: 309, name: 'Stoch + RSI Double Oversold', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** Strategy 310: Stochastic + RSI + BB Oversold*/
    static strategy310(ind) {
        const match = ind.stochastic?.k < 25 && ind.rsi < 35 && ind.bollingerBands?.position < 20;
        return { id: 310, name: 'Triple Oversold Stoch RSI BB', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** Strategy 311: Stochastic + MACD 怨⑤뱺 */
    static strategy311(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.macd?.MACD > ind.macd?.signal && ind.stochastic?.k < 40;
        return { id: 311, name: 'Stoch + MACD Double Golden', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** Strategy 312: Stochastic + EMA 怨⑤뱺 */
    static strategy312(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.ema20 > ind.ema50 && ind.stochastic?.k < 50;
        return { id: 312, name: 'Stoch + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** Strategy 313: Stochastic K ?곸듅 + D ?곸듅 + K > D */
    static strategy313(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.stochastic?.k > (ind.stochastic?.prevK || 0);
        return { id: 313, name: 'Stoch Rising + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** Strategy 314: Stochastic 20-40 踰붿쐞 + 怨⑤뱺 */
    static strategy314(ind) {
        const match = ind.stochastic?.k >= 20 && ind.stochastic?.k <= 40 && ind.stochastic?.k > ind.stochastic?.d;
        return { id: 314, name: 'Stoch 20-40 Golden', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** Strategy 315: Stochastic 40-60 踰붿쐞 + 怨⑤뱺 + MACD > 0 */
    static strategy315(ind) {
        const match = ind.stochastic?.k >= 40 && ind.stochastic?.k <= 60 && ind.stochastic?.k > ind.stochastic?.d && ind.macd?.histogram > 0;
        return { id: 315, name: 'Stoch Mid + Golden + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** Strategy 316: Stochastic K < 30 + RSI < 40 */
    static strategy316(ind) {
        const match = ind.stochastic?.k < 30 && ind.rsi < 40;
        return { id: 316, name: 'Stoch 30 + RSI 40', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** Strategy 317: Stochastic K < 35 + RSI < 45 + MACD 怨⑤뱺 */
    static strategy317(ind) {
        const match = ind.stochastic?.k < 35 && ind.rsi < 45 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 317, name: 'Stoch RSI Low + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** Strategy 318: Stochastic K < 25 + BB < 25 */
    static strategy318(ind) {
        const match = ind.stochastic?.k < 25 && ind.bollingerBands?.position < 25;
        return { id: 318, name: 'Stoch BB Double Low', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** Strategy 319: Stochastic K 15-25 + RSI 25-35 */
    static strategy319(ind) {
        const match = ind.stochastic?.k >= 15 && ind.stochastic?.k <= 25 && ind.rsi >= 25 && ind.rsi <= 35;
        return { id: 319, name: 'Stoch RSI Recovery Zone', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** Strategy 320: Stochastic K 25-35 + RSI 35-45 + EMA 怨⑤뱺 */
    static strategy320(ind) {
        const match = ind.stochastic?.k >= 25 && ind.stochastic?.k <= 35 && ind.rsi >= 35 && ind.rsi <= 45 && ind.ema20 > ind.ema50;
        return { id: 320, name: 'Stoch RSI Mid Low + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** Strategy 321: Stochastic K 35-50 + RSI 45-55 + MACD > 5 */
    static strategy321(ind) {
        const match = ind.stochastic?.k >= 35 && ind.stochastic?.k <= 50 && ind.rsi >= 45 && ind.rsi <= 55 && ind.macd?.histogram > 5;
        return { id: 321, name: 'Stoch RSI Neutral + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** Strategy 322: Stochastic K 50-65 + RSI 50-60 + BB > 50 */
    static strategy322(ind) {
        const match = ind.stochastic?.k >= 50 && ind.stochastic?.k <= 65 && ind.rsi >= 50 && ind.rsi <= 60 && ind.bollingerBands?.position > 50;
        return { id: 322, name: 'Stoch RSI BB Upper Mid', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** Strategy 323: Stochastic K < 20 + MACD hist 媛쒖꽑 */
    static strategy323(ind) {
        const histImproving = ind.macd?.histogram > (ind.macd?.prevHistogram || -999);
        const match = ind.stochastic?.k < 20 && histImproving;
        return { id: 323, name: 'Stoch Oversold + MACD Improving', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** Strategy 324: Stochastic K < 15 + EMA 怨⑤뱺 */
    static strategy324(ind) {
        const match = ind.stochastic?.k < 15 && ind.ema20 > ind.ema50;
        return { id: 324, name: 'Stoch Extreme + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** Strategy 325: Stochastic + RSI + MACD 3以?怨⑤뱺 */
    static strategy325(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.rsi > 45 && ind.rsi < 60 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 325, name: 'Triple Golden Stoch RSI MACD', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** Strategy 326: Stochastic K-D 媛?> 5 + K < 40 */
    static strategy326(ind) {
        const gap = (ind.stochastic?.k || 0) - (ind.stochastic?.d || 0);
        const match = gap > 5 && ind.stochastic?.k < 40;
        return { id: 326, name: 'Stoch Gap 5 Under 40', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** Strategy 327: Stochastic K-D 媛?> 10 + K < 50 */
    static strategy327(ind) {
        const gap = (ind.stochastic?.k || 0) - (ind.stochastic?.d || 0);
        const match = gap > 10 && ind.stochastic?.k < 50;
        return { id: 327, name: 'Stoch Gap 10 Under 50', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** Strategy 328: Stochastic K-D 媛?> 15 + RSI 45-60 */
    static strategy328(ind) {
        const gap = (ind.stochastic?.k || 0) - (ind.stochastic?.d || 0);
        const match = gap > 15 && ind.rsi >= 45 && ind.rsi <= 60;
        return { id: 328, name: 'Stoch Strong Gap + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** Strategy 329: Stochastic 鍮좊Ⅸ ?곸듅 (K 20??0 ?쒕?) */
    static strategy329(ind) {
        const match = ind.stochastic?.k >= 35 && ind.stochastic?.k <= 45 && ind.stochastic?.k > ind.stochastic?.d;
        return { id: 329, name: 'Stoch Fast Rise Zone', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** Strategy 330: Stochastic + BB ?ㅽ댁쫰 */
    static strategy330(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.stochastic?.k < 50 && ind.bollingerBands?.bandwidth < 2;
        return { id: 330, name: 'Stoch Golden + BB Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    // ==================== Stochastic + ADX 湲곕컲 (331-350) ====================
    
    /** Strategy 331: Stochastic 怨⑤뱺 + ADX > 25 + EMA 怨⑤뱺 */
    static strategy331(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.adx?.adx > 25 && ind.ema20 > ind.ema50;
        return { id: 331, name: 'Stoch + ADX Strong + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** Strategy 332: Stochastic < 40 + ADX > 30 + EMA 怨⑤뱺 */
    static strategy332(ind) {
        const match = ind.stochastic?.k < 40 && ind.adx?.adx > 30 && ind.ema20 > ind.ema50 && ind.rsi < 60;
        return { id: 332, name: 'Stoch40 + ADX30 + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** Strategy 333: Stochastic 怨⑤뱺 + ADX > 35 + MACD 怨⑤뱺 */
    static strategy333(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.adx?.adx > 35 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 333, name: 'Stoch + ADX35 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** Strategy 334: Stochastic < 50 + ADX > 40 + MACD hist > 15 */
    static strategy334(ind) {
        const match = ind.stochastic?.k < 50 && ind.adx?.adx > 40 && ind.macd?.histogram > 15;
        return { id: 334, name: 'Stoch50 + ADX40 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** Strategy 335: Stochastic < 45 + ADX > 45 + RSI 50-65 */
    static strategy335(ind) {
        const match = ind.stochastic?.k < 45 && ind.adx?.adx > 45 && ind.rsi >= 50 && ind.rsi <= 65;
        return { id: 335, name: 'Stoch45 + ADX Very Strong', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** Strategy 336: Stochastic 怨⑤뱺 + ADX > 50 + 紐⑤뱺 MA 怨⑤뱺 */
    static strategy336(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.adx?.adx > 50 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50;
        return { id: 336, name: 'Stoch + ADX Extreme + MA', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** Strategy 337: Stochastic < 30 + ADX < 20 + MACD ?꾪솚 */
    static strategy337(ind) {
        const match = ind.stochastic?.k < 30 && ind.adx?.adx < 20 && ind.macd?.prevHistogram < 0 && ind.macd?.histogram > 0;
        return { id: 337, name: 'Stoch Low + ADX Low + MACD Turn', direction: 'UP', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** Strategy 338: Stochastic < 35 + ADX 20-25 + EMA 怨⑤뱺 */
    static strategy338(ind) {
        const match = ind.stochastic?.k < 35 && ind.adx?.adx >= 20 && ind.adx?.adx <= 25 && ind.ema20 > ind.ema50;
        return { id: 338, name: 'Stoch35 + ADX Start + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** Strategy 339: Stochastic < 40 + ADX 25-30 + RSI 45-55 */
    static strategy339(ind) {
        const match = ind.stochastic?.k < 40 && ind.adx?.adx >= 25 && ind.adx?.adx <= 30 && ind.rsi >= 45 && ind.rsi <= 55;
        return { id: 339, name: 'Stoch + ADX Mod + RSI Neutral', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** Strategy 340: Stochastic 怨⑤뱺 + ADX 30-40 + BB > 50 */
    static strategy340(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.adx?.adx >= 30 && ind.adx?.adx <= 40 && ind.bollingerBands?.position > 50;
        return { id: 340, name: 'Stoch + ADX Good + BB', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** Strategy 341: Stochastic < 35 + +DI > -DI + ADX > 25 */
    static strategy341(ind) {
        const match = ind.stochastic?.k < 35 && ind.adx?.plusDI > ind.adx?.minusDI && ind.adx?.adx > 25;
        return { id: 341, name: 'Stoch + DI Positive + ADX', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** Strategy 342: Stochastic < 30 + +DI > -DI + ADX > 30 */
    static strategy342(ind) {
        const match = ind.stochastic?.k < 30 && ind.adx?.plusDI > ind.adx?.minusDI && ind.adx?.adx > 30 && ind.rsi < 60;
        return { id: 342, name: 'Stoch30 + DI + ADX30', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** Strategy 343: Stochastic 怨⑤뱺 + +DI > -DI + MACD 怨⑤뱺 */
    static strategy343(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.adx?.plusDI > ind.adx?.minusDI && ind.macd?.MACD > ind.macd?.signal;
        return { id: 343, name: 'Stoch + DI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** Strategy 344: Stochastic < 40 + +DI > 25 + -DI < 20 */
    static strategy344(ind) {
        const match = ind.stochastic?.k < 40 && ind.adx?.plusDI > 25 && ind.adx?.minusDI < 20;
        return { id: 344, name: 'Stoch + Strong +DI', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** Strategy 345: Stochastic < 35 + +DI > 30 + -DI < 15 */
    static strategy345(ind) {
        const match = ind.stochastic?.k < 35 && ind.adx?.plusDI > 30 && ind.adx?.minusDI < 15 && ind.adx?.adx > 30;
        return { id: 345, name: 'Stoch + Very Strong +DI', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** Strategy 346: Stochastic 怨⑤뱺 + DI 媛?> 10 + ADX > 25 */
    static strategy346(ind) {
        const diGap = (ind.adx?.plusDI || 0) - (ind.adx?.minusDI || 0);
        const match = ind.stochastic?.k > ind.stochastic?.d && diGap > 10 && ind.adx?.adx > 25;
        return { id: 346, name: 'Stoch + DI Gap10 + ADX', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** Strategy 347: Stochastic < 45 + DI 媛?> 15 + EMA 怨⑤뱺 */
    static strategy347(ind) {
        const diGap = (ind.adx?.plusDI || 0) - (ind.adx?.minusDI || 0);
        const match = ind.stochastic?.k < 45 && diGap > 15 && ind.ema20 > ind.ema50;
        return { id: 347, name: 'Stoch + DI Gap15 + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** Strategy 348: Stochastic < 50 + DI 媛?> 20 + RSI 50-65 */
    static strategy348(ind) {
        const diGap = (ind.adx?.plusDI || 0) - (ind.adx?.minusDI || 0);
        const match = ind.stochastic?.k < 50 && diGap > 20 && ind.rsi >= 50 && ind.rsi <= 65;
        return { id: 348, name: 'Stoch + DI Gap20 + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** Strategy 349: Stochastic ?곸듅 + ADX ?곸듅 + +DI > -DI */
    static strategy349(ind) {
        const stochRising = ind.stochastic?.k > (ind.stochastic?.prevK || 0);
        const adxRising = ind.adx?.adx > (ind.adx?.prevADX || 0);
        const match = stochRising && adxRising && ind.adx?.plusDI > ind.adx?.minusDI;
        return { id: 349, name: 'Stoch Rise + ADX Rise + DI', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** Strategy 350: Stochastic 怨⑤뱺 + ADX ?곸듅 + EMA 怨⑤뱺 */
    static strategy350(ind) {
        const adxRising = ind.adx?.adx > (ind.adx?.prevADX || 0);
        const match = ind.stochastic?.k > ind.stochastic?.d && adxRising && ind.adx?.plusDI > ind.adx?.minusDI && ind.ema20 > ind.ema50;
        return { id: 350, name: 'Stoch + ADX Rise + DI + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    // ==================== Stochastic + ADX 蹂듯빀 (351-400) ====================
    
    /** Strategy 351: Stochastic 怨⑤뱺 + ADX > 25 */
    static strategy351(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.adx?.adx > 25;
        return { id: 351, name: 'Stoch Golden + ADX Strong', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** Strategy 352: Stochastic < 30 + +DI > -DI */
    static strategy352(ind) {
        const match = ind.stochastic?.k < 30 && ind.adx?.plusDI > ind.adx?.minusDI;
        return { id: 352, name: 'Stoch Oversold + DI Positive', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** Strategy 353: Stochastic < 25 + ADX > 30 */
    static strategy353(ind) {
        const match = ind.stochastic?.k < 25 && ind.adx?.adx > 30;
        return { id: 353, name: 'Stoch Low + Strong Trend', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** Strategy 354: Stochastic 怨⑤뱺 + +DI > 25 */
    static strategy354(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.adx?.plusDI > 25;
        return { id: 354, name: 'Stoch Golden + +DI 25', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** Strategy 355: Stochastic 20-40 + ADX 25-35 + +DI > -DI */
    static strategy355(ind) {
        const match = ind.stochastic?.k >= 20 && ind.stochastic?.k <= 40 && ind.adx?.adx >= 25 && ind.adx?.adx <= 35 && ind.adx?.plusDI > ind.adx?.minusDI;
        return { id: 355, name: 'Stoch + ADX Mid Trend', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** Strategy 356: Stochastic + ADX + RSI 3以??뺤씤 */
    static strategy356(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.adx?.adx > 25 && ind.adx?.plusDI > ind.adx?.minusDI && ind.rsi >= 45 && ind.rsi <= 60;
        return { id: 356, name: 'Stoch ADX RSI Triple', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** Strategy 357: Stochastic + ADX + EMA 3以??뺤씤 */
    static strategy357(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.adx?.adx > 25 && ind.ema20 > ind.ema50 && ind.rsi < 60;
        return { id: 357, name: 'Stoch ADX EMA Triple', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** Strategy 358: Stochastic + ADX + MACD 3以??뺤씤 */
    static strategy358(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.adx?.adx > 25 && ind.macd?.MACD > ind.macd?.signal;
        return { id: 358, name: 'Stoch ADX MACD Triple', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** Strategy 359: Stochastic + ADX + BB 3以??뺤씤 */
    static strategy359(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.adx?.adx > 25 && ind.bollingerBands?.position > 45;
        return { id: 359, name: 'Stoch ADX BB Triple', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** Strategy 360: Stochastic < 20 + ADX > 30 + +DI > -DI */
    static strategy360(ind) {
        const match = ind.stochastic?.k < 20 && ind.adx?.adx > 30 && ind.adx?.plusDI > ind.adx?.minusDI;
        return { id: 360, name: 'Stoch Oversold + Strong Trend Up', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** Strategy 361: ADX ?곸듅 + Stochastic ?곸듅 */
    static strategy361(ind) {
        const adxRising = ind.adx?.adx > (ind.adx?.prevADX || 0);
        const stochRising = ind.stochastic?.k > (ind.stochastic?.prevK || 0);
        const match = adxRising && stochRising && ind.adx?.plusDI > ind.adx?.minusDI;
        return { id: 361, name: 'ADX + Stoch Both Rising', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** Strategy 362: ?쏀븳 ADX + Stochastic Oversold(?〓낫??諛섎벑) */
    static strategy362(ind) {
        const match = ind.adx?.adx < 20 && ind.stochastic?.k < 20;
        return { id: 362, name: 'Weak Trend + Stoch Oversold', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** Strategy 363: ?쏀븳 ADX + Stochastic 怨⑤뱺 (異붿꽭 ?쒖옉) */
    static strategy363(ind) {
        const match = ind.adx?.adx < 25 && ind.stochastic?.k > ind.stochastic?.d && ind.stochastic?.k < 50;
        return { id: 363, name: 'Trend Starting + Stoch Golden', direction: 'UP', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** Strategy 364: ADX 25-35 + Stochastic 30-50 + 怨⑤뱺 */
    static strategy364(ind) {
        const match = ind.adx?.adx >= 25 && ind.adx?.adx <= 35 && ind.stochastic?.k >= 30 && ind.stochastic?.k <= 50 && ind.stochastic?.k > ind.stochastic?.d;
        return { id: 364, name: 'ADX + Stoch Mid Range Golden', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** Strategy 365: ADX > 35 + Stochastic 40-60 */
    static strategy365(ind) {
        const match = ind.adx?.adx > 35 && ind.stochastic?.k >= 40 && ind.stochastic?.k <= 60;
        return { id: 365, name: 'Strong Trend + Stoch Mid', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** Strategy 366: ADX > 40 + Stochastic 怨⑤뱺 + RSI 45-60 */
    static strategy366(ind) {
        const match = ind.adx?.adx > 40 && ind.stochastic?.k > ind.stochastic?.d && ind.rsi >= 45 && ind.rsi <= 60;
        return { id: 366, name: 'Very Strong + Stoch + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** Strategy 367: +DI ?щ줈?ㅼ삤踰?(吏곸쟾 -DI > +DI ??+DI > -DI) + Stochastic < 45 */
    static strategy367(ind) {
        const match = ind.stochastic?.k < 45 && ind.adx?.plusDI > ind.adx?.minusDI && ind.adx?.adx > 20;
        return { id: 367, name: 'DI Crossover + ADX + Stoch', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** Strategy 368: +DI ?щ줈?ㅼ삤踰?+ Stochastic 怨⑤뱺 */
    static strategy368(ind) {
        const match = ind.adx?.plusDI > ind.adx?.minusDI && ind.stochastic?.k > ind.stochastic?.d;
        return { id: 368, name: 'DI Cross + Stoch Golden', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** Strategy 369: +DI > 20 + Stochastic < 40 + ADX > 25 */
    static strategy369(ind) {
        const match = ind.adx?.plusDI > 20 && ind.stochastic?.k < 40 && ind.adx?.adx > 25;
        return { id: 369, name: 'DI20 + Stoch40 + ADX25', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** Strategy 370: Stochastic + ADX + MACD + EMA 4以??뺤씤 */
    static strategy370(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.adx?.adx > 25 && ind.adx?.plusDI > ind.adx?.minusDI && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50;
        return { id: 370, name: 'Quad Confirm Stoch ADX MACD EMA', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** Strategy 371: Stochastic + RSI + MACD + EMA 4以??뺤씤 (ADX ?놁씠) */
    static strategy371(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.rsi >= 45 && ind.rsi <= 60 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50;
        return { id: 371, name: 'Quad Confirm Stoch RSI MACD EMA', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** Strategy 372: Stochastic K < 15 + RSI < 30 + BB < 15 */
    static strategy372(ind) {
        const match = ind.stochastic?.k < 15 && ind.rsi < 30 && ind.bollingerBands?.position < 15;
        return { id: 372, name: 'Triple Extreme Oversold', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** Strategy 373: Stochastic K < 10 + RSI < 25 */
    static strategy373(ind) {
        const match = ind.stochastic?.k < 10 && ind.rsi < 25;
        return { id: 373, name: 'Double Ultra Oversold', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** Strategy 374: ADX > 30 + 紐⑤뱺 吏??怨⑤뱺 */
    static strategy374(ind) {
        const allGolden = ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal && ind.stochastic?.k > ind.stochastic?.d;
        const match = ind.adx?.adx > 30 && allGolden && ind.adx?.plusDI > ind.adx?.minusDI;
        return { id: 374, name: 'ADX 30 + All Golden', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** Strategy 375: ADX > 35 + RSI 50-62 + Stochastic 50-70 */
    static strategy375(ind) {
        const match = ind.adx?.adx > 35 && ind.rsi >= 50 && ind.rsi <= 62 && ind.stochastic?.k >= 50 && ind.stochastic?.k <= 70;
        return { id: 375, name: 'Strong Trend + RSI Stoch Mid', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** Strategy 376: Stochastic ?뚮났 (15??0) + ADX ?덉젙 */
    static strategy376(ind) {
        const match = ind.stochastic?.k >= 25 && ind.stochastic?.k <= 35 && ind.stochastic?.k > ind.stochastic?.d && ind.adx?.adx >= 20 && ind.adx?.adx <= 35;
        return { id: 376, name: 'Stoch Recovery + ADX Stable', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** Strategy 377: Stochastic 45-55 + ADX 25-35 + +DI > -DI */
    static strategy377(ind) {
        const match = ind.stochastic?.k >= 45 && ind.stochastic?.k <= 55 && ind.adx?.adx >= 25 && ind.adx?.adx <= 35 && ind.adx?.plusDI > ind.adx?.minusDI;
        return { id: 377, name: 'Stoch Neutral + ADX Moderate', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** Strategy 378: Stochastic 55-70 + ADX > 30 + EMA 怨⑤뱺 */
    static strategy378(ind) {
        const match = ind.stochastic?.k >= 55 && ind.stochastic?.k <= 70 && ind.adx?.adx > 30 && ind.ema20 > ind.ema50;
        return { id: 378, name: 'Stoch Upper + ADX + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** Strategy 379: Stochastic + ADX + BB ?뺤옣 */
    static strategy379(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.adx?.adx > 25 && ind.bollingerBands?.bandwidth > 2.5 && ind.bollingerBands?.position > 50;
        return { id: 379, name: 'Stoch ADX + BB Expansion', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** Strategy 380: Stochastic 鍮좊Ⅸ 怨⑤뱺 + ADX 湲됱긽??*/
    static strategy380(ind) {
        const stochGap = (ind.stochastic?.k || 0) - (ind.stochastic?.d || 0);
        const adxRising = ind.adx?.adx > (ind.adx?.prevADX || 0);
        const match = stochGap > 8 && adxRising && ind.adx?.plusDI > ind.adx?.minusDI;
        return { id: 380, name: 'Fast Stoch + Rising ADX', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** Strategy 381: ADX < 15 + Stochastic Oversold(?〓낫 諛붾떏) */
    static strategy381(ind) {
        const match = ind.adx?.adx < 15 && ind.stochastic?.k < 25;
        return { id: 381, name: 'Range Bottom Setup', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 };
    }
    
    /** Strategy 382: ADX 15-20 + Stochastic 怨⑤뱺 + RSI < 50 */
    static strategy382(ind) {
        const match = ind.adx?.adx >= 15 && ind.adx?.adx <= 20 && ind.stochastic?.k > ind.stochastic?.d && ind.rsi < 50;
        return { id: 382, name: 'Early Trend + Stoch Golden', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** Strategy 383: ADX 利앷? + +DI 利앷? + Stochastic 怨⑤뱺 */
    static strategy383(ind) {
        const adxRising = ind.adx?.adx > (ind.adx?.prevADX || 0);
        const plusDIRising = ind.adx?.plusDI > (ind.adx?.prevPlusDI || 0);
        const match = ind.stochastic?.k > ind.stochastic?.d && adxRising && plusDIRising && ind.adx?.plusDI > ind.adx?.minusDI;
        return { id: 383, name: 'ADX + +DI Rising + Stoch', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** Strategy 384: ADX > 25 + -DI 媛먯냼 + Stochastic < 50 */
    static strategy384(ind) {
        const minusDIFalling = ind.adx?.minusDI < (ind.adx?.prevMinusDI || 100);
        const match = ind.stochastic?.k < 50 && ind.adx?.adx > 25 && minusDIFalling && ind.adx?.plusDI > ind.adx?.minusDI;
        return { id: 384, name: 'Strong ADX + Falling -DI + Stoch', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** Strategy 385: Stochastic Oversold?덉텧 (20 ?뚰뙆) */
    static strategy385(ind) {
        const match = ind.stochastic?.k >= 20 && ind.stochastic?.k <= 30 && ind.stochastic?.k > ind.stochastic?.d;
        return { id: 385, name: 'Stoch Oversold Exit', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** Strategy 386: Stochastic 50 ?뚰뙆 + ADX > 25 */
    static strategy386(ind) {
        const match = ind.stochastic?.k >= 50 && ind.stochastic?.k <= 55 && ind.adx?.adx > 25;
        return { id: 386, name: 'Stoch 50 Break + ADX', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** Strategy 387: Stochastic 媛뺤꽭 (K > 60) + ADX > 30 + +DI > 25 */
    static strategy387(ind) {
        const match = ind.stochastic?.k > 60 && ind.adx?.adx > 30 && ind.adx?.plusDI > 25;
        return { id: 387, name: 'Stoch Bullish + Strong ADX DI', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** Strategy 388: 紐⑤뱺 ?좏샇 Oversold援ш컙 */
    static strategy388(ind) {
        const match = ind.stochastic?.k < 25 && ind.rsi < 35 && ind.bollingerBands?.position < 25;
        return { id: 388, name: 'All Signals Oversold', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** Strategy 389: 紐⑤뱺 怨⑤뱺 + ADX ?뺤씤 */
    static strategy389(ind) {
        const allGolden = ind.stochastic?.k > ind.stochastic?.d && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50;
        const match = allGolden && ind.adx?.adx > 25 && ind.adx?.plusDI > ind.adx?.minusDI;
        return { id: 389, name: 'All Golden + ADX Confirm', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** Strategy 390: Stochastic + RSI + BB 紐⑤몢 ?곸듅 援ш컙 */
    static strategy390(ind) {
        const match = ind.stochastic?.k >= 45 && ind.stochastic?.k <= 65 && ind.rsi >= 48 && ind.rsi <= 62 && ind.bollingerBands?.position >= 48 && ind.bollingerBands?.position <= 65;
        return { id: 390, name: 'All Mid Upper Zone', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** Strategy 391-400: 異붽? ADX/Stochastic 議고빀 */
    static strategy391(ind) {
        const match = ind.adx?.adx >= 20 && ind.adx?.adx <= 30 && ind.stochastic?.k < 35 && ind.rsi < 45;
        return { id: 391, name: 'ADX 20-30 + Low Stoch RSI', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    static strategy392(ind) {
        const match = ind.adx?.adx >= 30 && ind.adx?.adx <= 40 && ind.stochastic?.k >= 35 && ind.stochastic?.k <= 55;
        return { id: 392, name: 'ADX 30-40 + Mid Stoch', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    static strategy393(ind) {
        const match = ind.adx?.adx > 40 && ind.stochastic?.k >= 50 && ind.stochastic?.k <= 70 && ind.adx?.plusDI > ind.adx?.minusDI;
        return { id: 393, name: 'Strong ADX + Upper Stoch', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    static strategy394(ind) {
        const match = ind.stochastic?.k > ind.stochastic?.d && ind.adx?.plusDI > ind.adx?.minusDI && ind.rsi >= 40 && ind.rsi <= 55;
        return { id: 394, name: 'Stoch + DI Golden + RSI Mid', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    static strategy395(ind) {
        const match = ind.stochastic?.k < 30 && ind.adx?.adx > 20 && ind.macd?.histogram > (ind.macd?.prevHistogram || -999);
        return { id: 395, name: 'Stoch Low + ADX + MACD Improving', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    static strategy396(ind) {
        const match = ind.stochastic?.k >= 30 && ind.stochastic?.k <= 50 && ind.adx?.adx >= 25 && ind.adx?.adx <= 40 && ind.ema20 > ind.ema50;
        return { id: 396, name: 'Stoch ADX Mid + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    static strategy397(ind) {
        const match = ind.stochastic?.k >= 40 && ind.stochastic?.k <= 60 && ind.adx?.plusDI > 20 && ind.macd?.histogram > 5;
        return { id: 397, name: 'Stoch Neutral + DI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    static strategy398(ind) {
        const match = ind.stochastic?.k > 55 && ind.adx?.adx > 30 && ind.bollingerBands?.position > 55;
        return { id: 398, name: 'Stoch Upper + ADX + BB Upper', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    static strategy399(ind) {
        const allSignals = ind.stochastic?.k > ind.stochastic?.d && ind.adx?.plusDI > ind.adx?.minusDI && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50 && ind.rsi >= 45 && ind.rsi <= 62;
        const match = allSignals && ind.adx?.adx > 25;
        return { id: 399, name: 'Full Signal Alignment', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    static strategy400(ind) {
        const match = ind.stochastic?.k >= 35 && ind.stochastic?.k <= 65 && ind.adx?.adx >= 25 && ind.adx?.adx <= 45 &&
                     ind.adx?.plusDI > ind.adx?.minusDI && ind.rsi >= 45 && ind.rsi <= 60 && ind.macd?.histogram > 0;
        return { id: 400, name: 'Balanced Strong Setup', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 };
    }

    /** 紐⑤뱺 Strategy ?ㅽ뻾 (301-400) */
    static analyzeAll(indicators) {
        return [
            this.strategy301(indicators), this.strategy302(indicators), this.strategy303(indicators),
            this.strategy304(indicators), this.strategy305(indicators), this.strategy306(indicators),
            this.strategy307(indicators), this.strategy308(indicators), this.strategy309(indicators),
            this.strategy310(indicators), this.strategy311(indicators), this.strategy312(indicators),
            this.strategy313(indicators), this.strategy314(indicators), this.strategy315(indicators),
            this.strategy316(indicators), this.strategy317(indicators), this.strategy318(indicators),
            this.strategy319(indicators), this.strategy320(indicators), this.strategy321(indicators),
            this.strategy322(indicators), this.strategy323(indicators), this.strategy324(indicators),
            this.strategy325(indicators), this.strategy326(indicators), this.strategy327(indicators),
            this.strategy328(indicators), this.strategy329(indicators), this.strategy330(indicators),
            this.strategy331(indicators), this.strategy332(indicators), this.strategy333(indicators),
            this.strategy334(indicators), this.strategy335(indicators), this.strategy336(indicators),
            this.strategy337(indicators), this.strategy338(indicators), this.strategy339(indicators),
            this.strategy340(indicators), this.strategy341(indicators), this.strategy342(indicators),
            this.strategy343(indicators), this.strategy344(indicators), this.strategy345(indicators),
            this.strategy346(indicators), this.strategy347(indicators), this.strategy348(indicators),
            this.strategy349(indicators), this.strategy350(indicators), this.strategy351(indicators),
            this.strategy352(indicators), this.strategy353(indicators), this.strategy354(indicators),
            this.strategy355(indicators), this.strategy356(indicators), this.strategy357(indicators),
            this.strategy358(indicators), this.strategy359(indicators), this.strategy360(indicators),
            this.strategy361(indicators), this.strategy362(indicators), this.strategy363(indicators),
            this.strategy364(indicators), this.strategy365(indicators), this.strategy366(indicators),
            this.strategy367(indicators), this.strategy368(indicators), this.strategy369(indicators),
            this.strategy370(indicators), this.strategy371(indicators), this.strategy372(indicators),
            this.strategy373(indicators), this.strategy374(indicators), this.strategy375(indicators),
            this.strategy376(indicators), this.strategy377(indicators), this.strategy378(indicators),
            this.strategy379(indicators), this.strategy380(indicators), this.strategy381(indicators),
            this.strategy382(indicators), this.strategy383(indicators), this.strategy384(indicators),
            this.strategy385(indicators), this.strategy386(indicators), this.strategy387(indicators),
            this.strategy388(indicators), this.strategy389(indicators), this.strategy390(indicators),
            this.strategy391(indicators), this.strategy392(indicators), this.strategy393(indicators),
            this.strategy394(indicators), this.strategy395(indicators), this.strategy396(indicators),
            this.strategy397(indicators), this.strategy398(indicators), this.strategy399(indicators),
            this.strategy400(indicators)
        ];
    }
}


