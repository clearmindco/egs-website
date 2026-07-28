import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function PointOfView() {
  return (
    <Section id="point-of-view">
      <Container size="wide">
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-electric-blue">
          The EGS Point of View
        </p>

        <div className="mt-6 border-l-2 border-electric-blue pl-6 sm:pl-10">
          <h2 className="font-display text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-6xl">
            Better Systems Create Better Businesses™
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <p className="font-sans text-lg leading-relaxed text-cool-gray lg:col-span-6 lg:col-start-1">
            Most local service businesses don&apos;t have a marketing
            problem, a website problem, or a follow-up problem in isolation —
            they have a systems problem. A new ad campaign can&apos;t fix a
            slow follow-up process. A better website can&apos;t fix
            inconsistent reviews. Isolated tactics create isolated results.
          </p>
          <p className="font-sans text-lg leading-relaxed text-cool-gray lg:col-span-5 lg:col-start-8">
            EGS takes a different approach. We diagnose the connected system
            behind your growth — from how you&apos;re found, to how you earn
            trust, to how you win and keep the job — and improve it as one
            working system, not a list of disconnected services. That
            thinking is what the EGS Growth Engine™ is built on.
          </p>
        </div>
      </Container>
    </Section>
  );
}
