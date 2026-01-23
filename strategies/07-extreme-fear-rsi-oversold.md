---
id: 7
name: 극도 공포 + RSI 과매도
direction: BUY
type: 심리 역투자

conditions:
  - fearGreed < 25
  - RSI < 35

logic: 대중 공황 + 기술적 과매도 = 역사적 매수 기회 (공포에 사라)

when_to_use:
  - 급락 후 패닉
  - 펀더멘탈 악재 없는 공포

avoid_when:
  - 실제 펀더멘탈 악재 (거래소 해킹 등)
  - 공포 지수 계속 하락 중
  - 거래량 급감

confidence:
  base: 70
  boost:
    - condition: fearGreed < 20
      add: 5
    - condition: RSI < 30
      add: 5
---
