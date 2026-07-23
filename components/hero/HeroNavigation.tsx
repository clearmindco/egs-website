import Link from "next/link";

interface HeroNavigationProps {
  visible: boolean;
}

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "The EGS Method", href: "#systems" },
  { label: "Results", href: "#results" },
];

export default function HeroNavigation({ visible }: HeroNavigationProps) {
  return (
    <header
      className={`absolute inset-x-0 top-0 z-20 transition-opacity duration-700 ease-out ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <Link href="#top" tabIndex={visible ? 0 : -1} className="flex items-baseline gap-2">
          <span className="text-sm font-semibold tracking-[0.2em] text-white">EGS</span>
          <span className="hidden text-[0.65rem] font-medium tracking-[0.25em] text-[#2F6BFF] sm:inline">
            ELITE GROWTH STRATEGIES
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 text-sm tracking-wide text-white/75 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} tabIndex={visible ? 0 : -1} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            tabIndex={visible ? 0 : -1}
            className="border border-[#1F2328] px-5 py-2 text-sm tracking-wide text-white transition-colors hover:border-[#2F6BFF] hover:text-[#2F6BFF]"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
