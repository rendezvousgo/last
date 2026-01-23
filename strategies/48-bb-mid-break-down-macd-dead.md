---
id: 48
name: BB 중앙선 하향 + MACD 데드
direction: SELL
type: 붕괴 확인

conditions:
  - BB Position: 40% < pos < 50%
  - MACD < Signal AND Histogram < 0
  - RSI: 40 < RSI < 55

logic: BB 중앙선 하향 돌파와 MACD 데드가 동시에 발생

when_to_use:
  - 레인지 하단 붕괴
  - 추세 전환

avoid_when:
  - 가짜 붕괴
  - RSI 과매도

confidence:
  base: 67
---
