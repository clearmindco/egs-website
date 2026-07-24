import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { hiddenProblems } from "@/content/site";

export function HiddenProblem() {
  return (
    <Section id="hidden-problem" className="bg-graphite">
      <Container>
        <div className="max-w-2xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-electric-blue">
            The Hidden Problem
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            It isn&apos;t a lack of effort. It&apos;s a lack of connected
            systems.
          </h2>
          <p className="mt-4 font-sans text-lg leading-relaxed text-cool-gray">
            Most established local service businesses aren&apos;t struggling
            because they aren&apos;t working hard enough. They&apos;re
            struggling because the systems behind the business were never
            built to work together.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {hiddenProblems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-lg border border-slate-border bg-midnight/60 p-6"
            >
              <h3 className="font-heading text-lg font-semibold text-white">
                {problem.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-cool-gray">
                {problem.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
