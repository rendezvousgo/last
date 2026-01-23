-- Supabase 벡터 DB 설정

-- pgvector 확장 활성화
create extension if not exists vector;

-- 트레이딩 전략 테이블
create table trading_strategies (
  id bigserial primary key,
  name text not null,
  description text,
  content text not null,
  embedding vector(1536), -- OpenAI text-embedding-3-small 차원
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 벡터 유사도 검색을 위한 인덱스
create index on trading_strategies using ivfflat (embedding vector_cosine_ops)
with (lists = 100);

-- 유사도 검색 함수
create or replace function match_strategies(
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  name text,
  description text,
  content text,
  similarity float
)
language sql stable
as $$
  select
    trading_strategies.id,
    trading_strategies.name,
    trading_strategies.description,
    trading_strategies.content,
    1 - (trading_strategies.embedding <=> query_embedding) as similarity
  from trading_strategies
  where 1 - (trading_strategies.embedding <=> query_embedding) > match_threshold
  order by trading_strategies.embedding <=> query_embedding
  limit match_count;
$$;
