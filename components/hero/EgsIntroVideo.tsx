"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export interface EgsIntroVideoHandle {
  skip: () => void;
}

interface EgsIntroVideoProps {
  onComplete: () => void;
  className?: string;
}

const SAFETY_TIMEOUT_MS = 7000;

const EgsIntroVideo = forwardRef<EgsIntroVideoHandle, EgsIntroVideoProps>(function EgsIntroVideo(
  { onComplete, className },
  ref,
) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const completedRef = useRef(false);

  const complete = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    onComplete();
  };

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const timeoutId = window.setTimeout(complete, SAFETY_TIMEOUT_MS);

    videoEl.addEventListener("ended", complete);
    // `error` on a <source> child doesn't bubble, so this only fires for it in the
    // capture phase; capture:true also still catches genuine errors on the video itself.
    videoEl.addEventListener("error", complete, true);
    videoEl.addEventListener("stalled", complete);

    const playPromise = videoEl.play();
    if (playPromise) {
      playPromise.catch(complete);
    }

    return () => {
      window.clearTimeout(timeoutId);
      videoEl.removeEventListener("ended", complete);
      videoEl.removeEventListener("error", complete, true);
      videoEl.removeEventListener("stalled", complete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useImperativeHandle(ref, () => ({ skip: complete }));

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      playsInline
      preload="auto"
      poster="/brand/egs-hero-poster.webp"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source media="(min-width: 768px)" type="video/webm" src="/brand/egs-assembly-desktop.webm" />
      <source media="(min-width: 768px)" type="video/mp4" src="/brand/egs-assembly-desktop.mp4" />
      <source media="(max-width: 767px)" type="video/webm" src="/brand/egs-assembly-mobile.webm" />
      <source media="(max-width: 767px)" type="video/mp4" src="/brand/egs-assembly-mobile.mp4" />
    </video>
  );
});

export default EgsIntroVideo;
