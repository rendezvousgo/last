---
id: 19
name: EMA 하락 정렬 + RSI 하락
direction: SELL
type: 추세 지속

conditions:
  - EMA20 < EMA50
  - RSI > 35 AND RSI < 50

logic: 하락 추세 유지 중 RSI 하락 모멘텀 = 추세 지속 확인

when_to_use:
  - 하락 추세 중 반등 후
  - 추세 추종 청산

avoid_when:
  - RSI < 30 (과매도)
  - EMA 간격 너무 좁음
  - 거래량 급증 (바닥 매수)

confidence:
  base: 68
  boost:
    - condition: MACD.histogram < 0
      add: 5
    - condition: 거래량 감소
      add: 5
---
