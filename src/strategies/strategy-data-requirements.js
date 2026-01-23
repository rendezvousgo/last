/**
 * 전략 데이터 요구사항 (20개 전략 합집합 분석)
 * 
 * 이 파일은 RAG 문서 검색 및 전략 매칭에 필요한 모든 데이터를 정의합니다.
 */

export const STRATEGY_DATA_REQUIREMENTS = {
    
    // ═══════════════════════════════════════════════════════════════
    // 1. 필요한 기술적 지표 (합집합)
    // ═══════════════════════════════════════════════════════════════
    
    indicators: {
        // RSI (Relative Strength Index)
        rsi: {
            required: true,
            period: 14,
            usedBy: [1, 3, 5, 6, 7, 9, 10, 11, 13, 15, 16, 17, 19, 20], // 14개 전략
            thresholds: {
                strongOversold: 25,
                oversold: 30,
                lowBuy: 35,
                neutral_low: 45,
                neutral_high: 55,
                highSell: 60,
                overbought: 70,
                strongOverbought: 75
            }
        },
        
        // MACD (Moving Average Convergence Divergence)
        macd: {
            required: true,
            fastPeriod: 12,
            slowPeriod: 26,
            signalPeriod: 9,
            usedBy: [1, 4, 6, 9, 10, 11, 13, 14, 16, 19, 20], // 11개 전략
            thresholds: {
                zeroLine_near: { min: -50, max: 50 }
            },
            outputs: ['MACD', 'signal', 'histogram']
        },
        
        // Bollinger Bands
        bollingerBands: {
            required: true,
            period: 20,
            stdDev: 2,
            usedBy: [2, 6, 8, 12, 16, 18], // 6개 전략
            thresholds: {
                lowerTouch: 20,    // position < 20%
                upperTouch: 80,    // position > 80%
                squeeze: 7         // squeeze < 7%
            },
            outputs: ['upper', 'middle', 'lower', 'position', 'squeeze']
        },
        
        // EMA (Exponential Moving Average)
        ema: {
            required: true,
            periods: [20, 50],
            usedBy: [3, 6, 9, 13, 16, 19], // 6개 전략
            comparison: 'EMA20 vs EMA50'
        }
    },
    
    // ═══════════════════════════════════════════════════════════════
    // 2. 외부 데이터
    // ═══════════════════════════════════════════════════════════════
    
    externalData: {
        // Fear & Greed Index
        fearGreed: {
            required: true,
            usedBy: [7, 17], // 2개 전략
            thresholds: {
                extremeFear: 25,
                fear: 40,
                greed: 60,
                extremeGreed: 75
            },
            source: 'alternative.me API'
        },
        
        // 거래량 분석
        volume: {
            required: true,
            usedBy: [2, 8, 12, 18], // 4개 전략 (직접), 간접은 더 많음
            thresholds: {
                surge: 1.5,        // > average * 1.5
                strongSurge: 2.0   // > average * 2.0
            },
            calculation: '20캔들 평균 대비'
        }
    },
    
    // ═══════════════════════════════════════════════════════════════
    // 3. 과거 데이터 요구량 (캔들 개수)
    // ═══════════════════════════════════════════════════════════════
    
    historyRequirements: {
        // 지표 계산용
        indicatorCalculation: {
            rsi: 14,                    // RSI period
            macd: 26 + 9,               // slow + signal = 35
            bollingerBands: 20,         // BB period
            ema50: 50,                  // 긴 EMA
            volumeAverage: 20           // 거래량 평균
        },
        
        // 패턴 감지용 (다이버전스, squeeze)
        patternDetection: {
            divergence: 20,             // 저점/고점 2개 식별 (전략 5, 15)
            squeeze: 15                 // squeeze 기간 확인 (전략 8, 18)
        },
        
        // 최소 필요 캔들 수 (합산)
        minimum: 50,    // EMA50 계산 가능
        recommended: 60 // 여유분 포함
    },
    
    // ═══════════════════════════════════════════════════════════════
    // 4. 전략별 데이터 매핑
    // ═══════════════════════════════════════════════════════════════
    
    strategyDataMap: {
        // BUY 전략
        1:  ['rsi', 'macd'],
        2:  ['bollingerBands', 'volume'],
        3:  ['ema', 'rsi'],
        4:  ['macd'],
        5:  ['rsi', 'price_history'],      // 다이버전스용
        6:  ['rsi', 'macd', 'bollingerBands'],
        7:  ['fearGreed', 'rsi'],
        8:  ['bollingerBands', 'volume'],
        9:  ['ema', 'rsi'],
        10: ['macd', 'rsi'],
        
        // SELL 전략
        11: ['rsi', 'macd'],
        12: ['bollingerBands', 'volume'],
        13: ['ema', 'rsi'],
        14: ['macd'],
        15: ['rsi', 'price_history'],      // 다이버전스용
        16: ['rsi', 'macd', 'bollingerBands'],
        17: ['fearGreed', 'rsi'],
        18: ['bollingerBands', 'volume'],
        19: ['ema', 'rsi'],
        20: ['macd', 'rsi']
    },
    
    // ═══════════════════════════════════════════════════════════════
    // 5. RAG 검색용 메타데이터
    // ═══════════════════════════════════════════════════════════════
    
    ragSearchFields: {
        // 검색 가능한 조건 패턴 (RAG 쿼리용)
        queryPatterns: [
            'RSI 과매도',           // RSI < 30
            'RSI 과매수',           // RSI > 70
            'RSI 중립',             // 45 < RSI < 55
            'MACD 골든크로스',       // MACD > Signal, histogram > 0
            'MACD 데드크로스',       // MACD < Signal, histogram < 0
            'MACD 0선 돌파',        // MACD near 0
            '볼린저 하단',          // BB.position < 20
            '볼린저 상단',          // BB.position > 80
            '볼린저 squeeze',       // BB.squeeze < 7
            'EMA 골든',            // EMA20 > EMA50
            'EMA 데드',            // EMA20 < EMA50
            '거래량 급증',          // volume > avg * 1.5
            '공포',                // fearGreed < 25
            '탐욕',                // fearGreed > 75
            '다이버전스'           // 가격/RSI 괴리
        ],
        
        // 방향별 검색
        directions: ['BUY', 'SELL'],
        
        // 유형별 검색  
        types: [
            '역추세 반등',
            '역추세 천정', 
            '변동성 반등',
            '변동성 천정',
            '변동성 돌파',
            '추세 전환',
            '추세 지속',
            '모멘텀 전환',
            '모멘텀 이중 확인',
            '다중 확인',
            '심리 역투자',
            '역추세 반전'
        ]
    }
};

// ═══════════════════════════════════════════════════════════════
// 6. 데이터 수집 함수
// ═══════════════════════════════════════════════════════════════

/**
 * RAG 검색을 위한 현재 상태 쿼리 생성
 */
export function generateRAGQuery(indicators, fearGreed, volume) {
    const queryParts = [];
    
    // RSI 상태
    if (indicators.rsi < 30) queryParts.push('RSI 과매도');
    else if (indicators.rsi < 40) queryParts.push('RSI 낮음');
    else if (indicators.rsi > 70) queryParts.push('RSI 과매수');
    else if (indicators.rsi > 60) queryParts.push('RSI 높음');
    else if (indicators.rsi > 45 && indicators.rsi < 55) queryParts.push('RSI 중립');
    
    // MACD 상태
    if (indicators.macd) {
        if (indicators.macd.histogram > 0 && indicators.macd.MACD > indicators.macd.signal) {
            queryParts.push('MACD 골든크로스');
        } else if (indicators.macd.histogram < 0 && indicators.macd.MACD < indicators.macd.signal) {
            queryParts.push('MACD 데드크로스');
        }
        
        if (Math.abs(indicators.macd.MACD) < 50) {
            queryParts.push('MACD 0선 근처');
        }
    }
    
    // 볼린저 밴드 상태
    if (indicators.bollingerBands) {
        if (indicators.bollingerBands.position < 20) queryParts.push('볼린저 하단');
        else if (indicators.bollingerBands.position > 80) queryParts.push('볼린저 상단');
        
        if (indicators.bollingerBands.squeeze < 7) queryParts.push('볼린저 squeeze');
    }
    
    // EMA 상태
    if (indicators.ema20 > indicators.ema50) queryParts.push('EMA 골든');
    else if (indicators.ema20 < indicators.ema50) queryParts.push('EMA 데드');
    
    // 외부 데이터
    if (fearGreed && fearGreed.value < 25) queryParts.push('극도 공포');
    else if (fearGreed && fearGreed.value > 75) queryParts.push('극도 탐욕');
    
    if (volume && volume.surge) queryParts.push('거래량 급증');
    
    return queryParts.join(' ');
}

/**
 * 필요한 모든 데이터 체크리스트
 */
export function getDataChecklist() {
    return {
        ohlcv: {
            description: 'OHLCV 캔들 데이터',
            count: 60,
            interval: '15분',
            fields: ['open', 'high', 'low', 'close', 'volume']
        },
        
        indicators: {
            rsi: { period: 14 },
            macd: { fast: 12, slow: 26, signal: 9 },
            bollingerBands: { period: 20, stdDev: 2 },
            ema20: { period: 20 },
            ema50: { period: 50 }
        },
        
        external: {
            fearGreed: 'alternative.me/crypto/fear-and-greed-index/',
            volumeAverage: '20캔들 평균'
        }
    };
}
