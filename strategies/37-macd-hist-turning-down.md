---
id: 37
name: MACD 히스토그램 하락 전환
direction: SELL
type: 모멘텀 전환

conditions:
  - MACD Histogram: -20 < hist < 20 AND hist < 0
  - RSI: 45 < RSI < 60

logic: MACD 히스토그램이 음수로 전환 시 하락 모멘텀 시작

when_to_use:
  - 상승세 둔화
  - 고점 형성 후

avoid_when:
  - 강한 상승 추세
  - RSI 과매도

confidence:
  base: 65
---
