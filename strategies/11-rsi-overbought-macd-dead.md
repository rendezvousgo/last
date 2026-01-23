---
id: 11
name: RSI 과매수 + MACD 데드크로스
direction: SELL
type: 역추세 천정

conditions:
  - RSI > 70
  - MACD.histogram < 0
  - MACD < Signal

logic: RSI 과매수 상태에서 MACD 하락 전환하면 천정 조정 신호

when_to_use:
  - 급등 후 과열
  - 상승 추세 말기

avoid_when:
  - 강한 상승 추세 (숏 스퀴즈 위험)
  - MACD가 0선 훨씬 위
  - 호재 뉴스 직후

confidence:
  base: 70
  boost:
    - condition: RSI > 75
      add: 10
    - condition: 거래량 감소
      add: 5
---
