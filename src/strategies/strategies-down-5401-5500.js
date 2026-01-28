/**
 * DOWN ���� ���� (ID: 5401-5500)
 * ??��????�� - ADX ���
 * 5401-5425: ADX �߼� ���� ���
 * 5426-5450: +DI/-DI ??��??
 * 5451-5475: ADX + RSI/MACD ����
 * 5476-5500: ADX + BB/EMA/���� ����
 */

export class StrategiesDown5401 {
    
    // ==================== ADX �߼� ���� ��� (5401-5425) ====================
    
    /** ���� 5401: ADX > 50 �ſ� ���� �߼� + -DI > +DI */
    static strategy5401(ind) {
        const match = ind.adx?.adx > 50 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5401, name: 'ADX Very Strong Down Trend 50', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5402: ADX > 45 ���� �߼� + -DI > +DI */
    static strategy5402(ind) {
        const match = ind.adx?.adx > 45 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5402, name: 'ADX Strong Down Trend 45', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5403: ADX > 40 ���� �߼� + -DI > +DI */
    static strategy5403(ind) {
        const match = ind.adx?.adx > 40 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5403, name: 'ADX Strong Down Trend 40', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5404: ADX > 35 �߰� �߼� + -DI > +DI */
    static strategy5404(ind) {
        const match = ind.adx?.adx > 35 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5404, name: 'ADX Mid-Strong Down Trend 35', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5405: ADX > 30 ���� �߼� + -DI > +DI */
    static strategy5405(ind) {
        const match = ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5405, name: 'ADX Normal Down Trend 30', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5406: ADX > 25 ??�� �߼� + -DI > +DI */
    static strategy5406(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5406, name: 'ADX Weak Down Trend 25', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5407: ADX > 20 ���� �߼� + -DI > +DI */
    static strategy5407(ind) {
        const match = ind.adx?.adx > 20 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5407, name: 'ADX Starting Down Trend 20', direction: 'DOWN', match: Boolean(match), confidence: match ? 65 : 0 };
    }
    
    /** ���� 5408: ADX ��� ??+ -DI > +DI (�߼� ��ȭ) */
    static strategy5408(ind) {
        const match = ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5408, name: 'ADX Rising + Down Direction', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5409: ADX ��� + ADX > 30 + -DI > +DI */
    static strategy5409(ind) {
        const match = ind.adx?.adx > 30 && ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5409, name: 'ADX Rising 30+ Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5410: ADX ��� + ADX > 40 + -DI > +DI */
    static strategy5410(ind) {
        const match = ind.adx?.adx > 40 && ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5410, name: 'ADX Rising 40+ Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5411: ADX 20-30 ���� + -DI > +DI (�߼� ����) */
    static strategy5411(ind) {
        const match = ind.adx?.adx >= 20 && ind.adx?.adx <= 30 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5411, name: 'ADX Zone 20-30 Down Start', direction: 'DOWN', match: Boolean(match), confidence: match ? 67 : 0 };
    }
    
    /** ���� 5412: ADX 30-40 ���� + -DI > +DI (�߼� ����) */
    static strategy5412(ind) {
        const match = ind.adx?.adx >= 30 && ind.adx?.adx <= 40 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5412, name: 'ADX Zone 30-40 Down Progress', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5413: ADX 40-50 ���� + -DI > +DI (���� �߼�) */
    static strategy5413(ind) {
        const match = ind.adx?.adx >= 40 && ind.adx?.adx <= 50 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5413, name: 'ADX Zone 40-50 Strong Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5414: ADX > 50 + -DI > 30 (�ſ� ���� �϶�) */
    static strategy5414(ind) {
        const match = ind.adx?.adx > 50 && ind.adx?.minusDI > 30;
        return { id: 5414, name: 'ADX 50+ minusDI 30+ Strong', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5415: ADX > 40 + -DI > 35 */
    static strategy5415(ind) {
        const match = ind.adx?.adx > 40 && ind.adx?.minusDI > 35;
        return { id: 5415, name: 'ADX 40+ minusDI 35+', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5416: ADX > 35 + -DI > 30 */
    static strategy5416(ind) {
        const match = ind.adx?.adx > 35 && ind.adx?.minusDI > 30;
        return { id: 5416, name: 'ADX 35+ minusDI 30+', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5417: ADX > 30 + -DI > 25 */
    static strategy5417(ind) {
        const match = ind.adx?.adx > 30 && ind.adx?.minusDI > 25;
        return { id: 5417, name: 'ADX 30+ minusDI 25+', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5418: ADX > 25 + -DI > 20 */
    static strategy5418(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > 20;
        return { id: 5418, name: 'ADX 25+ minusDI 20+', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 };
    }
    
    /** ���� 5419: -DI > 40 (�ſ� ���� �϶� ����) */
    static strategy5419(ind) {
        const match = ind.adx?.minusDI > 40;
        return { id: 5419, name: 'minusDI Very Strong 40+', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5420: -DI > 35 + ADX > 25 */
    static strategy5420(ind) {
        const match = ind.adx?.minusDI > 35 && ind.adx?.adx > 25;
        return { id: 5420, name: 'minusDI 35+ ADX 25+', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5421: -DI > 30 + ADX ��� */
    static strategy5421(ind) {
        const match = ind.adx?.minusDI > 30 && ind.adx?.adx > ind.adx?.prevAdx;
        return { id: 5421, name: 'minusDI 30+ ADX Rising', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5422: -DI ��� + ADX > 25 (�϶� ���?? ��ȭ) */
    static strategy5422(ind) {
        const match = ind.adx?.minusDI > ind.adx?.prevMinusDI && ind.adx?.adx > 25;
        return { id: 5422, name: 'minusDI Rising ADX 25+', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5423: -DI ��� + +DI �϶� (���� ??��) */
    static strategy5423(ind) {
        const match = ind.adx?.minusDI > ind.adx?.prevMinusDI && ind.adx?.plusDI < ind.adx?.prevPlusDI;
        return { id: 5423, name: 'minusDI Up plusDI Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5424: ADX < 20 + -DI > +DI (??�� �߼� ����) */
    static strategy5424(ind) {
        const match = ind.adx?.adx < 20 && ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.adx > ind.adx?.prevAdx;
        return { id: 5424, name: 'ADX Weak Rising Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 62 : 0 };
    }
    
    /** ���� 5425: ADX ????�ݵ� + -DI �߼� */
    static strategy5425(ind) {
        const match = ind.adx?.adx > 15 && ind.adx?.prevAdx <= 15 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5425, name: 'ADX Bounce From Low + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 66 : 0 };
    }
    
    // ==================== +DI/-DI ??��??(5426-5450) ====================
    
    /** ���� 5426: -DI�� +DI ??�� ??�� (����??��?? */
    static strategy5426(ind) {
        const match = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        return { id: 5426, name: 'DI Dead Cross Signal', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5427: DI ����??��??+ ADX > 20 */
    static strategy5427(ind) {
        const cross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = cross && ind.adx?.adx > 20;
        return { id: 5427, name: 'DI Dead Cross ADX 20+', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5428: DI ����??��??+ ADX > 25 */
    static strategy5428(ind) {
        const cross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = cross && ind.adx?.adx > 25;
        return { id: 5428, name: 'DI Dead Cross ADX 25+', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5429: DI ����??��??+ ADX > 30 */
    static strategy5429(ind) {
        const cross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = cross && ind.adx?.adx > 30;
        return { id: 5429, name: 'DI Dead Cross ADX 30+', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5430: DI ����??��??+ ADX ��� */
    static strategy5430(ind) {
        const cross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = cross && ind.adx?.adx > ind.adx?.prevAdx;
        return { id: 5430, name: 'DI Dead Cross ADX Rising', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5431: -DI > +DI ???? (2??����) */
    static strategy5431(ind) {
        const match = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI > ind.adx?.prevPlusDI;
        return { id: 5431, name: 'DI Dead Maintained 2-Bar', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5432: -DI > +DI ???? + ADX > 25 */
    static strategy5432(ind) {
        const match = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI > ind.adx?.prevPlusDI && ind.adx?.adx > 25;
        return { id: 5432, name: 'DI Dead Maintained ADX 25+', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5433: -DI > +DI ?????? */
    static strategy5433(ind) {
        const gap = ind.adx?.minusDI - ind.adx?.plusDI;
        const prevGap = ind.adx?.prevMinusDI - ind.adx?.prevPlusDI;
        const match = gap > 0 && gap > prevGap;
        return { id: 5433, name: 'DI Gap Widening Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5434: -DI > +DI ??> 5 */
    static strategy5434(ind) {
        const gap = ind.adx?.minusDI - ind.adx?.plusDI;
        const match = gap > 5;
        return { id: 5434, name: 'DI Gap 5+ Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 };
    }
    
    /** ���� 5435: -DI > +DI ??> 10 */
    static strategy5435(ind) {
        const gap = ind.adx?.minusDI - ind.adx?.plusDI;
        const match = gap > 10;
        return { id: 5435, name: 'DI Gap 10+ Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5436: -DI > +DI ??> 15 */
    static strategy5436(ind) {
        const gap = ind.adx?.minusDI - ind.adx?.plusDI;
        const match = gap > 15;
        return { id: 5436, name: 'DI Gap 15+ Strong Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5437: -DI > +DI ??> 20 (�ſ� ���� �϶�) */
    static strategy5437(ind) {
        const gap = ind.adx?.minusDI - ind.adx?.plusDI;
        const match = gap > 20;
        return { id: 5437, name: 'DI Gap 20+ Very Strong Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5438: DI ����??��??1���� �߻� */
    static strategy5438(ind) {
        const match = ind.adx?.minusDI > ind.adx?.plusDI && 
                     ind.adx?.prevMinusDI > ind.adx?.prevPlusDI &&
                     ind.adx?.prev2MinusDI <= ind.adx?.prev2PlusDI;
        return { id: 5438, name: 'DI Dead Cross 1-Bar Ago', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5439: DI ���� ??�� (3??����) */
    static strategy5439(ind) {
        const match = ind.adx?.minusDI > ind.adx?.plusDI && 
                     ind.adx?.prevMinusDI > ind.adx?.prevPlusDI &&
                     ind.adx?.prev2MinusDI > ind.adx?.prev2PlusDI;
        return { id: 5439, name: 'DI Dead Confirmed 3-Bar', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5440: +DI �޶� + -DI ��� */
    static strategy5440(ind) {
        const plusDrop = ind.adx?.prevPlusDI - ind.adx?.plusDI;
        const match = plusDrop >= 5 && ind.adx?.minusDI > ind.adx?.prevMinusDI;
        return { id: 5440, name: 'plusDI Drop minusDI Rise', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5441: +DI < 20 + -DI > 25 */
    static strategy5441(ind) {
        const match = ind.adx?.plusDI < 20 && ind.adx?.minusDI > 25;
        return { id: 5441, name: 'plusDI Low minusDI High', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5442: +DI < 15 + -DI > 30 */
    static strategy5442(ind) {
        const match = ind.adx?.plusDI < 15 && ind.adx?.minusDI > 30;
        return { id: 5442, name: 'plusDI Very Low minusDI Strong', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5443: +DI �϶� �߼� + -DI > +DI */
    static strategy5443(ind) {
        const match = ind.adx?.plusDI < ind.adx?.prevPlusDI && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5443, name: 'plusDI Falling + Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5444: -DI ��� �߼� + ADX ��� */
    static strategy5444(ind) {
        const match = ind.adx?.minusDI > ind.adx?.prevMinusDI && ind.adx?.adx > ind.adx?.prevAdx;
        return { id: 5444, name: 'minusDI Rising ADX Rising', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5445: DI ���� + -DI > 25 + ADX > 25 */
    static strategy5445(ind) {
        const match = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.minusDI > 25 && ind.adx?.adx > 25;
        return { id: 5445, name: 'DI Dead minusDI25+ ADX25+', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5446: DI ���� + -DI > 30 + ADX > 30 */
    static strategy5446(ind) {
        const match = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.minusDI > 30 && ind.adx?.adx > 30;
        return { id: 5446, name: 'DI Dead minusDI30+ ADX30+', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5447: +DI 20????�� ??�� + -DI �߼� */
    static strategy5447(ind) {
        const match = ind.adx?.plusDI < 20 && ind.adx?.prevPlusDI >= 20 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5447, name: 'plusDI Break 20 + Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5448: -DI 25????�� ??�� + DI ���� */
    static strategy5448(ind) {
        const match = ind.adx?.minusDI > 25 && ind.adx?.prevMinusDI <= 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 5448, name: 'minusDI Break 25 + Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5449: -DI 30????�� ??�� */
    static strategy5449(ind) {
        const match = ind.adx?.minusDI > 30 && ind.adx?.prevMinusDI <= 30;
        return { id: 5449, name: 'minusDI Break 30 Up', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5450: DI ���� + ??DI ??�� ����(�϶� ��ȭ) */
    static strategy5450(ind) {
        const match = ind.adx?.minusDI > ind.adx?.plusDI && 
                     ind.adx?.minusDI > ind.adx?.prevMinusDI && ind.adx?.plusDI < ind.adx?.prevPlusDI;
        return { id: 5450, name: 'DI Dead Both DI Confirming', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    // ==================== ADX + RSI/MACD ���� (5451-5475) ====================
    
    /** ���� 5451: ADX > 25 + -DI�߼� + RSI > 60 */
    static strategy5451(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.rsi > 60;
        return { id: 5451, name: 'ADX Down + RSI High', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5452: ADX > 30 + -DI�߼� + RSI > 55 */
    static strategy5452(ind) {
        const match = ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI && ind.rsi > 55;
        return { id: 5452, name: 'ADX 30 Down + RSI 55+', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5453: ADX > 35 + -DI�߼� + RSI 50-65 */
    static strategy5453(ind) {
        const match = ind.adx?.adx > 35 && ind.adx?.minusDI > ind.adx?.plusDI && ind.rsi >= 50 && ind.rsi <= 65;
        return { id: 5453, name: 'ADX 35 Down + RSI Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5454: ADX > 40 + -DI�߼� + RSI 45-60 */
    static strategy5454(ind) {
        const match = ind.adx?.adx > 40 && ind.adx?.minusDI > ind.adx?.plusDI && ind.rsi >= 45 && ind.rsi <= 60;
        return { id: 5454, name: 'ADX 40 Down + RSI Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5455: DI ����??��??+ RSI > 60 */
    static strategy5455(ind) {
        const cross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = cross && ind.rsi > 60;
        return { id: 5455, name: 'DI Dead Cross + RSI 60+', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5456: DI ����??��??+ RSI 55-70 */
    static strategy5456(ind) {
        const cross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = cross && ind.rsi >= 55 && ind.rsi <= 70;
        return { id: 5456, name: 'DI Dead Cross + RSI Mid-High', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5457: ADX ��� + -DI�߼� + RSI �϶� */
    static strategy5457(ind) {
        const match = ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.plusDI && ind.rsi < ind.prevRsi;
        return { id: 5457, name: 'ADX Rise + Down + RSI Fall', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5458: ADX > 25 + -DI�߼� + MACD ���� */
    static strategy5458(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5458, name: 'ADX Down + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5459: ADX > 30 + -DI�߼� + MACD ??�� */
    static strategy5459(ind) {
        const match = ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI && ind.macd?.histogram < 0;
        return { id: 5459, name: 'ADX 30 Down + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5460: ADX > 35 + -DI�߼� + MACD hist < -10 */
    static strategy5460(ind) {
        const match = ind.adx?.adx > 35 && ind.adx?.minusDI > ind.adx?.plusDI && ind.macd?.histogram < -10;
        return { id: 5460, name: 'ADX 35 Down + MACD Strong Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5461: DI ����??��??+ MACD ���� */
    static strategy5461(ind) {
        const cross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = cross && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5461, name: 'DI + MACD Double Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5462: DI ���� + MACD ��ȯ �϶� */
    static strategy5462(ind) {
        const macdTurn = ind.macd?.histogram < 0 && ind.macd?.prevHistogram >= 0;
        const match = ind.adx?.minusDI > ind.adx?.plusDI && macdTurn;
        return { id: 5462, name: 'DI Dead + MACD Turn Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5463: ADX ��� + MACD �϶� (�߼� ��ȭ + ���??) */
    static strategy5463(ind) {
        const match = ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.plusDI && 
                     ind.macd?.histogram < ind.macd?.prevHistogram;
        return { id: 5463, name: 'ADX Rise + MACD Fall', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5464: ADX > 30 + RSI > 55 + MACD ??�� */
    static strategy5464(ind) {
        const match = ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI && ind.rsi > 55 && ind.macd?.histogram < 0;
        return { id: 5464, name: 'ADX 30 + RSI 55 + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5465: ADX > 35 + RSI 50-65 + MACD ���� */
    static strategy5465(ind) {
        const match = ind.adx?.adx > 35 && ind.adx?.minusDI > ind.adx?.plusDI && 
                     ind.rsi >= 50 && ind.rsi <= 65 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5465, name: 'ADX 35 + RSI Mid + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5466: DI ���� + RSI �϶� + MACD �϶� */
    static strategy5466(ind) {
        const match = ind.adx?.minusDI > ind.adx?.plusDI && ind.rsi < ind.prevRsi && 
                     ind.macd?.histogram < ind.macd?.prevHistogram;
        return { id: 5466, name: 'DI Dead + RSI MACD Both Fall', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5467: ADX > 40 + RSI 45-60 + MACD hist < -10 */
    static strategy5467(ind) {
        const match = ind.adx?.adx > 40 && ind.adx?.minusDI > ind.adx?.plusDI && 
                     ind.rsi >= 45 && ind.rsi <= 60 && ind.macd?.histogram < -10;
        return { id: 5467, name: 'ADX Strong + RSI + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5468: -DI > 30 + RSI 50-65 + MACD ���� */
    static strategy5468(ind) {
        const match = ind.adx?.minusDI > 30 && ind.rsi >= 50 && ind.rsi <= 65 && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5468, name: 'minusDI 30 + RSI + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5469: DI ??> 10 + RSI > 55 + MACD ??�� */
    static strategy5469(ind) {
        const gap = ind.adx?.minusDI - ind.adx?.plusDI;
        const match = gap > 10 && ind.rsi > 55 && ind.macd?.histogram < 0;
        return { id: 5469, name: 'DI Gap 10 + RSI + MACD', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5470: ADX ��� + DI ���� + RSI 55-70 */
    static strategy5470(ind) {
        const match = ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.plusDI && 
                     ind.rsi >= 55 && ind.rsi <= 70;
        return { id: 5470, name: 'ADX Rise + Dead + RSI High', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5471: ADX 20-30 + DI ���� + MACD ���� (�߼� ����) */
    static strategy5471(ind) {
        const match = ind.adx?.adx >= 20 && ind.adx?.adx <= 30 && ind.adx?.minusDI > ind.adx?.plusDI && 
                     ind.macd?.MACD < ind.macd?.signal;
        return { id: 5471, name: 'ADX Start + DI MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5472: ADX 30-40 + DI ���� + RSI 50-60 (�߼� ����) */
    static strategy5472(ind) {
        const match = ind.adx?.adx >= 30 && ind.adx?.adx <= 40 && ind.adx?.minusDI > ind.adx?.plusDI && 
                     ind.rsi >= 50 && ind.rsi <= 60;
        return { id: 5472, name: 'ADX Progress + DI + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5473: ADX > 25 + RSI 50????�� ??�� + DI ���� */
    static strategy5473(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.rsi > 50 && ind.prevRsi >= 50;
        return { id: 5473, name: 'ADX + RSI Break 50 + DI Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5474: DI ���� + MACD 0????�� ??�� */
    static strategy5474(ind) {
        const match = ind.adx?.minusDI > ind.adx?.plusDI && ind.macd?.MACD < 0 && ind.macd?.prevMACD >= 0;
        return { id: 5474, name: 'DI Dead + MACD Break Zero', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5475: ADX + RSI + MACD ??��??�϶� ??ȣ */
    static strategy5475(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && 
                     ind.rsi > 50 && ind.rsi < ind.prevRsi && ind.macd?.MACD < ind.macd?.signal;
        return { id: 5475, name: 'ADX RSI MACD Triple Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    // ==================== ADX + BB/EMA/���� ���� (5476-5500) ====================
    
    /** ���� 5476: ADX > 25 + -DI�߼� + BB > 60 */
    static strategy5476(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.bollingerBands?.position > 60;
        return { id: 5476, name: 'ADX Down + BB Upper', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 };
    }
    
    /** ���� 5477: ADX > 30 + -DI�߼� + BB 55-75 */
    static strategy5477(ind) {
        const match = ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI && 
                     ind.bollingerBands?.position >= 55 && ind.bollingerBands?.position <= 75;
        return { id: 5477, name: 'ADX 30 Down + BB Mid-High', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 5478: ADX > 35 + -DI�߼� + BB 50-70 */
    static strategy5478(ind) {
        const match = ind.adx?.adx > 35 && ind.adx?.minusDI > ind.adx?.plusDI && 
                     ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 70;
        return { id: 5478, name: 'ADX 35 Down + BB Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5479: DI ���� + BB �߰�????�� ??�� */
    static strategy5479(ind) {
        const match = ind.adx?.minusDI > ind.adx?.plusDI && ind.bollingerBands?.position < 50;
        return { id: 5479, name: 'DI Dead + BB Below Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ���� 5480: ADX > 30 + -DI�߼� + BB ���??���� */
    static strategy5480(ind) {
        const match = ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI && ind.bollingerBands?.bandwidth > 4;
        return { id: 5480, name: 'ADX 30 Down + BB Expanding', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5481: ADX > 25 + -DI�߼� + EMA ���� */
    static strategy5481(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.ema20 < ind.ema50;
        return { id: 5481, name: 'ADX Down + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5482: ADX > 30 + -DI�߼� + EMA ??????*/
    static strategy5482(ind) {
        const match = ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI && ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100;
        return { id: 5482, name: 'ADX 30 Down + EMA Stack Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5483: DI ���� + ��??< EMA20 */
    static strategy5483(ind) {
        const match = ind.adx?.minusDI > ind.adx?.plusDI && ind.price < ind.ema20;
        return { id: 5483, name: 'DI Dead + Price Below EMA20', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 };
    }
    
    /** ���� 5484: ADX > 30 + ��??< EMA20 < EMA50 */
    static strategy5484(ind) {
        const match = ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI && ind.price < ind.ema20 && ind.ema20 < ind.ema50;
        return { id: 5484, name: 'ADX 30 + Price Below EMA Stack', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5485: ADX > 25 + -DI�߼� + SMA ���� */
    static strategy5485(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.sma20 < ind.sma50;
        return { id: 5485, name: 'ADX Down + SMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5486: ADX > 30 + EMA + SMA ���� ���� */
    static strategy5486(ind) {
        const match = ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI && ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50;
        return { id: 5486, name: 'ADX 30 + Double MA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5487: DI ����??��??+ EMA ���� + BB > 55 */
    static strategy5487(ind) {
        const cross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = cross && ind.ema20 < ind.ema50 && ind.bollingerBands?.position > 55;
        return { id: 5487, name: 'DI Cross + EMA Dead + BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 5488: ADX + RSI + BB ??��??*/
    static strategy5488(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.rsi > 55 && ind.bollingerBands?.position > 55;
        return { id: 5488, name: 'ADX + RSI + BB Triple Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 5489: ADX + MACD + EMA ??��??*/
    static strategy5489(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && 
                     ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50;
        return { id: 5489, name: 'ADX + MACD + EMA Triple Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5490: ADX + RSI + MACD + BB ���� */
    static strategy5490(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && 
                     ind.rsi > 50 && ind.macd?.histogram < 0 && ind.bollingerBands?.position > 45;
        return { id: 5490, name: 'ADX RSI MACD BB Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5491: ADX + RSI + MACD + EMA ���� */
    static strategy5491(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && 
                     ind.rsi > 50 && ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50;
        return { id: 5491, name: 'ADX RSI MACD EMA Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 5492: ADX ���� �߼� + ??ü ��??Ȯ�� */
    static strategy5492(ind) {
        const match = ind.adx?.adx > 35 && ind.adx?.minusDI > ind.adx?.plusDI && 
                     ind.rsi >= 45 && ind.rsi <= 65 && ind.macd?.histogram < 0 && ind.ema20 < ind.ema50;
        return { id: 5492, name: 'ADX Strong + All Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 5493: DI ���� + Stoch ���ż�*/
    static strategy5493(ind) {
        const match = ind.adx?.minusDI > ind.adx?.plusDI && ind.stochastic?.k > 80;
        return { id: 5493, name: 'DI Dead + Stoch Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 5494: ADX > 25 + Stoch ���� */
    static strategy5494(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.stochastic?.k < ind.stochastic?.d;
        return { id: 5494, name: 'ADX Down + Stoch Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 5495: ADX + Stoch + RSI ??��??*/
    static strategy5495(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && 
                     ind.stochastic?.k > 70 && ind.rsi > 55;
        return { id: 5495, name: 'ADX + Stoch + RSI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 5496: DI ���� + Stoch ���� + MACD ���� */
    static strategy5496(ind) {
        const match = ind.adx?.minusDI > ind.adx?.plusDI && ind.stochastic?.k < ind.stochastic?.d && 
                     ind.macd?.MACD < ind.macd?.signal;
        return { id: 5496, name: 'DI Stoch MACD Triple Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 5497: ADX ��� + ��� ��??�϶� ���� */
    static strategy5497(ind) {
        const match = ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.adx > 20 && ind.adx?.minusDI > ind.adx?.plusDI &&
                     ind.rsi < ind.prevRsi && ind.macd?.histogram < ind.macd?.prevHistogram;
        return { id: 5497, name: 'ADX Rise + All Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 5498: ADX + RSI + MACD + BB + EMA ??�� */
    static strategy5498(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI &&
                     ind.rsi > 48 && ind.macd?.histogram < 5 && ind.bollingerBands?.position > 40 && ind.ema20 < ind.ema50;
        return { id: 5498, name: 'ADX Penta Indicator Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 5499: DI ����??��??+ ??ü Ȯ�� */
    static strategy5499(ind) {
        const cross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = cross && ind.rsi > 50 && ind.macd?.histogram < 0 && ind.bollingerBands?.position > 45;
        return { id: 5499, name: 'DI Cross + Full Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 5500: ADX Ȯ��??����� */
    static strategy5500(ind) {
        const match = ind.adx?.adx > 20 && ind.adx?.minusDI > ind.adx?.plusDI &&
                     ind.rsi > 45 && ind.macd?.histogram < 10 && ind.bollingerBands?.position > 35;
        return { id: 5500, name: 'ADX All-In-One Bearish', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 };
    }
    
    /** ��� ���� ??�� (5401-5500) */
    static analyzeAll(indicators) {
        return [
            this.strategy5401(indicators), this.strategy5402(indicators), this.strategy5403(indicators),
            this.strategy5404(indicators), this.strategy5405(indicators), this.strategy5406(indicators),
            this.strategy5407(indicators), this.strategy5408(indicators), this.strategy5409(indicators),
            this.strategy5410(indicators), this.strategy5411(indicators), this.strategy5412(indicators),
            this.strategy5413(indicators), this.strategy5414(indicators), this.strategy5415(indicators),
            this.strategy5416(indicators), this.strategy5417(indicators), this.strategy5418(indicators),
            this.strategy5419(indicators), this.strategy5420(indicators), this.strategy5421(indicators),
            this.strategy5422(indicators), this.strategy5423(indicators), this.strategy5424(indicators),
            this.strategy5425(indicators), this.strategy5426(indicators), this.strategy5427(indicators),
            this.strategy5428(indicators), this.strategy5429(indicators), this.strategy5430(indicators),
            this.strategy5431(indicators), this.strategy5432(indicators), this.strategy5433(indicators),
            this.strategy5434(indicators), this.strategy5435(indicators), this.strategy5436(indicators),
            this.strategy5437(indicators), this.strategy5438(indicators), this.strategy5439(indicators),
            this.strategy5440(indicators), this.strategy5441(indicators), this.strategy5442(indicators),
            this.strategy5443(indicators), this.strategy5444(indicators), this.strategy5445(indicators),
            this.strategy5446(indicators), this.strategy5447(indicators), this.strategy5448(indicators),
            this.strategy5449(indicators), this.strategy5450(indicators), this.strategy5451(indicators),
            this.strategy5452(indicators), this.strategy5453(indicators), this.strategy5454(indicators),
            this.strategy5455(indicators), this.strategy5456(indicators), this.strategy5457(indicators),
            this.strategy5458(indicators), this.strategy5459(indicators), this.strategy5460(indicators),
            this.strategy5461(indicators), this.strategy5462(indicators), this.strategy5463(indicators),
            this.strategy5464(indicators), this.strategy5465(indicators), this.strategy5466(indicators),
            this.strategy5467(indicators), this.strategy5468(indicators), this.strategy5469(indicators),
            this.strategy5470(indicators), this.strategy5471(indicators), this.strategy5472(indicators),
            this.strategy5473(indicators), this.strategy5474(indicators), this.strategy5475(indicators),
            this.strategy5476(indicators), this.strategy5477(indicators), this.strategy5478(indicators),
            this.strategy5479(indicators), this.strategy5480(indicators), this.strategy5481(indicators),
            this.strategy5482(indicators), this.strategy5483(indicators), this.strategy5484(indicators),
            this.strategy5485(indicators), this.strategy5486(indicators), this.strategy5487(indicators),
            this.strategy5488(indicators), this.strategy5489(indicators), this.strategy5490(indicators),
            this.strategy5491(indicators), this.strategy5492(indicators), this.strategy5493(indicators),
            this.strategy5494(indicators), this.strategy5495(indicators), this.strategy5496(indicators),
            this.strategy5497(indicators), this.strategy5498(indicators), this.strategy5499(indicators),
            this.strategy5500(indicators)
        ];
    }
}

