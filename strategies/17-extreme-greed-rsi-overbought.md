---
id: 17
name: 극도 탐욕 + RSI 과매수
direction: SELL
type: 심리 역투자

conditions:
  - fearGreed > 75
  - RSI > 65

logic: 대중 열광 + 기술적 과매수 = 역사적 매도 기회 (탐욕에 팔아라)

when_to_use:
  - 급등 후 유포리아
  - 펀더멘탈 호재 소진

avoid_when:
  - 강력한 호재 지속
  - 탐욕 지수 계속 상승 중
  - 숏 스퀴즈 가능성

confidence:
  base: 70
  boost:
    - condition: fearGreed > 80
      add: 5
    - condition: RSI > 70
      add: 5
---
