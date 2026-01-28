/**
 * DOWN ���� ���� (ID: 5101-5300)
 * �Ķ���� ������� + ??��????�� ����
 * 5101-5125: MACD �Ӱ谪�������
 * 5126-5175: BB �Ķ���� ����
 * 5176-5225: EMA ���� ����
 * 5226-5275: SMA ���� ����
 * 5276-5300: ���� �Ķ����
 */

export class StrategiesDown5101 {
    
    // ==================== MACD �Ӱ谪������� (5101-5125) ====================
    
    /** ���� 5101: MACD ���� + RSI 75 + BB �ش� 85% */
    static strategy5101(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.rsi > 75 && ind.bollingerBands?.position > 85;
        return { id: 5101, name: 'Triple Overbought MACD RSI75 BB85', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 5102: MACD ���� + RSI 72 + BB �ش� 80% */
    static strategy5102(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.rsi > 72 && ind.bollingerBands?.position > 80;
        return { id: 5102, name: 'Triple Overbought MACD RSI72 BB80', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5103: MACD ���� + RSI 70 + BB �ش� 75% */
    static strategy5103(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.rsi > 70 && ind.bollingerBands?.position > 75;
        return { id: 5103, name: 'Triple Overbought MACD RSI70 BB75', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5104: MACD ���� + RSI 68 + BB �ش� 70% */
    static strategy5104(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.rsi > 68 && ind.bollingerBands?.position > 70;
        return { id: 5104, name: 'Triple Overbought MACD RSI68 BB70', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5105: MACD ���� + RSI 65 + BB �ش� 65% */
    static strategy5105(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.rsi > 65 && ind.bollingerBands?.position > 65;
        return { id: 5105, name: 'Triple Overbought MACD RSI65 BB65', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5106: MACD ���� + EMA ���� + BB �ش� 85% */
    static strategy5106(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50 && ind.bollingerBands?.position > 85;
        return { id: 5106, name: 'Triple Dead MACD EMA BB85', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 5107: MACD ���� + EMA ���� + BB �ش� 80% */
    static strategy5107(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50 && ind.bollingerBands?.position > 80;
        return { id: 5107, name: 'Triple Dead MACD EMA BB80', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5108: MACD ���� + EMA ���� + BB �ش� 75% */
    static strategy5108(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50 && ind.bollingerBands?.position > 75;
        return { id: 5108, name: 'Triple Dead MACD EMA BB75', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5109: MACD hist < -10 + RSI 60-70 + EMA ���� */
    static strategy5109(ind) {
        const match = ind.macd?.histogram < -10 && ind.rsi >= 60 && ind.rsi <= 70 && ind.ema20 < ind.ema50;
        return { id: 5109, name: 'Strong Down MACD10 RSI EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5110: MACD hist < -15 + RSI 55-65 + EMA ���� */
    static strategy5110(ind) {
        const match = ind.macd?.histogram < -15 && ind.rsi >= 55 && ind.rsi <= 65 && ind.ema20 < ind.ema50;
        return { id: 5110, name: 'Strong Down MACD15 RSI EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5111: MACD hist < -20 + RSI 50-60 + EMA ���� */
    static strategy5111(ind) {
        const match = ind.macd?.histogram < -20 && ind.rsi >= 50 && ind.rsi <= 60 && ind.ema20 < ind.ema50;
        return { id: 5111, name: 'Strong Down MACD20 RSI EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5112: BB �ش� 95% + MACD hist < 0 + RSI > 65 */
    static strategy5112(ind) {
        const match = ind.bollingerBands?.position > 95 && ind.macd?.histogram < 0 && ind.rsi > 65;
        return { id: 5112, name: 'BB Extreme High + MACD + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5113: BB �ش� 90% + MACD hist < -5 + RSI > 60 */
    static strategy5113(ind) {
        const match = ind.bollingerBands?.position > 90 && ind.macd?.histogram < -5 && ind.rsi > 60;
        return { id: 5113, name: 'BB High 90 + MACD5 + RSI60', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5114: BB �ش� 85% + MACD hist < -10 + RSI > 55 */
    static strategy5114(ind) {
        const match = ind.bollingerBands?.position > 85 && ind.macd?.histogram < -10 && ind.rsi > 55;
        return { id: 5114, name: 'BB High 85 + MACD10 + RSI55', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5115: BB �ش� 80% + MACD hist < -15 + RSI > 50 */
    static strategy5115(ind) {
        const match = ind.bollingerBands?.position > 80 && ind.macd?.histogram < -15 && ind.rsi > 50;
        return { id: 5115, name: 'BB High 80 + MACD15 + RSI50', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5116: EMA ??-0.1% + MACD ���� + RSI 55-70 */
    static strategy5116(ind) {
        const emaGap = ind.ema50 ? (ind.ema50 - ind.ema20) / ind.ema50 : 0;
        const match = emaGap > 0.001 && ind.macd?.MACD < ind.macd?.signal && ind.rsi >= 55 && ind.rsi <= 70;
        return { id: 5116, name: 'EMA Gap -0.1 + MACD Dead + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5117: EMA ??-0.2% + MACD ���� + RSI 50-65 */
    static strategy5117(ind) {
        const emaGap = ind.ema50 ? (ind.ema50 - ind.ema20) / ind.ema50 : 0;
        const match = emaGap > 0.002 && ind.macd?.MACD < ind.macd?.signal && ind.rsi >= 50 && ind.rsi <= 65;
        return { id: 5117, name: 'EMA Gap -0.2 + MACD Dead + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5118: EMA ??-0.3% + MACD ���� + BB < 50 */
    static strategy5118(ind) {
        const emaGap = ind.ema50 ? (ind.ema50 - ind.ema20) / ind.ema50 : 0;
        const match = emaGap > 0.003 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position < 50;
        return { id: 5118, name: 'EMA Gap -0.3 + MACD Dead + BB Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5119: EMA ??-0.5% + MACD hist < -20 + RSI 40-55 */
    static strategy5119(ind) {
        const emaGap = ind.ema50 ? (ind.ema50 - ind.ema20) / ind.ema50 : 0;
        const match = emaGap > 0.005 && ind.macd?.histogram < -20 && ind.rsi >= 40 && ind.rsi <= 55;
        return { id: 5119, name: 'EMA Gap -0.5 + MACD Strong + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5120: ��??< EMA20 0.3% + ��??< EMA50 + MACD ??�� */
    static strategy5120(ind) {
        const belowEMA20 = ind.ema20 ? (ind.ema20 - ind.price) / ind.ema20 > 0.003 : false;
        const belowEMA50 = ind.price < ind.ema50;
        const match = belowEMA20 && belowEMA50 && ind.macd?.histogram < 0;
        return { id: 5120, name: 'Price Below Both EMA + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5121: RSI 55-65 + MACD ��ȯ �϶� + BB 50-70 */
    static strategy5121(ind) {
        const match = ind.rsi >= 55 && ind.rsi <= 65 && ind.macd?.prevHistogram > 0 && ind.macd?.histogram < 0 && 
                     ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 70;
        return { id: 5121, name: 'Decline Zone RSI MACD BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5122: RSI 50-60 + MACD ��ȯ �϶� + EMA ���� */
    static strategy5122(ind) {
        const match = ind.rsi >= 50 && ind.rsi <= 60 && ind.macd?.prevHistogram > 0 && ind.macd?.histogram < 0 && ind.ema20 < ind.ema50;
        return { id: 5122, name: 'Decline Zone RSI MACD EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5123: RSI 45-55 + MACD hist -5~-20 + BB 40-60 */
    static strategy5123(ind) {
        const match = ind.rsi >= 45 && ind.rsi <= 55 && ind.macd?.histogram >= -20 && ind.macd?.histogram <= -5 &&
                     ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 60;
        return { id: 5123, name: 'Neutral Bearish Zone', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5124: RSI 60-70 + MACD ���� + BB 60-80 */
    static strategy5124(ind) {
        const match = ind.rsi >= 60 && ind.rsi <= 70 && ind.macd?.MACD < ind.macd?.signal &&
                     ind.bollingerBands?.position >= 60 && ind.bollingerBands?.position <= 80;
        return { id: 5124, name: 'High Zone Reversal Start', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5125: RSI 65-75 + MACD hist < -10 + EMA ���� */
    static strategy5125(ind) {
        const match = ind.rsi >= 65 && ind.rsi <= 75 && ind.macd?.histogram < -10 && ind.ema20 < ind.ema50;
        return { id: 5125, name: 'Overbought Reversal Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    // ==================== BB �Ķ���� ����(5126-5175) ====================
    
    /** ���� 5126: BB ���??1.5 ??�� (�ش� ??����) + RSI > 60 */
    static strategy5126(ind) {
        const match = ind.bollingerBands?.bandwidth < 1.5 && ind.rsi > 60;
        return { id: 5126, name: 'BB Extreme Squeeze + RSI High', direction: 'DOWN', match: Boolean(match), confidence: match ? 65 : 0 };
    }
    
    /** ���� 5127: BB ���??2 ??�� + RSI > 65 + MACD ??�� */
    static strategy5127(ind) {
        const match = ind.bollingerBands?.bandwidth < 2 && ind.rsi > 65 && ind.macd?.histogram < 0;
        return { id: 5127, name: 'BB Squeeze + RSI High + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5128: BB ���??2.5 ??�� + MACD ���� */
    static strategy5128(ind) {
        const match = ind.bollingerBands?.bandwidth < 2.5 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5128, name: 'BB Squeeze 2.5 + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ���� 5129: BB ���??3 ??�� + EMA ���� + RSI > 55 */
    static strategy5129(ind) {
        const match = ind.bollingerBands?.bandwidth < 3 && ind.ema20 < ind.ema50 && ind.rsi > 55;
        return { id: 5129, name: 'BB Squeeze 3 + EMA Dead + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 66 : 0 };
    }
    
    /** ���� 5130: BB ���??> 4 (����) + position < 40 */
    static strategy5130(ind) {
        const match = ind.bollingerBands?.bandwidth > 4 && ind.bollingerBands?.position < 40;
        return { id: 5130, name: 'BB Expansion + Below Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5131: BB ���??> 5 + position < 35 + MACD ??�� */
    static strategy5131(ind) {
        const match = ind.bollingerBands?.bandwidth > 5 && ind.bollingerBands?.position < 35 && ind.macd?.histogram < 0;
        return { id: 5131, name: 'BB Strong Expansion Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5132: BB ���??> 6 + position < 30 + EMA ���� */
    static strategy5132(ind) {
        const match = ind.bollingerBands?.bandwidth > 6 && ind.bollingerBands?.position < 30 && ind.ema20 < ind.ema50;
        return { id: 5132, name: 'BB Extreme Expansion Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5133: BB position 90-95 + RSI 65-75 */
    static strategy5133(ind) {
        const match = ind.bollingerBands?.position >= 90 && ind.bollingerBands?.position <= 95 && ind.rsi >= 65 && ind.rsi <= 75;
        return { id: 5133, name: 'BB Top Zone + RSI Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5134: BB position 85-90 + RSI 60-70 + MACD ���� */
    static strategy5134(ind) {
        const match = ind.bollingerBands?.position >= 85 && ind.bollingerBands?.position <= 90 && ind.rsi >= 60 && ind.rsi <= 70 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5134, name: 'BB High Zone + RSI + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5135: BB position 80-85 + RSI 55-65 + EMA ���� */
    static strategy5135(ind) {
        const match = ind.bollingerBands?.position >= 80 && ind.bollingerBands?.position <= 85 && ind.rsi >= 55 && ind.rsi <= 65 && ind.ema20 < ind.ema50;
        return { id: 5135, name: 'BB Upper Zone + RSI + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5136: BB position 75-80 + MACD hist < -10 */
    static strategy5136(ind) {
        const match = ind.bollingerBands?.position >= 75 && ind.bollingerBands?.position <= 80 && ind.macd?.histogram < -10;
        return { id: 5136, name: 'BB Mid-High + MACD Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5137: BB position 70-75 + MACD hist < -15 + RSI > 50 */
    static strategy5137(ind) {
        const match = ind.bollingerBands?.position >= 70 && ind.bollingerBands?.position <= 75 && ind.macd?.histogram < -15 && ind.rsi > 50;
        return { id: 5137, name: 'BB Mid-High + MACD Strong Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5138: BB position 65-70 + EMA ���� + RSI 45-55 */
    static strategy5138(ind) {
        const match = ind.bollingerBands?.position >= 65 && ind.bollingerBands?.position <= 70 && ind.ema20 < ind.ema50 && ind.rsi >= 45 && ind.rsi <= 55;
        return { id: 5138, name: 'BB Mid Zone + EMA Dead + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5139: BB position 60-65 + MACD ���� + RSI 40-50 */
    static strategy5139(ind) {
        const match = ind.bollingerBands?.position >= 60 && ind.bollingerBands?.position <= 65 && ind.macd?.MACD < ind.macd?.signal && ind.rsi >= 40 && ind.rsi <= 50;
        return { id: 5139, name: 'BB Mid Zone Breakdown', direction: 'DOWN', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ���� 5140: BB position 55-60 + MACD hist < -20 */
    static strategy5140(ind) {
        const match = ind.bollingerBands?.position >= 55 && ind.bollingerBands?.position <= 60 && ind.macd?.histogram < -20;
        return { id: 5140, name: 'BB Mid Breaking Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5141: BB position �ش� + ���??���� ���� */
    static strategy5141(ind) {
        const match = ind.bollingerBands?.position > 80 && ind.bollingerBands?.bandwidth >= 3 && ind.bollingerBands?.bandwidth <= 5;
        return { id: 5141, name: 'BB Top + Expansion Starting', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** 전략 5142: BB 상단 접촉 + RSI 극단 75+ (5076과 차별화) */
    static strategy5142(ind) {
        const match = ind.bollingerBands?.position > 95 && ind.rsi > 75;
        return { id: 5142, name: 'BB Touch Upper + RSI Extreme 75', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5143: BB �ش� ??ġ + MACD ��ȭ */
    static strategy5143(ind) {
        const match = ind.bollingerBands?.position > 95 && ind.macd?.histogram < 20;
        return { id: 5143, name: 'BB Touch Upper + MACD Weakening', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5144: BB position �϶� (90??0) + RSI �϶� */
    static strategy5144(ind) {
        const match = ind.bollingerBands?.position >= 80 && ind.bollingerBands?.position <= 90 && ind.rsi >= 55 && ind.rsi <= 65;
        return { id: 5144, name: 'BB Falling From Top + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5145: BB position �϶� (85??5) + MACD ���� */
    static strategy5145(ind) {
        const match = ind.bollingerBands?.position >= 75 && ind.bollingerBands?.position <= 85 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5145, name: 'BB Falling + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5146: BB �߰�????Ż + MACD ??�� + RSI < 55 */
    static strategy5146(ind) {
        const match = ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 55 && ind.macd?.histogram < 0 && ind.rsi > 45;
        return { id: 5146, name: 'BB Mid Break + MACD Neg + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5147: BB ���??��Ȯ??+ ??�� ??�� */
    static strategy5147(ind) {
        const match = ind.bollingerBands?.bandwidth > 5 && ind.bollingerBands?.position < 40 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5147, name: 'BB Breakout Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5148: BB �ش� ��ó + �ŷ�??��ȭ ??��??*/
    static strategy5148(ind) {
        const match = ind.bollingerBands?.position > 85 && ind.macd?.histogram < 0 && ind.rsi >= 60 && ind.rsi <= 70;
        return { id: 5148, name: 'BB Top + Weakening Signal', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5149: BB ??���� ??�� ??�� + RSI 45-55 */
    static strategy5149(ind) {
        const match = ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth <= 4 && ind.bollingerBands?.position < 45 && ind.rsi >= 45 && ind.rsi <= 55;
        return { id: 5149, name: 'BB Squeeze Release Down + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5150: BB ??���� ??�� ??�� + MACD ���� */
    static strategy5150(ind) {
        const match = ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth <= 4 && ind.bollingerBands?.position < 45 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5150, name: 'BB Squeeze Release Down + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5151: BB �ش� 95% + RSI 75+ + MACD ���� */
    static strategy5151(ind) {
        const match = ind.bollingerBands?.position > 95 && ind.rsi > 75 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5151, name: 'BB Extreme + RSI Extreme + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5152: BB �ش� 92% + RSI 72+ + EMA ���� */
    static strategy5152(ind) {
        const match = ind.bollingerBands?.position > 92 && ind.rsi > 72 && ind.ema20 < ind.ema50;
        return { id: 5152, name: 'BB Top + RSI High + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5153: BB �ش� 88% + RSI 68+ + MACD hist < -5 */
    static strategy5153(ind) {
        const match = ind.bollingerBands?.position > 88 && ind.rsi > 68 && ind.macd?.histogram < -5;
        return { id: 5153, name: 'BB High + RSI + MACD Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5154: BB �ش� 85% + RSI 65+ + MACD hist < -10 */
    static strategy5154(ind) {
        const match = ind.bollingerBands?.position > 85 && ind.rsi > 65 && ind.macd?.histogram < -10;
        return { id: 5154, name: 'BB Upper + RSI + MACD Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5155: BB �ش� 82% + RSI 62+ + EMA ���� */
    static strategy5155(ind) {
        const match = ind.bollingerBands?.position > 82 && ind.rsi > 62 && ind.ema20 < ind.ema50;
        return { id: 5155, name: 'BB High-Mid + RSI + EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5156: BB ���??< 2 + position > 75 + RSI > 60 */
    static strategy5156(ind) {
        const match = ind.bollingerBands?.bandwidth < 2 && ind.bollingerBands?.position > 75 && ind.rsi > 60;
        return { id: 5156, name: 'BB Squeeze Top + RSI High', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5157: BB ���??< 2.5 + position > 70 + MACD ���� */
    static strategy5157(ind) {
        const match = ind.bollingerBands?.bandwidth < 2.5 && ind.bollingerBands?.position > 70 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5157, name: 'BB Squeeze Upper + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5158: BB ���??2-3 + position 65-80 + RSI 55-65 */
    static strategy5158(ind) {
        const match = ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth <= 3 && 
                     ind.bollingerBands?.position >= 65 && ind.bollingerBands?.position <= 80 && ind.rsi >= 55 && ind.rsi <= 65;
        return { id: 5158, name: 'BB Neutral-High Consolidation', direction: 'DOWN', match: Boolean(match), confidence: match ? 65 : 0 };
    }
    
    /** ���� 5159: BB ���??3-4 + position 60-75 + MACD ??�� */
    static strategy5159(ind) {
        const match = ind.bollingerBands?.bandwidth >= 3 && ind.bollingerBands?.bandwidth <= 4 &&
                     ind.bollingerBands?.position >= 60 && ind.bollingerBands?.position <= 75 && ind.macd?.histogram < 0;
        return { id: 5159, name: 'BB Normal + Position High + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ���� 5160: BB ���??> 4 + position 50-65 + EMA ���� */
    static strategy5160(ind) {
        const match = ind.bollingerBands?.bandwidth > 4 && ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 65 && ind.ema20 < ind.ema50;
        return { id: 5160, name: 'BB Expanding + Mid-High + EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5161: BB position 50????�� ??�� */
    static strategy5161(ind) {
        const match = ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 52 && ind.macd?.histogram < 0;
        return { id: 5161, name: 'BB Mid Line Break Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5162: BB position 45-55 + RSI 45-55 + MACD ���� */
    static strategy5162(ind) {
        const match = ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 55 && 
                     ind.rsi >= 45 && ind.rsi <= 55 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5162, name: 'BB RSI Neutral + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 66 : 0 };
    }
    
    /** ���� 5163: BB position 40-50 + RSI 40-50 + EMA ���� */
    static strategy5163(ind) {
        const match = ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 50 &&
                     ind.rsi >= 40 && ind.rsi <= 50 && ind.ema20 < ind.ema50;
        return { id: 5163, name: 'BB RSI Low-Neutral + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ���� 5164: BB position 35-45 + MACD hist < -15 */
    static strategy5164(ind) {
        const match = ind.bollingerBands?.position >= 35 && ind.bollingerBands?.position <= 45 && ind.macd?.histogram < -15;
        return { id: 5164, name: 'BB Lower-Mid + MACD Strong Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5165: BB position 30-40 + RSI 35-45 + MACD ���� */
    static strategy5165(ind) {
        const match = ind.bollingerBands?.position >= 30 && ind.bollingerBands?.position <= 40 &&
                     ind.rsi >= 35 && ind.rsi <= 45 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5165, name: 'BB Lower + RSI + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5166: BB position 25-35 + EMA ���� + MACD ??�� */
    static strategy5166(ind) {
        const match = ind.bollingerBands?.position >= 25 && ind.bollingerBands?.position <= 35 && ind.ema20 < ind.ema50 && ind.macd?.histogram < 0;
        return { id: 5166, name: 'BB Low + EMA Dead + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5167: BB position 70-80 + RSI 60-70 (���ż� ����) */
    static strategy5167(ind) {
        const match = ind.bollingerBands?.position >= 70 && ind.bollingerBands?.position <= 80 && ind.rsi >= 60 && ind.rsi <= 70;
        return { id: 5167, name: 'BB High Zone + RSI Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 65 : 0 };
    }
    
    /** ���� 5168: BB �ش� ���� + MACD ��� ??�� */
    static strategy5168(ind) {
        const match = ind.bollingerBands?.position < 20 && ind.macd?.histogram < -10 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5168, name: 'BB Near Low + MACD Bearish', direction: 'DOWN', match: Boolean(match), confidence: match ? 66 : 0 };
    }
    
    /** ���� 5169: BB ���??���� + �ش� ??�� ���� */
    static strategy5169(ind) {
        const match = ind.bollingerBands?.bandwidth > 4.5 && ind.bollingerBands?.position < 25 && ind.ema20 < ind.ema50;
        return { id: 5169, name: 'BB Expanding Down Trend', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5170: BB ���??> 5 + position < 20 + RSI < 40 */
    static strategy5170(ind) {
        const match = ind.bollingerBands?.bandwidth > 5 && ind.bollingerBands?.position < 20 && ind.rsi > 60;
        return { id: 5170, name: 'BB Strong Down Expansion', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5171: BB �߽� ??ȸ + ���????�� */
    static strategy5171(ind) {
        const match = ind.bollingerBands?.position < 50 && ind.bollingerBands?.bandwidth >= 2.5 && ind.bollingerBands?.bandwidth <= 4 && ind.macd?.histogram < 0;
        return { id: 5171, name: 'BB Below Mid Normal Width', direction: 'DOWN', match: Boolean(match), confidence: match ? 66 : 0 };
    }
    
    /** ���� 5172: BB ���??3-5 + position 40-55 + MACD ���� */
    static strategy5172(ind) {
        const match = ind.bollingerBands?.bandwidth >= 3 && ind.bollingerBands?.bandwidth <= 5 &&
                     ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 55 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5172, name: 'BB Normal Mid + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5173: BB ���??2.5-3.5 + RSI 50-60 + EMA ���� */
    static strategy5173(ind) {
        const match = ind.bollingerBands?.bandwidth >= 2.5 && ind.bollingerBands?.bandwidth <= 3.5 &&
                     ind.rsi >= 50 && ind.rsi <= 60 && ind.ema20 < ind.ema50;
        return { id: 5173, name: 'BB Tight + RSI Mid + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ���� 5174: BB �ش�??�� �߰�??�� �϶� */
    static strategy5174(ind) {
        const match = ind.bollingerBands?.position >= 55 && ind.bollingerBands?.position <= 70 && ind.macd?.histogram < -5 && ind.rsi >= 50 && ind.rsi <= 60;
        return { id: 5174, name: 'BB Falling From Upper', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5175: BB �߰�??�� �ش�??�� �϶� */
    static strategy5175(ind) {
        const match = ind.bollingerBands?.position >= 35 && ind.bollingerBands?.position <= 50 && ind.macd?.histogram < -10 && ind.ema20 < ind.ema50;
        return { id: 5175, name: 'BB Falling To Lower', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    // ==================== EMA ���� ����(5176-5225) ====================
    
    /** ���� 5176: EMA 5/10 ����??��??+ RSI > 60 */
    static strategy5176(ind) {
        const match = ind.ema5 < ind.ema10 && ind.rsi > 60;
        return { id: 5176, name: 'EMA 5/10 Dead + RSI High', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5177: EMA 5/10 ���� + MACD ??�� */
    static strategy5177(ind) {
        const match = ind.ema5 < ind.ema10 && ind.macd?.histogram < 0;
        return { id: 5177, name: 'EMA 5/10 Dead + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ���� 5178: EMA 10/20 ����??��??+ RSI > 55 */
    static strategy5178(ind) {
        const match = ind.ema10 < ind.ema20 && ind.rsi > 55;
        return { id: 5178, name: 'EMA 10/20 Dead + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5179: EMA 10/20 ���� + BB > 60 */
    static strategy5179(ind) {
        const match = ind.ema10 < ind.ema20 && ind.bollingerBands?.position > 60;
        return { id: 5179, name: 'EMA 10/20 Dead + BB Upper', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5180: EMA 10/30 ����??��??+ MACD ���� */
    static strategy5180(ind) {
        const match = ind.ema10 < ind.ema30 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5180, name: 'EMA 10/30 Dead + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5181: EMA 10/30 ���� + RSI 50-65 */
    static strategy5181(ind) {
        const match = ind.ema10 < ind.ema30 && ind.rsi >= 50 && ind.rsi <= 65;
        return { id: 5181, name: 'EMA 10/30 Dead + RSI Mid-High', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5182: EMA 20/50 ����??��????�� */
    static strategy5182(ind) {
        const match = ind.ema20 < ind.ema50;
        return { id: 5182, name: 'EMA 20/50 Dead Cross', direction: 'DOWN', match: Boolean(match), confidence: match ? 65 : 0 };
    }
    
    /** ���� 5183: EMA 20/50 ���� + RSI > 50 + BB > 50 */
    static strategy5183(ind) {
        const match = ind.ema20 < ind.ema50 && ind.rsi > 50 && ind.bollingerBands?.position > 50;
        return { id: 5183, name: 'EMA Dead + RSI BB Above Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5184: EMA 20/50 ���� + MACD hist < -10 */
    static strategy5184(ind) {
        const match = ind.ema20 < ind.ema50 && ind.macd?.histogram < -10;
        return { id: 5184, name: 'EMA Dead + MACD Strong Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5185: EMA 20/100 ����??��??+ RSI > 45 */
    static strategy5185(ind) {
        const match = ind.ema20 < ind.ema100 && ind.rsi > 45;
        return { id: 5185, name: 'EMA 20/100 Dead + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5186: EMA 20/100 ���� + MACD ���� */
    static strategy5186(ind) {
        const match = ind.ema20 < ind.ema100 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5186, name: 'EMA 20/100 Dead + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5187: EMA 50/100 ����??��??+ RSI 40-55 */
    static strategy5187(ind) {
        const match = ind.ema50 < ind.ema100 && ind.rsi >= 40 && ind.rsi <= 55;
        return { id: 5187, name: 'EMA 50/100 Dead + RSI Neutral', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5188: EMA 50/100 ���� + BB < 55 */
    static strategy5188(ind) {
        const match = ind.ema50 < ind.ema100 && ind.bollingerBands?.position < 55;
        return { id: 5188, name: 'EMA 50/100 Dead + BB Below Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5189: EMA 50/200 ����??��??(??��) */
    static strategy5189(ind) {
        const match = ind.ema50 < ind.ema200 && ind.macd?.histogram < 0;
        return { id: 5189, name: 'EMA 50/200 Death Cross + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5190: EMA 50/200 ���� + RSI 45-60 */
    static strategy5190(ind) {
        const match = ind.ema50 < ind.ema200 && ind.rsi >= 45 && ind.rsi <= 60;
        return { id: 5190, name: 'EMA 50/200 Death + RSI Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5191: ??��? EMA ���� (10/20/50) */
    static strategy5191(ind) {
        const match = ind.ema10 < ind.ema20 && ind.ema20 < ind.ema50;
        return { id: 5191, name: 'Triple EMA Dead 10/20/50', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5192: ??��? EMA ���� + RSI > 50 */
    static strategy5192(ind) {
        const match = ind.ema10 < ind.ema20 && ind.ema20 < ind.ema50 && ind.rsi > 50;
        return { id: 5192, name: 'Triple EMA Dead + RSI Above 50', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5193: ??��? EMA ���� + MACD ���� */
    static strategy5193(ind) {
        const match = ind.ema10 < ind.ema20 && ind.ema20 < ind.ema50 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5193, name: 'Triple EMA Dead + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5194: ���� EMA ���� (10/20/50/100) */
    static strategy5194(ind) {
        const match = ind.ema10 < ind.ema20 && ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100;
        return { id: 5194, name: 'Quad EMA Dead Alignment', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5195: EMA ?????? (0.5%+) + �϶� �߼� */
    static strategy5195(ind) {
        const emaGap = ind.ema50 ? (ind.ema50 - ind.ema20) / ind.ema50 : 0;
        const match = emaGap > 0.005 && ind.ema20 < ind.ema50 && ind.macd?.histogram < 0;
        return { id: 5195, name: 'EMA Gap Wide Down + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5196: EMA ?????? (1%+) + RSI 40-55 */
    static strategy5196(ind) {
        const emaGap = ind.ema50 ? (ind.ema50 - ind.ema20) / ind.ema50 : 0;
        const match = emaGap > 0.01 && ind.ema20 < ind.ema50 && ind.rsi >= 40 && ind.rsi <= 55;
        return { id: 5196, name: 'EMA Gap Very Wide + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5197: ��??< EMA20 + EMA20 < EMA50 */
    static strategy5197(ind) {
        const match = ind.price < ind.ema20 && ind.ema20 < ind.ema50;
        return { id: 5197, name: 'Price Below EMA Stack', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5198: ��??< EMA20 0.5% + EMA ���� + RSI > 40 */
    static strategy5198(ind) {
        const belowEMA = ind.ema20 ? (ind.ema20 - ind.price) / ind.ema20 > 0.005 : false;
        const match = belowEMA && ind.ema20 < ind.ema50 && ind.rsi > 40;
        return { id: 5198, name: 'Price Below EMA20 + Dead + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5199: ��??< EMA20 1% + MACD ���� */
    static strategy5199(ind) {
        const belowEMA = ind.ema20 ? (ind.ema20 - ind.price) / ind.ema20 > 0.01 : false;
        const match = belowEMA && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5199, name: 'Price Below EMA20 1% + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5200: ��? EMA20 ??????�� + �϶� */
    static strategy5200(ind) {
        const nearEMA = ind.ema20 ? Math.abs(ind.price - ind.ema20) / ind.ema20 < 0.003 : false;
        const match = nearEMA && ind.price < ind.ema20 && ind.macd?.histogram < 0;
        return { id: 5200, name: 'EMA20 Resistance Fail', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5201: ��??< EMA50 + EMA ���� + BB < 60 */
    static strategy5201(ind) {
        const match = ind.price < ind.ema50 && ind.ema20 < ind.ema50 && ind.bollingerBands?.position < 60;
        return { id: 5201, name: 'Price Below EMA50 + Dead + BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5202: EMA20 ??�� ���??+ RSI �϶� */
    static strategy5202(ind) {
        const match = ind.ema20 < ind.ema50 && ind.rsi >= 45 && ind.rsi <= 60 && ind.macd?.histogram < 0;
        return { id: 5202, name: 'EMA20 Slope Down + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5203: EMA50 ??�� ���??+ MACD ���� */
    static strategy5203(ind) {
        const match = ind.ema50 < ind.ema100 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5203, name: 'EMA50 Slope Down + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5204: EMA ??�� ????�� ??�� */
    static strategy5204(ind) {
        const emaClose = ind.ema50 ? Math.abs(ind.ema20 - ind.ema50) / ind.ema50 < 0.002 : false;
        const match = emaClose && ind.ema20 < ind.ema50 && ind.macd?.histogram < 0;
        return { id: 5204, name: 'EMA Converge Break Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5205: EMA ���� + ��??�ݵ� ??�� */
    static strategy5205(ind) {
        const match = ind.ema20 < ind.ema50 && ind.price < ind.ema20 && ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 55;
        return { id: 5205, name: 'EMA Dead + Bounce Fail', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5206: EMA20 < EMA50 < EMA100 ??�� ??????*/
    static strategy5206(ind) {
        const match = ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100 && ind.rsi > 40;
        return { id: 5206, name: 'Full EMA Dead Alignment', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5207: EMA ??????+ MACD hist < -15 */
    static strategy5207(ind) {
        const match = ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100 && ind.macd?.histogram < -15;
        return { id: 5207, name: 'EMA Dead Stack + MACD Strong', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5208: EMA ??????+ BB < 50 */
    static strategy5208(ind) {
        const match = ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100 && ind.bollingerBands?.position < 50;
        return { id: 5208, name: 'EMA Dead Stack + BB Below Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5209: ??�� EMA �޶� (5 < 10 < 20) */
    static strategy5209(ind) {
        const match = ind.ema5 < ind.ema10 && ind.ema10 < ind.ema20 && ind.macd?.histogram < 0;
        return { id: 5209, name: 'Short EMA Cascade Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5210: ??�� EMA �޶� + RSI 50-65 */
    static strategy5210(ind) {
        const match = ind.ema5 < ind.ema10 && ind.ema10 < ind.ema20 && ind.rsi >= 50 && ind.rsi <= 65;
        return { id: 5210, name: 'Short EMA Down + RSI Mid-High', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5211: EMA ���� + ??0.3% ??�� + RSI 45-60 */
    static strategy5211(ind) {
        const emaGap = ind.ema50 ? (ind.ema50 - ind.ema20) / ind.ema50 : 0;
        const match = emaGap > 0.003 && ind.ema20 < ind.ema50 && ind.rsi >= 45 && ind.rsi <= 60;
        return { id: 5211, name: 'EMA Dead Gap + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5212: EMA ���� + ??0.5% ??�� + BB 40-60 */
    static strategy5212(ind) {
        const emaGap = ind.ema50 ? (ind.ema50 - ind.ema20) / ind.ema50 : 0;
        const match = emaGap > 0.005 && ind.ema20 < ind.ema50 && ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 60;
        return { id: 5212, name: 'EMA Dead Wide Gap + BB Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5213: EMA20 ????+ MACD ���� + RSI 55-65 */
    static strategy5213(ind) {
        const nearEMA = ind.ema20 ? Math.abs(ind.price - ind.ema20) / ind.ema20 < 0.005 : false;
        const match = nearEMA && ind.price < ind.ema20 && ind.macd?.MACD < ind.macd?.signal && ind.rsi >= 55 && ind.rsi <= 65;
        return { id: 5213, name: 'EMA20 Resist + MACD Dead + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5214: EMA50 ????+ EMA ���� + BB > 55 */
    static strategy5214(ind) {
        const nearEMA50 = ind.ema50 ? Math.abs(ind.price - ind.ema50) / ind.ema50 < 0.005 : false;
        const match = nearEMA50 && ind.price < ind.ema50 && ind.ema20 < ind.ema50 && ind.bollingerBands?.position > 55;
        return { id: 5214, name: 'EMA50 Resist + Dead + BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5215: EMA ??�� ??�� ���� */
    static strategy5215(ind) {
        const match = ind.ema20 < ind.ema50 && ind.macd?.prevHistogram > 0 && ind.macd?.histogram < 0;
        return { id: 5215, name: 'EMA Dead Align Starting', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5216: EMA ??��� ??�϶� ??�� */
    static strategy5216(ind) {
        const emaGap = ind.ema50 ? (ind.ema50 - ind.ema20) / ind.ema50 : 0;
        const match = emaGap > 0.001 && emaGap < 0.005 && ind.ema20 < ind.ema50 && ind.macd?.histogram < -5;
        return { id: 5216, name: 'EMA Gap Narrow + Resume Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5217: EMA20 < EMA50 + ��??> EMA20 (�ݵ� ����) + MACD ??�� */
    static strategy5217(ind) {
        const match = ind.ema20 < ind.ema50 && ind.price > ind.ema20 && ind.price < ind.ema50 && ind.macd?.histogram < 0;
        return { id: 5217, name: 'EMA Pullback Zone + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ���� 5218: EMA ���� + ��? EMA20 ���� + RSI 50-60 */
    static strategy5218(ind) {
        const nearEMA = ind.ema20 ? Math.abs(ind.price - ind.ema20) / ind.ema20 < 0.003 : false;
        const match = nearEMA && ind.ema20 < ind.ema50 && ind.rsi >= 50 && ind.rsi <= 60;
        return { id: 5218, name: 'EMA Dead + Price Near + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 66 : 0 };
    }
    
    /** ���� 5219: EMA100 < EMA200 + RSI 45-55 + MACD ??�� */
    static strategy5219(ind) {
        const match = ind.ema100 < ind.ema200 && ind.rsi >= 45 && ind.rsi <= 55 && ind.macd?.histogram < 0;
        return { id: 5219, name: 'Long Term EMA Dead + RSI + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5220: EMA ??�� ??????+ BB < 45 */
    static strategy5220(ind) {
        const match = ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100 && ind.ema100 < ind.ema200 && ind.bollingerBands?.position < 45;
        return { id: 5220, name: 'Full EMA Dead + BB Low', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5221: EMA ���� + MACD ���� + BB ���� (�߰�????Ż) */
    static strategy5221(ind) {
        const match = ind.ema20 < ind.ema50 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position < 50;
        return { id: 5221, name: 'Triple Dead Alignment', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5222: EMA 5/20 ���� + RSI 55-70 + BB 60-80 */
    static strategy5222(ind) {
        const match = ind.ema5 < ind.ema20 && ind.rsi >= 55 && ind.rsi <= 70 && ind.bollingerBands?.position >= 60 && ind.bollingerBands?.position <= 80;
        return { id: 5222, name: 'Short EMA Dead + RSI BB High', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5223: EMA 10/50 ���� + MACD hist < -10 + RSI 45-60 */
    static strategy5223(ind) {
        const match = ind.ema10 < ind.ema50 && ind.macd?.histogram < -10 && ind.rsi >= 45 && ind.rsi <= 60;
        return { id: 5223, name: 'EMA 10/50 Dead + MACD + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5224: EMA 20/100 ���� + BB 35-55 + MACD ??�� */
    static strategy5224(ind) {
        const match = ind.ema20 < ind.ema100 && ind.bollingerBands?.position >= 35 && ind.bollingerBands?.position <= 55 && ind.macd?.histogram < 0;
        return { id: 5224, name: 'EMA 20/100 Dead + BB Mid + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5225: EMA ??ü ??????+ RSI > 45 + MACD < -20 */
    static strategy5225(ind) {
        const match = ind.ema10 < ind.ema20 && ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100 && ind.rsi > 45 && ind.macd?.histogram < -20;
        return { id: 5225, name: 'Full EMA Dead + RSI + MACD Strong', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    // ==================== SMA ���� ����(5226-5275) ====================
    
    /** ���� 5226: SMA 10/20 ����??��??*/
    static strategy5226(ind) {
        const match = ind.sma10 < ind.sma20;
        return { id: 5226, name: 'SMA 10/20 Dead Cross', direction: 'DOWN', match: Boolean(match), confidence: match ? 65 : 0 };
    }
    
    /** ���� 5227: SMA 10/20 ���� + RSI > 55 */
    static strategy5227(ind) {
        const match = ind.sma10 < ind.sma20 && ind.rsi > 55;
        return { id: 5227, name: 'SMA 10/20 Dead + RSI High', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5228: SMA 10/20 ���� + MACD ??�� */
    static strategy5228(ind) {
        const match = ind.sma10 < ind.sma20 && ind.macd?.histogram < 0;
        return { id: 5228, name: 'SMA 10/20 Dead + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5229: SMA 20/50 ����??��??*/
    static strategy5229(ind) {
        const match = ind.sma20 < ind.sma50;
        return { id: 5229, name: 'SMA 20/50 Dead Cross', direction: 'DOWN', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ���� 5230: SMA 20/50 ���� + RSI 45-60 */
    static strategy5230(ind) {
        const match = ind.sma20 < ind.sma50 && ind.rsi >= 45 && ind.rsi <= 60;
        return { id: 5230, name: 'SMA 20/50 Dead + RSI Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5231: SMA 20/50 ���� + BB > 55 */
    static strategy5231(ind) {
        const match = ind.sma20 < ind.sma50 && ind.bollingerBands?.position > 55;
        return { id: 5231, name: 'SMA 20/50 Dead + BB Upper', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** 전략 5232: SMA 20/50 데드 + MACD 데드 + BB 상위 (5097과 차별화) */
    static strategy5232(ind) {
        const match = ind.sma20 < ind.sma50 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 55;
        return { id: 5232, name: 'SMA MACD Dead + BB Upper', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5233: SMA 50/100 ����??��??*/
    static strategy5233(ind) {
        const match = ind.sma50 < ind.sma100;
        return { id: 5233, name: 'SMA 50/100 Dead Cross', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5234: SMA 50/100 ���� + RSI 40-55 + MACD ??�� */
    static strategy5234(ind) {
        const match = ind.sma50 < ind.sma100 && ind.rsi >= 40 && ind.rsi <= 55 && ind.macd?.histogram < 0;
        return { id: 5234, name: 'SMA 50/100 Dead + RSI + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5235: SMA 50/200 ����??��??(Death Cross) */
    static strategy5235(ind) {
        const match = ind.sma50 < ind.sma200;
        return { id: 5235, name: 'SMA Death Cross 50/200', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5236: SMA ���� ??��??+ RSI > 45 */
    static strategy5236(ind) {
        const match = ind.sma50 < ind.sma200 && ind.rsi > 45;
        return { id: 5236, name: 'Death Cross + RSI Above 45', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5237: SMA ���� ??��??+ MACD ���� */
    static strategy5237(ind) {
        const match = ind.sma50 < ind.sma200 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5237, name: 'Death Cross + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5238: SMA + EMA ���� ���� (20/50) */
    static strategy5238(ind) {
        const match = ind.sma20 < ind.sma50 && ind.ema20 < ind.ema50;
        return { id: 5238, name: 'SMA EMA Double Dead 20/50', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5239: SMA + EMA ���� ���� + RSI > 50 */
    static strategy5239(ind) {
        const match = ind.sma20 < ind.sma50 && ind.ema20 < ind.ema50 && ind.rsi > 50;
        return { id: 5239, name: 'Double Dead + RSI Above 50', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5240: SMA + EMA ���� ���� + MACD ??�� */
    static strategy5240(ind) {
        const match = ind.sma20 < ind.sma50 && ind.ema20 < ind.ema50 && ind.macd?.histogram < 0;
        return { id: 5240, name: 'Double Dead + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5241: ??��??SMA ���� (10/20/50) */
    static strategy5241(ind) {
        const match = ind.sma10 < ind.sma20 && ind.sma20 < ind.sma50;
        return { id: 5241, name: 'Triple SMA Dead 10/20/50', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5242: ??��??SMA ���� + MACD ���� */
    static strategy5242(ind) {
        const match = ind.sma10 < ind.sma20 && ind.sma20 < ind.sma50 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5242, name: 'Triple SMA Dead + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5243: ??��??SMA ���� + RSI 50-65 */
    static strategy5243(ind) {
        const match = ind.sma10 < ind.sma20 && ind.sma20 < ind.sma50 && ind.rsi >= 50 && ind.rsi <= 65;
        return { id: 5243, name: 'Triple SMA Dead + RSI Mid-High', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5244: ���� SMA ���� (10/20/50/100) */
    static strategy5244(ind) {
        const match = ind.sma10 < ind.sma20 && ind.sma20 < ind.sma50 && ind.sma50 < ind.sma100;
        return { id: 5244, name: 'Quad SMA Dead Alignment', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5245: ��??< SMA20 + SMA ���� */
    static strategy5245(ind) {
        const match = ind.price < ind.sma20 && ind.sma20 < ind.sma50;
        return { id: 5245, name: 'Price Below SMA20 + Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5246: ��??< SMA20 0.5% + MACD ??�� */
    static strategy5246(ind) {
        const belowSMA = ind.sma20 ? (ind.sma20 - ind.price) / ind.sma20 > 0.005 : false;
        const match = belowSMA && ind.macd?.histogram < 0;
        return { id: 5246, name: 'Price Below SMA20 0.5% + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5247: ��??< SMA50 + SMA ���� + RSI > 40 */
    static strategy5247(ind) {
        const match = ind.price < ind.sma50 && ind.sma20 < ind.sma50 && ind.rsi > 40;
        return { id: 5247, name: 'Price Below SMA50 + Dead + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5248: SMA20 ????+ �϶� */
    static strategy5248(ind) {
        const nearSMA = ind.sma20 ? Math.abs(ind.price - ind.sma20) / ind.sma20 < 0.003 : false;
        const match = nearSMA && ind.price < ind.sma20 && ind.macd?.histogram < 0;
        return { id: 5248, name: 'SMA20 Resistance + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5249: SMA50 ????+ MACD ���� */
    static strategy5249(ind) {
        const nearSMA = ind.sma50 ? Math.abs(ind.price - ind.sma50) / ind.sma50 < 0.005 : false;
        const match = nearSMA && ind.price < ind.sma50 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5249, name: 'SMA50 Resistance + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5250: SMA ?????? (0.3%+) + �϶� */
    static strategy5250(ind) {
        const smaGap = ind.sma50 ? (ind.sma50 - ind.sma20) / ind.sma50 : 0;
        const match = smaGap > 0.003 && ind.sma20 < ind.sma50 && ind.macd?.histogram < 0;
        return { id: 5250, name: 'SMA Gap Wide Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5251: SMA ?????? (0.5%+) + RSI 45-60 */
    static strategy5251(ind) {
        const smaGap = ind.sma50 ? (ind.sma50 - ind.sma20) / ind.sma50 : 0;
        const match = smaGap > 0.005 && ind.sma20 < ind.sma50 && ind.rsi >= 45 && ind.rsi <= 60;
        return { id: 5251, name: 'SMA Gap 0.5% + RSI Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5252: SMA + EMA + MACD ??��??���� */
    static strategy5252(ind) {
        const match = ind.sma20 < ind.sma50 && ind.ema20 < ind.ema50 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5252, name: 'SMA EMA MACD Triple Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5253: SMA + EMA + MACD + BB ���� ����� */
    static strategy5253(ind) {
        const match = ind.sma20 < ind.sma50 && ind.ema20 < ind.ema50 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position < 50;
        return { id: 5253, name: 'Quad Bearish Alignment', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5254: SMA ���� + BB �ش� 70%+ */
    static strategy5254(ind) {
        const match = ind.sma20 < ind.sma50 && ind.bollingerBands?.position > 70;
        return { id: 5254, name: 'SMA Dead + BB Upper', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5255: SMA ���� + BB 60-75 + RSI 55-65 */
    static strategy5255(ind) {
        const match = ind.sma20 < ind.sma50 && ind.bollingerBands?.position >= 60 && ind.bollingerBands?.position <= 75 && ind.rsi >= 55 && ind.rsi <= 65;
        return { id: 5255, name: 'SMA Dead + BB High + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5256: SMA ���� + BB 50-65 + MACD hist < -10 */
    static strategy5256(ind) {
        const match = ind.sma20 < ind.sma50 && ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 65 && ind.macd?.histogram < -10;
        return { id: 5256, name: 'SMA Dead + BB Mid-High + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5257: SMA100 < SMA200 + RSI 40-55 */
    static strategy5257(ind) {
        const match = ind.sma100 < ind.sma200 && ind.rsi >= 40 && ind.rsi <= 55;
        return { id: 5257, name: 'Long SMA Dead + RSI Neutral', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5258: SMA100 < SMA200 + MACD ���� + BB < 55 */
    static strategy5258(ind) {
        const match = ind.sma100 < ind.sma200 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position < 55;
        return { id: 5258, name: 'Long SMA Dead + MACD + BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5259: ��??< ��� SMA (20/50/100) */
    static strategy5259(ind) {
        const match = ind.price < ind.sma20 && ind.price < ind.sma50 && ind.price < ind.sma100;
        return { id: 5259, name: 'Price Below All SMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5260: ��??< ��� SMA + MACD ??�� */
    static strategy5260(ind) {
        const match = ind.price < ind.sma20 && ind.price < ind.sma50 && ind.price < ind.sma100 && ind.macd?.histogram < 0;
        return { id: 5260, name: 'Price Below All SMA + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5261: SMA ??�� ??????+ RSI > 40 */
    static strategy5261(ind) {
        const match = ind.sma20 < ind.sma50 && ind.sma50 < ind.sma100 && ind.sma100 < ind.sma200 && ind.rsi > 40;
        return { id: 5261, name: 'Full SMA Dead + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5262: SMA ??�� ??????+ MACD hist < -15 */
    static strategy5262(ind) {
        const match = ind.sma20 < ind.sma50 && ind.sma50 < ind.sma100 && ind.sma100 < ind.sma200 && ind.macd?.histogram < -15;
        return { id: 5262, name: 'Full SMA Dead + MACD Strong', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5263: SMA ??�� ??�϶� ??�� */
    static strategy5263(ind) {
        const smaClose = ind.sma50 ? Math.abs(ind.sma20 - ind.sma50) / ind.sma50 < 0.002 : false;
        const match = smaClose && ind.sma20 < ind.sma50 && ind.macd?.histogram < 0;
        return { id: 5263, name: 'SMA Converge Break Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5264: SMA ���� + ��??�ݵ� ??�� */
    static strategy5264(ind) {
        const match = ind.sma20 < ind.sma50 && ind.price < ind.sma20 && ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 55;
        return { id: 5264, name: 'SMA Dead + Bounce Fail', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5265: SMA ���� + EMA ���� + RSI 50-65 + BB 55-75 */
    static strategy5265(ind) {
        const match = ind.sma20 < ind.sma50 && ind.ema20 < ind.ema50 && ind.rsi >= 50 && ind.rsi <= 65 && 
                     ind.bollingerBands?.position >= 55 && ind.bollingerBands?.position <= 75;
        return { id: 5265, name: 'Double Dead + RSI + BB High', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5266: SMA 10/30 ���� + MACD ���� */
    static strategy5266(ind) {
        const match = ind.sma10 < ind.sma30 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5266, name: 'SMA 10/30 Dead + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5267: SMA 10/30 ���� + RSI 50-65 + BB > 55 */
    static strategy5267(ind) {
        const match = ind.sma10 < ind.sma30 && ind.rsi >= 50 && ind.rsi <= 65 && ind.bollingerBands?.position > 55;
        return { id: 5267, name: 'SMA 10/30 Dead + RSI + BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5268: SMA 20/100 ���� + MACD hist < -10 */
    static strategy5268(ind) {
        const match = ind.sma20 < ind.sma100 && ind.macd?.histogram < -10;
        return { id: 5268, name: 'SMA 20/100 Dead + MACD Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5269: SMA 20/100 ���� + RSI 45-60 + BB 45-60 */
    static strategy5269(ind) {
        const match = ind.sma20 < ind.sma100 && ind.rsi >= 45 && ind.rsi <= 60 && 
                     ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 60;
        return { id: 5269, name: 'SMA 20/100 Dead + RSI BB Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5270: SMA 30/100 ���� + EMA ���� */
    static strategy5270(ind) {
        const match = ind.sma30 < ind.sma100 && ind.ema20 < ind.ema50;
        return { id: 5270, name: 'SMA 30/100 Dead + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5271: SMA ??�� �޶� (5 < 10 < 20) */
    static strategy5271(ind) {
        const match = ind.sma5 < ind.sma10 && ind.sma10 < ind.sma20 && ind.macd?.histogram < 0;
        return { id: 5271, name: 'Short SMA Cascade Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5272: SMA ??�� �޶� + RSI 50-65 */
    static strategy5272(ind) {
        const match = ind.sma5 < ind.sma10 && ind.sma10 < ind.sma20 && ind.rsi >= 50 && ind.rsi <= 65;
        return { id: 5272, name: 'Short SMA Down + RSI Mid-High', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 };
    }
    
    /** ���� 5273: SMA + EMA ??�� ??????*/
    static strategy5273(ind) {
        const match = ind.sma20 < ind.sma50 && ind.sma50 < ind.sma100 && ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100;
        return { id: 5273, name: 'SMA EMA Full Dead Align', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5274: SMA + EMA ??�� ??????+ MACD ���� */
    static strategy5274(ind) {
        const match = ind.sma20 < ind.sma50 && ind.sma50 < ind.sma100 && ind.ema20 < ind.ema50 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5274, name: 'SMA EMA Dead + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 5275: ��� MA ??????+ RSI > 45 + MACD < -15 */
    static strategy5275(ind) {
        const match = ind.sma20 < ind.sma50 && ind.ema20 < ind.ema50 && ind.rsi > 45 && ind.macd?.histogram < -15;
        return { id: 5275, name: 'All MA Dead + RSI + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    // ==================== ���� �Ķ���� (5276-5300) ====================
    
    /** ���� 5276: RSI 70+ + MACD ���� + BB 85+ + EMA ���� */
    static strategy5276(ind) {
        const match = ind.rsi > 70 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 85 && ind.ema20 < ind.ema50;
        return { id: 5276, name: 'Quad Overbought Signal', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 };
    }
    
    /** ���� 5277: RSI 68+ + MACD hist < -10 + BB 80+ + SMA ���� */
    static strategy5277(ind) {
        const match = ind.rsi > 68 && ind.macd?.histogram < -10 && ind.bollingerBands?.position > 80 && ind.sma20 < ind.sma50;
        return { id: 5277, name: 'Strong Overbought + MACD + SMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 5278: RSI 65+ + MACD ���� + BB 75+ + EMA + SMA ���� */
    static strategy5278(ind) {
        const match = ind.rsi > 65 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 75 && ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50;
        return { id: 5278, name: 'Full Dead Alignment High', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** ���� 5279: RSI 62+ + MACD hist < -15 + EMA ??????*/
    static strategy5279(ind) {
        const match = ind.rsi > 62 && ind.macd?.histogram < -15 && ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100;
        return { id: 5279, name: 'RSI High + MACD + EMA Stack', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5280: RSI 60+ + BB 70+ + SMA ??????*/
    static strategy5280(ind) {
        const match = ind.rsi > 60 && ind.bollingerBands?.position > 70 && ind.sma20 < ind.sma50 && ind.sma50 < ind.sma100;
        return { id: 5280, name: 'RSI + BB High + SMA Stack', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5281: MACD ���� + BB 80+ + EMA + SMA ���� */
    static strategy5281(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 80 && ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50;
        return { id: 5281, name: 'MACD Dead + BB + Double MA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5282: MACD hist < -20 + RSI 55-70 + BB 65-85 */
    static strategy5282(ind) {
        const match = ind.macd?.histogram < -20 && ind.rsi >= 55 && ind.rsi <= 70 && ind.bollingerBands?.position >= 65 && ind.bollingerBands?.position <= 85;
        return { id: 5282, name: 'MACD Strong Down + RSI + BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5283: BB 85+ + RSI 65+ + EMA ���� + SMA ���� */
    static strategy5283(ind) {
        const match = ind.bollingerBands?.position > 85 && ind.rsi > 65 && ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50;
        return { id: 5283, name: 'BB Top + RSI + Double MA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5284: BB 80-90 + MACD ���� + RSI 60-72 */
    static strategy5284(ind) {
        const match = ind.bollingerBands?.position >= 80 && ind.bollingerBands?.position <= 90 && ind.macd?.MACD < ind.macd?.signal && ind.rsi >= 60 && ind.rsi <= 72;
        return { id: 5284, name: 'BB High + MACD Dead + RSI High', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5285: EMA ??????+ SMA ??????+ MACD ���� */
    static strategy5285(ind) {
        const match = ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100 && ind.sma20 < ind.sma50 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5285, name: 'EMA SMA Stack + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 5286: EMA ??????+ SMA ??????+ RSI 50-65 */
    static strategy5286(ind) {
        const match = ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100 && ind.sma20 < ind.sma50 && ind.rsi >= 50 && ind.rsi <= 65;
        return { id: 5286, name: 'EMA SMA Stack + RSI Mid-High', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5287: ��??< EMA20 < EMA50 + BB < 55 + MACD ??�� */
    static strategy5287(ind) {
        const match = ind.price < ind.ema20 && ind.ema20 < ind.ema50 && ind.bollingerBands?.position < 55 && ind.macd?.histogram < 0;
        return { id: 5287, name: 'Price Below EMA Stack + BB + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5288: ��??< SMA20 < SMA50 + RSI 45-60 */
    static strategy5288(ind) {
        const match = ind.price < ind.sma20 && ind.sma20 < ind.sma50 && ind.rsi >= 45 && ind.rsi <= 60;
        return { id: 5288, name: 'Price Below SMA Stack + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5289: RSI 55-68 + MACD hist < -10 + BB 55-75 + EMA ���� */
    static strategy5289(ind) {
        const match = ind.rsi >= 55 && ind.rsi <= 68 && ind.macd?.histogram < -10 && 
                     ind.bollingerBands?.position >= 55 && ind.bollingerBands?.position <= 75 && ind.ema20 < ind.ema50;
        return { id: 5289, name: 'Mid-High Zone Bearish', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5290: RSI 50-62 + MACD ���� + BB 50-70 + SMA ���� */
    static strategy5290(ind) {
        const match = ind.rsi >= 50 && ind.rsi <= 62 && ind.macd?.MACD < ind.macd?.signal &&
                     ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 70 && ind.sma20 < ind.sma50;
        return { id: 5290, name: 'Mid Zone Bearish Setup', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5291: BB ??���� (< 2.5) + position 55-75 + MACD ���� */
    static strategy5291(ind) {
        const match = ind.bollingerBands?.bandwidth < 2.5 && ind.bollingerBands?.position >= 55 && ind.bollingerBands?.position <= 75 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5291, name: 'BB Squeeze High + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ���� 5292: BB ���� (> 4.5) + position 35-50 + EMA ���� */
    static strategy5292(ind) {
        const match = ind.bollingerBands?.bandwidth > 4.5 && ind.bollingerBands?.position >= 35 && ind.bollingerBands?.position <= 50 && ind.ema20 < ind.ema50;
        return { id: 5292, name: 'BB Expand Down + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5293: ??��??MA ���� (EMA + SMA + MACD) + RSI > 55 */
    static strategy5293(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && ind.macd?.MACD < ind.macd?.signal && ind.rsi > 55;
        return { id: 5293, name: 'Triple MA Dead + RSI High', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5294: ??��??MA ���� + BB > 60 */
    static strategy5294(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 60;
        return { id: 5294, name: 'Triple MA Dead + BB Upper', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5295: RSI + MACD + BB + EMA + SMA ??�� ����� */
    static strategy5295(ind) {
        const match = ind.rsi > 55 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 55 && ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50;
        return { id: 5295, name: 'Penta Bearish Signal', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 5296: RSI 58-72 + MACD hist < -5 + EMA + SMA ���� */
    static strategy5296(ind) {
        const match = ind.rsi >= 58 && ind.rsi <= 72 && ind.macd?.histogram < -5 && ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50;
        return { id: 5296, name: 'RSI High + MACD + Double Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5297: BB 60-80 + MACD ��ȯ �϶� + RSI 52-65 */
    static strategy5297(ind) {
        const match = ind.bollingerBands?.position >= 60 && ind.bollingerBands?.position <= 80 && 
                     ind.macd?.prevHistogram > 0 && ind.macd?.histogram < 0 && ind.rsi >= 52 && ind.rsi <= 65;
        return { id: 5297, name: 'BB Mid-High + MACD Turn + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5298: EMA ??-0.4% + SMA ���� + MACD ??�� */
    static strategy5298(ind) {
        const emaGap = ind.ema50 ? (ind.ema50 - ind.ema20) / ind.ema50 : 0;
        const match = emaGap > 0.004 && ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && ind.macd?.histogram < 0;
        return { id: 5298, name: 'EMA Gap Wide + SMA Dead + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5299: ��??< EMA20 + ��??< SMA20 + MACD ���� + RSI 48-62 */
    static strategy5299(ind) {
        const match = ind.price < ind.ema20 && ind.price < ind.sma20 && ind.macd?.MACD < ind.macd?.signal && ind.rsi >= 48 && ind.rsi <= 62;
        return { id: 5299, name: 'Price Below MAs + MACD + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5300: Ȯ��??����� (��� ���� ??�� ��ȭ) */
    static strategy5300(ind) {
        const match = ind.rsi > 52 && ind.macd?.histogram < 0 && ind.bollingerBands?.position > 48 && ind.ema20 < ind.ema50;
        return { id: 5300, name: 'All-In-One Bearish Relaxed', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 };
    }
    
    /** ��� ���� ??�� (5101-5300) */
    static analyzeAll(indicators) {
        return [
            this.strategy5101(indicators), this.strategy5102(indicators), this.strategy5103(indicators),
            this.strategy5104(indicators), this.strategy5105(indicators), this.strategy5106(indicators),
            this.strategy5107(indicators), this.strategy5108(indicators), this.strategy5109(indicators),
            this.strategy5110(indicators), this.strategy5111(indicators), this.strategy5112(indicators),
            this.strategy5113(indicators), this.strategy5114(indicators), this.strategy5115(indicators),
            this.strategy5116(indicators), this.strategy5117(indicators), this.strategy5118(indicators),
            this.strategy5119(indicators), this.strategy5120(indicators), this.strategy5121(indicators),
            this.strategy5122(indicators), this.strategy5123(indicators), this.strategy5124(indicators),
            this.strategy5125(indicators), this.strategy5126(indicators), this.strategy5127(indicators),
            this.strategy5128(indicators), this.strategy5129(indicators), this.strategy5130(indicators),
            this.strategy5131(indicators), this.strategy5132(indicators), this.strategy5133(indicators),
            this.strategy5134(indicators), this.strategy5135(indicators), this.strategy5136(indicators),
            this.strategy5137(indicators), this.strategy5138(indicators), this.strategy5139(indicators),
            this.strategy5140(indicators), this.strategy5141(indicators), this.strategy5142(indicators),
            this.strategy5143(indicators), this.strategy5144(indicators), this.strategy5145(indicators),
            this.strategy5146(indicators), this.strategy5147(indicators), this.strategy5148(indicators),
            this.strategy5149(indicators), this.strategy5150(indicators), this.strategy5151(indicators),
            this.strategy5152(indicators), this.strategy5153(indicators), this.strategy5154(indicators),
            this.strategy5155(indicators), this.strategy5156(indicators), this.strategy5157(indicators),
            this.strategy5158(indicators), this.strategy5159(indicators), this.strategy5160(indicators),
            this.strategy5161(indicators), this.strategy5162(indicators), this.strategy5163(indicators),
            this.strategy5164(indicators), this.strategy5165(indicators), this.strategy5166(indicators),
            this.strategy5167(indicators), this.strategy5168(indicators), this.strategy5169(indicators),
            this.strategy5170(indicators), this.strategy5171(indicators), this.strategy5172(indicators),
            this.strategy5173(indicators), this.strategy5174(indicators), this.strategy5175(indicators),
            this.strategy5176(indicators), this.strategy5177(indicators), this.strategy5178(indicators),
            this.strategy5179(indicators), this.strategy5180(indicators), this.strategy5181(indicators),
            this.strategy5182(indicators), this.strategy5183(indicators), this.strategy5184(indicators),
            this.strategy5185(indicators), this.strategy5186(indicators), this.strategy5187(indicators),
            this.strategy5188(indicators), this.strategy5189(indicators), this.strategy5190(indicators),
            this.strategy5191(indicators), this.strategy5192(indicators), this.strategy5193(indicators),
            this.strategy5194(indicators), this.strategy5195(indicators), this.strategy5196(indicators),
            this.strategy5197(indicators), this.strategy5198(indicators), this.strategy5199(indicators),
            this.strategy5200(indicators), this.strategy5201(indicators), this.strategy5202(indicators),
            this.strategy5203(indicators), this.strategy5204(indicators), this.strategy5205(indicators),
            this.strategy5206(indicators), this.strategy5207(indicators), this.strategy5208(indicators),
            this.strategy5209(indicators), this.strategy5210(indicators), this.strategy5211(indicators),
            this.strategy5212(indicators), this.strategy5213(indicators), this.strategy5214(indicators),
            this.strategy5215(indicators), this.strategy5216(indicators), this.strategy5217(indicators),
            this.strategy5218(indicators), this.strategy5219(indicators), this.strategy5220(indicators),
            this.strategy5221(indicators), this.strategy5222(indicators), this.strategy5223(indicators),
            this.strategy5224(indicators), this.strategy5225(indicators), this.strategy5226(indicators),
            this.strategy5227(indicators), this.strategy5228(indicators), this.strategy5229(indicators),
            this.strategy5230(indicators), this.strategy5231(indicators), this.strategy5232(indicators),
            this.strategy5233(indicators), this.strategy5234(indicators), this.strategy5235(indicators),
            this.strategy5236(indicators), this.strategy5237(indicators), this.strategy5238(indicators),
            this.strategy5239(indicators), this.strategy5240(indicators), this.strategy5241(indicators),
            this.strategy5242(indicators), this.strategy5243(indicators), this.strategy5244(indicators),
            this.strategy5245(indicators), this.strategy5246(indicators), this.strategy5247(indicators),
            this.strategy5248(indicators), this.strategy5249(indicators), this.strategy5250(indicators),
            this.strategy5251(indicators), this.strategy5252(indicators), this.strategy5253(indicators),
            this.strategy5254(indicators), this.strategy5255(indicators), this.strategy5256(indicators),
            this.strategy5257(indicators), this.strategy5258(indicators), this.strategy5259(indicators),
            this.strategy5260(indicators), this.strategy5261(indicators), this.strategy5262(indicators),
            this.strategy5263(indicators), this.strategy5264(indicators), this.strategy5265(indicators),
            this.strategy5266(indicators), this.strategy5267(indicators), this.strategy5268(indicators),
            this.strategy5269(indicators), this.strategy5270(indicators), this.strategy5271(indicators),
            this.strategy5272(indicators), this.strategy5273(indicators), this.strategy5274(indicators),
            this.strategy5275(indicators), this.strategy5276(indicators), this.strategy5277(indicators),
            this.strategy5278(indicators), this.strategy5279(indicators), this.strategy5280(indicators),
            this.strategy5281(indicators), this.strategy5282(indicators), this.strategy5283(indicators),
            this.strategy5284(indicators), this.strategy5285(indicators), this.strategy5286(indicators),
            this.strategy5287(indicators), this.strategy5288(indicators), this.strategy5289(indicators),
            this.strategy5290(indicators), this.strategy5291(indicators), this.strategy5292(indicators),
            this.strategy5293(indicators), this.strategy5294(indicators), this.strategy5295(indicators),
            this.strategy5296(indicators), this.strategy5297(indicators), this.strategy5298(indicators),
            this.strategy5299(indicators), this.strategy5300(indicators)
        ];
    }
}

