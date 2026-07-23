"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import EgsIntroVideo, { EgsIntroVideoHandle } from "./EgsIntroVideo";
import HeroContent from "./HeroContent";
import HeroNavigation from "./HeroNavigation";
import {
  getPrefersReducedMotion,
  hasSeenIntroThisSession,
  markIntroSeenThisSession,
  usePrefersReducedMotion,
} from "@/lib/motion-preferences";

type Phase = "checking" | "intro" | "revealing" | "done";

export default function EgsHero() {
  const [phase, setPhase] = useState<Phase>("checking");
  const introRef = useRef<EgsIntroVideoHandle>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // One-time, client-only decision (reduced motion / session flag require `window`,
    // so this can't be resolved during the initial SSR-matching render).
    /* eslint-disable react-hooks/set-state-in-effect */
    if (getPrefersReducedMotion() || hasSeenIntroThisSession()) {
      setPhase("done");
    } else {
      setPhase("intro");
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const completeIntro = useCallback(() => {
    markIntroSeenThisSession();
    setPhase((current) => (current === "intro" ? "revealing" : current));
  }, []);

  const handleImageTransitionEnd = useCallback(() => {
    setPhase((current) => (current === "revealing" ? "done" : current));
  }, []);

  const handleSkip = useCallback(() => {
    introRef.current?.skip();
  }, []);

  const showVideo = phase === "intro" || phase === "revealing";
  const heroReady = phase === "revealing" || phase === "done";
  const showLogoImage = phase === "revealing" || phase === "done";
  const showSkipButton = phase === "intro";
  const fadeDuration = prefersReducedMotion ? "duration-0" : "duration-700";

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#0B0B0B] text-white"
      aria-label="Elite Growth Strategies"
    >
      <HeroNavigation visible={heroReady} />

      <div className="relative z-0 flex flex-1 flex-col items-center justify-center px-6 pt-28 pb-16 md:px-12">
        <div className="grid w-full max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
          <div
            className={`relative mx-auto flex aspect-square w-full max-w-[380px] items-center justify-center transition-transform ${fadeDuration} ease-out md:max-w-[460px] ${
              heroReady ? "scale-100" : "scale-[1.03]"
            }`}
          >
            {showVideo && (
              <EgsIntroVideo ref={introRef} onComplete={completeIntro} className="absolute inset-0 h-full w-full object-contain" />
            )}
            <Image
              src="/brand/egs-logo-final.webp"
              alt=""
              aria-hidden="true"
              fill
              priority
              sizes="(min-width: 768px) 460px, 380px"
              className={`object-contain transition-opacity ${fadeDuration} ease-out ${
                showLogoImage ? "opacity-100" : "opacity-0"
              }`}
              onTransitionEnd={handleImageTransitionEnd}
            />
          </div>

          <HeroContent visible={heroReady} />
        </div>
      </div>

      {showSkipButton && (
        <button
          type="button"
          onClick={handleSkip}
          className="absolute bottom-6 right-6 z-20 border border-white/20 px-4 py-2 text-xs font-medium tracking-wide text-white/70 transition-colors hover:border-white/50 hover:text-white"
        >
          Skip intro
        </button>
      )}
    </section>
  );
}
