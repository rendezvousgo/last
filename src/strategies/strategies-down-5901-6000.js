/**
 * DOWN ���� ���� (ID: 5901-6000)
 * 2-��??���� ??�� (���) + 3-��??���� ����
 * 5901-5950: ��?? 2-��??����
 * 5951-6000: 3-��??���� ����
 */

export class StrategiesDown5901 {
    
    // ==================== ��?? 2-��??���� (5901-5950) ====================
    
    /** ���� 5901: Stoch + ADX ���� */
    static strategy5901(ind) {
        const match = ind.stochastic?.k > 80 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5901, name: 'Stoch OB + ADX Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5902: Stoch ����??��??+ ADX ��� */
    static strategy5902(ind) {
        const stochCross = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = stochCross && ind.adx?.adx > ind.adx?.prevAdx;
        return { id: 5902, name: 'Stoch Cross + ADX Rising', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5903: Stoch > 75 + CCI > 100 */
    static strategy5903(ind) {
        const match = ind.stochastic?.k > 75 && ind.cci > 100;
        return { id: 5903, name: 'Stoch + CCI Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5904: Stoch �϶� + CCI �϶� ���� */
    static strategy5904(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.prevK && ind.cci < ind.prevCci;
        return { id: 5904, name: 'Stoch + CCI Both Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5905: Stoch > 80 + Williams > -20 */
    static strategy5905(ind) {
        const match = ind.stochastic?.k > 80 && ind.williamsR > -20;
        return { id: 5905, name: 'Stoch + Williams Double OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5906: Stoch �϶� + Williams �϶� */
    static strategy5906(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.prevK && ind.williamsR < ind.prevWilliamsR;
        return { id: 5906, name: 'Stoch + Williams Both Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5907: Stoch > 75 + OBV �϶� */
    static strategy5907(ind) {
        const match = ind.stochastic?.k > 75 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5907, name: 'Stoch OB + OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5908: Stoch ���� + OBV ??�̹���??*/
    static strategy5908(ind) {
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = ind.stochastic?.k < ind.stochastic?.d && obvDiv;
        return { id: 5908, name: 'Stoch Dead + OBV Div', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5909: Stoch > 80 + ATR > ��� */
    static strategy5909(ind) {
        const match = ind.stochastic?.k > 80 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5909, name: 'Stoch OB + ATR High', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5910: Stoch ����??��??+ ATR �޵� */
    static strategy5910(ind) {
        const stochCross = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = stochCross && atrSpike;
        return { id: 5910, name: 'Stoch Cross + ATR Spike', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5911: ADX > 25 + CCI > 100 + -DI */
    static strategy5911(ind) {
        const match = ind.adx?.adx > 25 && ind.cci > 100 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5911, name: 'ADX + CCI OB Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5912: ADX ��� + CCI �϶� + -DI �߼� */
    static strategy5912(ind) {
        const match = ind.adx?.adx > ind.adx?.prevAdx && ind.cci < ind.prevCci && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5912, name: 'ADX Rise + CCI Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5913: ADX > 30 + Williams > -20 */
    static strategy5913(ind) {
        const match = ind.adx?.adx > 30 && ind.williamsR > -20 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5913, name: 'ADX 30 + Williams OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5914: DI ����??��??+ Williams ??Ż */
    static strategy5914(ind) {
        const diCross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const match = diCross && wExit;
        return { id: 5914, name: 'DI Cross + Williams Exit', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5915: ADX > 25 + OBV �϶� + -DI */
    static strategy5915(ind) {
        const match = ind.adx?.adx > 25 && (ind.obv || 0) < (ind.prevObv || 0) && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5915, name: 'ADX + OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5916: ADX ��� + OBV �϶� */
    static strategy5916(ind) {
        const obvFalling = (ind.obv || 0) < (ind.prevObv || 0);
        const match = ind.adx?.adx > ind.adx?.prevAdx && obvFalling && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5916, name: 'ADX Rise + OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5917: ADX > 30 + ATR > ��� + -DI */
    static strategy5917(ind) {
        const match = ind.adx?.adx > 30 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5917, name: 'ADX 30 + ATR High', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5918: DI ����??��??+ ATR �޵� */
    static strategy5918(ind) {
        const diCross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = diCross && atrSpike;
        return { id: 5918, name: 'DI Cross + ATR Spike', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5919: CCI > 100 + Williams > -25 */
    static strategy5919(ind) {
        const match = ind.cci > 100 && ind.williamsR > -25;
        return { id: 5919, name: 'CCI + Williams OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5920: CCI �϶� + Williams �϶� ���� */
    static strategy5920(ind) {
        const match = ind.cci < ind.prevCci && ind.williamsR < ind.prevWilliamsR;
        return { id: 5920, name: 'CCI + Williams Both Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5921: CCI 100 ??Ż + Williams ??Ż */
    static strategy5921(ind) {
        const cciExit = ind.cci < 100 && ind.prevCci >= 100;
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const match = cciExit && wExit;
        return { id: 5921, name: 'CCI + Williams Double Exit', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5922: CCI > 100 + OBV �϶� */
    static strategy5922(ind) {
        const match = ind.cci > 100 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5922, name: 'CCI OB + OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5923: CCI �϶� + OBV ??�̹���??*/
    static strategy5923(ind) {
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = ind.cci < ind.prevCci && obvDiv;
        return { id: 5923, name: 'CCI Down + OBV Div', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5924: CCI > 150 + ATR > ��� */
    static strategy5924(ind) {
        const match = ind.cci > 150 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5924, name: 'CCI 150 + ATR High', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5925: CCI 100 ??Ż + ATR �޵� */
    static strategy5925(ind) {
        const cciExit = ind.cci < 100 && ind.prevCci >= 100;
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = cciExit && atrSpike;
        return { id: 5925, name: 'CCI Exit + ATR Spike', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5926: Williams > -20 + OBV �϶� */
    static strategy5926(ind) {
        const match = ind.williamsR > -20 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5926, name: 'Williams OB + OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5927: Williams ??Ż + OBV ??�̹���??*/
    static strategy5927(ind) {
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = wExit && obvDiv;
        return { id: 5927, name: 'Williams Exit + OBV Div', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5928: Williams > -15 + ATR > ��� */
    static strategy5928(ind) {
        const match = ind.williamsR > -15 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5928, name: 'Williams Extreme + ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5929: Williams ??Ż + ATR �޵� */
    static strategy5929(ind) {
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = wExit && atrSpike;
        return { id: 5929, name: 'Williams Exit + ATR Spike', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5930: OBV �϶� + ATR > ��� */
    static strategy5930(ind) {
        const match = (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5930, name: 'OBV Down + ATR High', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5931: OBV �϶� + ATR �޵� */
    static strategy5931(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const obvFalling = (ind.obv || 0) < (ind.prevObv || 0);
        const match = obvFalling && atrSpike && ind.priceChange < 0;
        return { id: 5931, name: 'OBV Down + ATR Spike', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5932: OBV ??�̹���??+ ATR ��� */
    static strategy5932(ind) {
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = obvDiv && (ind.atr || 0) > (ind.prevAtr || 0);
        return { id: 5932, name: 'OBV Div + ATR Rising', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5933: Stoch + CCI ���� ??Ż */
    static strategy5933(ind) {
        const stochExit = ind.stochastic?.k < 80 && ind.stochastic?.prevK >= 80;
        const cciExit = ind.cci < 100 && ind.prevCci >= 100;
        const match = stochExit && cciExit;
        return { id: 5933, name: 'Stoch + CCI Double Exit', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5934: Stoch + Williams ���� ??Ż */
    static strategy5934(ind) {
        const stochExit = ind.stochastic?.k < 80 && ind.stochastic?.prevK >= 80;
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const match = stochExit && wExit;
        return { id: 5934, name: 'Stoch + Williams Double Exit', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5935: ADX + CCI ���� ���ż�*/
    static strategy5935(ind) {
        const match = ind.adx?.adx > 30 && ind.cci > 150 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5935, name: 'ADX + CCI Strong OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5936: ADX + Williams ���� ??ȣ */
    static strategy5936(ind) {
        const match = ind.adx?.adx > 35 && ind.williamsR > -15 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5936, name: 'ADX + Williams Strong', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5937: CCI + OBV ���� ??�̹���??*/
    static strategy5937(ind) {
        const cciHigh = ind.cci > 100;
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = cciHigh && obvDiv;
        return { id: 5937, name: 'CCI High + OBV Div', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5938: Williams + OBV ���� ??�̹���??*/
    static strategy5938(ind) {
        const wHigh = ind.williamsR > -20;
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = wHigh && obvDiv;
        return { id: 5938, name: 'Williams High + OBV Div', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5939: Stoch + ATR ���� ���� */
    static strategy5939(ind) {
        const stochOB = ind.stochastic?.k > 85;
        const atrHigh = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.3;
        const match = stochOB && atrHigh;
        return { id: 5939, name: 'Stoch 85 + ATR 1.3x', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5940: ADX + ATR ���� ���� */
    static strategy5940(ind) {
        const match = ind.adx?.adx > 35 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.3 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5940, name: 'ADX 35 + ATR 1.3x', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5941: CCI + ATR ���� ���� */
    static strategy5941(ind) {
        const match = ind.cci > 150 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.3;
        return { id: 5941, name: 'CCI 150 + ATR 1.3x', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5942: Williams + ATR ���� ���� */
    static strategy5942(ind) {
        const match = ind.williamsR > -15 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.3;
        return { id: 5942, name: 'Williams -15 + ATR 1.3x', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5943: OBV + �ŷ�??���� */
    static strategy5943(ind) {
        const match = (ind.obv || 0) < (ind.prevObv || 0) && ind.volume > ind.avgVolume * 1.5 && ind.priceChange < 0;
        return { id: 5943, name: 'OBV + Volume Spike + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5944: ATR + �ŷ�??+ �϶� */
    static strategy5944(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.3 && ind.volume > ind.avgVolume * 1.5 && ind.priceChange < 0;
        return { id: 5944, name: 'ATR + Volume + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5945: Stoch + ���� �϶� */
    static strategy5945(ind) {
        const match = ind.stochastic?.k > 70 && ind.consecutiveDown >= 2;
        return { id: 5945, name: 'Stoch High + Consecutive', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5946: ADX + ���� �϶� */
    static strategy5946(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.consecutiveDown >= 2;
        return { id: 5946, name: 'ADX Down + Consecutive', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5947: CCI + ���� �϶� */
    static strategy5947(ind) {
        const match = ind.cci > 50 && ind.cci < ind.prevCci && ind.consecutiveDown >= 2;
        return { id: 5947, name: 'CCI Mid + Consecutive', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5948: Williams + ���� �϶� */
    static strategy5948(ind) {
        const match = ind.williamsR > -40 && ind.consecutiveDown >= 2;
        return { id: 5948, name: 'Williams Mid + Consecutive', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5949: OBV + ���� �϶� */
    static strategy5949(ind) {
        const match = (ind.obv || 0) < (ind.prevObv || 0) && ind.consecutiveDown >= 3;
        return { id: 5949, name: 'OBV + 3 Consecutive', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5950: ATR + ���� �϶� */
    static strategy5950(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.consecutiveDown >= 3;
        return { id: 5950, name: 'ATR High + 3 Consecutive', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    // ==================== 3-��??���� ���� (5951-6000) ====================
    
    /** ���� 5951: RSI + MACD + BB ??��??*/
    static strategy5951(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 75;
        return { id: 5951, name: 'RSI MACD BB Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5952: RSI + MACD + EMA ??��??*/
    static strategy5952(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50;
        return { id: 5952, name: 'RSI MACD EMA Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5953: RSI + MACD + Stoch ??��??*/
    static strategy5953(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.stochastic?.k > 75;
        return { id: 5953, name: 'RSI MACD Stoch Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5954: RSI + MACD + ADX ??��??*/
    static strategy5954(ind) {
        const match = ind.rsi > 60 && ind.macd?.MACD < ind.macd?.signal && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5954, name: 'RSI MACD ADX Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 5955: RSI + BB + EMA ??��??*/
    static strategy5955(ind) {
        const match = ind.rsi > 65 && ind.bollingerBands?.position > 75 && ind.ema20 < ind.ema50;
        return { id: 5955, name: 'RSI BB EMA Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5956: RSI + BB + Stoch ??��??*/
    static strategy5956(ind) {
        const match = ind.rsi > 65 && ind.bollingerBands?.position > 75 && ind.stochastic?.k > 75;
        return { id: 5956, name: 'RSI BB Stoch Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5957: RSI + BB + ADX ??��??*/
    static strategy5957(ind) {
        const match = ind.rsi > 60 && ind.bollingerBands?.position > 70 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5957, name: 'RSI BB ADX Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5958: RSI + EMA + Stoch ??��??*/
    static strategy5958(ind) {
        const match = ind.rsi > 60 && ind.ema20 < ind.ema50 && ind.stochastic?.k > 70;
        return { id: 5958, name: 'RSI EMA Stoch Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5959: RSI + EMA + ADX ??��??*/
    static strategy5959(ind) {
        const match = ind.rsi > 60 && ind.ema20 < ind.ema50 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5959, name: 'RSI EMA ADX Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 5960: RSI + Stoch + ADX ??��??*/
    static strategy5960(ind) {
        const match = ind.rsi > 60 && ind.stochastic?.k > 70 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5960, name: 'RSI Stoch ADX Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5961: MACD + BB + EMA ??��??*/
    static strategy5961(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50;
        return { id: 5961, name: 'MACD BB EMA Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5962: MACD + BB + Stoch ??��??*/
    static strategy5962(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 70 && ind.stochastic?.k > 70;
        return { id: 5962, name: 'MACD BB Stoch Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5963: MACD + BB + ADX ??��??*/
    static strategy5963(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 65 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5963, name: 'MACD BB ADX Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5964: MACD + EMA + Stoch ??��??*/
    static strategy5964(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50 && ind.stochastic?.k > 65;
        return { id: 5964, name: 'MACD EMA Stoch Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5965: MACD + EMA + ADX ??��??*/
    static strategy5965(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5965, name: 'MACD EMA ADX Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 5966: MACD + Stoch + ADX ??��??*/
    static strategy5966(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.stochastic?.k > 65 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5966, name: 'MACD Stoch ADX Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 5967: BB + EMA + Stoch ??��??*/
    static strategy5967(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50 && ind.stochastic?.k > 70;
        return { id: 5967, name: 'BB EMA Stoch Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5968: BB + EMA + ADX ??��??*/
    static strategy5968(ind) {
        const match = ind.bollingerBands?.position > 65 && ind.ema20 < ind.ema50 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5968, name: 'BB EMA ADX Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5969: BB + Stoch + ADX ??��??*/
    static strategy5969(ind) {
        const match = ind.bollingerBands?.position > 65 && ind.stochastic?.k > 70 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5969, name: 'BB Stoch ADX Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5970: EMA + Stoch + ADX ??��??*/
    static strategy5970(ind) {
        const match = ind.ema20 < ind.ema50 && ind.stochastic?.k > 65 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5970, name: 'EMA Stoch ADX Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 5971: RSI + MACD + CCI ??��??*/
    static strategy5971(ind) {
        const match = ind.rsi > 60 && ind.macd?.MACD < ind.macd?.signal && ind.cci > 80;
        return { id: 5971, name: 'RSI MACD CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5972: RSI + MACD + Williams ??��??*/
    static strategy5972(ind) {
        const match = ind.rsi > 60 && ind.macd?.MACD < ind.macd?.signal && ind.williamsR > -30;
        return { id: 5972, name: 'RSI MACD Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5973: RSI + MACD + OBV ??��??*/
    static strategy5973(ind) {
        const match = ind.rsi > 60 && ind.macd?.MACD < ind.macd?.signal && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5973, name: 'RSI MACD OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5974: RSI + MACD + ATR ??��??*/
    static strategy5974(ind) {
        const match = ind.rsi > 60 && ind.macd?.MACD < ind.macd?.signal && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5974, name: 'RSI MACD ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5975: RSI + BB + CCI ??��??*/
    static strategy5975(ind) {
        const match = ind.rsi > 60 && ind.bollingerBands?.position > 70 && ind.cci > 80;
        return { id: 5975, name: 'RSI BB CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5976: RSI + BB + Williams ??��??*/
    static strategy5976(ind) {
        const match = ind.rsi > 60 && ind.bollingerBands?.position > 70 && ind.williamsR > -30;
        return { id: 5976, name: 'RSI BB Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5977: RSI + BB + OBV ??��??*/
    static strategy5977(ind) {
        const match = ind.rsi > 60 && ind.bollingerBands?.position > 70 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5977, name: 'RSI BB OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5978: RSI + BB + ATR ??��??*/
    static strategy5978(ind) {
        const match = ind.rsi > 60 && ind.bollingerBands?.position > 70 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5978, name: 'RSI BB ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5979: RSI + EMA + CCI ??��??*/
    static strategy5979(ind) {
        const match = ind.rsi > 60 && ind.ema20 < ind.ema50 && ind.cci > 80;
        return { id: 5979, name: 'RSI EMA CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5980: RSI + EMA + Williams ??��??*/
    static strategy5980(ind) {
        const match = ind.rsi > 60 && ind.ema20 < ind.ema50 && ind.williamsR > -30;
        return { id: 5980, name: 'RSI EMA Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5981: RSI + EMA + OBV ??��??*/
    static strategy5981(ind) {
        const match = ind.rsi > 60 && ind.ema20 < ind.ema50 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5981, name: 'RSI EMA OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5982: RSI + EMA + ATR ??��??*/
    static strategy5982(ind) {
        const match = ind.rsi > 60 && ind.ema20 < ind.ema50 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5982, name: 'RSI EMA ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5983: RSI + Stoch + CCI ??��??*/
    static strategy5983(ind) {
        const match = ind.rsi > 60 && ind.stochastic?.k > 70 && ind.cci > 80;
        return { id: 5983, name: 'RSI Stoch CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5984: RSI + Stoch + Williams ??��??*/
    static strategy5984(ind) {
        const match = ind.rsi > 60 && ind.stochastic?.k > 70 && ind.williamsR > -30;
        return { id: 5984, name: 'RSI Stoch Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5985: RSI + Stoch + OBV ??��??*/
    static strategy5985(ind) {
        const match = ind.rsi > 60 && ind.stochastic?.k > 70 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5985, name: 'RSI Stoch OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5986: RSI + Stoch + ATR ??��??*/
    static strategy5986(ind) {
        const match = ind.rsi > 60 && ind.stochastic?.k > 70 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5986, name: 'RSI Stoch ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5987: RSI + ADX + CCI ??��??*/
    static strategy5987(ind) {
        const match = ind.rsi > 55 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 50;
        return { id: 5987, name: 'RSI ADX CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5988: RSI + ADX + Williams ??��??*/
    static strategy5988(ind) {
        const match = ind.rsi > 55 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -40;
        return { id: 5988, name: 'RSI ADX Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5989: RSI + ADX + OBV ??��??*/
    static strategy5989(ind) {
        const match = ind.rsi > 55 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5989, name: 'RSI ADX OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5990: RSI + ADX + ATR ??��??*/
    static strategy5990(ind) {
        const match = ind.rsi > 55 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5990, name: 'RSI ADX ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5991: RSI + CCI + Williams ??��??*/
    static strategy5991(ind) {
        const match = ind.rsi > 60 && ind.cci > 80 && ind.williamsR > -30;
        return { id: 5991, name: 'RSI CCI Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5992: RSI + CCI + OBV ??��??*/
    static strategy5992(ind) {
        const match = ind.rsi > 60 && ind.cci > 80 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5992, name: 'RSI CCI OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5993: RSI + CCI + ATR ??��??*/
    static strategy5993(ind) {
        const match = ind.rsi > 60 && ind.cci > 80 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5993, name: 'RSI CCI ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5994: RSI + Williams + OBV ??��??*/
    static strategy5994(ind) {
        const match = ind.rsi > 60 && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5994, name: 'RSI Williams OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5995: RSI + Williams + ATR ??��??*/
    static strategy5995(ind) {
        const match = ind.rsi > 60 && ind.williamsR > -30 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5995, name: 'RSI Williams ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5996: RSI + OBV + ATR ??��??*/
    static strategy5996(ind) {
        const match = ind.rsi > 60 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5996, name: 'RSI OBV ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5997: MACD + BB + CCI ??��??*/
    static strategy5997(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 65 && ind.cci > 80;
        return { id: 5997, name: 'MACD BB CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5998: MACD + BB + Williams ??��??*/
    static strategy5998(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 65 && ind.williamsR > -30;
        return { id: 5998, name: 'MACD BB Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5999: MACD + BB + OBV ??��??*/
    static strategy5999(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 65 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5999, name: 'MACD BB OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 6000: MACD + BB + ATR ??��??(����??��) */
    static strategy6000(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 65 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6000, name: 'MACD BB ATR Triple Milestone', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ��� ���� ??�� (5901-6000) */
    static analyzeAll(indicators) {
        return [
            this.strategy5901(indicators), this.strategy5902(indicators), this.strategy5903(indicators),
            this.strategy5904(indicators), this.strategy5905(indicators), this.strategy5906(indicators),
            this.strategy5907(indicators), this.strategy5908(indicators), this.strategy5909(indicators),
            this.strategy5910(indicators), this.strategy5911(indicators), this.strategy5912(indicators),
            this.strategy5913(indicators), this.strategy5914(indicators), this.strategy5915(indicators),
            this.strategy5916(indicators), this.strategy5917(indicators), this.strategy5918(indicators),
            this.strategy5919(indicators), this.strategy5920(indicators), this.strategy5921(indicators),
            this.strategy5922(indicators), this.strategy5923(indicators), this.strategy5924(indicators),
            this.strategy5925(indicators), this.strategy5926(indicators), this.strategy5927(indicators),
            this.strategy5928(indicators), this.strategy5929(indicators), this.strategy5930(indicators),
            this.strategy5931(indicators), this.strategy5932(indicators), this.strategy5933(indicators),
            this.strategy5934(indicators), this.strategy5935(indicators), this.strategy5936(indicators),
            this.strategy5937(indicators), this.strategy5938(indicators), this.strategy5939(indicators),
            this.strategy5940(indicators), this.strategy5941(indicators), this.strategy5942(indicators),
            this.strategy5943(indicators), this.strategy5944(indicators), this.strategy5945(indicators),
            this.strategy5946(indicators), this.strategy5947(indicators), this.strategy5948(indicators),
            this.strategy5949(indicators), this.strategy5950(indicators), this.strategy5951(indicators),
            this.strategy5952(indicators), this.strategy5953(indicators), this.strategy5954(indicators),
            this.strategy5955(indicators), this.strategy5956(indicators), this.strategy5957(indicators),
            this.strategy5958(indicators), this.strategy5959(indicators), this.strategy5960(indicators),
            this.strategy5961(indicators), this.strategy5962(indicators), this.strategy5963(indicators),
            this.strategy5964(indicators), this.strategy5965(indicators), this.strategy5966(indicators),
            this.strategy5967(indicators), this.strategy5968(indicators), this.strategy5969(indicators),
            this.strategy5970(indicators), this.strategy5971(indicators), this.strategy5972(indicators),
            this.strategy5973(indicators), this.strategy5974(indicators), this.strategy5975(indicators),
            this.strategy5976(indicators), this.strategy5977(indicators), this.strategy5978(indicators),
            this.strategy5979(indicators), this.strategy5980(indicators), this.strategy5981(indicators),
            this.strategy5982(indicators), this.strategy5983(indicators), this.strategy5984(indicators),
            this.strategy5985(indicators), this.strategy5986(indicators), this.strategy5987(indicators),
            this.strategy5988(indicators), this.strategy5989(indicators), this.strategy5990(indicators),
            this.strategy5991(indicators), this.strategy5992(indicators), this.strategy5993(indicators),
            this.strategy5994(indicators), this.strategy5995(indicators), this.strategy5996(indicators),
            this.strategy5997(indicators), this.strategy5998(indicators), this.strategy5999(indicators),
            this.strategy6000(indicators)
        ];
    }
}

