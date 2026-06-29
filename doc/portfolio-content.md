# Portfolio Site — Source Content

> Source material for building a personal website. Organized by site section so you can
> drop content straight into a landing page (Vercel/Next.js/static).
> Written in **English** by default — see "Decisions you still need to make" at the bottom
> for why, and what to verify before publishing.

---

## 0. Identity / Meta

- **Name:** Mark Hung (洪偉森 / Wei-Sen Hung)
- **Role:** Backend Software Engineer
- **Location:** Taipei, Taiwan
- **GitHub:** https://github.com/MarkHungBuddha
- **LinkedIn:** https://linkedin.com/in/markhung384
- **Email:** _(add the one you use for applications)_

**Site `<title>` / SEO:** `Mark Hung — Backend Engineer | Distributed Systems`
**Meta description:** `Backend engineer in Taipei building high-throughput, event-driven distributed systems with Java/Spring Boot, Kafka, and AWS. Moving toward Go and SRE.`

---

## 1. Hero

**Headline:**
> Backend engineer building high-throughput, event-driven systems.

**Subhead:**
> I design and operate distributed backends that stay fast and reliable under load —
> Java/Spring Boot, Kafka, Redis, Kubernetes on AWS. Currently expanding into Go and SRE.

**CTAs:** `View Projects` · `GitHub` · `LinkedIn` · `Résumé (PDF)`

---

## 2. About

I'm a backend engineer based in Taipei with a focus on **distributed systems that handle real traffic** — high QPS, asynchronous event pipelines, and the observability needed to keep them healthy.

At momo (Taiwan's largest e-commerce platform), I work on services running at ~50K QPS and led an event-driven redesign that cut a core flow's latency from minutes to seconds. Before that I built banking CRM systems in a regulated environment.

I care about the parts of engineering that don't show up in a demo: what happens under load, how a system degrades, how you find out before your users do. Lately I've been moving deliberately toward **Go and SRE/DevOps** — infrastructure as code, observability, and owning systems end-to-end rather than just shipping features.

Outside work I build side projects to scratch my own itches (baseball schedules, retirement simulations) and follow CPBL closely enough to have a sabermetrics repo about it.

---

## 3. Experience

### Software Engineer — Fubon Media Technology (momo)
*Feb 2025 – Present · Taipei*

Taiwan's largest e-commerce platform.

- Re-architected a core flow from synchronous to **event-driven (Kafka + MongoDB)**, cutting end-to-end latency from **~3–5 minutes to ~4 seconds**.
- Optimized a hot read path with **Redis**, reducing response time from **~1000ms to <100ms**.
- Built observability with **Prometheus + Grafana** to surface latency and error-rate regressions before they hit users.
- Worked on services operating at **~50K QPS** in a Kubernetes / AWS environment.
- Validated changes under load with **K6** load testing; refactored access control using **RBAC / AOP**.

> _Stack: Java, Spring Boot, Kafka, MongoDB, Redis, Kubernetes, AWS, Prometheus, Grafana_

### Java Software Engineer — BI Info Co.
*Dec 2023 – Nov 2024 · Taiwan*

- Built and maintained **banking CRM** systems in a regulated financial environment.
- Delivered backend features in **Java / Spring Boot** against enterprise requirements.

> _Stack: Java, Spring Boot, relational databases_

---

## 4. Projects

> This is your strongest differentiator — both are **live, operable products**, not just repos.
> Lead with these.

### TravelCal — Sports & travel schedule platform
**Live:** https://travel-schedule-helper.com

A schedule aggregation platform for sports fans planning trips, covering **CPBL, NPB, J.League, B.League, SV.LEAGUE, TPBL, PLG, and JRA**. Built from zero and deployed to production.

- **Backend:** Go, PostgreSQL with **PostGIS** for geospatial queries.
- **Frontend:** React.
- Demonstrates end-to-end ownership: data modeling, API design, deployment, and a real domain (sports/travel) I actually use.

> _Stack: Go, PostgreSQL/PostGIS, React_

### Monte Carlo Retirement / Life Simulator
**Live:** https://montecarlosimulation.games

An interactive life-simulation game that runs **Monte Carlo retirement simulations** in the browser, modeling careers, immigration, housing, and random life events across multiple countries.

- **Engine:** Block Bootstrap simulation running in **Web Workers** to keep the UI responsive.
- **Stack:** TypeScript, React, Vite, Zustand for state.
- Occupation/immigration/housing data modeled across Taiwan, USA, and Japan.

> _Stack: TypeScript, React, Vite, Zustand, Web Workers_

### CPBL Sabermetrics
**Repo:** _(add the GitHub link)_

A data project applying sabermetric analysis to Taiwan's professional baseball league (CPBL) — reflects a long-standing interest in baseball analytics and working with real datasets.

---

## 5. Skills

**Languages**
Java · Go _(actively learning)_ · TypeScript · JavaScript · SQL

**Backend & Frameworks**
Spring Boot · REST APIs · Event-driven architecture

**Data & Messaging**
Kafka · MongoDB · Redis · PostgreSQL / PostGIS

**Infra & Ops**
Kubernetes · AWS · Prometheus · Grafana · K6 · Terraform _(learning)_ · IaC

**Practices**
Distributed systems · High-throughput services · Observability · Load testing · Code review

> _Honest framing: list Go/Terraform under "learning" rather than as core. Recruiters
> respect the distinction; overclaiming gets exposed in interviews._

---

## 6. Education

**Tamkang University (淡江大學)** — B.S., Computer Science & Information Engineering (CSIE)

---

## 7. Contact / Footer

- GitHub: https://github.com/MarkHungBuddha
- LinkedIn: https://linkedin.com/in/markhung384
- Email: _(add)_
- Based in Taipei · Open to backend / SRE roles

---

## Decisions you still need to make (read before publishing)

1. **Language = English (my default choice).** A portfolio serves the broadest audience in
   English, and it fits your overseas targets (Zalando, EU Blue Card, etc.) better than
   Chinese. The cost: Taiwan-local + Mandarin-first applications (like Nitra) might value a
   ZH version. Cheapest fix — ship English, add a `/zh` toggle later if a specific app needs it.

2. **Verify every metric before it goes public.** The numbers above (3–5 min → 4 sec,
   1000ms → <100ms, 50K QPS) come from your own CV narrative. Once they're on a public URL,
   anyone can ask you to defend them in detail. Make sure you can walk through *how* you
   measured each one. If any is shakier than it reads, soften it now, not in the interview.

3. **Do NOT put TOEIC 610 or "B1–B2" on the site.** I left it off deliberately. A low score
   listed publicly only hurts you; absence is neutral. Let your written English on the page do
   the talking instead.

4. **Keep personal/financial details off it.** I excluded age, height, rent, net worth, etc.
   The baseball/sabermetrics angle stays because it's a real engineering signal (and humanizes
   you); the rest is private.

5. **Add the CPBL repo link** — it's a genuine asset and currently a blank in section 4.

6. **Fix the `http://` → `https://`** on your LinkedIn/GitHub everywhere, including the Nitra form.

---

## A premise worth challenging

You're building this site primarily to fill Nitra's "Portfolio URL *" field. Fair — but think
about who you're *really* building it for. Nitra is one fast-moving Plan B startup. This site is
a **Project Kuroshio asset** that every future overseas application will reuse. So don't optimize
it for Nitra's healthcare-fintech-startup taste; optimize it for the durable story that gets you
to Berlin/Amsterdam/Singapore: *"I build distributed systems that survive production load."*
That story is in the Experience and Projects sections above — make sure the site's design and
ordering put **those** first, not a generic "about me."
