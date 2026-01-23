---
id: 23
name: EMA 골든 + RSI 중립 + BB 하단
direction: BUY
type: 추세 추종

conditions:
  - EMA20 > EMA50 (골든크로스)
  - RSI: 40 < RSI < 60
  - BB Position < 50%

logic: EMA 상승 추세에서 조정 시 매수 기회

when_to_use:
  - 상승 추세 중 눌림목
  - EMA 골든 확인 후

avoid_when:
  - EMA 데드크로스 임박
  - RSI 과매수

confidence:
  base: 67
---
