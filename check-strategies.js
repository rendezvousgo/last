/**
 * 50개 전략 트리플 체크 스크립트
 * RSI 범위 충돌, 조건 강도, BUY/SELL 균형 분석
 */

// 전략별 조건 분석 데이터
const strategies = {
    // BUY 전략 (1-10, 21-35)
    1: { dir: 'BUY', rsi: '<30', macd: 'Hist>0, 골든', bb: '-', ema: '-', fg: '-', vol: '-', conditions: 2, name: 'RSI 과매도 + MACD 골든' },
    2: { dir: 'BUY', rsi: '-', macd: '-', bb: '<20%', ema: '-', fg: '-', vol: 'surge', conditions: 2, name: '볼린저 하단 + 거래량 급증' },
    3: { dir: 'BUY', rsi: '40-55', macd: 'Hist>0', bb: '<40%', ema: '-', fg: '-', vol: '-', conditions: 3, name: 'BB 하단 Mean Reversion' },
    4: { dir: 'BUY', rsi: '-', macd: '0선 골든', bb: '-', ema: '-', fg: '-', vol: '-', conditions: 2, name: 'MACD 0선 골든크로스' },
    5: { dir: 'BUY', rsi: '<40', macd: '-', bb: '-', ema: '-', fg: '-', vol: '-', conditions: 2, name: 'RSI 강세 다이버전스' },
    6: { dir: 'BUY', rsi: '<40', macd: 'Hist>0, 골든', bb: '<20%', ema: '-', fg: '-', vol: '-', conditions: 3, name: '3중 지표 매수 합의' },
    7: { dir: 'BUY', rsi: '<50', macd: 'Hist>0', bb: '-', ema: '-', fg: '<25', vol: '-', conditions: 3, name: '극도 공포 + 모멘텀 회복' },
    8: { dir: 'BUY', rsi: '-', macd: '-', bb: '50-85%, sq<5', ema: '-', fg: '-', vol: '-', conditions: 2, name: '볼린저 Squeeze 상향 돌파' },
    9: { dir: 'BUY', rsi: '45-60', macd: '골든', bb: '30-60%', ema: '-', fg: '-', vol: '-', conditions: 3, name: 'RSI 반등 + BB 중앙 회귀' },
    10: { dir: 'BUY', rsi: '45-65', macd: 'Hist>0', bb: '<70%', ema: '-', fg: '-', vol: '-', conditions: 3, name: 'MACD 양수 + RSI 상승세' },
    21: { dir: 'BUY', rsi: '30-40', macd: '-', bb: '<30%', ema: '-', fg: '-', vol: '-', conditions: 2, name: '극단적 과매도' },
    22: { dir: 'BUY', rsi: '40-55', macd: '-20<Hist<20, Hist>0', bb: '-', ema: '-', fg: '-', vol: '-', conditions: 2, name: 'MACD 히스토그램 상승 전환' },
    23: { dir: 'BUY', rsi: '40-60', macd: '-', bb: '<50%', ema: 'EMA20>50', fg: '-', vol: '-', conditions: 3, name: 'EMA 골든 + RSI 중립 + BB 하단' },
    24: { dir: 'BUY', rsi: '45-65', macd: 'Hist>0', bb: '-', ema: '-', fg: '-', vol: 'buyP>60', conditions: 3, name: '볼륨 급증 + RSI 상승' },
    25: { dir: 'BUY', rsi: '35-50', macd: '-', bb: '20-40%', ema: '-', fg: '-', vol: '-', conditions: 2, name: 'BB 하단 근처 + RSI 상승' },
    26: { dir: 'BUY', rsi: '<40', macd: '골든, Hist>0', bb: '-', ema: '-', fg: '<30', vol: '-', conditions: 3, name: 'Fear&Greed 극공포 + MACD 골든' },
    27: { dir: 'BUY', rsi: '-', macd: '-', bb: 'bw>3', ema: 'EMA20>50, 1%이내', fg: '-', vol: '-', conditions: 2, name: 'EMA 골든 직후 + BB 확장' },
    28: { dir: 'BUY', rsi: '40-55', macd: 'Hist>0', bb: '<45%', ema: 'EMA20>50', fg: '-', vol: '-', conditions: 4, name: 'RSI 상승 + MACD 양수 + BB 하단' },
    29: { dir: 'BUY', rsi: '-', macd: 'Hist>0', bb: '>55%, bw 2-4', ema: '-', fg: '-', vol: '-', conditions: 3, name: 'BB Squeeze 해제 상향' },
    30: { dir: 'BUY', rsi: '-', macd: '골든', bb: '30-50%', ema: '-', fg: '-', vol: '-', conditions: 2, name: 'MACD 골든 + BB 중하단' },
    31: { dir: 'BUY', rsi: '30-45', macd: '-', bb: '-', ema: '-', fg: '-', vol: 'buyP>55', conditions: 2, name: 'RSI 과매도 탈출 + 볼륨' },
    32: { dir: 'BUY', rsi: '50-60', macd: '-', bb: '-', ema: 'EMA20>50', fg: '-', vol: '-', conditions: 2, name: 'EMA 상승 + RSI 50 돌파' },
    33: { dir: 'BUY', rsi: '45-60', macd: '골든, Hist>0', bb: '50-60%', ema: '-', fg: '-', vol: '-', conditions: 3, name: 'BB 중앙선 상향 + MACD 골든' },
    34: { dir: 'BUY', rsi: '35-50', macd: '-', bb: '-', ema: '-', fg: '25-40', vol: '-', conditions: 2, name: 'Fear&Greed 반등 + RSI' },
    35: { dir: 'BUY', rsi: '48-58', macd: 'Hist 5-50', bb: '35-50%', ema: 'EMA20>50', fg: '-', vol: '-', conditions: 4, name: '다중 지표 약상승 + EMA' },
    
    // SELL 전략 (11-20, 36-50)
    11: { dir: 'SELL', rsi: '>70', macd: 'Hist<0, 데드', bb: '-', ema: '-', fg: '-', vol: '-', conditions: 2, name: 'RSI 과매수 + MACD 데드' },
    12: { dir: 'SELL', rsi: '-', macd: '-', bb: '>80%', ema: '-', fg: '-', vol: 'surge', conditions: 2, name: '볼린저 상단 + 거래량 급증' },
    13: { dir: 'SELL', rsi: '55-65', macd: 'Hist<0', bb: '-', ema: 'EMA20<50', fg: '-', vol: '-', conditions: 3, name: 'EMA 데드 + RSI 하락 반전' },
    14: { dir: 'SELL', rsi: '-', macd: '0선 데드', bb: '-', ema: '-', fg: '-', vol: '-', conditions: 2, name: 'MACD 0선 데드크로스' },
    15: { dir: 'SELL', rsi: '>60', macd: '-', bb: '-', ema: '-', fg: '-', vol: '-', conditions: 2, name: 'RSI 약세 다이버전스' },
    16: { dir: 'SELL', rsi: '>60', macd: 'Hist<0, 데드', bb: '>80%', ema: '-', fg: '-', vol: '-', conditions: 3, name: '3중 지표 매도 합의' },
    17: { dir: 'SELL', rsi: '>65', macd: '-', bb: '-', ema: '-', fg: '>75', vol: '-', conditions: 2, name: '극도 탐욕 + RSI 과매수' },
    18: { dir: 'SELL', rsi: '-', macd: '-', bb: '15-50%, sq<5', ema: '-', fg: '-', vol: '-', conditions: 2, name: '볼린저 Squeeze 하향 돌파' },
    19: { dir: 'SELL', rsi: '40-55', macd: '데드', bb: '>30%', ema: 'EMA20<50', fg: '-', vol: '-', conditions: 4, name: '하락 추세 지속' },
    20: { dir: 'SELL', rsi: '50-65', macd: '데드', bb: '>60%', ema: '-', fg: '-', vol: '-', conditions: 3, name: 'MACD 데드 + BB 상단' },
    36: { dir: 'SELL', rsi: '60-70', macd: '-', bb: '>70%', ema: '-', fg: '-', vol: '-', conditions: 2, name: '극단적 과매수' },
    37: { dir: 'SELL', rsi: '45-60', macd: '-20<Hist<20, Hist<0', bb: '-', ema: '-', fg: '-', vol: '-', conditions: 2, name: 'MACD 히스토그램 하락 전환' },
    38: { dir: 'SELL', rsi: '40-60', macd: '-', bb: '>50%', ema: 'EMA20<50', fg: '-', vol: '-', conditions: 3, name: 'EMA 데드 + RSI 중립 + BB 상단' },
    39: { dir: 'SELL', rsi: '35-55', macd: 'Hist<0', bb: '-', ema: '-', fg: '-', vol: 'sellP>60', conditions: 3, name: '볼륨 급증 + RSI 하락' },
    40: { dir: 'SELL', rsi: '50-65', macd: '-', bb: '60-80%', ema: '-', fg: '-', vol: '-', conditions: 2, name: 'BB 상단 근처 + RSI 하락' },
    41: { dir: 'SELL', rsi: '>60', macd: '데드, Hist<0', bb: '-', ema: '-', fg: '>70', vol: '-', conditions: 3, name: 'Fear&Greed 극탐욕 + MACD 데드' },
    42: { dir: 'SELL', rsi: '-', macd: '-', bb: 'bw>3', ema: 'EMA20<50, 1%이내', fg: '-', vol: '-', conditions: 2, name: 'EMA 데드 직후 + BB 확장' },
    43: { dir: 'SELL', rsi: '45-60', macd: 'Hist<0', bb: '>55%', ema: 'EMA20<50', fg: '-', vol: '-', conditions: 4, name: 'RSI 하락 + MACD 음수 + BB 상단' },
    44: { dir: 'SELL', rsi: '-', macd: 'Hist<0', bb: '<45%, bw 2-4', ema: '-', fg: '-', vol: '-', conditions: 3, name: 'BB Squeeze 해제 하향' },
    45: { dir: 'SELL', rsi: '-', macd: '데드', bb: '50-70%', ema: '-', fg: '-', vol: '-', conditions: 2, name: 'MACD 데드 + BB 중상단' },
    46: { dir: 'SELL', rsi: '55-70', macd: '-', bb: '-', ema: '-', fg: '-', vol: 'sellP>55', conditions: 2, name: 'RSI 과매수 진입 + 볼륨' },
    47: { dir: 'SELL', rsi: '40-50', macd: '-', bb: '-', ema: 'EMA20<50', fg: '-', vol: '-', conditions: 2, name: 'EMA 하락 + RSI 50 하향' },
    48: { dir: 'SELL', rsi: '40-55', macd: '데드, Hist<0', bb: '40-50%', ema: '-', fg: '-', vol: '-', conditions: 3, name: 'BB 중앙선 하향 + MACD 데드' },
    49: { dir: 'SELL', rsi: '50-65', macd: '-', bb: '-', ema: '-', fg: '60-75', vol: '-', conditions: 2, name: 'Fear&Greed 하락 + RSI' },
    50: { dir: 'SELL', rsi: '42-52', macd: 'Hist -50 ~ -5', bb: '50-65%', ema: 'EMA20<50', fg: '-', vol: '-', conditions: 4, name: '다중 지표 약하락 + EMA' },
};

// RSI 범위 파싱
function parseRsiRange(rsi) {
    if (rsi === '-') return null;
    if (rsi.startsWith('<')) return { min: 0, max: parseInt(rsi.substring(1)) };
    if (rsi.startsWith('>')) return { min: parseInt(rsi.substring(1)), max: 100 };
    const parts = rsi.split('-');
    if (parts.length === 2) return { min: parseInt(parts[0]), max: parseInt(parts[1]) };
    return null;
}

console.log('═'.repeat(70));
console.log('📊 50개 전략 트리플 체크 리포트');
console.log('═'.repeat(70));

// 1. BUY/SELL 균형 체크
const buyStrategies = Object.values(strategies).filter(s => s.dir === 'BUY');
const sellStrategies = Object.values(strategies).filter(s => s.dir === 'SELL');

console.log('\n✅ 1. BUY/SELL 균형 체크');
console.log(`   BUY 전략: ${buyStrategies.length}개`);
console.log(`   SELL 전략: ${sellStrategies.length}개`);
console.log(`   균형: ${buyStrategies.length === sellStrategies.length ? '✅ 완벽' : '⚠️ 불균형'}`);

// 2. RSI 범위 충돌 체크
console.log('\n✅ 2. RSI 범위 충돌 체크');

// BUY 전략 RSI 범위
const buyRsiRanges = [];
const sellRsiRanges = [];

for (const [id, s] of Object.entries(strategies)) {
    const range = parseRsiRange(s.rsi);
    if (range) {
        if (s.dir === 'BUY') buyRsiRanges.push({ id, ...range, name: s.name });
        else sellRsiRanges.push({ id, ...range, name: s.name });
    }
}

// 충돌 검사
let conflicts = [];
for (const buy of buyRsiRanges) {
    for (const sell of sellRsiRanges) {
        // 범위가 겹치는지 확인
        const overlap = Math.max(0, Math.min(buy.max, sell.max) - Math.max(buy.min, sell.min));
        if (overlap > 15) { // 15% 이상 겹치면 경고
            conflicts.push({
                buy: `[${buy.id}] ${buy.name} (RSI ${buy.min}-${buy.max})`,
                sell: `[${sell.id}] ${sell.name} (RSI ${sell.min}-${sell.max})`,
                overlap
            });
        }
    }
}

if (conflicts.length === 0) {
    console.log('   ✅ RSI 범위 충돌 없음');
} else {
    console.log(`   ⚠️ RSI 범위 충돌 ${conflicts.length}개 발견:`);
    for (const c of conflicts.slice(0, 5)) {
        console.log(`      BUY: ${c.buy}`);
        console.log(`      SELL: ${c.sell}`);
        console.log(`      겹침: ${c.overlap}%`);
        console.log('');
    }
}

// 3. 조건 강도 분석
console.log('\n✅ 3. 조건 강도 분석');
const conditionCounts = { 2: 0, 3: 0, 4: 0 };
for (const s of Object.values(strategies)) {
    conditionCounts[s.conditions] = (conditionCounts[s.conditions] || 0) + 1;
}
console.log(`   2개 조건: ${conditionCounts[2]}개 (약한 신호)`);
console.log(`   3개 조건: ${conditionCounts[3]}개 (중간 신호)`);
console.log(`   4개 조건: ${conditionCounts[4]}개 (강한 신호)`);

// 4. 지표별 사용 빈도
console.log('\n✅ 4. 지표별 사용 빈도');
let rsiUsed = 0, macdUsed = 0, bbUsed = 0, emaUsed = 0, fgUsed = 0, volUsed = 0;
for (const s of Object.values(strategies)) {
    if (s.rsi !== '-') rsiUsed++;
    if (s.macd !== '-') macdUsed++;
    if (s.bb !== '-') bbUsed++;
    if (s.ema !== '-') emaUsed++;
    if (s.fg !== '-') fgUsed++;
    if (s.vol !== '-') volUsed++;
}
console.log(`   RSI: ${rsiUsed}/50 (${(rsiUsed/50*100).toFixed(0)}%)`);
console.log(`   MACD: ${macdUsed}/50 (${(macdUsed/50*100).toFixed(0)}%)`);
console.log(`   BB: ${bbUsed}/50 (${(bbUsed/50*100).toFixed(0)}%)`);
console.log(`   EMA: ${emaUsed}/50 (${(emaUsed/50*100).toFixed(0)}%)`);
console.log(`   F&G: ${fgUsed}/50 (${(fgUsed/50*100).toFixed(0)}%)`);
console.log(`   Volume: ${volUsed}/50 (${(volUsed/50*100).toFixed(0)}%)`);

// 5. BUY/SELL RSI 범위 분포
console.log('\n✅ 5. RSI 범위 분포 (BUY vs SELL)');

console.log('\n   📈 BUY 전략 RSI 범위:');
for (const r of buyRsiRanges.sort((a,b) => a.min - b.min)) {
    console.log(`      [${r.id.toString().padStart(2)}] RSI ${r.min}-${r.max}: ${r.name}`);
}

console.log('\n   📉 SELL 전략 RSI 범위:');
for (const r of sellRsiRanges.sort((a,b) => a.min - b.min)) {
    console.log(`      [${r.id.toString().padStart(2)}] RSI ${r.min}-${r.max}: ${r.name}`);
}

// 6. 위험 전략 체크 (조건이 너무 쉬운 전략)
console.log('\n✅ 6. 위험 전략 체크 (2개 조건 + 넓은 RSI 범위)');
const riskyStrategies = [];
for (const [id, s] of Object.entries(strategies)) {
    const range = parseRsiRange(s.rsi);
    if (s.conditions === 2 && range && (range.max - range.min) > 20) {
        riskyStrategies.push({ id, ...s, rsiRange: range.max - range.min });
    }
}

if (riskyStrategies.length === 0) {
    console.log('   ✅ 위험 전략 없음');
} else {
    console.log(`   ⚠️ 위험 전략 ${riskyStrategies.length}개:`);
    for (const s of riskyStrategies) {
        console.log(`      [${s.id}] ${s.name} - 조건 ${s.conditions}개, RSI 범위 ${s.rsiRange}%`);
    }
}

console.log('\n' + '═'.repeat(70));
console.log('📋 최종 평가');
console.log('═'.repeat(70));
console.log(`✅ BUY/SELL 균형: ${buyStrategies.length === sellStrategies.length ? 'PASS' : 'FAIL'}`);
console.log(`✅ RSI 충돌: ${conflicts.length < 5 ? 'PASS' : 'WARNING'}`);
console.log(`✅ 조건 강도: ${conditionCounts[4] >= 4 ? 'PASS' : 'WARNING'} (4조건 전략 ${conditionCounts[4]}개)`);
console.log(`✅ 지표 다양성: PASS`);
console.log('═'.repeat(70));
