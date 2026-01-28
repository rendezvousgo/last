/**
 * UP ?�략 ?�장 (ID: 2401-2600)
 * 
 * STRATEGY_IDEAS.txt 기반 체계??구성:
 * - 2401-2500: 매수/매도 ?�력 (100�?
 * - 2501-2600: ?�일 캔들 ?�턴 (100�? - 2501-2650???��?
 */

export class StrategiesUp2401 {
    
    // ==================== 매수/매도 ?�력 (2401-2500) ====================
    // OBV, 가�?거래??관�? 매수 ?�력 지??
    
    // --- 매수 ?�력 기본 (2401-2420) ---
    
    /** 가�??�승 + 거래??증�? (매수 ?�력) */
    static strategy2401(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.2; return { id: 2401, name: 'Price Up + Volume Up 1.2x', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    static strategy2402(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5; return { id: 2402, name: 'Price Up + Volume Up 1.5x', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy2403(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0; return { id: 2403, name: 'Price Up + Volume Up 2x', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy2404(ind) { const match = ind.priceChange > 1 && ind.volumeRatio >= 1.5; return { id: 2404, name: 'Price +1% + Volume 1.5x', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy2405(ind) { const match = ind.priceChange > 1 && ind.volumeRatio >= 2.0; return { id: 2405, name: 'Price +1% + Volume 2x', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy2406(ind) { const match = ind.priceChange > 2 && ind.volumeRatio >= 1.5; return { id: 2406, name: 'Price +2% + Volume 1.5x', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy2407(ind) { const match = ind.priceChange > 2 && ind.volumeRatio >= 2.0; return { id: 2407, name: 'Price +2% + Volume 2x', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy2408(ind) { const match = ind.priceChange > 3 && ind.volumeRatio >= 2.0; return { id: 2408, name: 'Price +3% + Volume 2x', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy2409(ind) { const match = ind.priceChange > 0.5 && ind.volumeRatio >= 1.3; return { id: 2409, name: 'Price +0.5% + Volume 1.3x', direction: 'UP', match: Boolean(match), confidence: match ? 67 : 0 }; }
    static strategy2410(ind) { const match = ind.priceChange > 0.5 && ind.volumeRatio >= 1.8; return { id: 2410, name: 'Price +0.5% + Volume 1.8x', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    
    /** 매수 ?�력 강도 (가�?변???��?거래?? */
    static strategy2411(ind) { const pressure = ind.priceChange > 0 ? ind.volumeRatio / ind.priceChange : 0; const match = pressure >= 1.5; return { id: 2411, name: 'Buy Pressure Ratio 1.5', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy2412(ind) { const pressure = ind.priceChange > 0 ? ind.volumeRatio / ind.priceChange : 0; const match = pressure >= 2.0; return { id: 2412, name: 'Buy Pressure Ratio 2.0', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy2413(ind) { const pressure = ind.priceChange > 0 ? ind.volumeRatio / ind.priceChange : 0; const match = pressure >= 2.5; return { id: 2413, name: 'Buy Pressure Ratio 2.5', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy2414(ind) { const pressure = ind.priceChange > 0 ? ind.volumeRatio / ind.priceChange : 0; const match = pressure >= 3.0; return { id: 2414, name: 'Buy Pressure Ratio 3.0', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy2415(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.2 && ind.close > ind.open; return { id: 2415, name: 'Green Candle + Volume Up', direction: 'UP', match: Boolean(match), confidence: match ? 67 : 0 }; }
    static strategy2416(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.close > ind.open; return { id: 2416, name: 'Green Candle + Volume 1.5x', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy2417(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.close > ind.open; return { id: 2417, name: 'Green Candle + Volume 2x', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy2418(ind) { const bodyRatio = ind.high !== ind.low ? Math.abs(ind.close - ind.open) / (ind.high - ind.low) : 0; const match = ind.close > ind.open && bodyRatio > 0.7 && ind.volumeRatio >= 1.5; return { id: 2418, name: 'Strong Green + Volume 1.5x', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy2419(ind) { const bodyRatio = ind.high !== ind.low ? Math.abs(ind.close - ind.open) / (ind.high - ind.low) : 0; const match = ind.close > ind.open && bodyRatio > 0.8 && ind.volumeRatio >= 2.0; return { id: 2419, name: 'Strong Green + Volume 2x', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy2420(ind) { const match = ind.priceChange > 1.5 && ind.volumeRatio >= 2.5 && ind.close > ind.open; return { id: 2420, name: 'Strong Buy Pressure', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    
    // --- 매수 ?�력 + RSI (2421-2435) ---
    
    /** 매수 ?�력 + RSI 과매??(강한 반등 ?�호) */
    static strategy2421(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.rsi < 30; return { id: 2421, name: 'Buy Pressure + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy2422(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.rsi < 30; return { id: 2422, name: 'Buy Pressure 2x + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy2423(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.rsi < 25; return { id: 2423, name: 'Buy Pressure + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy2424(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.rsi < 25; return { id: 2424, name: 'Buy Pressure 2x + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy2425(ind) { const match = ind.priceChange > 1 && ind.volumeRatio >= 1.5 && ind.rsi < 30; return { id: 2425, name: 'Price +1% Vol 1.5x + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy2426(ind) { const match = ind.priceChange > 1 && ind.volumeRatio >= 2.0 && ind.rsi < 30; return { id: 2426, name: 'Price +1% Vol 2x + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy2427(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.rsi < 35; return { id: 2427, name: 'Buy Pressure + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy2428(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.rsi < 35; return { id: 2428, name: 'Buy Pressure 2x + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    /** 매수 ?�력 + RSI 중립/강세 */
    static strategy2429(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.rsi >= 45 && ind.rsi <= 55; return { id: 2429, name: 'Buy Pressure + RSI Neutral', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy2430(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.rsi >= 45 && ind.rsi <= 55; return { id: 2430, name: 'Buy Pressure 2x + RSI Neutral', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy2431(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.rsi >= 50 && ind.rsi <= 60; return { id: 2431, name: 'Buy Pressure + RSI Strong', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy2432(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.rsi >= 50 && ind.rsi <= 65; return { id: 2432, name: 'Buy Pressure 2x + RSI Strong', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy2433(ind) { const match = ind.priceChange > 0.5 && ind.volumeRatio >= 1.5 && ind.rsi < 32; return { id: 2433, name: 'Price +0.5% Vol + RSI32', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy2434(ind) { const match = ind.priceChange > 1 && ind.volumeRatio >= 1.8 && ind.rsi < 28; return { id: 2434, name: 'Price +1% Vol 1.8x + RSI28', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy2435(ind) { const match = ind.priceChange > 2 && ind.volumeRatio >= 2.0 && ind.rsi < 30; return { id: 2435, name: 'Price +2% Vol 2x + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    
    // --- 매수 ?�력 + MACD (2436-2450) ---
    
    /** 매수 ?�력 + MACD Golden */
    static strategy2436(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.macd?.MACD > ind.macd?.signal; return { id: 2436, name: 'Buy Pressure + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy2437(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.macd?.MACD > ind.macd?.signal; return { id: 2437, name: 'Buy Pressure 2x + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy2438(ind) { const match = ind.priceChange > 1 && ind.volumeRatio >= 1.5 && ind.macd?.MACD > ind.macd?.signal; return { id: 2438, name: 'Price +1% Vol + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy2439(ind) { const match = ind.priceChange > 1 && ind.volumeRatio >= 2.0 && ind.macd?.MACD > ind.macd?.signal; return { id: 2439, name: 'Price +1% Vol 2x + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    
    /** 매수 ?�력 + MACD Histogram */
    static strategy2440(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.macd?.histogram > 0; return { id: 2440, name: 'Buy Pressure + MACD Hist+', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy2441(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.macd?.histogram > 10; return { id: 2441, name: 'Buy Pressure 2x + MACD Hist10', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy2442(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.macd?.histogram > 15; return { id: 2442, name: 'Buy Pressure + MACD Hist15', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    
    /** 매수 ?�력 + MACD 0??*/
    static strategy2443(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 2443, name: 'Buy Pressure + MACD Above0 Golden', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy2444(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 2444, name: 'Buy Pressure 2x + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy2445(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.macd?.MACD < 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 2445, name: 'Buy Pressure + MACD Below0 Golden', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy2446(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.macd?.MACD < 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 2446, name: 'Buy Pressure 2x + MACD Below0', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    /** 매수 ?�력 + MACD Turn */
    static strategy2447(ind) { const histTurn = ind.macd?.histogram > (ind.macd?.prevHistogram || -999); const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && histTurn; return { id: 2447, name: 'Buy Pressure + MACD Turn', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy2448(ind) { const histTurn = ind.macd?.histogram > (ind.macd?.prevHistogram || -999); const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && histTurn; return { id: 2448, name: 'Buy Pressure 2x + MACD Turn', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy2449(ind) { const crossZero = ind.macd?.histogram >= 0 && (ind.macd?.prevHistogram || 0) < 0; const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && crossZero; return { id: 2449, name: 'Buy Pressure + MACD Cross0', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy2450(ind) { const crossZero = ind.macd?.histogram >= 0 && (ind.macd?.prevHistogram || 0) < 0; const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && crossZero; return { id: 2450, name: 'Buy Pressure 2x + MACD Cross0', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    // --- 매수 ?�력 + BB (2451-2465) ---
    
    /** 매수 ?�력 + BB ?�단 (반등 ?�인) */
    static strategy2451(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.bollingerBands?.position < 20; return { id: 2451, name: 'Buy Pressure + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy2452(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.bollingerBands?.position < 20; return { id: 2452, name: 'Buy Pressure 2x + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy2453(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.bollingerBands?.position < 15; return { id: 2453, name: 'Buy Pressure + BB15', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy2454(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.bollingerBands?.position < 15; return { id: 2454, name: 'Buy Pressure 2x + BB15', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy2455(ind) { const match = ind.priceChange > 1 && ind.volumeRatio >= 1.5 && ind.bollingerBands?.position < 25; return { id: 2455, name: 'Price +1% Vol + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy2456(ind) { const match = ind.priceChange > 1 && ind.volumeRatio >= 2.0 && ind.bollingerBands?.position < 20; return { id: 2456, name: 'Price +1% Vol 2x + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    /** 매수 ?�력 + BB 밴드??*/
    static strategy2457(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.bollingerBands?.position < 30 && ind.bollingerBands?.bandwidth >= 3; return { id: 2457, name: 'Buy Pressure + BB Expand', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy2458(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 4; return { id: 2458, name: 'Buy Pressure 2x + BB Wide', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy2459(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth < 2; return { id: 2459, name: 'Buy Pressure + BB Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy2460(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth < 2; return { id: 2460, name: 'Buy Pressure 2x + BB Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    
    /** 매수 ?�력 + BB 중심 ?�파 */
    static strategy2461(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 55; return { id: 2461, name: 'Buy Pressure + BB Mid', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy2462(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 60; return { id: 2462, name: 'Buy Pressure 2x + BB Mid', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy2463(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.bollingerBands?.position > 50 && ind.bollingerBands?.position < 70; return { id: 2463, name: 'Buy Pressure + BB Upper Mid', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy2464(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.bollingerBands?.position > 50 && ind.bollingerBands?.position < 75; return { id: 2464, name: 'Buy Pressure 2x + BB Upper', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy2465(ind) { const match = ind.priceChange > 1 && ind.volumeRatio >= 2.0 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3; return { id: 2465, name: 'Strong Buy + BB20 Expand', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    // --- 매수 ?�력 + EMA (2466-2480) ---
    
    /** 매수 ?�력 + EMA Golden */
    static strategy2466(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.ema20 > ind.ema50; return { id: 2466, name: 'Buy Pressure + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy2467(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.ema20 > ind.ema50; return { id: 2467, name: 'Buy Pressure 2x + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy2468(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.sma20 > ind.sma50; return { id: 2468, name: 'Buy Pressure + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy2469(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.sma20 > ind.sma50; return { id: 2469, name: 'Buy Pressure 2x + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    
    /** 매수 ?�력 + EMA Stack */
    static strategy2470(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 2470, name: 'Buy Pressure + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy2471(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 2471, name: 'Buy Pressure 2x + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy2472(ind) { const match = ind.priceChange > 1 && ind.volumeRatio >= 1.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 2472, name: 'Price +1% Vol + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy2473(ind) { const match = ind.priceChange > 1 && ind.volumeRatio >= 2.0 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 2473, name: 'Price +1% Vol 2x + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    /** 매수 ?�력 + Double MA / Full Stack */
    static strategy2474(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 2474, name: 'Buy Pressure + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy2475(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 2475, name: 'Buy Pressure 2x + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy2476(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 2476, name: 'Buy Pressure + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy2477(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 2477, name: 'Buy Pressure 2x + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy2478(ind) { const match = ind.priceChange > 1 && ind.volumeRatio >= 1.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 2478, name: 'Price +1% + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy2479(ind) { const match = ind.priceChange > 1 && ind.volumeRatio >= 2.0 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 2479, name: 'Price +1% 2x + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy2480(ind) { const match = ind.priceChange > 2 && ind.volumeRatio >= 2.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 2480, name: 'Strong Buy + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    
    // --- 매수 ?�력 + 복합 (2481-2500) ---
    
    /** 매수 ?�력 + 2�?복합 */
    static strategy2481(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 2481, name: 'Buy Pressure + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy2482(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 2482, name: 'Buy Pressure 2x + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy2483(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.rsi < 30 && ind.bollingerBands?.position < 25; return { id: 2483, name: 'Buy Pressure + RSI30 + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy2484(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.rsi < 30 && ind.bollingerBands?.position < 25; return { id: 2484, name: 'Buy Pressure 2x + RSI30 + BB', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy2485(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30; return { id: 2485, name: 'Buy Pressure + MACD + BB30', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy2486(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25; return { id: 2486, name: 'Buy Pressure 2x + MACD + BB', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy2487(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50; return { id: 2487, name: 'Buy Pressure + MACD + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy2488(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50; return { id: 2488, name: 'Buy Pressure 2x + MACD + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    /** 매수 ?�력 + 3�?복합 */
    static strategy2489(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25; return { id: 2489, name: 'Buy Pressure + RSI + MACD + BB', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy2490(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25; return { id: 2490, name: 'Buy Pressure 2x + RSI + MACD + BB', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy2491(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50; return { id: 2491, name: 'Buy Pressure + RSI + MACD + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy2492(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50; return { id: 2492, name: 'Buy Pressure 2x + RSI + MACD + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy2493(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20; return { id: 2493, name: 'Buy Pressure + RSI25 + MACD + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy2494(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20; return { id: 2494, name: 'Buy Pressure 2x + RSI25 + MACD + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    
    /** 매수 ?�력 + 4�?복합 (Ultimate Buy Pressure) */
    static strategy2495(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 1.5 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 2495, name: 'Buy Pressure + RSI + MACD + BB + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy2496(ind) { const match = ind.priceChange > 0 && ind.volumeRatio >= 2.0 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 2496, name: 'Buy Pressure 2x + RSI + MACD + BB + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy2497(ind) { const match = ind.priceChange > 1 && ind.volumeRatio >= 2.0 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 2497, name: 'Price +1% 2x + RSI + MACD + BB + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy2498(ind) { const match = ind.priceChange > 1 && ind.volumeRatio >= 2.0 && ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 2498, name: 'Strong Buy Pressure Ultimate', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    static strategy2499(ind) { const match = ind.priceChange > 2 && ind.volumeRatio >= 2.5 && ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 2499, name: 'Extreme Buy Pressure Ultimate', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    static strategy2500(ind) { const match = ind.priceChange > 2 && ind.volumeRatio >= 3.0 && ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 15 && ind.bollingerBands?.bandwidth >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 2500, name: 'Ultimate Buy Pressure Signal', direction: 'UP', match: Boolean(match), confidence: match ? 98 : 0 }; }
    
    // ==================== ?�일 캔들 ?�턴 (2501-2600) ====================
    // 캔들 ?�턴 ?�식 + 지??복합
    
    // --- ?�봉 ?�턴 기본 (2501-2520) ---
    
    /** ?�봉 ?�기 기�? */
    static strategy2501(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const match = ind.close > ind.open && range > 0 && body / range > 0.5; return { id: 2501, name: 'Green Candle Body 50%', direction: 'UP', match: Boolean(match), confidence: match ? 58 : 0 }; }
    static strategy2502(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const match = ind.close > ind.open && range > 0 && body / range > 0.6; return { id: 2502, name: 'Green Candle Body 60%', direction: 'UP', match: Boolean(match), confidence: match ? 62 : 0 }; }
    static strategy2503(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const match = ind.close > ind.open && range > 0 && body / range > 0.7; return { id: 2503, name: 'Green Candle Body 70%', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 }; }
    static strategy2504(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const match = ind.close > ind.open && range > 0 && body / range > 0.8; return { id: 2504, name: 'Green Candle Body 80%', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy2505(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const match = ind.close > ind.open && range > 0 && body / range > 0.9; return { id: 2505, name: 'Marubozu Green', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    
    /** ?�봉 + 가�?변??*/
    static strategy2506(ind) { const match = ind.close > ind.open && ind.priceChange > 1; return { id: 2506, name: 'Green Candle +1%', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    static strategy2507(ind) { const match = ind.close > ind.open && ind.priceChange > 2; return { id: 2507, name: 'Green Candle +2%', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy2508(ind) { const match = ind.close > ind.open && ind.priceChange > 3; return { id: 2508, name: 'Green Candle +3%', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy2509(ind) { const match = ind.close > ind.open && ind.priceChange > 4; return { id: 2509, name: 'Green Candle +4%', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy2510(ind) { const match = ind.close > ind.open && ind.priceChange > 5; return { id: 2510, name: 'Big Green Candle +5%', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    
    /** Hammer ?�턴 (?�락 ??반등 ?�호) */
    static strategy2511(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const match = lowerWick > body * 2 && upperWick < body * 0.5 && body > 0; return { id: 2511, name: 'Hammer Pattern', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy2512(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const match = lowerWick > body * 2.5 && upperWick < body * 0.3 && body > 0; return { id: 2512, name: 'Strong Hammer', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy2513(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const match = lowerWick > body * 3 && upperWick < body * 0.2 && body > 0 && ind.close > ind.open; return { id: 2513, name: 'Perfect Hammer Green', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    /** Inverted Hammer (???�머) */
    static strategy2514(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const match = upperWick > body * 2 && lowerWick < body * 0.5 && body > 0; return { id: 2514, name: 'Inverted Hammer', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    static strategy2515(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const match = upperWick > body * 2.5 && lowerWick < body * 0.3 && body > 0 && ind.close > ind.open; return { id: 2515, name: 'Strong Inverted Hammer Green', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    
    /** Doji ?�턴 (불확?�성 ???�환 가?? */
    static strategy2516(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const match = range > 0 && body / range < 0.1; return { id: 2516, name: 'Doji Pattern', direction: 'UP', match: Boolean(match), confidence: match ? 55 : 0 }; }
    static strategy2517(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const match = range > 0 && body / range < 0.05; return { id: 2517, name: 'Perfect Doji', direction: 'UP', match: Boolean(match), confidence: match ? 58 : 0 }; }
    static strategy2518(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const lowerWick = Math.min(ind.open, ind.close) - ind.low; const match = range > 0 && body / range < 0.1 && lowerWick > range * 0.6; return { id: 2518, name: 'Dragonfly Doji', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy2519(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const match = range > 0 && body / range < 0.1 && upperWick > range * 0.6; return { id: 2519, name: 'Gravestone Doji', direction: 'UP', match: Boolean(match), confidence: match ? 50 : 0 }; }
    static strategy2520(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const match = range > 0 && body / range < 0.15 && lowerWick > range * 0.35 && upperWick > range * 0.35; return { id: 2520, name: 'Long-Legged Doji', direction: 'UP', match: Boolean(match), confidence: match ? 55 : 0 }; }
    
    // --- 캔들 ?�턴 + RSI (2521-2540) ---
    
    /** Hammer + RSI */
    static strategy2521(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2 && upperWick < body * 0.5; const match = (hammer && ind.rsi < 30) && ind.consecutiveGreen >= 2; return { id: 2521, name: 'Hammer + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy2522(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2 && upperWick < body * 0.5; const match = (hammer && ind.rsi < 25) && ind.fearGreedIndex < 60; return { id: 2522, name: 'Hammer + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy2523(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2.5 && upperWick < body * 0.3; const match = hammer && ind.rsi < 30 && ind.volume > (ind.avgVolume || ind.volume) * 1.25; return { id: 2523, name: 'Strong Hammer + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy2524(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2.5 && upperWick < body * 0.3; const match = hammer && ind.rsi < 25 && ind.volume > (ind.prevVolume || ind.volume) * 1.1300000000000001; return { id: 2524, name: 'Strong Hammer + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** ?�봉 + RSI */
    static strategy2525(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.7; const match = (strongGreen && ind.rsi < 30) && ind.fearGreedIndex > 30; return { id: 2525, name: 'Strong Green + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy2526(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.7; const match = (strongGreen && ind.rsi < 25) && ind.fearGreedIndex < 70; return { id: 2526, name: 'Strong Green + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy2527(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.8; const match = strongGreen && ind.rsi < 30 && ind.volume > (ind.avgVolume || ind.volume) * 1.2000000000000002; return { id: 2527, name: 'Marubozu Green + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy2528(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.8; const match = strongGreen && ind.rsi < 25 && ind.volume > (ind.prevVolume || ind.volume) * 1.21; return { id: 2528, name: 'Marubozu Green + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    
    /** Big Green + RSI */
    static strategy2529(ind) { const match = ind.close > ind.open && ind.priceChange > 2 && ind.rsi < 35; return { id: 2529, name: 'Green +2% + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy2530(ind) { const match = ind.close > ind.open && ind.priceChange > 2 && ind.rsi < 30; return { id: 2530, name: 'Green +2% + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy2531(ind) { const match = ind.close > ind.open && ind.priceChange > 3 && ind.rsi < 35; return { id: 2531, name: 'Green +3% + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy2532(ind) { const match = ind.close > ind.open && ind.priceChange > 3 && ind.rsi < 30; return { id: 2532, name: 'Green +3% + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy2533(ind) { const match = ind.close > ind.open && ind.priceChange > 4 && ind.rsi < 35; return { id: 2533, name: 'Big Green +4% + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy2534(ind) { const match = ind.close > ind.open && ind.priceChange > 5 && ind.rsi < 35; return { id: 2534, name: 'Big Green +5% + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    
    /** Doji + RSI */
    static strategy2535(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const doji = range > 0 && body / range < 0.1; const match = doji && ind.rsi < 30; return { id: 2535, name: 'Doji + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy2536(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const doji = range > 0 && body / range < 0.1; const match = doji && ind.rsi < 25; return { id: 2536, name: 'Doji + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy2537(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const lowerWick = Math.min(ind.open, ind.close) - ind.low; const dragonfly = range > 0 && body / range < 0.1 && lowerWick > range * 0.6; const match = dragonfly && ind.rsi < 30; return { id: 2537, name: 'Dragonfly Doji + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy2538(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const lowerWick = Math.min(ind.open, ind.close) - ind.low; const dragonfly = range > 0 && body / range < 0.1 && lowerWick > range * 0.6; const match = dragonfly && ind.rsi < 25; return { id: 2538, name: 'Dragonfly Doji + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy2539(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.7; const match = strongGreen && ind.rsi >= 45 && ind.rsi <= 55; return { id: 2539, name: 'Strong Green + RSI Neutral', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy2540(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.7; const match = strongGreen && ind.rsi >= 50 && ind.rsi <= 60; return { id: 2540, name: 'Strong Green + RSI Strong', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    
    // --- 캔들 ?�턴 + MACD (2541-2560) ---
    
    /** Hammer + MACD */
    static strategy2541(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2 && upperWick < body * 0.5; const match = (hammer && ind.macd?.MACD > ind.macd?.signal) && ind.ema20 > ind.sma20; return { id: 2541, name: 'Hammer + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy2542(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2.5 && upperWick < body * 0.3; const match = hammer && ind.macd?.MACD > ind.macd?.signal && ind.obv > (ind.prevObv || 0); return { id: 2542, name: 'Strong Hammer + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy2543(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2 && upperWick < body * 0.5; const match = hammer && ind.macd?.histogram > 0; return { id: 2543, name: 'Hammer + MACD Hist+', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy2544(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2 && upperWick < body * 0.5; const match = hammer && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 2544, name: 'Hammer + MACD Above0 Golden', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    
    /** ?�봉 + MACD */
    static strategy2545(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.7; const match = (strongGreen && ind.macd?.MACD > ind.macd?.signal) && ind.rsi > 30 && ind.rsi < 70; return { id: 2545, name: 'Strong Green + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy2546(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.8; const match = strongGreen && ind.macd?.MACD > ind.macd?.signal && ind.obv > (ind.prevObv || 0); return { id: 2546, name: 'Marubozu + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy2547(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.7; const match = strongGreen && ind.macd?.histogram > 10; return { id: 2547, name: 'Strong Green + MACD Hist10', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy2548(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.7; const match = strongGreen && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 2548, name: 'Strong Green + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    /** Big Green + MACD */
    static strategy2549(ind) { const match = ind.close > ind.open && ind.priceChange > 2 && ind.macd?.MACD > ind.macd?.signal; return { id: 2549, name: 'Green +2% + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy2550(ind) { const match = ind.close > ind.open && ind.priceChange > 3 && ind.macd?.MACD > ind.macd?.signal; return { id: 2550, name: 'Green +3% + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy2551(ind) { const match = ind.close > ind.open && ind.priceChange > 2 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 2551, name: 'Green +2% + MACD Above0 Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy2552(ind) { const match = ind.close > ind.open && ind.priceChange > 3 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 2552, name: 'Green +3% + MACD Above0 Golden', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy2553(ind) { const match = ind.close > ind.open && ind.priceChange > 4 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 10; return { id: 2553, name: 'Big Green +4% + MACD Strong', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy2554(ind) { const match = ind.close > ind.open && ind.priceChange > 5 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 15; return { id: 2554, name: 'Big Green +5% + MACD Strong', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    
    /** MACD Cross + Candle */
    static strategy2555(ind) { const crossZero = ind.macd?.histogram >= 0 && (ind.macd?.prevHistogram || 0) < 0; const match = ind.close > ind.open && crossZero; return { id: 2555, name: 'Green + MACD Cross0', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy2556(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.7; const crossZero = ind.macd?.histogram >= 0 && (ind.macd?.prevHistogram || 0) < 0; const match = strongGreen && crossZero; return { id: 2556, name: 'Strong Green + MACD Cross0', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy2557(ind) { const histTurn = ind.macd?.histogram > (ind.macd?.prevHistogram || -999); const match = ind.close > ind.open && ind.priceChange > 1 && histTurn; return { id: 2557, name: 'Green +1% + MACD Turn', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy2558(ind) { const histTurn = ind.macd?.histogram > (ind.macd?.prevHistogram || -999); const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.7; const match = strongGreen && histTurn; return { id: 2558, name: 'Strong Green + MACD Turn', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy2559(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2 && upperWick < body * 0.5; const histTurn = ind.macd?.histogram > (ind.macd?.prevHistogram || -999); const match = hammer && histTurn; return { id: 2559, name: 'Hammer + MACD Turn', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy2560(ind) { const crossZero = ind.macd?.histogram >= 0 && (ind.macd?.prevHistogram || 0) < 0; const match = ind.close > ind.open && ind.priceChange > 2 && crossZero; return { id: 2560, name: 'Green +2% + MACD Cross0', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    // --- 캔들 ?�턴 + BB (2561-2575) ---
    
    /** Hammer + BB */
    static strategy2561(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2 && upperWick < body * 0.5; const match = (hammer && ind.bollingerBands?.position < 20) && ind.rsi > 40 && ind.rsi < 60; return { id: 2561, name: 'Hammer + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy2562(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2 && upperWick < body * 0.5; const match = (hammer && ind.bollingerBands?.position < 15) && ind.macd?.histogram > 0; return { id: 2562, name: 'Hammer + BB15', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy2563(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2.5 && upperWick < body * 0.3; const match = hammer && ind.bollingerBands?.position < 20 && ind.volume > (ind.avgVolume || ind.volume) * 1.25; return { id: 2563, name: 'Strong Hammer + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy2564(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2.5 && upperWick < body * 0.3; const match = hammer && ind.bollingerBands?.position < 15 && ind.volume > (ind.prevVolume || ind.volume) * 1.1300000000000001; return { id: 2564, name: 'Strong Hammer + BB15', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** ?�봉 + BB */
    static strategy2565(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.7; const match = strongGreen && ind.bollingerBands?.position < 25; return { id: 2565, name: 'Strong Green + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy2566(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.7; const match = (strongGreen && ind.bollingerBands?.position < 20) && ind.macd?.histogram > 5; return { id: 2566, name: 'Strong Green + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy2567(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.8; const match = strongGreen && ind.bollingerBands?.position < 20 && ind.volume > (ind.avgVolume || ind.volume) * 1.2000000000000002; return { id: 2567, name: 'Marubozu + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    
    /** Big Green + BB */
    static strategy2568(ind) { const match = ind.close > ind.open && ind.priceChange > 2 && ind.bollingerBands?.position < 25; return { id: 2568, name: 'Green +2% + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy2569(ind) { const match = ind.close > ind.open && ind.priceChange > 2 && ind.bollingerBands?.position < 20; return { id: 2569, name: 'Green +2% + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy2570(ind) { const match = ind.close > ind.open && ind.priceChange > 3 && ind.bollingerBands?.position < 25; return { id: 2570, name: 'Green +3% + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy2571(ind) { const match = ind.close > ind.open && ind.priceChange > 3 && ind.bollingerBands?.position < 20; return { id: 2571, name: 'Green +3% + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    /** Dragonfly Doji + BB */
    static strategy2572(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const lowerWick = Math.min(ind.open, ind.close) - ind.low; const dragonfly = range > 0 && body / range < 0.1 && lowerWick > range * 0.6; const match = dragonfly && ind.bollingerBands?.position < 20; return { id: 2572, name: 'Dragonfly Doji + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy2573(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const lowerWick = Math.min(ind.open, ind.close) - ind.low; const dragonfly = range > 0 && body / range < 0.1 && lowerWick > range * 0.6; const match = dragonfly && ind.bollingerBands?.position < 15; return { id: 2573, name: 'Dragonfly Doji + BB15', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy2574(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const doji = range > 0 && body / range < 0.1; const match = doji && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth < 2; return { id: 2574, name: 'Doji + BB20 Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy2575(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.7; const match = strongGreen && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3; return { id: 2575, name: 'Strong Green + BB20 Expand', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    // --- 캔들 ?�턴 + EMA (2576-2590) ---
    
    /** Hammer + EMA */
    static strategy2576(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2 && upperWick < body * 0.5; const match = hammer && ind.ema20 > ind.ema50; return { id: 2576, name: 'Hammer + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy2577(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2 && upperWick < body * 0.5; const match = (hammer && ind.close > ind.ema20 && ind.ema20 > ind.ema50) && ind.macd?.histogram > -5; return { id: 2577, name: 'Hammer + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy2578(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2.5 && upperWick < body * 0.3; const match = hammer && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.obv > (ind.prevObv || 0); return { id: 2578, name: 'Strong Hammer + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    /** ?�봉 + EMA */
    static strategy2579(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.7; const match = strongGreen && ind.ema20 > ind.ema50; return { id: 2579, name: 'Strong Green + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy2580(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.7; const match = (strongGreen && ind.close > ind.ema20 && ind.ema20 > ind.ema50) && ind.ema10 > ind.ema20; return { id: 2580, name: 'Strong Green + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy2581(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.8; const match = strongGreen && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.volume > ind.avgVolume * 1.5; return { id: 2581, name: 'Marubozu + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    
    /** Big Green + EMA */
    static strategy2582(ind) { const match = ind.close > ind.open && ind.priceChange > 2 && ind.ema20 > ind.ema50; return { id: 2582, name: 'Green +2% + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy2583(ind) { const match = ind.close > ind.open && ind.priceChange > 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 2583, name: 'Green +2% + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy2584(ind) { const match = ind.close > ind.open && ind.priceChange > 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 2584, name: 'Green +3% + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy2585(ind) { const match = ind.close > ind.open && ind.priceChange > 4 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 2585, name: 'Big Green +4% + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    
    /** Full Stack + Candle */
    static strategy2586(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.7; const match = (strongGreen && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50) && ind.ema20 > ind.ema50; return { id: 2586, name: 'Strong Green + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy2587(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.8; const match = strongGreen && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.volume > (ind.avgVolume || ind.volume) * 1.2000000000000002; return { id: 2587, name: 'Marubozu + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy2588(ind) { const match = ind.close > ind.open && ind.priceChange > 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 2588, name: 'Green +2% + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy2589(ind) { const match = ind.close > ind.open && ind.priceChange > 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 2589, name: 'Green +3% + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy2590(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2 && upperWick < body * 0.5; const match = hammer && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 2590, name: 'Hammer + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    // --- 캔들 ?�턴 + 복합 (2591-2600) ---
    
    /** Hammer + 복합 */
    static strategy2591(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2 && upperWick < body * 0.5; const match = hammer && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 2591, name: 'Hammer + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy2592(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2 && upperWick < body * 0.5; const match = hammer && ind.rsi < 30 && ind.bollingerBands?.position < 20; return { id: 2592, name: 'Hammer + RSI30 + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy2593(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2 && upperWick < body * 0.5; const match = hammer && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25; return { id: 2593, name: 'Hammer + MACD + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy2594(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2 && upperWick < body * 0.5; const match = hammer && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50; return { id: 2594, name: 'Hammer + MACD + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    /** Strong Green + 복합 */
    static strategy2595(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.7; const match = strongGreen && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 2595, name: 'Strong Green + RSI35 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy2596(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.7; const match = strongGreen && ind.rsi < 35 && ind.bollingerBands?.position < 30; return { id: 2596, name: 'Strong Green + RSI35 + BB30', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy2597(ind) { const body = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const strongGreen = ind.close > ind.open && range > 0 && body / range > 0.7; const match = strongGreen && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30 && ind.ema20 > ind.ema50; return { id: 2597, name: 'Strong Green + MACD + BB + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    
    /** Ultimate Candle */
    static strategy2598(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2 && upperWick < body * 0.5; const match = hammer && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20; return { id: 2598, name: 'Hammer + RSI30 + MACD + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy2599(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2 && upperWick < body * 0.5; const match = hammer && ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 2599, name: 'Hammer + RSI25 + MACD + BB20 + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy2600(ind) { const body = Math.abs(ind.close - ind.open); const lowerWick = Math.min(ind.open, ind.close) - ind.low; const upperWick = ind.high - Math.max(ind.open, ind.close); const hammer = body > 0 && lowerWick > body * 2.5 && upperWick < body * 0.3 && ind.close > ind.open; const match = hammer && ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 15 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 2600, name: 'Ultimate Hammer Buy Signal', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }

    /** 모든 ?�략 ?�행 (2401-2600) */
    static analyzeAll(indicators) {
        return [
            this.strategy2401(indicators), this.strategy2402(indicators), this.strategy2403(indicators),
            this.strategy2404(indicators), this.strategy2405(indicators), this.strategy2406(indicators),
            this.strategy2407(indicators), this.strategy2408(indicators), this.strategy2409(indicators),
            this.strategy2410(indicators), this.strategy2411(indicators), this.strategy2412(indicators),
            this.strategy2413(indicators), this.strategy2414(indicators), this.strategy2415(indicators),
            this.strategy2416(indicators), this.strategy2417(indicators), this.strategy2418(indicators),
            this.strategy2419(indicators), this.strategy2420(indicators), this.strategy2421(indicators),
            this.strategy2422(indicators), this.strategy2423(indicators), this.strategy2424(indicators),
            this.strategy2425(indicators), this.strategy2426(indicators), this.strategy2427(indicators),
            this.strategy2428(indicators), this.strategy2429(indicators), this.strategy2430(indicators),
            this.strategy2431(indicators), this.strategy2432(indicators), this.strategy2433(indicators),
            this.strategy2434(indicators), this.strategy2435(indicators), this.strategy2436(indicators),
            this.strategy2437(indicators), this.strategy2438(indicators), this.strategy2439(indicators),
            this.strategy2440(indicators), this.strategy2441(indicators), this.strategy2442(indicators),
            this.strategy2443(indicators), this.strategy2444(indicators), this.strategy2445(indicators),
            this.strategy2446(indicators), this.strategy2447(indicators), this.strategy2448(indicators),
            this.strategy2449(indicators), this.strategy2450(indicators), this.strategy2451(indicators),
            this.strategy2452(indicators), this.strategy2453(indicators), this.strategy2454(indicators),
            this.strategy2455(indicators), this.strategy2456(indicators), this.strategy2457(indicators),
            this.strategy2458(indicators), this.strategy2459(indicators), this.strategy2460(indicators),
            this.strategy2461(indicators), this.strategy2462(indicators), this.strategy2463(indicators),
            this.strategy2464(indicators), this.strategy2465(indicators), this.strategy2466(indicators),
            this.strategy2467(indicators), this.strategy2468(indicators), this.strategy2469(indicators),
            this.strategy2470(indicators), this.strategy2471(indicators), this.strategy2472(indicators),
            this.strategy2473(indicators), this.strategy2474(indicators), this.strategy2475(indicators),
            this.strategy2476(indicators), this.strategy2477(indicators), this.strategy2478(indicators),
            this.strategy2479(indicators), this.strategy2480(indicators), this.strategy2481(indicators),
            this.strategy2482(indicators), this.strategy2483(indicators), this.strategy2484(indicators),
            this.strategy2485(indicators), this.strategy2486(indicators), this.strategy2487(indicators),
            this.strategy2488(indicators), this.strategy2489(indicators), this.strategy2490(indicators),
            this.strategy2491(indicators), this.strategy2492(indicators), this.strategy2493(indicators),
            this.strategy2494(indicators), this.strategy2495(indicators), this.strategy2496(indicators),
            this.strategy2497(indicators), this.strategy2498(indicators), this.strategy2499(indicators),
            this.strategy2500(indicators), this.strategy2501(indicators), this.strategy2502(indicators),
            this.strategy2503(indicators), this.strategy2504(indicators), this.strategy2505(indicators),
            this.strategy2506(indicators), this.strategy2507(indicators), this.strategy2508(indicators),
            this.strategy2509(indicators), this.strategy2510(indicators), this.strategy2511(indicators),
            this.strategy2512(indicators), this.strategy2513(indicators), this.strategy2514(indicators),
            this.strategy2515(indicators), this.strategy2516(indicators), this.strategy2517(indicators),
            this.strategy2518(indicators), this.strategy2519(indicators), this.strategy2520(indicators),
            this.strategy2521(indicators), this.strategy2522(indicators), this.strategy2523(indicators),
            this.strategy2524(indicators), this.strategy2525(indicators), this.strategy2526(indicators),
            this.strategy2527(indicators), this.strategy2528(indicators), this.strategy2529(indicators),
            this.strategy2530(indicators), this.strategy2531(indicators), this.strategy2532(indicators),
            this.strategy2533(indicators), this.strategy2534(indicators), this.strategy2535(indicators),
            this.strategy2536(indicators), this.strategy2537(indicators), this.strategy2538(indicators),
            this.strategy2539(indicators), this.strategy2540(indicators), this.strategy2541(indicators),
            this.strategy2542(indicators), this.strategy2543(indicators), this.strategy2544(indicators),
            this.strategy2545(indicators), this.strategy2546(indicators), this.strategy2547(indicators),
            this.strategy2548(indicators), this.strategy2549(indicators), this.strategy2550(indicators),
            this.strategy2551(indicators), this.strategy2552(indicators), this.strategy2553(indicators),
            this.strategy2554(indicators), this.strategy2555(indicators), this.strategy2556(indicators),
            this.strategy2557(indicators), this.strategy2558(indicators), this.strategy2559(indicators),
            this.strategy2560(indicators), this.strategy2561(indicators), this.strategy2562(indicators),
            this.strategy2563(indicators), this.strategy2564(indicators), this.strategy2565(indicators),
            this.strategy2566(indicators), this.strategy2567(indicators), this.strategy2568(indicators),
            this.strategy2569(indicators), this.strategy2570(indicators), this.strategy2571(indicators),
            this.strategy2572(indicators), this.strategy2573(indicators), this.strategy2574(indicators),
            this.strategy2575(indicators), this.strategy2576(indicators), this.strategy2577(indicators),
            this.strategy2578(indicators), this.strategy2579(indicators), this.strategy2580(indicators),
            this.strategy2581(indicators), this.strategy2582(indicators), this.strategy2583(indicators),
            this.strategy2584(indicators), this.strategy2585(indicators), this.strategy2586(indicators),
            this.strategy2587(indicators), this.strategy2588(indicators), this.strategy2589(indicators),
            this.strategy2590(indicators), this.strategy2591(indicators), this.strategy2592(indicators),
            this.strategy2593(indicators), this.strategy2594(indicators), this.strategy2595(indicators),
            this.strategy2596(indicators), this.strategy2597(indicators), this.strategy2598(indicators),
            this.strategy2599(indicators), this.strategy2600(indicators)
        ];
    }
}

