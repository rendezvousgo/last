---
id: 1
name: RSI 과매도 + MACD 골든크로스
direction: BUY
type: 역추세 반등

conditions:
  - RSI < 30
  - MACD.histogram > 0
  - MACD > Signal

logic: RSI 과매도 상태에서 MACD가 상승 전환하면 바닥 반등 신호

when_to_use:
  - 상승 추세 중 조정
  - 레인징 마켓 하단

avoid_when:
  - 강한 하락 추세 (EMA20 << EMA50)
  - MACD가 0선 훨씬 아래
  - 거래량 없는 반등

confidence:
  base: 70
  boost:
    - condition: RSI < 25
      add: 10
    - condition: 거래량 급증
      add: 5
---
