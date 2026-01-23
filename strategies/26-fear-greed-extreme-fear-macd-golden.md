---
id: 26
name: Fear&Greed 극공포 + MACD 골든
direction: BUY
type: 심리 + 기술적

conditions:
  - Fear & Greed < 30
  - RSI < 40
  - MACD > Signal AND Histogram > 0

logic: 극단적 공포 상황에서 MACD 골든 발생 시 강력한 반등 신호

when_to_use:
  - 시장 패닉 상태
  - 뉴스로 인한 급락 후

avoid_when:
  - 펀더멘탈 악재
  - 연속 하락 추세

confidence:
  base: 72
---
