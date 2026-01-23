---
id: 29
name: BB Squeeze 해제 상향
direction: BUY
type: 변동성 돌파

conditions:
  - BB Bandwidth: 2% < bw < 4%
  - BB Position > 55%
  - MACD Histogram > 0

logic: Squeeze 해제와 함께 상방 돌파 시 강한 상승 예상

when_to_use:
  - 횡보 후 돌파
  - 변동성 축소 후 확대

avoid_when:
  - 가짜 돌파
  - MACD 음수

confidence:
  base: 69
---
