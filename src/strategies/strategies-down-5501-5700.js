/**
 * DOWN ���� ���� (ID: 5501-5700)
 * ??��????�� - ATR/OBV/CCI/Williams ���?
 * 5501-5550: ATR ��??�� ���?
 * 5551-5600: ATR + ??�� ��??����
 * 5601-5650: OBV/CCI ���?
 * 5651-5700: Williams %R + ���� ����
 */

export class StrategiesDown5501 {
    
    // ==================== ATR ��??�� ���?(5501-5550) ====================
    
    /** ���� 5501: ATR �޵� (2x ??��) + �϶� ĵ�� */
    static strategy5501(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 2;
        const match = atrSpike && ind.priceChange < 0;
        return { id: 5501, name: 'ATR Spike 2x + Down Candle', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** 전략 5502: ATR 급등 (1.5x) + 강한 하락 캔들 (5501과 차별화) */
    static strategy5502(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.priceChange < -0.5;
        return { id: 5502, name: 'ATR Spike 1.5x + Strong Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5503: ATR �޵� (3x) + ���� �϶� */
    static strategy5503(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 3;
        const match = atrSpike && ind.priceChange < -0.5;
        return { id: 5503, name: 'ATR Spike 3x + Strong Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5504: ATR ���?�߼� + �϶� ���� */
    static strategy5504(ind) {
        const match = (ind.atr || 0) > (ind.prevAtr || 0) && ind.priceChange < 0;
        return { id: 5504, name: 'ATR Rising + Down Direction', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5505: ATR ??�� (> 1.5x ���? + �϶� */
    static strategy5505(ind) {
        const atrRatio = (ind.atr || 0) / (ind.avgAtr || ind.atr || 1);
        const match = atrRatio > 1.5 && ind.priceChange < 0;
        return { id: 5505, name: 'ATR High Ratio + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5506: ATR ??�� (> 2x ���? + ���� �϶� */
    static strategy5506(ind) {
        const atrRatio = (ind.atr || 0) / (ind.avgAtr || ind.atr || 1);
        const match = atrRatio > 2 && ind.priceChange < -0.3;
        return { id: 5506, name: 'ATR Very High Ratio + Strong Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5507: ��??�϶� > 1x ATR */
    static strategy5507(ind) {
        const priceDrop = Math.abs(ind.priceChange) * ind.price / 100;
        const match = ind.priceChange < 0 && priceDrop > (ind.atr || 0);
        return { id: 5507, name: 'Price Drop > 1x ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5508: ��??�϶� > 1.5x ATR */
    static strategy5508(ind) {
        const priceDrop = Math.abs(ind.priceChange) * ind.price / 100;
        const match = ind.priceChange < 0 && priceDrop > (ind.atr || 0) * 1.5;
        return { id: 5508, name: 'Price Drop > 1.5x ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5509: ��??�϶� > 2x ATR (���� �϶�) */
    static strategy5509(ind) {
        const priceDrop = Math.abs(ind.priceChange) * ind.price / 100;
        const match = ind.priceChange < 0 && priceDrop > (ind.atr || 0) * 2;
        return { id: 5509, name: 'Price Drop > 2x ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5510: ATR ���� ���� + �϶� ���� */
    static strategy5510(ind) {
        const expanding = (ind.atr || 0) > (ind.prevAtr || 0) && (ind.prevAtr || 0) <= (ind.avgAtr || ind.atr || 0);
        const match = expanding && ind.priceChange < 0;
        return { id: 5510, name: 'ATR Expansion Start + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5511: ATR ���???���� + �϶� ??�� */
    static strategy5511(ind) {
        const wasLow = (ind.prevAtr || 0) < (ind.avgAtr || ind.atr || 0) * 0.7;
        const nowHigh = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        const match = wasLow && nowHigh && ind.priceChange < 0;
        return { id: 5511, name: 'ATR Squeeze Break Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5512: ATR ???? (< 0.5x ���? + BB ??���� + �϶� ���� */
    static strategy5512(ind) {
        const match = (ind.atr || 0) < (ind.avgAtr || ind.atr || 0) * 0.5 && ind.bollingerBands?.bandwidth < 2.5 && ind.priceChange < 0;
        return { id: 5512, name: 'ATR Low + BB Squeeze + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5513: ATR ���?+ ���� �϶� ĵ�� */
    static strategy5513(ind) {
        const match = (ind.atr || 0) > (ind.prevAtr || 0) && ind.consecutiveDown >= 2;
        return { id: 5513, name: 'ATR Rise + Consecutive Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5514: ATR �޵� + 3���� �϶� */
    static strategy5514(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.consecutiveDown >= 3;
        return { id: 5514, name: 'ATR Spike + 3 Down Candles', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5515: ATR ���??????? ���� + �϶� */
    static strategy5515(ind) {
        const resistance = ind.price + (ind.atr || 0) * 2;
        const nearResistance = ind.high > resistance * 0.99;
        const match = nearResistance && ind.priceChange < 0;
        return { id: 5515, name: 'ATR Resistance Near + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5516: ATR ���� ���?+ �϶� ���?? */
    static strategy5516(ind) {
        const atrRatio = (ind.atr || 0) / (ind.avgAtr || ind.atr || 0);
        const match = atrRatio > 1.2 && ind.macd?.histogram < 0;
        return { id: 5516, name: 'ATR Ratio High + MACD Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5517: ATR ��??�� ??�� + RSI �϶� */
    static strategy5517(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.3 && ind.rsi < ind.prevRsi;
        return { id: 5517, name: 'ATR High Vol + RSI Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5518: ATR �޵� + EMA ���� */
    static strategy5518(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.ema20 < ind.ema50;
        return { id: 5518, name: 'ATR Spike + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5519: ATR ���?+ BB ���??���� + �϶� */
    static strategy5519(ind) {
        const match = (ind.atr || 0) > (ind.prevAtr || 0) && ind.bollingerBands?.bandwidth > 4 && ind.priceChange < 0;
        return { id: 5519, name: 'ATR + BB Expand + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5520: ATR ??��????�϶� ��??*/
    static strategy5520(ind) {
        const normalATR = (ind.atr || 0) >= (ind.avgAtr || ind.atr || 0) * 0.8 && (ind.atr || 0) <= (ind.avgAtr || ind.atr || 0) * 1.2;
        const match = normalATR && ind.consecutiveDown >= 2 && ind.macd?.histogram < 0;
        return { id: 5520, name: 'ATR Normal + Down Continue', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5521: ATR % ����> 20% ���?+ �϶� */
    static strategy5521(ind) {
        const atrChange = ((ind.atr || 0) - (ind.prevAtr || 0)) / (ind.prevAtr || 0);
        const match = atrChange > 0.2 && ind.priceChange < 0;
        return { id: 5521, name: 'ATR Change 20% + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5522: ATR % ����> 30% ���?+ ���� �϶� */
    static strategy5522(ind) {
        const atrChange = ((ind.atr || 0) - (ind.prevAtr || 0)) / (ind.prevAtr || 0);
        const match = atrChange > 0.3 && ind.priceChange < -0.3;
        return { id: 5522, name: 'ATR Change 30% + Strong Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5523: ATR ���� ��ó + �϶� ��ȯ */
    static strategy5523(ind) {
        const nearHigh = (ind.atr || 0) > (ind.atr * 2 || 0) * 0.9;
        const match = nearHigh && ind.priceChange < 0 && ind.prevPriceChange >= 0;
        return { id: 5523, name: 'ATR Near High + Turn Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5524: ATR �޶� ??�ݵ� + �϶� ��??*/
    static strategy5524(ind) {
        const atrBounce = (ind.atr || 0) > (ind.prevAtr || 0) && (ind.prevAtr || 0) < (ind.avgAtr || ind.atr || 0) * 0.6;
        const match = atrBounce && ind.priceChange < 0;
        return { id: 5524, name: 'ATR Bounce + Down Continue', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5525: ATR ????��????ġ ??�� + �϶� ??ȣ */
    static strategy5525(ind) {
        const pricePosition = (ind.price - ind.low) / (ind.atr || 0);
        const match = pricePosition > 2 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5525, name: 'ATR Price Position High + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5526: ATR ??��??�� ??ž ??�� �϶� */
    static strategy5526(ind) {
        const trailStop = ind.high - (ind.atr || 0) * 2;
        const match = ind.price < trailStop && ind.priceChange < 0;
        return { id: 5526, name: 'ATR Trail Stop Break Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5527: ATR ä�� �ش� ??�� + ���?? �϶� */
    static strategy5527(ind) {
        const lowerChannel = ind.ema20 - (ind.atr || 0) * 2;
        const match = ind.price < lowerChannel * 1.02 && ind.macd?.histogram < 0;
        return { id: 5527, name: 'ATR Lower Channel + Momentum', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5528: ATR ��??�� ���� + �ŷ�??���� + �϶� */
    static strategy5528(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5 && ind.volume > ind.avgVolume * 1.5 && ind.priceChange < 0;
        return { id: 5528, name: 'ATR Vol Spike + Volume + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5529: ATR ���?+ ADX ���?+ �϶� ���� */
    static strategy5529(ind) {
        const match = (ind.atr || 0) > (ind.prevAtr || 0) && ind.adx?.adx > ind.adx?.prevAdx && 
                     ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5529, name: 'ATR + ADX Rising Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5530: ATR ???? ????�� ��ȯ + �϶� ??�� */
    static strategy5530(ind) {
        const wasLow = (ind.prevAtr || 0) < (ind.avgAtr || ind.atr || 0) * 0.7;
        const nowNormal = (ind.atr || 0) >= (ind.avgAtr || ind.atr || 0) * 0.9;
        const match = wasLow && nowNormal && ind.priceChange < -0.2;
        return { id: 5530, name: 'ATR Low to High + Down Break', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5531: ATR ���?��??�� ??�� �϶� */
    static strategy5531(ind) {
        const volatilityBreak = ind.price < ind.prevClose - (ind.atr || 0);
        const match = volatilityBreak;
        return { id: 5531, name: 'ATR Volatility Break Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** 전략 5532: ATR 변동성 하단 돌파 1.5x + EMA 데드 (5531과 차별화) */
    static strategy5532(ind) {
        const volatilityBreak = ind.price < ind.prevClose - (ind.atr || 0) * 1.5;
        const match = volatilityBreak && ind.ema20 < ind.ema50;
        return { id: 5532, name: 'ATR Break 1.5x + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5533: ATR ���???ȸ + �϶� �߼� Ȯ�� */
    static strategy5533(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.ema20 < ind.ema50 && ind.macd?.histogram < 0;
        return { id: 5533, name: 'ATR Above Avg + Down Trend', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5534: ATR ??�� 30% + RSI 50-65 + �϶� */
    static strategy5534(ind) {
        const match = 80 > 70 && ind.rsi >= 50 && ind.rsi <= 65 && ind.priceChange < 0;
        return { id: 5534, name: 'ATR High + RSI Mid + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5535: ATR �޵� + Stoch ���ż�*/
    static strategy5535(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.stochastic?.k > 80;
        return { id: 5535, name: 'ATR Spike + Stoch Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5536: ATR ���� + BB �ش� ??Ż ??��?? */
    static strategy5536(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.2 && ind.bollingerBands?.position < 90 && ind.bollingerBands?.position > 70;
        return { id: 5536, name: 'ATR Expand + BB Return', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5537: ATR ���� 1.3x + EMA ���� + RSI �϶� */
    static strategy5537(ind) {
        const atrRatio = (ind.atr || 0) / (ind.avgAtr || ind.atr || 0);
        const match = atrRatio > 1.3 && ind.ema20 < ind.ema50 && ind.rsi < ind.prevRsi;
        return { id: 5537, name: 'ATR 1.3x + EMA + RSI Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5538: ATR ���� + MACD ��ȯ �϶� */
    static strategy5538(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const macdTurn = ind.macd?.histogram < 0 && ind.macd?.prevHistogram >= 0;
        const match = atrSpike && macdTurn;
        return { id: 5538, name: 'ATR Spike + MACD Turn Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5539: ATR ���?+ DI ���� */
    static strategy5539(ind) {
        const match = (ind.atr || 0) > (ind.prevAtr || 0) && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5539, name: 'ATR Rise + DI Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5540: ATR ??�� + ���?��??�϶� Ȯ�� */
    static strategy5540(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.2 && ind.rsi < ind.prevRsi && 
                     ind.macd?.histogram < 0 && ind.ema20 < ind.ema50;
        return { id: 5540, name: 'ATR High + All Down Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5541: ATR ????�ݵ� + �϶� ���� ??�� */
    static strategy5541(ind) {
        const atrBounce = (ind.atr || 0) > (ind.prevAtr || 0) && (ind.rsi || 50) < 30;
        const match = atrBounce && ind.priceChange < 0 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5541, name: 'ATR Bounce Low + Down Select', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5542: ATR ??��??(Z-score > 1) + �϶� */
    static strategy5542(ind) {
        const zScore = ((ind.atr || 0) - (ind.avgAtr || ind.atr || 0)) / (ind.atr * 0.3 || 1);
        const match = zScore > 1 && ind.priceChange < 0;
        return { id: 5542, name: 'ATR Z-Score High + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5543: ATR ??��??(Z-score > 2) + ���� �϶� */
    static strategy5543(ind) {
        const zScore = ((ind.atr || 0) - (ind.avgAtr || ind.atr || 0)) / (ind.atr * 0.3 || 1);
        const match = zScore > 2 && ind.priceChange < -0.3;
        return { id: 5543, name: 'ATR Z-Score Very High + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5544: ATR ��????> ���?+ �϶� */
    static strategy5544(ind) {
        const atrGrowth = ((ind.atr || 0) - (ind.prevAtr || 0)) / (ind.prevAtr || 0);
        const match = atrGrowth > 0.1 && ind.priceChange < 0;
        return { id: 5544, name: 'ATR Growth + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5545: ATR ���???????�� + �϶� ��??*/
    static strategy5545(ind) {
        const target = ind.high - (ind.atr || 0) * 3;
        const match = ind.price < target && ind.macd?.histogram < 0;
        return { id: 5545, name: 'ATR Target Hit + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5546: ATR ���?�ش� ??�� */
    static strategy5546(ind) {
        const lowerBand = ind.ema20 - (ind.atr || 0) * 2;
        const match = ind.price < lowerBand;
        return { id: 5546, name: 'ATR Lower Band Break', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5547: ATR ??????�� ������ ??�� + �϶� */
    static strategy5547(ind) {
        const intraRange = ind.high - ind.low;
        const match = intraRange > (ind.atr || 0) * 1.5 && ind.priceChange < 0;
        return { id: 5547, name: 'ATR Intra Range High + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5548: ATR ���?��??(3?? + �϶� */
    static strategy5548(ind) {
        const match = (ind.atr || 0) > (ind.prevAtr || 0) && ind.consecutiveDown >= 3 && ind.priceChange < 0;
        return { id: 5548, name: 'ATR Rising 3-Bar + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5549: ATR �޵� + ??��??��??�϶� */
    static strategy5549(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.rsi < ind.prevRsi && ind.macd?.histogram < 0 && ind.stochastic?.k < ind.stochastic?.prevK;
        return { id: 5549, name: 'ATR Spike + Triple Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5550: ATR Ȯ��??�϶� ??ȣ */
    static strategy5550(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.priceChange < 0 && 
                     ind.macd?.histogram < 0 && ind.ema20 < ind.ema50;
        return { id: 5550, name: 'ATR All-In-One Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    // ==================== ATR + ??�� ��??���� (5551-5600) ====================
    
    /** ���� 5551: ATR > ���?+ RSI > 65 + �϶� */
    static strategy5551(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.rsi > 65 && ind.priceChange < 0;
        return { id: 5551, name: 'ATR High + RSI 65 + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5552: ATR > ���?+ RSI 55-70 + MACD ??�� */
    static strategy5552(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.rsi >= 55 && ind.rsi <= 70 && ind.macd?.histogram < 0;
        return { id: 5552, name: 'ATR + RSI Mid + MACD Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5553: ATR �޵� + RSI ���ż�??Ż */
    static strategy5553(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const rsiExit = ind.rsi > 30 && ind.prevRsi >= 70;
        const match = atrSpike && rsiExit;
        return { id: 5553, name: 'ATR Spike + RSI Exit Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5554: ATR > 1.3x + MACD ����??��??*/
    static strategy5554(ind) {
        const atrHigh = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.3;
        const macdCross = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const match = atrHigh && macdCross;
        return { id: 5554, name: 'ATR 1.3x + MACD Cross Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5555: ATR ���?+ MACD hist ���� �϶� */
    static strategy5555(ind) {
        const match = (ind.atr || 0) > (ind.prevAtr || 0) && ind.macd?.histogram < ind.macd?.prevHistogram && 
                     ind.macd?.prevHistogram < ind.macd?.prev2Histogram;
        return { id: 5555, name: 'ATR Rise + MACD Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5556: ATR > ���?+ BB �ش� 80%+ + �϶� ���� */
    static strategy5556(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.bollingerBands?.position > 80 && ind.priceChange < 0;
        return { id: 5556, name: 'ATR + BB Top + Down Start', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5557: ATR �޵� + BB ���??���� + �϶� ���� */
    static strategy5557(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.bollingerBands?.bandwidth > 4 && ind.priceChange < 0;
        return { id: 5557, name: 'ATR Spike + BB Expand + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5558: ATR ���?+ BB �߰�????�� ??�� */
    static strategy5558(ind) {
        const match = (ind.atr || 0) > (ind.prevAtr || 0) && ind.bollingerBands?.position < 50 && 
                     ind.bollingerBands?.prevPosition >= 50;
        return { id: 5558, name: 'ATR Rise + BB Mid Break Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5559: ATR > ���?+ EMA ���� + ��??< EMA20 */
    static strategy5559(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.ema20 < ind.ema50 && ind.price < ind.ema20;
        return { id: 5559, name: 'ATR + EMA Dead + Price Below', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5560: ATR �޵� + EMA ??????*/
    static strategy5560(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100;
        return { id: 5560, name: 'ATR Spike + EMA Stack Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5561: ATR ���?+ SMA ���� + �϶� */
    static strategy5561(ind) {
        const match = (ind.atr || 0) > (ind.prevAtr || 0) && ind.sma20 < ind.sma50 && ind.priceChange < 0;
        return { id: 5561, name: 'ATR Rise + SMA Dead + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5562: ATR > ���?+ Stoch ���ż�+ �϶� ��ȯ */
    static strategy5562(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.stochastic?.k > 80 && ind.stochastic?.k < ind.stochastic?.prevK;
        return { id: 5562, name: 'ATR + Stoch Overbought Turn', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5563: ATR �޵� + Stoch ����??��??*/
    static strategy5563(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const stochDead = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = atrSpike && stochDead;
        return { id: 5563, name: 'ATR Spike + Stoch Dead Cross', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** 전략 5564: ATR 상승 + ADX 30+ 상승 + -DI 우세 (5529와 차별화) */
    static strategy5564(ind) {
        const match = (ind.atr || 0) > (ind.prevAtr || 0) && ind.adx?.adx > 30 && ind.adx?.adx > ind.adx?.prevAdx && 
                     ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5564, name: 'ATR + ADX Strong Rising Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5565: ATR > 1.5x + ADX > 25 + -DI �߼� */
    static strategy5565(ind) {
        const atrHigh = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrHigh && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5565, name: 'ATR 1.5x + ADX 25 + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5566: ATR + RSI + MACD ??��??*/
    static strategy5566(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.rsi > 55 && ind.rsi < ind.prevRsi && 
                     ind.macd?.MACD < ind.macd?.signal;
        return { id: 5566, name: 'ATR + RSI + MACD Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5567: ATR + BB + EMA ??��??*/
    static strategy5567(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.bollingerBands?.position < 55 && ind.ema20 < ind.ema50;
        return { id: 5567, name: 'ATR + BB + EMA Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5568: ATR + Stoch + RSI ??��? ���ż�*/
    static strategy5568(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.stochastic?.k > 75 && ind.rsi > 60;
        return { id: 5568, name: 'ATR + Stoch + RSI Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5569: ATR �޵� + RSI + MACD + EMA */
    static strategy5569(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.rsi > 50 && ind.macd?.histogram < 0 && ind.ema20 < ind.ema50;
        return { id: 5569, name: 'ATR Spike + RSI MACD EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5570: ATR + RSI + MACD + BB + EMA ���� */
    static strategy5570(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.rsi > 50 && ind.macd?.histogram < 0 && 
                     ind.bollingerBands?.position > 40 && ind.ema20 < ind.ema50;
        return { id: 5570, name: 'ATR Quad Indicator Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5571: ATR ���� + ??ü ���?? �϶� */
    static strategy5571(ind) {
        const match = (ind.atr || 0) > (ind.prevAtr || 0) && ind.rsi < ind.prevRsi && 
                     ind.macd?.histogram < ind.macd?.prevHistogram && ind.stochastic?.k < ind.stochastic?.prevK;
        return { id: 5571, name: 'ATR Expand + All Momentum Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5572: ATR ??�� + �ŷ�??���� + �϶� */
    static strategy5572(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.3 && ind.volume > ind.avgVolume * 2 && ind.priceChange < 0;
        return { id: 5572, name: 'ATR + Volume Spike + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5573: ATR �޵� + Fear Index ??�� */
    static strategy5573(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.fearGreed < 40;
        return { id: 5573, name: 'ATR Spike + Fear High', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5574: ATR ���?+ ��??< SMA20 < SMA50 */
    static strategy5574(ind) {
        const match = (ind.atr || 0) > (ind.prevAtr || 0) && ind.price < ind.sma20 && ind.sma20 < ind.sma50;
        return { id: 5574, name: 'ATR Rise + Price Below SMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5575: ATR �޵� + EMA + SMA ���� ���� */
    static strategy5575(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50;
        return { id: 5575, name: 'ATR Spike + Double MA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5576: ATR ���� > 1.4 + BB 60-80 + �϶� */
    static strategy5576(ind) {
        const atrRatio = (ind.atr || 0) / (ind.avgAtr || ind.atr || 0);
        const match = atrRatio > 1.4 && ind.bollingerBands?.position >= 60 && ind.bollingerBands?.position <= 80 && ind.priceChange < 0;
        return { id: 5576, name: 'ATR Ratio + BB High + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5577: ATR ���?+ RSI 50????�� ??�� */
    static strategy5577(ind) {
        const match = (ind.atr || 0) > (ind.prevAtr || 0) && ind.rsi > 50 && ind.prevRsi >= 50;
        return { id: 5577, name: 'ATR Rise + RSI Break 50', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5578: ATR > ���?+ MACD 0????�� ??�� */
    static strategy5578(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.macd?.MACD < 0 && ind.macd?.prevMACD >= 0;
        return { id: 5578, name: 'ATR + MACD Break Zero Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5579: ATR �޵� + Stoch 50????�� ??�� */
    static strategy5579(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.stochastic?.k < 50 && ind.stochastic?.prevK >= 50;
        return { id: 5579, name: 'ATR Spike + Stoch Break 50', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5580: ATR ���?+ ���� ??�� + MACD �϶� */
    static strategy5580(ind) {
        const match = (ind.atr || 0) > (ind.prevAtr || 0) && ind.consecutiveDown >= 2 && 
                     ind.macd?.histogram < ind.macd?.prevHistogram;
        return { id: 5580, name: 'ATR + Consecutive Down + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5581: ATR ??�� + RSI �϶� �߼� (3?? */
    static strategy5581(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.rsi < ind.prevRsi && ind.prevRsi < ind.prev2Rsi;
        return { id: 5581, name: 'ATR High + RSI 3-Bar Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5582: ATR �޵� + BB ??�� ????�� ??�� */
    static strategy5582(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.bollingerBands?.position < 40 && ind.bollingerBands?.prevBandwidth < 3;
        return { id: 5582, name: 'ATR Spike + BB Squeeze Break', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5583: ATR ���?+ EMA ���� + BB < 55 */
    static strategy5583(ind) {
        const match = (ind.atr || 0) > (ind.prevAtr || 0) && ind.ema20 < ind.ema50 && ind.bollingerBands?.position < 55;
        return { id: 5583, name: 'ATR Rise + EMA + BB Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5584: ATR > 1.3x + ADX > 30 + MACD ??�� */
    static strategy5584(ind) {
        const atrHigh = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.3;
        const match = atrHigh && ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI && ind.macd?.histogram < 0;
        return { id: 5584, name: 'ATR + ADX 30 + MACD Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5585: ATR + Stoch + MACD ??��??���� */
    static strategy5585(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.stochastic?.k < ind.stochastic?.d && 
                     ind.macd?.MACD < ind.macd?.signal;
        return { id: 5585, name: 'ATR + Stoch + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5586: ATR �޵� + RSI + Stoch ���� �϶� */
    static strategy5586(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.rsi < ind.prevRsi && ind.stochastic?.k < ind.stochastic?.prevK;
        return { id: 5586, name: 'ATR Spike + RSI Stoch Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5587: ATR ���?+ DI ����??��??+ RSI > 50 */
    static strategy5587(ind) {
        const diCross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = (ind.atr || 0) > (ind.prevAtr || 0) && diCross && ind.rsi > 50;
        return { id: 5587, name: 'ATR + DI Cross + RSI Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5588: ATR > ���?+ ??ü MA ??????*/
    static strategy5588(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && 
                     ind.ema50 < ind.ema100;
        return { id: 5588, name: 'ATR + Full MA Dead Stack', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5589: ATR �޵� + 5??��??�϶� */
    static strategy5589(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.rsi > 45 && ind.macd?.histogram < 0 && ind.bollingerBands?.position > 35 && 
                     ind.ema20 < ind.ema50 && ind.stochastic?.k < ind.stochastic?.d;
        return { id: 5589, name: 'ATR Spike + Penta Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 5590: ATR ��??�� ���� + ??ü Ȯ�� �϶� */
    static strategy5590(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 2;
        const match = atrSpike && ind.priceChange < -0.5 && ind.macd?.histogram < -10 && ind.rsi < ind.prevRsi;
        return { id: 5590, name: 'ATR 2x + Full Confirm Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 5591: ATR ���?+ �϶� �߼� */
    static strategy5591(ind) {
        const atrRising = (ind.atr || 0) > (ind.prevAtr || 0);
        const match = atrRising && ind.priceChange < 0 && ind.macd?.histogram < 0 && ind.ema20 < ind.ema50;
        return { id: 5591, name: 'ATR Rising + Down Trend', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5592: ATR ???? + �޶� ĵ�� */
    static strategy5592(ind) {
        const atrExplosion = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 2.5;
        const match = atrExplosion && ind.priceChange < -1;
        return { id: 5592, name: 'ATR Explosion + Sharp Drop', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 5593: ATR ���?+ ���???��??��??�϶� */
    static strategy5593(ind) {
        const match = (ind.atr || 0) > (ind.prevAtr || 0) && ind.rsi < ind.prevRsi && 
                     ind.stochastic?.k < ind.stochastic?.prevK && ind.macd?.histogram < ind.macd?.prevHistogram;
        return { id: 5593, name: 'ATR + All Oscillators Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5594: ATR �޵� + ��??< ���?MA */
    static strategy5594(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.price < ind.ema20 && ind.price < ind.sma20 && ind.price < ind.ema50;
        return { id: 5594, name: 'ATR Spike + Below All MA', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5595: ATR ??�� + BB �ش� 40% + �϶� ��??*/
    static strategy5595(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.3 && ind.bollingerBands?.position < 40 && ind.consecutiveDown >= 2;
        return { id: 5595, name: 'ATR High + BB Low + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5596: ATR + ADX + Stoch + RSI ���� */
    static strategy5596(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.adx?.minusDI > ind.adx?.plusDI && 
                     ind.stochastic?.k > 60 && ind.rsi > 50;
        return { id: 5596, name: 'ATR ADX Stoch RSI Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5597: ATR �޵� + ���???��??���� */
    static strategy5597(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && 
                     ind.macd?.MACD < ind.macd?.signal && ind.stochastic?.k < ind.stochastic?.d;
        return { id: 5597, name: 'ATR Spike + All Cross Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 5598: ATR ���?��??+ ??�� �϶� */
    static strategy5598(ind) {
        const match = (ind.atr || 0) > (ind.prevAtr || 0) && ind.consecutiveDown >= 2 && 
                     ind.priceChange < 0 && ind.consecutiveDown >= 2;
        return { id: 5598, name: 'ATR Rising + Accumulate Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5599: ATR ??�� + ??ü ��??�϶� ���� */
    static strategy5599(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.3 && ind.rsi < ind.prevRsi && ind.macd?.histogram < 0 && 
                     ind.ema20 < ind.ema50 && ind.bollingerBands?.position < 60 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5599, name: 'ATR High + All Down Direction', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** ���� 5600: ATR Ȯ��??����� ??�� */
    static strategy5600(ind) {
        const match = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.priceChange < 0 && ind.rsi > 40 && 
                     ind.macd?.histogram < 5 && ind.ema20 < ind.ema50;
        return { id: 5600, name: 'ATR All-In-One Bearish Complete', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    // ==================== OBV/CCI ���?(5601-5650) ====================
    
    /** ���� 5601: OBV �϶� �߼� */
    static strategy5601(ind) {
        const match = (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5601, name: 'OBV Declining', direction: 'DOWN', match: Boolean(match), confidence: match ? 65 : 0 };
    }
    
    /** ���� 5602: OBV ���� �϶� */
    static strategy5602(ind) {
        const obvFalling = (ind.obv || 0) < (ind.prevObv || 0);
        const match = obvFalling && ind.priceChange < 0;
        return { id: 5602, name: 'OBV Declining + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5603: OBV ���� �϶� + ���� �϶� */
    static strategy5603(ind) {
        const obvFalling = (ind.obv || 0) < (ind.prevObv || 0);
        const match = obvFalling && ind.priceChange < -0.5;
        return { id: 5603, name: 'OBV Declining + Strong Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5604: OBV ??�̹���??(���ݡ� + OBV?? */
    static strategy5604(ind) {
        const match = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5604, name: 'OBV Bearish Divergence', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5605: OBV �޶� + ��??�϶� */
    static strategy5605(ind) {
        const obvDrop = ((ind.prevObv || 0) - (ind.obv || 0)) / Math.abs((ind.prevObv || 0)) > 0.05;
        const match = obvDrop && ind.priceChange < 0;
        return { id: 5605, name: 'OBV Sharp Drop + Price Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5606: OBV �϶� + �϶� + RSI */
    static strategy5606(ind) {
        const obvFalling = (ind.obv || 0) < (ind.prevObv || 0);
        const match = obvFalling && ind.priceChange < 0 && ind.rsi > 50;
        return { id: 5606, name: 'OBV Down + Price Down + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5607: OBV �϶� + EMA ���� */
    static strategy5607(ind) {
        const obvFalling = (ind.obv || 0) < (ind.prevObv || 0);
        const match = obvFalling && ind.ema20 < ind.ema50;
        return { id: 5607, name: 'OBV Down + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5608: OBV �϶� + RSI �϶� */
    static strategy5608(ind) {
        const match = (ind.obv || 0) < (ind.prevObv || 0) && ind.rsi < ind.prevRsi;
        return { id: 5608, name: 'OBV + RSI Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5609: OBV �϶� + MACD ??�� */
    static strategy5609(ind) {
        const match = (ind.obv || 0) < (ind.prevObv || 0) && ind.macd?.histogram < 0;
        return { id: 5609, name: 'OBV Down + MACD Negative', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5610: OBV �϶� + EMA ���� */
    static strategy5610(ind) {
        const match = (ind.obv || 0) < (ind.prevObv || 0) && ind.ema20 < ind.ema50;
        return { id: 5610, name: 'OBV Down + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5611: CCI > 200 �ش�? ���ż�*/
    static strategy5611(ind) {
        const match = ind.cci > 200;
        return { id: 5611, name: 'CCI Extreme Overbought 200', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5612: CCI > 150 ���ż�*/
    static strategy5612(ind) {
        const match = ind.cci > 150;
        return { id: 5612, name: 'CCI Overbought 150', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5613: CCI > 100 ���ż�*/
    static strategy5613(ind) {
        const match = ind.cci > 100;
        return { id: 5613, name: 'CCI Overbought 100', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5614: CCI 200 ??Ż (200 ??150) */
    static strategy5614(ind) {
        const match = ind.cci < 200 && ind.prevCci >= 200;
        return { id: 5614, name: 'CCI Exit Extreme 200', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5615: CCI 150 ??Ż */
    static strategy5615(ind) {
        const match = ind.cci < 150 && ind.prevCci >= 150;
        return { id: 5615, name: 'CCI Exit 150', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5616: CCI 100 ??Ż */
    static strategy5616(ind) {
        const match = ind.cci < 100 && ind.prevCci >= 100;
        return { id: 5616, name: 'CCI Exit 100', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5617: CCI 0????�� ??�� */
    static strategy5617(ind) {
        const match = ind.cci < 0 && ind.prevCci >= 0;
        return { id: 5617, name: 'CCI Break Zero Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5618: CCI �϶� �߼� + ??�� ���� */
    static strategy5618(ind) {
        const match = ind.cci > 0 && ind.cci < ind.prevCci;
        return { id: 5618, name: 'CCI Falling Positive Zone', direction: 'DOWN', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ���� 5619: CCI �޶� (-50 ??�� �϶�) */
    static strategy5619(ind) {
        const cciDrop = ind.prevCci - ind.cci;
        const match = cciDrop > 50;
        return { id: 5619, name: 'CCI Sharp Drop 50', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5620: CCI �޶� (-100 ??�� �϶�) */
    static strategy5620(ind) {
        const cciDrop = ind.prevCci - ind.cci;
        const match = cciDrop > 100;
        return { id: 5620, name: 'CCI Sharp Drop 100', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5621: CCI > 100 + RSI > 65 */
    static strategy5621(ind) {
        const match = ind.cci > 100 && ind.rsi > 65;
        return { id: 5621, name: 'CCI + RSI Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5622: CCI > 150 + MACD ���� */
    static strategy5622(ind) {
        const match = ind.cci > 150 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5622, name: 'CCI 150 + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5623: CCI �϶� + RSI �϶� ���� */
    static strategy5623(ind) {
        const match = ind.cci < ind.prevCci && ind.rsi < ind.prevRsi;
        return { id: 5623, name: 'CCI + RSI Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5624: CCI 100 ??Ż + EMA ���� */
    static strategy5624(ind) {
        const match = ind.cci < 100 && ind.prevCci >= 100 && ind.ema20 < ind.ema50;
        return { id: 5624, name: 'CCI Exit 100 + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5625: CCI ??�̹���??(���ݡ� + CCI?? */
    static strategy5625(ind) {
        const match = ind.priceChange > 0 && ind.cci < ind.prevCci && ind.cci > 50;
        return { id: 5625, name: 'CCI Bearish Divergence', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5626: CCI 50-100 ���� + �϶� */
    static strategy5626(ind) {
        const match = ind.cci >= 50 && ind.cci <= 100 && ind.cci < ind.prevCci;
        return { id: 5626, name: 'CCI Mid-High Zone Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5627: CCI 0-50 ���� + �϶� ��??*/
    static strategy5627(ind) {
        const match = ind.cci >= 0 && ind.cci <= 50 && ind.cci < ind.prevCci && ind.prevCci < ind.prev2Cci;
        return { id: 5627, name: 'CCI Low-Mid Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5628: CCI + MACD + RSI ??��??�϶� */
    static strategy5628(ind) {
        const match = ind.cci < ind.prevCci && ind.macd?.histogram < ind.macd?.prevHistogram && ind.rsi < ind.prevRsi;
        return { id: 5628, name: 'CCI MACD RSI Triple Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5629: CCI > 100 + BB 80%+ */
    static strategy5629(ind) {
        const match = ind.cci > 100 && ind.bollingerBands?.position > 80;
        return { id: 5629, name: 'CCI + BB Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5630: CCI �϶� + Stoch ���ż�*/
    static strategy5630(ind) {
        const match = ind.cci < ind.prevCci && ind.stochastic?.k > 80;
        return { id: 5630, name: 'CCI Down + Stoch Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5631: OBV + CCI ���� �϶� */
    static strategy5631(ind) {
        const match = (ind.obv || 0) < (ind.prevObv || 0) && ind.cci < ind.prevCci;
        return { id: 5631, name: 'OBV + CCI Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5632: OBV �϶� + CCI > 100 (??�̹���?? */
    static strategy5632(ind) {
        const match = (ind.obv || 0) < (ind.prevObv || 0) && ind.cci > 100;
        return { id: 5632, name: 'OBV Down + CCI High', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5633: CCI 100 ??Ż + OBV �϶� */
    static strategy5633(ind) {
        const match = ind.cci < 100 && ind.prevCci >= 100 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5633, name: 'CCI Exit + OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5634: OBV + CCI + RSI ??��??*/
    static strategy5634(ind) {
        const match = (ind.obv || 0) < (ind.prevObv || 0) && ind.cci < ind.prevCci && ind.rsi < ind.prevRsi;
        return { id: 5634, name: 'OBV CCI RSI Triple Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5635: CCI > 150 + Stoch > 85 + RSI > 70 */
    static strategy5635(ind) {
        const match = ind.cci > 150 && ind.stochastic?.k > 85 && ind.rsi > 70;
        return { id: 5635, name: 'CCI Stoch RSI Extreme', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5636: CCI �϶� ��ȯ + MACD ���� + EMA ���� */
    static strategy5636(ind) {
        const cciTurn = ind.cci < ind.prevCci && ind.prevCci >= ind.prev2Cci;
        const match = cciTurn && ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50;
        return { id: 5636, name: 'CCI Turn + MACD EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5637: OBV �޶� + MACD ??�� + RSI �϶� */
    static strategy5637(ind) {
        const obvDrop = ((ind.prevObv || 0) - (ind.obv || 0)) / Math.abs((ind.prevObv || 0)) > 0.03;
        const match = obvDrop && ind.macd?.histogram < 0 && ind.rsi < ind.prevRsi;
        return { id: 5637, name: 'OBV Drop + MACD + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5638: CCI ���� �϶� (3?? + ??�� ??�� */
    static strategy5638(ind) {
        const match = ind.cci > 0 && ind.cci < ind.prevCci && ind.prevCci < ind.prev2Cci;
        return { id: 5638, name: 'CCI 3-Bar Down Still Positive', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5639: OBV ??�̹���??+ CCI ??�̹���??(??��) */
    static strategy5639(ind) {
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const cciDiv = ind.priceChange > 0 && ind.cci < ind.prevCci;
        const match = obvDiv && cciDiv;
        return { id: 5639, name: 'OBV CCI Double Divergence', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5640: CCI �ش�??�� ���� ��?? (200 ??100) */
    static strategy5640(ind) {
        const match = ind.cci < 120 && ind.prevCci > 180;
        return { id: 5640, name: 'CCI Fast Return From Extreme', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5641: OBV + CCI + MACD + EMA ���� */
    static strategy5641(ind) {
        const match = (ind.obv || 0) < (ind.prevObv || 0) && ind.cci < ind.prevCci && 
                     ind.macd?.histogram < 0 && ind.ema20 < ind.ema50;
        return { id: 5641, name: 'OBV CCI MACD EMA Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5642: CCI 0????�� + RSI 50 ??�� ���� */
    static strategy5642(ind) {
        const cciBreak = ind.cci < 0 && ind.prevCci >= 0;
        const rsiBreak = ind.rsi > 50 && ind.prevRsi >= 50;
        const match = cciBreak && rsiBreak;
        return { id: 5642, name: 'CCI RSI Break Zero 50', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5643: OBV �϶� + BB �ش� 75%+ */
    static strategy5643(ind) {
        const match = (ind.obv || 0) < (ind.prevObv || 0) && ind.bollingerBands?.position > 75;
        return { id: 5643, name: 'OBV Down + BB Upper', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5644: CCI > 100 + ADX > 25 + -DI �߼� */
    static strategy5644(ind) {
        const match = ind.cci > 100 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5644, name: 'CCI High + ADX Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5645: OBV �϶� + ADX ���?+ -DI �߼� */
    static strategy5645(ind) {
        const match = (ind.obv || 0) < (ind.prevObv || 0) && ind.adx?.adx > ind.adx?.prevAdx && 
                     ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5645, name: 'OBV Down + ADX Rising Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5646: CCI + Stoch ����??��??���� */
    static strategy5646(ind) {
        const cciDown = ind.cci < ind.prevCci;
        const stochDead = ind.stochastic?.k < ind.stochastic?.d;
        const match = cciDown && stochDead && ind.cci > 50;
        return { id: 5646, name: 'CCI + Stoch Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5647: OBV + CCI + Stoch + RSI ���� �϶� */
    static strategy5647(ind) {
        const match = (ind.obv || 0) < (ind.prevObv || 0) && ind.cci < ind.prevCci && 
                     ind.stochastic?.k < ind.stochastic?.prevK && ind.rsi < ind.prevRsi;
        return { id: 5647, name: 'OBV CCI Stoch RSI Quad Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5648: CCI 100+ + ATR ���?+ �϶� ĵ�� */
    static strategy5648(ind) {
        const match = ind.cci > 100 && (ind.atr || 0) > (ind.prevAtr || 0) && ind.priceChange < 0;
        return { id: 5648, name: 'CCI High + ATR Rise + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5649: OBV + CCI + ??ü MA ���� */
    static strategy5649(ind) {
        const match = (ind.obv || 0) < (ind.prevObv || 0) && ind.cci < ind.prevCci && 
                     ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50;
        return { id: 5649, name: 'OBV CCI + MA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5650: OBV CCI Ȯ��??�϶� */
    static strategy5650(ind) {
        const match = (ind.obv || 0) < (ind.prevObv || 0) && ind.cci < ind.prevCci && ind.cci > -50 && 
                     ind.macd?.histogram < 0;
        return { id: 5650, name: 'OBV CCI All-In-One Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    // ==================== Williams %R + ���� ���� (5651-5700) ====================
    
    /** ���� 5651: Williams %R > -20 ���ż�*/
    static strategy5651(ind) {
        const match = ind.williamsR > -20;
        return { id: 5651, name: 'Williams R Overbought -20', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5652: Williams %R > -10 �ش�? ���ż�*/
    static strategy5652(ind) {
        const match = ind.williamsR > -10;
        return { id: 5652, name: 'Williams R Extreme -10', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5653: Williams %R > -5 �ֱ�? ���ż�*/
    static strategy5653(ind) {
        const match = ind.williamsR > -5;
        return { id: 5653, name: 'Williams R Ultra Extreme -5', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5654: Williams %R -20 ??Ż */
    static strategy5654(ind) {
        const match = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        return { id: 5654, name: 'Williams R Exit -20', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5655: Williams %R -10 ??Ż */
    static strategy5655(ind) {
        const match = ind.williamsR < -10 && ind.prevWilliamsR >= -10;
        return { id: 5655, name: 'Williams R Exit -10', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5656: Williams %R �϶� �߼� (���ż�����) */
    static strategy5656(ind) {
        const match = ind.williamsR > -30 && ind.williamsR < ind.prevWilliamsR;
        return { id: 5656, name: 'Williams R Falling Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5657: Williams %R �޶� (-10 ??�� �϶�) */
    static strategy5657(ind) {
        const wDrop = ind.prevWilliamsR - ind.williamsR;
        const match = wDrop > 10;
        return { id: 5657, name: 'Williams R Sharp Drop 10', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5658: Williams %R �޶� (-20 ??�� �϶�) */
    static strategy5658(ind) {
        const wDrop = ind.prevWilliamsR - ind.williamsR;
        const match = wDrop > 20;
        return { id: 5658, name: 'Williams R Sharp Drop 20', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5659: Williams %R -50????�� ??�� */
    static strategy5659(ind) {
        const match = ind.williamsR < -50 && ind.prevWilliamsR >= -50;
        return { id: 5659, name: 'Williams R Break -50', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5660: Williams %R > -20 + RSI > 70 */
    static strategy5660(ind) {
        const match = ind.williamsR > -20 && ind.rsi > 70;
        return { id: 5660, name: 'Williams R + RSI Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5661: Williams %R > -20 + RSI > 65 */
    static strategy5661(ind) {
        const match = ind.williamsR > -20 && ind.rsi > 65;
        return { id: 5661, name: 'Williams R + RSI 65', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5662: Williams %R ??Ż + RSI �϶� */
    static strategy5662(ind) {
        const match = ind.williamsR < -20 && ind.prevWilliamsR >= -20 && ind.rsi < ind.prevRsi;
        return { id: 5662, name: 'Williams R Exit + RSI Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5663: Williams %R > -20 + MACD ���� */
    static strategy5663(ind) {
        const match = ind.williamsR > -20 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5663, name: 'Williams R High + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5664: Williams %R > -20 + MACD ??�� */
    static strategy5664(ind) {
        const match = ind.williamsR > -20 && ind.macd?.histogram < 0;
        return { id: 5664, name: 'Williams R High + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5665: Williams %R �϶� + MACD �϶� */
    static strategy5665(ind) {
        const match = ind.williamsR < ind.prevWilliamsR && ind.macd?.histogram < ind.macd?.prevHistogram;
        return { id: 5665, name: 'Williams R + MACD Both Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5666: Williams %R > -20 + Stoch > 80 */
    static strategy5666(ind) {
        const match = ind.williamsR > -20 && ind.stochastic?.k > 80;
        return { id: 5666, name: 'Williams R + Stoch Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5667: Williams %R + Stoch ���� �϶� */
    static strategy5667(ind) {
        const match = ind.williamsR < ind.prevWilliamsR && ind.stochastic?.k < ind.stochastic?.prevK && ind.williamsR > -50;
        return { id: 5667, name: 'Williams R + Stoch Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5668: Williams %R > -20 + BB 80%+ */
    static strategy5668(ind) {
        const match = ind.williamsR > -20 && ind.bollingerBands?.position > 80;
        return { id: 5668, name: 'Williams R + BB Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5669: Williams %R ??Ż + BB �ش�??�� �϶� */
    static strategy5669(ind) {
        const match = ind.williamsR < -20 && ind.prevWilliamsR >= -20 && ind.bollingerBands?.position < 80;
        return { id: 5669, name: 'Williams R Exit + BB Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5670: Williams %R > -20 + EMA ���� */
    static strategy5670(ind) {
        const match = ind.williamsR > -20 && ind.ema20 < ind.ema50;
        return { id: 5670, name: 'Williams R High + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5671: Williams %R �϶� + EMA ���� + ��??�϶� */
    static strategy5671(ind) {
        const match = ind.williamsR < ind.prevWilliamsR && ind.ema20 < ind.ema50 && ind.priceChange < 0;
        return { id: 5671, name: 'Williams R + EMA + Price Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5672: Williams %R > -20 + CCI > 100 */
    static strategy5672(ind) {
        const match = ind.williamsR > -20 && ind.cci > 100;
        return { id: 5672, name: 'Williams R + CCI Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5673: Williams %R + CCI ���� �϶� */
    static strategy5673(ind) {
        const match = ind.williamsR < ind.prevWilliamsR && ind.cci < ind.prevCci;
        return { id: 5673, name: 'Williams R + CCI Both Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5674: Williams %R + RSI + Stoch ??��? ���ż�*/
    static strategy5674(ind) {
        const match = ind.williamsR > -20 && ind.rsi > 65 && ind.stochastic?.k > 75;
        return { id: 5674, name: 'Williams RSI Stoch Triple OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5675: Williams %R + RSI + MACD ??��??*/
    static strategy5675(ind) {
        const match = ind.williamsR > -25 && ind.rsi > 60 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5675, name: 'Williams RSI MACD Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5676: Williams %R + BB + EMA ??��??*/
    static strategy5676(ind) {
        const match = ind.williamsR > -25 && ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50;
        return { id: 5676, name: 'Williams BB EMA Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5677: Williams %R ??�̹���??(���ݡ� + W?? */
    static strategy5677(ind) {
        const match = ind.priceChange > 0 && ind.williamsR < ind.prevWilliamsR && ind.williamsR > -40;
        return { id: 5677, name: 'Williams R Divergence', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5678: Williams %R -20~-30 ���� + �϶� ��??*/
    static strategy5678(ind) {
        const match = ind.williamsR >= -30 && ind.williamsR <= -20 && ind.williamsR < ind.prevWilliamsR;
        return { id: 5678, name: 'Williams R Zone -20-30 Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5679: Williams %R -30~-40 ���� + MACD ??�� */
    static strategy5679(ind) {
        const match = ind.williamsR >= -40 && ind.williamsR <= -30 && ind.macd?.histogram < 0;
        return { id: 5679, name: 'Williams R Zone -30-40 + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5680: Williams %R + ADX ���� */
    static strategy5680(ind) {
        const match = ind.williamsR > -25 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5680, name: 'Williams R + ADX Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5681: Williams %R ??Ż + ADX ���?+ -DI �߼� */
    static strategy5681(ind) {
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const match = wExit && ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5681, name: 'Williams Exit + ADX Rise Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5682: Williams %R + OBV ���� �϶� */
    static strategy5682(ind) {
        const match = ind.williamsR < ind.prevWilliamsR && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 5682, name: 'Williams R + OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5683: Williams %R > -20 + ATR ���?*/
    static strategy5683(ind) {
        const match = ind.williamsR > -20 && (ind.atr || 0) > (ind.prevAtr || 0);
        return { id: 5683, name: 'Williams R High + ATR Rising', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5684: Williams %R + RSI + MACD + BB ���� */
    static strategy5684(ind) {
        const match = ind.williamsR > -25 && ind.rsi > 55 && ind.macd?.histogram < 0 && ind.bollingerBands?.position > 55;
        return { id: 5684, name: 'Williams Quad Signal Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5685: Williams %R + RSI + Stoch + MACD ���� */
    static strategy5685(ind) {
        const match = ind.williamsR > -25 && ind.rsi > 55 && ind.stochastic?.k > 60 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5685, name: 'Williams RSI Stoch MACD Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5686: Williams %R ??Ż + ??ü ���?? �϶� */
    static strategy5686(ind) {
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const match = wExit && ind.rsi < ind.prevRsi && ind.stochastic?.k < ind.stochastic?.prevK && ind.macd?.histogram < ind.macd?.prevHistogram;
        return { id: 5686, name: 'Williams Exit + All Momentum', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5687: Williams %R + CCI + RSI ??��? ���ż�??Ż */
    static strategy5687(ind) {
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const match = wExit && ind.cci < 100 && ind.rsi > 30;
        return { id: 5687, name: 'Williams CCI RSI Exit OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5688: Williams %R + Stoch ����??��??+ RSI > 55 */
    static strategy5688(ind) {
        const stochDead = ind.stochastic?.k < ind.stochastic?.d;
        const match = ind.williamsR < ind.prevWilliamsR && stochDead && ind.rsi > 55;
        return { id: 5688, name: 'Williams + Stoch Dead + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5689: Williams %R + MACD ���� + EMA ���� + BB 60%+ */
    static strategy5689(ind) {
        const match = ind.williamsR > -30 && ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50 && ind.bollingerBands?.position > 60;
        return { id: 5689, name: 'Williams MACD EMA BB Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5690: Williams %R ���� �϶� (3?? + ���ż�??�� */
    static strategy5690(ind) {
        const match = ind.williamsR < ind.prevWilliamsR && ind.prevWilliamsR < ind.prev2WilliamsR && ind.williamsR < -15;
        return { id: 5690, name: 'Williams 3-Bar Down Exit', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5691: Williams %R > -15 + ??ü ��? ���ż�*/
    static strategy5691(ind) {
        const match = ind.williamsR > -15 && ind.rsi > 68 && ind.stochastic?.k > 82 && ind.cci > 120;
        return { id: 5691, name: 'Williams All Extreme OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 5692: Williams %R + OBV + CCI ??��??�϶� */
    static strategy5692(ind) {
        const match = ind.williamsR < ind.prevWilliamsR && (ind.obv || 0) < (ind.prevObv || 0) && ind.cci < ind.prevCci;
        return { id: 5692, name: 'Williams OBV CCI Triple Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5693: Williams %R + ATR �޵� + �϶� ĵ�� */
    static strategy5693(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = ind.williamsR > -30 && atrSpike && ind.priceChange < 0;
        return { id: 5693, name: 'Williams + ATR Spike + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5694: Williams %R + ADX + MACD + RSI ���� */
    static strategy5694(ind) {
        const match = ind.williamsR > -30 && ind.adx?.minusDI > ind.adx?.plusDI && ind.macd?.histogram < 0 && ind.rsi > 50;
        return { id: 5694, name: 'Williams ADX MACD RSI Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5695: Williams %R ??Ż + 5??��??Ȯ�� */
    static strategy5695(ind) {
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const match = wExit && ind.rsi > 45 && ind.macd?.histogram < 5 && ind.bollingerBands?.position > 40 && ind.ema20 < ind.ema50;
        return { id: 5695, name: 'Williams Exit + Penta Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 5696: Williams %R + SMA ���� + ��??< SMA20 */
    static strategy5696(ind) {
        const match = ind.williamsR > -30 && ind.sma20 < ind.sma50 && ind.price < ind.sma20;
        return { id: 5696, name: 'Williams + SMA Dead + Below', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5697: Williams %R + EMA + SMA ���� ���� */
    static strategy5697(ind) {
        const match = ind.williamsR > -30 && ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50;
        return { id: 5697, name: 'Williams + Double MA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5698: Williams %R ���?��??���� �϶� */
    static strategy5698(ind) {
        const match = ind.williamsR < ind.prevWilliamsR && ind.rsi < ind.prevRsi && ind.cci < ind.prevCci &&
                     ind.stochastic?.k < ind.stochastic?.prevK && ind.macd?.histogram < ind.macd?.prevHistogram;
        return { id: 5698, name: 'Williams All Indicators Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5699: Williams %R �ش� ���ż�+ ??ü ���� ??ȣ */
    static strategy5699(ind) {
        const match = ind.williamsR > -15 && ind.rsi > 65 && ind.stochastic?.k > 80 && ind.cci > 100 && ind.macd?.histogram < 10;
        return { id: 5699, name: 'Williams Extreme + Reversal', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 5700: Williams %R Ȯ��??����� */
    static strategy5700(ind) {
        const match = ind.williamsR > -35 && ind.rsi > 48 && ind.macd?.histogram < 5 && ind.ema20 < ind.ema50;
        return { id: 5700, name: 'Williams All-In-One Bearish', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���?���� ??�� (5501-5700) */
    static analyzeAll(indicators) {
        return [
            this.strategy5501(indicators), this.strategy5502(indicators), this.strategy5503(indicators),
            this.strategy5504(indicators), this.strategy5505(indicators), this.strategy5506(indicators),
            this.strategy5507(indicators), this.strategy5508(indicators), this.strategy5509(indicators),
            this.strategy5510(indicators), this.strategy5511(indicators), this.strategy5512(indicators),
            this.strategy5513(indicators), this.strategy5514(indicators), this.strategy5515(indicators),
            this.strategy5516(indicators), this.strategy5517(indicators), this.strategy5518(indicators),
            this.strategy5519(indicators), this.strategy5520(indicators), this.strategy5521(indicators),
            this.strategy5522(indicators), this.strategy5523(indicators), this.strategy5524(indicators),
            this.strategy5525(indicators), this.strategy5526(indicators), this.strategy5527(indicators),
            this.strategy5528(indicators), this.strategy5529(indicators), this.strategy5530(indicators),
            this.strategy5531(indicators), this.strategy5532(indicators), this.strategy5533(indicators),
            this.strategy5534(indicators), this.strategy5535(indicators), this.strategy5536(indicators),
            this.strategy5537(indicators), this.strategy5538(indicators), this.strategy5539(indicators),
            this.strategy5540(indicators), this.strategy5541(indicators), this.strategy5542(indicators),
            this.strategy5543(indicators), this.strategy5544(indicators), this.strategy5545(indicators),
            this.strategy5546(indicators), this.strategy5547(indicators), this.strategy5548(indicators),
            this.strategy5549(indicators), this.strategy5550(indicators), this.strategy5551(indicators),
            this.strategy5552(indicators), this.strategy5553(indicators), this.strategy5554(indicators),
            this.strategy5555(indicators), this.strategy5556(indicators), this.strategy5557(indicators),
            this.strategy5558(indicators), this.strategy5559(indicators), this.strategy5560(indicators),
            this.strategy5561(indicators), this.strategy5562(indicators), this.strategy5563(indicators),
            this.strategy5564(indicators), this.strategy5565(indicators), this.strategy5566(indicators),
            this.strategy5567(indicators), this.strategy5568(indicators), this.strategy5569(indicators),
            this.strategy5570(indicators), this.strategy5571(indicators), this.strategy5572(indicators),
            this.strategy5573(indicators), this.strategy5574(indicators), this.strategy5575(indicators),
            this.strategy5576(indicators), this.strategy5577(indicators), this.strategy5578(indicators),
            this.strategy5579(indicators), this.strategy5580(indicators), this.strategy5581(indicators),
            this.strategy5582(indicators), this.strategy5583(indicators), this.strategy5584(indicators),
            this.strategy5585(indicators), this.strategy5586(indicators), this.strategy5587(indicators),
            this.strategy5588(indicators), this.strategy5589(indicators), this.strategy5590(indicators),
            this.strategy5591(indicators), this.strategy5592(indicators), this.strategy5593(indicators),
            this.strategy5594(indicators), this.strategy5595(indicators), this.strategy5596(indicators),
            this.strategy5597(indicators), this.strategy5598(indicators), this.strategy5599(indicators),
            this.strategy5600(indicators), this.strategy5601(indicators), this.strategy5602(indicators),
            this.strategy5603(indicators), this.strategy5604(indicators), this.strategy5605(indicators),
            this.strategy5606(indicators), this.strategy5607(indicators), this.strategy5608(indicators),
            this.strategy5609(indicators), this.strategy5610(indicators), this.strategy5611(indicators),
            this.strategy5612(indicators), this.strategy5613(indicators), this.strategy5614(indicators),
            this.strategy5615(indicators), this.strategy5616(indicators), this.strategy5617(indicators),
            this.strategy5618(indicators), this.strategy5619(indicators), this.strategy5620(indicators),
            this.strategy5621(indicators), this.strategy5622(indicators), this.strategy5623(indicators),
            this.strategy5624(indicators), this.strategy5625(indicators), this.strategy5626(indicators),
            this.strategy5627(indicators), this.strategy5628(indicators), this.strategy5629(indicators),
            this.strategy5630(indicators), this.strategy5631(indicators), this.strategy5632(indicators),
            this.strategy5633(indicators), this.strategy5634(indicators), this.strategy5635(indicators),
            this.strategy5636(indicators), this.strategy5637(indicators), this.strategy5638(indicators),
            this.strategy5639(indicators), this.strategy5640(indicators), this.strategy5641(indicators),
            this.strategy5642(indicators), this.strategy5643(indicators), this.strategy5644(indicators),
            this.strategy5645(indicators), this.strategy5646(indicators), this.strategy5647(indicators),
            this.strategy5648(indicators), this.strategy5649(indicators), this.strategy5650(indicators),
            this.strategy5651(indicators), this.strategy5652(indicators), this.strategy5653(indicators),
            this.strategy5654(indicators), this.strategy5655(indicators), this.strategy5656(indicators),
            this.strategy5657(indicators), this.strategy5658(indicators), this.strategy5659(indicators),
            this.strategy5660(indicators), this.strategy5661(indicators), this.strategy5662(indicators),
            this.strategy5663(indicators), this.strategy5664(indicators), this.strategy5665(indicators),
            this.strategy5666(indicators), this.strategy5667(indicators), this.strategy5668(indicators),
            this.strategy5669(indicators), this.strategy5670(indicators), this.strategy5671(indicators),
            this.strategy5672(indicators), this.strategy5673(indicators), this.strategy5674(indicators),
            this.strategy5675(indicators), this.strategy5676(indicators), this.strategy5677(indicators),
            this.strategy5678(indicators), this.strategy5679(indicators), this.strategy5680(indicators),
            this.strategy5681(indicators), this.strategy5682(indicators), this.strategy5683(indicators),
            this.strategy5684(indicators), this.strategy5685(indicators), this.strategy5686(indicators),
            this.strategy5687(indicators), this.strategy5688(indicators), this.strategy5689(indicators),
            this.strategy5690(indicators), this.strategy5691(indicators), this.strategy5692(indicators),
            this.strategy5693(indicators), this.strategy5694(indicators), this.strategy5695(indicators),
            this.strategy5696(indicators), this.strategy5697(indicators), this.strategy5698(indicators),
            this.strategy5699(indicators), this.strategy5700(indicators)
        ];
    }
}

