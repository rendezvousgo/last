---
id: 4
name: MACD 0선 골든크로스
direction: BUY
type: 모멘텀 전환

conditions:
  - MACD > -50 AND MACD < 50
  - MACD.histogram > 0
  - MACD > Signal

logic: MACD가 0선을 상향 돌파하면 장단기 모멘텀 역전, 강한 상승 신호

when_to_use:
  - 하락 후 반등
  - 횡보 후 상승 시작

avoid_when:
  - MACD가 0선 훨씬 아래서 크로스
  - RSI 이미 과매수
  - 거래량 없음

confidence:
  base: 75
  boost:
    - condition: 0선 정확히 돌파
      add: 5
    - condition: 히스토그램 3개 연속 증가
      add: 5
---
