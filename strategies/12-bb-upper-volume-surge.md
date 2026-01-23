---
id: 12
name: 볼린저 상단 터치 + 거래량 급증
direction: SELL
type: 변동성 천정

conditions:
  - BB.position > 80
  - volume > average * 1.5

logic: 볼린저 상단(통계적 고점)에서 거래량 급증은 차익 실현 클라이맥스

when_to_use:
  - 급등 후
  - 레인징 마켓 상단

avoid_when:
  - 거래량이 매수세인 경우 (돌파)
  - 연속적 상단 터치 (강한 추세)
  - 돌파 후 안착

confidence:
  base: 72
  boost:
    - condition: BB.position > 90
      add: 5
    - condition: volume > average * 2
      add: 5
---
