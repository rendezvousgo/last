---
id: 36
name: 극단적 과매수
direction: SELL
type: 역추세 하락

conditions:
  - RSI: 60 < RSI < 70
  - BB Position > 70%

logic: RSI 과매수 직전이고 BB 상단 극단이면 하락 기대

when_to_use:
  - 급격한 상승 후
  - 이익 실현 타이밍

avoid_when:
  - 강한 상승 추세 지속
  - RSI 계속 상승

confidence:
  base: 68
---
