---
id: 41
name: Fear&Greed 극탐욕 + MACD 데드
direction: SELL
type: 심리 + 기술적

conditions:
  - Fear & Greed > 70
  - RSI > 60
  - MACD < Signal AND Histogram < 0

logic: 극단적 탐욕에서 MACD 데드 발생 시 강력한 하락 신호

when_to_use:
  - 시장 과열 상태
  - 버블 우려

avoid_when:
  - 펀더멘탈 호재
  - 연속 상승 추세

confidence:
  base: 72
---
