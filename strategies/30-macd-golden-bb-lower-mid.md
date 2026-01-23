---
id: 30
name: MACD 골든 + BB 중하단
direction: BUY
type: 모멘텀 + 위치

conditions:
  - MACD > Signal
  - BB Position: 30% < pos < 50%

logic: MACD 골든이면서 BB 중하단에 있으면 상승 여력 충분

when_to_use:
  - 조정 후 반등
  - 추세 재개

avoid_when:
  - MACD 데드 임박
  - BB 하단 이탈

confidence:
  base: 66
---
