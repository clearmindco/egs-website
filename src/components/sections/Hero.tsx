import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { primaryCta, secondaryCta, siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container
        size="wide"
        className="reveal flex items-center justify-between border-b border-slate-border py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-cool-gray"
      >
        <span>{siteConfig.name}</span>
        <span>Business Performance Company — 01</span>
      </Container>

      <Container
        size="wide"
        className="grid grid-cols-1 gap-y-12 pb-24 pt-16 sm:pb-32 sm:pt-24 lg:grid-cols-12 lg:items-end lg:gap-x-8 lg:pb-40 lg:pt-32"
      >
        <h1 className="reveal font-display text-5xl font-bold leading-[1.05] tracking-tight text-white [animation-delay:120ms] sm:text-6xl lg:col-span-8 lg:text-7xl xl:text-8xl">
          <span className="text-electric-blue">Better systems</span> create
          businesses that perform better.
        </h1>

        <div className="reveal flex flex-col gap-8 [animation-delay:260ms] lg:col-span-4 lg:col-start-9 lg:pb-2">
          <p className="font-sans text-lg leading-relaxed text-white/80">
            Elite Growth Strategies helps established local service
            businesses fix the disconnected systems that quietly cap their
            growth — so leads get answered, jobs get won, and the business
            stops depending on the owner being everywhere at once.
          </p>
          <div className="flex flex-col gap-4">
            <Button href={primaryCta.href} variant="primary">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
