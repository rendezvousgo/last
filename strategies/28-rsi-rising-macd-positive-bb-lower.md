---
id: 28
name: RSI 상승 + MACD 양수 + BB 하단
direction: BUY
type: 다중 확인

conditions:
  - RSI: 40 < RSI < 55
  - MACD Histogram > 0
  - BB Position < 45%
  - EMA20 > EMA50

logic: 여러 지표가 동시에 상승을 확인할 때 신뢰도 높은 매수

when_to_use:
  - 눌림목 매수
  - 상승 추세 재확인

avoid_when:
  - 지표 불일치
  - EMA 데드

confidence:
  base: 66
---
