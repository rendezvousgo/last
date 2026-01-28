/**
 * UP ?�략 ?�장 (ID: 501-700)
 * ?��????�라미터 조합 + 고급 ?�턴
 */

export class StrategiesUp501 {
    
    // ==================== RSI ?�분??(501-550) ====================
    
    static strategy501(ind) { const match = ind.rsi >= 18 && ind.rsi <= 22; return { id: 501, name: 'RSI 18-22 Extreme Zone', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy502(ind) { const match = ind.rsi >= 22 && ind.rsi <= 26; return { id: 502, name: 'RSI 22-26 Deep Zone', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy503(ind) { const match = ind.rsi >= 26 && ind.rsi <= 30; return { id: 503, name: 'RSI 26-30 Oversold Zone', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy504(ind) { const match = ind.rsi >= 30 && ind.rsi <= 34; return { id: 504, name: 'RSI 30-34 Recovery Start', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy505(ind) { const match = ind.rsi >= 34 && ind.rsi <= 38; return { id: 505, name: 'RSI 34-38 Recovery Mid', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 }; }
    static strategy506(ind) { const match = ind.rsi >= 38 && ind.rsi <= 42; return { id: 506, name: 'RSI 38-42 Pre-Neutral', direction: 'UP', match: Boolean(match), confidence: match ? 64 : 0 }; }
    static strategy507(ind) { const match = ind.rsi >= 42 && ind.rsi <= 46; return { id: 507, name: 'RSI 42-46 Early Neutral', direction: 'UP', match: Boolean(match), confidence: match ? 62 : 0 }; }
    static strategy508(ind) { const match = ind.rsi >= 46 && ind.rsi <= 50; return { id: 508, name: 'RSI 46-50 Mid Neutral', direction: 'UP', match: Boolean(match), confidence: match ? 61 : 0 }; }
    static strategy509(ind) { const match = ind.rsi >= 50 && ind.rsi <= 54; return { id: 509, name: 'RSI 50-54 Breakout Zone', direction: 'UP', match: Boolean(match), confidence: match ? 63 : 0 }; }
    static strategy510(ind) { const match = ind.rsi >= 54 && ind.rsi <= 58; return { id: 510, name: 'RSI 54-58 Early Bullish', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    
    static strategy511(ind) { const match = ind.rsi >= 58 && ind.rsi <= 62; return { id: 511, name: 'RSI 58-62 Bullish Zone', direction: 'UP', match: Boolean(match), confidence: match ? 67 : 0 }; }
    static strategy512(ind) { const match = ind.rsi >= 62 && ind.rsi <= 66; return { id: 512, name: 'RSI 62-66 Strong Bullish', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 }; }
    static strategy513(ind) { const match = ind.rsi >= 18 && ind.rsi <= 22 && ind.macd?.histogram > 0; return { id: 513, name: 'RSI Extreme + MACD Up', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy514(ind) { const match = ind.rsi >= 22 && ind.rsi <= 28 && ind.ema20 > ind.ema50; return { id: 514, name: 'RSI Deep + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy515(ind) { const match = ind.rsi >= 28 && ind.rsi <= 35 && ind.stochastic?.k > ind.stochastic?.d; return { id: 515, name: 'RSI Oversold + Stoch Golden', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    
    static strategy516(ind) { const match = ind.rsi >= 35 && ind.rsi <= 42 && ind.adx?.adx > 25; return { id: 516, name: 'RSI Recovery + Strong ADX', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy517(ind) { const match = ind.rsi >= 42 && ind.rsi <= 48 && ind.bollingerBands?.position > 45; return { id: 517, name: 'RSI Pre-Mid + BB Up', direction: 'UP', match: Boolean(match), confidence: match ? 67 : 0 }; }
    static strategy518(ind) { const match = ind.rsi >= 48 && ind.rsi <= 52 && ind.macd?.MACD > ind.macd?.signal; return { id: 518, name: 'RSI Neutral + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy519(ind) { const match = ind.rsi >= 52 && ind.rsi <= 58 && ind.adx?.plusDI > ind.adx?.minusDI; return { id: 519, name: 'RSI Breakout + DI Positive', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy520(ind) { const match = ind.rsi >= 55 && ind.rsi <= 62 && ind.macd?.histogram > 15; return { id: 520, name: 'RSI Bullish + Strong MACD', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    
    // ==================== MACD Histogram ?�분??(521-570) ====================
    
    static strategy521(ind) { const match = ind.macd?.histogram > 0 && ind.macd?.histogram <= 5; return { id: 521, name: 'MACD Hist 0-5', direction: 'UP', match: Boolean(match), confidence: match ? 62 : 0 }; }
    static strategy522(ind) { const match = ind.macd?.histogram > 5 && ind.macd?.histogram <= 10; return { id: 522, name: 'MACD Hist 5-10', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    static strategy523(ind) { const match = ind.macd?.histogram > 10 && ind.macd?.histogram <= 15; return { id: 523, name: 'MACD Hist 10-15', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy524(ind) { const match = ind.macd?.histogram > 15 && ind.macd?.histogram <= 20; return { id: 524, name: 'MACD Hist 15-20', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy525(ind) { const match = ind.macd?.histogram > 20 && ind.macd?.histogram <= 30; return { id: 525, name: 'MACD Hist 20-30', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy526(ind) { const match = ind.macd?.histogram > 30 && ind.macd?.histogram <= 45; return { id: 526, name: 'MACD Hist 30-45', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy527(ind) { const match = ind.macd?.histogram > 45 && ind.macd?.histogram <= 60; return { id: 527, name: 'MACD Hist 45-60', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy528(ind) { const match = ind.macd?.histogram > 60; return { id: 528, name: 'MACD Hist 60+', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    
    static strategy529(ind) { const match = ind.macd?.histogram > 0 && ind.macd?.histogram <= 5 && ind.ema20 > ind.ema50; return { id: 529, name: 'MACD Weak + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 }; }
    static strategy530(ind) { const match = ind.macd?.histogram > 5 && ind.macd?.histogram <= 15 && ind.rsi >= 45 && ind.rsi <= 55; return { id: 530, name: 'MACD Mild + RSI Neutral', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy531(ind) { const match = ind.macd?.histogram > 15 && ind.macd?.histogram <= 30 && ind.stochastic?.k > ind.stochastic?.d; return { id: 531, name: 'MACD Good + Stoch Golden', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy532(ind) { const match = ind.macd?.histogram > 30 && ind.adx?.adx > 30; return { id: 532, name: 'MACD Strong + ADX Strong', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    
    static strategy533(ind) { const match = ind.macd?.MACD > -20 && ind.macd?.MACD <= 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 533, name: 'MACD Line -20 to 0 Golden', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 }; }
    static strategy534(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD <= 20 && ind.macd?.histogram > 5; return { id: 534, name: 'MACD Line 0-20 + Hist', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy535(ind) { const match = ind.macd?.MACD > 20 && ind.macd?.MACD <= 50 && ind.ema20 > ind.ema50; return { id: 535, name: 'MACD Line 20-50 + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy536(ind) { const match = ind.macd?.MACD > 50 && ind.rsi >= 50 && ind.rsi <= 65; return { id: 536, name: 'MACD Line 50+ + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    
    static strategy537(ind) { const gap = ind.macd ? ind.macd?.MACD - ind.macd?.signal : 0; const match = gap > 0 && gap <= 5; return { id: 537, name: 'MACD Signal Gap 0-5', direction: 'UP', match: Boolean(match), confidence: match ? 64 : 0 }; }
    static strategy538(ind) { const gap = ind.macd ? ind.macd?.MACD - ind.macd?.signal : 0; const match = gap > 5 && gap <= 12; return { id: 538, name: 'MACD Signal Gap 5-12', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy539(ind) { const gap = ind.macd ? ind.macd?.MACD - ind.macd?.signal : 0; const match = gap > 12 && gap <= 20; return { id: 539, name: 'MACD Signal Gap 12-20', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy540(ind) { const gap = ind.macd ? ind.macd?.MACD - ind.macd?.signal : 0; const match = gap > 20; return { id: 540, name: 'MACD Signal Gap 20+', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    
    static strategy541(ind) { const histUp = ind.macd?.histogram > (ind.macd?.prevHistogram || -999); const match = histUp && ind.macd?.histogram > 0; return { id: 541, name: 'MACD Hist Rising Positive', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy542(ind) { const histUp = ind.macd?.histogram > (ind.macd?.prevHistogram || -999); const match = histUp && ind.macd?.histogram <= 0 && ind.macd?.histogram > -10; return { id: 542, name: 'MACD Hist Rising to Zero', direction: 'UP', match: Boolean(match), confidence: match ? 67 : 0 }; }
    static strategy543(ind) { const match = ind.macd?.prevHistogram < 0 && ind.macd?.histogram > 0 && ind.rsi < 55; return { id: 543, name: 'MACD Turn + RSI Low', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy544(ind) { const match = ind.macd?.prevHistogram < 0 && ind.macd?.histogram > 0 && ind.stochastic?.k < 50; return { id: 544, name: 'MACD Turn + Stoch Low', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy545(ind) { const match = ind.macd?.prevHistogram < 0 && ind.macd?.histogram > 0 && ind.bollingerBands?.position < 50; return { id: 545, name: 'MACD Turn + BB Low', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    
    static strategy546(ind) { const match = ind.macd?.histogram > 10 && ind.macd?.histogram <= 20 && ind.rsi >= 48 && ind.rsi <= 58; return { id: 546, name: 'MACD Moderate + RSI Mid', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy547(ind) { const match = ind.macd?.histogram > 20 && ind.macd?.histogram <= 35 && ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 65; return { id: 547, name: 'MACD Good + BB Upper', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy548(ind) { const match = ind.macd?.histogram > 35 && ind.ema20 > ind.ema50 && ind.adx?.adx > 25; return { id: 548, name: 'MACD Strong + EMA + ADX', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy549(ind) { const match = ind.macd?.histogram > 25 && ind.stochastic?.k >= 50 && ind.stochastic?.k <= 70; return { id: 549, name: 'MACD Good + Stoch Mid-Up', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy550(ind) { const match = ind.macd?.histogram > 40 && ind.macd?.MACD > 30 && ind.rsi >= 55 && ind.rsi <= 68; return { id: 550, name: 'MACD Very Strong All', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    
    // ==================== Bollinger Bands ?�분??(551-600) ====================
    
    static strategy551(ind) { const match = ind.bollingerBands?.position >= 0 && ind.bollingerBands?.position <= 5; return { id: 551, name: 'BB Extreme Low 0-5', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy552(ind) { const match = ind.bollingerBands?.position > 5 && ind.bollingerBands?.position <= 10; return { id: 552, name: 'BB Very Low 5-10', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy553(ind) { const match = ind.bollingerBands?.position > 10 && ind.bollingerBands?.position <= 18; return { id: 553, name: 'BB Low 10-18', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy554(ind) { const match = ind.bollingerBands?.position > 18 && ind.bollingerBands?.position <= 28; return { id: 554, name: 'BB Lower Mid 18-28', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 }; }
    static strategy555(ind) { const match = ind.bollingerBands?.position > 28 && ind.bollingerBands?.position <= 38; return { id: 555, name: 'BB Low-Mid 28-38', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 }; }
    static strategy556(ind) { const match = ind.bollingerBands?.position > 38 && ind.bollingerBands?.position <= 48; return { id: 556, name: 'BB Mid-Low 38-48', direction: 'UP', match: Boolean(match), confidence: match ? 64 : 0 }; }
    static strategy557(ind) { const match = ind.bollingerBands?.position > 48 && ind.bollingerBands?.position <= 55; return { id: 557, name: 'BB Neutral 48-55', direction: 'UP', match: Boolean(match), confidence: match ? 63 : 0 }; }
    static strategy558(ind) { const match = ind.bollingerBands?.position > 55 && ind.bollingerBands?.position <= 65; return { id: 558, name: 'BB Upper-Mid 55-65', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 }; }
    static strategy559(ind) { const match = ind.bollingerBands?.position > 65 && ind.bollingerBands?.position <= 75; return { id: 559, name: 'BB Upper 65-75', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 }; }
    static strategy560(ind) { const match = ind.bollingerBands?.position > 75; return { id: 560, name: 'BB High 75+', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    
    static strategy561(ind) { const match = ind.bollingerBands?.bandwidth < 1.2; return { id: 561, name: 'BB Tight Squeeze <1.2', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    static strategy562(ind) { const match = ind.bollingerBands?.bandwidth >= 1.2 && ind.bollingerBands?.bandwidth < 1.8; return { id: 562, name: 'BB Squeeze 1.2-1.8', direction: 'UP', match: Boolean(match), confidence: match ? 64 : 0 }; }
    static strategy563(ind) { const match = ind.bollingerBands?.bandwidth >= 1.8 && ind.bollingerBands?.bandwidth < 2.5; return { id: 563, name: 'BB Normal 1.8-2.5', direction: 'UP', match: Boolean(match), confidence: match ? 63 : 0 }; }
    static strategy564(ind) { const match = ind.bollingerBands?.bandwidth >= 2.5 && ind.bollingerBands?.bandwidth < 3.5; return { id: 564, name: 'BB Expanding 2.5-3.5', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 }; }
    static strategy565(ind) { const match = ind.bollingerBands?.bandwidth >= 3.5 && ind.bollingerBands?.bandwidth < 5; return { id: 565, name: 'BB Wide 3.5-5', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy566(ind) { const match = ind.bollingerBands?.bandwidth >= 5; return { id: 566, name: 'BB Very Wide 5+', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    
    static strategy567(ind) { const match = ind.bollingerBands?.position < 10 && ind.rsi < 30; return { id: 567, name: 'BB RSI Double Low', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy568(ind) { const match = ind.bollingerBands?.position < 15 && ind.stochastic?.k < 20; return { id: 568, name: 'BB Stoch Double Low', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy569(ind) { const match = ind.bollingerBands?.position < 20 && ind.macd?.histogram > (ind.macd?.prevHistogram || -999); return { id: 569, name: 'BB Low + MACD Improving', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy570(ind) { const match = ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 60 && ind.macd?.histogram > 10; return { id: 570, name: 'BB Mid + MACD Good', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    
    static strategy571(ind) { const match = ind.bollingerBands?.bandwidth < 2 && ind.bollingerBands?.position > 50 && ind.macd?.histogram > 0 && ind.adx?.adx > 20; return { id: 571, name: 'BB Squeeze Break Up + ADX', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy572(ind) { const match = ind.bollingerBands?.bandwidth >= 2.5 && ind.bollingerBands?.position > 55 && ind.ema20 > ind.ema50; return { id: 572, name: 'BB Expand Up + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy573(ind) { const match = ind.bollingerBands?.bandwidth >= 3 && ind.bollingerBands?.position > 60 && ind.adx?.adx > 25; return { id: 573, name: 'BB Wide Up + ADX', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy574(ind) { const match = ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 55 && ind.rsi >= 48 && ind.rsi <= 55; return { id: 574, name: 'BB RSI Both Neutral', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    static strategy575(ind) { const match = ind.bollingerBands?.position >= 55 && ind.bollingerBands?.position <= 68 && ind.stochastic?.k >= 50 && ind.stochastic?.k <= 65; return { id: 575, name: 'BB Stoch Both Upper', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    
    static strategy576(ind) { const match = ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 576, name: 'BB Low + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy577(ind) { const match = ind.bollingerBands?.position >= 30 && ind.bollingerBands?.position <= 45 && ind.macd?.MACD > ind.macd?.signal; return { id: 577, name: 'BB Lower-Mid + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 }; }
    static strategy578(ind) { const match = ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 58 && ind.adx?.plusDI > ind.adx?.minusDI; return { id: 578, name: 'BB Mid + DI Positive', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy579(ind) { const match = ind.bollingerBands?.position > 58 && ind.bollingerBands?.position <= 72 && ind.rsi >= 52 && ind.rsi <= 65; return { id: 579, name: 'BB Upper + RSI Bullish', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy580(ind) { const match = ind.bollingerBands?.position > 70 && ind.macd?.histogram > 20; return { id: 580, name: 'BB High + Strong MACD', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    
    // ==================== Stochastic ?�분??(581-620) ====================
    
    static strategy581(ind) { const match = ind.stochastic?.k >= 0 && ind.stochastic?.k <= 8; return { id: 581, name: 'Stoch Ultra Low 0-8', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy582(ind) { const match = ind.stochastic?.k > 8 && ind.stochastic?.k <= 15; return { id: 582, name: 'Stoch Very Low 8-15', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy583(ind) { const match = ind.stochastic?.k > 15 && ind.stochastic?.k <= 25; return { id: 583, name: 'Stoch Low 15-25', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy584(ind) { const match = ind.stochastic?.k > 25 && ind.stochastic?.k <= 35; return { id: 584, name: 'Stoch Lower-Mid 25-35', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 }; }
    static strategy585(ind) { const match = ind.stochastic?.k > 35 && ind.stochastic?.k <= 45; return { id: 585, name: 'Stoch Mid-Low 35-45', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 }; }
    static strategy586(ind) { const match = ind.stochastic?.k > 45 && ind.stochastic?.k <= 55; return { id: 586, name: 'Stoch Neutral 45-55', direction: 'UP', match: Boolean(match), confidence: match ? 64 : 0 }; }
    static strategy587(ind) { const match = ind.stochastic?.k > 55 && ind.stochastic?.k <= 65; return { id: 587, name: 'Stoch Mid-Upper 55-65', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 }; }
    static strategy588(ind) { const match = ind.stochastic?.k > 65 && ind.stochastic?.k <= 75; return { id: 588, name: 'Stoch Upper 65-75', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    
    static strategy589(ind) { const match = ind.stochastic?.k < 20 && ind.stochastic?.k > ind.stochastic?.d; return { id: 589, name: 'Stoch Oversold + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy590(ind) { const match = ind.stochastic?.k >= 20 && ind.stochastic?.k <= 35 && ind.stochastic?.k > ind.stochastic?.d; return { id: 590, name: 'Stoch Low + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy591(ind) { const match = ind.stochastic?.k >= 35 && ind.stochastic?.k <= 50 && ind.stochastic?.k > ind.stochastic?.d; return { id: 591, name: 'Stoch Mid-Low + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy592(ind) { const match = ind.stochastic?.k >= 50 && ind.stochastic?.k <= 65 && ind.stochastic?.k > ind.stochastic?.d; return { id: 592, name: 'Stoch Mid-Up + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 }; }
    
    static strategy593(ind) { const gap = (ind.stochastic?.k || 0) - (ind.stochastic?.d || 0); const match = gap > 3 && gap <= 8 && ind.stochastic?.k < 50; return { id: 593, name: 'Stoch Gap 3-8 Lower', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy594(ind) { const gap = (ind.stochastic?.k || 0) - (ind.stochastic?.d || 0); const match = gap > 8 && gap <= 15; return { id: 594, name: 'Stoch Gap 8-15', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy595(ind) { const gap = (ind.stochastic?.k || 0) - (ind.stochastic?.d || 0); const match = gap > 15; return { id: 595, name: 'Stoch Gap 15+', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    
    static strategy596(ind) { const match = ind.stochastic?.k < 25 && ind.rsi < 35; return { id: 596, name: 'Stoch RSI Double Oversold', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy597(ind) { const match = ind.stochastic?.k < 20 && ind.macd?.MACD > ind.macd?.signal; return { id: 597, name: 'Stoch Oversold + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy598(ind) { const match = ind.stochastic?.k >= 30 && ind.stochastic?.k <= 50 && ind.ema20 > ind.ema50; return { id: 598, name: 'Stoch Mid + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 }; }
    static strategy599(ind) { const match = ind.stochastic?.k >= 50 && ind.stochastic?.k <= 65 && ind.adx?.adx > 25; return { id: 599, name: 'Stoch Upper + ADX Strong', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy600(ind) { const match = ind.stochastic?.k > ind.stochastic?.d && ind.stochastic?.k >= 40 && ind.stochastic?.k <= 60 && ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 60; return { id: 600, name: 'Stoch BB Both Mid Golden', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    
    // ==================== ADX/DI ?�분??(601-650) ====================
    
    static strategy601(ind) { const match = ind.adx?.adx >= 15 && ind.adx?.adx < 20; return { id: 601, name: 'ADX Weak 15-20', direction: 'UP', match: Boolean(match), confidence: match ? 62 : 0 }; }
    static strategy602(ind) { const match = ind.adx?.adx >= 20 && ind.adx?.adx < 25; return { id: 602, name: 'ADX Developing 20-25', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    static strategy603(ind) { const match = ind.adx?.adx >= 25 && ind.adx?.adx < 30; return { id: 603, name: 'ADX Moderate 25-30', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy604(ind) { const match = ind.adx?.adx >= 30 && ind.adx?.adx < 35; return { id: 604, name: 'ADX Strong 30-35', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy605(ind) { const match = ind.adx?.adx >= 35 && ind.adx?.adx < 45; return { id: 605, name: 'ADX Very Strong 35-45', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy606(ind) { const match = ind.adx?.adx >= 45; return { id: 606, name: 'ADX Extreme 45+', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    
    static strategy607(ind) { const match = ind.adx?.plusDI > 20 && ind.adx?.plusDI <= 25 && ind.adx?.plusDI > ind.adx?.minusDI; return { id: 607, name: '+DI 20-25 Positive', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy608(ind) { const match = ind.adx?.plusDI > 25 && ind.adx?.plusDI <= 30 && ind.adx?.plusDI > ind.adx?.minusDI; return { id: 608, name: '+DI 25-30 Positive', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy609(ind) { const match = ind.adx?.plusDI > 30 && ind.adx?.plusDI <= 40 && ind.adx?.plusDI > ind.adx?.minusDI; return { id: 609, name: '+DI 30-40 Positive', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy610(ind) { const match = ind.adx?.plusDI > 40 && ind.adx?.plusDI > ind.adx?.minusDI; return { id: 610, name: '+DI 40+ Positive', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    
    static strategy611(ind) { const gap = (ind.adx?.plusDI || 0) - (ind.adx?.minusDI || 0); const match = gap > 5 && gap <= 10; return { id: 611, name: 'DI Gap 5-10', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy612(ind) { const gap = (ind.adx?.plusDI || 0) - (ind.adx?.minusDI || 0); const match = gap > 10 && gap <= 18; return { id: 612, name: 'DI Gap 10-18', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy613(ind) { const gap = (ind.adx?.plusDI || 0) - (ind.adx?.minusDI || 0); const match = gap > 18 && gap <= 28; return { id: 613, name: 'DI Gap 18-28', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy614(ind) { const gap = (ind.adx?.plusDI || 0) - (ind.adx?.minusDI || 0); const match = gap > 28; return { id: 614, name: 'DI Gap 28+', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    
    static strategy615(ind) { const match = ind.adx?.adx >= 25 && ind.adx?.plusDI > ind.adx?.minusDI && ind.rsi < 60; return { id: 615, name: 'ADX + DI + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy616(ind) { const match = ind.adx?.adx >= 30 && ind.adx?.plusDI > ind.adx?.minusDI && ind.macd?.histogram > 10; return { id: 616, name: 'ADX Strong + DI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy617(ind) { const match = ind.adx?.adx >= 25 && ind.adx?.plusDI > ind.adx?.minusDI && ind.stochastic?.k > ind.stochastic?.d; return { id: 617, name: 'ADX + DI + Stoch Golden', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy618(ind) { const match = ind.adx?.adx >= 30 && ind.adx?.plusDI > ind.adx?.minusDI && ind.ema20 > ind.ema50; return { id: 618, name: 'ADX Strong + DI + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy619(ind) { const match = ind.adx?.adx >= 35 && ind.adx?.plusDI > ind.adx?.minusDI && ind.bollingerBands?.position > 55; return { id: 619, name: 'ADX Very Strong + DI + BB', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy620(ind) { const match = ind.adx?.adx >= 25 && ind.adx?.plusDI > 25 && ind.adx?.minusDI < 20; return { id: 620, name: 'ADX + Strong +DI + Weak -DI', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    
    // ==================== EMA/SMA ?�분??(621-660) ====================
    
    static strategy621(ind) { const gap = ind.ema50 ? (ind.ema20 - ind.ema50) / ind.ema50 : 0; const match = gap > 0 && gap <= 0.001; return { id: 621, name: 'EMA Gap Fresh 0-0.1%', direction: 'UP', match: Boolean(match), confidence: match ? 64 : 0 }; }
    static strategy622(ind) { const gap = ind.ema50 ? (ind.ema20 - ind.ema50) / ind.ema50 : 0; const match = gap > 0.001 && gap <= 0.002; return { id: 622, name: 'EMA Gap Early 0.1-0.2%', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 }; }
    static strategy623(ind) { const gap = ind.ema50 ? (ind.ema20 - ind.ema50) / ind.ema50 : 0; const match = gap > 0.002 && gap <= 0.004; return { id: 623, name: 'EMA Gap Developing 0.2-0.4%', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy624(ind) { const gap = ind.ema50 ? (ind.ema20 - ind.ema50) / ind.ema50 : 0; const match = gap > 0.004 && gap <= 0.008; return { id: 624, name: 'EMA Gap Good 0.4-0.8%', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy625(ind) { const gap = ind.ema50 ? (ind.ema20 - ind.ema50) / ind.ema50 : 0; const match = gap > 0.008 && gap <= 0.015; return { id: 625, name: 'EMA Gap Strong 0.8-1.5%', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy626(ind) { const gap = ind.ema50 ? (ind.ema20 - ind.ema50) / ind.ema50 : 0; const match = gap > 0.015; return { id: 626, name: 'EMA Gap Very Strong 1.5%+', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    
    static strategy627(ind) { const match = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.rsi >= 40 && ind.rsi <= 55; return { id: 627, name: 'Double MA Golden + RSI Mid', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy628(ind) { const match = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.rsi >= 45 && ind.rsi <= 60; return { id: 628, name: 'Double MA + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy629(ind) { const match = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.macd?.histogram > 10; return { id: 629, name: 'Double MA + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy630(ind) { const match = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.stochastic?.k > ind.stochastic?.d; return { id: 630, name: 'Double MA + Stoch', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    
    static strategy631(ind) { const match = ind.price > ind.ema20 && ind.price > ind.ema50 && ind.price > ind.sma20; return { id: 631, name: 'Price Above 3 MA', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy632(ind) { const match = ind.price > ind.ema20 && ind.price > ind.ema50 && ind.price > ind.sma20 && ind.price > ind.sma50; return { id: 632, name: 'Price Above All MA', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy633(ind) { const nearEMA = ind.ema20 ? Math.abs(ind.price - ind.ema20) / ind.ema20 < 0.003 : false; const match = nearEMA && ind.ema20 > ind.ema50; return { id: 633, name: 'Price Near EMA20 + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy634(ind) { const nearSMA = ind.sma20 ? Math.abs(ind.price - ind.sma20) / ind.sma20 < 0.003 : false; const match = nearSMA && ind.sma20 > ind.sma50; return { id: 634, name: 'Price Near SMA20 + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 }; }
    static strategy635(ind) { const match = ind.ema20 > ind.sma20 && ind.ema20 > ind.ema50; return { id: 635, name: 'EMA Leading + Golden', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    
    static strategy636(ind) { const match = ind.ema20 > ind.ema50 && ind.rsi < 50 && ind.macd?.histogram > 0; return { id: 636, name: 'EMA Golden + Low RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy637(ind) { const match = ind.ema20 > ind.ema50 && ind.stochastic?.k < 50 && ind.stochastic?.k > ind.stochastic?.d; return { id: 637, name: 'EMA + Stoch Low Golden', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy638(ind) { const match = ind.ema20 > ind.ema50 && ind.bollingerBands?.position < 50 && ind.bollingerBands?.position > 30; return { id: 638, name: 'EMA Golden + BB Lower', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy639(ind) { const match = ind.ema20 > ind.ema50 && ind.adx?.adx > 25 && ind.adx?.plusDI > ind.adx?.minusDI; return { id: 639, name: 'EMA + ADX + DI', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy640(ind) { const match = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.adx?.adx > 25; return { id: 640, name: 'All MA Golden + ADX', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    
    // ==================== 복합 조건 (641-700) ====================
    
    static strategy641(ind) { const match = ind.rsi >= 25 && ind.rsi <= 35 && ind.stochastic?.k >= 15 && ind.stochastic?.k <= 30; return { id: 641, name: 'RSI Stoch Both Oversold', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy642(ind) { const match = ind.rsi >= 35 && ind.rsi <= 45 && ind.stochastic?.k >= 30 && ind.stochastic?.k <= 45; return { id: 642, name: 'RSI Stoch Both Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy643(ind) { const match = ind.rsi >= 45 && ind.rsi <= 55 && ind.stochastic?.k >= 45 && ind.stochastic?.k <= 55; return { id: 643, name: 'RSI Stoch Both Neutral', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    static strategy644(ind) { const match = ind.rsi >= 55 && ind.rsi <= 65 && ind.stochastic?.k >= 55 && ind.stochastic?.k <= 70; return { id: 644, name: 'RSI Stoch Both Bullish', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    
    static strategy645(ind) { const match = ind.rsi >= 30 && ind.rsi <= 45 && ind.bollingerBands?.position >= 15 && ind.bollingerBands?.position <= 35; return { id: 645, name: 'RSI BB Both Low', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy646(ind) { const match = ind.rsi >= 45 && ind.rsi <= 55 && ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 55; return { id: 646, name: 'RSI BB Both Mid', direction: 'UP', match: Boolean(match), confidence: match ? 66 : 0 }; }
    static strategy647(ind) { const match = ind.rsi >= 52 && ind.rsi <= 62 && ind.bollingerBands?.position >= 52 && ind.bollingerBands?.position <= 65; return { id: 647, name: 'RSI BB Both Upper-Mid', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    
    static strategy648(ind) { const match = ind.macd?.histogram > 5 && ind.macd?.histogram <= 15 && ind.stochastic?.k >= 40 && ind.stochastic?.k <= 55; return { id: 648, name: 'MACD Mild + Stoch Mid', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy649(ind) { const match = ind.macd?.histogram > 15 && ind.macd?.histogram <= 30 && ind.stochastic?.k >= 50 && ind.stochastic?.k <= 68; return { id: 649, name: 'MACD Good + Stoch Upper', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy650(ind) { const match = ind.macd?.histogram > 30 && ind.stochastic?.k >= 55 && ind.stochastic?.k <= 75; return { id: 650, name: 'MACD Strong + Stoch Bullish', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    
    static strategy651(ind) { const match = ind.adx?.adx >= 25 && ind.adx?.adx <= 35 && ind.rsi >= 45 && ind.rsi <= 58; return { id: 651, name: 'ADX Moderate + RSI Mid', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy652(ind) { const match = ind.adx?.adx >= 30 && ind.adx?.adx <= 45 && ind.stochastic?.k >= 45 && ind.stochastic?.k <= 65; return { id: 652, name: 'ADX Strong + Stoch Mid', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy653(ind) { const match = ind.adx?.adx >= 35 && ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 70; return { id: 653, name: 'ADX V.Strong + BB Upper', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    
    static strategy654(ind) { const volUp = ind.volume > (ind.avgVolume || 0) * 1.3; const match = volUp && ind.rsi >= 40 && ind.rsi <= 55; return { id: 654, name: 'Vol Up + RSI Mid', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy655(ind) { const volUp = ind.volume > (ind.avgVolume || 0) * 1.5; const match = volUp && ind.stochastic?.k >= 35 && ind.stochastic?.k <= 55; return { id: 655, name: 'Vol Spike + Stoch Mid', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy656(ind) { const volUp = ind.volume > (ind.avgVolume || 0) * 1.3; const match = volUp && ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 60; return { id: 656, name: 'Vol Up + BB Mid', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    
    static strategy657(ind) { const match = ind.atrPercent >= 1 && ind.atrPercent <= 2 && ind.rsi >= 45 && ind.rsi <= 58; return { id: 657, name: 'ATR Normal + RSI Mid', direction: 'UP', match: Boolean(match), confidence: match ? 68 : 0 }; }
    static strategy658(ind) { const match = ind.atrPercent >= 1.5 && ind.atrPercent <= 3 && ind.macd?.histogram > 10; return { id: 658, name: 'ATR Good + MACD Strong', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy659(ind) { const match = ind.atrPercent >= 2 && ind.adx?.adx > 25 && ind.adx?.plusDI > ind.adx?.minusDI; return { id: 659, name: 'ATR + ADX + DI', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    
    static strategy660(ind) { const match = ind.fearGreedIndex < 30 && ind.rsi < 35; return { id: 660, name: 'Fear + RSI Low', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy661(ind) { const match = ind.fearGreedIndex < 35 && ind.stochastic?.k < 30; return { id: 661, name: 'Fear + Stoch Low', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy662(ind) { const match = ind.fearGreedIndex < 40 && ind.bollingerBands?.position < 25; return { id: 662, name: 'Fear + BB Low', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    
    static strategy663(ind) { const match = ind.rsi >= 30 && ind.rsi <= 40 && ind.macd?.histogram > 0 && ind.ema20 > ind.ema50; return { id: 663, name: 'RSI Recovery + MACD + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy664(ind) { const match = ind.stochastic?.k >= 25 && ind.stochastic?.k <= 40 && ind.macd?.histogram > 5 && ind.adx?.adx > 25; return { id: 664, name: 'Stoch Recovery + MACD + ADX', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy665(ind) { const match = ind.bollingerBands?.position >= 25 && ind.bollingerBands?.position <= 40 && ind.stochastic?.k > ind.stochastic?.d && ind.rsi >= 40 && ind.rsi <= 50; return { id: 665, name: 'BB Stoch RSI Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    
    static strategy666(ind) { const match = ind.rsi >= 48 && ind.rsi <= 55 && ind.stochastic?.k >= 48 && ind.stochastic?.k <= 58 && ind.bollingerBands?.position >= 48 && ind.bollingerBands?.position <= 58; return { id: 666, name: 'Triple Near 50', direction: 'UP', match: Boolean(match), confidence: match ? 67 : 0 }; }
    static strategy667(ind) { const match = ind.rsi >= 52 && ind.rsi <= 60 && ind.stochastic?.k >= 52 && ind.stochastic?.k <= 62 && ind.bollingerBands?.position >= 52 && ind.bollingerBands?.position <= 62; return { id: 667, name: 'Triple Break 50+', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy668(ind) { const match = ind.rsi >= 55 && ind.rsi <= 65 && ind.stochastic?.k >= 55 && ind.stochastic?.k <= 68 && ind.bollingerBands?.position >= 55 && ind.bollingerBands?.position <= 68; return { id: 668, name: 'Triple Upper Mid', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    
    static strategy669(ind) { const allGolden = ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal && ind.stochastic?.k > ind.stochastic?.d; const match = allGolden && ind.rsi >= 42 && ind.rsi <= 55; return { id: 669, name: 'Triple Golden + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy670(ind) { const allGolden = ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal && ind.stochastic?.k > ind.stochastic?.d; const match = allGolden && ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 60; return { id: 670, name: 'Triple Golden + BB', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    
    static strategy671(ind) { const match = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.macd?.MACD > ind.macd?.signal && ind.rsi >= 45 && ind.rsi <= 58; return { id: 671, name: 'Full MA + MACD + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy672(ind) { const match = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.stochastic?.k > ind.stochastic?.d && ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 65; return { id: 672, name: 'Full MA + Stoch + BB', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy673(ind) { const match = ind.ema20 > ind.ema50 && ind.adx?.adx > 25 && ind.adx?.plusDI > ind.adx?.minusDI && ind.macd?.histogram > 10; return { id: 673, name: 'EMA + ADX + DI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    
    static strategy674(ind) { const volUp = ind.volume > (ind.avgVolume || 0) * 1.2; const match = volUp && ind.ema20 > ind.ema50 && ind.macd?.histogram > 5; return { id: 674, name: 'Vol + EMA + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy675(ind) { const volUp = ind.volume > (ind.avgVolume || 0) * 1.3; const match = volUp && ind.stochastic?.k > ind.stochastic?.d && ind.rsi >= 45 && ind.rsi <= 58; return { id: 675, name: 'Vol + Stoch + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy676(ind) { const volUp = ind.volume > (ind.avgVolume || 0) * 1.5; const match = volUp && ind.adx?.adx > 25 && ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 68; return { id: 676, name: 'Vol Spike + ADX + BB', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    
    static strategy677(ind) { const match = ind.price > ind.ema20 && ind.ema20 > ind.ema50 && ind.rsi >= 48 && ind.rsi <= 58; return { id: 677, name: 'Price Trend + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy678(ind) { const match = ind.price > ind.ema20 && ind.price > ind.sma20 && ind.macd?.histogram > 5; return { id: 678, name: 'Price Above MA + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy679(ind) { const match = ind.price > ind.ema50 && ind.stochastic?.k > ind.stochastic?.d && ind.adx?.plusDI > ind.adx?.minusDI; return { id: 679, name: 'Price + Stoch + DI', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    
    static strategy680(ind) { const match = ind.rsi < 30 && ind.stochastic?.k < 20 && ind.bollingerBands?.position < 15 && ind.ema20 > ind.ema50 * 0.995; return { id: 680, name: 'Triple Oversold + Near EMA', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy681(ind) { const match = ind.rsi < 28 && ind.stochastic?.k < 18 && ind.macd?.histogram > (ind.macd?.prevHistogram || -999); return { id: 681, name: 'Double Ultra Low + MACD Up', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy682(ind) { const match = ind.rsi >= 55 && ind.rsi <= 65 && ind.stochastic?.k >= 58 && ind.stochastic?.k <= 72 && ind.macd?.histogram > 20; return { id: 682, name: 'Double Upper + Strong MACD', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    
    static strategy683(ind) { const match = ind.adx?.adx >= 30 && ind.adx?.plusDI > ind.adx?.minusDI && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 683, name: 'Strong ADX + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy684(ind) { const match = ind.adx?.adx >= 25 && ind.stochastic?.k > ind.stochastic?.d && ind.macd?.MACD > ind.macd?.signal && ind.rsi >= 45 && ind.rsi <= 60; return { id: 684, name: 'ADX + Triple Signal', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy685(ind) { const volUp = ind.volume > (ind.avgVolume || 0) * 1.2; const match = volUp && ind.adx?.adx > 25 && ind.ema20 > ind.ema50 && ind.rsi >= 48 && ind.rsi <= 60; return { id: 685, name: 'Vol + ADX + EMA + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    
    static strategy686(ind) { const match = ind.bollingerBands?.bandwidth >= 2.5 && ind.bollingerBands?.position >= 55 && ind.macd?.histogram > 15 && ind.ema20 > ind.ema50; return { id: 686, name: 'BB Expand + MACD + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy687(ind) { const match = ind.bollingerBands?.bandwidth < 2 && ind.bollingerBands?.position >= 50 && ind.stochastic?.k > ind.stochastic?.d && ind.macd?.histogram > 0; return { id: 687, name: 'BB Squeeze Break + Signals', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy688(ind) { const atrUp = ind.atrPercent > (ind.prevAtrPercent || 0); const match = atrUp && ind.bollingerBands?.position > 55 && ind.rsi >= 50 && ind.rsi <= 62; return { id: 688, name: 'ATR Up + BB Up + RSI', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    
    static strategy689(ind) { const match = ind.rsi >= 40 && ind.rsi <= 52 && ind.stochastic?.k >= 38 && ind.stochastic?.k <= 52 && ind.bollingerBands?.position >= 38 && ind.bollingerBands?.position <= 52 && ind.macd?.histogram > 0; return { id: 689, name: 'Triple Mid + MACD Up', direction: 'UP', match: Boolean(match), confidence: match ? 69 : 0 }; }
    static strategy690(ind) { const match = ind.rsi >= 50 && ind.rsi <= 58 && ind.stochastic?.k >= 50 && ind.stochastic?.k <= 62 && ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 62 && ind.ema20 > ind.ema50; return { id: 690, name: 'Triple Break + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    
    static strategy691(ind) { const allSignals = ind.ema20 > ind.ema50 && ind.macd?.histogram > 5 && ind.stochastic?.k > ind.stochastic?.d && ind.adx?.plusDI > ind.adx?.minusDI && ind.rsi >= 45 && ind.rsi <= 60; const match = (allSignals) && ind.sma20 > ind.sma50 && ind.volume > (ind.avgVolume || ind.volume) * 1.1500000000000001; return { id: 691, name: 'Penta Signal Low', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy692(ind) { const allSignals = ind.ema20 > ind.ema50 && ind.macd?.histogram > 15 && ind.stochastic?.k > ind.stochastic?.d && ind.adx?.adx > 25 && ind.rsi >= 50 && ind.rsi <= 62; const match = (allSignals) && ind.sma20 < ind.sma50 && ind.volume > (ind.prevVolume || ind.volume) * 1.09; return { id: 692, name: 'Penta Signal Mid', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy693(ind) { const allSignals = ind.ema20 > ind.ema50 && ind.macd?.histogram > 25 && ind.stochastic?.k >= 55 && ind.adx?.adx > 30 && ind.rsi >= 52 && ind.rsi <= 65; const match = (allSignals) && ind.bollingerBands?.position < 50 && ind.volume > ind.avgVolume * 1.5; return { id: 693, name: 'Penta Signal Strong', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    
    static strategy694(ind) { const volUp = ind.volume > (ind.avgVolume || 0) * 1.3; const allSignals = ind.ema20 > ind.ema50 && ind.macd?.MACD > ind.macd?.signal && ind.stochastic?.k > ind.stochastic?.d && volUp; const match = (allSignals) && ind.bollingerBands?.position > 50 && ind.obv > (ind.prevObv || 0); return { id: 694, name: 'Quad + Volume', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy695(ind) { const volUp = ind.volume > (ind.avgVolume || 0) * 1.5; const allSignals = ind.ema20 > ind.ema50 && ind.macd?.histogram > 15 && ind.adx?.adx > 25 && volUp; const match = (allSignals) && ind.bollingerBands?.position < 30 && ind.volume > (ind.avgVolume || ind.volume) * 1.1; return { id: 695, name: 'Strong Signal + Vol Spike', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    
    static strategy696(ind) { const match = ind.fearGreedIndex < 35 && ind.rsi < 35 && ind.stochastic?.k < 30 && ind.bollingerBands?.position < 25; return { id: 696, name: 'Fear + Triple Oversold', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy697(ind) { const match = ind.fearGreedIndex < 40 && ind.ema20 > ind.ema50 && ind.macd?.histogram > 0 && ind.rsi < 50; return { id: 697, name: 'Fear + Golden + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    
    static strategy698(ind) { const allAligned = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.macd?.MACD > ind.macd?.signal && ind.stochastic?.k > ind.stochastic?.d && ind.adx?.plusDI > ind.adx?.minusDI && ind.rsi >= 48 && ind.rsi <= 62 && ind.bollingerBands?.position >= 48 && ind.bollingerBands?.position <= 65; const match = (allAligned) && ind.volumeRatio > 1.2; return { id: 698, name: 'Hepta Signal Alignment', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy699(ind) { const volUp = ind.volume > (ind.avgVolume || 0) * 1.2; const allAligned = ind.ema20 > ind.ema50 && ind.macd?.histogram > 10 && ind.stochastic?.k > ind.stochastic?.d && ind.adx?.adx > 25 && ind.rsi >= 48 && ind.rsi <= 60 && volUp; const match = (allAligned) && ind.volumeRatio > 1.5 && ind.volume > (ind.avgVolume || ind.volume) * 1.3; return { id: 699, name: 'Full Signal + Volume', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy700(ind) { const volUp = ind.volume > (ind.avgVolume || 0) * 1.3; const allAligned = ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.macd?.histogram > 15 && ind.stochastic?.k > ind.stochastic?.d && ind.adx?.adx > 30 && ind.adx?.plusDI > ind.adx?.minusDI && ind.rsi >= 50 && ind.rsi <= 62 && ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 68 && volUp; const match = Boolean(allAligned) && ind.volume > (ind.prevVolume || ind.volume) * 1.05; return { id: 700, name: 'Ultimate Alignment', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }

    /** 모든 전략 실행 (501-700) */
    static analyzeAll(ind) {
        return [
            this.strategy501(ind), this.strategy502(ind), this.strategy503(ind), this.strategy504(ind), this.strategy505(ind),
            this.strategy506(ind), this.strategy507(ind), this.strategy508(ind), this.strategy509(ind), this.strategy510(ind),
            this.strategy511(ind), this.strategy512(ind), this.strategy513(ind), this.strategy514(ind), this.strategy515(ind),
            this.strategy516(ind), this.strategy517(ind), this.strategy518(ind), this.strategy519(ind), this.strategy520(ind),
            this.strategy521(ind), this.strategy522(ind), this.strategy523(ind), this.strategy524(ind), this.strategy525(ind),
            this.strategy526(ind), this.strategy527(ind), this.strategy528(ind), this.strategy529(ind), this.strategy530(ind),
            this.strategy531(ind), this.strategy532(ind), this.strategy533(ind), this.strategy534(ind), this.strategy535(ind),
            this.strategy536(ind), this.strategy537(ind), this.strategy538(ind), this.strategy539(ind), this.strategy540(ind),
            this.strategy541(ind), this.strategy542(ind), this.strategy543(ind), this.strategy544(ind), this.strategy545(ind),
            this.strategy546(ind), this.strategy547(ind), this.strategy548(ind), this.strategy549(ind), this.strategy550(ind),
            this.strategy551(ind), this.strategy552(ind), this.strategy553(ind), this.strategy554(ind), this.strategy555(ind),
            this.strategy556(ind), this.strategy557(ind), this.strategy558(ind), this.strategy559(ind), this.strategy560(ind),
            this.strategy561(ind), this.strategy562(ind), this.strategy563(ind), this.strategy564(ind), this.strategy565(ind),
            this.strategy566(ind), this.strategy567(ind), this.strategy568(ind), this.strategy569(ind), this.strategy570(ind),
            this.strategy571(ind), this.strategy572(ind), this.strategy573(ind), this.strategy574(ind), this.strategy575(ind),
            this.strategy576(ind), this.strategy577(ind), this.strategy578(ind), this.strategy579(ind), this.strategy580(ind),
            this.strategy581(ind), this.strategy582(ind), this.strategy583(ind), this.strategy584(ind), this.strategy585(ind),
            this.strategy586(ind), this.strategy587(ind), this.strategy588(ind), this.strategy589(ind), this.strategy590(ind),
            this.strategy591(ind), this.strategy592(ind), this.strategy593(ind), this.strategy594(ind), this.strategy595(ind),
            this.strategy596(ind), this.strategy597(ind), this.strategy598(ind), this.strategy599(ind), this.strategy600(ind),
            this.strategy601(ind), this.strategy602(ind), this.strategy603(ind), this.strategy604(ind), this.strategy605(ind),
            this.strategy606(ind), this.strategy607(ind), this.strategy608(ind), this.strategy609(ind), this.strategy610(ind),
            this.strategy611(ind), this.strategy612(ind), this.strategy613(ind), this.strategy614(ind), this.strategy615(ind),
            this.strategy616(ind), this.strategy617(ind), this.strategy618(ind), this.strategy619(ind), this.strategy620(ind),
            this.strategy621(ind), this.strategy622(ind), this.strategy623(ind), this.strategy624(ind), this.strategy625(ind),
            this.strategy626(ind), this.strategy627(ind), this.strategy628(ind), this.strategy629(ind), this.strategy630(ind),
            this.strategy631(ind), this.strategy632(ind), this.strategy633(ind), this.strategy634(ind), this.strategy635(ind),
            this.strategy636(ind), this.strategy637(ind), this.strategy638(ind), this.strategy639(ind), this.strategy640(ind),
            this.strategy641(ind), this.strategy642(ind), this.strategy643(ind), this.strategy644(ind), this.strategy645(ind),
            this.strategy646(ind), this.strategy647(ind), this.strategy648(ind), this.strategy649(ind), this.strategy650(ind),
            this.strategy651(ind), this.strategy652(ind), this.strategy653(ind), this.strategy654(ind), this.strategy655(ind),
            this.strategy656(ind), this.strategy657(ind), this.strategy658(ind), this.strategy659(ind), this.strategy660(ind),
            this.strategy661(ind), this.strategy662(ind), this.strategy663(ind), this.strategy664(ind), this.strategy665(ind),
            this.strategy666(ind), this.strategy667(ind), this.strategy668(ind), this.strategy669(ind), this.strategy670(ind),
            this.strategy671(ind), this.strategy672(ind), this.strategy673(ind), this.strategy674(ind), this.strategy675(ind),
            this.strategy676(ind), this.strategy677(ind), this.strategy678(ind), this.strategy679(ind), this.strategy680(ind),
            this.strategy681(ind), this.strategy682(ind), this.strategy683(ind), this.strategy684(ind), this.strategy685(ind),
            this.strategy686(ind), this.strategy687(ind), this.strategy688(ind), this.strategy689(ind), this.strategy690(ind),
            this.strategy691(ind), this.strategy692(ind), this.strategy693(ind), this.strategy694(ind), this.strategy695(ind),
            this.strategy696(ind), this.strategy697(ind), this.strategy698(ind), this.strategy699(ind), this.strategy700(ind)
        ];
    }
}

