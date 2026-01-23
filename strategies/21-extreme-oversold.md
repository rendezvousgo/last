---
id: 21
name: 극단적 과매도
direction: BUY
type: 역추세 반등

conditions:
  - RSI: 30 < RSI < 40
  - BB Position < 30%

logic: RSI가 과매도 직전 구간이고 BB 하단 극단에 있을 때 반등 기대

when_to_use:
  - 급격한 하락 후 바닥 탐색
  - 패닉셀 후 반등 타이밍

avoid_when:
  - 강한 하락 추세 지속
  - RSI가 계속 하락 중

confidence:
  base: 68
---
