---
id: 39
name: 볼륨 급증 + RSI 하락
direction: SELL
type: 거래량 확인

conditions:
  - Sell Pressure > 60%
  - RSI: 35 < RSI < 55
  - MACD Histogram < 0

logic: 매도 거래량 급증과 RSI 하락 시 강한 하락 신호

when_to_use:
  - 붕괴 시작
  - 거래량 동반 하락

avoid_when:
  - 거래량 없는 하락
  - RSI 과매도

confidence:
  base: 70
---
