import { RSI, MACD, BollingerBands, EMA, SMA } from 'technicalindicators';

/**
 * 기술적 지표 계산 클래스
 */
export class TechnicalIndicators {
    /**
     * RSI (Relative Strength Index) 계산
     * @param {number[]} closePrices - 종가 배열
     * @param {number} period - 기간 (기본: 14)
     * @returns {number} RSI 값 (0-100)
     */
    static calculateRSI(closePrices, period = 14) {
        const rsi = RSI.calculate({
            values: closePrices,
            period: period
        });
        return rsi[rsi.length - 1];
    }

    /**
     * MACD (Moving Average Convergence Divergence) 계산
     * @param {number[]} closePrices - 종가 배열
     * @returns {Object} MACD, Signal, Histogram
     */
    static calculateMACD(closePrices) {
        const macd = MACD.calculate({
            values: closePrices,
            fastPeriod: 12,
            slowPeriod: 26,
            signalPeriod: 9,
            SimpleMAOscillator: false,
            SimpleMASignal: false
        });
        
        const latest = macd[macd.length - 1];
        return latest ? {
            MACD: latest.MACD,
            signal: latest.signal,
            histogram: latest.histogram
        } : null;
    }

    /**
     * 볼린저 밴드 (Bollinger Bands) 계산
     * @param {number[]} closePrices - 종가 배열
     * @param {number} period - 기간 (기본: 20)
     * @param {number} stdDev - 표준편차 배수 (기본: 2)
     * @returns {Object} upper, middle, lower 밴드
     */
    static calculateBollingerBands(closePrices, period = 20, stdDev = 2) {
        const bb = BollingerBands.calculate({
            values: closePrices,
            period: period,
            stdDev: stdDev
        });
        
        const latest = bb[bb.length - 1];
        const currentPrice = closePrices[closePrices.length - 1];
        
        if (!latest) return null;
        
        // 밴드 폭 대비 현재 위치 계산 (0-100%)
        const bandWidth = latest.upper - latest.lower;
        const positionInBand = ((currentPrice - latest.lower) / bandWidth) * 100;
        
        return {
            upper: latest.upper,
            middle: latest.middle,
            lower: latest.lower,
            position: positionInBand, // 0=하단, 50=중간, 100=상단
            squeeze: bandWidth / latest.middle * 100 // 밴드 폭 (%)
        };
    }

    /**
     * EMA (Exponential Moving Average) 계산
     * @param {number[]} closePrices - 종가 배열
     * @param {number} period - 기간
     * @returns {number} EMA 값
     */
    static calculateEMA(closePrices, period = 20) {
        const ema = EMA.calculate({
            values: closePrices,
            period: period
        });
        return ema[ema.length - 1];
    }

    /**
     * SMA (Simple Moving Average) 계산
     * @param {number[]} closePrices - 종가 배열
     * @param {number} period - 기간
     * @returns {number} SMA 값
     */
    static calculateSMA(closePrices, period = 20) {
        const sma = SMA.calculate({
            values: closePrices,
            period: period
        });
        return sma[sma.length - 1];
    }

    /**
     * 모든 지표를 한 번에 계산
     * @param {number[]} closePrices - 종가 배열
     * @returns {Object} 모든 기술적 지표
     */
    static calculateAll(closePrices) {
        const currentPrice = closePrices[closePrices.length - 1];
        
        return {
            price: currentPrice,
            rsi: this.calculateRSI(closePrices),
            macd: this.calculateMACD(closePrices),
            bollingerBands: this.calculateBollingerBands(closePrices),
            ema20: this.calculateEMA(closePrices, 20),
            ema50: this.calculateEMA(closePrices, 50),
            sma20: this.calculateSMA(closePrices, 20),
            sma50: this.calculateSMA(closePrices, 50)
        };
    }

    /**
     * 지표 기반 시그널 생성
     * @param {Object} indicators - calculateAll()의 결과
     * @returns {Object} 시그널 분석 결과
     */
    static generateSignals(indicators) {
        const signals = {
            rsi: 'NEUTRAL',
            macd: 'NEUTRAL',
            bollingerBands: 'NEUTRAL',
            trend: 'NEUTRAL',
            overall: 'NEUTRAL'
        };

        // RSI 시그널
        if (indicators.rsi < 30) {
            signals.rsi = 'STRONG_BUY'; // 과매도
        } else if (indicators.rsi < 40) {
            signals.rsi = 'BUY';
        } else if (indicators.rsi > 70) {
            signals.rsi = 'STRONG_SELL'; // 과매수
        } else if (indicators.rsi > 60) {
            signals.rsi = 'SELL';
        }

        // MACD 시그널
        if (indicators.macd) {
            if (indicators.macd.histogram > 0 && indicators.macd.MACD > indicators.macd.signal) {
                signals.macd = 'BUY';
            } else if (indicators.macd.histogram < 0 && indicators.macd.MACD < indicators.macd.signal) {
                signals.macd = 'SELL';
            }
        }

        // 볼린저 밴드 시그널
        if (indicators.bollingerBands) {
            const bb = indicators.bollingerBands;
            if (bb.position < 20) {
                signals.bollingerBands = 'BUY'; // 하단 근처
            } else if (bb.position > 80) {
                signals.bollingerBands = 'SELL'; // 상단 근처
            }
        }

        // 추세 시그널 (EMA 기반)
        if (indicators.ema20 > indicators.ema50) {
            signals.trend = 'BULLISH';
        } else if (indicators.ema20 < indicators.ema50) {
            signals.trend = 'BEARISH';
        }

        // 종합 시그널 계산 (BUY/SELL만 반환)
        const buySignals = [signals.rsi, signals.macd, signals.bollingerBands]
            .filter(s => s.includes('BUY')).length;
        const sellSignals = [signals.rsi, signals.macd, signals.bollingerBands]
            .filter(s => s.includes('SELL')).length;

        // 점수 비교로 BUY 또는 SELL 결정
        signals.overall = buySignals >= sellSignals ? 'BUY' : 'SELL';
        signals.buyScore = buySignals;
        signals.sellScore = sellSignals;

        return signals;
    }
}
