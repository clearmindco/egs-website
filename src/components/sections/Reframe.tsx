import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { reframe } from "@/content/site";

export function Reframe() {
  return (
    <Section id="reframe" className="py-28 sm:py-40">
      <Container size="wide">
        <ScrollReveal className="max-w-4xl">
          <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl">
            <span className="text-electric-blue">Your business</span> already
            has a system. Right now, too much of it depends on you.
          </h2>
          <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-cool-gray">
            {reframe.support}
          </p>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
