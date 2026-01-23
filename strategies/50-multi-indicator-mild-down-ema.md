---
id: 50
name: 다중 지표 약하락 + EMA
direction: SELL
type: 다중 확인

conditions:
  - RSI: 42 < RSI < 52
  - MACD Histogram: -50 < hist < -5
  - BB Position: 50% < pos < 65%
  - EMA20 < EMA50

logic: 모든 지표가 완만한 하락을 가리키면 안정적 하락

when_to_use:
  - 안정적 하락 추세
  - 변동성 낮은 하락

avoid_when:
  - 지표 불일치
  - EMA 골든

confidence:
  base: 64
---
