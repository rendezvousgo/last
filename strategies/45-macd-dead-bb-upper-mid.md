---
id: 45
name: MACD 데드 + BB 중상단
direction: SELL
type: 모멘텀 + 위치

conditions:
  - MACD < Signal
  - BB Position: 50% < pos < 70%

logic: MACD 데드이면서 BB 중상단에 있으면 하락 여력 충분

when_to_use:
  - 반등 후 재하락
  - 추세 재개

avoid_when:
  - MACD 골든 임박
  - BB 상단 돌파

confidence:
  base: 66
---
