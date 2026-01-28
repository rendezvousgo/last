/**
 * UP ?�략 ?�장 (ID: 4201-4400)
 * 
 * STRATEGY_IDEAS.txt 기반 체계??구성:
 * - 4201-4250: 복합 ?�수 ?�스??- ?�계�?변??(50�?
 * - 4251-4400: 복합 ?�수 ?�스??- 가중치 변??(150�?
 */

export class StrategiesUp4201 {
    
    // ==================== ?�수 계산 ?�퍼 ?�수 ====================
    
    /** RSI ?�수 계산 (0-30) */
    static getRsiScore(rsi) {
        if (rsi <= 20) return 30;
        if (rsi <= 25) return 27;
        if (rsi <= 30) return 24;
        if (rsi <= 35) return 21;
        if (rsi <= 40) return 18;
        if (rsi <= 45) return 15;
        if (rsi <= 50) return 12;
        if (rsi <= 55) return 9;
        if (rsi <= 60) return 6;
        if (rsi <= 65) return 3;
        return 0;
    }
    
    /** MACD ?�수 계산 (0-30) */
    static getMacdScore(macd) {
        if (!macd) return 0;
        let score = 0;
        if (macd.MACD > macd.signal) score += 10;
        if (macd.MACD > 0) score += 10;
        if (macd.histogram > 0) score += 5;
        const prevHist = macd.prevHistogram || macd.histogram;
        if (macd.histogram > prevHist) score += 5;
        return score;
    }
    
    /** BB ?�수 계산 (0-20) */
    static getBbScore(bb) {
        if (!bb) return 0;
        let score = 0;
        const pos = bb.position || 50;
        if (pos <= 10) score += 20;
        else if (pos <= 20) score += 16;
        else if (pos <= 30) score += 12;
        else if (pos <= 40) score += 8;
        else if (pos <= 50) score += 4;
        return score;
    }
    
    /** EMA ?�수 계산 (0-20) */
    static getEmaScore(ind) {
        let score = 0;
        if (ind.close > ind.ema20) score += 5;
        if (ind.ema20 > ind.ema50) score += 5;
        if (ind.ema50 > ind.ema100) score += 5;
        if (ind.close > ind.sma200) score += 5;
        return score;
    }
    
    /** 종합 ?�수 계산 */
    static getTotalScore(ind) {
        return this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind);
    }
    
    // ==================== 복합 ?�수 - ?�계�?변??(4201-4250) ====================
    // ?�양???�수 ?�계�?조합
    
    // --- RSI ?�수 ?�계�?변??(4201-4210) ---
    
    static strategy4201(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const match = rsi >= 24 && macd >= 15; return { id: 4201, name: 'RSI24 + MACD15 Score', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4202(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const match = rsi >= 27 && macd >= 15; return { id: 4202, name: 'RSI27 + MACD15 Score', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4203(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const match = rsi >= 24 && macd >= 20; return { id: 4203, name: 'RSI24 + MACD20 Score', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4204(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const match = rsi >= 27 && macd >= 20; return { id: 4204, name: 'RSI27 + MACD20 Score', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4205(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const match = rsi >= 30 && macd >= 20; return { id: 4205, name: 'RSI30 + MACD20 Score', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4206(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const match = rsi >= 21 && macd >= 25; return { id: 4206, name: 'RSI21 + MACD25 Score', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4207(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const match = rsi >= 24 && macd >= 25; return { id: 4207, name: 'RSI24 + MACD25 Score', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4208(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const match = rsi >= 27 && macd >= 25; return { id: 4208, name: 'RSI27 + MACD25 Score', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4209(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const match = rsi >= 30 && macd >= 25; return { id: 4209, name: 'RSI30 + MACD25 Score', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4210(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const match = rsi >= 30 && macd >= 30; return { id: 4210, name: 'RSI30 + MACD30 Max', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    
    // --- RSI + BB ?�수 ?�계�?(4211-4220) ---
    
    static strategy4211(ind) { const rsi = this.getRsiScore(ind.rsi); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 21 && bb >= 12; return { id: 4211, name: 'RSI21 + BB12 Score', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy4212(ind) { const rsi = this.getRsiScore(ind.rsi); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 24 && bb >= 12; return { id: 4212, name: 'RSI24 + BB12 Score', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4213(ind) { const rsi = this.getRsiScore(ind.rsi); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 21 && bb >= 16; return { id: 4213, name: 'RSI21 + BB16 Score', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4214(ind) { const rsi = this.getRsiScore(ind.rsi); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 24 && bb >= 16; return { id: 4214, name: 'RSI24 + BB16 Score', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4215(ind) { const rsi = this.getRsiScore(ind.rsi); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 27 && bb >= 16; return { id: 4215, name: 'RSI27 + BB16 Score', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4216(ind) { const rsi = this.getRsiScore(ind.rsi); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 24 && bb >= 20; return { id: 4216, name: 'RSI24 + BB20 Score', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4217(ind) { const rsi = this.getRsiScore(ind.rsi); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 27 && bb >= 20; return { id: 4217, name: 'RSI27 + BB20 Score', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4218(ind) { const rsi = this.getRsiScore(ind.rsi); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 30 && bb >= 16; return { id: 4218, name: 'RSI30 + BB16 Score', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4219(ind) { const rsi = this.getRsiScore(ind.rsi); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 30 && bb >= 20; return { id: 4219, name: 'RSI30 + BB20 Score', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy4220(ind) { const rsi = this.getRsiScore(ind.rsi); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const match = rsi >= 27 && bb >= 16 && ema >= 10; return { id: 4220, name: 'RSI27 + BB16 + EMA10', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    
    // --- MACD + BB ?�수 ?�계�?(4221-4230) ---
    
    static strategy4221(ind) { const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = macd >= 15 && bb >= 12; return { id: 4221, name: 'MACD15 + BB12 Score', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy4222(ind) { const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = macd >= 20 && bb >= 12; return { id: 4222, name: 'MACD20 + BB12 Score', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy4223(ind) { const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = macd >= 15 && bb >= 16; return { id: 4223, name: 'MACD15 + BB16 Score', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4224(ind) { const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = macd >= 20 && bb >= 16; return { id: 4224, name: 'MACD20 + BB16 Score', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4225(ind) { const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = macd >= 25 && bb >= 16; return { id: 4225, name: 'MACD25 + BB16 Score', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4226(ind) { const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = macd >= 20 && bb >= 20; return { id: 4226, name: 'MACD20 + BB20 Score', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4227(ind) { const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = macd >= 25 && bb >= 20; return { id: 4227, name: 'MACD25 + BB20 Score', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4228(ind) { const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = macd >= 30 && bb >= 16; return { id: 4228, name: 'MACD30 + BB16 Score', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4229(ind) { const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = macd >= 30 && bb >= 20; return { id: 4229, name: 'MACD30 + BB20 Score', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4230(ind) { const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const match = macd >= 25 && bb >= 16 && ema >= 10; return { id: 4230, name: 'MACD25 + BB16 + EMA10', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    
    // --- 3�??�수 ?�계�?조합 (4231-4240) ---
    
    static strategy4231(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 21 && macd >= 15 && bb >= 12; return { id: 4231, name: 'Triple Score Low', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4232(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 24 && macd >= 15 && bb >= 12; return { id: 4232, name: 'Triple Score Mid-Low', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4233(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 21 && macd >= 20 && bb >= 12; return { id: 4233, name: 'Triple Score MACD Focus', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4234(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 21 && macd >= 15 && bb >= 16; return { id: 4234, name: 'Triple Score BB Focus', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4235(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 24 && macd >= 20 && bb >= 12; return { id: 4235, name: 'Triple Score Mid', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4236(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 24 && macd >= 15 && bb >= 16; return { id: 4236, name: 'Triple Score Mid-Alt', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4237(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 24 && macd >= 20 && bb >= 16; return { id: 4237, name: 'Triple Score High', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4238(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 27 && macd >= 20 && bb >= 16; return { id: 4238, name: 'Triple Score Very High', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4239(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 27 && macd >= 25 && bb >= 16; return { id: 4239, name: 'Triple Score Elite', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4240(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const match = rsi >= 30 && macd >= 25 && bb >= 20; return { id: 4240, name: 'Triple Score Max', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    
    // --- 4�??�수 ?�계�?조합 (4241-4250) ---
    
    static strategy4241(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const match = rsi >= 21 && macd >= 15 && bb >= 8 && ema >= 5; return { id: 4241, name: 'Quad Score Basic', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4242(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const match = rsi >= 21 && macd >= 15 && bb >= 12 && ema >= 10; return { id: 4242, name: 'Quad Score Low', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4243(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const match = rsi >= 24 && macd >= 15 && bb >= 12 && ema >= 10; return { id: 4243, name: 'Quad Score Mid-Low', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4244(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const match = rsi >= 24 && macd >= 20 && bb >= 12 && ema >= 10; return { id: 4244, name: 'Quad Score Mid', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4245(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const match = rsi >= 24 && macd >= 20 && bb >= 16 && ema >= 10; return { id: 4245, name: 'Quad Score High', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4246(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const match = rsi >= 27 && macd >= 20 && bb >= 16 && ema >= 10; return { id: 4246, name: 'Quad Score Very High', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4247(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const match = rsi >= 27 && macd >= 25 && bb >= 16 && ema >= 15; return { id: 4247, name: 'Quad Score Elite', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4248(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const match = rsi >= 27 && macd >= 25 && bb >= 20 && ema >= 15; return { id: 4248, name: 'Quad Score Premium', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    static strategy4249(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const match = rsi >= 30 && macd >= 25 && bb >= 20 && ema >= 15; return { id: 4249, name: 'Quad Score Ultimate', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    static strategy4250(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const match = rsi >= 30 && macd >= 30 && bb >= 20 && ema >= 20; return { id: 4250, name: 'Quad Score Maximum', direction: 'UP', match: Boolean(match), confidence: match ? 99 : 0 }; }
    
    // ==================== 복합 ?�수 - 가중치 변??(4251-4400) ====================
    // ?�양??가중치 조합?�로 ?�수 계산
    
    // --- RSI 가중치 강조 (4251-4275) ---
    
    /** RSI 2�?가중치 */
    static getWeightedScore_RSI2x(ind) {
        return this.getRsiScore(ind.rsi) * 2 + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind);
    }
    
    static strategy4251(ind) { const score = this.getWeightedScore_RSI2x(ind); const match = (score >= 100) && ind.adx?.plusDI > ind.adx?.minusDI; return { id: 4251, name: 'RSI2x Weight 100+', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4252(ind) { const score = this.getWeightedScore_RSI2x(ind); const match = (score >= 95) && ind.ema50 > ind.sma50; return { id: 4252, name: 'RSI2x Weight 95+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4253(ind) { const score = this.getWeightedScore_RSI2x(ind); const match = (score >= 90) && ind.fearGreedIndex < 70 && ind.volume > ind.avgVolume * 1.5; return { id: 4253, name: 'RSI2x Weight 90+', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4254(ind) { const score = this.getWeightedScore_RSI2x(ind); const match = (score >= 85) && ind.macd?.histogram > 10 && ind.obv > (ind.prevObv || 0); return { id: 4254, name: 'RSI2x Weight 85+', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4255(ind) { const score = this.getWeightedScore_RSI2x(ind); const match = (score >= 80) && ind.bollingerBands?.position < 50 && ind.volume > (ind.avgVolume || ind.volume) * 1.1; return { id: 4255, name: 'RSI2x Weight 80+', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4256(ind) { const score = this.getWeightedScore_RSI2x(ind); const match = (score >= 100 && ind.priceChange > 0) && ind.rsi > 35 && ind.rsi < 65; return { id: 4256, name: 'RSI2x 100+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4257(ind) { const score = this.getWeightedScore_RSI2x(ind); const match = (score >= 95 && ind.priceChange > 0) && ind.macd?.histogram < 0; return { id: 4257, name: 'RSI2x 95+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4258(ind) { const score = this.getWeightedScore_RSI2x(ind); const match = (score >= 90 && ind.priceChange > 0) && ind.macd?.histogram > -5; return { id: 4258, name: 'RSI2x 90+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    
    /** RSI 1.5�?가중치 */
    static getWeightedScore_RSI15x(ind) {
        return Math.floor(this.getRsiScore(ind.rsi) * 1.5) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind);
    }
    
    static strategy4259(ind) { const score = this.getWeightedScore_RSI15x(ind); const match = (score >= 90) && ind.fearGreedIndex > 20 && ind.volume > (ind.avgVolume || ind.volume) * 1.3; return { id: 4259, name: 'RSI1.5x Weight 90+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4260(ind) { const score = this.getWeightedScore_RSI15x(ind); const match = (score >= 85) && ind.macd?.histogram > -5 && ind.volume > (ind.prevVolume || ind.volume) * 1.05; return { id: 4260, name: 'RSI1.5x Weight 85+', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4261(ind) { const score = this.getWeightedScore_RSI15x(ind); const match = (score >= 80) && ind.bollingerBands?.position > 50 && ind.volume > ind.avgVolume * 1.5; return { id: 4261, name: 'RSI1.5x Weight 80+', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4262(ind) { const score = this.getWeightedScore_RSI15x(ind); const match = (score >= 75) && ind.volumeRatio > 0.8 && ind.obv > (ind.prevObv || 0); return { id: 4262, name: 'RSI1.5x Weight 75+', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4263(ind) { const score = this.getWeightedScore_RSI15x(ind); const match = (score >= 90 && ind.priceChange > 0) && ind.ema10 > ind.ema20 && ind.volume > (ind.avgVolume || ind.volume) * 1.25; return { id: 4263, name: 'RSI1.5x 90+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4264(ind) { const score = this.getWeightedScore_RSI15x(ind); const match = (score >= 85 && ind.macd?.MACD > ind.macd?.signal) && ind.ema10 < ind.ema20; return { id: 4264, name: 'RSI1.5x 85+ MACD', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4265(ind) { const score = this.getWeightedScore_RSI15x(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = (score >= 85 && bw < 2) && ind.sma20 < ind.sma50; return { id: 4265, name: 'RSI1.5x 85+ Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** RSI 3�?가중치 (극단?? */
    static getWeightedScore_RSI3x(ind) {
        return this.getRsiScore(ind.rsi) * 3 + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind);
    }
    
    static strategy4266(ind) { const score = this.getWeightedScore_RSI3x(ind); const match = (score >= 130) && ind.bollingerBands?.position > 50; return { id: 4266, name: 'RSI3x Weight 130+', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4267(ind) { const score = this.getWeightedScore_RSI3x(ind); const match = (score >= 120) && ind.volumeRatio > 0.8; return { id: 4267, name: 'RSI3x Weight 120+', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4268(ind) { const score = this.getWeightedScore_RSI3x(ind); const match = (score >= 110) && ind.adx?.adx > 25; return { id: 4268, name: 'RSI3x Weight 110+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4269(ind) { const score = this.getWeightedScore_RSI3x(ind); const match = (score >= 100) && ind.priceChange > -1 && ind.volume > ind.avgVolume * 1.5; return { id: 4269, name: 'RSI3x Weight 100+', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4270(ind) { const score = this.getWeightedScore_RSI3x(ind); const match = (score >= 130 && ind.priceChange > 0) && ind.consecutiveGreen >= 2; return { id: 4270, name: 'RSI3x 130+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4271(ind) { const score = this.getWeightedScore_RSI3x(ind); const match = (score >= 120 && ind.priceChange > 0) && ind.fearGreedIndex > 20; return { id: 4271, name: 'RSI3x 120+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4272(ind) { const score = this.getWeightedScore_RSI3x(ind); const match = (score >= 130 && ind.close > ind.ema20) && ind.rsi > 25 && ind.rsi < 75; return { id: 4272, name: 'RSI3x 130+ EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4273(ind) { const score = this.getWeightedScore_RSI3x(ind); const match = (score >= 120 && ind.macd?.MACD > ind.macd?.signal) && ind.rsi > 30 && ind.rsi < 70; return { id: 4273, name: 'RSI3x 120+ MACD', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4274(ind) { const score = this.getWeightedScore_RSI3x(ind); const pos = ind.bollingerBands?.position || 50; const match = (score >= 110 && pos < 30) && ind.rsi > 40 && ind.rsi < 60; return { id: 4274, name: 'RSI3x 110+ BB30', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4275(ind) { const score = this.getWeightedScore_RSI3x(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = (score >= 120 && bw < 1.5) && ind.rsi > 20 && ind.rsi < 80; return { id: 4275, name: 'RSI3x 120+ Tight', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    
    // --- MACD 가중치 강조 (4276-4300) ---
    
    /** MACD 2�?가중치 */
    static getWeightedScore_MACD2x(ind) {
        return this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) * 2 + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind);
    }
    
    static strategy4276(ind) { const score = this.getWeightedScore_MACD2x(ind); const match = (score >= 100) && ind.priceChange < 3 && ind.volume > (ind.prevVolume || ind.volume) * 1.17; return { id: 4276, name: 'MACD2x Weight 100+', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4277(ind) { const score = this.getWeightedScore_MACD2x(ind); const match = (score >= 95) && ind.rsi > 25 && ind.rsi < 75 && ind.volume > ind.avgVolume * 1.5; return { id: 4277, name: 'MACD2x Weight 95+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4278(ind) { const score = this.getWeightedScore_MACD2x(ind); const match = (score >= 90) && ind.ema20 > ind.sma20 && ind.obv > (ind.prevObv || 0); return { id: 4278, name: 'MACD2x Weight 90+', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4279(ind) { const score = this.getWeightedScore_MACD2x(ind); const match = (score >= 85) && ind.ema10 > ind.ema20 && ind.volume > (ind.avgVolume || ind.volume) * 1.3; return { id: 4279, name: 'MACD2x Weight 85+', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4280(ind) { const score = this.getWeightedScore_MACD2x(ind); const match = (score >= 80) && ind.bollingerBands?.position < 30 && ind.volume > (ind.prevVolume || ind.volume) * 1.05; return { id: 4280, name: 'MACD2x Weight 80+', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4281(ind) { const score = this.getWeightedScore_MACD2x(ind); const match = (score >= 100 && ind.priceChange > 0) && ind.rsi > 40 && ind.rsi < 60 && ind.volume > ind.avgVolume * 1.1; return { id: 4281, name: 'MACD2x 100+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4282(ind) { const score = this.getWeightedScore_MACD2x(ind); const match = (score >= 95 && ind.priceChange > 0) && ind.macd?.histogram > 5 && ind.obv > (ind.prevObv || 0); return { id: 4282, name: 'MACD2x 95+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4283(ind) { const score = this.getWeightedScore_MACD2x(ind); const match = (score >= 90 && ind.rsi < 40) && ind.macd?.histogram > 0; return { id: 4283, name: 'MACD2x 90+ RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** MACD 1.5�?가중치 */
    static getWeightedScore_MACD15x(ind) {
        return this.getRsiScore(ind.rsi) + Math.floor(this.getMacdScore(ind.macd) * 1.5) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind);
    }
    
    static strategy4284(ind) { const score = this.getWeightedScore_MACD15x(ind); const match = (score >= 90) && ind.ema50 > ind.sma50 && ind.volume > (ind.prevVolume || ind.volume) * 1.1300000000000001; return { id: 4284, name: 'MACD1.5x Weight 90+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4285(ind) { const score = this.getWeightedScore_MACD15x(ind); const match = (score >= 85) && ind.ema20 > ind.ema50 && ind.volume > ind.avgVolume * 1.5; return { id: 4285, name: 'MACD1.5x Weight 85+', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4286(ind) { const score = this.getWeightedScore_MACD15x(ind); const match = (score >= 80) && ind.bollingerBands?.position > 70 && ind.obv > (ind.prevObv || 0); return { id: 4286, name: 'MACD1.5x Weight 80+', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4287(ind) { const score = this.getWeightedScore_MACD15x(ind); const match = (score >= 75) && ind.atr > 100 && ind.volume > (ind.avgVolume || ind.volume) * 1.2000000000000002; return { id: 4287, name: 'MACD1.5x Weight 75+', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4288(ind) { const score = this.getWeightedScore_MACD15x(ind); const match = (score >= 90 && ind.priceChange > 0) && ind.ema20 > ind.ema50 && ind.volume > (ind.prevVolume || ind.volume) * 1.21; return { id: 4288, name: 'MACD1.5x 90+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4289(ind) { const score = this.getWeightedScore_MACD15x(ind); const match = (score >= 85 && ind.rsi < 35) && ind.macd?.histogram > 5; return { id: 4289, name: 'MACD1.5x 85+ RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4290(ind) { const score = this.getWeightedScore_MACD15x(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = (score >= 85 && bw < 2) && ind.bollingerBands?.position < 50 && ind.obv > (ind.prevObv || 0); return { id: 4290, name: 'MACD1.5x 85+ Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** MACD 3�?가중치 (극단?? */
    static getWeightedScore_MACD3x(ind) {
        return this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) * 3 + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind);
    }
    
    static strategy4291(ind) { const score = this.getWeightedScore_MACD3x(ind); const match = (score >= 130) && ind.bollingerBands?.position < 30 && ind.volume > (ind.avgVolume || ind.volume) * 1.1500000000000001; return { id: 4291, name: 'MACD3x Weight 130+', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4292(ind) { const score = this.getWeightedScore_MACD3x(ind); const match = (score >= 120) && ind.atr > 100 && ind.volume > (ind.prevVolume || ind.volume) * 1.09; return { id: 4292, name: 'MACD3x Weight 120+', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4293(ind) { const score = this.getWeightedScore_MACD3x(ind); const match = (score >= 110) && ind.adx?.adx < 40 && ind.volume > ind.avgVolume * 1.5; return { id: 4293, name: 'MACD3x Weight 110+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4294(ind) { const score = this.getWeightedScore_MACD3x(ind); const match = (score >= 100) && ind.priceChange > -2 && ind.obv > (ind.prevObv || 0); return { id: 4294, name: 'MACD3x Weight 100+', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4295(ind) { const score = this.getWeightedScore_MACD3x(ind); const match = (score >= 130 && ind.priceChange > 0) && ind.consecutiveRed <= 2 && ind.volume > (ind.avgVolume || ind.volume) * 1.1; return { id: 4295, name: 'MACD3x 130+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4296(ind) { const score = this.getWeightedScore_MACD3x(ind); const match = (score >= 120 && ind.priceChange > 0) && ind.ema20 > ind.sma20 && ind.volume > (ind.prevVolume || ind.volume) * 1.17; return { id: 4296, name: 'MACD3x 120+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4297(ind) { const score = this.getWeightedScore_MACD3x(ind); const match = score >= 130 && ind.close > ind.ema20 && ind.volume > ind.avgVolume * 1.1; return { id: 4297, name: 'MACD3x 130+ EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4298(ind) { const score = this.getWeightedScore_MACD3x(ind); const match = score >= 120 && ind.rsi < 40; return { id: 4298, name: 'MACD3x 120+ RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4299(ind) { const score = this.getWeightedScore_MACD3x(ind); const pos = ind.bollingerBands?.position || 50; const match = score >= 110 && pos < 30 && ind.volume > (ind.avgVolume || ind.volume) * 1.3; return { id: 4299, name: 'MACD3x 110+ BB30', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4300(ind) { const score = this.getWeightedScore_MACD3x(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 120 && bw < 1.5 && ind.volume > (ind.prevVolume || ind.volume) * 1.05; return { id: 4300, name: 'MACD3x 120+ Tight', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    
    // --- BB 가중치 강조 (4301-4325) ---
    
    /** BB 2�?가중치 */
    static getWeightedScore_BB2x(ind) {
        return this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) * 2 + this.getEmaScore(ind);
    }
    
    static strategy4301(ind) { const score = this.getWeightedScore_BB2x(ind); const match = (score >= 100) && ind.priceChange < 5 && ind.volume > ind.avgVolume * 1.5; return { id: 4301, name: 'BB2x Weight 100+', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4302(ind) { const score = this.getWeightedScore_BB2x(ind); const match = (score >= 95) && ind.rsi > 30 && ind.rsi < 70 && ind.obv > (ind.prevObv || 0); return { id: 4302, name: 'BB2x Weight 95+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4303(ind) { const score = this.getWeightedScore_BB2x(ind); const match = (score >= 90) && ind.rsi > 25 && ind.rsi < 75 && ind.volume > (ind.avgVolume || ind.volume) * 1.25; return { id: 4303, name: 'BB2x Weight 90+', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4304(ind) { const score = this.getWeightedScore_BB2x(ind); const match = (score >= 85) && ind.ema50 > ind.ema100 && ind.volume > (ind.prevVolume || ind.volume) * 1.1300000000000001; return { id: 4304, name: 'BB2x Weight 85+', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4305(ind) { const score = this.getWeightedScore_BB2x(ind); const match = (score >= 80) && ind.bollingerBands?.bandwidth > 5 && ind.volume > ind.avgVolume * 1.1; return { id: 4305, name: 'BB2x Weight 80+', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4306(ind) { const score = this.getWeightedScore_BB2x(ind); const match = (score >= 100 && ind.priceChange > 0) && ind.rsi > 20 && ind.rsi < 80 && ind.obv > (ind.prevObv || 0); return { id: 4306, name: 'BB2x 100+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4307(ind) { const score = this.getWeightedScore_BB2x(ind); const match = (score >= 95 && ind.priceChange > 0) && ind.macd?.histogram > 10 && ind.volume > (ind.avgVolume || ind.volume) * 1.2000000000000002; return { id: 4307, name: 'BB2x 95+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4308(ind) { const score = this.getWeightedScore_BB2x(ind); const match = (score >= 90 && ind.rsi < 40) && ind.macd?.histogram < 0 && ind.volume > (ind.prevVolume || ind.volume) * 1.21; return { id: 4308, name: 'BB2x 90+ RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** BB 1.5�?가중치 */
    static getWeightedScore_BB15x(ind) {
        return this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + Math.floor(this.getBbScore(ind.bollingerBands) * 1.5) + this.getEmaScore(ind);
    }
    
    static strategy4309(ind) { const score = this.getWeightedScore_BB15x(ind); const match = (score >= 90) && ind.rsi > 30 && ind.rsi < 70 && ind.volume > ind.avgVolume * 1.5; return { id: 4309, name: 'BB1.5x Weight 90+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4310(ind) { const score = this.getWeightedScore_BB15x(ind); const match = (score >= 85) && ind.ema10 < ind.ema20 && ind.obv > (ind.prevObv || 0); return { id: 4310, name: 'BB1.5x Weight 85+', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4311(ind) { const score = this.getWeightedScore_BB15x(ind); const match = (score >= 80) && ind.bollingerBands?.bandwidth < 10 && ind.volume > (ind.avgVolume || ind.volume) * 1.1500000000000001; return { id: 4311, name: 'BB1.5x Weight 80+', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4312(ind) { const score = this.getWeightedScore_BB15x(ind); const match = (score >= 75) && ind.atr < 500 && ind.volume > (ind.prevVolume || ind.volume) * 1.09; return { id: 4312, name: 'BB1.5x Weight 75+', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4313(ind) { const score = this.getWeightedScore_BB15x(ind); const match = (score >= 90 && ind.priceChange > 0) && ind.ema50 > ind.ema100 && ind.volume > ind.avgVolume * 1.1; return { id: 4313, name: 'BB1.5x 90+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4314(ind) { const score = this.getWeightedScore_BB15x(ind); const match = (score >= 85 && ind.macd?.MACD > ind.macd?.signal) && ind.sma20 > ind.sma50 && ind.obv > (ind.prevObv || 0); return { id: 4314, name: 'BB1.5x 85+ MACD', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4315(ind) { const score = this.getWeightedScore_BB15x(ind); const match = score >= 85 && ind.rsi < 35 && ind.volume > (ind.avgVolume || ind.volume) * 1.1; return { id: 4315, name: 'BB1.5x 85+ RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** BB 3�?가중치 (극단?? */
    static getWeightedScore_BB3x(ind) {
        return this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) * 3 + this.getEmaScore(ind);
    }
    
    static strategy4316(ind) { const score = this.getWeightedScore_BB3x(ind); const match = (score >= 120) && ind.atr < 500 && ind.volume > (ind.prevVolume || ind.volume) * 1.17; return { id: 4316, name: 'BB3x Weight 120+', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4317(ind) { const score = this.getWeightedScore_BB3x(ind); const match = (score >= 110) && ind.adx?.plusDI > ind.adx?.minusDI && ind.volume > ind.avgVolume * 1.5; return { id: 4317, name: 'BB3x Weight 110+', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4318(ind) { const score = this.getWeightedScore_BB3x(ind); const match = (score >= 100) && ind.consecutiveGreen >= 1 && ind.obv > (ind.prevObv || 0); return { id: 4318, name: 'BB3x Weight 100+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4319(ind) { const score = this.getWeightedScore_BB3x(ind); const match = (score >= 90) && ind.rsi > 35 && ind.rsi < 65 && ind.volume > (ind.avgVolume || ind.volume) * 1.3; return { id: 4319, name: 'BB3x Weight 90+', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4320(ind) { const score = this.getWeightedScore_BB3x(ind); const match = (score >= 120 && ind.priceChange > 0) && ind.ema50 > ind.sma50 && ind.volume > (ind.prevVolume || ind.volume) * 1.05; return { id: 4320, name: 'BB3x 120+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4321(ind) { const score = this.getWeightedScore_BB3x(ind); const match = (score >= 110 && ind.priceChange > 0) && ind.macd?.histogram > 10; return { id: 4321, name: 'BB3x 110+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4322(ind) { const score = this.getWeightedScore_BB3x(ind); const match = (score >= 120 && ind.macd?.MACD > ind.macd?.signal) && ind.rsi > 35 && ind.rsi < 65 && ind.obv > (ind.prevObv || 0); return { id: 4322, name: 'BB3x 120+ MACD', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4323(ind) { const score = this.getWeightedScore_BB3x(ind); const match = score >= 110 && ind.rsi < 35; return { id: 4323, name: 'BB3x 110+ RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4324(ind) { const score = this.getWeightedScore_BB3x(ind); const match = score >= 100 && ind.close > ind.ema20; return { id: 4324, name: 'BB3x 100+ EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4325(ind) { const score = this.getWeightedScore_BB3x(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 110 && bw < 2; return { id: 4325, name: 'BB3x 110+ Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    
    // --- EMA 가중치 강조 (4326-4350) ---
    
    /** EMA 2�?가중치 */
    static getWeightedScore_EMA2x(ind) {
        return this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind) * 2;
    }
    
    static strategy4326(ind) { const score = this.getWeightedScore_EMA2x(ind); const match = (score >= 100) && ind.consecutiveGreen >= 2 && ind.obv > (ind.prevObv || 0); return { id: 4326, name: 'EMA2x Weight 100+', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4327(ind) { const score = this.getWeightedScore_EMA2x(ind); const match = score >= 95 && ind.volume > (ind.avgVolume || ind.volume) * 1.2000000000000002; return { id: 4327, name: 'EMA2x Weight 95+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4328(ind) { const score = this.getWeightedScore_EMA2x(ind); const match = (score >= 90) && ind.rsi > 40 && ind.rsi < 60 && ind.volume > (ind.prevVolume || ind.volume) * 1.21; return { id: 4328, name: 'EMA2x Weight 90+', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4329(ind) { const score = this.getWeightedScore_EMA2x(ind); const match = (score >= 85) && ind.sma20 > ind.sma50 && ind.volume > ind.avgVolume * 1.1; return { id: 4329, name: 'EMA2x Weight 85+', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4330(ind) { const score = this.getWeightedScore_EMA2x(ind); const match = (score >= 80) && ind.volumeRatio > 1.0 && ind.obv > (ind.prevObv || 0); return { id: 4330, name: 'EMA2x Weight 80+', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4331(ind) { const score = this.getWeightedScore_EMA2x(ind); const match = score >= 100 && ind.priceChange > 0 && ind.volume > (ind.avgVolume || ind.volume) * 1.1500000000000001; return { id: 4331, name: 'EMA2x 100+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4332(ind) { const score = this.getWeightedScore_EMA2x(ind); const match = score >= 95 && ind.priceChange > 0 && ind.volume > (ind.prevVolume || ind.volume) * 1.09; return { id: 4332, name: 'EMA2x 95+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4333(ind) { const score = this.getWeightedScore_EMA2x(ind); const match = score >= 90 && ind.rsi < 40 && ind.volume > ind.avgVolume * 1.5; return { id: 4333, name: 'EMA2x 90+ RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** EMA 1.5�?가중치 */
    static getWeightedScore_EMA15x(ind) {
        return this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + Math.floor(this.getEmaScore(ind) * 1.5);
    }
    
    static strategy4334(ind) { const score = this.getWeightedScore_EMA15x(ind); const match = (score >= 90) && ind.rsi > 20 && ind.rsi < 80 && ind.obv > (ind.prevObv || 0); return { id: 4334, name: 'EMA1.5x Weight 90+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4335(ind) { const score = this.getWeightedScore_EMA15x(ind); const match = (score >= 85) && ind.sma20 < ind.sma50 && ind.volume > (ind.avgVolume || ind.volume) * 1.1; return { id: 4335, name: 'EMA1.5x Weight 85+', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4336(ind) { const score = this.getWeightedScore_EMA15x(ind); const match = (score >= 80) && ind.volumeRatio > 1.2 && ind.volume > (ind.prevVolume || ind.volume) * 1.17; return { id: 4336, name: 'EMA1.5x Weight 80+', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4337(ind) { const score = this.getWeightedScore_EMA15x(ind); const match = (score >= 75) && ind.atr > 200 && ind.volume > ind.avgVolume * 1.1; return { id: 4337, name: 'EMA1.5x Weight 75+', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4338(ind) { const score = this.getWeightedScore_EMA15x(ind); const match = score >= 90 && ind.priceChange > 0 && ind.obv > (ind.prevObv || 0); return { id: 4338, name: 'EMA1.5x 90+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4339(ind) { const score = this.getWeightedScore_EMA15x(ind); const match = score >= 85 && ind.macd?.MACD > ind.macd?.signal && ind.volume > (ind.avgVolume || ind.volume) * 1.3; return { id: 4339, name: 'EMA1.5x 85+ MACD', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4340(ind) { const score = this.getWeightedScore_EMA15x(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 85 && bw < 2 && ind.volume > (ind.prevVolume || ind.volume) * 1.05; return { id: 4340, name: 'EMA1.5x 85+ Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** EMA 3�?가중치 (극단?? */
    static getWeightedScore_EMA3x(ind) {
        return this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind) * 3;
    }
    
    static strategy4341(ind) { const score = this.getWeightedScore_EMA3x(ind); const match = (score >= 120) && ind.atr > 200 && ind.volume > ind.avgVolume * 1.5; return { id: 4341, name: 'EMA3x Weight 120+', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4342(ind) { const score = this.getWeightedScore_EMA3x(ind); const match = (score >= 110) && ind.priceChange > -1 && ind.obv > (ind.prevObv || 0); return { id: 4342, name: 'EMA3x Weight 110+', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4343(ind) { const score = this.getWeightedScore_EMA3x(ind); const match = (score >= 100) && ind.consecutiveRed <= 2 && ind.volume > (ind.avgVolume || ind.volume) * 1.25; return { id: 4343, name: 'EMA3x Weight 100+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4344(ind) { const score = this.getWeightedScore_EMA3x(ind); const match = (score >= 90) && ind.macd?.histogram > 0 && ind.volume > (ind.prevVolume || ind.volume) * 1.1300000000000001; return { id: 4344, name: 'EMA3x Weight 90+', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4345(ind) { const score = this.getWeightedScore_EMA3x(ind); const match = score >= 120 && ind.priceChange > 0 && ind.volume > ind.avgVolume * 1.1; return { id: 4345, name: 'EMA3x 120+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4346(ind) { const score = this.getWeightedScore_EMA3x(ind); const match = score >= 110 && ind.priceChange > 0 && ind.obv > (ind.prevObv || 0); return { id: 4346, name: 'EMA3x 110+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4347(ind) { const score = this.getWeightedScore_EMA3x(ind); const match = score >= 120 && ind.macd?.MACD > ind.macd?.signal && ind.volume > (ind.avgVolume || ind.volume) * 1.2000000000000002; return { id: 4347, name: 'EMA3x 120+ MACD', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4348(ind) { const score = this.getWeightedScore_EMA3x(ind); const match = score >= 110 && ind.rsi < 40; return { id: 4348, name: 'EMA3x 110+ RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4349(ind) { const score = this.getWeightedScore_EMA3x(ind); const pos = ind.bollingerBands?.position || 50; const match = score >= 100 && pos < 30; return { id: 4349, name: 'EMA3x 100+ BB30', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4350(ind) { const score = this.getWeightedScore_EMA3x(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 110 && bw < 1.5; return { id: 4350, name: 'EMA3x 110+ Tight', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    
    // --- 복합 가중치 조합 (4351-4380) ---
    
    /** RSI + MACD ?�시 가중치 */
    static getWeightedScore_RSI_MACD_2x(ind) {
        return this.getRsiScore(ind.rsi) * 2 + this.getMacdScore(ind.macd) * 2 + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind);
    }
    
    static strategy4351(ind) { const score = this.getWeightedScore_RSI_MACD_2x(ind); const match = (score >= 130) && ind.bollingerBands?.position > 70 && ind.volume > (ind.avgVolume || ind.volume) * 1.1500000000000001; return { id: 4351, name: 'RSI+MACD 2x 130+', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4352(ind) { const score = this.getWeightedScore_RSI_MACD_2x(ind); const match = (score >= 120) && ind.stochastic?.k > ind.stochastic?.d && ind.volume > (ind.prevVolume || ind.volume) * 1.09; return { id: 4352, name: 'RSI+MACD 2x 120+', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4353(ind) { const score = this.getWeightedScore_RSI_MACD_2x(ind); const match = (score >= 110) && ind.priceChange < 3 && ind.volume > ind.avgVolume * 1.1; return { id: 4353, name: 'RSI+MACD 2x 110+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4354(ind) { const score = this.getWeightedScore_RSI_MACD_2x(ind); const match = (score >= 100) && ind.fearGreedIndex < 60 && ind.obv > (ind.prevObv || 0); return { id: 4354, name: 'RSI+MACD 2x 100+', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4355(ind) { const score = this.getWeightedScore_RSI_MACD_2x(ind); const match = (score >= 130 && ind.priceChange > 0) && ind.fearGreedIndex < 60 && ind.volume > (ind.avgVolume || ind.volume) * 1.1; return { id: 4355, name: 'RSI+MACD 2x 130+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    
    /** RSI + BB ?�시 가중치 */
    static getWeightedScore_RSI_BB_2x(ind) {
        return this.getRsiScore(ind.rsi) * 2 + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) * 2 + this.getEmaScore(ind);
    }
    
    static strategy4356(ind) { const score = this.getWeightedScore_RSI_BB_2x(ind); const match = (score >= 130) && ind.bollingerBands?.bandwidth > 5 && ind.volume > (ind.prevVolume || ind.volume) * 1.17; return { id: 4356, name: 'RSI+BB 2x 130+', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4357(ind) { const score = this.getWeightedScore_RSI_BB_2x(ind); const match = (score >= 120) && ind.stochastic?.k < ind.stochastic?.d && ind.volume > ind.avgVolume * 1.5; return { id: 4357, name: 'RSI+BB 2x 120+', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4358(ind) { const score = this.getWeightedScore_RSI_BB_2x(ind); const match = (score >= 110) && ind.priceChange > -2 && ind.obv > (ind.prevObv || 0); return { id: 4358, name: 'RSI+BB 2x 110+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4359(ind) { const score = this.getWeightedScore_RSI_BB_2x(ind); const match = (score >= 100) && ind.fearGreedIndex > 30 && ind.volume > (ind.avgVolume || ind.volume) * 1.3; return { id: 4359, name: 'RSI+BB 2x 100+', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4360(ind) { const score = this.getWeightedScore_RSI_BB_2x(ind); const match = (score >= 130 && ind.priceChange > 0) && ind.fearGreedIndex > 30 && ind.volume > (ind.prevVolume || ind.volume) * 1.05; return { id: 4360, name: 'RSI+BB 2x 130+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    
    /** MACD + BB ?�시 가중치 */
    static getWeightedScore_MACD_BB_2x(ind) {
        return this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) * 2 + this.getBbScore(ind.bollingerBands) * 2 + this.getEmaScore(ind);
    }
    
    static strategy4361(ind) { const score = this.getWeightedScore_MACD_BB_2x(ind); const match = (score >= 130) && ind.bollingerBands?.bandwidth < 10 && ind.volume > ind.avgVolume * 1.1; return { id: 4361, name: 'MACD+BB 2x 130+', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4362(ind) { const score = this.getWeightedScore_MACD_BB_2x(ind); const match = (score >= 120) && ind.stochastic?.k > 30 && ind.obv > (ind.prevObv || 0); return { id: 4362, name: 'MACD+BB 2x 120+', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4363(ind) { const score = this.getWeightedScore_MACD_BB_2x(ind); const match = (score >= 110) && ind.priceChange < 5 && ind.volume > (ind.avgVolume || ind.volume) * 1.25; return { id: 4363, name: 'MACD+BB 2x 110+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4364(ind) { const score = this.getWeightedScore_MACD_BB_2x(ind); const match = (score >= 100) && ind.fearGreedIndex < 70 && ind.volume > (ind.prevVolume || ind.volume) * 1.1300000000000001; return { id: 4364, name: 'MACD+BB 2x 100+', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4365(ind) { const score = this.getWeightedScore_MACD_BB_2x(ind); const match = (score >= 130 && ind.priceChange > 0) && ind.fearGreedIndex < 70 && ind.volume > ind.avgVolume * 1.5; return { id: 4365, name: 'MACD+BB 2x 130+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    
    /** RSI + EMA ?�시 가중치 */
    static getWeightedScore_RSI_EMA_2x(ind) {
        return this.getRsiScore(ind.rsi) * 2 + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind) * 2;
    }
    
    static strategy4366(ind) { const score = this.getWeightedScore_RSI_EMA_2x(ind); const match = (score >= 130) && ind.volumeRatio > 1.0 && ind.obv > (ind.prevObv || 0); return { id: 4366, name: 'RSI+EMA 2x 130+', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4367(ind) { const score = this.getWeightedScore_RSI_EMA_2x(ind); const match = (score >= 120) && ind.stochastic?.k < 70 && ind.volume > (ind.avgVolume || ind.volume) * 1.2000000000000002; return { id: 4367, name: 'RSI+EMA 2x 120+', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4368(ind) { const score = this.getWeightedScore_RSI_EMA_2x(ind); const match = score >= 110 && ind.volume > (ind.prevVolume || ind.volume) * 1.21; return { id: 4368, name: 'RSI+EMA 2x 110+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4369(ind) { const score = this.getWeightedScore_RSI_EMA_2x(ind); const match = score >= 100 && ind.volume > ind.avgVolume * 1.1; return { id: 4369, name: 'RSI+EMA 2x 100+', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4370(ind) { const score = this.getWeightedScore_RSI_EMA_2x(ind); const match = score >= 130 && ind.priceChange > 0 && ind.obv > (ind.prevObv || 0); return { id: 4370, name: 'RSI+EMA 2x 130+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    
    /** ?�체 2�?가중치 */
    static getWeightedScore_All2x(ind) {
        return (this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind)) * 2;
    }
    
    static strategy4371(ind) { const score = this.getWeightedScore_All2x(ind); const match = (score >= 180) && ind.ema10 > ind.ema20; return { id: 4371, name: 'All 2x Weight 180+', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy4372(ind) { const score = this.getWeightedScore_All2x(ind); const match = (score >= 170) && ind.ema20 > ind.ema50; return { id: 4372, name: 'All 2x Weight 170+', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4373(ind) { const score = this.getWeightedScore_All2x(ind); const match = (score >= 160) && ind.ema50 > ind.ema100; return { id: 4373, name: 'All 2x Weight 160+', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4374(ind) { const score = this.getWeightedScore_All2x(ind); const match = (score >= 150) && ind.ema10 < ind.ema20; return { id: 4374, name: 'All 2x Weight 150+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4375(ind) { const score = this.getWeightedScore_All2x(ind); const match = (score >= 140) && ind.sma20 < ind.sma50; return { id: 4375, name: 'All 2x Weight 140+', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4376(ind) { const score = this.getWeightedScore_All2x(ind); const match = (score >= 180 && ind.priceChange > 0) && ind.bollingerBands?.position > 70; return { id: 4376, name: 'All 2x 180+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    static strategy4377(ind) { const score = this.getWeightedScore_All2x(ind); const match = (score >= 170 && ind.priceChange > 0) && ind.bollingerBands?.bandwidth > 5; return { id: 4377, name: 'All 2x 170+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4378(ind) { const score = this.getWeightedScore_All2x(ind); const match = score >= 160 && ind.priceChange > 0; return { id: 4378, name: 'All 2x 160+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4379(ind) { const score = this.getWeightedScore_All2x(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 160 && bw < 2; return { id: 4379, name: 'All 2x 160+ Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4380(ind) { const score = this.getWeightedScore_All2x(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = score >= 150 && prevBw < 2 && bw >= 2.5 && ind.priceChange > 0; return { id: 4380, name: 'All 2x 150+ Release', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    
    // --- Ultimate 가중치 ?�략 (4381-4400) ---
    
    /** 비�?�?가중치 (RSI 중심) */
    static getWeightedScore_RSIFocus(ind) {
        return this.getRsiScore(ind.rsi) * 3 + this.getMacdScore(ind.macd) * 1.5 + this.getBbScore(ind.bollingerBands) * 1.5 + this.getEmaScore(ind);
    }
    
    static strategy4381(ind) { const score = this.getWeightedScore_RSIFocus(ind); const match = (score >= 150) && ind.sma20 > ind.sma50 && ind.volume > ind.avgVolume * 1.5; return { id: 4381, name: 'RSI Focus 150+', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4382(ind) { const score = this.getWeightedScore_RSIFocus(ind); const match = (score >= 140) && ind.bollingerBands?.position < 50 && ind.obv > (ind.prevObv || 0); return { id: 4382, name: 'RSI Focus 140+', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4383(ind) { const score = this.getWeightedScore_RSIFocus(ind); const match = (score >= 130) && ind.volumeRatio > 1.2 && ind.volume > (ind.avgVolume || ind.volume) * 1.25; return { id: 4383, name: 'RSI Focus 130+', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4384(ind) { const score = this.getWeightedScore_RSIFocus(ind); const match = (score >= 150 && ind.priceChange > 0) && ind.bollingerBands?.bandwidth < 10; return { id: 4384, name: 'RSI Focus 150+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    
    /** 비�?�?가중치 (MACD 중심) */
    static getWeightedScore_MACDFocus(ind) {
        return this.getRsiScore(ind.rsi) * 1.5 + this.getMacdScore(ind.macd) * 3 + this.getBbScore(ind.bollingerBands) * 1.5 + this.getEmaScore(ind);
    }
    
    static strategy4385(ind) { const score = this.getWeightedScore_MACDFocus(ind); const match = score >= 150 && ind.volume > ind.avgVolume * 1.1; return { id: 4385, name: 'MACD Focus 150+', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4386(ind) { const score = this.getWeightedScore_MACDFocus(ind); const match = (score >= 140) && ind.bollingerBands?.position > 50 && ind.obv > (ind.prevObv || 0); return { id: 4386, name: 'MACD Focus 140+', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4387(ind) { const score = this.getWeightedScore_MACDFocus(ind); const match = (score >= 130) && ind.volumeRatio > 1.5 && ind.volume > (ind.avgVolume || ind.volume) * 1.2000000000000002; return { id: 4387, name: 'MACD Focus 130+', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4388(ind) { const score = this.getWeightedScore_MACDFocus(ind); const match = score >= 150 && ind.priceChange > 0 && ind.volume > (ind.prevVolume || ind.volume) * 1.21; return { id: 4388, name: 'MACD Focus 150+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    
    /** 비�?�?가중치 (BB 중심) */
    static getWeightedScore_BBFocus(ind) {
        return this.getRsiScore(ind.rsi) * 1.5 + this.getMacdScore(ind.macd) * 1.5 + this.getBbScore(ind.bollingerBands) * 3 + this.getEmaScore(ind);
    }
    
    static strategy4389(ind) { const score = this.getWeightedScore_BBFocus(ind); const match = score >= 140 && ind.volume > ind.avgVolume * 1.5; return { id: 4389, name: 'BB Focus 140+', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4390(ind) { const score = this.getWeightedScore_BBFocus(ind); const match = score >= 130 && ind.obv > (ind.prevObv || 0); return { id: 4390, name: 'BB Focus 130+', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4391(ind) { const score = this.getWeightedScore_BBFocus(ind); const match = score >= 120 && ind.volume > (ind.avgVolume || ind.volume) * 1.1500000000000001; return { id: 4391, name: 'BB Focus 120+', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4392(ind) { const score = this.getWeightedScore_BBFocus(ind); const match = score >= 140 && ind.priceChange > 0; return { id: 4392, name: 'BB Focus 140+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    
    /** Ultimate 가중치 조합 */
    static getWeightedScore_Ultimate(ind) {
        return this.getRsiScore(ind.rsi) * 2.5 + this.getMacdScore(ind.macd) * 2.5 + this.getBbScore(ind.bollingerBands) * 2 + this.getEmaScore(ind) * 1.5;
    }
    
    static strategy4393(ind) { const score = this.getWeightedScore_Ultimate(ind); const match = score >= 180 && ind.volume > ind.avgVolume * 1.1; return { id: 4393, name: 'Ultimate Weight 180+', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    static strategy4394(ind) { const score = this.getWeightedScore_Ultimate(ind); const match = score >= 170 && ind.obv > (ind.prevObv || 0); return { id: 4394, name: 'Ultimate Weight 170+', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4395(ind) { const score = this.getWeightedScore_Ultimate(ind); const match = score >= 160 && ind.volume > (ind.avgVolume || ind.volume) * 1.1; return { id: 4395, name: 'Ultimate Weight 160+', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4396(ind) { const score = this.getWeightedScore_Ultimate(ind); const match = score >= 180 && ind.priceChange > 0 && ind.volume > (ind.prevVolume || ind.volume) * 1.17; return { id: 4396, name: 'Ultimate 180+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 98 : 0 }; }
    static strategy4397(ind) { const score = this.getWeightedScore_Ultimate(ind); const match = score >= 170 && ind.priceChange > 0 && ind.volume > ind.avgVolume * 1.5; return { id: 4397, name: 'Ultimate 170+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy4398(ind) { const score = this.getWeightedScore_Ultimate(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = score >= 170 && bw < 2; return { id: 4398, name: 'Ultimate 170+ Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    static strategy4399(ind) { const score = this.getWeightedScore_Ultimate(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = score >= 160 && prevBw < 1.5 && bw >= 2.5 && ind.priceChange > 0; return { id: 4399, name: 'Ultimate 160+ Release Up', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    static strategy4400(ind) { const score = this.getWeightedScore_Ultimate(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = score >= 180 && prevBw < 1.5 && bw >= 3 && atrRatio >= 1.5 && ind.priceChange >= 1; return { id: 4400, name: 'Maximum Ultimate Breakout', direction: 'UP', match: Boolean(match), confidence: match ? 99 : 0 }; }

    /** 모든 ?�략 ?�행 (4201-4400) */
    static analyzeAll(indicators) {
        return [
            this.strategy4201(indicators), this.strategy4202(indicators), this.strategy4203(indicators),
            this.strategy4204(indicators), this.strategy4205(indicators), this.strategy4206(indicators),
            this.strategy4207(indicators), this.strategy4208(indicators), this.strategy4209(indicators),
            this.strategy4210(indicators), this.strategy4211(indicators), this.strategy4212(indicators),
            this.strategy4213(indicators), this.strategy4214(indicators), this.strategy4215(indicators),
            this.strategy4216(indicators), this.strategy4217(indicators), this.strategy4218(indicators),
            this.strategy4219(indicators), this.strategy4220(indicators), this.strategy4221(indicators),
            this.strategy4222(indicators), this.strategy4223(indicators), this.strategy4224(indicators),
            this.strategy4225(indicators), this.strategy4226(indicators), this.strategy4227(indicators),
            this.strategy4228(indicators), this.strategy4229(indicators), this.strategy4230(indicators),
            this.strategy4231(indicators), this.strategy4232(indicators), this.strategy4233(indicators),
            this.strategy4234(indicators), this.strategy4235(indicators), this.strategy4236(indicators),
            this.strategy4237(indicators), this.strategy4238(indicators), this.strategy4239(indicators),
            this.strategy4240(indicators), this.strategy4241(indicators), this.strategy4242(indicators),
            this.strategy4243(indicators), this.strategy4244(indicators), this.strategy4245(indicators),
            this.strategy4246(indicators), this.strategy4247(indicators), this.strategy4248(indicators),
            this.strategy4249(indicators), this.strategy4250(indicators), this.strategy4251(indicators),
            this.strategy4252(indicators), this.strategy4253(indicators), this.strategy4254(indicators),
            this.strategy4255(indicators), this.strategy4256(indicators), this.strategy4257(indicators),
            this.strategy4258(indicators), this.strategy4259(indicators), this.strategy4260(indicators),
            this.strategy4261(indicators), this.strategy4262(indicators), this.strategy4263(indicators),
            this.strategy4264(indicators), this.strategy4265(indicators), this.strategy4266(indicators),
            this.strategy4267(indicators), this.strategy4268(indicators), this.strategy4269(indicators),
            this.strategy4270(indicators), this.strategy4271(indicators), this.strategy4272(indicators),
            this.strategy4273(indicators), this.strategy4274(indicators), this.strategy4275(indicators),
            this.strategy4276(indicators), this.strategy4277(indicators), this.strategy4278(indicators),
            this.strategy4279(indicators), this.strategy4280(indicators), this.strategy4281(indicators),
            this.strategy4282(indicators), this.strategy4283(indicators), this.strategy4284(indicators),
            this.strategy4285(indicators), this.strategy4286(indicators), this.strategy4287(indicators),
            this.strategy4288(indicators), this.strategy4289(indicators), this.strategy4290(indicators),
            this.strategy4291(indicators), this.strategy4292(indicators), this.strategy4293(indicators),
            this.strategy4294(indicators), this.strategy4295(indicators), this.strategy4296(indicators),
            this.strategy4297(indicators), this.strategy4298(indicators), this.strategy4299(indicators),
            this.strategy4300(indicators), this.strategy4301(indicators), this.strategy4302(indicators),
            this.strategy4303(indicators), this.strategy4304(indicators), this.strategy4305(indicators),
            this.strategy4306(indicators), this.strategy4307(indicators), this.strategy4308(indicators),
            this.strategy4309(indicators), this.strategy4310(indicators), this.strategy4311(indicators),
            this.strategy4312(indicators), this.strategy4313(indicators), this.strategy4314(indicators),
            this.strategy4315(indicators), this.strategy4316(indicators), this.strategy4317(indicators),
            this.strategy4318(indicators), this.strategy4319(indicators), this.strategy4320(indicators),
            this.strategy4321(indicators), this.strategy4322(indicators), this.strategy4323(indicators),
            this.strategy4324(indicators), this.strategy4325(indicators), this.strategy4326(indicators),
            this.strategy4327(indicators), this.strategy4328(indicators), this.strategy4329(indicators),
            this.strategy4330(indicators), this.strategy4331(indicators), this.strategy4332(indicators),
            this.strategy4333(indicators), this.strategy4334(indicators), this.strategy4335(indicators),
            this.strategy4336(indicators), this.strategy4337(indicators), this.strategy4338(indicators),
            this.strategy4339(indicators), this.strategy4340(indicators), this.strategy4341(indicators),
            this.strategy4342(indicators), this.strategy4343(indicators), this.strategy4344(indicators),
            this.strategy4345(indicators), this.strategy4346(indicators), this.strategy4347(indicators),
            this.strategy4348(indicators), this.strategy4349(indicators), this.strategy4350(indicators),
            this.strategy4351(indicators), this.strategy4352(indicators), this.strategy4353(indicators),
            this.strategy4354(indicators), this.strategy4355(indicators), this.strategy4356(indicators),
            this.strategy4357(indicators), this.strategy4358(indicators), this.strategy4359(indicators),
            this.strategy4360(indicators), this.strategy4361(indicators), this.strategy4362(indicators),
            this.strategy4363(indicators), this.strategy4364(indicators), this.strategy4365(indicators),
            this.strategy4366(indicators), this.strategy4367(indicators), this.strategy4368(indicators),
            this.strategy4369(indicators), this.strategy4370(indicators), this.strategy4371(indicators),
            this.strategy4372(indicators), this.strategy4373(indicators), this.strategy4374(indicators),
            this.strategy4375(indicators), this.strategy4376(indicators), this.strategy4377(indicators),
            this.strategy4378(indicators), this.strategy4379(indicators), this.strategy4380(indicators),
            this.strategy4381(indicators), this.strategy4382(indicators), this.strategy4383(indicators),
            this.strategy4384(indicators), this.strategy4385(indicators), this.strategy4386(indicators),
            this.strategy4387(indicators), this.strategy4388(indicators), this.strategy4389(indicators),
            this.strategy4390(indicators), this.strategy4391(indicators), this.strategy4392(indicators),
            this.strategy4393(indicators), this.strategy4394(indicators), this.strategy4395(indicators),
            this.strategy4396(indicators), this.strategy4397(indicators), this.strategy4398(indicators),
            this.strategy4399(indicators), this.strategy4400(indicators)
        ];
    }
}

