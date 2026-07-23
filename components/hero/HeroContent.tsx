interface HeroContentProps {
  visible: boolean;
}

export default function HeroContent({ visible }: HeroContentProps) {
  return (
    <div
      aria-hidden={!visible}
      className={`flex flex-col items-start gap-6 text-left transition-opacity duration-700 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
        We build businesses
        <br />
        that <span className="text-[#2F6BFF]">perform better.</span>
      </h1>

      <p className="max-w-md text-base leading-relaxed text-white/70">
        We help ambitious service businesses create order from complexity through better systems, sharper strategy,
        and disciplined execution.
      </p>

      <p className="text-xs font-semibold tracking-[0.3em] text-white/45">SYSTEMS. PRECISION. PERFORMANCE.</p>

      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
        <a
          href="#contact"
          tabIndex={visible ? 0 : -1}
          className="inline-flex items-center justify-center bg-[#2F6BFF] px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#2559d6]"
        >
          Schedule a Strategy Call
        </a>
        <a
          href="#systems"
          tabIndex={visible ? 0 : -1}
          className="inline-flex items-center justify-center border border-[#1F2328] px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:border-white/60"
        >
          See How We Work
        </a>
      </div>
    </div>
  );
}
