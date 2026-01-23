import axios from 'axios';

/**
 * Binance API 데이터 수집 클래스
 */
export class BinanceAPI {
    constructor() {
        this.baseURL = 'https://api.binance.com';
        this.timeout = 10000; // 10초 타임아웃
    }

    /**
     * 캔들스틱 데이터 가져오기
     * @param {string} symbol - 거래쌍 (예: 'BTCUSDT')
     * @param {string} interval - 시간 간격 ('1m', '5m', '15m', '1h', '4h', '1d')
     * @param {number} limit - 가져올 캔들 개수 (최대 1000)
     * @returns {Promise<Array>} 캔들스틱 데이터
     */
    async getKlines(symbol = 'BTCUSDT', interval = '1h', limit = 100) {
        try {
            const response = await axios.get(`${this.baseURL}/api/v3/klines`, {
                params: {
                    symbol: symbol,
                    interval: interval,
                    limit: limit
                },
                timeout: this.timeout
            });

            return response.data.map(candle => ({
                openTime: candle[0],
                open: parseFloat(candle[1]),
                high: parseFloat(candle[2]),
                low: parseFloat(candle[3]),
                close: parseFloat(candle[4]),
                volume: parseFloat(candle[5]),
                closeTime: candle[6],
                quoteVolume: parseFloat(candle[7]),
                trades: candle[8],
                takerBuyBaseVolume: parseFloat(candle[9]),
                takerBuyQuoteVolume: parseFloat(candle[10])
            }));
        } catch (error) {
            console.error('Binance API 오류:', error.message);
            throw error;
        }
    }

    /**
     * 현재 가격 가져오기
     * @param {string} symbol - 거래쌍
     * @returns {Promise<number>} 현재 가격
     */
    async getCurrentPrice(symbol = 'BTCUSDT') {
        try {
            const response = await axios.get(`${this.baseURL}/api/v3/ticker/price`, {
                params: { symbol },
                timeout: this.timeout
            });
            return parseFloat(response.data.price);
        } catch (error) {
            console.error('가격 조회 오류:', error.message);
            throw error;
        }
    }

    /**
     * 24시간 통계 가져오기
     * @param {string} symbol - 거래쌍
     * @returns {Promise<Object>} 24시간 통계
     */
    async get24hrStats(symbol = 'BTCUSDT') {
        try {
            const response = await axios.get(`${this.baseURL}/api/v3/ticker/24hr`, {
                params: { symbol },
                timeout: this.timeout
            });
            
            return {
                priceChange: parseFloat(response.data.priceChange),
                priceChangePercent: parseFloat(response.data.priceChangePercent),
                highPrice: parseFloat(response.data.highPrice),
                lowPrice: parseFloat(response.data.lowPrice),
                volume: parseFloat(response.data.volume),
                quoteVolume: parseFloat(response.data.quoteVolume)
            };
        } catch (error) {
            console.error('통계 조회 오류:', error.message);
            throw error;
        }
    }

    /**
     * 여러 심볼의 현재 가격 가져오기
     * @param {string[]} symbols - 거래쌍 배열
     * @returns {Promise<Object>} 심볼별 가격 객체
     */
    async getMultiplePrices(symbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT']) {
        try {
            const response = await axios.get(`${this.baseURL}/api/v3/ticker/price`, {
                timeout: this.timeout
            });
            const allPrices = response.data;
            
            const result = {};
            symbols.forEach(symbol => {
                const priceData = allPrices.find(p => p.symbol === symbol);
                if (priceData) {
                    result[symbol] = parseFloat(priceData.price);
                }
            });
            
            return result;
        } catch (error) {
            console.error('다중 가격 조회 오류:', error.message);
            throw error;
        }
    }

    /**
     * 종가 배열 추출 (기술적 지표 계산용)
     * @param {Array} klines - getKlines() 결과
     * @returns {number[]} 종가 배열
     */
    extractClosePrices(klines) {
        return klines.map(k => k.close);
    }
}
