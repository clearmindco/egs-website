# EGS Website — Handoff

**Branch:** `claude/egs-website-onboarding-sprint-1-z33p65`
**Status as of this handoff:** all work committed and pushed. Working tree clean, local branch matches remote. Not deployed anywhere public.

## What's done

**Project setup**
- Next.js (App Router) + TypeScript + Tailwind CSS v4, hosted target Vercel, per Technology Standards.
- Design tokens locked in `src/app/globals.css`: Midnight `#0F1115`, Graphite `#171A21`, Cool Gray `#A8B0BD`, Slate Border `#2A2F3A`, Electric Blue `#3B82F6` / hover `#60A5FA`.
- Typography: Fraunces (editorial display, emotional/headline moments) + Manrope (body/UI, quiet workhorse). Inter was tried early and dropped — it worked against the "editorial, not generic SaaS" direction.
- Reusable layout: `Header`, `Footer`, `Container` (with `wide` size variant), `Section`, `Button`, `Logo` (text-based wordmark placeholder — swappable without layout change once the real logo asset exists), `ScrollReveal` (IntersectionObserver-based, one-shot fade+rise, respects `prefers-reduced-motion`).

**Skills installed this session** (project-scoped at `.claude/skills/`, global ones at `~/.claude/skills/` so they won't travel with the repo)
- `emil-design-eng` (global) — Emil Kowalski's animation/polish philosophy. Applied: shared `--ease-snappy` easing token, tuned button press feedback, fixed the mobile nav's missing open/close transition.
- `impeccable` (project-scoped, committed) — design critique/polish commands. Ran its `init` flow and wrote `PRODUCT.md` (sourced from the already-approved Executive Brief/Brand Bible, not invented). Used for a typography/color refinement pass.
- `ui-ux-pro-max` (global) — design pattern/palette reference database, used for cross-checking direction, not as source of truth over the brand's own locked system.

**Homepage — full rebuild, twice**
1. First pass ("Editorial Authority"): asymmetric layout, oversized Fraunces headlines, replaced a generic centered-hero/card-grid structure.
2. Second, current pass (**this is what needs your review**): the homepage opening was rebuilt again around a locked strategic foundation you provided — a six-moment sequence replacing the old Hero/Hidden Problem/Point of View sections entirely:
   - **Disruption** → **Exposure** → **Reframe** → **Trust** → **Permission** → **Action**
   - Core insight the sequence is built on: *"Your business already has a system. Right now, too much of it depends on you."*
   - No CTA appears until the final (Action) moment — a visitor who wants to convert immediately can still use the persistent nav button.
   - No fabricated proof, no stock imagery, no card grids, no eyebrow labels/section numerals (removed from the earlier pass).
   - All copy is original, written to the brief's requirements, grounded in the approved Brand Bible/Executive Brief material.

## Pending your review

**The six-moment homepage is the main open item.** Everything else in this handoff is settled/shipped; this is the one piece waiting on your reaction before any further building happens. Relevant files:
- `src/components/sections/Disruption.tsx`
- `src/components/sections/Exposure.tsx`
- `src/components/sections/Reframe.tsx`
- `src/components/sections/Trust.tsx`
- `src/components/sections/Permission.tsx`
- `src/components/sections/AuditInvitation.tsx`
- `src/content/site.ts` (all copy)

Verified so far: typecheck, lint, and production build all clean; visual pass at desktop and mobile; scroll-triggered reveals confirmed firing correctly under realistic scrolling; zero console errors. Not yet validated: your read on whether the strategy actually lands, and real-device/real-user testing.

## Explicitly not done yet

- `/audit` route — the primary CTA links there but the page doesn't exist yet (404 if visited). Not required for this review pass.
- Growth Engine detail section, "What We Improve," client journey, footer legal pages (privacy/terms) — none of the "Act Two" homepage content below the six-moment opening has been built.
- Analytics (GA4), form routing to Javier's inbox + EGS Opportunities logging — decided in an earlier round, not implemented.
- Production logo — still the text wordmark placeholder.
- No deployment of any kind. Everything lives only on this branch.

## Standing constraints (carried through every change so far)

- No deploy to production without explicit approval.
- No fabricated clients, testimonials, stats, or results — ever.
- Brand tokens (colors, Fraunces/Manrope pairing) are locked; any further change to them is a brand-direction decision, not a routine one.
- Stack reuse: Next.js/TypeScript/Tailwind/Vercel, no new framework or styling system without a real reason.

## Next steps (after your feedback on the homepage)

1. Revise or approve the six-moment sequence.
2. If approved: decide what comes after Action in the scroll — Growth Engine detail, proof/methodology expansion, or straight to footer.
3. Build the `/audit` page the CTA points to.
4. Wire up form handling + GA4 per the earlier-agreed plan.
