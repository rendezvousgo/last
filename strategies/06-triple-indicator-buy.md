---
id: 6
name: 3중 지표 매수 합의
direction: BUY
type: 다중 확인

conditions:
  - RSI < 40
  - MACD.histogram > 0 AND MACD > Signal
  - BB.position < 20

logic: 3개 독립 지표가 모두 매수 신호면 가짜 신호 확률 극히 낮음

when_to_use:
  - 모든 시장 환경
  - 고신뢰도 진입 필요시

avoid_when:
  - 강한 하락 추세
  - 중요 뉴스 이벤트 직전

confidence:
  base: 85
  boost:
    - condition: EMA20 > EMA50
      add: 5
---
