import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

/**
 * 전문 트레이더 수준의 AI 전략 판단 클래스
 */
export class ProfessionalTradingAI {
    constructor() {
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
        this.model = 'gpt-4o'; // Vision 지원 모델
    }

    /**
     * 전문가 수준의 트레이딩 분석
     */
    async analyzeTrade(marketData, chartImage = null) {
        const prompt = this.buildProfessionalPrompt(marketData);

        try {
            const messages = [
                {
                    role: 'system',
                    content: `당신은 20년 경력의 전문 암호화폐 트레이더이자 기술적 분석 전문가입니다.

전문 분야:
- 차트 패턴 인식 (헤드앤숄더, 더블탑/바텀, 삼각수렴, 플래그, 웨지)
- 엘리엇 파동 이론
- 피보나치 되돌림/확장
- 거래량 분석
- 다중 시간프레임 분석
- 지지/저항선 식별
- 캔들스틱 패턴 (도지, 망치, 역망치, 포챈잉)

당신은 RSI, MACD, 볼린저 밴드 같은 지표를 **보조 도구**로만 사용하며, 
실제 결정은 **가격 행동(Price Action)과 차트 패턴**을 기반으로 내립니다.

응답은 다음 JSON 형식으로 출력하세요:
{
  "decision": "BUY" | "SELL",
  "confidence": 0-100,
  "priceAction": {
    "trend": "UPTREND" | "DOWNTREND" | "SIDEWAYS",
    "keyLevels": {
      "support": [숫자 배열],
      "resistance": [숫자 배열]
    },
    "chartPatterns": ["패턴 이름들"],
    "candlestickSignals": ["시그널 설명들"]
  },
  "technicalConfirmation": {
    "rsiDivergence": "BULLISH" | "BEARISH" | "NONE",
    "macdCrossover": "BULLISH" | "BEARISH" | "NONE",
    "volumeProfile": "INCREASING" | "DECREASING" | "NEUTRAL"
  },
  "reasoning": "전문가 수준의 상세 분석 (한글)",
  "riskLevel": "LOW" | "MEDIUM" | "HIGH",
  "stopLoss": 숫자,
  "takeProfit": [숫자 배열 - 여러 목표가]
}`
                },
                {
                    role: 'user',
                    content: chartImage ? [
                        { type: 'text', text: prompt },
                        { 
                            type: 'image_url', 
                            image_url: { url: chartImage } 
                        }
                    ] : prompt
                }
            ];

            const response = await this.openai.chat.completions.create({
                model: this.model,
                messages: messages,
                temperature: 0.2,
                max_tokens: 2000,
                response_format: { type: "json_object" }
            });

            const content = response.choices[0].message.content.trim();
            
            try {
                const analysis = JSON.parse(content);
                
                // 추가 분석: 다중 시간프레임 일치 확인
                analysis.multiTimeframeAlignment = this.checkTimeframeAlignment(marketData);
                
                return analysis;
            } catch (parseError) {
                console.error('JSON 파싱 실패:', content);
                return this.createDefaultResponse('BUY', 50, 'AI 응답 파싱 실패');
            }

        } catch (error) {
            console.error('OpenAI API 오류:', error.message);
            return this.createDefaultResponse('BUY', 50, `API 오류: ${error.message}`);
        }
    }

    /**
     * 전문가 수준 프롬프트 생성
     */
    buildProfessionalPrompt(marketData) {
        const { symbol, price, indicators, signals, fearGreed, stats, recentCandles } = marketData;

        return `
# 전문 트레이딩 분석 요청

## 시장 현황
- **거래쌍**: ${symbol}
- **현재 가격**: $${price.toFixed(2)}
- **24시간 변동**: ${stats?.priceChangePercent?.toFixed(2)}%

## 최근 가격 행동 (Price Action)
${this.formatRecentCandles(recentCandles)}

## 기술적 지표 (참고용)
- **RSI(14)**: ${indicators.rsi?.toFixed(2)} ${this.getRSIInterpretation(indicators.rsi)}
- **MACD**: 
  - MACD Line: ${indicators.macd?.MACD?.toFixed(4)}
  - Signal Line: ${indicators.macd?.signal?.toFixed(4)}
  - Histogram: ${indicators.macd?.histogram?.toFixed(4)}
- **볼린저 밴드**:
  - 상단: $${indicators.bollingerBands?.upper?.toFixed(2)}
  - 중간: $${indicators.bollingerBands?.middle?.toFixed(2)}
  - 하단: $${indicators.bollingerBands?.lower?.toFixed(2)}
  - 현재 위치: ${indicators.bollingerBands?.position?.toFixed(1)}%
  - Squeeze: ${indicators.bollingerBands?.squeeze ? '압박 상태 (변동성 폭발 임박)' : '정상'}
- **EMA**:
  - EMA20: $${indicators.ema20?.toFixed(2)}
  - EMA50: $${indicators.ema50?.toFixed(2)}
  - EMA200: $${indicators.ema200?.toFixed(2)}

## 시장 심리
- **Fear & Greed Index**: ${fearGreed?.value}/100 (${fearGreed?.classification})

## 분석 요청

다음을 **전문 트레이더 관점**에서 분석하세요:

1. **가격 행동 분석**
   - 현재 트렌드 방향 (업트렌드/다운트렌드/횡보)
   - 주요 지지선/저항선 식별
   - 차트 패턴 (헤드앤숄더, 삼각수렴, 플래그 등)
   - 최근 캔들스틱 패턴 의미

2. **기술적 지표 확인** (보조 도구로만 사용)
   - RSI 다이버전스 존재 여부
   - MACD 크로스오버 신호
   - 볼린저 밴드 squeeze 후 브레이크아웃 가능성

3. **거래 결정**
   - BUY 또는 SELL 결정
   - 신뢰도 (0-100)
   - 진입가, 손절가, 목표가 제시
   - 리스크 수준

**중요**: 기술적 지표만으로 판단하지 말고, **가격 행동과 차트 패턴을 우선**하세요.
15분 후 가격이 현재보다 높을지 낮을지 예측하되, 단기 노이즈가 아닌 **확실한 시그널**만 거래하세요.
`;
    }

    /**
     * 최근 캔들 데이터 포맷팅
     */
    formatRecentCandles(candles) {
        if (!candles || candles.length === 0) {
            return '최근 캔들 데이터 없음';
        }

        // 최근 5개 캔들만
        const recent = candles.slice(-5);
        
        return recent.map((c, i) => {
            const bodyColor = c.close > c.open ? '🟢' : '🔴';
            const bodySize = Math.abs(c.close - c.open);
            const upperWick = c.high - Math.max(c.open, c.close);
            const lowerWick = Math.min(c.open, c.close) - c.low;
            const range = c.high - c.low;
            
            const bodyPercent = (bodySize / range * 100).toFixed(1);
            
            return `  ${i + 1}. ${bodyColor} O:$${c.open.toFixed(2)} H:$${c.high.toFixed(2)} L:$${c.low.toFixed(2)} C:$${c.close.toFixed(2)} (몸통 ${bodyPercent}%, 위꼬리 $${upperWick.toFixed(2)}, 아래꼬리 $${lowerWick.toFixed(2)})`;
        }).join('\n');
    }

    /**
     * RSI 전문가 해석
     */
    getRSIInterpretation(rsi) {
        if (!rsi) return '';
        
        if (rsi < 30) {
            return `(과매도 - 하지만 강한 다운트렌드에서는 더 떨어질 수 있음)`;
        } else if (rsi > 70) {
            return `(과매수 - 하지만 강한 업트렌드에서는 더 오를 수 있음)`;
        } else if (rsi >= 50 && rsi <= 55) {
            return `(중립 - 상승 전환 가능 구간)`;
        } else if (rsi >= 45 && rsi < 50) {
            return `(중립 - 하락 전환 가능 구간)`;
        }
        return `(중립)`;
    }

    /**
     * 다중 시간프레임 정렬 확인
     */
    checkTimeframeAlignment(marketData) {
        const { indicators } = marketData;
        
        // EMA 정렬 확인
        const bullishAlignment = 
            indicators.ema20 > indicators.ema50 && 
            indicators.ema50 > indicators.ema200;
        
        const bearishAlignment = 
            indicators.ema20 < indicators.ema50 && 
            indicators.ema50 < indicators.ema200;
        
        if (bullishAlignment) {
            return {
                aligned: true,
                direction: 'BULLISH',
                strength: 'STRONG'
            };
        } else if (bearishAlignment) {
            return {
                aligned: true,
                direction: 'BEARISH',
                strength: 'STRONG'
            };
        } else {
            return {
                aligned: false,
                direction: 'MIXED',
                strength: 'WEAK'
            };
        }
    }

    /**
     * 기본 응답 생성
     */
    createDefaultResponse(decision, confidence, reason) {
        return {
            decision: decision,
            confidence: confidence,
            reasoning: reason,
            riskLevel: 'HIGH',
            priceAction: {
                trend: 'UNKNOWN',
                keyLevels: { support: [], resistance: [] },
                chartPatterns: [],
                candlestickSignals: []
            },
            technicalConfirmation: {
                rsiDivergence: 'NONE',
                macdCrossover: 'NONE',
                volumeProfile: 'NEUTRAL'
            },
            stopLoss: 0,
            takeProfit: []
        };
    }

    /**
     * API 키 확인
     */
    isConfigured() {
        return !!process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== '';
    }
}
