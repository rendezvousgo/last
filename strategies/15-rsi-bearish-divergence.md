---
id: 15
name: RSI 약세 다이버전스
direction: SELL
type: 역추세 반전

conditions:
  - price: Higher High (고점2 > 고점1)
  - RSI: Lower High (RSI고점2 < RSI고점1)
  - RSI > 60

logic: 가격은 신고점이지만 RSI는 낮아짐 = 상승 모멘텀 소진, 반전 임박

when_to_use:
  - 상승 추세 말기
  - 과매수 구간에서 발생

avoid_when:
  - 강한 상승 추세 진행 중
  - 다이버전스 차이 미미 (5포인트 미만)
  - 고점 간격 너무 좁음 (10캔들 이상 필요)

confidence:
  base: 75
  boost:
    - condition: RSI > 70에서 발생
      add: 5
    - condition: MACD 다이버전스 동반
      add: 5

requires_history: 20 candles
---
