---
id: 40
name: BB 상단 근처 + RSI 하락
direction: SELL
type: Mean Reversion

conditions:
  - BB Position: 60% < pos < 80%
  - RSI: 50 < RSI < 65

logic: BB 상단 근처에서 RSI 하락 중이면 하락 기대

when_to_use:
  - 레인지 상단
  - 과매수 탈출 구간

avoid_when:
  - 상승 추세 강화
  - BB 상단 돌파

confidence:
  base: 64
---
