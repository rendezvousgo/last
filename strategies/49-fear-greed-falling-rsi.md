---
id: 49
name: Fear&Greed 하락 + RSI
direction: SELL
type: 심리 악화

conditions:
  - Fear & Greed: 60 < fg < 75
  - RSI: 50 < RSI < 65

logic: 탐욕에서 하락 중이고 RSI도 하락 중이면 조정

when_to_use:
  - 심리 고점 통과
  - 탐욕 완화 구간

avoid_when:
  - 탐욕 지속
  - RSI 상승

confidence:
  base: 62
---
