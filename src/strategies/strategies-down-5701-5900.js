/**
 * DOWN ���� ���� (ID: 5701-5900)
 * 2-��??���� ??��
 * 5701-5750: RSI + ??�� ��??
 * 5751-5800: MACD + ??�� ��??
 * 5801-5850: BB + ??�� ��??
 * 5851-5900: EMA/SMA + ??�� ��??
 */

export class StrategiesDown5701 {
    
    // ==================== RSI + ??�� ��??���� (5701-5750) ====================
    
    /** ���� 5701: RSI > 70 + MACD ���� */
    static strategy5701(ind) {
        const match = ind.rsi > 70 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5701, name: 'RSI 70 + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5702: RSI > 65 + MACD ����??��????�� */
    static strategy5702(ind) {
        const match = ind.rsi > 65 && ind.macd?.histogram < 0;
        return { id: 5702, name: 'RSI 65 + MACD Hist Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5703: RSI > 60 + MACD ����??��??�߻� */
    static strategy5703(ind) {
        const macdCross = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const match = ind.rsi > 60 && macdCross;
        return { id: 5703, name: 'RSI 60 + MACD Cross Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5704: RSI �϶� + MACD �϶� ���� */
    static strategy5704(ind) {
        const match = ind.rsi < ind.prevRsi && ind.macd?.histogram < ind.macd?.prevHistogram;
        return { id: 5704, name: 'RSI + MACD Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5705: RSI 70 ??Ż + MACD ??�� */
    static strategy5705(ind) {
        const rsiExit = ind.rsi > 30 && ind.prevRsi >= 70;
        const match = rsiExit && ind.macd?.histogram < 0;
        return { id: 5705, name: 'RSI Exit 70 + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5706: RSI > 70 + BB �ش� 90%+ */
    static strategy5706(ind) {
        const match = ind.rsi > 70 && ind.bollingerBands?.position > 90;
        return { id: 5706, name: 'RSI 70 + BB Top 90', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5707: RSI > 65 + BB �ش� 80%+ */
    static strategy5707(ind) {
        const match = ind.rsi > 65 && ind.bollingerBands?.position > 80;
        return { id: 5707, name: 'RSI 65 + BB Top 80', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5708: RSI �϶� + BB ??????�϶� */
    static strategy5708(ind) {
        const match = ind.rsi < ind.prevRsi && ind.bollingerBands?.position < ind.bollingerBands?.prevPosition;
        return { id: 5708, name: 'RSI + BB Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5709: RSI > 65 + BB ���??���� */
    static strategy5709(ind) {
        const match = ind.rsi > 65 && ind.bollingerBands?.bandwidth > ind.bollingerBands?.prevBandwidth;
        return { id: 5709, name: 'RSI 65 + BB Expanding', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5710: RSI 70 ??Ż + BB �ش� ??Ż */
    static strategy5710(ind) {
        const rsiExit = ind.rsi > 30 && ind.prevRsi >= 70;
        const bbExit = ind.bollingerBands?.position < 85 && ind.bollingerBands?.prevPosition >= 85;
        const match = rsiExit && bbExit;
        return { id: 5710, name: 'RSI + BB Exit Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5711: RSI > 65 + EMA ���� + MACD ���� (5035�� ����ȭ) */
    static strategy5711(ind) {
        const match = ind.rsi > 65 && ind.ema20 < ind.ema50 && ind.macd?.MACD < 0;
        return { id: 5711, name: 'RSI 65 + EMA Dead + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5712: RSI > 60 + EMA ����??��??�߻� */
    static strategy5712(ind) {
        const emaCross = ind.ema20 < ind.ema50 && ind.prevEma20 >= ind.prevEma50;
        const match = ind.rsi > 60 && emaCross;
        return { id: 5712, name: 'RSI 60 + EMA Cross Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5713: RSI > 65 + ��??< EMA20 */
    static strategy5713(ind) {
        const match = ind.rsi > 65 && ind.price < ind.ema20;
        return { id: 5713, name: 'RSI 65 + Price Below EMA20', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5714: RSI �϶� + EMA20 �϶� */
    static strategy5714(ind) {
        const match = ind.rsi < ind.prevRsi && ind.ema20 < ind.prevEma20;
        return { id: 5714, name: 'RSI + EMA20 Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5715: RSI 50 ??�� ??�� + EMA ���� */
    static strategy5715(ind) {
        const rsiBreak = ind.rsi > 50 && ind.prevRsi >= 50;
        const match = rsiBreak && ind.ema20 < ind.ema50;
        return { id: 5715, name: 'RSI Break 50 + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5716: RSI > 70 + SMA ���� */
    static strategy5716(ind) {
        const match = ind.rsi > 70 && ind.sma20 < ind.sma50;
        return { id: 5716, name: 'RSI 70 + SMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5717: RSI > 65 + ��??< SMA20 */
    static strategy5717(ind) {
        const match = ind.rsi > 65 && ind.price < ind.sma20;
        return { id: 5717, name: 'RSI 65 + Price Below SMA20', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5718: RSI > 65 + Stoch > 80 */
    static strategy5718(ind) {
        const match = ind.rsi > 65 && ind.stochastic?.k > 80;
        return { id: 5718, name: 'RSI 65 + Stoch 80', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5719: RSI > 70 + Stoch ����??��??*/
    static strategy5719(ind) {
        const stochDead = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = ind.rsi > 70 && stochDead;
        return { id: 5719, name: 'RSI 70 + Stoch Dead Cross', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5720: RSI �϶� + Stoch �϶� ���� */
    static strategy5720(ind) {
        const match = ind.rsi < ind.prevRsi && ind.stochastic?.k < ind.stochastic?.prevK;
        return { id: 5720, name: 'RSI + Stoch Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5721: RSI > 65 + ADX > 25 + -DI �߼� */
    static strategy5721(ind) {
        const match = ind.rsi > 65 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5721, name: 'RSI 65 + ADX Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5722: RSI > 60 + ADX ��� + -DI > +DI */
    static strategy5722(ind) {
        const match = ind.rsi > 60 && ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5722, name: 'RSI 60 + ADX Rising Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5723: RSI > 65 + CCI > 100 */
    static strategy5723(ind) {
        const match = ind.rsi > 65 && ind.cci > 100;
        return { id: 5723, name: 'RSI 65 + CCI 100', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5724: RSI �϶� + CCI �϶� ���� */
    static strategy5724(ind) {
        const match = ind.rsi < ind.prevRsi && ind.cci < ind.prevCci;
        return { id: 5724, name: 'RSI + CCI Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5725: RSI > 70 + Williams %R > -20 */
    static strategy5725(ind) {
        const match = ind.rsi > 70 && ind.williamsR > -20;
        return { id: 5725, name: 'RSI 70 + Williams OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5726: RSI �϶� + Williams �϶� */
    static strategy5726(ind) {
        const match = ind.rsi < ind.prevRsi && ind.williamsR < ind.prevWilliamsR;
        return { id: 5726, name: 'RSI + Williams Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5727: RSI > 65 + OBV �϶� */
    static strategy5727(ind) {
        const match = ind.rsi > 65 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5727, name: 'RSI 65 + OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5728: RSI > 60 + ATR ��� + �϶� ĵ�� */
    static strategy5728(ind) {
        const match = ind.rsi > 60 && (ind.atr || 0) > (ind.prevAtr || 0) && ind.priceChange < 0;
        return { id: 5728, name: 'RSI 60 + ATR Rise + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5729: RSI > 65 + ATR �޵� */
    static strategy5729(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = ind.rsi > 65 && atrSpike;
        return { id: 5729, name: 'RSI 65 + ATR Spike', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5730: RSI > 70 + �ŷ�??���� + �϶� */
    static strategy5730(ind) {
        const match = ind.rsi > 70 && ind.volume > ind.avgVolume * 1.5 && ind.priceChange < 0;
        return { id: 5730, name: 'RSI 70 + Volume Spike + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5731: RSI ??�̹���??(���ݡ� + RSI?? + MACD ??�� */
    static strategy5731(ind) {
        const rsiDiv = ind.priceChange > 0 && ind.rsi < ind.prevRsi;
        const match = rsiDiv && ind.macd?.histogram < 0;
        return { id: 5731, name: 'RSI Div + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5732: RSI 60-70 ���� + EMA ���� + �϶� */
    static strategy5732(ind) {
        const match = ind.rsi >= 60 && ind.rsi <= 70 && ind.ema20 < ind.ema50 && ind.priceChange < 0;
        return { id: 5732, name: 'RSI Mid-High + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5733: RSI ���� �϶� (3?? + BB < 70 */
    static strategy5733(ind) {
        const match = ind.rsi < ind.prevRsi && ind.prevRsi < ind.prev2Rsi && ind.bollingerBands?.position < 70;
        return { id: 5733, name: 'RSI 3-Bar Down + BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5734: RSI > 65 + Stoch > 75 + �϶� ��ȯ */
    static strategy5734(ind) {
        const match = ind.rsi > 65 && ind.stochastic?.k > 75 && ind.stochastic?.k < ind.stochastic?.prevK;
        return { id: 5734, name: 'RSI Stoch OB + Turn', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5735: RSI 50????�� + ADX ��� */
    static strategy5735(ind) {
        const rsiBreak = ind.rsi > 50 && ind.prevRsi >= 50;
        const match = rsiBreak && ind.adx?.adx > ind.adx?.prevAdx;
        return { id: 5735, name: 'RSI Break 50 + ADX Rise', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5736: RSI > 68 + CCI > 150 */
    static strategy5736(ind) {
        const match = ind.rsi > 68 && ind.cci > 150;
        return { id: 5736, name: 'RSI 68 + CCI 150', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5737: RSI > 65 + Williams > -15 */
    static strategy5737(ind) {
        const match = ind.rsi > 65 && ind.williamsR > -15;
        return { id: 5737, name: 'RSI + Williams Extreme OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5738: RSI > 60 + OBV �϶� */
    static strategy5738(ind) {
        const obvFalling = (ind.obv || 0) < (ind.prevObv || 0);
        const match = ind.rsi > 60 && obvFalling && ind.priceChange < 0;
        return { id: 5738, name: 'RSI 60 + OBV Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5739: RSI > 65 + ATR > ��� + EMA ���� */
    static strategy5739(ind) {
        const match = ind.rsi > 65 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.ema20 < ind.ema50;
        return { id: 5739, name: 'RSI + ATR + EMA Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5740: RSI 70 ??Ż + Stoch 80 ??Ż */
    static strategy5740(ind) {
        const rsiExit = ind.rsi > 30 && ind.prevRsi >= 70;
        const stochExit = ind.stochastic?.k < 80 && ind.stochastic?.prevK >= 80;
        const match = rsiExit && stochExit;
        return { id: 5740, name: 'RSI + Stoch Exit OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5741: RSI > 60 + ��� MA ??????*/
    static strategy5741(ind) {
        const match = ind.rsi > 60 && ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50;
        return { id: 5741, name: 'RSI 60 + All MA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5742: RSI > 65 + DI ����??��??*/
    static strategy5742(ind) {
        const diCross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = ind.rsi > 65 && diCross;
        return { id: 5742, name: 'RSI 65 + DI Cross Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5743: RSI > 60 + CCI 100 ??Ż */
    static strategy5743(ind) {
        const cciExit = ind.cci < 100 && ind.prevCci >= 100;
        const match = ind.rsi > 60 && cciExit;
        return { id: 5743, name: 'RSI 60 + CCI Exit 100', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5744: RSI > 65 + Williams ??Ż */
    static strategy5744(ind) {
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const match = ind.rsi > 65 && wExit;
        return { id: 5744, name: 'RSI 65 + Williams Exit', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5745: RSI > 60 + OBV ??�̹���??*/
    static strategy5745(ind) {
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = ind.rsi > 60 && obvDiv;
        return { id: 5745, name: 'RSI 60 + OBV Divergence', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5746: RSI > 65 + BB ??���� ??�϶� ??�� */
    static strategy5746(ind) {
        const match = ind.rsi > 65 && ind.bollingerBands?.position < 50 && ind.bollingerBands?.prevBandwidth < 3;
        return { id: 5746, name: 'RSI + BB Squeeze Break Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5747: RSI > 68 + MACD 0????�� */
    static strategy5747(ind) {
        const macdBreak = ind.macd?.MACD < 0 && ind.macd?.prevMACD >= 0;
        const match = ind.rsi > 68 && macdBreak;
        return { id: 5747, name: 'RSI 68 + MACD Break Zero', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5748: RSI > 60 + Stoch 50 ??�� */
    static strategy5748(ind) {
        const stochBreak = ind.stochastic?.k < 50 && ind.stochastic?.prevK >= 50;
        const match = ind.rsi > 60 && stochBreak;
        return { id: 5748, name: 'RSI 60 + Stoch Break 50', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5749: RSI > 65 + EMA + SMA ���� ���� */
    static strategy5749(ind) {
        const match = ind.rsi > 65 && ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50;
        return { id: 5749, name: 'RSI + Double MA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5750: RSI 2-��??Ȯ��??*/
    static strategy5750(ind) {
        const match = ind.rsi > 62 && ind.macd?.histogram < 5 && ind.priceChange < 0;
        return { id: 5750, name: 'RSI Two-Ind All-In-One', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    // ==================== MACD + ??�� ��??���� (5751-5800) ====================
    
    /** 전략 5751: MACD 데드 + BB 상단 80%+ + RSI>55 (5073과 차별화) */
    static strategy5751(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 80 && ind.rsi > 55;
        return { id: 5751, name: 'MACD Dead + BB Top + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5752: MACD ??�� + BB �߰�????�� */
    static strategy5752(ind) {
        const match = ind.macd?.histogram < 0 && ind.bollingerBands?.position < 50;
        return { id: 5752, name: 'MACD Neg + BB Below Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5753: MACD ����??��??+ BB ���??���� */
    static strategy5753(ind) {
        const macdCross = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const match = macdCross && ind.bollingerBands?.bandwidth > ind.bollingerBands?.prevBandwidth;
        return { id: 5753, name: 'MACD Cross + BB Expand', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5754: MACD ����??��??�϶� + BB ??????�϶� */
    static strategy5754(ind) {
        const match = ind.macd?.histogram < ind.macd?.prevHistogram && ind.bollingerBands?.position < ind.bollingerBands?.prevPosition;
        return { id: 5754, name: 'MACD + BB Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5755: MACD 0????�� + BB < 50 */
    static strategy5755(ind) {
        const macdBreak = ind.macd?.MACD < 0 && ind.macd?.prevMACD >= 0;
        const match = macdBreak && ind.bollingerBands?.position < 50;
        return { id: 5755, name: 'MACD Break Zero + BB Low', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5756: MACD ���� + EMA ���� */
    static strategy5756(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50;
        return { id: 5756, name: 'MACD Dead + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5757: MACD ����??��??+ EMA ����??��??*/
    static strategy5757(ind) {
        const macdCross = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const emaCross = ind.ema20 < ind.ema50 && ind.prevEma20 >= ind.prevEma50;
        const match = macdCross && emaCross;
        return { id: 5757, name: 'MACD + EMA Double Cross', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 5758: MACD ??�� + ��??< EMA20 */
    static strategy5758(ind) {
        const match = ind.macd?.histogram < 0 && ind.price < ind.ema20;
        return { id: 5758, name: 'MACD Neg + Below EMA20', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5759: MACD ����??��??�϶� + EMA20 �϶� */
    static strategy5759(ind) {
        const match = ind.macd?.histogram < ind.macd?.prevHistogram && ind.ema20 < ind.prevEma20;
        return { id: 5759, name: 'MACD + EMA20 Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5760: MACD ���� �϶� (3?? + EMA ���� */
    static strategy5760(ind) {
        const macdFalling = ind.macd?.histogram < ind.macd?.prevHistogram && ind.macd?.prevHistogram < ind.macd?.prev2Histogram;
        const match = macdFalling && ind.ema20 < ind.ema50;
        return { id: 5760, name: 'MACD 3-Bar + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5761: MACD ���� + SMA ���� */
    static strategy5761(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.sma20 < ind.sma50;
        return { id: 5761, name: 'MACD Dead + SMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5762: MACD ??�� + ��??< SMA20 < SMA50 */
    static strategy5762(ind) {
        const match = ind.macd?.histogram < 0 && ind.price < ind.sma20 && ind.sma20 < ind.sma50;
        return { id: 5762, name: 'MACD Neg + Below All SMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5763: MACD ���� + Stoch > 80 */
    static strategy5763(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.stochastic?.k > 80;
        return { id: 5763, name: 'MACD Dead + Stoch OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5764: MACD ����??��??+ Stoch ����??��??*/
    static strategy5764(ind) {
        const macdCross = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const stochCross = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = macdCross && stochCross;
        return { id: 5764, name: 'MACD + Stoch Double Cross', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 5765: MACD ����??��??�϶� + Stoch �϶� */
    static strategy5765(ind) {
        const match = ind.macd?.histogram < ind.macd?.prevHistogram && ind.stochastic?.k < ind.stochastic?.prevK;
        return { id: 5765, name: 'MACD + Stoch Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5766: MACD ??�� + Stoch 50 ??�� */
    static strategy5766(ind) {
        const stochBreak = ind.stochastic?.k < 50 && ind.stochastic?.prevK >= 50;
        const match = ind.macd?.histogram < 0 && stochBreak;
        return { id: 5766, name: 'MACD Neg + Stoch Break 50', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5767: MACD ���� + ADX > 25 + -DI �߼� */
    static strategy5767(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5767, name: 'MACD Dead + ADX Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5768: MACD ??�� + ADX ��� + -DI > +DI */
    static strategy5768(ind) {
        const match = ind.macd?.histogram < 0 && ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5768, name: 'MACD Neg + ADX Rising', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5769: MACD ����??��??+ DI ����??��??*/
    static strategy5769(ind) {
        const macdCross = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const diCross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = macdCross && diCross;
        return { id: 5769, name: 'MACD + DI Double Cross', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5770: MACD ���� + CCI > 100 */
    static strategy5770(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.cci > 100;
        return { id: 5770, name: 'MACD Dead + CCI OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5771: MACD ����??��??�϶� + CCI �϶� */
    static strategy5771(ind) {
        const match = ind.macd?.histogram < ind.macd?.prevHistogram && ind.cci < ind.prevCci;
        return { id: 5771, name: 'MACD + CCI Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5772: MACD ??�� + CCI 0????�� */
    static strategy5772(ind) {
        const cciBreak = ind.cci < 0 && ind.prevCci >= 0;
        const match = ind.macd?.histogram < 0 && cciBreak;
        return { id: 5772, name: 'MACD Neg + CCI Break Zero', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5773: MACD ���� + Williams > -20 */
    static strategy5773(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.williamsR > -20;
        return { id: 5773, name: 'MACD Dead + Williams OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5774: MACD ����??��??�϶� + Williams �϶� */
    static strategy5774(ind) {
        const match = ind.macd?.histogram < ind.macd?.prevHistogram && ind.williamsR < ind.prevWilliamsR;
        return { id: 5774, name: 'MACD + Williams Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5775: MACD ??�� + OBV �϶� */
    static strategy5775(ind) {
        const match = ind.macd?.histogram < 0 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5775, name: 'MACD Neg + OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5776: MACD ���� + OBV ??�̹���??*/
    static strategy5776(ind) {
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = ind.macd?.MACD < ind.macd?.signal && obvDiv;
        return { id: 5776, name: 'MACD Dead + OBV Div', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5777: MACD ���� + ATR > ��� */
    static strategy5777(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5777, name: 'MACD Dead + ATR High', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5778: MACD ����??��??+ ATR �޵� */
    static strategy5778(ind) {
        const macdCross = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = macdCross && atrSpike;
        return { id: 5778, name: 'MACD Cross + ATR Spike', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5779: MACD ??�� + �ŷ�??���� + �϶� */
    static strategy5779(ind) {
        const match = ind.macd?.histogram < 0 && ind.volume > ind.avgVolume * 1.5 && ind.priceChange < 0;
        return { id: 5779, name: 'MACD Neg + Volume + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5780: MACD ??�̹���??+ EMA ���� */
    static strategy5780(ind) {
        const macdDiv = ind.priceChange > 0 && ind.macd?.histogram < ind.macd?.prevHistogram;
        const match = macdDiv && ind.ema20 < ind.ema50;
        return { id: 5780, name: 'MACD Div + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5781: MACD ���� �϶� + BB �϶� */
    static strategy5781(ind) {
        const macdFalling = ind.macd?.histogram < ind.macd?.prevHistogram && ind.macd?.prevHistogram < ind.macd?.prev2Histogram;
        const match = macdFalling && ind.bollingerBands?.position < ind.bollingerBands?.prevPosition;
        return { id: 5781, name: 'MACD + BB Consecutive Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5782: MACD 0????�� + Stoch ���� */
    static strategy5782(ind) {
        const macdBreak = ind.macd?.MACD < 0 && ind.macd?.prevMACD >= 0;
        const match = macdBreak && ind.stochastic?.k < ind.stochastic?.d;
        return { id: 5782, name: 'MACD Zero Break + Stoch Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5783: MACD ����??��??< -20 + EMA ���� */
    static strategy5783(ind) {
        const match = ind.macd?.histogram < -20 && ind.ema20 < ind.ema50;
        return { id: 5783, name: 'MACD Strong Neg + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5784: MACD ���� + ADX > 30 */
    static strategy5784(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5784, name: 'MACD Dead + ADX 30', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5785: MACD ??�� + CCI < 0 + ���� �϶� */
    static strategy5785(ind) {
        const match = ind.macd?.histogram < 0 && ind.cci < 0 && ind.cci < ind.prevCci;
        return { id: 5785, name: 'MACD + CCI Neg Both Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5786: MACD ���� + Williams ??Ż */
    static strategy5786(ind) {
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const match = ind.macd?.MACD < ind.macd?.signal && wExit;
        return { id: 5786, name: 'MACD Dead + Williams Exit', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5787: MACD ����??��??��ȯ (??��?? + OBV �϶� */
    static strategy5787(ind) {
        const macdTurn = ind.macd?.histogram < 0 && ind.macd?.prevHistogram >= 0;
        const match = macdTurn && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5787, name: 'MACD Turn Neg + OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5788: MACD ���� + ATR ��� + �϶� ĵ�� */
    static strategy5788(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && (ind.atr || 0) > (ind.prevAtr || 0) && ind.priceChange < 0;
        return { id: 5788, name: 'MACD Dead + ATR Rise + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5789: MACD ���� ??�� (5?? + BB < 40 */
    static strategy5789(ind) {
        const match = ind.macd?.negativeCount >= 5 && ind.bollingerBands?.position < 40;
        return { id: 5789, name: 'MACD 5-Bar Neg + BB Low', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5790: MACD ??��????�� + EMA ??�� */
    static strategy5790(ind) {
        const match = ind.macd?.signal < ind.macd?.prevSignal && ind.ema20 < ind.prevEma20;
        return { id: 5790, name: 'MACD Signal + EMA Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5791: MACD ���� + Stoch �϶� + BB �϶� */
    static strategy5791(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.stochastic?.k < ind.stochastic?.prevK && 
                     ind.bollingerBands?.position < ind.bollingerBands?.prevPosition;
        return { id: 5791, name: 'MACD Stoch BB All Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5792: MACD ����??��??�޶� + ADX ��� */
    static strategy5792(ind) {
        const macdDrop = ind.macd?.prevHistogram - ind.macd?.histogram > 10;
        const match = macdDrop && ind.adx?.adx > ind.adx?.prevAdx;
        return { id: 5792, name: 'MACD Drop + ADX Rise', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5793: MACD ??�� + CCI 100 ??Ż */
    static strategy5793(ind) {
        const cciExit = ind.cci < 100 && ind.prevCci >= 100;
        const match = ind.macd?.histogram < 0 && cciExit;
        return { id: 5793, name: 'MACD Neg + CCI Exit 100', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5794: MACD ���� + Williams -30~-50 */
    static strategy5794(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.williamsR >= -50 && ind.williamsR <= -30;
        return { id: 5794, name: 'MACD Dead + Williams Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5795: MACD ����??��????�� + OBV �϶� */
    static strategy5795(ind) {
        const obvFalling = (ind.obv || 0) < (ind.prevObv || 0);
        const match = ind.macd?.histogram < 0 && obvFalling;
        return { id: 5795, name: 'MACD Neg + OBV Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5796: MACD ���� + ATR > 1.3x ��� */
    static strategy5796(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.3;
        return { id: 5796, name: 'MACD Dead + ATR 1.3x', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5797: MACD + EMA + SMA ??��??���� */
    static strategy5797(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50;
        return { id: 5797, name: 'MACD + EMA + SMA Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5798: MACD ??�� + Stoch + ADX ���� */
    static strategy5798(ind) {
        const match = ind.macd?.histogram < 0 && ind.stochastic?.k < ind.stochastic?.d && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5798, name: 'MACD + Stoch + ADX Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5799: MACD ���� + CCI + Williams ���ż�*/
    static strategy5799(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.cci > 80 && ind.williamsR > -25;
        return { id: 5799, name: 'MACD + CCI + Williams OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5800: MACD 2-��??Ȯ��??*/
    static strategy5800(ind) {
        const match = ind.macd?.histogram < 5 && ind.ema20 < ind.ema50 && ind.priceChange < 0;
        return { id: 5800, name: 'MACD Two-Ind All-In-One', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    // ==================== BB + ??�� ��??���� (5801-5850) ====================
    
    /** ���� 5801: BB �ش� 85%+ + EMA ���� */
    static strategy5801(ind) {
        const match = ind.bollingerBands?.position > 85 && ind.ema20 < ind.ema50;
        return { id: 5801, name: 'BB Top 85 + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5802: BB �ش� 80%+ + EMA ����??��??*/
    static strategy5802(ind) {
        const emaCross = ind.ema20 < ind.ema50 && ind.prevEma20 >= ind.prevEma50;
        const match = ind.bollingerBands?.position > 80 && emaCross;
        return { id: 5802, name: 'BB Top + EMA Cross Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5803: BB ??????�϶� + EMA20 �϶� */
    static strategy5803(ind) {
        const match = ind.bollingerBands?.position < ind.bollingerBands?.prevPosition && ind.ema20 < ind.prevEma20;
        return { id: 5803, name: 'BB + EMA20 Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5804: BB �߰�????�� ??�� + EMA ���� */
    static strategy5804(ind) {
        const bbBreak = ind.bollingerBands?.position < 50 && ind.bollingerBands?.prevPosition >= 50;
        const match = bbBreak && ind.ema20 < ind.ema50;
        return { id: 5804, name: 'BB Mid Break + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5805: BB ���??���� + ��??< EMA20 */
    static strategy5805(ind) {
        const match = ind.bollingerBands?.bandwidth > ind.bollingerBands?.prevBandwidth && ind.price < ind.ema20;
        return { id: 5805, name: 'BB Expand + Below EMA20', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5806: BB �ش� 80%+ + SMA ���� */
    static strategy5806(ind) {
        const match = ind.bollingerBands?.position > 80 && ind.sma20 < ind.sma50;
        return { id: 5806, name: 'BB Top + SMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5807: BB < 50 + ��??< SMA20 */
    static strategy5807(ind) {
        const match = ind.bollingerBands?.position < 50 && ind.price < ind.sma20;
        return { id: 5807, name: 'BB Low + Below SMA20', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5808: BB �ش� 85%+ + Stoch > 80 */
    static strategy5808(ind) {
        const match = ind.bollingerBands?.position > 85 && ind.stochastic?.k > 80;
        return { id: 5808, name: 'BB Top + Stoch OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5809: BB ??????�϶� + Stoch �϶� */
    static strategy5809(ind) {
        const match = ind.bollingerBands?.position < ind.bollingerBands?.prevPosition && ind.stochastic?.k < ind.stochastic?.prevK;
        return { id: 5809, name: 'BB + Stoch Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5810: BB �ش� 85%+ + Stoch ����??��??*/
    static strategy5810(ind) {
        const stochCross = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = ind.bollingerBands?.position > 85 && stochCross;
        return { id: 5810, name: 'BB Top + Stoch Cross Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5811: BB �ش� 80%+ + ADX > 25 + -DI �߼� */
    static strategy5811(ind) {
        const match = ind.bollingerBands?.position > 80 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5811, name: 'BB Top + ADX Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5812: BB �߰�????�� + ADX ��� */
    static strategy5812(ind) {
        const bbBreak = ind.bollingerBands?.position < 50 && ind.bollingerBands?.prevPosition >= 50;
        const match = bbBreak && ind.adx?.adx > ind.adx?.prevAdx;
        return { id: 5812, name: 'BB Mid Break + ADX Rise', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5813: BB ���??���� + DI ����??��??*/
    static strategy5813(ind) {
        const diCross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = ind.bollingerBands?.bandwidth > ind.bollingerBands?.prevBandwidth && diCross;
        return { id: 5813, name: 'BB Expand + DI Cross Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5814: BB �ش� 80%+ + CCI > 100 */
    static strategy5814(ind) {
        const match = ind.bollingerBands?.position > 80 && ind.cci > 100;
        return { id: 5814, name: 'BB Top + CCI OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5815: BB ??????�϶� + CCI �϶� */
    static strategy5815(ind) {
        const match = ind.bollingerBands?.position < ind.bollingerBands?.prevPosition && ind.cci < ind.prevCci;
        return { id: 5815, name: 'BB + CCI Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5816: BB < 50 + CCI 0????�� */
    static strategy5816(ind) {
        const cciBreak = ind.cci < 0 && ind.prevCci >= 0;
        const match = ind.bollingerBands?.position < 50 && cciBreak;
        return { id: 5816, name: 'BB Low + CCI Break Zero', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5817: BB �ش� 85%+ + Williams > -20 */
    static strategy5817(ind) {
        const match = ind.bollingerBands?.position > 85 && ind.williamsR > -20;
        return { id: 5817, name: 'BB Top + Williams OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5818: BB ??????�϶� + Williams �϶� */
    static strategy5818(ind) {
        const match = ind.bollingerBands?.position < ind.bollingerBands?.prevPosition && ind.williamsR < ind.prevWilliamsR;
        return { id: 5818, name: 'BB + Williams Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5819: BB �ش� 80%+ + Williams ??Ż */
    static strategy5819(ind) {
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const match = ind.bollingerBands?.position > 80 && wExit;
        return { id: 5819, name: 'BB Top + Williams Exit', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5820: BB ���??���� + OBV �϶� */
    static strategy5820(ind) {
        const match = ind.bollingerBands?.bandwidth > ind.bollingerBands?.prevBandwidth && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5820, name: 'BB Expand + OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5821: BB �ش� 80%+ + OBV ??�̹���??*/
    static strategy5821(ind) {
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = ind.bollingerBands?.position > 80 && obvDiv;
        return { id: 5821, name: 'BB Top + OBV Divergence', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5822: BB �ش� 85%+ + ATR > ��� */
    static strategy5822(ind) {
        const match = ind.bollingerBands?.position > 85 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5822, name: 'BB Top + ATR High', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5823: BB ���??���� + ATR �޵� */
    static strategy5823(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = ind.bollingerBands?.bandwidth > ind.bollingerBands?.prevBandwidth && atrSpike;
        return { id: 5823, name: 'BB Expand + ATR Spike', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5824: BB ??���� ????�� ??�� + EMA ���� */
    static strategy5824(ind) {
        const squeeze = ind.bollingerBands?.prevBandwidth < 3 && ind.bollingerBands?.position < 40;
        const match = squeeze && ind.ema20 < ind.ema50;
        return { id: 5824, name: 'BB Squeeze Break + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5825: BB �ش� ??Ż ??��?? + Stoch �϶� */
    static strategy5825(ind) {
        const bbReturn = ind.bollingerBands?.position < 90 && ind.bollingerBands?.prevPosition >= 90;
        const match = bbReturn && ind.stochastic?.k < ind.stochastic?.prevK;
        return { id: 5825, name: 'BB Return + Stoch Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5826: BB �߰�??��ó + ADX > 30 + -DI */
    static strategy5826(ind) {
        const match = ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 55 && 
                     ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5826, name: 'BB Mid + ADX 30 Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5827: BB �ش� 80%+ + CCI 100 ??Ż */
    static strategy5827(ind) {
        const cciExit = ind.cci < 100 && ind.prevCci >= 100;
        const match = ind.bollingerBands?.position > 80 && cciExit;
        return { id: 5827, name: 'BB Top + CCI Exit 100', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5828: BB ���??> 5 + Williams �϶� */
    static strategy5828(ind) {
        const match = ind.bollingerBands?.bandwidth > 5 && ind.williamsR < ind.prevWilliamsR && ind.williamsR > -50;
        return { id: 5828, name: 'BB Wide + Williams Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5829: BB ??????60-80 + OBV �϶� + �϶� ĵ�� */
    static strategy5829(ind) {
        const match = ind.bollingerBands?.position >= 60 && ind.bollingerBands?.position <= 80 && 
                     (ind.obv || 0) < (ind.prevObv || 0) && ind.priceChange < 0;
        return { id: 5829, name: 'BB Mid-High + OBV + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5830: BB �ش� 85%+ + ATR ��� + �϶� ĵ�� */
    static strategy5830(ind) {
        const match = ind.bollingerBands?.position > 85 && (ind.atr || 0) > (ind.prevAtr || 0) && ind.priceChange < 0;
        return { id: 5830, name: 'BB Top + ATR Rise + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5831: BB + EMA + SMA ??��??*/
    static strategy5831(ind) {
        const match = ind.bollingerBands?.position < 55 && ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50;
        return { id: 5831, name: 'BB + EMA + SMA Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5832: BB �ش� + Stoch + ADX ���� */
    static strategy5832(ind) {
        const match = ind.bollingerBands?.position > 75 && ind.stochastic?.k > 70 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5832, name: 'BB + Stoch + ADX Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5833: BB ���??���� + CCI + Williams */
    static strategy5833(ind) {
        const match = ind.bollingerBands?.bandwidth > ind.bollingerBands?.prevBandwidth && ind.cci > 50 && ind.williamsR > -40;
        return { id: 5833, name: 'BB Expand + CCI + Williams', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5834: BB < 50 + OBV + ATR */
    static strategy5834(ind) {
        const match = ind.bollingerBands?.position < 50 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5834, name: 'BB Low + OBV + ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5835: BB �ش� 80%+ + EMA ���� + �϶� ĵ�� */
    static strategy5835(ind) {
        const match = ind.bollingerBands?.position > 80 && ind.ema20 < ind.ema50 && ind.priceChange < 0;
        return { id: 5835, name: 'BB Top + EMA Dead + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5836: BB ���??4+ + Stoch ���� */
    static strategy5836(ind) {
        const match = ind.bollingerBands?.bandwidth > 4 && ind.stochastic?.k < ind.stochastic?.d;
        return { id: 5836, name: 'BB Wide + Stoch Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5837: BB �ش� ??Ż + ADX ��� */
    static strategy5837(ind) {
        const bbExit = ind.bollingerBands?.position < 85 && ind.bollingerBands?.prevPosition >= 85;
        const match = bbExit && ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5837, name: 'BB Exit + ADX Rising Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5838: BB �߰�????�� + CCI �϶� */
    static strategy5838(ind) {
        const bbBreak = ind.bollingerBands?.position < 50 && ind.bollingerBands?.prevPosition >= 50;
        const match = bbBreak && ind.cci < ind.prevCci;
        return { id: 5838, name: 'BB Mid Break + CCI Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5839: BB �ش� + Williams + OBV */
    static strategy5839(ind) {
        const match = ind.bollingerBands?.position > 75 && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5839, name: 'BB + Williams + OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5840: BB ���??���� + ATR > 1.3x */
    static strategy5840(ind) {
        const match = ind.bollingerBands?.bandwidth > ind.bollingerBands?.prevBandwidth && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.3;
        return { id: 5840, name: 'BB + ATR Both Expanding', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5841: BB �ش� 85%+ + �ŷ�??���� + �϶� */
    static strategy5841(ind) {
        const match = ind.bollingerBands?.position > 85 && ind.volume > ind.avgVolume * 1.5 && ind.priceChange < 0;
        return { id: 5841, name: 'BB Top + Volume + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5842: BB + EMA + Stoch ??��??*/
    static strategy5842(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50 && ind.stochastic?.k > 60;
        return { id: 5842, name: 'BB + EMA + Stoch Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5843: BB ���??��� ??���� + �϶� */
    static strategy5843(ind) {
        const expansion = ind.bollingerBands?.bandwidth > ind.bollingerBands?.prevBandwidth && ind.bollingerBands?.prevBandwidth < 3;
        const match = expansion && ind.priceChange < 0;
        return { id: 5843, name: 'BB Expansion Start + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5844: BB + SMA + ADX ���� */
    static strategy5844(ind) {
        const match = ind.bollingerBands?.position < 55 && ind.sma20 < ind.sma50 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5844, name: 'BB + SMA + ADX Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5845: BB �ش� + CCI + ATR */
    static strategy5845(ind) {
        const match = ind.bollingerBands?.position > 75 && ind.cci > 80 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5845, name: 'BB + CCI + ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5846: BB ??????�϶� + Williams + OBV */
    static strategy5846(ind) {
        const match = ind.bollingerBands?.position < ind.bollingerBands?.prevPosition && 
                     ind.williamsR < ind.prevWilliamsR && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5846, name: 'BB + Williams + OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5847: BB �ش� 80%+ + EMA + ADX */
    static strategy5847(ind) {
        const match = ind.bollingerBands?.position > 80 && ind.ema20 < ind.ema50 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5847, name: 'BB + EMA + ADX Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5848: BB ���??> 4 + CCI �϶� + �϶� ĵ�� */
    static strategy5848(ind) {
        const match = ind.bollingerBands?.bandwidth > 4 && ind.cci < ind.prevCci && ind.priceChange < 0;
        return { id: 5848, name: 'BB Wide + CCI + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5849: BB �ش� + Stoch + Williams */
    static strategy5849(ind) {
        const match = ind.bollingerBands?.position > 75 && ind.stochastic?.k > 70 && ind.williamsR > -30;
        return { id: 5849, name: 'BB + Stoch + Williams OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5850: BB 2-��??Ȯ��??*/
    static strategy5850(ind) {
        const match = ind.bollingerBands?.position > 55 && ind.ema20 < ind.ema50 && ind.priceChange < 0;
        return { id: 5850, name: 'BB Two-Ind All-In-One', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    // ==================== EMA/SMA + ??�� ��??���� (5851-5900) ====================
    
    /** 전략 5851: EMA 데드 + SMA 데드 + MACD 음수 (5098과 차별화) */
    static strategy5851(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && ind.macd?.histogram < 0;
        return { id: 5851, name: 'EMA + SMA + MACD Triple Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5852: EMA ����??��??+ SMA ����??��??*/
    static strategy5852(ind) {
        const emaCross = ind.ema20 < ind.ema50 && ind.prevEma20 >= ind.prevEma50;
        const smaCross = ind.sma20 < ind.sma50 && ind.prevSma20 >= ind.prevSma50;
        const match = emaCross && smaCross;
        return { id: 5852, name: 'EMA + SMA Double Cross', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 5853: EMA ??????(20<50<100) */
    static strategy5853(ind) {
        const match = ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100;
        return { id: 5853, name: 'EMA Stack Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5854: EMA ���� + ��??< EMA20 */
    static strategy5854(ind) {
        const match = ind.ema20 < ind.ema50 && ind.price < ind.ema20;
        return { id: 5854, name: 'EMA Dead + Below EMA20', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5855: EMA20 �϶� + EMA50 �϶� */
    static strategy5855(ind) {
        const match = ind.ema20 < ind.prevEma20 && ind.ema50 < ind.prevEma50;
        return { id: 5855, name: 'EMA20 + EMA50 Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5856: EMA ���� + Stoch > 80 */
    static strategy5856(ind) {
        const match = ind.ema20 < ind.ema50 && ind.stochastic?.k > 80;
        return { id: 5856, name: 'EMA Dead + Stoch OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5857: EMA ����??��??+ Stoch ����??��??*/
    static strategy5857(ind) {
        const emaCross = ind.ema20 < ind.ema50 && ind.prevEma20 >= ind.prevEma50;
        const stochCross = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = emaCross && stochCross;
        return { id: 5857, name: 'EMA + Stoch Double Cross', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5858: EMA ���� + Stoch �϶� + ��??�϶� */
    static strategy5858(ind) {
        const match = ind.ema20 < ind.ema50 && ind.stochastic?.k < ind.stochastic?.prevK && ind.priceChange < 0;
        return { id: 5858, name: 'EMA + Stoch + Price Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5859: EMA ���� + ADX > 25 + -DI �߼� */
    static strategy5859(ind) {
        const match = ind.ema20 < ind.ema50 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5859, name: 'EMA Dead + ADX Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5860: EMA ����??��??+ DI ����??��??*/
    static strategy5860(ind) {
        const emaCross = ind.ema20 < ind.ema50 && ind.prevEma20 >= ind.prevEma50;
        const diCross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = emaCross && diCross;
        return { id: 5860, name: 'EMA + DI Double Cross', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 5861: EMA ���� + ADX > 30 */
    static strategy5861(ind) {
        const match = ind.ema20 < ind.ema50 && ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5861, name: 'EMA Dead + ADX 30', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5862: EMA ���� + CCI > 100 */
    static strategy5862(ind) {
        const match = ind.ema20 < ind.ema50 && ind.cci > 100;
        return { id: 5862, name: 'EMA Dead + CCI OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5863: EMA ���� + CCI �϶� */
    static strategy5863(ind) {
        const match = ind.ema20 < ind.ema50 && ind.cci < ind.prevCci;
        return { id: 5863, name: 'EMA Dead + CCI Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5864: EMA ����??��??+ CCI 100 ??Ż */
    static strategy5864(ind) {
        const emaCross = ind.ema20 < ind.ema50 && ind.prevEma20 >= ind.prevEma50;
        const cciExit = ind.cci < 100 && ind.prevCci >= 100;
        const match = emaCross && cciExit;
        return { id: 5864, name: 'EMA Cross + CCI Exit', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5865: EMA ���� + Williams > -20 */
    static strategy5865(ind) {
        const match = ind.ema20 < ind.ema50 && ind.williamsR > -20;
        return { id: 5865, name: 'EMA Dead + Williams OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5866: EMA ���� + Williams �϶� */
    static strategy5866(ind) {
        const match = ind.ema20 < ind.ema50 && ind.williamsR < ind.prevWilliamsR;
        return { id: 5866, name: 'EMA Dead + Williams Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5867: EMA ����??��??+ Williams ??Ż */
    static strategy5867(ind) {
        const emaCross = ind.ema20 < ind.ema50 && ind.prevEma20 >= ind.prevEma50;
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const match = emaCross && wExit;
        return { id: 5867, name: 'EMA Cross + Williams Exit', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5868: EMA ���� + OBV �϶� */
    static strategy5868(ind) {
        const match = ind.ema20 < ind.ema50 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5868, name: 'EMA Dead + OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5869: EMA ���� + OBV ??�̹���??*/
    static strategy5869(ind) {
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = ind.ema20 < ind.ema50 && obvDiv;
        return { id: 5869, name: 'EMA Dead + OBV Divergence', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5870: EMA ���� + ATR > ��� */
    static strategy5870(ind) {
        const match = ind.ema20 < ind.ema50 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5870, name: 'EMA Dead + ATR High', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5871: EMA ����??��??+ ATR �޵� */
    static strategy5871(ind) {
        const emaCross = ind.ema20 < ind.ema50 && ind.prevEma20 >= ind.prevEma50;
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = emaCross && atrSpike;
        return { id: 5871, name: 'EMA Cross + ATR Spike', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5872: SMA ���� + Stoch > 80 */
    static strategy5872(ind) {
        const match = ind.sma20 < ind.sma50 && ind.stochastic?.k > 80;
        return { id: 5872, name: 'SMA Dead + Stoch OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5873: SMA ���� + ADX > 25 + -DI */
    static strategy5873(ind) {
        const match = ind.sma20 < ind.sma50 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5873, name: 'SMA Dead + ADX Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5874: SMA ���� + CCI > 100 */
    static strategy5874(ind) {
        const match = ind.sma20 < ind.sma50 && ind.cci > 100;
        return { id: 5874, name: 'SMA Dead + CCI OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5875: SMA ���� + Williams > -25 */
    static strategy5875(ind) {
        const match = ind.sma20 < ind.sma50 && ind.williamsR > -25;
        return { id: 5875, name: 'SMA Dead + Williams OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5876: SMA ���� + OBV �϶� */
    static strategy5876(ind) {
        const match = ind.sma20 < ind.sma50 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5876, name: 'SMA Dead + OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5877: SMA ���� + ATR > ��� */
    static strategy5877(ind) {
        const match = ind.sma20 < ind.sma50 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5877, name: 'SMA Dead + ATR High', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5878: EMA + SMA ���� + Stoch ���� */
    static strategy5878(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && ind.stochastic?.k < ind.stochastic?.d;
        return { id: 5878, name: 'EMA SMA Stoch Triple Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5879: EMA + SMA ���� + ADX ���� */
    static strategy5879(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5879, name: 'EMA SMA ADX Triple Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 5880: EMA + SMA ���� + CCI > 80 */
    static strategy5880(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && ind.cci > 80;
        return { id: 5880, name: 'EMA SMA CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5881: EMA ���� + Stoch + ADX ���� */
    static strategy5881(ind) {
        const match = ind.ema20 < ind.ema50 && ind.stochastic?.k > 60 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5881, name: 'EMA + Stoch + ADX Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5882: EMA ���� + CCI + Williams */
    static strategy5882(ind) {
        const match = ind.ema20 < ind.ema50 && ind.cci > 50 && ind.williamsR > -40;
        return { id: 5882, name: 'EMA + CCI + Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5883: EMA ���� + OBV + ATR */
    static strategy5883(ind) {
        const match = ind.ema20 < ind.ema50 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5883, name: 'EMA + OBV + ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5884: SMA ���� + Stoch + CCI */
    static strategy5884(ind) {
        const match = ind.sma20 < ind.sma50 && ind.stochastic?.k > 60 && ind.cci > 50;
        return { id: 5884, name: 'SMA + Stoch + CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5885: SMA ���� + Williams + OBV */
    static strategy5885(ind) {
        const match = ind.sma20 < ind.sma50 && ind.williamsR > -40 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5885, name: 'SMA + Williams + OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5886: EMA ??????+ Stoch ���ż�*/
    static strategy5886(ind) {
        const match = ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100 && ind.stochastic?.k > 75;
        return { id: 5886, name: 'EMA Stack + Stoch OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5887: EMA ??????+ ADX ���� �϶� */
    static strategy5887(ind) {
        const match = ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100 && ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5887, name: 'EMA Stack + ADX Strong', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 5888: ��??< EMA20 + Stoch �϶� */
    static strategy5888(ind) {
        const match = ind.price < ind.ema20 && ind.stochastic?.k < ind.stochastic?.prevK;
        return { id: 5888, name: 'Below EMA20 + Stoch Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5889: ��??< SMA20 + ADX ��� */
    static strategy5889(ind) {
        const match = ind.price < ind.sma20 && ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5889, name: 'Below SMA20 + ADX Rising', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5890: ��??< ��� MA + CCI �϶� */
    static strategy5890(ind) {
        const match = ind.price < ind.ema20 && ind.price < ind.sma20 && ind.cci < ind.prevCci;
        return { id: 5890, name: 'Below All MA + CCI Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5891: EMA + SMA ��� �϶� + Williams �϶� */
    static strategy5891(ind) {
        const match = ind.ema20 < ind.prevEma20 && ind.sma20 < ind.prevSma20 && ind.williamsR < ind.prevWilliamsR;
        return { id: 5891, name: 'MA Falling + Williams Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5892: EMA ���� + �ŷ�??���� + �϶� */
    static strategy5892(ind) {
        const match = ind.ema20 < ind.ema50 && ind.volume > ind.avgVolume * 1.5 && ind.priceChange < 0;
        return { id: 5892, name: 'EMA Dead + Volume + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5893: SMA ���� + ���� �϶� ĵ�� */
    static strategy5893(ind) {
        const match = ind.sma20 < ind.sma50 && ind.consecutiveDown >= 2;
        return { id: 5893, name: 'SMA Dead + Consecutive Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5894: EMA + SMA ���� + �϶� ĵ�� */
    static strategy5894(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && ind.priceChange < 0;
        return { id: 5894, name: 'Double MA Dead + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5895: EMA ���� + Stoch + Williams ���ż�*/
    static strategy5895(ind) {
        const match = ind.ema20 < ind.ema50 && ind.stochastic?.k > 70 && ind.williamsR > -30;
        return { id: 5895, name: 'EMA + Stoch + Williams OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5896: EMA ���� + ADX + OBV */
    static strategy5896(ind) {
        const match = ind.ema20 < ind.ema50 && ind.adx?.minusDI > ind.adx?.plusDI && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5896, name: 'EMA + ADX + OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5897: SMA ���� + CCI + ATR */
    static strategy5897(ind) {
        const match = ind.sma20 < ind.sma50 && ind.cci > 50 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 5897, name: 'SMA + CCI + ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5898: EMA + SMA + Stoch + ADX ���� */
    static strategy5898(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && ind.stochastic?.k < ind.stochastic?.d && 
                     ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5898, name: 'MA Stoch ADX Quad Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5899: EMA ??????+ CCI + Williams + OBV */
    static strategy5899(ind) {
        const match = ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100 && ind.cci > 30 && 
                     ind.williamsR > -50 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5899, name: 'EMA Stack + CCI W OBV Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5900: MA 2-신호 + 가격하락 + RSI */
    static strategy5900(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && ind.priceChange < -0.3 && ind.rsi > 50;
        return { id: 5900, name: 'MA Two-Ind All-In-One', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ��� ���� ??�� (5701-5900) */
    static analyzeAll(indicators) {
        return [
            this.strategy5701(indicators), this.strategy5702(indicators), this.strategy5703(indicators),
            this.strategy5704(indicators), this.strategy5705(indicators), this.strategy5706(indicators),
            this.strategy5707(indicators), this.strategy5708(indicators), this.strategy5709(indicators),
            this.strategy5710(indicators), this.strategy5711(indicators), this.strategy5712(indicators),
            this.strategy5713(indicators), this.strategy5714(indicators), this.strategy5715(indicators),
            this.strategy5716(indicators), this.strategy5717(indicators), this.strategy5718(indicators),
            this.strategy5719(indicators), this.strategy5720(indicators), this.strategy5721(indicators),
            this.strategy5722(indicators), this.strategy5723(indicators), this.strategy5724(indicators),
            this.strategy5725(indicators), this.strategy5726(indicators), this.strategy5727(indicators),
            this.strategy5728(indicators), this.strategy5729(indicators), this.strategy5730(indicators),
            this.strategy5731(indicators), this.strategy5732(indicators), this.strategy5733(indicators),
            this.strategy5734(indicators), this.strategy5735(indicators), this.strategy5736(indicators),
            this.strategy5737(indicators), this.strategy5738(indicators), this.strategy5739(indicators),
            this.strategy5740(indicators), this.strategy5741(indicators), this.strategy5742(indicators),
            this.strategy5743(indicators), this.strategy5744(indicators), this.strategy5745(indicators),
            this.strategy5746(indicators), this.strategy5747(indicators), this.strategy5748(indicators),
            this.strategy5749(indicators), this.strategy5750(indicators), this.strategy5751(indicators),
            this.strategy5752(indicators), this.strategy5753(indicators), this.strategy5754(indicators),
            this.strategy5755(indicators), this.strategy5756(indicators), this.strategy5757(indicators),
            this.strategy5758(indicators), this.strategy5759(indicators), this.strategy5760(indicators),
            this.strategy5761(indicators), this.strategy5762(indicators), this.strategy5763(indicators),
            this.strategy5764(indicators), this.strategy5765(indicators), this.strategy5766(indicators),
            this.strategy5767(indicators), this.strategy5768(indicators), this.strategy5769(indicators),
            this.strategy5770(indicators), this.strategy5771(indicators), this.strategy5772(indicators),
            this.strategy5773(indicators), this.strategy5774(indicators), this.strategy5775(indicators),
            this.strategy5776(indicators), this.strategy5777(indicators), this.strategy5778(indicators),
            this.strategy5779(indicators), this.strategy5780(indicators), this.strategy5781(indicators),
            this.strategy5782(indicators), this.strategy5783(indicators), this.strategy5784(indicators),
            this.strategy5785(indicators), this.strategy5786(indicators), this.strategy5787(indicators),
            this.strategy5788(indicators), this.strategy5789(indicators), this.strategy5790(indicators),
            this.strategy5791(indicators), this.strategy5792(indicators), this.strategy5793(indicators),
            this.strategy5794(indicators), this.strategy5795(indicators), this.strategy5796(indicators),
            this.strategy5797(indicators), this.strategy5798(indicators), this.strategy5799(indicators),
            this.strategy5800(indicators), this.strategy5801(indicators), this.strategy5802(indicators),
            this.strategy5803(indicators), this.strategy5804(indicators), this.strategy5805(indicators),
            this.strategy5806(indicators), this.strategy5807(indicators), this.strategy5808(indicators),
            this.strategy5809(indicators), this.strategy5810(indicators), this.strategy5811(indicators),
            this.strategy5812(indicators), this.strategy5813(indicators), this.strategy5814(indicators),
            this.strategy5815(indicators), this.strategy5816(indicators), this.strategy5817(indicators),
            this.strategy5818(indicators), this.strategy5819(indicators), this.strategy5820(indicators),
            this.strategy5821(indicators), this.strategy5822(indicators), this.strategy5823(indicators),
            this.strategy5824(indicators), this.strategy5825(indicators), this.strategy5826(indicators),
            this.strategy5827(indicators), this.strategy5828(indicators), this.strategy5829(indicators),
            this.strategy5830(indicators), this.strategy5831(indicators), this.strategy5832(indicators),
            this.strategy5833(indicators), this.strategy5834(indicators), this.strategy5835(indicators),
            this.strategy5836(indicators), this.strategy5837(indicators), this.strategy5838(indicators),
            this.strategy5839(indicators), this.strategy5840(indicators), this.strategy5841(indicators),
            this.strategy5842(indicators), this.strategy5843(indicators), this.strategy5844(indicators),
            this.strategy5845(indicators), this.strategy5846(indicators), this.strategy5847(indicators),
            this.strategy5848(indicators), this.strategy5849(indicators), this.strategy5850(indicators),
            this.strategy5851(indicators), this.strategy5852(indicators), this.strategy5853(indicators),
            this.strategy5854(indicators), this.strategy5855(indicators), this.strategy5856(indicators),
            this.strategy5857(indicators), this.strategy5858(indicators), this.strategy5859(indicators),
            this.strategy5860(indicators), this.strategy5861(indicators), this.strategy5862(indicators),
            this.strategy5863(indicators), this.strategy5864(indicators), this.strategy5865(indicators),
            this.strategy5866(indicators), this.strategy5867(indicators), this.strategy5868(indicators),
            this.strategy5869(indicators), this.strategy5870(indicators), this.strategy5871(indicators),
            this.strategy5872(indicators), this.strategy5873(indicators), this.strategy5874(indicators),
            this.strategy5875(indicators), this.strategy5876(indicators), this.strategy5877(indicators),
            this.strategy5878(indicators), this.strategy5879(indicators), this.strategy5880(indicators),
            this.strategy5881(indicators), this.strategy5882(indicators), this.strategy5883(indicators),
            this.strategy5884(indicators), this.strategy5885(indicators), this.strategy5886(indicators),
            this.strategy5887(indicators), this.strategy5888(indicators), this.strategy5889(indicators),
            this.strategy5890(indicators), this.strategy5891(indicators), this.strategy5892(indicators),
            this.strategy5893(indicators), this.strategy5894(indicators), this.strategy5895(indicators),
            this.strategy5896(indicators), this.strategy5897(indicators), this.strategy5898(indicators),
            this.strategy5899(indicators), this.strategy5900(indicators)
        ];
    }
}

