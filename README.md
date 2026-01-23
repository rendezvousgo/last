# AI 트레이딩 봇

RSI, MACD, Bollinger Bands 등 기술적 지표와 OpenAI GPT를 결합한 암호화폐 트레이딩 분석 봇입니다.

## 주요 기능

- **기술적 지표 분석**: RSI, MACD, Bollinger Bands, EMA, SMA
- **시장 심리 분석**: Fear & Greed Index 통합
- **AI 전략 판단**: OpenAI GPT-3.5를 활용한 종합 분석
- **다중 코인 지원**: 여러 코인 동시 분석
- **실시간 데이터**: Binance API를 통한 실시간 시장 데이터

## 설치

```bash
npm install
```

## 설정

`.env` 파일을 생성하고 API 키를 설정하세요:

```env
# OpenAI API 키 (필수 - AI 분석 사용 시)
OPENAI_API_KEY=your-openai-api-key

# Binance API (선택 - 거래 실행 시 필요)
BINANCE_API_KEY=your-binance-api-key
BINANCE_API_SECRET=your-binance-api-secret

# 트레이딩 설정
TRADE_AMOUNT=100
RISK_LEVEL=MEDIUM
```

**참고**: OpenAI API 키가 없어도 기술적 지표 기반 분석은 가능합니다.

## 사용법

### 단일 코인 분석

```bash
npm start                    # 기본값: BTCUSDT, 1시간 간격
npm start ETHUSDT           # 이더리움 분석
npm start BTCUSDT 4h        # 비트코인 4시간 간격 분석
```

### 다중 코인 분석

```bash
npm start -- --multiple      # BTC, ETH, BNB, SOL 동시 분석
```

### 테스트

```bash
npm test                     # 전략 테스트
npm run analyze              # 상세 분석
```

## 출력 예시

```
📊 BTCUSDT 분석 시작 (1h 간격)...

1️⃣ 시장 데이터 수집 중...
2️⃣ 기술적 지표 계산 중...
3️⃣ AI 분석 중...

============================================================
📈 BTCUSDT 분석 결과
============================================================

💰 현재 가격: $43,256.50
📊 24시간 변동: +2.35%

📉 기술적 지표:
  - RSI(14): 45.23 → NEUTRAL
  - MACD: 0.0123 → BUY
  - 볼린저 밴드: 35.2% → NEUTRAL
  - 추세: BULLISH (EMA20: $42,890.00, EMA50: $41,250.00)
  - 종합 시그널: BUY

😱 시장 심리 (Fear & Greed):
  - 지수: 38/100
  - 상태: Fear
  - 시그널: BUY

🤖 AI 분석:
  - 결정: BUY
  - 신뢰도: 72%
  - 리스크: MEDIUM
  - 포지션 크기: 50%
  - 이유: 기술적 지표는 상승 추세를 보이고 있으며, 시장 심리가 공포 구간에 있어 매수 기회로 판단됩니다.

🎯 최종 결정:
  - 결정: BUY
  - 투표: 매수(3) | 매도(0) | 관망(0)
  - 추천: 매수 추천 (포지션 크기: 50%, 신뢰도: 72%)

============================================================
```

## 프로젝트 구조

```
trading-bot/
├── src/
│   ├── index.js                          # 메인 실행 파일
│   ├── strategy/
│   │   └── trading-strategy.js          # 통합 전략 오케스트레이션
│   ├── indicators/
│   │   └── technical-indicators.js      # 기술적 지표 계산
│   ├── data/
│   │   ├── binance-api.js              # Binance API 클라이언트
│   │   └── fear-greed-api.js           # Fear & Greed Index
│   └── ai/
│       └── openai-strategy.js          # OpenAI GPT 전략
├── package.json
├── .env                                 # API 키 설정
└── README.md
```

## 비용 예상

- **Binance API**: 무료 (시장 데이터)
- **Fear & Greed Index**: 무료
- **OpenAI GPT-3.5**: 약 $0.002/1000 토큰
  - 1회 분석: ~500 토큰 (~$0.001)
  - 1000회 분석: ~$1.50/월

## 주의사항

⚠️ **이 봇은 교육 목적으로 제작되었습니다.**

- 실제 트레이딩에 사용 시 본인의 책임하에 사용하세요.
- 과거 성과가 미래 수익을 보장하지 않습니다.
- 투자 손실이 발생할 수 있습니다.
- 소액으로 테스트한 후 사용을 권장합니다.

## 라이선스

MIT

## 참고 자료

- [Binance API 문서](https://binance-docs.github.io/apidocs/spot/en/)
- [Fear & Greed Index API](https://alternative.me/crypto/fear-and-greed-index/)
- [OpenAI API 문서](https://platform.openai.com/docs/)
- [Technical Indicators 라이브러리](https://github.com/anandanand84/technicalindicators)
