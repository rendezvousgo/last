---
id: 44
name: BB Squeeze 해제 하향
direction: SELL
type: 변동성 돌파

conditions:
  - BB Bandwidth: 2% < bw < 4%
  - BB Position < 45%
  - MACD Histogram < 0

logic: Squeeze 해제와 함께 하방 돌파 시 강한 하락 예상

when_to_use:
  - 횡보 후 붕괴
  - 변동성 축소 후 확대

avoid_when:
  - 가짜 붕괴
  - MACD 양수

confidence:
  base: 69
---
