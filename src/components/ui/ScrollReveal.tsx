"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Fades + rises content into place the first time it scrolls into view.
 * One-shot (unobserves after triggering) and respects prefers-reduced-motion
 * via the global transition-duration override in globals.css.
 */
export function ScrollReveal({
  children,
  className,
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = { transitionDelay: `${delayMs}ms` };

  return (
    <div
      ref={ref}
      data-visible={visible}
      style={style}
      className={cn(
        "translate-y-4 opacity-0 transition-[opacity,transform] duration-500 ease-snappy data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
}
