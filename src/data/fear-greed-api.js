import axios from 'axios';

/**
 * Fear & Greed Index API
 */
export class FearGreedAPI {
    constructor() {
        this.baseURL = 'https://api.alternative.me/fng';
        this.timeout = 10000; // 10초 타임아웃
    }

    /**
     * 현재 Fear & Greed Index 가져오기
     * @returns {Promise<Object>} Fear & Greed 데이터
     */
    async getCurrent() {
        try {
            const response = await axios.get(`${this.baseURL}/?limit=1`, {
                timeout: this.timeout
            });
            const data = response.data.data[0];
            
            return {
                value: parseInt(data.value),
                classification: data.value_classification,
                timestamp: new Date(parseInt(data.timestamp) * 1000),
                interpretation: this.interpretValue(parseInt(data.value))
            };
        } catch (error) {
            console.error('Fear & Greed API 오류:', error.message);
            return null;
        }
    }

    /**
     * 최근 N일 데이터 가져오기
     * @param {number} days - 일수 (최대 365)
     * @returns {Promise<Array>} 히스토리 데이터
     */
    async getHistory(days = 30) {
        try {
            const response = await axios.get(`${this.baseURL}/?limit=${days}`, {
                timeout: this.timeout
            });
            return response.data.data.map(item => ({
                value: parseInt(item.value),
                classification: item.value_classification,
                timestamp: new Date(parseInt(item.timestamp) * 1000)
            }));
        } catch (error) {
            console.error('Fear & Greed 히스토리 오류:', error.message);
            return [];
        }
    }

    /**
     * Fear & Greed 값 해석
     * @param {number} value - 0-100 값
     * @returns {Object} 해석 결과
     */
    interpretValue(value) {
        if (value <= 25) {
            return {
                sentiment: 'EXTREME_FEAR',
                signal: 'STRONG_BUY',
                description: '극도의 공포 - 강력한 매수 기회'
            };
        } else if (value <= 45) {
            return {
                sentiment: 'FEAR',
                signal: 'BUY',
                description: '공포 - 매수 고려'
            };
        } else if (value <= 55) {
            return {
                sentiment: 'NEUTRAL',
                signal: 'HOLD',
                description: '중립 - 관망'
            };
        } else if (value <= 75) {
            return {
                sentiment: 'GREED',
                signal: 'SELL',
                description: '탐욕 - 매도 고려'
            };
        } else {
            return {
                sentiment: 'EXTREME_GREED',
                signal: 'STRONG_SELL',
                description: '극도의 탐욕 - 강력한 매도 시그널'
            };
        }
    }

    /**
     * 평균 Fear & Greed 계산
     * @param {Array} history - getHistory() 결과
     * @returns {number} 평균값
     */
    calculateAverage(history) {
        if (!history || history.length === 0) return 50;
        const sum = history.reduce((acc, item) => acc + item.value, 0);
        return Math.round(sum / history.length);
    }
}
