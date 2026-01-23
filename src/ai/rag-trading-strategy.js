/**
 * RAG 기반 트레이딩 전략 시스템
 * 
 * 장점:
 * 1. 여러 전략을 문서로 관리
 * 2. 필요한 전략만 검색해서 사용 (토큰 절약)
 * 3. 전략 추가/수정 용이
 * 4. 비용 효율적
 */

import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

export class RAGTradingStrategy {
    constructor() {
        // Supabase (벡터 DB)
        this.supabase = createClient(
            process.env.SUPABASE_URL,
            process.env.SUPABASE_KEY
        );
        
        // OpenAI
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
    }

    /**
     * 전략 초기화 - 한 번만 실행
     */
    async initializeStrategies() {
        const strategies = [
            {
                name: 'RSI 역배열 전략',
                description: 'RSI가 과매도/과매수 상태에서 가격과 반대로 움직일 때',
                content: `
# RSI 역배열 전략 (RSI Divergence)

## 진입 조건

### 강세 역배열 (Bullish Divergence)
- 가격: 저점이 낮아지는 중
- RSI: 저점이 높아지는 중 (바닥 다지기)
- 신호: 강력한 매수 시그널
- 확인: RSI가 30 이하에서 발생 시 더욱 강력

### 약세 역배열 (Bearish Divergence)
- 가격: 고점이 높아지는 중
- RSI: 고점이 낮아지는 중 (힘이 빠짐)
- 신호: 강력한 매도 시그널
- 확인: RSI가 70 이상에서 발생 시 더욱 강력

## 손절/익절
- 손절: 최근 저점/고점 아래/위
- 익절: 1:2 리스크 리워드

## 주의사항
- 강한 트렌드에서는 역배열이 여러 번 나올 수 있음
- 다른 지표로 확인 필수 (MACD, 거래량)
`
            },
            {
                name: '볼린저 밴드 Squeeze 전략',
                description: '볼린저 밴드가 좁아진 후 브레이크아웃',
                content: `
# 볼린저 밴드 Squeeze 전략

## 원리
밴드가 좁아지면 = 변동성 감소 = 곧 큰 움직임

## 진입 조건
1. Squeeze 확인: 밴드 폭이 최근 20일 최저
2. 브레이크아웃 대기: 상단/하단 돌파
3. 거래량 확인: 평균 대비 1.5배 이상

### 매수
- 상단 밴드 돌파
- 거래량 급증
- RSI > 50 (상승 모멘텀)

### 매도
- 하단 밴드 하락
- 거래량 급증
- RSI < 50 (하락 모멘텀)

## 손절/익절
- 손절: 반대편 밴드
- 익절: 밴드 폭의 2배 지점

## 가짜 신호 회피
- Squeeze 최소 10일 이상 지속 필요
- 거래량 없는 돌파는 무시
`
            },
            {
                name: 'MACD 크로스오버 전략',
                description: 'MACD 라인과 시그널 라인의 교차',
                content: `
# MACD 크로스오버 전략

## 기본 원리
- MACD > Signal = 상승 모멘텀
- MACD < Signal = 하락 모멘텀

## 골든 크로스 (매수)
1. MACD가 Signal을 상향 돌파
2. 0선 아래에서 발생 시 더 강력
3. 히스토그램이 양수로 전환

## 데드 크로스 (매도)
1. MACD가 Signal을 하향 돌파
2. 0선 위에서 발생 시 더 강력
3. 히스토그램이 음수로 전환

## 고급 기법

### 0선 크로스
- MACD가 0선 상향 돌파 = 매우 강한 매수
- MACD가 0선 하향 돌파 = 매우 강한 매도

### 히스토그램 분석
- 히스토그램 증가 = 모멘텀 강화
- 히스토그램 감소 = 모멘텀 약화
- 방향 전환 시 = 조기 경고 신호

## 손절/익절
- 손절: 최근 스윙 저점/고점
- 익절: 1:3 리스크 리워드

## 주의사항
- 횡보장에서 가짜 신호 많음
- 트렌드 확인 필수 (EMA 활용)
`
            },
            {
                name: 'EMA 크로스 트렌드 전략',
                description: 'EMA20/50/200을 이용한 트렌드 추종',
                content: `
# EMA 크로스 트렌드 전략

## 골든 크로스 (강세)
- EMA20 > EMA50 > EMA200
- 모든 EMA가 상승 중
- 신호: 강한 업트렌드

### 진입 타이밍
1. EMA20이 EMA50 상향 돌파
2. 가격이 모든 EMA 위에 위치
3. 거래량 증가 확인

## 데드 크로스 (약세)
- EMA20 < EMA50 < EMA200
- 모든 EMA가 하락 중
- 신호: 강한 다운트렌드

### 진입 타이밍
1. EMA20이 EMA50 하향 돌파
2. 가격이 모든 EMA 아래 위치
3. 거래량 증가 확인

## 손절/익절
- 손절: EMA50 이탈
- 익절: 트렌드가 유지되는 동안 홀딩

## 주의사항
- 레인징 장에서는 사용 금지
- 늦은 진입 위험 (Lagging 지표)
`
            },
            {
                name: '거래량 분석 전략',
                description: '거래량 급증을 이용한 단기 매매',
                content: `
# 거래량 분석 전략

## 원리
거래량 = 시장 참여자의 확신도

## 거래량 급증 패턴

### 상승 중 거래량 급증
- 의미: 강한 매수 압력
- 행동: 추가 매수 고려
- 확인: 가격이 저항선 돌파

### 하락 중 거래량 급증
- 의미: 공포 매도
- 행동: 반등 매수 준비
- 확인: 망치형 캔들 출현

### 상승 중 거래량 감소
- 의미: 힘이 빠짐
- 행동: 매도 준비
- 확인: 도지 캔들 출현

## 거래량 프로필 분석
- 평균 대비 2배 이상 = 중요한 움직임
- 평균 대비 3배 이상 = 트렌드 전환 가능

## 주의사항
- 거래량만으로 판단 금지
- 가격 행동과 함께 확인 필수
`
            }
        ];

        console.log('🔄 전략 임베딩 중...');

        for (const strategy of strategies) {
            // OpenAI 임베딩 생성
            const embedding = await this.createEmbedding(strategy.content);
            
            // Supabase에 저장
            await this.supabase
                .from('trading_strategies')
                .upsert({
                    name: strategy.name,
                    description: strategy.description,
                    content: strategy.content,
                    embedding: embedding
                });
            
            console.log(`✅ "${strategy.name}" 저장 완료`);
        }

        console.log('\n✨ 모든 전략 초기화 완료!\n');
    }

    /**
     * 텍스트를 벡터로 변환
     */
    async createEmbedding(text) {
        const response = await this.openai.embeddings.create({
            model: 'text-embedding-3-small',
            input: text,
        });
        
        return response.data[0].embedding;
    }

    /**
     * 현재 시장 상황에 맞는 전략 검색
     */
    async searchRelevantStrategies(marketData, topK = 2) {
        // 시장 상황을 텍스트로 요약
        const marketSummary = this.summarizeMarket(marketData);
        
        // 쿼리 임베딩 생성
        const queryEmbedding = await this.createEmbedding(marketSummary);
        
        // 유사도 검색
        const { data, error } = await this.supabase.rpc('match_strategies', {
            query_embedding: queryEmbedding,
            match_threshold: 0.5,
            match_count: topK
        });

        if (error) {
            console.error('전략 검색 오류:', error);
            return [];
        }

        console.log(`\n🔍 관련 전략 ${data.length}개 발견:`);
        data.forEach((s, i) => {
            console.log(`  ${i + 1}. ${s.name} (유사도: ${(s.similarity * 100).toFixed(1)}%)`);
        });

        return data;
    }

    /**
     * 시장 상황 요약
     */
    summarizeMarket(marketData) {
        const { indicators, signals, volumeProfile } = marketData;
        
        return `
현재 시장 상황:
- RSI: ${indicators.rsi?.toFixed(2)} (${signals.rsi})
- MACD: ${signals.macd}
- 볼린저 밴드: ${indicators.bollingerBands?.squeeze ? 'Squeeze 상태' : '정상'}, 위치 ${indicators.bollingerBands?.position?.toFixed(1)}%
- 추세: ${signals.trend} (EMA20: ${indicators.ema20}, EMA50: ${indicators.ema50})
- 거래량: ${volumeProfile?.trend} (${volumeProfile?.surge ? '급증' : '정상'})
`;
    }

    /**
     * RAG 기반 트레이딩 분석
     */
    async analyze(marketData) {
        // 1. 관련 전략 검색
        const relevantStrategies = await this.searchRelevantStrategies(marketData, 2);
        
        if (relevantStrategies.length === 0) {
            console.log('⚠️  적합한 전략을 찾지 못했습니다. 기본 분석 사용...');
            return this.basicAnalysis(marketData);
        }

        // 2. 짧은 프롬프트 + 검색된 전략만 사용
        const prompt = this.buildRAGPrompt(marketData, relevantStrategies);

        // 3. AI 분석
        const response = await this.openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'system',
                    content: `당신은 전문 트레이더입니다. 주어진 전략을 참고하여 분석하세요.

응답은 JSON 형식:
{
  "decision": "BUY" | "SELL",
  "confidence": 0-100,
  "appliedStrategy": "사용된 전략 이름",
  "reasoning": "상세 분석",
  "stopLoss": 숫자,
  "takeProfit": [숫자 배열]
}`
                },
                { role: 'user', content: prompt }
            ],
            temperature: 0.2,
            response_format: { type: "json_object" }
        });

        const analysis = JSON.parse(response.choices[0].message.content);
        
        // 사용된 전략 정보 추가
        analysis.strategiesUsed = relevantStrategies.map(s => s.name);
        
        return analysis;
    }

    /**
     * RAG 프롬프트 생성 (짧음!)
     */
    buildRAGPrompt(marketData, strategies) {
        const { symbol, currentPrice, indicators, signals } = marketData;
        
        return `
# 시장 데이터
심볼: ${symbol}
가격: $${currentPrice}
RSI: ${indicators.rsi?.toFixed(2)}
MACD: ${signals.macd}
추세: ${signals.trend}

# 적용 가능한 전략
${strategies.map((s, i) => `
## 전략 ${i + 1}: ${s.name}
${s.content}
`).join('\n')}

위 전략 중 현재 시장에 가장 적합한 전략을 선택하고 분석하세요.
`;
    }

    /**
     * 기본 분석 (전략 못 찾았을 때)
     */
    basicAnalysis(marketData) {
        const { signals } = marketData;
        
        return {
            decision: signals.overall,
            confidence: 50,
            appliedStrategy: '기본 분석',
            reasoning: '적합한 전략을 찾지 못해 기본 지표 분석 사용',
            stopLoss: 0,
            takeProfit: [],
            strategiesUsed: []
        };
    }
}
