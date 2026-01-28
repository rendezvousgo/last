/**
 * DOWN ���� 9601-9800 (200��)
 * ��� ���� �ý��� + ��Ƽ Ÿ�������� ����
 * 
 * 9601-9650: RSI+MACD+BB+EMA ���� ���� (���� �Ӱ谪)
 * 9651-9700: RSI+MACD+BB+EMA ���� ���� (�߰� �Ӱ谪)  
 * 9701-9750: RSI+MACD+BB+Volume ���� ����
 * 9751-9800: RSI+ADX+Stochastic+EMA ���� ����
 */

export class StrategiesDown9601 {
    
    // ==================== ���� ���� �Լ� ====================
    
    /** RSI ���� (0-30) - DOWN��: �������� ���� */
    static getRsiScore(rsi) {
        if (rsi >= 80) return 30;
        if (rsi >= 75) return 27;
        if (rsi >= 70) return 24;
        if (rsi >= 65) return 21;
        if (rsi >= 60) return 18;
        if (rsi >= 55) return 15;
        if (rsi >= 50) return 10;
        return 0;
    }
    
    /** MACD ���� (0-25) - DOWN��: ����ũ�ν�/������ ���� */
    static getMacdScore(macd) {
        if (!macd) return 0;
        let score = 0;
        if (macd.MACD < macd.signal) score += 10;
        if (macd.MACD < 0) score += 5;
        if (macd.histogram < 0) score += 5;
        const prevHist = macd.prevHistogram || macd.histogram;
        if (macd.histogram < prevHist) score += 5;
        return score;
    }
    
    /** BB ���� (0-20) - DOWN��: �������� ���� */
    static getBbScore(bb) {
        if (!bb) return 0;
        const pos = bb.position || 50;
        if (pos >= 90) return 20;
        if (pos >= 80) return 16;
        if (pos >= 70) return 12;
        if (pos >= 60) return 8;
        if (pos >= 50) return 4;
        return 0;
    }
    
    /** EMA ���� (0-20) - DOWN��: �϶� �迭�� ���� */
    static getEmaScore(ind) {
        let score = 0;
        if (ind.close < ind.ema20) score += 5;
        if (ind.ema20 < ind.ema50) score += 5;
        if (ind.ema50 < ind.ema100) score += 5;
        if (ind.close < ind.sma200) score += 5;
        return score;
    }
    
    /** ADX ���� (0-20) - DOWN��: ���� �϶� �߼� */
    static getAdxScore(adx) {
        if (!adx) return 0;
        let score = 0;
        if (adx.adx > 40) score += 8;
        else if (adx.adx > 30) score += 6;
        else if (adx.adx > 25) score += 4;
        if (adx.minusDI > adx.plusDI) score += 8;
        if (adx.minusDI > 30) score += 4;
        return Math.min(score, 20);
    }
    
    /** Stochastic ���� (0-20) - DOWN��: ���ż� �� �϶� */
    static getStochScore(stoch) {
        if (!stoch) return 0;
        let score = 0;
        if (stoch.k > 80) score += 10;
        else if (stoch.k > 70) score += 7;
        else if (stoch.k > 60) score += 4;
        if (stoch.k < stoch.d) score += 10;
        return Math.min(score, 20);
    }
    
    /** ���� ���� (0-15) */
    static getVolumeScore(ind) {
        const volRatio = ind.avgVolume ? ind.volume / ind.avgVolume : 1;
        if (volRatio > 2.0) return 15;
        if (volRatio > 1.5) return 12;
        if (volRatio > 1.2) return 8;
        if (volRatio > 1.0) return 4;
        return 0;
    }
    
    // ==================== RSI+MACD+BB+EMA ���� ���� ���� �Ӱ谪 (9601-9650) ====================
    
    static strategy9601(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 75 && ind.rsi > 65; return { id: 9601, name: 'Quad Score Elite 75+', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy9602(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 73 && ind.rsi > 64; return { id: 9602, name: 'Quad Score Elite 73+', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy9603(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 71 && ind.rsi > 63; return { id: 9603, name: 'Quad Score Elite 71+', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy9604(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 69 && ind.rsi > 62; return { id: 9604, name: 'Quad Score Elite 69+', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy9605(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 67 && ind.rsi > 61; return { id: 9605, name: 'Quad Score Elite 67+', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy9606(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 65 && ind.rsi > 60; return { id: 9606, name: 'Quad Score High 65+', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy9607(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 63 && ind.rsi > 59; return { id: 9607, name: 'Quad Score High 63+', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy9608(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 61 && ind.rsi > 58; return { id: 9608, name: 'Quad Score High 61+', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy9609(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 59 && ind.rsi > 57; return { id: 9609, name: 'Quad Score High 59+', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy9610(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 57 && ind.rsi > 56; return { id: 9610, name: 'Quad Score High 57+', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    
    static strategy9611(ind) { const rs = this.getRsiScore(ind.rsi); const ms = this.getMacdScore(ind.macd); const match = rs >= 24 && ms >= 20 && ind.rsi > 65; return { id: 9611, name: 'RSI+MACD Elite Focus', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy9612(ind) { const rs = this.getRsiScore(ind.rsi); const bs = this.getBbScore(ind.bollingerBands); const match = rs >= 24 && bs >= 16 && ind.rsi > 65; return { id: 9612, name: 'RSI+BB Elite Focus', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy9613(ind) { const rs = this.getRsiScore(ind.rsi); const es = this.getEmaScore(ind); const match = rs >= 24 && es >= 15 && ind.rsi > 65; return { id: 9613, name: 'RSI+EMA Elite Focus', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy9614(ind) { const ms = this.getMacdScore(ind.macd); const bs = this.getBbScore(ind.bollingerBands); const match = ms >= 20 && bs >= 16 && ind.rsi > 60; return { id: 9614, name: 'MACD+BB Elite Focus', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy9615(ind) { const ms = this.getMacdScore(ind.macd); const es = this.getEmaScore(ind); const match = ms >= 20 && es >= 15 && ind.rsi > 60; return { id: 9615, name: 'MACD+EMA Elite Focus', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy9616(ind) { const bs = this.getBbScore(ind.bollingerBands); const es = this.getEmaScore(ind); const match = bs >= 16 && es >= 15 && ind.rsi > 60; return { id: 9616, name: 'BB+EMA Elite Focus', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy9617(ind) { const rs = this.getRsiScore(ind.rsi); const ms = this.getMacdScore(ind.macd); const bs = this.getBbScore(ind.bollingerBands); const match = rs >= 21 && ms >= 15 && bs >= 12; return { id: 9617, name: 'Triple Score Balance', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy9618(ind) { const rs = this.getRsiScore(ind.rsi); const ms = this.getMacdScore(ind.macd); const es = this.getEmaScore(ind); const match = rs >= 21 && ms >= 15 && es >= 10; return { id: 9618, name: 'RSI+MACD+EMA Balance', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy9619(ind) { const rs = this.getRsiScore(ind.rsi); const bs = this.getBbScore(ind.bollingerBands); const es = this.getEmaScore(ind); const match = rs >= 21 && bs >= 12 && es >= 10; return { id: 9619, name: 'RSI+BB+EMA Balance', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy9620(ind) { const ms = this.getMacdScore(ind.macd); const bs = this.getBbScore(ind.bollingerBands); const es = this.getEmaScore(ind); const match = ms >= 15 && bs >= 12 && es >= 10 && ind.rsi > 55; return { id: 9620, name: 'MACD+BB+EMA Balance', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    
    static strategy9621(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands); const match = s >= 55 && ind.macd?.MACD < ind.macd?.signal; return { id: 9621, name: 'RSI+MACD+BB Dead Cross', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy9622(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getEmaScore(ind); const match = s >= 50 && ind.ema20 < ind.ema50; return { id: 9622, name: 'RSI+MACD+EMA Dead Cross', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy9623(ind) { const s = this.getRsiScore(ind.rsi) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 48 && ind.bollingerBands?.position > 70; return { id: 9623, name: 'RSI+BB+EMA Upper Zone', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy9624(ind) { const s = this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 40 && ind.rsi > 58 && ind.macd?.histogram < 0; return { id: 9624, name: 'MACD+BB+EMA Hist Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy9625(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd); const match = s >= 45 && ind.rsi > 65 && ind.bollingerBands?.position > 65; return { id: 9625, name: 'RSI+MACD + BB Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy9626(ind) { const s = this.getRsiScore(ind.rsi) + this.getBbScore(ind.bollingerBands); const match = s >= 40 && ind.rsi > 62 && ind.macd?.MACD < ind.macd?.signal; return { id: 9626, name: 'RSI+BB + MACD Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy9627(ind) { const s = this.getMacdScore(ind.macd) + this.getEmaScore(ind); const match = s >= 30 && ind.rsi > 60 && ind.bollingerBands?.position > 60; return { id: 9627, name: 'MACD+EMA + Multi Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy9628(ind) { const s = this.getRsiScore(ind.rsi) + this.getEmaScore(ind); const match = s >= 35 && ind.macd?.histogram < -5 && ind.bollingerBands?.position > 55; return { id: 9628, name: 'RSI+EMA + Hist Strong', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy9629(ind) { const s = this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 28 && ind.rsi > 60 && ind.macd?.MACD < 0; return { id: 9629, name: 'BB+EMA + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy9630(ind) { const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = total >= 60 && ind.rsi >= 58 && ind.rsi <= 72; return { id: 9630, name: 'Quad Score Mid-High', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    
    static strategy9631(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 55 && ind.rsi > 55 && ind.close < ind.ema20; return { id: 9631, name: 'Quad Score Below EMA20', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy9632(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 52 && ind.rsi > 54 && ind.close < ind.sma20; return { id: 9632, name: 'Quad Score Below SMA20', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy9633(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 50 && ind.macd?.histogram < ind.macd?.prevHistogram; return { id: 9633, name: 'Quad Score Hist Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy9634(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 48 && ind.rsi < (ind.prevRsi || 100); return { id: 9634, name: 'Quad Score RSI Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy9635(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 46 && ind.bollingerBands?.position < (ind.bollingerBands?.prevPosition || 100); return { id: 9635, name: 'Quad Score BB Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy9636(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands); const match = s >= 45 && ind.rsi > 55 && ind.ema20 < ind.ema50; return { id: 9636, name: 'Triple Score EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy9637(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getEmaScore(ind); const match = s >= 42 && ind.rsi > 55 && ind.bollingerBands?.position > 55; return { id: 9637, name: 'Triple Score BB Upper', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy9638(ind) { const s = this.getRsiScore(ind.rsi) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 40 && ind.macd?.MACD < ind.macd?.signal && ind.rsi > 55; return { id: 9638, name: 'Triple Score MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy9639(ind) { const s = this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 35 && ind.rsi > 58 && ind.rsi < (ind.prevRsi || 100); return { id: 9639, name: 'Triple Score RSI Drop', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy9640(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 44 && ind.rsi > 52 && ind.macd?.histogram < -3; return { id: 9640, name: 'Quad Score Hist Negative', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 }; }
    
    static strategy9641(ind) { const rs = this.getRsiScore(ind.rsi); const match = rs >= 27 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 70; return { id: 9641, name: 'RSI Score Elite + Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy9642(ind) { const ms = this.getMacdScore(ind.macd); const match = ms >= 22 && ind.rsi > 65 && ind.bollingerBands?.position > 65; return { id: 9642, name: 'MACD Score Elite + Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy9643(ind) { const bs = this.getBbScore(ind.bollingerBands); const match = bs >= 18 && ind.rsi > 62 && ind.macd?.histogram < 0; return { id: 9643, name: 'BB Score Elite + Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy9644(ind) { const es = this.getEmaScore(ind); const match = es >= 17 && ind.rsi > 60 && ind.macd?.MACD < ind.macd?.signal; return { id: 9644, name: 'EMA Score Elite + Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy9645(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd); const match = s >= 48 && ind.bollingerBands?.position > 72 && ind.ema20 < ind.ema50; return { id: 9645, name: 'RSI+MACD + Double Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy9646(ind) { const s = this.getRsiScore(ind.rsi) + this.getBbScore(ind.bollingerBands); const match = s >= 42 && ind.macd?.histogram < -5 && ind.close < ind.ema20; return { id: 9646, name: 'RSI+BB + Double Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy9647(ind) { const s = this.getMacdScore(ind.macd) + this.getEmaScore(ind); const match = s >= 32 && ind.rsi > 62 && ind.bollingerBands?.position > 68; return { id: 9647, name: 'MACD+EMA + Double Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy9648(ind) { const s = this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 30 && ind.rsi > 60 && ind.macd?.MACD < 0; return { id: 9648, name: 'BB+EMA + RSI+MACD Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy9649(ind) { const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = total >= 70 && ind.rsi > 68; return { id: 9649, name: 'Quad Score Premium', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy9650(ind) { const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = total >= 68 && ind.rsi > 66; return { id: 9650, name: 'Quad Score Superior', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 }; }
    
    // ==================== RSI+MACD+BB+EMA ���� ���� �߰� �Ӱ谪 (9651-9700) ====================
    
    static strategy9651(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 55 && ind.rsi > 55; return { id: 9651, name: 'Quad Score Mid 55+', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy9652(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 53 && ind.rsi > 54; return { id: 9652, name: 'Quad Score Mid 53+', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy9653(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 51 && ind.rsi > 53; return { id: 9653, name: 'Quad Score Mid 51+', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy9654(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 49 && ind.rsi > 52; return { id: 9654, name: 'Quad Score Mid 49+', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy9655(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 47 && ind.rsi > 51; return { id: 9655, name: 'Quad Score Mid 47+', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy9656(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 45 && ind.rsi > 50; return { id: 9656, name: 'Quad Score Base 45+', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy9657(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 43 && ind.rsi > 49; return { id: 9657, name: 'Quad Score Base 43+', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy9658(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 41 && ind.rsi > 48; return { id: 9658, name: 'Quad Score Base 41+', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy9659(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 39 && ind.rsi > 47; return { id: 9659, name: 'Quad Score Base 39+', direction: 'DOWN', match: Boolean(match), confidence: match ? 69 : 0 }; }
    static strategy9660(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 37 && ind.rsi > 46; return { id: 9660, name: 'Quad Score Entry 37+', direction: 'DOWN', match: Boolean(match), confidence: match ? 68 : 0 }; }
    
    static strategy9661(ind) { const rs = this.getRsiScore(ind.rsi); const ms = this.getMacdScore(ind.macd); const match = rs >= 18 && ms >= 15 && ind.rsi > 55; return { id: 9661, name: 'RSI+MACD Mid Focus', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy9662(ind) { const rs = this.getRsiScore(ind.rsi); const bs = this.getBbScore(ind.bollingerBands); const match = rs >= 18 && bs >= 12 && ind.rsi > 55; return { id: 9662, name: 'RSI+BB Mid Focus', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy9663(ind) { const rs = this.getRsiScore(ind.rsi); const es = this.getEmaScore(ind); const match = rs >= 18 && es >= 10 && ind.rsi > 55; return { id: 9663, name: 'RSI+EMA Mid Focus', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy9664(ind) { const ms = this.getMacdScore(ind.macd); const bs = this.getBbScore(ind.bollingerBands); const match = ms >= 15 && bs >= 12 && ind.rsi > 52; return { id: 9664, name: 'MACD+BB Mid Focus', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy9665(ind) { const ms = this.getMacdScore(ind.macd); const es = this.getEmaScore(ind); const match = ms >= 15 && es >= 10 && ind.rsi > 52; return { id: 9665, name: 'MACD+EMA Mid Focus', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy9666(ind) { const bs = this.getBbScore(ind.bollingerBands); const es = this.getEmaScore(ind); const match = bs >= 12 && es >= 10 && ind.rsi > 52; return { id: 9666, name: 'BB+EMA Mid Focus', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy9667(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands); const match = s >= 40 && ind.ema20 < ind.ema50 && ind.rsi > 52; return { id: 9667, name: 'Triple Score EMA Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy9668(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getEmaScore(ind); const match = s >= 38 && ind.bollingerBands?.position > 55 && ind.rsi > 50; return { id: 9668, name: 'Triple Score BB Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy9669(ind) { const s = this.getRsiScore(ind.rsi) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 36 && ind.macd?.histogram < 0 && ind.rsi > 50; return { id: 9669, name: 'Triple Score MACD Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy9670(ind) { const s = this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 32 && ind.rsi > 55; return { id: 9670, name: 'Triple Score RSI Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 }; }
    
    static strategy9671(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands); const match = s >= 42 && ind.close < ind.ema20 && ind.rsi > 52; return { id: 9671, name: 'Triple Score Price < EMA20', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy9672(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getEmaScore(ind); const match = s >= 40 && ind.close < ind.sma20 && ind.rsi > 50; return { id: 9672, name: 'Triple Score Price < SMA20', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy9673(ind) { const s = this.getRsiScore(ind.rsi) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 38 && ind.macd?.MACD < ind.macd?.signal; return { id: 9673, name: 'Triple Score MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy9674(ind) { const s = this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 34 && ind.rsi > 55 && ind.rsi < (ind.prevRsi || 100); return { id: 9674, name: 'Triple Score RSI Falling', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy9675(ind) { const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = total >= 50 && ind.macd?.histogram < ind.macd?.prevHistogram; return { id: 9675, name: 'Quad Score Hist Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy9676(ind) { const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = total >= 48 && ind.bollingerBands?.position < (ind.bollingerBands?.prevPosition || 100) && ind.rsi > 50; return { id: 9676, name: 'Quad Score BB Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy9677(ind) { const rs = this.getRsiScore(ind.rsi); const match = rs >= 21 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 60; return { id: 9677, name: 'RSI Score High + Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy9678(ind) { const ms = this.getMacdScore(ind.macd); const match = ms >= 18 && ind.rsi > 58 && ind.bollingerBands?.position > 58; return { id: 9678, name: 'MACD Score High + Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy9679(ind) { const bs = this.getBbScore(ind.bollingerBands); const match = bs >= 14 && ind.rsi > 55 && ind.macd?.histogram < 0; return { id: 9679, name: 'BB Score High + Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy9680(ind) { const es = this.getEmaScore(ind); const match = es >= 12 && ind.rsi > 55 && ind.macd?.MACD < ind.macd?.signal; return { id: 9680, name: 'EMA Score High + Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 }; }
    
    static strategy9681(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd); const match = s >= 35 && ind.bollingerBands?.position > 60 && ind.ema20 < ind.ema50; return { id: 9681, name: 'RSI+MACD + Double', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy9682(ind) { const s = this.getRsiScore(ind.rsi) + this.getBbScore(ind.bollingerBands); const match = s >= 32 && ind.macd?.histogram < -3 && ind.close < ind.ema20; return { id: 9682, name: 'RSI+BB + Double', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy9683(ind) { const s = this.getMacdScore(ind.macd) + this.getEmaScore(ind); const match = s >= 25 && ind.rsi > 55 && ind.bollingerBands?.position > 58; return { id: 9683, name: 'MACD+EMA + Double', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy9684(ind) { const s = this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 22 && ind.rsi > 52 && ind.macd?.MACD < 0; return { id: 9684, name: 'BB+EMA + Double', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy9685(ind) { const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = total >= 58 && ind.rsi > 58; return { id: 9685, name: 'Quad Score Solid', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy9686(ind) { const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = total >= 56 && ind.rsi > 56; return { id: 9686, name: 'Quad Score Good', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy9687(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands); const match = s >= 48 && ind.close < ind.ema20; return { id: 9687, name: 'Triple Score + EMA Break', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy9688(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getEmaScore(ind); const match = s >= 45 && ind.bollingerBands?.position > 62; return { id: 9688, name: 'Triple Score + BB Upper', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy9689(ind) { const s = this.getRsiScore(ind.rsi) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 42 && ind.macd?.MACD < ind.macd?.signal; return { id: 9689, name: 'Triple Score + MACD Cross', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy9690(ind) { const s = this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 38 && ind.rsi > 56; return { id: 9690, name: 'Triple Score + RSI High', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 }; }
    
    static strategy9691(ind) { const rs = this.getRsiScore(ind.rsi); const ms = this.getMacdScore(ind.macd); const bs = this.getBbScore(ind.bollingerBands); const match = rs >= 15 && ms >= 12 && bs >= 10 && ind.rsi > 52; return { id: 9691, name: 'Balanced Triple Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy9692(ind) { const rs = this.getRsiScore(ind.rsi); const ms = this.getMacdScore(ind.macd); const es = this.getEmaScore(ind); const match = rs >= 15 && ms >= 12 && es >= 8 && ind.rsi > 52; return { id: 9692, name: 'RSI+MACD+EMA Mid Balance', direction: 'DOWN', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy9693(ind) { const rs = this.getRsiScore(ind.rsi); const bs = this.getBbScore(ind.bollingerBands); const es = this.getEmaScore(ind); const match = rs >= 15 && bs >= 10 && es >= 8 && ind.rsi > 52; return { id: 9693, name: 'RSI+BB+EMA Mid Balance', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy9694(ind) { const ms = this.getMacdScore(ind.macd); const bs = this.getBbScore(ind.bollingerBands); const es = this.getEmaScore(ind); const match = ms >= 12 && bs >= 10 && es >= 8 && ind.rsi > 50; return { id: 9694, name: 'MACD+BB+EMA Mid Balance', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy9695(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 42 && ind.rsi > 50 && ind.macd?.histogram < 0; return { id: 9695, name: 'Quad Score Entry Level', direction: 'DOWN', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy9696(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = s >= 40 && ind.rsi > 48 && ind.ema20 < ind.ema50; return { id: 9696, name: 'Quad Score Starter', direction: 'DOWN', match: Boolean(match), confidence: match ? 70 : 0 }; }
    static strategy9697(ind) { const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = total >= 52 && ind.rsi > 52 && ind.rsi < (ind.prevRsi || 100); return { id: 9697, name: 'Quad Score RSI Drop', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy9698(ind) { const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = total >= 50 && ind.macd?.histogram < ind.macd?.prevHistogram && ind.rsi > 50; return { id: 9698, name: 'Quad Score Momentum Drop', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy9699(ind) { const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = total >= 54 && ind.rsi > 54; return { id: 9699, name: 'Quad Score Reliable', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy9700(ind) { const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind); const match = total >= 52 && ind.rsi > 52; return { id: 9700, name: 'Quad Score Standard', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 }; }
    
    // ==================== RSI+MACD+BB+Volume ���� ���� (9701-9750) ====================
    
    static strategy9701(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 65 && ind.rsi > 60; return { id: 9701, name: 'Volume Quad Elite 65+', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy9702(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 62 && ind.rsi > 58; return { id: 9702, name: 'Volume Quad Elite 62+', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy9703(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 59 && ind.rsi > 56; return { id: 9703, name: 'Volume Quad High 59+', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy9704(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 56 && ind.rsi > 54; return { id: 9704, name: 'Volume Quad High 56+', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy9705(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 53 && ind.rsi > 52; return { id: 9705, name: 'Volume Quad Mid 53+', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy9706(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 50 && ind.rsi > 50; return { id: 9706, name: 'Volume Quad Mid 50+', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy9707(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 47 && ind.rsi > 48; return { id: 9707, name: 'Volume Quad Base 47+', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy9708(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 44 && ind.rsi > 46; return { id: 9708, name: 'Volume Quad Base 44+', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy9709(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 41 && ind.rsi > 44; return { id: 9709, name: 'Volume Quad Entry 41+', direction: 'DOWN', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy9710(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 38 && ind.rsi > 42; return { id: 9710, name: 'Volume Quad Entry 38+', direction: 'DOWN', match: Boolean(match), confidence: match ? 73 : 0 }; }
    
    static strategy9711(ind) { const rs = this.getRsiScore(ind.rsi); const vs = this.getVolumeScore(ind); const match = rs >= 21 && vs >= 10 && ind.macd?.MACD < ind.macd?.signal; return { id: 9711, name: 'RSI+Vol + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy9712(ind) { const ms = this.getMacdScore(ind.macd); const vs = this.getVolumeScore(ind); const match = ms >= 18 && vs >= 10 && ind.rsi > 58; return { id: 9712, name: 'MACD+Vol + RSI High', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy9713(ind) { const bs = this.getBbScore(ind.bollingerBands); const vs = this.getVolumeScore(ind); const match = bs >= 14 && vs >= 10 && ind.rsi > 55; return { id: 9713, name: 'BB+Vol + RSI High', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy9714(ind) { const rs = this.getRsiScore(ind.rsi); const ms = this.getMacdScore(ind.macd); const vs = this.getVolumeScore(ind); const match = rs >= 18 && ms >= 15 && vs >= 8; return { id: 9714, name: 'RSI+MACD+Vol Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy9715(ind) { const rs = this.getRsiScore(ind.rsi); const bs = this.getBbScore(ind.bollingerBands); const vs = this.getVolumeScore(ind); const match = rs >= 18 && bs >= 12 && vs >= 8; return { id: 9715, name: 'RSI+BB+Vol Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy9716(ind) { const ms = this.getMacdScore(ind.macd); const bs = this.getBbScore(ind.bollingerBands); const vs = this.getVolumeScore(ind); const match = ms >= 15 && bs >= 12 && vs >= 8 && ind.rsi > 52; return { id: 9716, name: 'MACD+BB+Vol Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy9717(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getVolumeScore(ind); const match = s >= 45 && ind.bollingerBands?.position > 60; return { id: 9717, name: 'RSI+MACD+Vol + BB Upper', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy9718(ind) { const s = this.getRsiScore(ind.rsi) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 40 && ind.macd?.histogram < 0; return { id: 9718, name: 'RSI+BB+Vol + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy9719(ind) { const s = this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 35 && ind.rsi > 55; return { id: 9719, name: 'MACD+BB+Vol + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy9720(ind) { const vs = this.getVolumeScore(ind); const match = vs >= 12 && ind.rsi > 60 && ind.macd?.MACD < ind.macd?.signal && ind.bollingerBands?.position > 65; return { id: 9720, name: 'High Vol + Multi Confirm', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    static strategy9721(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 55 && ind.close < ind.ema20; return { id: 9721, name: 'Volume Quad + Below EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy9722(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 52 && ind.ema20 < ind.ema50; return { id: 9722, name: 'Volume Quad + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy9723(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 49 && ind.macd?.histogram < ind.macd?.prevHistogram; return { id: 9723, name: 'Volume Quad + Hist Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy9724(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 46 && ind.rsi < (ind.prevRsi || 100); return { id: 9724, name: 'Volume Quad + RSI Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy9725(ind) { const volRatio = ind.avgVolume ? ind.volume / ind.avgVolume : 1; const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd); const match = volRatio > 1.5 && s >= 35 && ind.bollingerBands?.position > 60; return { id: 9725, name: 'High Vol Ratio + Score', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy9726(ind) { const volRatio = ind.avgVolume ? ind.volume / ind.avgVolume : 1; const s = this.getRsiScore(ind.rsi) + this.getBbScore(ind.bollingerBands); const match = volRatio > 1.3 && s >= 32 && ind.macd?.MACD < ind.macd?.signal; return { id: 9726, name: 'Med Vol Ratio + Score', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy9727(ind) { const vs = this.getVolumeScore(ind); const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands); const match = vs >= 10 && total >= 45; return { id: 9727, name: 'Vol Score + Triple High', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy9728(ind) { const vs = this.getVolumeScore(ind); const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands); const match = vs >= 8 && total >= 40; return { id: 9728, name: 'Vol Score + Triple Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy9729(ind) { const vs = this.getVolumeScore(ind); const rs = this.getRsiScore(ind.rsi); const match = vs >= 12 && rs >= 24 && ind.macd?.MACD < ind.macd?.signal; return { id: 9729, name: 'High Vol + RSI Elite', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy9730(ind) { const vs = this.getVolumeScore(ind); const ms = this.getMacdScore(ind.macd); const match = vs >= 12 && ms >= 20 && ind.rsi > 60; return { id: 9730, name: 'High Vol + MACD Elite', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    
    static strategy9731(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 60 && ind.rsi >= 58 && ind.rsi <= 72; return { id: 9731, name: 'Volume Quad Optimal', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy9732(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 57 && ind.rsi >= 55 && ind.rsi <= 70; return { id: 9732, name: 'Volume Quad Good Zone', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy9733(ind) { const rs = this.getRsiScore(ind.rsi); const vs = this.getVolumeScore(ind); const es = this.getEmaScore(ind); const match = rs >= 21 && vs >= 10 && es >= 10; return { id: 9733, name: 'RSI+Vol+EMA Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy9734(ind) { const ms = this.getMacdScore(ind.macd); const vs = this.getVolumeScore(ind); const es = this.getEmaScore(ind); const match = ms >= 18 && vs >= 10 && es >= 10 && ind.rsi > 55; return { id: 9734, name: 'MACD+Vol+EMA Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy9735(ind) { const bs = this.getBbScore(ind.bollingerBands); const vs = this.getVolumeScore(ind); const es = this.getEmaScore(ind); const match = bs >= 14 && vs >= 10 && es >= 10 && ind.rsi > 52; return { id: 9735, name: 'BB+Vol+EMA Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy9736(ind) { const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind) + this.getEmaScore(ind); const match = total >= 70; return { id: 9736, name: 'Penta Score Elite', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy9737(ind) { const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind) + this.getEmaScore(ind); const match = total >= 65; return { id: 9737, name: 'Penta Score High', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy9738(ind) { const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind) + this.getEmaScore(ind); const match = total >= 60; return { id: 9738, name: 'Penta Score Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy9739(ind) { const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind) + this.getEmaScore(ind); const match = total >= 55; return { id: 9739, name: 'Penta Score Base', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy9740(ind) { const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind) + this.getEmaScore(ind); const match = total >= 50; return { id: 9740, name: 'Penta Score Entry', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 }; }
    
    static strategy9741(ind) { const vs = this.getVolumeScore(ind); const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd); const match = vs >= 15 && s >= 40 && ind.bollingerBands?.position > 70; return { id: 9741, name: 'Very High Vol + Score', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy9742(ind) { const vs = this.getVolumeScore(ind); const s = this.getRsiScore(ind.rsi) + this.getBbScore(ind.bollingerBands); const match = vs >= 15 && s >= 35 && ind.macd?.MACD < ind.macd?.signal; return { id: 9742, name: 'Very High Vol + RSI+BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy9743(ind) { const volRatio = ind.avgVolume ? ind.volume / ind.avgVolume : 1; const total = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands); const match = volRatio > 2.0 && total >= 42 && ind.rsi > 55; return { id: 9743, name: 'Spike Vol + Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy9744(ind) { const volRatio = ind.avgVolume ? ind.volume / ind.avgVolume : 1; const rs = this.getRsiScore(ind.rsi); const match = volRatio > 1.8 && rs >= 24 && ind.macd?.MACD < ind.macd?.signal; return { id: 9744, name: 'High Vol + RSI Score', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy9745(ind) { const volRatio = ind.avgVolume ? ind.volume / ind.avgVolume : 1; const ms = this.getMacdScore(ind.macd); const match = volRatio > 1.8 && ms >= 20 && ind.rsi > 58; return { id: 9745, name: 'High Vol + MACD Score', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy9746(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 58 && ind.close < ind.sma20; return { id: 9746, name: 'Volume Quad + SMA Break', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy9747(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 55 && ind.macd?.MACD < 0 && ind.rsi > 55; return { id: 9747, name: 'Volume Quad + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy9748(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 52 && ind.bollingerBands?.bandwidth > 3; return { id: 9748, name: 'Volume Quad + Wide BB', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy9749(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 48 && ind.adx?.adx > 25; return { id: 9749, name: 'Volume Quad + ADX Trend', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy9750(ind) { const s = this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getVolumeScore(ind); const match = s >= 45 && ind.adx?.minusDI > ind.adx?.plusDI; return { id: 9750, name: 'Volume Quad + Bear DI', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 }; }
    
    // ==================== RSI+ADX+Stochastic+EMA ���� ���� (9751-9800) ====================
    
    static strategy9751(ind) { const s = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = s >= 65 && ind.rsi > 60; return { id: 9751, name: 'Trend Quad Elite 65+', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy9752(ind) { const s = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = s >= 62 && ind.rsi > 58; return { id: 9752, name: 'Trend Quad Elite 62+', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy9753(ind) { const s = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = s >= 59 && ind.rsi > 56; return { id: 9753, name: 'Trend Quad High 59+', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy9754(ind) { const s = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = s >= 56 && ind.rsi > 54; return { id: 9754, name: 'Trend Quad High 56+', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy9755(ind) { const s = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = s >= 53 && ind.rsi > 52; return { id: 9755, name: 'Trend Quad Mid 53+', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy9756(ind) { const s = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = s >= 50 && ind.rsi > 50; return { id: 9756, name: 'Trend Quad Mid 50+', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy9757(ind) { const s = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = s >= 47 && ind.rsi > 48; return { id: 9757, name: 'Trend Quad Base 47+', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy9758(ind) { const s = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = s >= 44 && ind.rsi > 46; return { id: 9758, name: 'Trend Quad Base 44+', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy9759(ind) { const s = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = s >= 41 && ind.rsi > 44; return { id: 9759, name: 'Trend Quad Entry 41+', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy9760(ind) { const s = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = s >= 38 && ind.rsi > 42; return { id: 9760, name: 'Trend Quad Entry 38+', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 }; }
    
    static strategy9761(ind) { const rs = this.getRsiScore(ind.rsi); const as = this.getAdxScore(ind.adx); const match = rs >= 21 && as >= 15 && ind.stochastic?.k < ind.stochastic?.d; return { id: 9761, name: 'RSI+ADX + Stoch Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy9762(ind) { const rs = this.getRsiScore(ind.rsi); const ss = this.getStochScore(ind.stochastic); const match = rs >= 21 && ss >= 15 && ind.adx?.minusDI > ind.adx?.plusDI; return { id: 9762, name: 'RSI+Stoch + Bear DI', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy9763(ind) { const as = this.getAdxScore(ind.adx); const ss = this.getStochScore(ind.stochastic); const match = as >= 15 && ss >= 15 && ind.rsi > 58; return { id: 9763, name: 'ADX+Stoch + RSI High', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy9764(ind) { const as = this.getAdxScore(ind.adx); const es = this.getEmaScore(ind); const match = as >= 15 && es >= 12 && ind.rsi > 55 && ind.stochastic?.k > 70; return { id: 9764, name: 'ADX+EMA + Stoch Overbought', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy9765(ind) { const ss = this.getStochScore(ind.stochastic); const es = this.getEmaScore(ind); const match = ss >= 15 && es >= 12 && ind.rsi > 55 && ind.adx?.adx > 25; return { id: 9765, name: 'Stoch+EMA + ADX Trend', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy9766(ind) { const rs = this.getRsiScore(ind.rsi); const as = this.getAdxScore(ind.adx); const ss = this.getStochScore(ind.stochastic); const match = rs >= 18 && as >= 12 && ss >= 12; return { id: 9766, name: 'RSI+ADX+Stoch Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy9767(ind) { const rs = this.getRsiScore(ind.rsi); const as = this.getAdxScore(ind.adx); const es = this.getEmaScore(ind); const match = rs >= 18 && as >= 12 && es >= 10; return { id: 9767, name: 'RSI+ADX+EMA Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy9768(ind) { const rs = this.getRsiScore(ind.rsi); const ss = this.getStochScore(ind.stochastic); const es = this.getEmaScore(ind); const match = rs >= 18 && ss >= 12 && es >= 10; return { id: 9768, name: 'RSI+Stoch+EMA Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy9769(ind) { const as = this.getAdxScore(ind.adx); const ss = this.getStochScore(ind.stochastic); const es = this.getEmaScore(ind); const match = as >= 12 && ss >= 12 && es >= 10 && ind.rsi > 52; return { id: 9769, name: 'ADX+Stoch+EMA Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy9770(ind) { const total = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = total >= 55 && ind.stochastic?.k > 75; return { id: 9770, name: 'Trend Quad + Stoch OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    
    static strategy9771(ind) { const s = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = s >= 52 && ind.adx?.minusDI > ind.adx?.plusDI * 1.2; return { id: 9771, name: 'Trend Quad + Strong Bear DI', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy9772(ind) { const s = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = s >= 50 && ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.k > 60; return { id: 9772, name: 'Trend Quad + Stoch Cross', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy9773(ind) { const s = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = s >= 48 && ind.close < ind.ema20 && ind.adx?.adx > 25; return { id: 9773, name: 'Trend Quad + EMA Break', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy9774(ind) { const s = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = s >= 46 && ind.ema20 < ind.ema50; return { id: 9774, name: 'Trend Quad + EMA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy9775(ind) { const as = this.getAdxScore(ind.adx); const match = as >= 18 && ind.rsi > 60 && ind.stochastic?.k > 70 && ind.close < ind.ema20; return { id: 9775, name: 'Strong ADX + Multi OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy9776(ind) { const ss = this.getStochScore(ind.stochastic); const match = ss >= 18 && ind.rsi > 58 && ind.adx?.adx > 28 && ind.adx?.minusDI > ind.adx?.plusDI; return { id: 9776, name: 'Strong Stoch + ADX Bear', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy9777(ind) { const es = this.getEmaScore(ind); const match = es >= 15 && ind.rsi > 55 && ind.stochastic?.k > 65 && ind.adx?.adx > 25; return { id: 9777, name: 'Strong EMA + Multi High', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy9778(ind) { const rs = this.getRsiScore(ind.rsi); const as = this.getAdxScore(ind.adx); const match = rs >= 24 && as >= 16 && ind.stochastic?.k < ind.stochastic?.d; return { id: 9778, name: 'Elite RSI+ADX + Stoch', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy9779(ind) { const rs = this.getRsiScore(ind.rsi); const ss = this.getStochScore(ind.stochastic); const match = rs >= 24 && ss >= 16 && ind.adx?.minusDI > ind.adx?.plusDI; return { id: 9779, name: 'Elite RSI+Stoch + DI', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy9780(ind) { const as = this.getAdxScore(ind.adx); const ss = this.getStochScore(ind.stochastic); const match = as >= 16 && ss >= 16 && ind.rsi > 60; return { id: 9780, name: 'Elite ADX+Stoch + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    
    static strategy9781(ind) { const total = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind) + this.getMacdScore(ind.macd); const match = total >= 75; return { id: 9781, name: 'Five Indicator Elite', direction: 'DOWN', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy9782(ind) { const total = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind) + this.getMacdScore(ind.macd); const match = total >= 70; return { id: 9782, name: 'Five Indicator High', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy9783(ind) { const total = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind) + this.getMacdScore(ind.macd); const match = total >= 65; return { id: 9783, name: 'Five Indicator Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy9784(ind) { const total = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind) + this.getMacdScore(ind.macd); const match = total >= 60; return { id: 9784, name: 'Five Indicator Base', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy9785(ind) { const total = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind) + this.getBbScore(ind.bollingerBands); const match = total >= 72; return { id: 9785, name: 'Five Alt Elite', direction: 'DOWN', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy9786(ind) { const total = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind) + this.getBbScore(ind.bollingerBands); const match = total >= 67; return { id: 9786, name: 'Five Alt High', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy9787(ind) { const total = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind) + this.getBbScore(ind.bollingerBands); const match = total >= 62; return { id: 9787, name: 'Five Alt Mid', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy9788(ind) { const total = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind) + this.getBbScore(ind.bollingerBands); const match = total >= 57; return { id: 9788, name: 'Five Alt Base', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy9789(ind) { const s = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = s >= 58 && ind.macd?.MACD < ind.macd?.signal; return { id: 9789, name: 'Trend Quad + MACD Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy9790(ind) { const s = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = s >= 55 && ind.bollingerBands?.position > 70; return { id: 9790, name: 'Trend Quad + BB Upper', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    
    static strategy9791(ind) { const s = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = s >= 52 && ind.macd?.histogram < 0; return { id: 9791, name: 'Trend Quad + MACD Neg', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy9792(ind) { const s = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = s >= 50 && ind.close < ind.sma20; return { id: 9792, name: 'Trend Quad + SMA Break', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy9793(ind) { const rs = this.getRsiScore(ind.rsi); const as = this.getAdxScore(ind.adx); const es = this.getEmaScore(ind); const match = rs >= 21 && as >= 14 && es >= 12 && ind.stochastic?.k > 70; return { id: 9793, name: 'RSI+ADX+EMA + Stoch OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy9794(ind) { const rs = this.getRsiScore(ind.rsi); const ss = this.getStochScore(ind.stochastic); const es = this.getEmaScore(ind); const match = rs >= 21 && ss >= 14 && es >= 12 && ind.adx?.adx > 28; return { id: 9794, name: 'RSI+Stoch+EMA + ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy9795(ind) { const as = this.getAdxScore(ind.adx); const ss = this.getStochScore(ind.stochastic); const es = this.getEmaScore(ind); const match = as >= 14 && ss >= 14 && es >= 12 && ind.rsi > 58; return { id: 9795, name: 'ADX+Stoch+EMA + RSI', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy9796(ind) { const total = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = total >= 60 && ind.rsi >= 58 && ind.rsi <= 75; return { id: 9796, name: 'Trend Quad Optimal', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy9797(ind) { const total = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = total >= 57 && ind.stochastic?.k >= 65 && ind.stochastic?.k <= 85; return { id: 9797, name: 'Trend Quad Stoch Zone', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy9798(ind) { const total = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = total >= 54 && ind.adx?.adx >= 28 && ind.adx?.adx <= 45; return { id: 9798, name: 'Trend Quad ADX Zone', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy9799(ind) { const total = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = total >= 51 && ind.rsi > 52 && ind.close < ind.ema50; return { id: 9799, name: 'Trend Quad Below EMA50', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy9800(ind) { const total = this.getRsiScore(ind.rsi) + this.getAdxScore(ind.adx) + this.getStochScore(ind.stochastic) + this.getEmaScore(ind); const match = total >= 48 && ind.rsi > 50; return { id: 9800, name: 'Trend Quad Complete', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 }; }
    
    // ==================== analyzeAll ====================
    
    static analyzeAll(ind) {
        return [
            this.strategy9601(ind), this.strategy9602(ind), this.strategy9603(ind), this.strategy9604(ind), this.strategy9605(ind),
            this.strategy9606(ind), this.strategy9607(ind), this.strategy9608(ind), this.strategy9609(ind), this.strategy9610(ind),
            this.strategy9611(ind), this.strategy9612(ind), this.strategy9613(ind), this.strategy9614(ind), this.strategy9615(ind),
            this.strategy9616(ind), this.strategy9617(ind), this.strategy9618(ind), this.strategy9619(ind), this.strategy9620(ind),
            this.strategy9621(ind), this.strategy9622(ind), this.strategy9623(ind), this.strategy9624(ind), this.strategy9625(ind),
            this.strategy9626(ind), this.strategy9627(ind), this.strategy9628(ind), this.strategy9629(ind), this.strategy9630(ind),
            this.strategy9631(ind), this.strategy9632(ind), this.strategy9633(ind), this.strategy9634(ind), this.strategy9635(ind),
            this.strategy9636(ind), this.strategy9637(ind), this.strategy9638(ind), this.strategy9639(ind), this.strategy9640(ind),
            this.strategy9641(ind), this.strategy9642(ind), this.strategy9643(ind), this.strategy9644(ind), this.strategy9645(ind),
            this.strategy9646(ind), this.strategy9647(ind), this.strategy9648(ind), this.strategy9649(ind), this.strategy9650(ind),
            this.strategy9651(ind), this.strategy9652(ind), this.strategy9653(ind), this.strategy9654(ind), this.strategy9655(ind),
            this.strategy9656(ind), this.strategy9657(ind), this.strategy9658(ind), this.strategy9659(ind), this.strategy9660(ind),
            this.strategy9661(ind), this.strategy9662(ind), this.strategy9663(ind), this.strategy9664(ind), this.strategy9665(ind),
            this.strategy9666(ind), this.strategy9667(ind), this.strategy9668(ind), this.strategy9669(ind), this.strategy9670(ind),
            this.strategy9671(ind), this.strategy9672(ind), this.strategy9673(ind), this.strategy9674(ind), this.strategy9675(ind),
            this.strategy9676(ind), this.strategy9677(ind), this.strategy9678(ind), this.strategy9679(ind), this.strategy9680(ind),
            this.strategy9681(ind), this.strategy9682(ind), this.strategy9683(ind), this.strategy9684(ind), this.strategy9685(ind),
            this.strategy9686(ind), this.strategy9687(ind), this.strategy9688(ind), this.strategy9689(ind), this.strategy9690(ind),
            this.strategy9691(ind), this.strategy9692(ind), this.strategy9693(ind), this.strategy9694(ind), this.strategy9695(ind),
            this.strategy9696(ind), this.strategy9697(ind), this.strategy9698(ind), this.strategy9699(ind), this.strategy9700(ind),
            this.strategy9701(ind), this.strategy9702(ind), this.strategy9703(ind), this.strategy9704(ind), this.strategy9705(ind),
            this.strategy9706(ind), this.strategy9707(ind), this.strategy9708(ind), this.strategy9709(ind), this.strategy9710(ind),
            this.strategy9711(ind), this.strategy9712(ind), this.strategy9713(ind), this.strategy9714(ind), this.strategy9715(ind),
            this.strategy9716(ind), this.strategy9717(ind), this.strategy9718(ind), this.strategy9719(ind), this.strategy9720(ind),
            this.strategy9721(ind), this.strategy9722(ind), this.strategy9723(ind), this.strategy9724(ind), this.strategy9725(ind),
            this.strategy9726(ind), this.strategy9727(ind), this.strategy9728(ind), this.strategy9729(ind), this.strategy9730(ind),
            this.strategy9731(ind), this.strategy9732(ind), this.strategy9733(ind), this.strategy9734(ind), this.strategy9735(ind),
            this.strategy9736(ind), this.strategy9737(ind), this.strategy9738(ind), this.strategy9739(ind), this.strategy9740(ind),
            this.strategy9741(ind), this.strategy9742(ind), this.strategy9743(ind), this.strategy9744(ind), this.strategy9745(ind),
            this.strategy9746(ind), this.strategy9747(ind), this.strategy9748(ind), this.strategy9749(ind), this.strategy9750(ind),
            this.strategy9751(ind), this.strategy9752(ind), this.strategy9753(ind), this.strategy9754(ind), this.strategy9755(ind),
            this.strategy9756(ind), this.strategy9757(ind), this.strategy9758(ind), this.strategy9759(ind), this.strategy9760(ind),
            this.strategy9761(ind), this.strategy9762(ind), this.strategy9763(ind), this.strategy9764(ind), this.strategy9765(ind),
            this.strategy9766(ind), this.strategy9767(ind), this.strategy9768(ind), this.strategy9769(ind), this.strategy9770(ind),
            this.strategy9771(ind), this.strategy9772(ind), this.strategy9773(ind), this.strategy9774(ind), this.strategy9775(ind),
            this.strategy9776(ind), this.strategy9777(ind), this.strategy9778(ind), this.strategy9779(ind), this.strategy9780(ind),
            this.strategy9781(ind), this.strategy9782(ind), this.strategy9783(ind), this.strategy9784(ind), this.strategy9785(ind),
            this.strategy9786(ind), this.strategy9787(ind), this.strategy9788(ind), this.strategy9789(ind), this.strategy9790(ind),
            this.strategy9791(ind), this.strategy9792(ind), this.strategy9793(ind), this.strategy9794(ind), this.strategy9795(ind),
            this.strategy9796(ind), this.strategy9797(ind), this.strategy9798(ind), this.strategy9799(ind), this.strategy9800(ind)
        ];
    }
}

