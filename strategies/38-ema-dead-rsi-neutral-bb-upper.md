---
id: 38
name: EMA 데드 + RSI 중립 + BB 상단
direction: SELL
type: 추세 추종

conditions:
  - EMA20 < EMA50 (데드크로스)
  - RSI: 40 < RSI < 60
  - BB Position > 50%

logic: EMA 하락 추세에서 반등 시 매도 기회

when_to_use:
  - 하락 추세 중 반등
  - EMA 데드 확인 후

avoid_when:
  - EMA 골든 임박
  - RSI 과매도

confidence:
  base: 67
---
