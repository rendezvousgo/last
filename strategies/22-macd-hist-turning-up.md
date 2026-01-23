---
id: 22
name: MACD 히스토그램 상승 전환
direction: BUY
type: 모멘텀 전환

conditions:
  - MACD Histogram: -20 < hist < 20 AND hist > 0
  - RSI: 40 < RSI < 55

logic: MACD 히스토그램이 0선 근처에서 양수로 전환 시 상승 모멘텀 시작

when_to_use:
  - 하락세 둔화 구간
  - 바닥 다지기 후

avoid_when:
  - 강한 하락 추세
  - RSI 과매수 구간

confidence:
  base: 65
---
