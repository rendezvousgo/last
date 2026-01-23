---
id: 18
name: 볼린저 Squeeze 하향 돌파
direction: SELL
type: 변동성 돌파

conditions:
  - BB.squeeze < 7
  - BB.position < 20

logic: 오랜 횡보(squeeze) 후 하단 돌파는 압축 에너지 하방 폭발

when_to_use:
  - 횡보 10캔들 이상 후
  - 변동성 축소 기간 후

avoid_when:
  - 가짜 돌파 (2-3캔들 확인)
  - 거래량 없는 돌파
  - 상승 추세 중

confidence:
  base: 65
  boost:
    - condition: squeeze 10캔들 이상
      add: 5
    - condition: volume > average * 1.5
      add: 5

requires_history: 15 candles
---
