/**
 * DOWN ���� ���� (ID: 5026-5100)
 * ���� ���� �Ķ����� ����- RSI, MACD �Ӱ谪����
 */

export class StrategiesDown5026 {
    
    // ==================== RSI �Ӱ谪����(5026-5050) ====================
    
    /** ���� 5026: RSI ���ż�80 + MACD ���� */
    static strategy5026(ind) {
        const match = ind.rsi > 80 && ind.macd?.histogram < 0 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5026, name: 'RSI Overbought 80 + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5027: RSI ���ż�75 + MACD ���� */
    static strategy5027(ind) {
        const match = ind.rsi > 75 && ind.macd?.histogram < 0 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5027, name: 'RSI Overbought 75 + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5028: RSI ���ż�72 + MACD ���� */
    static strategy5028(ind) {
        const match = ind.rsi > 72 && ind.macd?.histogram < 0 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5028, name: 'RSI Overbought 72 + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5029: RSI ���ż�68 + MACD ���� */
    static strategy5029(ind) {
        const match = ind.rsi > 68 && ind.macd?.histogram < 0 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5029, name: 'RSI Overbought 68 + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5030: RSI ���ż�65 + MACD ���� */
    static strategy5030(ind) {
        const match = ind.rsi > 65 && ind.macd?.histogram < 0 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5030, name: 'RSI Overbought 65 + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5031: RSI ���ż�80 + EMA ���� */
    static strategy5031(ind) {
        const match = ind.rsi > 80 && ind.ema20 < ind.ema50;
        return { id: 5031, name: 'RSI Overbought 80 + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5032: RSI ���ż�75 + EMA ���� */
    static strategy5032(ind) {
        const match = ind.rsi > 75 && ind.ema20 < ind.ema50;
        return { id: 5032, name: 'RSI Overbought 75 + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5033: RSI ���ż�72 + EMA ���� */
    static strategy5033(ind) {
        const match = ind.rsi > 72 && ind.ema20 < ind.ema50;
        return { id: 5033, name: 'RSI Overbought 72 + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5034: RSI ���ż�68 + EMA ���� */
    static strategy5034(ind) {
        const match = ind.rsi > 68 && ind.ema20 < ind.ema50;
        return { id: 5034, name: 'RSI Overbought 68 + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5035: RSI ���ż�65 + EMA ���� */
    static strategy5035(ind) {
        const match = ind.rsi > 65 && ind.ema20 < ind.ema50;
        return { id: 5035, name: 'RSI Overbought 65 + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5036: RSI 80 ??�� ??�� (�ش�? ���ż� */
    static strategy5036(ind) {
        const match = ind.rsi > 80;
        return { id: 5036, name: 'RSI Extreme Overbought 80', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5037: RSI 78 ??�� ??�� */
    static strategy5037(ind) {
        const match = ind.rsi > 78;
        return { id: 5037, name: 'RSI Extreme Overbought 78', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5038: RSI 75 ??�� + BB �ش� 70% */
    static strategy5038(ind) {
        const match = ind.rsi > 75 && ind.bollingerBands?.position > 70;
        return { id: 5038, name: 'RSI 75 + BB Upper 70', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5039: RSI 72 ??�� + BB �ش� 75% */
    static strategy5039(ind) {
        const match = ind.rsi > 72 && ind.bollingerBands?.position > 75;
        return { id: 5039, name: 'RSI 72 + BB Upper 75', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5040: RSI 70 ??�� + BB �ش� 80% */
    static strategy5040(ind) {
        const match = ind.rsi > 70 && ind.bollingerBands?.position > 80;
        return { id: 5040, name: 'RSI 70 + BB Upper 80', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5041: RSI 68 ??�� + BB �ش� 85% */
    static strategy5041(ind) {
        const match = ind.rsi > 68 && ind.bollingerBands?.position > 85;
        return { id: 5041, name: 'RSI 68 + BB Upper 85', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5042: RSI 65 ??�� + BB �ش� 90% */
    static strategy5042(ind) {
        const match = ind.rsi > 65 && ind.bollingerBands?.position > 90;
        return { id: 5042, name: 'RSI 65 + BB Upper 90', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5043: RSI �϶� 55??5 + MACD ??�� */
    static strategy5043(ind) {
        const match = ind.rsi >= 45 && ind.rsi <= 55 && ind.macd?.histogram < 0;
        return { id: 5043, name: 'RSI Falling 55-45 + MACD Negative', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5044: RSI �϶� 58??8 + MACD ??�� */
    static strategy5044(ind) {
        const match = ind.rsi >= 48 && ind.rsi <= 58 && ind.macd?.histogram < 0;
        return { id: 5044, name: 'RSI Falling 58-48 + MACD Negative', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5045: RSI �϶� 60??0 + MACD ���� */
    static strategy5045(ind) {
        const match = ind.rsi >= 50 && ind.rsi <= 60 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5045, name: 'RSI Falling 60-50 + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5046: RSI �϶� 62??2 + EMA ���� */
    static strategy5046(ind) {
        const match = ind.rsi >= 52 && ind.rsi <= 62 && ind.ema20 < ind.ema50;
        return { id: 5046, name: 'RSI Falling 62-52 + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5047: RSI �϶� 65??5 + EMA ���� + MACD ??�� */
    static strategy5047(ind) {
        const match = ind.rsi >= 55 && ind.rsi <= 65 && ind.ema20 < ind.ema50 && ind.macd?.histogram < 0;
        return { id: 5047, name: 'RSI Weak 65-55 + EMA + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5048: RSI 60-50 �϶� + MACD ���� + �����϶� (5045�� ����ȭ) */
    static strategy5048(ind) {
        const match = ind.rsi >= 50 && ind.rsi <= 60 && ind.macd?.MACD < ind.macd?.signal && ind.close < ind.open;
        return { id: 5048, name: 'RSI Decline 60-50 + MACD Dead + Red', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** 전략 5049: RSI 62-52 하락 + EMA 데드 + MACD 음수 (5046과 차별화) */
    static strategy5049(ind) {
        const match = ind.rsi >= 52 && ind.rsi <= 62 && ind.ema20 < ind.ema50 && ind.macd?.histogram < 0;
        return { id: 5049, name: 'RSI Decline 62-52 + EMA Dead + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5050: RSI 65-55 �϶� + BB �߰� ??�� */
    static strategy5050(ind) {
        const match = ind.rsi >= 55 && ind.rsi <= 65 && ind.bollingerBands?.position < 60;
        return { id: 5050, name: 'RSI Decline 65-55 + BB Below Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 66 : 0 };
    }
    
    // ==================== MACD �Ӱ谪����(5051-5075) ====================
    
    /** ���� 5051: MACD ����??��??< -5 + RSI > 60 */
    static strategy5051(ind) {
        const match = ind.macd?.histogram < -5 && ind.rsi > 60;
        return { id: 5051, name: 'MACD Hist -5 + RSI Above 60', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5052: MACD ����??��??< -10 + RSI > 55 */
    static strategy5052(ind) {
        const match = ind.macd?.histogram < -10 && ind.rsi > 55;
        return { id: 5052, name: 'MACD Hist -10 + RSI Above 55', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5053: MACD ����??��??< -15 + RSI > 50 */
    static strategy5053(ind) {
        const match = ind.macd?.histogram < -15 && ind.rsi > 50;
        return { id: 5053, name: 'MACD Hist -15 + RSI Above 50', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5054: MACD ����??��??< -20 + RSI 45-55 */
    static strategy5054(ind) {
        const match = ind.macd?.histogram < -20 && ind.rsi >= 45 && ind.rsi <= 55;
        return { id: 5054, name: 'MACD Hist -20 + RSI 45-55', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5055: MACD ����??��??< -30 + RSI 40-50 */
    static strategy5055(ind) {
        const match = ind.macd?.histogram < -30 && ind.rsi >= 40 && ind.rsi <= 50;
        return { id: 5055, name: 'MACD Hist -30 + RSI 40-50', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5056: MACD ����??��??< -50 + EMA ���� */
    static strategy5056(ind) {
        const match = ind.macd?.histogram < -50 && ind.ema20 < ind.ema50;
        return { id: 5056, name: 'MACD Hist Strong -50 + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5057: MACD Ȯ�� < 0 + ����??��??< 0 + RSI > 45 */
    static strategy5057(ind) {
        const match = ind.macd?.MACD < 0 && ind.macd?.histogram < 0 && ind.rsi > 45;
        return { id: 5057, name: 'MACD Negative Zone + RSI Above 45', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5058: MACD Ȯ�� < 0 + ����??��??< -10 + RSI > 40 */
    static strategy5058(ind) {
        const match = ind.macd?.MACD < 0 && ind.macd?.histogram < -10 && ind.rsi > 40;
        return { id: 5058, name: 'MACD Negative + Hist -10 + RSI Above 40', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5059: MACD Ȯ�� < -10 + ����??��??*/
    static strategy5059(ind) {
        const match = ind.macd?.MACD < -10 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5059, name: 'MACD Line -10 + Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5060: MACD Ȯ�� < -20 + ����??��??*/
    static strategy5060(ind) {
        const match = ind.macd?.MACD < -20 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5060, name: 'MACD Line -20 + Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5061: MACD Ȯ�� < -50 + ����??��??+ EMA ���� */
    static strategy5061(ind) {
        const match = ind.macd?.MACD < -50 && ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50;
        return { id: 5061, name: 'MACD Line -50 + Dead + EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5062: MACD ??��????��? ���� (histogram -5~0) */
    static strategy5062(ind) {
        const match = ind.macd?.histogram < 0 && ind.macd?.histogram > -5 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5062, name: 'MACD Just Crossed Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5063: MACD ??��????��? ���� (histogram -10~0) */
    static strategy5063(ind) {
        const match = ind.macd?.histogram < 0 && ind.macd?.histogram > -10 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5063, name: 'MACD Recent Dead 0 to -10', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5064: MACD 0????�� ���� (MACD -20~0) */
    static strategy5064(ind) {
        const match = ind.macd?.MACD < 0 && ind.macd?.MACD > -20 && ind.macd?.histogram < 0;
        return { id: 5064, name: 'MACD Zero Break -20 to 0', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5065: MACD 0????�� ���� (MACD -50~0) */
    static strategy5065(ind) {
        const match = ind.macd?.MACD < 0 && ind.macd?.MACD > -50 && ind.macd?.histogram < 0;
        return { id: 5065, name: 'MACD Zero Break -50 to 0', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5066: MACD ??��??�� �϶� (0~50) + ���� */
    static strategy5066(ind) {
        const match = ind.macd?.MACD < 50 && ind.macd?.MACD > 0 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5066, name: 'MACD Decline 0 to 50 + Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5067: MACD ??��??�� �϶� (50~100) + ���� */
    static strategy5067(ind) {
        const match = ind.macd?.MACD < 100 && ind.macd?.MACD > 50 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5067, name: 'MACD Decline 50 to 100 + Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ���� 5068: MACD ����??��??�϶� ��ȯ (prevHist > 0, hist < 0) */
    static strategy5068(ind) {
        const match = ind.macd?.prevHistogram > 0 && ind.macd?.histogram < 0;
        return { id: 5068, name: 'MACD Histogram Turn Negative', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5069: MACD ����??��??�϶� ��ȯ + RSI > 50 */
    static strategy5069(ind) {
        const match = ind.macd?.prevHistogram > 0 && ind.macd?.histogram < 0 && ind.rsi > 50;
        return { id: 5069, name: 'MACD Hist Turn + RSI Above 50', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5070: MACD ����??��??�϶� ��ȯ + EMA ���� */
    static strategy5070(ind) {
        const match = ind.macd?.prevHistogram > 0 && ind.macd?.histogram < 0 && ind.ema20 < ind.ema50;
        return { id: 5070, name: 'MACD Hist Turn + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5071: MACD ���� + BB �ش� 70% */
    static strategy5071(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 70;
        return { id: 5071, name: 'MACD Dead + BB Upper 70', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5072: MACD ���� + BB �ش� 75% */
    static strategy5072(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 75;
        return { id: 5072, name: 'MACD Dead + BB Upper 75', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5073: MACD ���� + BB �ش� 80% */
    static strategy5073(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 80;
        return { id: 5073, name: 'MACD Dead + BB Upper 80', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5074: MACD ����??��? ���� (hist < prevHist) + RSI �϶� */
    static strategy5074(ind) {
        const histDecreasing = ind.macd?.histogram < (ind.macd?.prevHistogram || 0);
        const match = histDecreasing && ind.macd?.histogram < 0 && ind.rsi >= 40 && ind.rsi <= 60;
        return { id: 5074, name: 'MACD Hist Decreasing + RSI 40-60', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5075: MACD ����??��? ���� + EMA ���� */
    static strategy5075(ind) {
        const histDecreasing = ind.macd?.histogram < (ind.macd?.prevHistogram || 0);
        const match = histDecreasing && ind.macd?.histogram < 0 && ind.ema20 < ind.ema50;
        return { id: 5075, name: 'MACD Hist Decreasing + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    // ==================== BB/EMA �Ӱ谪����(5076-5100) ====================
    
    /** ���� 5076: BB �ش� 95% + RSI > 70 */
    static strategy5076(ind) {
        const match = ind.bollingerBands?.position > 95 && ind.rsi > 70;
        return { id: 5076, name: 'BB Upper 95 + RSI Overbought 70', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5077: BB �ش� 90% + RSI > 65 */
    static strategy5077(ind) {
        const match = ind.bollingerBands?.position > 90 && ind.rsi > 65;
        return { id: 5077, name: 'BB Upper 90 + RSI Overbought 65', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5078: BB �ش� 85% + RSI > 60 */
    static strategy5078(ind) {
        const match = ind.bollingerBands?.position > 85 && ind.rsi > 60;
        return { id: 5078, name: 'BB Upper 85 + RSI Above 60', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5079: BB �ش� 80% + MACD ���� */
    static strategy5079(ind) {
        const match = ind.bollingerBands?.position > 80 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5079, name: 'BB Upper 80 + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5080: BB �ش� 75% + MACD ??�� */
    static strategy5080(ind) {
        const match = ind.bollingerBands?.position > 75 && ind.macd?.histogram < 0;
        return { id: 5080, name: 'BB Upper 75 + MACD Negative', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5081: BB �߰�????Ż (position 48-52) + MACD ??�� */
    static strategy5081(ind) {
        const match = ind.bollingerBands?.position >= 48 && ind.bollingerBands?.position <= 52 && ind.macd?.histogram < 0;
        return { id: 5081, name: 'BB Mid Break Down + MACD Negative', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5082: BB �߰�????�� (position 40-48) + EMA ���� */
    static strategy5082(ind) {
        const match = ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 48 && ind.ema20 < ind.ema50;
        return { id: 5082, name: 'BB Below Mid + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5083: BB ����??< 2% (??����) + RSI 55-65 */
    static strategy5083(ind) {
        const match = ind.bollingerBands?.bandwidth < 2 && ind.rsi >= 55 && ind.rsi <= 65;
        return { id: 5083, name: 'BB Squeeze + RSI High Neutral', direction: 'DOWN', match: Boolean(match), confidence: match ? 65 : 0 };
    }
    
    /** ���� 5084: BB ����??< 3% (??����) + MACD ���� */
    static strategy5084(ind) {
        const match = ind.bollingerBands?.bandwidth < 3 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5084, name: 'BB Squeeze 3 + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ���� 5085: BB ����??���� (> 4%) + position < 50 */
    static strategy5085(ind) {
        const match = ind.bollingerBands?.bandwidth > 4 && ind.bollingerBands?.position < 50;
        return { id: 5085, name: 'BB Expansion + Below Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5086: BB ����??���� (> 5%) + position < 45 + MACD ??�� */
    static strategy5086(ind) {
        const match = ind.bollingerBands?.bandwidth > 5 && ind.bollingerBands?.position < 45 && ind.macd?.histogram < 0;
        return { id: 5086, name: 'BB Strong Expansion Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5087: EMA20 < EMA50 (??0.1% ??��) + RSI > 40 */
    static strategy5087(ind) {
        const emaGap = ind.ema50 ? (ind.ema50 - ind.ema20) / ind.ema50 : 0;
        const match = emaGap > 0.001 && ind.rsi > 40;
        return { id: 5087, name: 'EMA Gap -0.1% + RSI Above 40', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5088: EMA20 < EMA50 (??0.2% ??��) + RSI > 45 */
    static strategy5088(ind) {
        const emaGap = ind.ema50 ? (ind.ema50 - ind.ema20) / ind.ema50 : 0;
        const match = emaGap > 0.002 && ind.rsi > 45;
        return { id: 5088, name: 'EMA Gap -0.2% + RSI Above 45', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5089: EMA20 < EMA50 (??0.3% ??��) + MACD ??�� */
    static strategy5089(ind) {
        const emaGap = ind.ema50 ? (ind.ema50 - ind.ema20) / ind.ema50 : 0;
        const match = emaGap > 0.003 && ind.macd?.histogram < 0;
        return { id: 5089, name: 'EMA Gap -0.3% + MACD Negative', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5090: EMA20 < EMA50 (??0.5% ??��) + MACD ���� */
    static strategy5090(ind) {
        const emaGap = ind.ema50 ? (ind.ema50 - ind.ema20) / ind.ema50 : 0;
        const match = emaGap > 0.005 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5090, name: 'EMA Gap -0.5% + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5091: ��??< EMA20 (0.5% ??��) + RSI 40-55 */
    static strategy5091(ind) {
        const priceBelowEMA = ind.ema20 ? (ind.ema20 - ind.price) / ind.ema20 : 0;
        const match = priceBelowEMA > 0.005 && ind.rsi >= 40 && ind.rsi <= 55;
        return { id: 5091, name: 'Price Below EMA20 0.5% + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5092: ��??< EMA20 (1% ??��) + MACD ??�� */
    static strategy5092(ind) {
        const priceBelowEMA = ind.ema20 ? (ind.ema20 - ind.price) / ind.ema20 : 0;
        const match = priceBelowEMA > 0.01 && ind.macd?.histogram < 0;
        return { id: 5092, name: 'Price Below EMA20 1% + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5093: ��? EMA20 ���� (��0.2%) + EMA ���� */
    static strategy5093(ind) {
        const nearEMA = ind.ema20 ? Math.abs(ind.price - ind.ema20) / ind.ema20 : 1;
        const match = nearEMA < 0.002 && ind.ema20 < ind.ema50;
        return { id: 5093, name: 'Price Near EMA20 + Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5094: ��? EMA20 ���� (��0.5%) + MACD ���� */
    static strategy5094(ind) {
        const nearEMA = ind.ema20 ? Math.abs(ind.price - ind.ema20) / ind.ema20 : 1;
        const match = nearEMA < 0.005 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5094, name: 'Price Near EMA20 0.5% + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5095: ��??< EMA50 + ��??> EMA20 (�ݵ� ??��) + MACD ??�� */
    static strategy5095(ind) {
        const match = ind.price < ind.ema50 && ind.price > ind.ema20 && ind.macd?.histogram < 0;
        return { id: 5095, name: 'EMA Pullback Fail Zone + MACD Negative', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5096: SMA20 < SMA50 + RSI 40-55 */
    static strategy5096(ind) {
        const match = ind.sma20 < ind.sma50 && ind.rsi >= 40 && ind.rsi <= 55;
        return { id: 5096, name: 'SMA Dead + RSI 40-55', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5097: SMA20 < SMA50 + MACD ���� */
    static strategy5097(ind) {
        const match = ind.sma20 < ind.sma50 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5097, name: 'SMA Dead + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5098: EMA ���� + SMA ���� (??�� Ȯ��) */
    static strategy5098(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50;
        return { id: 5098, name: 'Double Dead EMA + SMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5099: EMA ���� + SMA ���� + RSI > 40 */
    static strategy5099(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && ind.rsi > 40;
        return { id: 5099, name: 'Double Dead + RSI Above 40', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5100: EMA ���� + SMA ���� + MACD ??�� + RSI 35-55 */
    static strategy5100(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && ind.macd?.histogram < 0 && ind.rsi >= 35 && ind.rsi <= 55;
        return { id: 5100, name: 'Full Dead Alignment', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� ���� ??�� (5026-5100) */
    static analyzeAll(indicators) {
        return [
            this.strategy5026(indicators), this.strategy5027(indicators), this.strategy5028(indicators),
            this.strategy5029(indicators), this.strategy5030(indicators), this.strategy5031(indicators),
            this.strategy5032(indicators), this.strategy5033(indicators), this.strategy5034(indicators),
            this.strategy5035(indicators), this.strategy5036(indicators), this.strategy5037(indicators),
            this.strategy5038(indicators), this.strategy5039(indicators), this.strategy5040(indicators),
            this.strategy5041(indicators), this.strategy5042(indicators), this.strategy5043(indicators),
            this.strategy5044(indicators), this.strategy5045(indicators), this.strategy5046(indicators),
            this.strategy5047(indicators), this.strategy5048(indicators), this.strategy5049(indicators),
            this.strategy5050(indicators), this.strategy5051(indicators), this.strategy5052(indicators),
            this.strategy5053(indicators), this.strategy5054(indicators), this.strategy5055(indicators),
            this.strategy5056(indicators), this.strategy5057(indicators), this.strategy5058(indicators),
            this.strategy5059(indicators), this.strategy5060(indicators), this.strategy5061(indicators),
            this.strategy5062(indicators), this.strategy5063(indicators), this.strategy5064(indicators),
            this.strategy5065(indicators), this.strategy5066(indicators), this.strategy5067(indicators),
            this.strategy5068(indicators), this.strategy5069(indicators), this.strategy5070(indicators),
            this.strategy5071(indicators), this.strategy5072(indicators), this.strategy5073(indicators),
            this.strategy5074(indicators), this.strategy5075(indicators), this.strategy5076(indicators),
            this.strategy5077(indicators), this.strategy5078(indicators), this.strategy5079(indicators),
            this.strategy5080(indicators), this.strategy5081(indicators), this.strategy5082(indicators),
            this.strategy5083(indicators), this.strategy5084(indicators), this.strategy5085(indicators),
            this.strategy5086(indicators), this.strategy5087(indicators), this.strategy5088(indicators),
            this.strategy5089(indicators), this.strategy5090(indicators), this.strategy5091(indicators),
            this.strategy5092(indicators), this.strategy5093(indicators), this.strategy5094(indicators),
            this.strategy5095(indicators), this.strategy5096(indicators), this.strategy5097(indicators),
            this.strategy5098(indicators), this.strategy5099(indicators), this.strategy5100(indicators)
        ];
    }
}

