---
id: 13
name: EMA 데드 크로스 + RSI 중립
direction: SELL
type: 추세 전환

conditions:
  - EMA20 < EMA50
  - RSI > 45 AND RSI < 55

logic: EMA 데드크로스 발생 시 RSI가 중립이면 과매도 없이 하락 여력 있음

when_to_use:
  - 상승에서 하락 전환 시점
  - 횡보 후 하락 시작

avoid_when:
  - RSI < 30 (이미 과매도)
  - 가짜 크로스 (2-3캔들 확인)
  - 거래량 급증 (바닥 매수)

confidence:
  base: 68
  boost:
    - condition: 거래량 유지
      add: 5
    - condition: MACD.histogram < 0
      add: 5
---
