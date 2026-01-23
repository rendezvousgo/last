---
id: 42
name: EMA 데드 직후 + BB 확장
direction: SELL
type: 추세 시작

conditions:
  - EMA20 < EMA50 (1% 이내 근접)
  - BB Bandwidth > 3%

logic: EMA 데드 직후 변동성 확대 시 하락 추세 시작

when_to_use:
  - 추세 전환 초기
  - 지지선 붕괴

avoid_when:
  - 가짜 붕괴 의심
  - 거래량 미동반

confidence:
  base: 66
---
