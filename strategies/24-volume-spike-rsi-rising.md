---
id: 24
name: 볼륨 급증 + RSI 상승
direction: BUY
type: 거래량 확인

conditions:
  - Buy Pressure > 60%
  - RSI: 45 < RSI < 65
  - MACD Histogram > 0

logic: 매수 거래량 급증과 함께 RSI 상승 시 강한 상승 신호

when_to_use:
  - 돌파 시도 구간
  - 거래량 동반 상승

avoid_when:
  - 거래량 없는 상승
  - RSI 과매수

confidence:
  base: 70
---
