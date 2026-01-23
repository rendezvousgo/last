---
id: 9
name: EMA 상승 정렬 + RSI 상승
direction: BUY
type: 추세 지속

conditions:
  - EMA20 > EMA50
  - RSI > 50 AND RSI < 65

logic: 상승 추세 유지 중 RSI 상승 모멘텀 = 추세 지속 확인

when_to_use:
  - 상승 추세 중 조정 후
  - 추세 추종 진입

avoid_when:
  - RSI > 70 (과열)
  - EMA 간격 너무 좁음
  - 거래량 감소 추세

confidence:
  base: 68
  boost:
    - condition: MACD.histogram > 0
      add: 5
    - condition: 거래량 증가
      add: 5
---
