---
id: 35
name: 다중 지표 약상승 + EMA
direction: BUY
type: 다중 확인

conditions:
  - RSI: 48 < RSI < 58
  - MACD Histogram: 5 < hist < 50
  - BB Position: 35% < pos < 50%
  - EMA20 > EMA50

logic: 모든 지표가 완만한 상승을 가리키면 안정적 상승

when_to_use:
  - 안정적 상승 추세
  - 변동성 낮은 상승

avoid_when:
  - 지표 불일치
  - EMA 데드

confidence:
  base: 64
---
