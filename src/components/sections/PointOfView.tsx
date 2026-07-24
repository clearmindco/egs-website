import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function PointOfView() {
  return (
    <Section id="point-of-view">
      <Container>
        <div className="max-w-2xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-electric-blue">
            The EGS Point of View
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Better Systems Create Better Businesses™
          </h2>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <p className="font-sans text-lg leading-relaxed text-cool-gray">
            Most local service businesses don&apos;t have a marketing
            problem, a website problem, or a follow-up problem in isolation —
            they have a systems problem. A new ad campaign can&apos;t fix a
            slow follow-up process. A better website can&apos;t fix
            inconsistent reviews. Isolated tactics create isolated results.
          </p>
          <p className="font-sans text-lg leading-relaxed text-cool-gray">
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
