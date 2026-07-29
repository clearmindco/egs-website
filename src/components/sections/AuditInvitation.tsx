import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { action, primaryCta } from "@/content/site";

export function AuditInvitation() {
  return (
    <Section className="bg-graphite py-24 sm:py-32">
      <Container size="wide">
        <ScrollReveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {action.statement}
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-cool-gray">
            {action.support}
          </p>

          <ul className="mt-8 space-y-2 font-sans text-base text-white/80">
            {action.examines.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-electric-blue" aria-hidden="true">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-cool-gray">
            {action.after}
          </p>

          <div className="mt-10">
            <Button href={primaryCta.href} variant="primary">
              {primaryCta.label}
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
