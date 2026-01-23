---
id: 46
name: RSI 과매수 진입 + 볼륨
direction: SELL
type: 거래량 확인

conditions:
  - RSI: 55 < RSI < 70
  - Sell Pressure > 55%

logic: 과매수 진입하며 매도 거래량 증가 시 하락

when_to_use:
  - 고점 확인 후
  - 이익 실현 매물

avoid_when:
  - 거래량 감소
  - 추가 상승 신호

confidence:
  base: 67
---
