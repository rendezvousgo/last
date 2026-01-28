/**
 * DOWN ���� ���� (ID: 5301-5400)
 * ??��????�� - Stochastic ���
 * 5301-5325: Stochastic %K ���ż����
 * 5326-5350: Stochastic %K/%D ??��??
 * 5351-5375: Stochastic + RSI ����
 * 5376-5400: Stochastic + MACD/BB/EMA ����
 */

export class StrategiesDown5301 {
    
    // ==================== Stochastic %K ���ż���� (5301-5325) ====================
    
    /** ���� 5301: Stoch %K > 90 �ش�? ���ż�*/
    static strategy5301(ind) {
        const match = ind.stochastic?.k > 90;
        return { id: 5301, name: 'Stoch K Extreme Overbought 90', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5302: Stoch %K > 85 ���ż�*/
    static strategy5302(ind) {
        const match = ind.stochastic?.k > 85;
        return { id: 5302, name: 'Stoch K Overbought 85', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5303: Stoch %K > 80 ���ż�*/
    static strategy5303(ind) {
        const match = ind.stochastic?.k > 80;
        return { id: 5303, name: 'Stoch K Overbought 80', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5304: Stoch %K > 75 ���ż�*/
    static strategy5304(ind) {
        const match = ind.stochastic?.k > 75;
        return { id: 5304, name: 'Stoch K Overbought 75', direction: 'DOWN', match: Boolean(match), confidence: match ? 65 : 0 };
    }
    
    /** ���� 5305: Stoch %K > 90 + %D > 85 */
    static strategy5305(ind) {
        const match = ind.stochastic?.k > 90 && ind.stochastic?.d > 85;
        return { id: 5305, name: 'Stoch K90 D85 Extreme', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5306: Stoch %K > 85 + %D > 80 */
    static strategy5306(ind) {
        const match = ind.stochastic?.k > 85 && ind.stochastic?.d > 80;
        return { id: 5306, name: 'Stoch K85 D80 Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5307: Stoch %K > 80 + %D > 75 */
    static strategy5307(ind) {
        const match = ind.stochastic?.k > 80 && ind.stochastic?.d > 75;
        return { id: 5307, name: 'Stoch K80 D75 Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5308: Stoch %K > 75 + %D > 70 */
    static strategy5308(ind) {
        const match = ind.stochastic?.k > 75 && ind.stochastic?.d > 70;
        return { id: 5308, name: 'Stoch K75 D70 Upper Zone', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5309: Stoch %K 90 ??�� ??�϶� (90??5) */
    static strategy5309(ind) {
        const match = ind.stochastic?.k >= 85 && ind.stochastic?.k <= 90 && ind.stochastic?.prevK > 90;
        return { id: 5309, name: 'Stoch K Falling From 90', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5310: Stoch %K 85 ??�� ??�϶� (85??0) */
    static strategy5310(ind) {
        const match = ind.stochastic?.k >= 80 && ind.stochastic?.k <= 85 && ind.stochastic?.prevK > 85;
        return { id: 5310, name: 'Stoch K Falling From 85', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5311: Stoch %K 80 ??�� ??�϶� (80??5) */
    static strategy5311(ind) {
        const match = ind.stochastic?.k >= 75 && ind.stochastic?.k <= 80 && ind.stochastic?.prevK > 80;
        return { id: 5311, name: 'Stoch K Falling From 80', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5312: Stoch %K �϶� ??(??�� ????-5 ??��) */
    static strategy5312(ind) {
        const kDrop = ind.stochastic?.prevK - ind.stochastic?.k;
        const match = kDrop >= 5 && ind.stochastic?.k > 70;
        return { id: 5312, name: 'Stoch K Dropping 5pts', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5313: Stoch %K �޶� (??�� ????-10 ??��) */
    static strategy5313(ind) {
        const kDrop = ind.stochastic?.prevK - ind.stochastic?.k;
        const match = kDrop >= 10 && ind.stochastic?.k > 60;
        return { id: 5313, name: 'Stoch K Sharp Drop 10pts', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5314: Stoch %K > 80 + �϶� ��ȯ */
    static strategy5314(ind) {
        const match = ind.stochastic?.k > 80 && ind.stochastic?.k < ind.stochastic?.prevK;
        return { id: 5314, name: 'Stoch K80+ Turning Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5315: Stoch %K > 85 + 2??���� �϶� */
    static strategy5315(ind) {
        const match = ind.stochastic?.k > 85 && ind.stochastic?.k < ind.stochastic?.prevK && ind.stochastic?.kTrend === 'falling';
        return { id: 5315, name: 'Stoch K85+ 2-Bar Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5316: Stoch %K 80-90 ���� + %D �϶� */
    static strategy5316(ind) {
        const match = ind.stochastic?.k >= 80 && ind.stochastic?.k <= 90 && ind.stochastic?.d < ind.stochastic?.prevD;
        return { id: 5316, name: 'Stoch K Zone 80-90 D Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5317: Stoch %K 75-85 ���� + �϶� ���?? */
    static strategy5317(ind) {
        const match = ind.stochastic?.k >= 75 && ind.stochastic?.k <= 85 && ind.stochastic?.k < ind.stochastic?.d;
        return { id: 5317, name: 'Stoch K Zone 75-85 Momentum', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5318: Stoch %K > 70 + %D > 70 + ���� �϶� */
    static strategy5318(ind) {
        const match = ind.stochastic?.k > 70 && ind.stochastic?.d > 70 && 
                     ind.stochastic?.k < ind.stochastic?.prevK && ind.stochastic?.d < ind.stochastic?.prevD;
        return { id: 5318, name: 'Stoch K D Both Falling 70+', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5319: Stoch %K 90+ ??�� ü�� ??�϶� */
    static strategy5319(ind) {
        const match = ind.stochastic?.k > 85 && ind.stochastic?.prevK > 90 && ind.stochastic?.k < ind.stochastic?.prevK;
        return { id: 5319, name: 'Stoch K Long Overbought Exit', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5320: Stoch %K ���ż�??Ż ���� (90??5) */
    static strategy5320(ind) {
        const match = ind.stochastic?.k < 90 && ind.stochastic?.prevK >= 90;
        return { id: 5320, name: 'Stoch K Exit Overbought 90', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5321: Stoch %K ���ż�??Ż (85??0) */
    static strategy5321(ind) {
        const match = ind.stochastic?.k < 85 && ind.stochastic?.prevK >= 85;
        return { id: 5321, name: 'Stoch K Exit Overbought 85', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5322: Stoch %K ���ż�??Ż (80??5) */
    static strategy5322(ind) {
        const match = ind.stochastic?.k < 80 && ind.stochastic?.prevK >= 80;
        return { id: 5322, name: 'Stoch K Exit Overbought 80', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5323: Stoch ���ż�+ RSI ���ż����� */
    static strategy5323(ind) {
        const match = ind.stochastic?.k > 80 && ind.rsi > 70;
        return { id: 5323, name: 'Stoch RSI Double Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5324: Stoch ���ż�85+ + BB �ش� 80%+ */
    static strategy5324(ind) {
        const match = ind.stochastic?.k > 85 && ind.bollingerBands?.position > 80;
        return { id: 5324, name: 'Stoch + BB Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5325: Stoch ���ż�90+ + ��??> EMA20 1% */
    static strategy5325(ind) {
        const aboveEMA = ind.ema20 ? (ind.price - ind.ema20) / ind.ema20 > 0.01 : false;
        const match = ind.stochastic?.k > 90 && aboveEMA;
        return { id: 5325, name: 'Stoch Extreme + Price Above EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    // ==================== Stochastic %K/%D ??��??(5326-5350) ====================
    
    /** ���� 5326: Stoch %K < %D ����??��??(���ż�����) */
    static strategy5326(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.k > 75;
        return { id: 5326, name: 'Stoch Dead Cross Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5327: Stoch ����??��??�߻� (??�� k>d ????�� k<d) */
    static strategy5327(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        return { id: 5327, name: 'Stoch Dead Cross Signal', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5328: Stoch ����??��??+ 90+ ���� */
    static strategy5328(ind) {
        const crossDown = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = crossDown && ind.stochastic?.k > 90;
        return { id: 5328, name: 'Stoch Dead Cross 90+ Zone', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5329: Stoch ����??��??+ 85-90 ���� */
    static strategy5329(ind) {
        const crossDown = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = crossDown && ind.stochastic?.k >= 85 && ind.stochastic?.k <= 90;
        return { id: 5329, name: 'Stoch Dead Cross 85-90 Zone', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5330: Stoch ����??��??+ 80-85 ���� */
    static strategy5330(ind) {
        const crossDown = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = crossDown && ind.stochastic?.k >= 80 && ind.stochastic?.k <= 85;
        return { id: 5330, name: 'Stoch Dead Cross 80-85 Zone', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5331: Stoch ����??��??+ 75-80 ���� */
    static strategy5331(ind) {
        const crossDown = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = crossDown && ind.stochastic?.k >= 75 && ind.stochastic?.k <= 80;
        return { id: 5331, name: 'Stoch Dead Cross 75-80 Zone', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5332: Stoch ����??��??+ 70-75 ���� */
    static strategy5332(ind) {
        const crossDown = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = crossDown && ind.stochastic?.k >= 70 && ind.stochastic?.k <= 75;
        return { id: 5332, name: 'Stoch Dead Cross 70-75 Zone', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5333: Stoch %K < %D ???? + �϶� �߼� */
    static strategy5333(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK < ind.stochastic?.prevD && 
                     ind.stochastic?.k < ind.stochastic?.prevK;
        return { id: 5333, name: 'Stoch Dead Trend Continuing', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5334: Stoch ����??��??+ %K-%D ?????? */
    static strategy5334(ind) {
        const gap = ind.stochastic?.d - ind.stochastic?.k;
        const prevGap = ind.stochastic?.prevD - ind.stochastic?.prevK;
        const match = gap > 0 && gap > prevGap && ind.stochastic?.k > 60;
        return { id: 5334, name: 'Stoch Dead Gap Widening', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5335: Stoch %K-%D ??> 5 (���� ����) */
    static strategy5335(ind) {
        const gap = ind.stochastic?.d - ind.stochastic?.k;
        const match = gap > 5 && ind.stochastic?.k > 65;
        return { id: 5335, name: 'Stoch Strong Dead Gap 5', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5336: Stoch %K-%D ??> 10 (�ſ� ���� ����) */
    static strategy5336(ind) {
        const gap = ind.stochastic?.d - ind.stochastic?.k;
        const match = gap > 10 && ind.stochastic?.k > 55;
        return { id: 5336, name: 'Stoch Very Strong Dead Gap 10', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5337: Stoch ����??��??1���� �߻� */
    static strategy5337(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && 
                     ind.stochastic?.prevK < ind.stochastic?.prevD && 
                     ind.stochastic?.prev2K >= ind.stochastic?.prev2D;
        return { id: 5337, name: 'Stoch Dead Cross 1-Bar Ago', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5338: Stoch ����??��??+ �߸����� ���� (70??0) */
    static strategy5338(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.k >= 60 && ind.stochastic?.k <= 70;
        return { id: 5338, name: 'Stoch Dead Entering Neutral', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5339: Stoch ����??��??+ 50????�� ??�� */
    static strategy5339(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.k < 50 && ind.stochastic?.prevK >= 50;
        return { id: 5339, name: 'Stoch Dead Break 50 Line', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5340: Stoch ���� ???? + 40????�� */
    static strategy5340(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.k >= 40 && ind.stochastic?.k <= 50;
        return { id: 5340, name: 'Stoch Dead Approaching 40', direction: 'DOWN', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ���� 5341: Stoch ����??��????�� (3??����) */
    static strategy5341(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && 
                     ind.stochastic?.prevK < ind.stochastic?.prevD && 
                     ind.stochastic?.prev2K < ind.stochastic?.prev2D;
        return { id: 5341, name: 'Stoch Dead Confirmed 3-Bar', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5342: Stoch %D ??�� ���??+ %K < %D */
    static strategy5342(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.d < ind.stochastic?.prevD;
        return { id: 5342, name: 'Stoch D Slope Down + Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5343: Stoch %K %D ??�� �϶� + ���� */
    static strategy5343(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && 
                     ind.stochastic?.k < ind.stochastic?.prevK && ind.stochastic?.d < ind.stochastic?.prevD;
        return { id: 5343, name: 'Stoch K D Both Down + Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5344: Stoch ����??��??+ �ش� ��� ??Ż */
    static strategy5344(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK > 80 && ind.stochastic?.k < 80;
        return { id: 5344, name: 'Stoch Dead Exit Upper Band', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5345: Stoch ����??��??+ �޶� (-10 ??��) */
    static strategy5345(ind) {
        const kDrop = ind.stochastic?.prevK - ind.stochastic?.k;
        const match = ind.stochastic?.k < ind.stochastic?.d && kDrop >= 10;
        return { id: 5345, name: 'Stoch Dead + Sharp K Drop', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** 전략 5346: Stoch 데드 + %K 60-70 + ADX 25+ (5338과 차별화) */
    static strategy5346(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.k >= 60 && ind.stochastic?.k <= 70 && ind.adx?.adx > 25;
        return { id: 5346, name: 'Stoch Dead K 60-70 + ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5347: Stoch ���� + %K 50-60 ���� */
    static strategy5347(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.k >= 50 && ind.stochastic?.k <= 60;
        return { id: 5347, name: 'Stoch Dead K 50-60 Zone', direction: 'DOWN', match: Boolean(match), confidence: match ? 66 : 0 };
    }
    
    /** 전략 5348: Stoch 데드 + %K 40-50 + EMA 데드 (5340과 차별화) */
    static strategy5348(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.k >= 40 && ind.stochastic?.k <= 50 && ind.ema20 < ind.ema50;
        return { id: 5348, name: 'Stoch Dead K 40-50 + EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5349: Stoch ���� ��ȭ (????+ �϶�) */
    static strategy5349(ind) {
        const gap = ind.stochastic?.d - ind.stochastic?.k;
        const match = gap > 7 && ind.stochastic?.k < ind.stochastic?.prevK && ind.stochastic?.k > 50;
        return { id: 5349, name: 'Stoch Dead Strengthening', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5350: Stoch ���� + ??Ȯ�� 70 ??�� ???? */
    static strategy5350(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.k > 70 && ind.stochastic?.d > 70;
        return { id: 5350, name: 'Stoch Dead Both Lines 70+', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    // ==================== Stochastic + RSI ���� (5351-5375) ====================
    
    /** ���� 5351: Stoch %K > 85 + RSI > 70 (??�� ���ż� */
    static strategy5351(ind) {
        const match = ind.stochastic?.k > 85 && ind.rsi > 70;
        return { id: 5351, name: 'Stoch RSI Double Overbought 85/70', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5352: Stoch %K > 80 + RSI > 68 */
    static strategy5352(ind) {
        const match = ind.stochastic?.k > 80 && ind.rsi > 68;
        return { id: 5352, name: 'Stoch RSI Overbought 80/68', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5353: Stoch %K > 75 + RSI > 65 */
    static strategy5353(ind) {
        const match = ind.stochastic?.k > 75 && ind.rsi > 65;
        return { id: 5353, name: 'Stoch RSI Overbought 75/65', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5354: Stoch %K > 70 + RSI > 60 */
    static strategy5354(ind) {
        const match = ind.stochastic?.k > 70 && ind.rsi > 60;
        return { id: 5354, name: 'Stoch RSI Upper Zone 70/60', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5355: Stoch ����??��??+ RSI > 65 */
    static strategy5355(ind) {
        const crossDown = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = crossDown && ind.rsi > 65;
        return { id: 5355, name: 'Stoch Dead Cross + RSI 65+', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5356: Stoch ����??��??+ RSI > 60 */
    static strategy5356(ind) {
        const crossDown = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = crossDown && ind.rsi > 60;
        return { id: 5356, name: 'Stoch Dead Cross + RSI 60+', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5357: Stoch ����??��??+ RSI 55-65 */
    static strategy5357(ind) {
        const crossDown = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = crossDown && ind.rsi >= 55 && ind.rsi <= 65;
        return { id: 5357, name: 'Stoch Dead Cross + RSI Mid-High', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5358: Stoch %K �϶� + RSI �϶� (���� �϶�) */
    static strategy5358(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.prevK && ind.rsi < ind.prevRsi && ind.stochastic?.k > 60;
        return { id: 5358, name: 'Stoch RSI Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5359: Stoch %K �϶� + RSI 60-70 ���� */
    static strategy5359(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.prevK && ind.rsi >= 60 && ind.rsi <= 70;
        return { id: 5359, name: 'Stoch K Down + RSI 60-70', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5360: Stoch %K < 80 (??Ż) + RSI 65-75 */
    static strategy5360(ind) {
        const match = ind.stochastic?.k < 80 && ind.stochastic?.prevK >= 80 && ind.rsi >= 65 && ind.rsi <= 75;
        return { id: 5360, name: 'Stoch Exit 80 + RSI 65-75', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5361: Stoch ���ż�+ RSI ���ż�??Ż ���� */
    static strategy5361(ind) {
        const match = ind.stochastic?.k > 75 && ind.rsi > 30 && ind.prevRsi >= 70;
        return { id: 5361, name: 'Stoch High + RSI Exit Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5362: Stoch + RSI ���� �϶� ��ȯ */
    static strategy5362(ind) {
        const stochTurn = ind.stochastic?.k < ind.stochastic?.prevK && ind.stochastic?.prevK >= ind.stochastic?.prev2K;
        const rsiTurn = ind.rsi < ind.prevRsi && ind.prevRsi >= ind.prev2Rsi;
        const match = stochTurn && rsiTurn && ind.stochastic?.k > 60;
        return { id: 5362, name: 'Stoch RSI Both Turn Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5363: Stoch ���� + RSI 50????�� ??�� */
    static strategy5363(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.rsi > 50 && ind.prevRsi >= 50;
        return { id: 5363, name: 'Stoch Dead + RSI Break 50', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5364: Stoch 80+ + RSI 60+ + ????�϶� */
    static strategy5364(ind) {
        const match = ind.stochastic?.k > 80 && ind.rsi > 60 && 
                     ind.stochastic?.k < ind.stochastic?.prevK && ind.rsi < ind.prevRsi;
        return { id: 5364, name: 'Stoch RSI High Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5365: Stoch 75+ + RSI 55+ + ??�� �϶� */
    static strategy5365(ind) {
        const match = ind.stochastic?.k > 75 && ind.rsi > 55 &&
                     ind.stochastic?.k < ind.stochastic?.prevK && ind.rsi < ind.prevRsi;
        return { id: 5365, name: 'Stoch RSI Upper Both Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5366: Stoch ���� + RSI ���� (50????��) */
    static strategy5366(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.rsi > 50 && ind.stochastic?.k > 50;
        return { id: 5366, name: 'Stoch Dead + RSI Below 50', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5367: Stoch 70-80 + RSI 60-70 + �϶�??*/
    static strategy5367(ind) {
        const match = ind.stochastic?.k >= 70 && ind.stochastic?.k <= 80 && 
                     ind.rsi >= 60 && ind.rsi <= 70 && ind.stochastic?.k < ind.stochastic?.prevK;
        return { id: 5367, name: 'Stoch RSI Mid-High Declining', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5368: Stoch 60-75 + RSI 55-65 + ���� */
    static strategy5368(ind) {
        const match = ind.stochastic?.k >= 60 && ind.stochastic?.k <= 75 && ind.stochastic?.k < ind.stochastic?.d &&
                     ind.rsi >= 55 && ind.rsi <= 65;
        return { id: 5368, name: 'Stoch Dead Mid + RSI Mid-High', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5369: Stoch �޶� (-10) + RSI �϶� */
    static strategy5369(ind) {
        const kDrop = ind.stochastic?.prevK - ind.stochastic?.k;
        const match = kDrop >= 10 && ind.rsi < ind.prevRsi && ind.rsi > 45;
        return { id: 5369, name: 'Stoch Sharp Drop + RSI Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5370: Stoch + RSI ??�̹���??�϶� */
    static strategy5370(ind) {
        const match = ind.stochastic?.k > 70 && ind.rsi > 60 && ind.stochastic?.k < ind.stochastic?.prevK && ind.rsi > ind.prevRsi;
        return { id: 5370, name: 'Stoch RSI Bearish Divergence', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5371: Stoch 85+ + RSI 65+ + MACD ??�� */
    static strategy5371(ind) {
        const match = ind.stochastic?.k > 85 && ind.rsi > 65 && ind.macd?.histogram < 0;
        return { id: 5371, name: 'Stoch RSI High + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5372: Stoch 80+ + RSI 60+ + EMA ���� */
    static strategy5372(ind) {
        const match = ind.stochastic?.k > 80 && ind.rsi > 60 && ind.ema20 < ind.ema50;
        return { id: 5372, name: 'Stoch RSI High + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5373: Stoch ���� + RSI 50-60 + BB > 60 */
    static strategy5373(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.rsi >= 50 && ind.rsi <= 60 && ind.bollingerBands?.position > 60;
        return { id: 5373, name: 'Stoch Dead + RSI Mid + BB High', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5374: Stoch 75+ + RSI 60+ + BB 70+ */
    static strategy5374(ind) {
        const match = ind.stochastic?.k > 75 && ind.rsi > 60 && ind.bollingerBands?.position > 70;
        return { id: 5374, name: 'Stoch RSI BB Triple High', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5375: Stoch RSI ���� ���ż�??Ż */
    static strategy5375(ind) {
        const stochExit = ind.stochastic?.k < 80 && ind.stochastic?.prevK >= 80;
        const rsiExit = ind.rsi > 30 && ind.prevRsi >= 70;
        const match = stochExit && rsiExit;
        return { id: 5375, name: 'Stoch RSI Both Exit Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    // ==================== Stochastic + MACD/BB/EMA ���� (5376-5400) ====================
    
    /** ���� 5376: Stoch %K > 80 + MACD ���� */
    static strategy5376(ind) {
        const match = ind.stochastic?.k > 80 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5376, name: 'Stoch High + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5377: Stoch %K > 85 + MACD hist < 0 */
    static strategy5377(ind) {
        const match = ind.stochastic?.k > 85 && ind.macd?.histogram < 0;
        return { id: 5377, name: 'Stoch High 85 + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5378: Stoch ����??��??+ MACD ���� */
    static strategy5378(ind) {
        const stochDead = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = stochDead && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5378, name: 'Stoch + MACD Double Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5379: Stoch ���� + MACD hist < -10 */
    static strategy5379(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.macd?.histogram < -10;
        return { id: 5379, name: 'Stoch Dead + MACD Strong Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5380: Stoch %K > 75 + MACD ��ȯ �϶� */
    static strategy5380(ind) {
        const macdTurn = ind.macd?.histogram < 0 && ind.macd?.prevHistogram >= 0;
        const match = ind.stochastic?.k > 75 && macdTurn;
        return { id: 5380, name: 'Stoch High + MACD Turn Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5381: Stoch %K > 80 + BB �ش� 80%+ */
    static strategy5381(ind) {
        const match = ind.stochastic?.k > 80 && ind.bollingerBands?.position > 80;
        return { id: 5381, name: 'Stoch + BB Both Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5382: Stoch %K > 85 + BB �ش� 85%+ */
    static strategy5382(ind) {
        const match = ind.stochastic?.k > 85 && ind.bollingerBands?.position > 85;
        return { id: 5382, name: 'Stoch + BB Extreme Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5383: Stoch ���� + BB 70%+ */
    static strategy5383(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.bollingerBands?.position > 70;
        return { id: 5383, name: 'Stoch Dead + BB Upper', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5384: Stoch ���� + BB 60-75 ���� */
    static strategy5384(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.bollingerBands?.position >= 60 && ind.bollingerBands?.position <= 75;
        return { id: 5384, name: 'Stoch Dead + BB Mid-High', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5385: Stoch %K > 80 + BB ??���� �ش� */
    static strategy5385(ind) {
        const match = ind.stochastic?.k > 80 && ind.bollingerBands?.bandwidth < 3 && ind.bollingerBands?.position > 70;
        return { id: 5385, name: 'Stoch High + BB Squeeze Top', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5386: Stoch %K > 80 + EMA ���� */
    static strategy5386(ind) {
        const match = ind.stochastic?.k > 80 && ind.ema20 < ind.ema50;
        return { id: 5386, name: 'Stoch High + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5387: Stoch %K > 85 + EMA ���� + SMA ���� */
    static strategy5387(ind) {
        const match = ind.stochastic?.k > 85 && ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50;
        return { id: 5387, name: 'Stoch High + Double MA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5388: Stoch ���� + ��??< EMA20 */
    static strategy5388(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.price < ind.ema20;
        return { id: 5388, name: 'Stoch Dead + Price Below EMA20', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5389: Stoch %K > 75 + ��??> EMA20 (???? + MACD ??�� */
    static strategy5389(ind) {
        const match = ind.stochastic?.k > 75 && ind.price > ind.ema20 && ind.macd?.histogram < 0;
        return { id: 5389, name: 'Stoch High + Price Above EMA + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5390: Stoch + MACD + BB ??��??����� */
    static strategy5390(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position < 55;
        return { id: 5390, name: 'Stoch MACD BB Triple Bearish', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5391: Stoch + MACD + EMA ??��??���� */
    static strategy5391(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50;
        return { id: 5391, name: 'Stoch MACD EMA Triple Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5392: Stoch 80+ + BB 75+ + EMA ���� */
    static strategy5392(ind) {
        const match = ind.stochastic?.k > 80 && ind.bollingerBands?.position > 75 && ind.ema20 < ind.ema50;
        return { id: 5392, name: 'Stoch BB High + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5393: Stoch ���� + MACD ���� + RSI > 55 */
    static strategy5393(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.macd?.MACD < ind.macd?.signal && ind.rsi > 55;
        return { id: 5393, name: 'Stoch MACD Dead + RSI High', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5394: Stoch + RSI + BB ??��? ���ż�*/
    static strategy5394(ind) {
        const match = ind.stochastic?.k > 80 && ind.rsi > 65 && ind.bollingerBands?.position > 75;
        return { id: 5394, name: 'Stoch RSI BB Triple Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5395: Stoch + RSI + MACD + EMA ���� */
    static strategy5395(ind) {
        const match = ind.stochastic?.k > 75 && ind.rsi > 60 && ind.macd?.histogram < 0 && ind.ema20 < ind.ema50;
        return { id: 5395, name: 'Stoch RSI MACD EMA Quad Signal', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 5396: Stoch �޶� + MACD �޶� + BB �϶� */
    static strategy5396(ind) {
        const kDrop = ind.stochastic?.prevK - ind.stochastic?.k;
        const match = kDrop >= 8 && ind.macd?.histogram < ind.macd?.prevHistogram && ind.bollingerBands?.position < 60;
        return { id: 5396, name: 'Stoch MACD BB All Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5397: Stoch 75-85 + MACD ??�� + BB 55-70 */
    static strategy5397(ind) {
        const match = ind.stochastic?.k >= 75 && ind.stochastic?.k <= 85 && ind.macd?.histogram < 0 &&
                     ind.bollingerBands?.position >= 55 && ind.bollingerBands?.position <= 70;
        return { id: 5397, name: 'Stoch Mid-High + MACD + BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5398: Stoch + RSI + MACD + BB + EMA ??�� ����� */
    static strategy5398(ind) {
        const match = ind.stochastic?.k > 70 && ind.rsi > 55 && ind.macd?.MACD < ind.macd?.signal && 
                     ind.bollingerBands?.position > 50 && ind.ema20 < ind.ema50;
        return { id: 5398, name: 'Penta Indicator Bearish', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** ���� 5399: Stoch ���ż�??Ż + ??ü ��??�϶� Ȯ�� */
    static strategy5399(ind) {
        const stochExit = ind.stochastic?.k < 80 && ind.stochastic?.prevK >= 80;
        const match = stochExit && ind.macd?.histogram < 0 && ind.rsi < ind.prevRsi && ind.bollingerBands?.position < 70;
        return { id: 5399, name: 'Stoch Exit + All Confirm Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5400: Stoch Ȯ��??����� */
    static strategy5400(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.k > 50 && 
                     ind.rsi > 48 && ind.macd?.histogram < 5 && ind.bollingerBands?.position > 45;
        return { id: 5400, name: 'Stoch All-In-One Bearish', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ��� ���� ??�� (5301-5400) */
    static analyzeAll(indicators) {
        return [
            this.strategy5301(indicators), this.strategy5302(indicators), this.strategy5303(indicators),
            this.strategy5304(indicators), this.strategy5305(indicators), this.strategy5306(indicators),
            this.strategy5307(indicators), this.strategy5308(indicators), this.strategy5309(indicators),
            this.strategy5310(indicators), this.strategy5311(indicators), this.strategy5312(indicators),
            this.strategy5313(indicators), this.strategy5314(indicators), this.strategy5315(indicators),
            this.strategy5316(indicators), this.strategy5317(indicators), this.strategy5318(indicators),
            this.strategy5319(indicators), this.strategy5320(indicators), this.strategy5321(indicators),
            this.strategy5322(indicators), this.strategy5323(indicators), this.strategy5324(indicators),
            this.strategy5325(indicators), this.strategy5326(indicators), this.strategy5327(indicators),
            this.strategy5328(indicators), this.strategy5329(indicators), this.strategy5330(indicators),
            this.strategy5331(indicators), this.strategy5332(indicators), this.strategy5333(indicators),
            this.strategy5334(indicators), this.strategy5335(indicators), this.strategy5336(indicators),
            this.strategy5337(indicators), this.strategy5338(indicators), this.strategy5339(indicators),
            this.strategy5340(indicators), this.strategy5341(indicators), this.strategy5342(indicators),
            this.strategy5343(indicators), this.strategy5344(indicators), this.strategy5345(indicators),
            this.strategy5346(indicators), this.strategy5347(indicators), this.strategy5348(indicators),
            this.strategy5349(indicators), this.strategy5350(indicators), this.strategy5351(indicators),
            this.strategy5352(indicators), this.strategy5353(indicators), this.strategy5354(indicators),
            this.strategy5355(indicators), this.strategy5356(indicators), this.strategy5357(indicators),
            this.strategy5358(indicators), this.strategy5359(indicators), this.strategy5360(indicators),
            this.strategy5361(indicators), this.strategy5362(indicators), this.strategy5363(indicators),
            this.strategy5364(indicators), this.strategy5365(indicators), this.strategy5366(indicators),
            this.strategy5367(indicators), this.strategy5368(indicators), this.strategy5369(indicators),
            this.strategy5370(indicators), this.strategy5371(indicators), this.strategy5372(indicators),
            this.strategy5373(indicators), this.strategy5374(indicators), this.strategy5375(indicators),
            this.strategy5376(indicators), this.strategy5377(indicators), this.strategy5378(indicators),
            this.strategy5379(indicators), this.strategy5380(indicators), this.strategy5381(indicators),
            this.strategy5382(indicators), this.strategy5383(indicators), this.strategy5384(indicators),
            this.strategy5385(indicators), this.strategy5386(indicators), this.strategy5387(indicators),
            this.strategy5388(indicators), this.strategy5389(indicators), this.strategy5390(indicators),
            this.strategy5391(indicators), this.strategy5392(indicators), this.strategy5393(indicators),
            this.strategy5394(indicators), this.strategy5395(indicators), this.strategy5396(indicators),
            this.strategy5397(indicators), this.strategy5398(indicators), this.strategy5399(indicators),
            this.strategy5400(indicators)
        ];
    }
}

