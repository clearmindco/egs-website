import Link from "next/link";

import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Text-based EGS wordmark placeholder. The final production logo asset is
 * pending; this component is the single place that renders the mark so it
 * can be swapped for an <Image> without touching layout call sites.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn(
        "inline-flex shrink-0 items-baseline gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-midnight rounded-sm",
        className,
      )}
    >
      <span className="font-sans text-xl font-bold tracking-tight text-white">
        {siteConfig.shortName}
      </span>
      <span className="hidden font-sans text-sm font-medium tracking-wide text-cool-gray sm:inline">
        {siteConfig.name}
      </span>
    </Link>
  );
}
