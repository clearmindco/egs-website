import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { primaryCta, secondaryCta } from "@/content/site";

export function Hero() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container className="flex flex-col items-start gap-8">
        <p className="font-sans text-sm font-semibold uppercase tracking-widest text-electric-blue">
          Business Performance Company
        </p>
        <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Better systems create businesses that perform better.
        </h1>
        <p className="max-w-2xl font-sans text-lg leading-relaxed text-cool-gray sm:text-xl">
          Elite Growth Strategies helps established local service businesses
          fix the disconnected systems that quietly cap their growth — so
          leads get answered, jobs get won, and the business stops depending
          on the owner being everywhere at once.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
