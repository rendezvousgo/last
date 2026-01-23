---
id: 5
name: RSI 강세 다이버전스
direction: BUY
type: 역추세 반전

conditions:
  - price: Lower Low (저점2 < 저점1)
  - RSI: Higher Low (RSI저점2 > RSI저점1)
  - RSI < 40

logic: 가격은 신저점이지만 RSI는 높아짐 = 하락 모멘텀 소진, 반전 임박

when_to_use:
  - 하락 추세 말기
  - 과매도 구간에서 발생

avoid_when:
  - 강한 하락 추세 진행 중
  - 다이버전스 차이 미미 (5포인트 미만)
  - 저점 간격 너무 좁음 (10캔들 이상 필요)

confidence:
  base: 75
  boost:
    - condition: RSI < 30에서 발생
      add: 5
    - condition: MACD 다이버전스 동반
      add: 5

requires_history: 20 candles
---
