---
id: 33
name: BB 중앙선 상향 + MACD 골든
direction: BUY
type: 돌파 확인

conditions:
  - BB Position: 50% < pos < 60%
  - MACD > Signal AND Histogram > 0
  - RSI: 45 < RSI < 60

logic: BB 중앙선 상향 돌파와 MACD 골든이 동시에 발생

when_to_use:
  - 레인지 상단 돌파
  - 추세 전환

avoid_when:
  - 가짜 돌파
  - RSI 과매수

confidence:
  base: 67
---
