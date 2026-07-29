import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { exposure } from "@/content/site";

export function Exposure() {
  return (
    <Section className="bg-graphite">
      <Container size="wide">
        <ScrollReveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {exposure.statement}
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-white/80">
            {exposure.support}
          </p>
        </ScrollReveal>

        <ScrollReveal delayMs={120} className="mt-10 max-w-2xl">
          <p className="font-display text-xl italic leading-relaxed text-cool-gray sm:text-2xl">
            {exposure.validation}
          </p>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
