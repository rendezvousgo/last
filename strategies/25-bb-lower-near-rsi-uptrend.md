---
id: 25
name: BB 하단 근처 + RSI 상승
direction: BUY
type: Mean Reversion

conditions:
  - BB Position: 20% < pos < 40%
  - RSI: 35 < RSI < 50

logic: BB 하단 근처에서 RSI가 회복 중이면 반등 기대

when_to_use:
  - 레인지 하단
  - 과매도 탈출 구간

avoid_when:
  - 하락 추세 강화
  - BB 하단 이탈

confidence:
  base: 64
---
