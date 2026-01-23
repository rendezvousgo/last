---
id: 32
name: EMA 상승 + RSI 50 돌파
direction: BUY
type: 추세 확인

conditions:
  - EMA20 > EMA50
  - RSI: 50 < RSI < 60

logic: EMA 상승 추세에서 RSI가 50을 돌파하면 상승 가속

when_to_use:
  - 추세 강화 구간
  - 조정 종료 확인

avoid_when:
  - EMA 데드 임박
  - RSI 하락 반전

confidence:
  base: 65
---
