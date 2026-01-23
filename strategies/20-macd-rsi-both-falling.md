---
id: 20
name: MACD + RSI 동시 하락 전환
direction: SELL
type: 모멘텀 이중 확인

conditions:
  - MACD.histogram < 0
  - RSI < 50

logic: 두 모멘텀 지표가 동시 하락 = 방향성 신뢰도 높음

when_to_use:
  - 상승/횡보에서 하락 전환
  - 모멘텀 확인 필요시

avoid_when:
  - RSI < 30 (과매도)
  - MACD 저점에서 증가 시작
  - 상승 추세 중 일시 조정

confidence:
  base: 65
  boost:
    - condition: RSI 막 50 하향 돌파
      add: 5
    - condition: MACD 히스토그램 감소 중
      add: 5
---
