---
id: 47
name: EMA 하락 + RSI 50 하향
direction: SELL
type: 추세 확인

conditions:
  - EMA20 < EMA50
  - RSI: 40 < RSI < 50

logic: EMA 하락 추세에서 RSI가 50 아래로 떨어지면 하락 가속

when_to_use:
  - 추세 강화 구간
  - 반등 종료 확인

avoid_when:
  - EMA 골든 임박
  - RSI 상승 반전

confidence:
  base: 65
---
