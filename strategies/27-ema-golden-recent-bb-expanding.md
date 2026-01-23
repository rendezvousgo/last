---
id: 27
name: EMA 골든 직후 + BB 확장
direction: BUY
type: 추세 시작

conditions:
  - EMA20 > EMA50 (1% 이내 근접)
  - BB Bandwidth > 3%

logic: EMA 골든 직후 변동성 확대 시 상승 추세 시작

when_to_use:
  - 추세 전환 초기
  - 횡보 후 돌파

avoid_when:
  - 가짜 돌파 의심
  - 거래량 미동반

confidence:
  base: 66
---
