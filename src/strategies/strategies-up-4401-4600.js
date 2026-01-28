/**
 * UP ?�략 ?�장 (ID: 4401-4600)
 * 
 * STRATEGY_IDEAS.txt 기반 체계??구성:
 * - 4401-4500: 복합 ?�수 ?�스??고급 (100�?
 * - 4501-4600: 추�?/?�비 - 멀???�?�프?�임 & 고급 ?�턴 (100�?
 */

export class StrategiesUp4401 {
    
    // ==================== 복합 ?�수 ?�스??고급 (4401-4500) ====================
    // 가중치 기반 ?�중 지???�수 ?�스??고급 버전
    
    // --- ?�수 계산 ?�퍼 ?�수 ---
    
    /** RSI ?�수 (0-30) */
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
        return 0;
    }
    
    /** MACD ?�수 (0-30) */
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
    
    /** BB ?�수 (0-20) */
    static getBbScore(bb) {
        if (!bb) return 0;
        const pos = bb.position || 50;
        if (pos <= 10) return 20;
        if (pos <= 20) return 16;
        if (pos <= 30) return 12;
        if (pos <= 40) return 8;
        if (pos <= 50) return 4;
        return 0;
    }
    
    /** EMA ?�수 (0-20) */
    static getEmaScore(ind) {
        let score = 0;
        if (ind.close > ind.ema20) score += 5;
        if (ind.ema20 > ind.ema50) score += 5;
        if (ind.ema50 > ind.ema100) score += 5;
        if (ind.close > ind.sma200) score += 5;
        return score;
    }
    
    /** 변?�성 ?�수 (0-20) */
    static getVolatilityScore(ind) {
        let score = 0;
        const bw = ind.bollingerBands?.bandwidth || 0;
        const atr = ind.atr || 0;
        const avgAtr = ind.avgAtr || atr;
        const atrRatio = avgAtr > 0 ? atr / avgAtr : 1;
        if (bw < 1.5) score += 10;
        else if (bw < 2) score += 7;
        else if (bw < 2.5) score += 4;
        if (atrRatio < 0.6) score += 10;
        else if (atrRatio < 0.8) score += 7;
        else if (atrRatio < 1) score += 4;
        return score;
    }
    
    /** 거래???�수 (0-20) */
    static getVolumeScore(ind) {
        let score = 0;
        const volRatio = ind.volumeRatio || ind.volume / (ind.avgVolume || ind.volume) || 1;
        if (volRatio >= 3) score += 15;
        else if (volRatio >= 2) score += 12;
        else if (volRatio >= 1.5) score += 9;
        else if (volRatio >= 1.2) score += 6;
        else if (volRatio >= 1) score += 3;
        if (ind.priceChange > 0 && volRatio >= 1.5) score += 5;
        return Math.min(score, 20);
    }
    
    /** 모멘?� ?�수 (0-20) */
    static getMomentumScore(ind) {
        let score = 0;
        if (ind.priceChange > 2) score += 10;
        else if (ind.priceChange > 1) score += 8;
        else if (ind.priceChange > 0.5) score += 6;
        else if (ind.priceChange > 0) score += 4;
        const stoch = ind.stochastic?.k || ind.stochK || 50;
        if (stoch < 20) score += 10;
        else if (stoch < 30) score += 7;
        else if (stoch < 40) score += 4;
        return Math.min(score, 20);
    }
    
    /** 종합 ?�수 */
    static getTotalScore(ind) {
        return this.getRsiScore(ind.rsi) + this.getMacdScore(ind.macd) + 
               this.getBbScore(ind.bollingerBands) + this.getEmaScore(ind);
    }
    
    /** ?�장 ?�수 */
    static getExtendedScore(ind) {
        return this.getTotalScore(ind) + this.getVolatilityScore(ind) + 
               this.getVolumeScore(ind) + this.getMomentumScore(ind);
    }
    
    // --- 변?�성 ?�수 기반 (4401-4420) ---
    
    static strategy4401(ind) { const score = this.getVolatilityScore(ind); const match = (score >= 20) && ind.adx?.adx > 20 && ind.volume > ind.avgVolume * 1.1; return { id: 4401, name: 'Volatility Score 20', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4402(ind) { const score = this.getVolatilityScore(ind); const match = (score >= 17) && ind.volumeRatio > 1.0; return { id: 4402, name: 'Volatility Score 17+', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4403(ind) { const score = this.getVolatilityScore(ind); const match = (score >= 14) && ind.volumeRatio > 1.5; return { id: 4403, name: 'Volatility Score 14+', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy4404(ind) { const score = this.getVolatilityScore(ind); const match = (score >= 11) && ind.volumeRatio > 0.8; return { id: 4404, name: 'Volatility Score 11+', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy4405(ind) { const score = this.getVolatilityScore(ind); const match = (score >= 8) && ind.priceChange > -2 && ind.volume > ind.avgVolume * 1.5; return { id: 4405, name: 'Volatility Score 8+', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    
    /** 변?�성 ?�수 + RSI */
    static strategy4406(ind) { const vScore = this.getVolatilityScore(ind); const match = vScore >= 14 && ind.rsi < 35; return { id: 4406, name: 'Vol Score 14 + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4407(ind) { const vScore = this.getVolatilityScore(ind); const match = vScore >= 17 && ind.rsi < 30; return { id: 4407, name: 'Vol Score 17 + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4408(ind) { const vScore = this.getVolatilityScore(ind); const match = vScore >= 20 && ind.rsi < 30; return { id: 4408, name: 'Vol Score 20 + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    
    /** 변?�성 ?�수 + MACD */
    static strategy4409(ind) { const vScore = this.getVolatilityScore(ind); const match = vScore >= 14 && ind.macd?.MACD > ind.macd?.signal; return { id: 4409, name: 'Vol Score 14 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4410(ind) { const vScore = this.getVolatilityScore(ind); const match = vScore >= 17 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 4410, name: 'Vol Score 17 + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** 변?�성 ?�수 + 복합 */
    static strategy4411(ind) { const vScore = this.getVolatilityScore(ind); const match = vScore >= 14 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 4411, name: 'Vol Score 14 + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4412(ind) { const vScore = this.getVolatilityScore(ind); const match = vScore >= 17 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 4412, name: 'Vol Score 17 + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4413(ind) { const vScore = this.getVolatilityScore(ind); const match = vScore >= 14 && ind.rsi < 35 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4413, name: 'Vol Score 14 + RSI + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4414(ind) { const vScore = this.getVolatilityScore(ind); const match = vScore >= 17 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50; return { id: 4414, name: 'Vol Score 17 + All', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4415(ind) { const vScore = this.getVolatilityScore(ind); const match = vScore >= 20 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4415, name: 'Vol Score 20 + All', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    
    /** 변?�성 ?�수 + 릴리??*/
    static strategy4416(ind) { const vScore = this.getVolatilityScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = vScore >= 14 && prevBw < 2 && bw >= 2.5 && ind.priceChange > 0; return { id: 4416, name: 'Vol Score 14 + Release', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4417(ind) { const vScore = this.getVolatilityScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = vScore >= 17 && prevBw < 1.5 && bw >= 2.5 && ind.priceChange > 0; return { id: 4417, name: 'Vol Score 17 + Strong Release', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4418(ind) { const vScore = this.getVolatilityScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = vScore >= 14 && prevBw < 2 && bw >= 3 && ind.priceChange >= 1 && ind.rsi < 40; return { id: 4418, name: 'Vol Score + Release + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4419(ind) { const vScore = this.getVolatilityScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = vScore >= 17 && prevBw < 1.5 && bw >= 3 && ind.priceChange >= 1 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 4419, name: 'Vol Score + Release + All', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4420(ind) { const vScore = this.getVolatilityScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = vScore >= 20 && prevBw < 1 && bw >= 3 && ind.priceChange >= 1.5 && ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4420, name: 'Ultimate Vol Score Release', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    
    // --- 거래???�수 기반 (4421-4440) ---
    
    static strategy4421(ind) { const score = this.getVolumeScore(ind); const match = (score >= 20) && ind.adx?.adx > 25 && ind.volume > ind.avgVolume * 1.5; return { id: 4421, name: 'Volume Score 20', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4422(ind) { const score = this.getVolumeScore(ind); const match = (score >= 17) && ind.volumeRatio > 1.2 && ind.obv > (ind.prevObv || 0); return { id: 4422, name: 'Volume Score 17+', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4423(ind) { const score = this.getVolumeScore(ind); const match = (score >= 14) && ind.volumeRatio < 1.0 && ind.volume > (ind.avgVolume || ind.volume) * 1.25; return { id: 4423, name: 'Volume Score 14+', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy4424(ind) { const score = this.getVolumeScore(ind); const match = (score >= 11) && ind.atr > 100 && ind.volume > (ind.prevVolume || ind.volume) * 1.1300000000000001; return { id: 4424, name: 'Volume Score 11+', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy4425(ind) { const score = this.getVolumeScore(ind); const match = (score >= 8) && ind.priceChange < 5 && ind.volume > ind.avgVolume * 1.1; return { id: 4425, name: 'Volume Score 8+', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    
    /** 거래???�수 + RSI */
    static strategy4426(ind) { const volScore = this.getVolumeScore(ind); const match = volScore >= 14 && ind.rsi < 35; return { id: 4426, name: 'Vol Score 14 + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4427(ind) { const volScore = this.getVolumeScore(ind); const match = volScore >= 17 && ind.rsi < 30; return { id: 4427, name: 'Vol Score 17 + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4428(ind) { const volScore = this.getVolumeScore(ind); const match = volScore >= 20 && ind.rsi < 30; return { id: 4428, name: 'Volume Score 20 + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    
    /** 거래???�수 + MACD */
    static strategy4429(ind) { const volScore = this.getVolumeScore(ind); const match = volScore >= 14 && ind.macd?.MACD > ind.macd?.signal; return { id: 4429, name: 'Volume Score 14 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4430(ind) { const volScore = this.getVolumeScore(ind); const match = volScore >= 17 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 4430, name: 'Volume Score 17 + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    
    /** 거래???�수 + BB */
    static strategy4431(ind) { const volScore = this.getVolumeScore(ind); const pos = ind.bollingerBands?.position || 50; const match = volScore >= 14 && pos < 30; return { id: 4431, name: 'Volume Score 14 + BB30', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4432(ind) { const volScore = this.getVolumeScore(ind); const pos = ind.bollingerBands?.position || 50; const match = volScore >= 17 && pos < 25; return { id: 4432, name: 'Volume Score 17 + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4433(ind) { const volScore = this.getVolumeScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = volScore >= 14 && bw < 2; return { id: 4433, name: 'Volume Score 14 + Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4434(ind) { const volScore = this.getVolumeScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = volScore >= 17 && bw < 1.5; return { id: 4434, name: 'Volume Score 17 + Tight', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    
    /** 거래???�수 + 복합 */
    static strategy4435(ind) { const volScore = this.getVolumeScore(ind); const match = volScore >= 14 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 4435, name: 'Volume Score + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4436(ind) { const volScore = this.getVolumeScore(ind); const match = volScore >= 17 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 4436, name: 'Vol Score 17 + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4437(ind) { const volScore = this.getVolumeScore(ind); const match = volScore >= 14 && ind.rsi < 35 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4437, name: 'Volume Score + RSI + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4438(ind) { const volScore = this.getVolumeScore(ind); const pos = ind.bollingerBands?.position || 50; const match = volScore >= 17 && ind.rsi < 30 && pos < 25; return { id: 4438, name: 'Vol Score 17 + RSI30 + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4439(ind) { const volScore = this.getVolumeScore(ind); const match = volScore >= 17 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4439, name: 'Vol Score 17 + All', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4440(ind) { const volScore = this.getVolumeScore(ind); const pos = ind.bollingerBands?.position || 50; const bw = ind.bollingerBands?.bandwidth || 0; const match = volScore >= 20 && ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && pos < 20 && bw < 1.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4440, name: 'Ultimate Volume Score', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    
    // --- 모멘?� ?�수 기반 (4441-4460) ---
    
    static strategy4441(ind) { const score = this.getMomentumScore(ind); const match = (score >= 20) && ind.adx?.adx < 40 && ind.volume > ind.avgVolume * 1.1; return { id: 4441, name: 'Momentum Score 20', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4442(ind) { const score = this.getMomentumScore(ind); const match = score >= 17 && ind.obv > (ind.prevObv || 0); return { id: 4442, name: 'Momentum Score 17+', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4443(ind) { const score = this.getMomentumScore(ind); const match = score >= 14 && ind.volume > (ind.avgVolume || ind.volume) * 1.25; return { id: 4443, name: 'Momentum Score 14+', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy4444(ind) { const score = this.getMomentumScore(ind); const match = score >= 11 && ind.volume > (ind.prevVolume || ind.volume) * 1.1300000000000001; return { id: 4444, name: 'Momentum Score 11+', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy4445(ind) { const score = this.getMomentumScore(ind); const match = (score >= 8) && ind.consecutiveGreen >= 1 && ind.volume > ind.avgVolume * 1.5; return { id: 4445, name: 'Momentum Score 8+', direction: 'UP', match: Boolean(match), confidence: match ? 70 : 0 }; }
    
    /** 모멘?� ?�수 + RSI */
    static strategy4446(ind) { const momScore = this.getMomentumScore(ind); const match = momScore >= 14 && ind.rsi < 40; return { id: 4446, name: 'Momentum 14 + RSI40', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4447(ind) { const momScore = this.getMomentumScore(ind); const match = momScore >= 17 && ind.rsi < 35; return { id: 4447, name: 'Momentum 17 + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4448(ind) { const momScore = this.getMomentumScore(ind); const match = momScore >= 20 && ind.rsi < 35; return { id: 4448, name: 'Momentum 20 + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    
    /** 모멘?� ?�수 + MACD */
    static strategy4449(ind) { const momScore = this.getMomentumScore(ind); const match = momScore >= 14 && ind.macd?.MACD > ind.macd?.signal; return { id: 4449, name: 'Momentum 14 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4450(ind) { const momScore = this.getMomentumScore(ind); const match = momScore >= 17 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 4450, name: 'Momentum 17 + MACD Above0', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    
    /** 모멘?� ?�수 + EMA */
    static strategy4451(ind) { const momScore = this.getMomentumScore(ind); const match = momScore >= 14 && ind.ema20 > ind.ema50; return { id: 4451, name: 'Momentum 14 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4452(ind) { const momScore = this.getMomentumScore(ind); const match = momScore >= 17 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4452, name: 'Momentum 17 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    
    /** 모멘?� ?�수 + BB */
    static strategy4453(ind) { const momScore = this.getMomentumScore(ind); const pos = ind.bollingerBands?.position || 50; const match = momScore >= 14 && pos < 35; return { id: 4453, name: 'Momentum 14 + BB35', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4454(ind) { const momScore = this.getMomentumScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = momScore >= 14 && bw < 2; return { id: 4454, name: 'Momentum 14 + Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    /** 모멘?� ?�수 + 복합 */
    static strategy4455(ind) { const momScore = this.getMomentumScore(ind); const match = momScore >= 14 && ind.rsi < 40 && ind.macd?.MACD > ind.macd?.signal; return { id: 4455, name: 'Momentum + RSI40 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4456(ind) { const momScore = this.getMomentumScore(ind); const match = momScore >= 17 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 4456, name: 'Momentum 17 + RSI + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4457(ind) { const momScore = this.getMomentumScore(ind); const match = momScore >= 14 && ind.rsi < 40 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4457, name: 'Momentum + RSI40 + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4458(ind) { const momScore = this.getMomentumScore(ind); const match = momScore >= 17 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50; return { id: 4458, name: 'Momentum 17 + All', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4459(ind) { const momScore = this.getMomentumScore(ind); const pos = ind.bollingerBands?.position || 50; const match = momScore >= 17 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && pos < 30; return { id: 4459, name: 'Momentum 17 + All + BB30', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4460(ind) { const momScore = this.getMomentumScore(ind); const pos = ind.bollingerBands?.position || 50; const bw = ind.bollingerBands?.bandwidth || 0; const match = momScore >= 20 && ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && pos < 25 && bw < 1.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4460, name: 'Ultimate Momentum Score', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    
    // --- ?�장 ?�수 (모든 ?�수 ?�산) (4461-4480) ---
    
    static strategy4461(ind) { const score = this.getExtendedScore(ind); const match = (score >= 140) && ind.bollingerBands?.position < 30 && ind.volume > ind.avgVolume * 1.5; return { id: 4461, name: 'Extended Score 140+', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    static strategy4462(ind) { const score = this.getExtendedScore(ind); const match = (score >= 130) && ind.volumeRatio < 1.0 && ind.obv > (ind.prevObv || 0); return { id: 4462, name: 'Extended Score 130+', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy4463(ind) { const score = this.getExtendedScore(ind); const match = (score >= 120) && ind.adx?.adx > 20 && ind.volume > (ind.avgVolume || ind.volume) * 1.25; return { id: 4463, name: 'Extended Score 120+', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4464(ind) { const score = this.getExtendedScore(ind); const match = (score >= 110) && ind.consecutiveGreen >= 1 && ind.volume > (ind.prevVolume || ind.volume) * 1.1300000000000001; return { id: 4464, name: 'Extended Score 110+', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4465(ind) { const score = this.getExtendedScore(ind); const match = (score >= 100) && ind.fearGreedIndex > 20 && ind.volume > ind.avgVolume * 1.1; return { id: 4465, name: 'Extended Score 100+', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy4466(ind) { const score = this.getExtendedScore(ind); const match = (score >= 90) && ind.macd?.histogram < 0 && ind.obv > (ind.prevObv || 0); return { id: 4466, name: 'Extended Score 90+', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4467(ind) { const score = this.getExtendedScore(ind); const match = (score >= 80) && ind.volumeRatio > 1.5 && ind.volume > (ind.avgVolume || ind.volume) * 1.2000000000000002; return { id: 4467, name: 'Extended Score 80+', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4468(ind) { const score = this.getExtendedScore(ind); const match = (score >= 70) && ind.stochastic?.k > ind.stochastic?.d && ind.volume > (ind.prevVolume || ind.volume) * 1.21; return { id: 4468, name: 'Extended Score 70+', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4469(ind) { const score = this.getExtendedScore(ind); const match = (score >= 60) && ind.stochastic?.k > 30 && ind.volume > ind.avgVolume * 1.5; return { id: 4469, name: 'Extended Score 60+', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy4470(ind) { const score = this.getExtendedScore(ind); const match = (score >= 50) && ind.adx?.adx > 20 && ind.obv > (ind.prevObv || 0); return { id: 4470, name: 'Extended Score 50+', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    
    /** ?�장 ?�수 + 추�? 조건 */
    static strategy4471(ind) { const score = this.getExtendedScore(ind); const match = (score >= 100 && ind.priceChange > 0) && ind.macd?.histogram > 0 && ind.volume > (ind.avgVolume || ind.volume) * 1.1500000000000001; return { id: 4471, name: 'Extended 100+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4472(ind) { const score = this.getExtendedScore(ind); const match = (score >= 110 && ind.priceChange > 0) && ind.macd?.histogram > -5 && ind.volume > (ind.prevVolume || ind.volume) * 1.09; return { id: 4472, name: 'Extended 110+ Green', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4473(ind) { const score = this.getExtendedScore(ind); const match = score >= 120 && ind.priceChange >= 0.5; return { id: 4473, name: 'Extended 120+ 0.5%', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy4474(ind) { const score = this.getExtendedScore(ind); const match = score >= 130 && ind.priceChange >= 1; return { id: 4474, name: 'Extended 130+ 1%', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    static strategy4475(ind) { const score = this.getExtendedScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = score >= 100 && prevBw < 2 && bw >= 2.5; return { id: 4475, name: 'Extended 100+ Release', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4476(ind) { const score = this.getExtendedScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = score >= 110 && prevBw < 1.5 && bw >= 2.5 && ind.priceChange > 0; return { id: 4476, name: 'Extended 110+ Release Up', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy4477(ind) { const score = this.getExtendedScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = score >= 120 && prevBw < 1.5 && bw >= 3 && ind.priceChange >= 0.5; return { id: 4477, name: 'Extended 120+ Strong Release', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    static strategy4478(ind) { const score = this.getExtendedScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = score >= 130 && prevBw < 1 && bw >= 3 && ind.priceChange >= 1; return { id: 4478, name: 'Extended 130+ Explosive', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    static strategy4479(ind) { const score = this.getExtendedScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = score >= 140 && prevBw < 1 && bw >= 3 && ind.priceChange >= 1.5; return { id: 4479, name: 'Extended 140+ Ultimate', direction: 'UP', match: Boolean(match), confidence: match ? 98 : 0 }; }
    static strategy4480(ind) { const score = this.getExtendedScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = score >= 140 && prevBw < 1 && bw >= 3 && atrRatio >= 1.5 && ind.priceChange >= 2; return { id: 4480, name: 'Maximum Extended Score', direction: 'UP', match: Boolean(match), confidence: match ? 99 : 0 }; }
    
    // --- ?�수 균형 조합 (4481-4500) ---
    
    /** 모든 ?�수 균형 (�??�수가 ?�정 ?�상) */
    static strategy4481(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const match = rsi >= 18 && macd >= 15 && bb >= 8 && ema >= 10; return { id: 4481, name: 'Balanced Score Basic', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4482(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const match = rsi >= 21 && macd >= 20 && bb >= 12 && ema >= 10; return { id: 4482, name: 'Balanced Score Medium', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4483(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const match = rsi >= 24 && macd >= 20 && bb >= 12 && ema >= 15; return { id: 4483, name: 'Balanced Score High', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4484(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const match = (rsi >= 27 && macd >= 25 && bb >= 16 && ema >= 15) && ind.adx?.adx > 25 && ind.volume > (ind.prevVolume || ind.volume) * 1.1300000000000001; return { id: 4484, name: 'Balanced Score Very High', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4485(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const match = (rsi >= 30 && macd >= 30 && bb >= 20 && ema >= 20) && ind.adx?.adx < 40 && ind.volume > ind.avgVolume * 1.5; return { id: 4485, name: 'Balanced Score Perfect', direction: 'UP', match: Boolean(match), confidence: match ? 98 : 0 }; }
    
    /** ?�장 ?�수 균형 */
    static strategy4486(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const vol = this.getVolatilityScore(ind); const match = rsi >= 18 && macd >= 15 && bb >= 8 && ema >= 10 && vol >= 8; return { id: 4486, name: 'Extended Balance Basic', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4487(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const vol = this.getVolatilityScore(ind); const match = rsi >= 21 && macd >= 20 && bb >= 12 && ema >= 10 && vol >= 11; return { id: 4487, name: 'Extended Balance Medium', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4488(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const vol = this.getVolatilityScore(ind); const match = rsi >= 24 && macd >= 20 && bb >= 16 && ema >= 15 && vol >= 14; return { id: 4488, name: 'Extended Balance High', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4489(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const vol = this.getVolatilityScore(ind); const mom = this.getMomentumScore(ind); const match = rsi >= 21 && macd >= 20 && bb >= 12 && ema >= 10 && vol >= 11 && mom >= 8; return { id: 4489, name: 'Full Balance Medium', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4490(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const vol = this.getVolatilityScore(ind); const mom = this.getMomentumScore(ind); const match = rsi >= 24 && macd >= 20 && bb >= 16 && ema >= 15 && vol >= 14 && mom >= 11; return { id: 4490, name: 'Full Balance High', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    
    /** ?�수 조합 Ultimate */
    static strategy4491(ind) { const total = this.getTotalScore(ind); const vol = this.getVolatilityScore(ind); const match = total >= 70 && vol >= 14 && ind.priceChange > 0; return { id: 4491, name: 'Total + Vol + Green', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4492(ind) { const total = this.getTotalScore(ind); const mom = this.getMomentumScore(ind); const match = total >= 70 && mom >= 14 && ind.priceChange > 0; return { id: 4492, name: 'Total + Momentum + Green', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4493(ind) { const total = this.getTotalScore(ind); const volScore = this.getVolumeScore(ind); const match = total >= 70 && volScore >= 14 && ind.priceChange > 0; return { id: 4493, name: 'Total + Volume + Green', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4494(ind) { const ext = this.getExtendedScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = ext >= 110 && bw < 2 && ind.priceChange > 0; return { id: 4494, name: 'Extended + Squeeze + Green', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4495(ind) { const ext = this.getExtendedScore(ind); const pos = ind.bollingerBands?.position || 50; const match = ext >= 110 && pos < 25 && ind.priceChange > 0; return { id: 4495, name: 'Extended + BB25 + Green', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4496(ind) { const ext = this.getExtendedScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = ext >= 120 && prevBw < 2 && bw >= 2.5 && ind.priceChange > 0; return { id: 4496, name: 'Extended + Release + Green', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy4497(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const vol = this.getVolatilityScore(ind); const volScore = this.getVolumeScore(ind); const mom = this.getMomentumScore(ind); const match = rsi >= 24 && macd >= 25 && bb >= 16 && ema >= 15 && vol >= 14 && volScore >= 11 && mom >= 11; return { id: 4497, name: 'Full Balance Very High', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    static strategy4498(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const vol = this.getVolatilityScore(ind); const volScore = this.getVolumeScore(ind); const mom = this.getMomentumScore(ind); const match = rsi >= 27 && macd >= 25 && bb >= 16 && ema >= 15 && vol >= 17 && volScore >= 14 && mom >= 14 && ind.priceChange > 0; return { id: 4498, name: 'Full Balance Extreme', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    static strategy4499(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const vol = this.getVolatilityScore(ind); const volScore = this.getVolumeScore(ind); const mom = this.getMomentumScore(ind); const match = rsi >= 27 && macd >= 30 && bb >= 20 && ema >= 20 && vol >= 17 && volScore >= 17 && mom >= 14 && ind.priceChange >= 1; return { id: 4499, name: 'Full Balance Ultimate', direction: 'UP', match: Boolean(match), confidence: match ? 98 : 0 }; }
    static strategy4500(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const vol = this.getVolatilityScore(ind); const volScore = this.getVolumeScore(ind); const mom = this.getMomentumScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const release = prevBw < 1.5 && bw >= 2.5; const match = rsi >= 30 && macd >= 30 && bb >= 20 && ema >= 20 && vol >= 20 && volScore >= 17 && mom >= 17 && release && ind.priceChange >= 1.5; return { id: 4500, name: 'Perfect Score System', direction: 'UP', match: Boolean(match), confidence: match ? 99 : 0 }; }
    
    // ==================== 추�?/?�비 - 멀???�?�프?�임 & 고급 ?�턴 (4501-4600) ====================
    
    // --- ?�간?� 기반 ?�략 (4501-4520) ---
    
    /** ?�수 복합 ?�략 (4501-4520) */
    static strategy4501(ind) { const total = this.getTotalScore(ind); const match = total >= 65 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 4501, name: 'Score 65 + RSI MACD', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy4502(ind) { const total = this.getTotalScore(ind); const match = total >= 70 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 4502, name: 'Score 70 + RSI MACD', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy4503(ind) { const total = this.getTotalScore(ind); const vol = this.getVolatilityScore(ind); const match = total >= 60 && vol >= 11 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 4503, name: 'Score + Vol + RSI MACD', direction: 'UP', match: Boolean(match), confidence: match ? 74 : 0 }; }
    static strategy4504(ind) { const total = this.getTotalScore(ind); const match = total >= 65 && ind.rsi < 30 && ind.priceChange > 0; return { id: 4504, name: 'Score 65 + RSI30 + Green', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy4505(ind) { const ext = this.getExtendedScore(ind); const match = ext >= 90 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20; return { id: 4505, name: 'Extended 90 + Buy', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    /** 복합 ?�수 ?�략 */
    static strategy4506(ind) { const total = this.getTotalScore(ind); const vol = this.getVolatilityScore(ind); const match = total >= 70 && vol >= 14 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 4506, name: 'High Score + Vol', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy4507(ind) { const total = this.getTotalScore(ind); const volScore = this.getVolumeScore(ind); const match = total >= 70 && volScore >= 14 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 4507, name: 'High Score + Volume', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy4508(ind) { const ext = this.getExtendedScore(ind); const match = ext >= 95 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal; return { id: 4508, name: 'Extended 95 + Buy', direction: 'UP', match: Boolean(match), confidence: match ? 73 : 0 }; }
    static strategy4509(ind) { const total = this.getTotalScore(ind); const mom = this.getMomentumScore(ind); const match = total >= 65 && mom >= 14 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 4509, name: 'Score + Momentum + Buy', direction: 'UP', match: Boolean(match), confidence: match ? 71 : 0 }; }
    static strategy4510(ind) { const total = this.getTotalScore(ind); const vol = this.getVolatilityScore(ind); const match = total >= 70 && vol >= 11 && ind.rsi < 35 && ind.priceChange > 0; return { id: 4510, name: 'Score + Vol + Green', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    
    /** 고급 ?�수 복합 */
    static strategy4511(ind) { const ext = this.getExtendedScore(ind); const match = ext >= 100 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4511, name: 'Extended 100 + All', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4512(ind) { const total = this.getTotalScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const match = total >= 70 && ind.rsi < 35 && bw < 2; return { id: 4512, name: 'Score + RSI + Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4513(ind) { const total = this.getTotalScore(ind); const pos = ind.bollingerBands?.position || 50; const match = total >= 70 && ind.rsi < 35 && pos < 25; return { id: 4513, name: 'Score + RSI + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4514(ind) { const vol = this.getVolatilityScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = vol >= 14 && prevBw < 2 && bw >= 2.5 && ind.priceChange > 0; return { id: 4514, name: 'Vol Score + Release Up', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4515(ind) { const volScore = this.getVolumeScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = volScore >= 14 && prevBw < 2 && bw >= 2.5 && ind.priceChange > 0 && ind.rsi < 40; return { id: 4515, name: 'Volume Score + Release Up', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4516(ind) { const ext = this.getExtendedScore(ind); const match = ext >= 105 && ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4516, name: 'Extended 105 + All', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4517(ind) { const ext = this.getExtendedScore(ind); const pos = ind.bollingerBands?.position || 50; const bw = ind.bollingerBands?.bandwidth || 0; const match = ext >= 100 && ind.rsi < 30 && pos < 25 && bw < 2; return { id: 4517, name: 'Extended + RSI30 + BB Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4518(ind) { const ext = this.getExtendedScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = ext >= 100 && prevBw < 1.5 && bw >= 2.5 && ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && ind.priceChange > 0; return { id: 4518, name: 'Extended + Release + All', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4519(ind) { const ext = this.getExtendedScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = ext >= 110 && prevBw < 1.5 && bw >= 3 && ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.priceChange >= 1; return { id: 4519, name: 'Extended + Explosive', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4520(ind) { const total = this.getTotalScore(ind); const vol = this.getVolatilityScore(ind); const volScore = this.getVolumeScore(ind); const match = total >= 80 && vol >= 14 && volScore >= 11 && ind.priceChange > 0; return { id: 4520, name: 'Full Score System', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    
    // --- 가�??�션 ?�턴 (4521-4550) ---
    
    /** 캔들 ?�턴 기반 */
    static strategy4521(ind) { const bodyRatio = Math.abs(ind.close - ind.open) / (ind.high - ind.low || 1); const lowerWick = (Math.min(ind.open, ind.close) - ind.low) / (ind.high - ind.low || 1); const match = bodyRatio < 0.3 && lowerWick > 0.6 && ind.close > ind.open; return { id: 4521, name: 'Hammer Pattern', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy4522(ind) { const bodyRatio = Math.abs(ind.close - ind.open) / (ind.high - ind.low || 1); const lowerWick = (Math.min(ind.open, ind.close) - ind.low) / (ind.high - ind.low || 1); const match = bodyRatio < 0.3 && lowerWick > 0.6 && ind.close > ind.open && ind.rsi < 35; return { id: 4522, name: 'Hammer + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4523(ind) { const bodyRatio = Math.abs(ind.close - ind.open) / (ind.high - ind.low || 1); const lowerWick = (Math.min(ind.open, ind.close) - ind.low) / (ind.high - ind.low || 1); const match = bodyRatio < 0.3 && lowerWick > 0.6 && ind.close > ind.open && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 4523, name: 'Hammer + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4524(ind) { const bodyRatio = Math.abs(ind.close - ind.open) / (ind.high - ind.low || 1); const match = bodyRatio < 0.1; return { id: 4524, name: 'Doji Pattern', direction: 'UP', match: Boolean(match), confidence: match ? 65 : 0 }; }
    static strategy4525(ind) { const bodyRatio = Math.abs(ind.close - ind.open) / (ind.high - ind.low || 1); const match = bodyRatio < 0.1 && ind.rsi < 30; return { id: 4525, name: 'Doji + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy4526(ind) { const bodyRatio = Math.abs(ind.close - ind.open) / (ind.high - ind.low || 1); const pos = ind.bollingerBands?.position || 50; const match = bodyRatio < 0.1 && pos < 20; return { id: 4526, name: 'Doji + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4527(ind) { const bodyRatio = Math.abs(ind.close - ind.open) / (ind.high - ind.low || 1); const match = bodyRatio < 0.1 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 4527, name: 'Doji + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    /** ?��??�봉 ?�턴 */
    static strategy4528(ind) { const bodySize = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const match = ind.close > ind.open && bodySize / (range || 1) > 0.7 && ind.priceChange >= 1; return { id: 4528, name: 'Strong Bullish Candle 1%', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy4529(ind) { const bodySize = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const match = ind.close > ind.open && bodySize / (range || 1) > 0.7 && ind.priceChange >= 2; return { id: 4529, name: 'Strong Bullish Candle 2%', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4530(ind) { const bodySize = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const match = ind.close > ind.open && bodySize / (range || 1) > 0.7 && ind.priceChange >= 1 && ind.rsi < 50; return { id: 4530, name: 'Bullish Candle + RSI50', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4531(ind) { const bodySize = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const match = ind.close > ind.open && bodySize / (range || 1) > 0.7 && ind.priceChange >= 1.5 && ind.macd?.MACD > ind.macd?.signal; return { id: 4531, name: 'Bullish Candle + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy4532(ind) { const bodySize = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const match = ind.close > ind.open && bodySize / (range || 1) > 0.7 && ind.priceChange >= 1 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4532, name: 'Bullish Candle + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    /** ?�속 ?�턴 */
    static strategy4533(ind) { const match = ind.consecutiveGreen >= 2 && ind.rsi < 50; return { id: 4533, name: '2 Green + RSI50', direction: 'UP', match: Boolean(match), confidence: match ? 72 : 0 }; }
    static strategy4534(ind) { const match = ind.consecutiveGreen >= 3 && ind.rsi < 55; return { id: 4534, name: '3 Green + RSI55', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy4535(ind) { const match = ind.consecutiveGreen >= 2 && ind.rsi < 45 && ind.macd?.MACD > ind.macd?.signal; return { id: 4535, name: '2 Green + RSI45 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4536(ind) { const match = ind.consecutiveGreen >= 3 && ind.rsi < 50 && ind.macd?.MACD > ind.macd?.signal; return { id: 4536, name: '3 Green + RSI50 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4537(ind) { const match = ind.consecutiveGreen >= 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4537, name: '2 Green + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    
    /** �??�턴 */
    static strategy4538(ind) { const gapUp = ind.open > ind.prevClose * 1.01; const match = (gapUp && ind.close > ind.open) && ind.volumeRatio > 1.2 && ind.obv > (ind.prevObv || 0); return { id: 4538, name: 'Gap Up + Green', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy4539(ind) { const gapUp = ind.open > ind.prevClose * 1.02; const match = gapUp && ind.close > ind.open && ind.rsi < 60; return { id: 4539, name: 'Strong Gap Up + Green', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4540(ind) { const gapDown = ind.open < ind.prevClose * 0.99; const match = gapDown && ind.close > ind.open && ind.rsi < 35; return { id: 4540, name: 'Gap Down Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4541(ind) { const gapDown = ind.open < ind.prevClose * 0.98; const match = gapDown && ind.close > ind.open && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 4541, name: 'Strong Gap Recovery', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    
    /** 지지/?�???�파 */
    static strategy4542(ind) { const match = ind.close > ind.resistance && ind.priceChange > 0; return { id: 4542, name: 'Resistance Break', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy4543(ind) { const match = ind.close > ind.resistance && ind.priceChange > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 4543, name: 'Resistance Break + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy4544(ind) { const match = ind.low <= ind.support * 1.01 && ind.close > ind.support && ind.close > ind.open; return { id: 4544, name: 'Support Bounce', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4545(ind) { const match = ind.low <= ind.support * 1.01 && ind.close > ind.support && ind.close > ind.open && ind.rsi < 35; return { id: 4545, name: 'Support Bounce + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4546(ind) { const match = ind.low <= ind.support * 1.01 && ind.close > ind.support && ind.close > ind.open && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 4546, name: 'Support Bounce + RSI30 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    
    /** 고급 가�??�턴 */
    static strategy4547(ind) { const bodyRatio = Math.abs(ind.close - ind.open) / (ind.high - ind.low || 1); const lowerWick = (Math.min(ind.open, ind.close) - ind.low) / (ind.high - ind.low || 1); const pos = ind.bollingerBands?.position || 50; const match = bodyRatio < 0.3 && lowerWick > 0.6 && ind.close > ind.open && pos < 20 && ind.rsi < 30; return { id: 4547, name: 'Hammer + BB20 + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4548(ind) { const bodyRatio = Math.abs(ind.close - ind.open) / (ind.high - ind.low || 1); const pos = ind.bollingerBands?.position || 50; const match = bodyRatio < 0.1 && pos < 15 && ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal; return { id: 4548, name: 'Doji + BB15 + RSI25 + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4549(ind) { const bodySize = Math.abs(ind.close - ind.open); const range = ind.high - ind.low; const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = ind.close > ind.open && bodySize / (range || 1) > 0.7 && ind.priceChange >= 1.5 && prevBw < 2 && bw >= 2.5 && ind.macd?.MACD > ind.macd?.signal; return { id: 4549, name: 'Bullish + Release + MACD', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4550(ind) { const bodyRatio = Math.abs(ind.close - ind.open) / (ind.high - ind.low || 1); const lowerWick = (Math.min(ind.open, ind.close) - ind.low) / (ind.high - ind.low || 1); const pos = ind.bollingerBands?.position || 50; const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const match = bodyRatio < 0.3 && lowerWick > 0.6 && ind.close > ind.open && pos < 15 && ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && prevBw < 1.5 && bw >= 2 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 4550, name: 'Ultimate Hammer Pattern', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    
    // --- 고급 복합 ?�략 (4551-4580) ---
    
    /** ?�중 ?�인 ?�략 */
    static strategy4551(ind) { const rsiOk = ind.rsi < 35; const macdOk = ind.macd?.MACD > ind.macd?.signal; const emaOk = ind.ema20 > ind.ema50; const count = [rsiOk, macdOk, emaOk].filter(Boolean).length; const match = count >= 2; return { id: 4551, name: '2 of 3 Confirm', direction: 'UP', match: Boolean(match), confidence: match ? 75 : 0 }; }
    static strategy4552(ind) { const rsiOk = ind.rsi < 35; const macdOk = ind.macd?.MACD > ind.macd?.signal; const emaOk = ind.ema20 > ind.ema50; const count = [rsiOk, macdOk, emaOk].filter(Boolean).length; const match = (count >= 3) && ind.atr > 200; return { id: 4552, name: '3 of 3 Confirm', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4553(ind) { const rsiOk = ind.rsi < 35; const macdOk = ind.macd?.MACD > ind.macd?.signal; const emaOk = ind.close > ind.ema20 && ind.ema20 > ind.ema50; const bbOk = (ind.bollingerBands?.position || 50) < 30; const count = [rsiOk, macdOk, emaOk, bbOk].filter(Boolean).length; const match = count >= 3 && ind.volume > ind.avgVolume * 1.1; return { id: 4553, name: '3 of 4 Confirm', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy4554(ind) { const rsiOk = ind.rsi < 35; const macdOk = ind.macd?.MACD > ind.macd?.signal; const emaOk = ind.close > ind.ema20 && ind.ema20 > ind.ema50; const bbOk = (ind.bollingerBands?.position || 50) < 30; const count = [rsiOk, macdOk, emaOk, bbOk].filter(Boolean).length; const match = (count >= 4) && ind.stochastic?.k > ind.stochastic?.d; return { id: 4554, name: '4 of 4 Confirm', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4555(ind) { const rsiOk = ind.rsi < 30; const macdOk = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; const emaOk = ind.close > ind.ema20 && ind.ema20 > ind.ema50; const bbOk = (ind.bollingerBands?.position || 50) < 25; const bwOk = (ind.bollingerBands?.bandwidth || 0) < 2; const count = [rsiOk, macdOk, emaOk, bbOk, bwOk].filter(Boolean).length; const match = count >= 4 && ind.volume > (ind.avgVolume || ind.volume) * 1.1; return { id: 4555, name: '4 of 5 Confirm', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4556(ind) { const rsiOk = ind.rsi < 30; const macdOk = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; const emaOk = ind.close > ind.ema20 && ind.ema20 > ind.ema50; const bbOk = (ind.bollingerBands?.position || 50) < 25; const bwOk = (ind.bollingerBands?.bandwidth || 0) < 2; const count = [rsiOk, macdOk, emaOk, bbOk, bwOk].filter(Boolean).length; const match = count >= 5; return { id: 4556, name: '5 of 5 Confirm', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    
    /** ?�계�??�인 */
    static strategy4557(ind) { const phase1 = ind.rsi < 40; const phase2 = ind.macd?.MACD > ind.macd?.signal; const match = phase1 && phase2; return { id: 4557, name: 'Phase 1-2 Confirm', direction: 'UP', match: Boolean(match), confidence: match ? 76 : 0 }; }
    static strategy4558(ind) { const phase1 = ind.rsi < 40; const phase2 = ind.macd?.MACD > ind.macd?.signal; const phase3 = ind.ema20 > ind.ema50; const match = phase1 && phase2 && phase3; return { id: 4558, name: 'Phase 1-3 Confirm', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4559(ind) { const phase1 = ind.rsi < 35; const phase2 = ind.macd?.MACD > ind.macd?.signal; const phase3 = ind.close > ind.ema20 && ind.ema20 > ind.ema50; const phase4 = (ind.bollingerBands?.position || 50) < 30; const match = phase1 && phase2 && phase3 && phase4; return { id: 4559, name: 'Phase 1-4 Confirm', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy4560(ind) { const phase1 = ind.rsi < 30; const phase2 = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; const phase3 = ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.ema50 > ind.ema100; const phase4 = (ind.bollingerBands?.position || 50) < 25; const phase5 = ind.priceChange > 0; const match = phase1 && phase2 && phase3 && phase4 && phase5; return { id: 4560, name: 'Phase 1-5 Confirm', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    
    /** 가�?복합 ?�수 */
    static strategy4561(ind) { let score = 0; if (ind.rsi < 30) score += 25; else if (ind.rsi < 40) score += 15; if (ind.macd?.MACD > ind.macd?.signal) score += 20; if (ind.macd?.MACD > 0) score += 10; if (ind.close > ind.ema20) score += 10; if (ind.ema20 > ind.ema50) score += 10; if ((ind.bollingerBands?.position || 50) < 30) score += 15; const match = (score >= 60) && ind.stochastic?.k < 70 && ind.volume > ind.avgVolume * 1.1; return { id: 4561, name: 'Weighted Score 60+', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4562(ind) { let score = 0; if (ind.rsi < 30) score += 25; else if (ind.rsi < 40) score += 15; if (ind.macd?.MACD > ind.macd?.signal) score += 20; if (ind.macd?.MACD > 0) score += 10; if (ind.close > ind.ema20) score += 10; if (ind.ema20 > ind.ema50) score += 10; if ((ind.bollingerBands?.position || 50) < 30) score += 15; const match = (score >= 70) && ind.stochastic?.k < ind.stochastic?.d && ind.obv > (ind.prevObv || 0); return { id: 4562, name: 'Weighted Score 70+', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy4563(ind) { let score = 0; if (ind.rsi < 30) score += 25; else if (ind.rsi < 40) score += 15; if (ind.macd?.MACD > ind.macd?.signal) score += 20; if (ind.macd?.MACD > 0) score += 10; if (ind.close > ind.ema20) score += 10; if (ind.ema20 > ind.ema50) score += 10; if ((ind.bollingerBands?.position || 50) < 30) score += 15; const match = (score >= 80) && ind.volumeRatio < 1.0 && ind.volume > (ind.avgVolume || ind.volume) * 1.25; return { id: 4563, name: 'Weighted Score 80+', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4564(ind) { let score = 0; if (ind.rsi < 30) score += 25; else if (ind.rsi < 40) score += 15; if (ind.macd?.MACD > ind.macd?.signal) score += 20; if (ind.macd?.MACD > 0) score += 10; if (ind.close > ind.ema20) score += 10; if (ind.ema20 > ind.ema50) score += 10; if ((ind.bollingerBands?.position || 50) < 30) score += 15; const match = (score >= 90) && ind.macd?.histogram > 5 && ind.volume > (ind.prevVolume || ind.volume) * 1.1300000000000001; return { id: 4564, name: 'Weighted Score 90+', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4565(ind) { let score = 0; if (ind.rsi < 25) score += 30; else if (ind.rsi < 35) score += 20; if (ind.macd?.MACD > ind.macd?.signal) score += 20; if (ind.macd?.MACD > 0) score += 10; if (ind.close > ind.ema20) score += 10; if (ind.ema20 > ind.ema50) score += 10; if ((ind.bollingerBands?.position || 50) < 25) score += 20; const match = (score >= 100) && ind.ema20 > ind.sma20 && ind.volume > ind.avgVolume * 1.5; return { id: 4565, name: 'Weighted Score 100', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    
    /** 조건 ?�터 체인 */
    static strategy4566(ind) { if (ind.rsi >= 50) return { id: 4566, name: 'Filter Chain RSI', direction: 'UP', match: false, confidence: 0 }; if (ind.macd?.MACD <= ind.macd?.signal) return { id: 4566, name: 'Filter Chain MACD', direction: 'UP', match: false, confidence: 0 }; return { id: 4566, name: 'Filter Chain Pass', direction: 'UP', match: true, confidence: 75 }; }
    static strategy4567(ind) { if (ind.rsi >= 45) return { id: 4567, name: 'Filter Chain 2', direction: 'UP', match: false, confidence: 0 }; if (ind.macd?.MACD <= ind.macd?.signal) return { id: 4567, name: 'Filter Chain 2', direction: 'UP', match: false, confidence: 0 }; if (ind.ema20 <= ind.ema50) return { id: 4567, name: 'Filter Chain 2', direction: 'UP', match: false, confidence: 0 }; return { id: 4567, name: 'Filter Chain 2 Pass', direction: 'UP', match: true, confidence: 82 }; }
    static strategy4568(ind) { if (ind.rsi >= 40) return { id: 4568, name: 'Filter Chain 3', direction: 'UP', match: false, confidence: 0 }; if (ind.macd?.MACD <= ind.macd?.signal) return { id: 4568, name: 'Filter Chain 3', direction: 'UP', match: false, confidence: 0 }; if (ind.close <= ind.ema20) return { id: 4568, name: 'Filter Chain 3', direction: 'UP', match: false, confidence: 0 }; if (ind.ema20 <= ind.ema50) return { id: 4568, name: 'Filter Chain 3', direction: 'UP', match: false, confidence: 0 }; return { id: 4568, name: 'Filter Chain 3 Pass', direction: 'UP', match: true, confidence: 87 }; }
    static strategy4569(ind) { if (ind.rsi >= 35) return { id: 4569, name: 'Filter Chain 4', direction: 'UP', match: false, confidence: 0 }; if (ind.macd?.MACD <= ind.macd?.signal) return { id: 4569, name: 'Filter Chain 4', direction: 'UP', match: false, confidence: 0 }; if (ind.close <= ind.ema20) return { id: 4569, name: 'Filter Chain 4', direction: 'UP', match: false, confidence: 0 }; if (ind.ema20 <= ind.ema50) return { id: 4569, name: 'Filter Chain 4', direction: 'UP', match: false, confidence: 0 }; if ((ind.bollingerBands?.position || 50) >= 35) return { id: 4569, name: 'Filter Chain 4', direction: 'UP', match: false, confidence: 0 }; return { id: 4569, name: 'Filter Chain 4 Pass', direction: 'UP', match: true, confidence: 91 }; }
    static strategy4570(ind) { if (ind.rsi >= 30) return { id: 4570, name: 'Filter Chain 5', direction: 'UP', match: false, confidence: 0 }; if (ind.macd?.MACD <= 0 || ind.macd?.MACD <= ind.macd?.signal) return { id: 4570, name: 'Filter Chain 5', direction: 'UP', match: false, confidence: 0 }; if (ind.close <= ind.ema20 || ind.ema20 <= ind.ema50) return { id: 4570, name: 'Filter Chain 5', direction: 'UP', match: false, confidence: 0 }; if ((ind.bollingerBands?.position || 50) >= 30) return { id: 4570, name: 'Filter Chain 5', direction: 'UP', match: false, confidence: 0 }; if ((ind.bollingerBands?.bandwidth || 5) >= 2) return { id: 4570, name: 'Filter Chain 5', direction: 'UP', match: false, confidence: 0 }; return { id: 4570, name: 'Filter Chain 5 Pass', direction: 'UP', match: true, confidence: 95 }; }
    
    /** ?�적 ?�계�?*/
    static strategy4571(ind) { const volAdj = (ind.bollingerBands?.bandwidth || 2) > 3 ? 5 : 0; const rsiThresh = 35 + volAdj; const match = (ind.rsi < rsiThresh && ind.macd?.MACD > ind.macd?.signal) && ind.stochastic?.k < ind.stochastic?.d; return { id: 4571, name: 'Dynamic RSI Threshold', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy4572(ind) { const volAdj = (ind.bollingerBands?.bandwidth || 2) > 3 ? 5 : 0; const trendAdj = ind.ema20 > ind.ema50 ? -5 : 0; const rsiThresh = 35 + volAdj + trendAdj; const match = ind.rsi < rsiThresh && ind.macd?.MACD > ind.macd?.signal && ind.volume > (ind.prevVolume || ind.volume) * 1.09; return { id: 4572, name: 'Dynamic Threshold + Trend', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4573(ind) { const squeeze = (ind.bollingerBands?.bandwidth || 2) < 2; const confBonus = squeeze ? 10 : 0; const match = (ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal) && ind.stochastic?.k > 30; return { id: 4573, name: 'Dynamic Confidence', direction: 'UP', match: Boolean(match), confidence: match ? 78 + confBonus : 0 }; }
    static strategy4574(ind) { const pos = ind.bollingerBands?.position || 50; const confBonus = pos < 20 ? 15 : pos < 30 ? 10 : pos < 40 ? 5 : 0; const match = ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && ind.obv > (ind.prevObv || 0); return { id: 4574, name: 'Dynamic BB Confidence', direction: 'UP', match: Boolean(match), confidence: match ? 75 + confBonus : 0 }; }
    static strategy4575(ind) { const rsiBonus = ind.rsi < 25 ? 15 : ind.rsi < 30 ? 10 : ind.rsi < 35 ? 5 : 0; const macdBonus = ind.macd?.MACD > 0 ? 10 : 0; const emaBonus = ind.close > ind.ema20 && ind.ema20 > ind.ema50 ? 10 : 0; const match = ind.rsi < 40 && ind.macd?.MACD > ind.macd?.signal; return { id: 4575, name: 'Full Dynamic Score', direction: 'UP', match: Boolean(match), confidence: match ? 60 + rsiBonus + macdBonus + emaBonus : 0 }; }
    
    /** 복합 리스??조정 */
    static strategy4576(ind) { const riskLevel = (ind.bollingerBands?.bandwidth || 2) > 4 ? 'high' : (ind.bollingerBands?.bandwidth || 2) > 2.5 ? 'medium' : 'low'; const match = ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && riskLevel !== 'high'; return { id: 4576, name: 'Risk Adjusted Entry', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy4577(ind) { const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const highVol = atrRatio > 2; const match = ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && !highVol; return { id: 4577, name: 'ATR Risk Filter', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy4578(ind) { const bw = ind.bollingerBands?.bandwidth || 2; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const lowRisk = bw < 3 && atrRatio < 1.5; const match = ind.rsi < 35 && ind.macd?.MACD > ind.macd?.signal && lowRisk; return { id: 4578, name: 'Double Risk Filter', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy4579(ind) { const bw = ind.bollingerBands?.bandwidth || 2; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const lowRisk = bw < 2.5 && atrRatio < 1.3; const match = ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && lowRisk; return { id: 4579, name: 'Safe Entry Setup', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4580(ind) { const bw = ind.bollingerBands?.bandwidth || 2; const pos = ind.bollingerBands?.position || 50; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const optimal = bw < 2 && pos < 25 && atrRatio < 1; const match = ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && optimal; return { id: 4580, name: 'Optimal Entry Setup', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    
    // --- Ultimate ?�략 (4581-4600) ---
    
    /** 최종 복합 ?�략 */
    static strategy4581(ind) { const total = this.getTotalScore(ind); const vol = this.getVolatilityScore(ind); const match = total >= 75 && vol >= 14 && ind.priceChange > 0; return { id: 4581, name: 'Score + Vol + Green', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4582(ind) { const ext = this.getExtendedScore(ind); const match = ext >= 100 && ind.priceChange > 0 && ind.close > ind.ema20; return { id: 4582, name: 'Extended + Green + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4583(ind) { const total = this.getTotalScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const release = prevBw < 2 && bw >= 2.5; const match = total >= 70 && release && ind.priceChange > 0; return { id: 4583, name: 'Score + Release + Green', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4584(ind) { const ext = this.getExtendedScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const release = prevBw < 1.5 && bw >= 2.5; const match = ext >= 110 && release && ind.priceChange >= 0.5; return { id: 4584, name: 'Extended + Strong Release', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4585(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const vol = this.getVolatilityScore(ind); const match = rsi >= 24 && macd >= 20 && bb >= 16 && ema >= 15 && vol >= 14 && ind.priceChange > 0; return { id: 4585, name: 'Balanced High + Green', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4586(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const vol = this.getVolatilityScore(ind); const volScore = this.getVolumeScore(ind); const match = rsi >= 24 && macd >= 20 && bb >= 16 && ema >= 15 && vol >= 14 && volScore >= 11; return { id: 4586, name: 'Full Balance + Volume', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy4587(ind) { const ext = this.getExtendedScore(ind); const vol = this.getVolatilityScore(ind); const match = ext >= 100 && vol >= 14 && ind.priceChange > 0 && ind.close > ind.ema20; return { id: 4587, name: 'Extended + Vol Score', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4588(ind) { const ext = this.getExtendedScore(ind); const volScore = this.getVolumeScore(ind); const match = ext >= 110 && volScore >= 11 && ind.priceChange > 0 && ind.ema20 > ind.ema50; return { id: 4588, name: 'Extended + Volume Score', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4589(ind) { const bodyRatio = Math.abs(ind.close - ind.open) / (ind.high - ind.low || 1); const lowerWick = (Math.min(ind.open, ind.close) - ind.low) / (ind.high - ind.low || 1); const hammer = bodyRatio < 0.3 && lowerWick > 0.6 && ind.close > ind.open; const total = this.getTotalScore(ind); const match = hammer && total >= 70; return { id: 4589, name: 'Hammer + High Score', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy4590(ind) { const bodyRatio = Math.abs(ind.close - ind.open) / (ind.high - ind.low || 1); const doji = bodyRatio < 0.1; const ext = this.getExtendedScore(ind); const match = doji && ext >= 100 && ind.rsi < 30; return { id: 4590, name: 'Doji + Extended + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy4591(ind) { const gapDown = ind.open < ind.prevClose * 0.98; const recovery = ind.close > ind.open; const total = this.getTotalScore(ind); const match = gapDown && recovery && total >= 65; return { id: 4591, name: 'Gap Recovery + Score', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy4592(ind) { const supportBounce = ind.low <= ind.support * 1.01 && ind.close > ind.support && ind.close > ind.open; const ext = this.getExtendedScore(ind); const match = supportBounce && ext >= 90; return { id: 4592, name: 'Support Bounce + Extended', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy4593(ind) { const rsiOk = ind.rsi < 30; const macdOk = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; const emaOk = ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.ema50 > ind.ema100; const bbOk = (ind.bollingerBands?.position || 50) < 25; const bwOk = (ind.bollingerBands?.bandwidth || 0) < 2; const count = [rsiOk, macdOk, emaOk, bbOk, bwOk].filter(Boolean).length; const match = count >= 5 && ind.priceChange > 0; return { id: 4593, name: 'All 5 Confirm + Green', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    static strategy4594(ind) { const ext = this.getExtendedScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const prevAtr = ind.prevAtr || atr * 0.9; const doubleRelease = prevBw < 1.5 && bw >= 2.5 && prevAtr < avgAtr * 0.7 && atr >= avgAtr; const match = ext >= 120 && doubleRelease && ind.priceChange >= 1; return { id: 4594, name: 'Extended + Double Release', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    static strategy4595(ind) { const ext = this.getExtendedScore(ind); const mom = this.getMomentumScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const release = prevBw < 1.5 && bw >= 2.5; const match = ext >= 120 && mom >= 14 && release && ind.priceChange >= 1; return { id: 4595, name: 'Extended + Momentum + Release', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    static strategy4596(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const vol = this.getVolatilityScore(ind); const volScore = this.getVolumeScore(ind); const mom = this.getMomentumScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const release = prevBw < 1.5 && bw >= 2.5; const match = rsi >= 27 && macd >= 25 && bb >= 16 && ema >= 15 && vol >= 17 && volScore >= 14 && mom >= 14 && release; return { id: 4596, name: 'Full Balance + Release', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    static strategy4597(ind) { const ext = this.getExtendedScore(ind); const vol = this.getVolatilityScore(ind); const bodyRatio = Math.abs(ind.close - ind.open) / (ind.high - ind.low || 1); const lowerWick = (Math.min(ind.open, ind.close) - ind.low) / (ind.high - ind.low || 1); const hammer = bodyRatio < 0.3 && lowerWick > 0.6 && ind.close > ind.open; const match = ext >= 110 && vol >= 14 && hammer; return { id: 4597, name: 'Extended + Vol + Hammer', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy4598(ind) { const ext = this.getExtendedScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const pos = ind.bollingerBands?.position || 50; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const match = ext >= 130 && prevBw < 1 && bw >= 3 && pos < 25 && atrRatio >= 1.5 && ind.priceChange >= 1.5; return { id: 4598, name: 'Max Extended + Explosive', direction: 'UP', match: Boolean(match), confidence: match ? 98 : 0 }; }
    static strategy4599(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const vol = this.getVolatilityScore(ind); const volScore = this.getVolumeScore(ind); const mom = this.getMomentumScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const release = prevBw < 1 && bw >= 3; const match = rsi >= 27 && macd >= 30 && bb >= 20 && ema >= 20 && vol >= 17 && volScore >= 17 && mom >= 14 && release && ind.priceChange >= 1.5; return { id: 4599, name: 'Ultimate Full Balance', direction: 'UP', match: Boolean(match), confidence: match ? 98 : 0 }; }
    static strategy4600(ind) { const rsi = this.getRsiScore(ind.rsi); const macd = this.getMacdScore(ind.macd); const bb = this.getBbScore(ind.bollingerBands); const ema = this.getEmaScore(ind); const vol = this.getVolatilityScore(ind); const volScore = this.getVolumeScore(ind); const mom = this.getMomentumScore(ind); const bw = ind.bollingerBands?.bandwidth || 0; const prevBw = ind.bollingerBands?.prevBandwidth || bw * 0.9; const pos = ind.bollingerBands?.position || 50; const atr = ind.atr || 0; const avgAtr = ind.avgAtr || atr; const atrRatio = avgAtr > 0 ? atr / avgAtr : 1; const release = prevBw < 1 && bw >= 3; const match = rsi >= 30 && macd >= 30 && bb >= 20 && ema >= 20 && vol >= 20 && volScore >= 17 && mom >= 17 && release && pos < 20 && atrRatio >= 1.5 && ind.priceChange >= 2; return { id: 4600, name: 'Perfect Ultimate Signal', direction: 'UP', match: Boolean(match), confidence: match ? 99 : 0 }; }

    /** 모든 ?�략 ?�행 (4401-4600) */
    static analyzeAll(indicators) {
        return [
            this.strategy4401(indicators), this.strategy4402(indicators), this.strategy4403(indicators),
            this.strategy4404(indicators), this.strategy4405(indicators), this.strategy4406(indicators),
            this.strategy4407(indicators), this.strategy4408(indicators), this.strategy4409(indicators),
            this.strategy4410(indicators), this.strategy4411(indicators), this.strategy4412(indicators),
            this.strategy4413(indicators), this.strategy4414(indicators), this.strategy4415(indicators),
            this.strategy4416(indicators), this.strategy4417(indicators), this.strategy4418(indicators),
            this.strategy4419(indicators), this.strategy4420(indicators), this.strategy4421(indicators),
            this.strategy4422(indicators), this.strategy4423(indicators), this.strategy4424(indicators),
            this.strategy4425(indicators), this.strategy4426(indicators), this.strategy4427(indicators),
            this.strategy4428(indicators), this.strategy4429(indicators), this.strategy4430(indicators),
            this.strategy4431(indicators), this.strategy4432(indicators), this.strategy4433(indicators),
            this.strategy4434(indicators), this.strategy4435(indicators), this.strategy4436(indicators),
            this.strategy4437(indicators), this.strategy4438(indicators), this.strategy4439(indicators),
            this.strategy4440(indicators), this.strategy4441(indicators), this.strategy4442(indicators),
            this.strategy4443(indicators), this.strategy4444(indicators), this.strategy4445(indicators),
            this.strategy4446(indicators), this.strategy4447(indicators), this.strategy4448(indicators),
            this.strategy4449(indicators), this.strategy4450(indicators), this.strategy4451(indicators),
            this.strategy4452(indicators), this.strategy4453(indicators), this.strategy4454(indicators),
            this.strategy4455(indicators), this.strategy4456(indicators), this.strategy4457(indicators),
            this.strategy4458(indicators), this.strategy4459(indicators), this.strategy4460(indicators),
            this.strategy4461(indicators), this.strategy4462(indicators), this.strategy4463(indicators),
            this.strategy4464(indicators), this.strategy4465(indicators), this.strategy4466(indicators),
            this.strategy4467(indicators), this.strategy4468(indicators), this.strategy4469(indicators),
            this.strategy4470(indicators), this.strategy4471(indicators), this.strategy4472(indicators),
            this.strategy4473(indicators), this.strategy4474(indicators), this.strategy4475(indicators),
            this.strategy4476(indicators), this.strategy4477(indicators), this.strategy4478(indicators),
            this.strategy4479(indicators), this.strategy4480(indicators), this.strategy4481(indicators),
            this.strategy4482(indicators), this.strategy4483(indicators), this.strategy4484(indicators),
            this.strategy4485(indicators), this.strategy4486(indicators), this.strategy4487(indicators),
            this.strategy4488(indicators), this.strategy4489(indicators), this.strategy4490(indicators),
            this.strategy4491(indicators), this.strategy4492(indicators), this.strategy4493(indicators),
            this.strategy4494(indicators), this.strategy4495(indicators), this.strategy4496(indicators),
            this.strategy4497(indicators), this.strategy4498(indicators), this.strategy4499(indicators),
            this.strategy4500(indicators), this.strategy4501(indicators), this.strategy4502(indicators),
            this.strategy4503(indicators), this.strategy4504(indicators), this.strategy4505(indicators),
            this.strategy4506(indicators), this.strategy4507(indicators), this.strategy4508(indicators),
            this.strategy4509(indicators), this.strategy4510(indicators), this.strategy4511(indicators),
            this.strategy4512(indicators), this.strategy4513(indicators), this.strategy4514(indicators),
            this.strategy4515(indicators), this.strategy4516(indicators), this.strategy4517(indicators),
            this.strategy4518(indicators), this.strategy4519(indicators), this.strategy4520(indicators),
            this.strategy4521(indicators), this.strategy4522(indicators), this.strategy4523(indicators),
            this.strategy4524(indicators), this.strategy4525(indicators), this.strategy4526(indicators),
            this.strategy4527(indicators), this.strategy4528(indicators), this.strategy4529(indicators),
            this.strategy4530(indicators), this.strategy4531(indicators), this.strategy4532(indicators),
            this.strategy4533(indicators), this.strategy4534(indicators), this.strategy4535(indicators),
            this.strategy4536(indicators), this.strategy4537(indicators), this.strategy4538(indicators),
            this.strategy4539(indicators), this.strategy4540(indicators), this.strategy4541(indicators),
            this.strategy4542(indicators), this.strategy4543(indicators), this.strategy4544(indicators),
            this.strategy4545(indicators), this.strategy4546(indicators), this.strategy4547(indicators),
            this.strategy4548(indicators), this.strategy4549(indicators), this.strategy4550(indicators),
            this.strategy4551(indicators), this.strategy4552(indicators), this.strategy4553(indicators),
            this.strategy4554(indicators), this.strategy4555(indicators), this.strategy4556(indicators),
            this.strategy4557(indicators), this.strategy4558(indicators), this.strategy4559(indicators),
            this.strategy4560(indicators), this.strategy4561(indicators), this.strategy4562(indicators),
            this.strategy4563(indicators), this.strategy4564(indicators), this.strategy4565(indicators),
            this.strategy4566(indicators), this.strategy4567(indicators), this.strategy4568(indicators),
            this.strategy4569(indicators), this.strategy4570(indicators), this.strategy4571(indicators),
            this.strategy4572(indicators), this.strategy4573(indicators), this.strategy4574(indicators),
            this.strategy4575(indicators), this.strategy4576(indicators), this.strategy4577(indicators),
            this.strategy4578(indicators), this.strategy4579(indicators), this.strategy4580(indicators),
            this.strategy4581(indicators), this.strategy4582(indicators), this.strategy4583(indicators),
            this.strategy4584(indicators), this.strategy4585(indicators), this.strategy4586(indicators),
            this.strategy4587(indicators), this.strategy4588(indicators), this.strategy4589(indicators),
            this.strategy4590(indicators), this.strategy4591(indicators), this.strategy4592(indicators),
            this.strategy4593(indicators), this.strategy4594(indicators), this.strategy4595(indicators),
            this.strategy4596(indicators), this.strategy4597(indicators), this.strategy4598(indicators),
            this.strategy4599(indicators), this.strategy4600(indicators)
        ];
    }
}

