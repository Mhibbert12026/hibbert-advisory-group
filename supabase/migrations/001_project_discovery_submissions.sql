-- Run in Supabase SQL Editor (or via Supabase CLI) before using /schedule

create table if not exists public.project_discovery_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  project_type text not null,
  company text not null,
  budget_range text not null,
  timeline text not null,
  goals text not null,
  challenges text not null,
  recommended_services text[] not null default '{}',
  summary_text text not null,
  calendly_scheduled boolean not null default false
);

create index if not exists project_discovery_submissions_created_at_idx
  on public.project_discovery_submissions (created_at desc);

alter table public.project_discovery_submissions enable row level security;

-- No public policies: inserts are performed server-side with the service role key.
