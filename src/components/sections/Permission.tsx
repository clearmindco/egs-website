import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { permission } from "@/content/site";

export function Permission() {
  return (
    <Section className="py-24 sm:py-32">
      <Container size="wide">
        <ScrollReveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {permission.statement}
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-cool-gray">
            {permission.support}
          </p>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
