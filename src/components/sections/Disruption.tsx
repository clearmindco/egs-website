import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { disruption } from "@/content/site";

export function Disruption() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container size="wide">
        <ScrollReveal className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {disruption.statement}
          </h1>
          <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-white/80">
            {disruption.support}
          </p>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
