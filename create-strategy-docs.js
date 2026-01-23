import fs from 'fs';

// 실제 코드 기반 전략 정의 (기존 양식에 맞춤)
const strategies = [
  {
    id: 21,
    name: '극단적 과매도',
    file: '21-extreme-oversold',
    direction: 'BUY',
    type: '역추세 반등',
    conditions: ['RSI: 30 < RSI < 40', 'BB Position < 30%'],
    logic: 'RSI가 과매도 직전 구간이고 BB 하단 극단에 있을 때 반등 기대',
    when_to_use: ['급격한 하락 후 바닥 탐색', '패닉셀 후 반등 타이밍'],
    avoid_when: ['강한 하락 추세 지속', 'RSI가 계속 하락 중'],
    confidence: { base: 68 }
  },
  {
    id: 22,
    name: 'MACD 히스토그램 상승 전환',
    file: '22-macd-hist-turning-up',
    direction: 'BUY',
    type: '모멘텀 전환',
    conditions: ['MACD Histogram: -20 < hist < 20 AND hist > 0', 'RSI: 40 < RSI < 55'],
    logic: 'MACD 히스토그램이 0선 근처에서 양수로 전환 시 상승 모멘텀 시작',
    when_to_use: ['하락세 둔화 구간', '바닥 다지기 후'],
    avoid_when: ['강한 하락 추세', 'RSI 과매수 구간'],
    confidence: { base: 65 }
  },
  {
    id: 23,
    name: 'EMA 골든 + RSI 중립 + BB 하단',
    file: '23-ema-golden-rsi-neutral-bb-lower',
    direction: 'BUY',
    type: '추세 추종',
    conditions: ['EMA20 > EMA50 (골든크로스)', 'RSI: 40 < RSI < 60', 'BB Position < 50%'],
    logic: 'EMA 상승 추세에서 조정 시 매수 기회',
    when_to_use: ['상승 추세 중 눌림목', 'EMA 골든 확인 후'],
    avoid_when: ['EMA 데드크로스 임박', 'RSI 과매수'],
    confidence: { base: 67 }
  },
  {
    id: 24,
    name: '볼륨 급증 + RSI 상승',
    file: '24-volume-spike-rsi-rising',
    direction: 'BUY',
    type: '거래량 확인',
    conditions: ['Buy Pressure > 60%', 'RSI: 45 < RSI < 65', 'MACD Histogram > 0'],
    logic: '매수 거래량 급증과 함께 RSI 상승 시 강한 상승 신호',
    when_to_use: ['돌파 시도 구간', '거래량 동반 상승'],
    avoid_when: ['거래량 없는 상승', 'RSI 과매수'],
    confidence: { base: 70 }
  },
  {
    id: 25,
    name: 'BB 하단 근처 + RSI 상승',
    file: '25-bb-lower-near-rsi-uptrend',
    direction: 'BUY',
    type: 'Mean Reversion',
    conditions: ['BB Position: 20% < pos < 40%', 'RSI: 35 < RSI < 50'],
    logic: 'BB 하단 근처에서 RSI가 회복 중이면 반등 기대',
    when_to_use: ['레인지 하단', '과매도 탈출 구간'],
    avoid_when: ['하락 추세 강화', 'BB 하단 이탈'],
    confidence: { base: 64 }
  },
  {
    id: 26,
    name: 'Fear&Greed 극공포 + MACD 골든',
    file: '26-fear-greed-extreme-fear-macd-golden',
    direction: 'BUY',
    type: '심리 + 기술적',
    conditions: ['Fear & Greed < 30', 'RSI < 40', 'MACD > Signal AND Histogram > 0'],
    logic: '극단적 공포 상황에서 MACD 골든 발생 시 강력한 반등 신호',
    when_to_use: ['시장 패닉 상태', '뉴스로 인한 급락 후'],
    avoid_when: ['펀더멘탈 악재', '연속 하락 추세'],
    confidence: { base: 72 }
  },
  {
    id: 27,
    name: 'EMA 골든 직후 + BB 확장',
    file: '27-ema-golden-recent-bb-expanding',
    direction: 'BUY',
    type: '추세 시작',
    conditions: ['EMA20 > EMA50 (1% 이내 근접)', 'BB Bandwidth > 3%'],
    logic: 'EMA 골든 직후 변동성 확대 시 상승 추세 시작',
    when_to_use: ['추세 전환 초기', '횡보 후 돌파'],
    avoid_when: ['가짜 돌파 의심', '거래량 미동반'],
    confidence: { base: 66 }
  },
  {
    id: 28,
    name: 'RSI 상승 + MACD 양수 + BB 하단',
    file: '28-rsi-rising-macd-positive-bb-lower',
    direction: 'BUY',
    type: '다중 확인',
    conditions: ['RSI: 40 < RSI < 55', 'MACD Histogram > 0', 'BB Position < 45%', 'EMA20 > EMA50'],
    logic: '여러 지표가 동시에 상승을 확인할 때 신뢰도 높은 매수',
    when_to_use: ['눌림목 매수', '상승 추세 재확인'],
    avoid_when: ['지표 불일치', 'EMA 데드'],
    confidence: { base: 66 }
  },
  {
    id: 29,
    name: 'BB Squeeze 해제 상향',
    file: '29-bb-squeeze-release-breakout-up',
    direction: 'BUY',
    type: '변동성 돌파',
    conditions: ['BB Bandwidth: 2% < bw < 4%', 'BB Position > 55%', 'MACD Histogram > 0'],
    logic: 'Squeeze 해제와 함께 상방 돌파 시 강한 상승 예상',
    when_to_use: ['횡보 후 돌파', '변동성 축소 후 확대'],
    avoid_when: ['가짜 돌파', 'MACD 음수'],
    confidence: { base: 69 }
  },
  {
    id: 30,
    name: 'MACD 골든 + BB 중하단',
    file: '30-macd-golden-bb-lower-mid',
    direction: 'BUY',
    type: '모멘텀 + 위치',
    conditions: ['MACD > Signal', 'BB Position: 30% < pos < 50%'],
    logic: 'MACD 골든이면서 BB 중하단에 있으면 상승 여력 충분',
    when_to_use: ['조정 후 반등', '추세 재개'],
    avoid_when: ['MACD 데드 임박', 'BB 하단 이탈'],
    confidence: { base: 66 }
  },
  {
    id: 31,
    name: 'RSI 과매도 탈출 + 볼륨',
    file: '31-rsi-oversold-escape-volume',
    direction: 'BUY',
    type: '거래량 확인',
    conditions: ['RSI: 30 < RSI < 45', 'Buy Pressure > 55%'],
    logic: '과매도에서 탈출하며 매수 거래량 증가 시 반등',
    when_to_use: ['바닥 확인 후', '패닉셀 종료'],
    avoid_when: ['거래량 감소', '추가 하락 신호'],
    confidence: { base: 67 }
  },
  {
    id: 32,
    name: 'EMA 상승 + RSI 50 돌파',
    file: '32-ema-uptrend-rsi-50-break',
    direction: 'BUY',
    type: '추세 확인',
    conditions: ['EMA20 > EMA50', 'RSI: 50 < RSI < 60'],
    logic: 'EMA 상승 추세에서 RSI가 50을 돌파하면 상승 가속',
    when_to_use: ['추세 강화 구간', '조정 종료 확인'],
    avoid_when: ['EMA 데드 임박', 'RSI 하락 반전'],
    confidence: { base: 65 }
  },
  {
    id: 33,
    name: 'BB 중앙선 상향 + MACD 골든',
    file: '33-bb-mid-break-up-macd-golden',
    direction: 'BUY',
    type: '돌파 확인',
    conditions: ['BB Position: 50% < pos < 60%', 'MACD > Signal AND Histogram > 0', 'RSI: 45 < RSI < 60'],
    logic: 'BB 중앙선 상향 돌파와 MACD 골든이 동시에 발생',
    when_to_use: ['레인지 상단 돌파', '추세 전환'],
    avoid_when: ['가짜 돌파', 'RSI 과매수'],
    confidence: { base: 67 }
  },
  {
    id: 34,
    name: 'Fear&Greed 반등 + RSI',
    file: '34-fear-greed-rebound-rsi',
    direction: 'BUY',
    type: '심리 회복',
    conditions: ['Fear & Greed: 25 < fg < 40', 'RSI: 35 < RSI < 50'],
    logic: '공포에서 회복 중이고 RSI도 상승 중이면 반등',
    when_to_use: ['심리 바닥 통과', '공포 완화 구간'],
    avoid_when: ['공포 지속', 'RSI 하락'],
    confidence: { base: 62 }
  },
  {
    id: 35,
    name: '다중 지표 약상승 + EMA',
    file: '35-multi-indicator-mild-up-ema',
    direction: 'BUY',
    type: '다중 확인',
    conditions: ['RSI: 48 < RSI < 58', 'MACD Histogram: 5 < hist < 50', 'BB Position: 35% < pos < 50%', 'EMA20 > EMA50'],
    logic: '모든 지표가 완만한 상승을 가리키면 안정적 상승',
    when_to_use: ['안정적 상승 추세', '변동성 낮은 상승'],
    avoid_when: ['지표 불일치', 'EMA 데드'],
    confidence: { base: 64 }
  },
  {
    id: 36,
    name: '극단적 과매수',
    file: '36-extreme-overbought',
    direction: 'SELL',
    type: '역추세 하락',
    conditions: ['RSI: 60 < RSI < 70', 'BB Position > 70%'],
    logic: 'RSI 과매수 직전이고 BB 상단 극단이면 하락 기대',
    when_to_use: ['급격한 상승 후', '이익 실현 타이밍'],
    avoid_when: ['강한 상승 추세 지속', 'RSI 계속 상승'],
    confidence: { base: 68 }
  },
  {
    id: 37,
    name: 'MACD 히스토그램 하락 전환',
    file: '37-macd-hist-turning-down',
    direction: 'SELL',
    type: '모멘텀 전환',
    conditions: ['MACD Histogram: -20 < hist < 20 AND hist < 0', 'RSI: 45 < RSI < 60'],
    logic: 'MACD 히스토그램이 음수로 전환 시 하락 모멘텀 시작',
    when_to_use: ['상승세 둔화', '고점 형성 후'],
    avoid_when: ['강한 상승 추세', 'RSI 과매도'],
    confidence: { base: 65 }
  },
  {
    id: 38,
    name: 'EMA 데드 + RSI 중립 + BB 상단',
    file: '38-ema-dead-rsi-neutral-bb-upper',
    direction: 'SELL',
    type: '추세 추종',
    conditions: ['EMA20 < EMA50 (데드크로스)', 'RSI: 40 < RSI < 60', 'BB Position > 50%'],
    logic: 'EMA 하락 추세에서 반등 시 매도 기회',
    when_to_use: ['하락 추세 중 반등', 'EMA 데드 확인 후'],
    avoid_when: ['EMA 골든 임박', 'RSI 과매도'],
    confidence: { base: 67 }
  },
  {
    id: 39,
    name: '볼륨 급증 + RSI 하락',
    file: '39-volume-spike-rsi-falling',
    direction: 'SELL',
    type: '거래량 확인',
    conditions: ['Sell Pressure > 60%', 'RSI: 35 < RSI < 55', 'MACD Histogram < 0'],
    logic: '매도 거래량 급증과 RSI 하락 시 강한 하락 신호',
    when_to_use: ['붕괴 시작', '거래량 동반 하락'],
    avoid_when: ['거래량 없는 하락', 'RSI 과매도'],
    confidence: { base: 70 }
  },
  {
    id: 40,
    name: 'BB 상단 근처 + RSI 하락',
    file: '40-bb-upper-near-rsi-downtrend',
    direction: 'SELL',
    type: 'Mean Reversion',
    conditions: ['BB Position: 60% < pos < 80%', 'RSI: 50 < RSI < 65'],
    logic: 'BB 상단 근처에서 RSI 하락 중이면 하락 기대',
    when_to_use: ['레인지 상단', '과매수 탈출 구간'],
    avoid_when: ['상승 추세 강화', 'BB 상단 돌파'],
    confidence: { base: 64 }
  },
  {
    id: 41,
    name: 'Fear&Greed 극탐욕 + MACD 데드',
    file: '41-fear-greed-extreme-greed-macd-dead',
    direction: 'SELL',
    type: '심리 + 기술적',
    conditions: ['Fear & Greed > 70', 'RSI > 60', 'MACD < Signal AND Histogram < 0'],
    logic: '극단적 탐욕에서 MACD 데드 발생 시 강력한 하락 신호',
    when_to_use: ['시장 과열 상태', '버블 우려'],
    avoid_when: ['펀더멘탈 호재', '연속 상승 추세'],
    confidence: { base: 72 }
  },
  {
    id: 42,
    name: 'EMA 데드 직후 + BB 확장',
    file: '42-ema-dead-recent-bb-expanding',
    direction: 'SELL',
    type: '추세 시작',
    conditions: ['EMA20 < EMA50 (1% 이내 근접)', 'BB Bandwidth > 3%'],
    logic: 'EMA 데드 직후 변동성 확대 시 하락 추세 시작',
    when_to_use: ['추세 전환 초기', '지지선 붕괴'],
    avoid_when: ['가짜 붕괴 의심', '거래량 미동반'],
    confidence: { base: 66 }
  },
  {
    id: 43,
    name: 'RSI 하락 + MACD 음수 + BB 상단',
    file: '43-rsi-falling-macd-negative-bb-upper',
    direction: 'SELL',
    type: '다중 확인',
    conditions: ['RSI: 45 < RSI < 60', 'MACD Histogram < 0', 'BB Position > 55%', 'EMA20 < EMA50'],
    logic: '여러 지표가 동시에 하락을 확인할 때 신뢰도 높은 매도',
    when_to_use: ['반등 후 매도', '하락 추세 재확인'],
    avoid_when: ['지표 불일치', 'EMA 골든'],
    confidence: { base: 66 }
  },
  {
    id: 44,
    name: 'BB Squeeze 해제 하향',
    file: '44-bb-squeeze-release-breakout-down',
    direction: 'SELL',
    type: '변동성 돌파',
    conditions: ['BB Bandwidth: 2% < bw < 4%', 'BB Position < 45%', 'MACD Histogram < 0'],
    logic: 'Squeeze 해제와 함께 하방 돌파 시 강한 하락 예상',
    when_to_use: ['횡보 후 붕괴', '변동성 축소 후 확대'],
    avoid_when: ['가짜 붕괴', 'MACD 양수'],
    confidence: { base: 69 }
  },
  {
    id: 45,
    name: 'MACD 데드 + BB 중상단',
    file: '45-macd-dead-bb-upper-mid',
    direction: 'SELL',
    type: '모멘텀 + 위치',
    conditions: ['MACD < Signal', 'BB Position: 50% < pos < 70%'],
    logic: 'MACD 데드이면서 BB 중상단에 있으면 하락 여력 충분',
    when_to_use: ['반등 후 재하락', '추세 재개'],
    avoid_when: ['MACD 골든 임박', 'BB 상단 돌파'],
    confidence: { base: 66 }
  },
  {
    id: 46,
    name: 'RSI 과매수 진입 + 볼륨',
    file: '46-rsi-overbought-enter-volume',
    direction: 'SELL',
    type: '거래량 확인',
    conditions: ['RSI: 55 < RSI < 70', 'Sell Pressure > 55%'],
    logic: '과매수 진입하며 매도 거래량 증가 시 하락',
    when_to_use: ['고점 확인 후', '이익 실현 매물'],
    avoid_when: ['거래량 감소', '추가 상승 신호'],
    confidence: { base: 67 }
  },
  {
    id: 47,
    name: 'EMA 하락 + RSI 50 하향',
    file: '47-ema-downtrend-rsi-50-break-down',
    direction: 'SELL',
    type: '추세 확인',
    conditions: ['EMA20 < EMA50', 'RSI: 40 < RSI < 50'],
    logic: 'EMA 하락 추세에서 RSI가 50 아래로 떨어지면 하락 가속',
    when_to_use: ['추세 강화 구간', '반등 종료 확인'],
    avoid_when: ['EMA 골든 임박', 'RSI 상승 반전'],
    confidence: { base: 65 }
  },
  {
    id: 48,
    name: 'BB 중앙선 하향 + MACD 데드',
    file: '48-bb-mid-break-down-macd-dead',
    direction: 'SELL',
    type: '붕괴 확인',
    conditions: ['BB Position: 40% < pos < 50%', 'MACD < Signal AND Histogram < 0', 'RSI: 40 < RSI < 55'],
    logic: 'BB 중앙선 하향 돌파와 MACD 데드가 동시에 발생',
    when_to_use: ['레인지 하단 붕괴', '추세 전환'],
    avoid_when: ['가짜 붕괴', 'RSI 과매도'],
    confidence: { base: 67 }
  },
  {
    id: 49,
    name: 'Fear&Greed 하락 + RSI',
    file: '49-fear-greed-falling-rsi',
    direction: 'SELL',
    type: '심리 악화',
    conditions: ['Fear & Greed: 60 < fg < 75', 'RSI: 50 < RSI < 65'],
    logic: '탐욕에서 하락 중이고 RSI도 하락 중이면 조정',
    when_to_use: ['심리 고점 통과', '탐욕 완화 구간'],
    avoid_when: ['탐욕 지속', 'RSI 상승'],
    confidence: { base: 62 }
  },
  {
    id: 50,
    name: '다중 지표 약하락 + EMA',
    file: '50-multi-indicator-mild-down-ema',
    direction: 'SELL',
    type: '다중 확인',
    conditions: ['RSI: 42 < RSI < 52', 'MACD Histogram: -50 < hist < -5', 'BB Position: 50% < pos < 65%', 'EMA20 < EMA50'],
    logic: '모든 지표가 완만한 하락을 가리키면 안정적 하락',
    when_to_use: ['안정적 하락 추세', '변동성 낮은 하락'],
    avoid_when: ['지표 불일치', 'EMA 골든'],
    confidence: { base: 64 }
  }
];

// 기존 양식에 맞춰 문서 생성
strategies.forEach(s => {
  const content = `---
id: ${s.id}
name: ${s.name}
direction: ${s.direction}
type: ${s.type}

conditions:
${s.conditions.map(c => `  - ${c}`).join('\n')}

logic: ${s.logic}

when_to_use:
${s.when_to_use.map(w => `  - ${w}`).join('\n')}

avoid_when:
${s.avoid_when.map(a => `  - ${a}`).join('\n')}

confidence:
  base: ${s.confidence.base}
---
`;
  fs.writeFileSync(`strategies/${s.file}.md`, content);
});

console.log('✅ 30개 전략 문서 생성 완료 (기존 양식)');

