---
id: 31
name: RSI 과매도 탈출 + 볼륨
direction: BUY
type: 거래량 확인

conditions:
  - RSI: 30 < RSI < 45
  - Buy Pressure > 55%

logic: 과매도에서 탈출하며 매수 거래량 증가 시 반등

when_to_use:
  - 바닥 확인 후
  - 패닉셀 종료

avoid_when:
  - 거래량 감소
  - 추가 하락 신호

confidence:
  base: 67
---
