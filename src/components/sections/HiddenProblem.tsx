import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { hiddenProblemClosing, hiddenProblems } from "@/content/site";

export function HiddenProblem() {
  return (
    <Section id="hidden-problem" className="bg-graphite">
      <Container size="wide">
        <ScrollReveal className="max-w-2xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-electric-blue">
            The Hidden Problem
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            It isn&apos;t a lack of effort. It&apos;s a lack of connected
            systems.
          </h2>
        </ScrollReveal>

        <div className="mt-16 border-t border-slate-border">
          {hiddenProblems.map((problem, index) => (
            <ScrollReveal key={problem.index} delayMs={index * 70}>
              <div className="grid grid-cols-1 gap-4 border-b border-slate-border py-10 sm:grid-cols-12 sm:gap-8">
                <span className="font-display text-4xl font-bold text-electric-blue/35 sm:col-span-2 sm:text-5xl">
                  {problem.index}
                </span>
                <p className="font-display text-2xl italic font-medium text-white sm:col-span-4 sm:text-3xl">
                  {problem.line}
                </p>
                <p className="font-sans text-base leading-relaxed text-cool-gray sm:col-span-6">
                  {problem.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="mt-16 max-w-2xl font-display text-xl italic leading-relaxed text-white sm:text-2xl">
            {hiddenProblemClosing}
          </p>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
