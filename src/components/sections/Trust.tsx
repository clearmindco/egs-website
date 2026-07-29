import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trust } from "@/content/site";

export function Trust() {
  return (
    <Section className="bg-graphite">
      <Container size="wide">
        <ScrollReveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {trust.statement}
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-cool-gray">
            We call it the{" "}
            <span className="text-electric-blue">Growth Engine™</span> — the
            connected sequence where a business earns trust, captures the
            opportunity, or loses it. No single day ever shows you the whole
            pattern. Diagnosing it is the first move, before anything gets
            rebuilt.
          </p>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
