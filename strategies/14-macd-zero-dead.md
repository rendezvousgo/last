---
id: 14
name: MACD 0선 데드크로스
direction: SELL
type: 모멘텀 전환

conditions:
  - MACD > -50 AND MACD < 50
  - MACD.histogram < 0
  - MACD < Signal

logic: MACD가 0선을 하향 돌파하면 장단기 모멘텀 역전, 강한 하락 신호

when_to_use:
  - 상승 후 하락
  - 횡보 후 하락 시작

avoid_when:
  - MACD가 0선 훨씬 위서 크로스
  - RSI 이미 과매도
  - 주요 지지선 바로 위

confidence:
  base: 75
  boost:
    - condition: 0선 정확히 돌파
      add: 5
    - condition: 히스토그램 3개 연속 감소
      add: 5
---
