---
id: 34
name: Fear&Greed 반등 + RSI
direction: BUY
type: 심리 회복

conditions:
  - Fear & Greed: 25 < fg < 40
  - RSI: 35 < RSI < 50

logic: 공포에서 회복 중이고 RSI도 상승 중이면 반등

when_to_use:
  - 심리 바닥 통과
  - 공포 완화 구간

avoid_when:
  - 공포 지속
  - RSI 하락

confidence:
  base: 62
---
