---
id: 3
name: EMA 골든 크로스 + RSI 중립
direction: BUY
type: 추세 전환

conditions:
  - EMA20 > EMA50
  - RSI > 45 AND RSI < 55

logic: EMA 골든크로스 발생 시 RSI가 중립이면 과열 없이 상승 여력 있음

when_to_use:
  - 하락에서 상승 전환 시점
  - 횡보 후 방향성 시작

avoid_when:
  - RSI > 70 (이미 과열)
  - 가짜 크로스 (2-3캔들 확인 필요)
  - 거래량 감소 중

confidence:
  base: 68
  boost:
    - condition: 거래량 증가
      add: 5
    - condition: MACD도 상승
      add: 5
---
