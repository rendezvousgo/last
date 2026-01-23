import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

/**
 * AI 전략 판단 클래스 (OpenAI GPT)
 */
export class AIStrategy {
    constructor() {
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
        this.model = 'gpt-3.5-turbo';
    }

    /**
     * AI 기반 트레이딩 결정
     * @param {Object} marketData - 시장 데이터
     * @returns {Promise<Object>} AI 분석 결과
     */
    async analyzeTrade(marketData) {
        const prompt = this.buildPrompt(marketData);

        try {
            const response = await this.openai.chat.completions.create({
                model: this.model,
                messages: [
                    {
                        role: 'system',
                        content: `당신은 전문 암호화폐 트레이더입니다. 15분 후 가격이 올라갈지 내려갈지 예측합니다.
응답은 반드시 다음 JSON 형식으로만 출력하세요:
{
  "decision": "BUY" | "SELL",
  "confidence": 0-100 (숫자),
  "reason": "결정 이유 (한글)",
  "riskLevel": "LOW" | "MEDIUM" | "HIGH",
  "recommendedPositionSize": 0-100 (포지션 크기 %)
}

BUY = 15분 후 가격 상승 예상
SELL = 15분 후 가격 하락 예상`
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.3,
                max_tokens: 500
            });

            const content = response.choices[0].message.content.trim();
            
            // JSON 파싱 시도
            try {
                // ```json ... ``` 형태로 감싸져 있는 경우 처리
                const jsonMatch = content.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    return JSON.parse(jsonMatch[0]);
                }
                return JSON.parse(content);
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
     * 프롬프트 생성
     * @param {Object} marketData - 시장 데이터
     * @returns {string} 프롬프트
     */
    buildPrompt(marketData) {
        const { symbol, price, indicators, signals, fearGreed, stats } = marketData;

        return `
## 15분 후 가격 방향 예측 요청

**거래쌍**: ${symbol}
**현재 가격**: $${price.toFixed(2)}
**24시간 변동**: ${stats?.priceChangePercent?.toFixed(2)}%
**예측 목표**: 15분 후 가격이 현재보다 오를지(BUY) 내릴지(SELL) 판단

### 기술적 지표
- **RSI (14)**: ${indicators.rsi?.toFixed(2)} ${this.getRSIDescription(indicators.rsi)}
- **MACD**: ${indicators.macd ? `${indicators.macd.histogram.toFixed(4)} (히스토그램)` : 'N/A'}
- **볼린저 밴드**: 현재 위치 ${indicators.bollingerBands?.position?.toFixed(1)}% ${this.getBBDescription(indicators.bollingerBands?.position)}
- **EMA20**: $${indicators.ema20?.toFixed(2)}
- **EMA50**: $${indicators.ema50?.toFixed(2)}
- **추세**: ${signals.trend}

### 시그널 분석
- RSI 시그널: ${signals.rsi}
- MACD 시그널: ${signals.macd}
- 볼린저 밴드: ${signals.bollingerBands}
- 종합 시그널: ${signals.overall}

### 시장 심리 (Fear & Greed Index)
- **지수**: ${fearGreed?.value}/100
- **상태**: ${fearGreed?.classification}
- **해석**: ${fearGreed?.interpretation?.description}

위 데이터를 종합 분석하여 15분 후 가격이 오를지(BUY) 내릴지(SELL) 결정해주세요.
반드시 BUY 또는 SELL 중 하나를 선택하세요.
`;
    }

    /**
     * RSI 상태 설명
     */
    getRSIDescription(rsi) {
        if (!rsi) return '';
        if (rsi < 30) return '(과매도 - 매수 기회)';
        if (rsi > 70) return '(과매수 - 매도 고려)';
        return '(중립)';
    }

    /**
     * 볼린저 밴드 위치 설명
     */
    getBBDescription(position) {
        if (!position) return '';
        if (position < 20) return '(하단 - 매수 기회)';
        if (position > 80) return '(상단 - 매도 고려)';
        return '(중간)';
    }

    /**
     * 기본 응답 생성
     */
    createDefaultResponse(decision, confidence, reason) {
        return {
            decision: decision,
            confidence: confidence,
            reason: reason,
            riskLevel: 'HIGH',
            recommendedPositionSize: 0
        };
    }

    /**
     * API 키 확인
     */
    isConfigured() {
        return !!process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== '';
    }
}
