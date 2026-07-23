import EgsHero from "@/components/hero/EgsHero";

const PILLARS = [
  {
    title: "Systems",
    description: "We build scalable systems that create order and clarity.",
  },
  {
    title: "Precision",
    description: "Every detail engineered for measurable results.",
  },
  {
    title: "Performance",
    description: "We execute with discipline so you can grow with confidence.",
  },
];

export default function Home() {
  return (
    <main>
      <EgsHero />

      <section id="about" className="bg-[#0B0B0B] px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="border-t border-[#1F2328] pt-6">
              <h2 className="text-sm font-semibold tracking-[0.2em] text-white">{pillar.title.toUpperCase()}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
