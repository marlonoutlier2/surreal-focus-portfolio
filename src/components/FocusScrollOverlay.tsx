import { useEffect, useState } from "react";

/**
 * Fixed overlay that intensifies a blur+vignette at the bottom of the viewport
 * as the user scrolls — creates a "focus pull" cinematic sensation.
 */
export function FocusScrollOverlay() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const blur = 4 + progress * 14; // 4px → 18px
  const opacity = 0.55 + progress * 0.35;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40"
      style={{
        height: "42vh",
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        maskImage:
          "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
        background: `linear-gradient(to top, oklch(0.08 0.03 25 / ${opacity}) 0%, transparent 100%)`,
      }}
    />
  );
}
