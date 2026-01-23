---
id: 2
name: 볼린저 하단 터치 + 거래량 급증
direction: BUY
type: 변동성 반등

conditions:
  - BB.position < 20
  - volume > average * 1.5

logic: 볼린저 하단(통계적 저점)에서 거래량 급증은 매수세 유입 신호

when_to_use:
  - 급락 후 패닉 매도
  - 레인징 마켓 하단

avoid_when:
  - 거래량 없이 하단 터치
  - 연속적 하단 터치 (밴드 확장 하락)
  - 펀더멘탈 악재

confidence:
  base: 72
  boost:
    - condition: BB.position < 10
      add: 5
    - condition: volume > average * 2
      add: 5
---
