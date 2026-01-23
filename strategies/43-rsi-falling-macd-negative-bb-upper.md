---
id: 43
name: RSI 하락 + MACD 음수 + BB 상단
direction: SELL
type: 다중 확인

conditions:
  - RSI: 45 < RSI < 60
  - MACD Histogram < 0
  - BB Position > 55%
  - EMA20 < EMA50

logic: 여러 지표가 동시에 하락을 확인할 때 신뢰도 높은 매도

when_to_use:
  - 반등 후 매도
  - 하락 추세 재확인

avoid_when:
  - 지표 불일치
  - EMA 골든

confidence:
  base: 66
---
