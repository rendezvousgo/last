---
id: 10
name: MACD + RSI 동시 상승 전환
direction: BUY
type: 모멘텀 이중 확인

conditions:
  - MACD.histogram > 0
  - RSI > 50

logic: 두 모멘텀 지표가 동시 상승 = 방향성 신뢰도 높음

when_to_use:
  - 하락/횡보에서 상승 전환
  - 모멘텀 확인 필요시

avoid_when:
  - RSI > 70 (과열)
  - MACD 고점에서 감소 시작
  - 하락 추세 중 일시 반등

confidence:
  base: 65
  boost:
    - condition: RSI 막 50 돌파
      add: 5
    - condition: MACD 히스토그램 증가 중
      add: 5
---
