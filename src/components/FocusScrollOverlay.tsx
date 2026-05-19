import { useEffect, useState } from "react";

/**
 * Slim fixed blur bar at the bottom of the viewport.
 * Intensifies as the user scrolls — gives a sense of focus pull
 * while keeping the page clean and uncluttered.
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

  const blur = 6 + progress * 10; // 6 → 16
  const opacity = 0.5 + progress * 0.35;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40"
      style={{
        height: "14vh",
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        maskImage:
          "linear-gradient(to top, black 0%, black 40%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to top, black 0%, black 40%, transparent 100%)",
        background: `linear-gradient(to top, oklch(0.08 0.005 250 / ${opacity}) 0%, transparent 100%)`,
        borderTop: "1px solid oklch(0.52 0.23 25 / 0.08)",
      }}
    />
  );
}
