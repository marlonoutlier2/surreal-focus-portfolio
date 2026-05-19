import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import portrait from "@/assets/expert-portrait.jpg";
import { DirectionCard } from "@/components/DirectionCard";
import { FocusScrollOverlay } from "@/components/FocusScrollOverlay";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marlon Ferreira | Direct Response" },
      { name: "description", content: "Estrategista digital e especialista em Direct Response. Três direções para quem chegou pela bio." },
      { property: "og:title", content: "Marlon Ferreira | Direct Response" },
      { property: "og:description", content: "Três direções. Uma decisão." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function VerifiedMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-label="verificado"
      className="inline-block h-[0.78em] w-[0.78em] translate-y-[-0.04em] ml-1.5 text-bone"
      fill="currentColor"
    >
      <path d="M23 12l-2.18-2.51.3-3.32-3.25-.74L15.87 2.6 12.86 4.03 12 4l-.86-.03L8.13 2.6 6.43 5.43l-3.25.74.3 3.32L1 12l2.18 2.51-.3 3.33 3.25.74 1.7 2.83 3.01-1.43.86.03.86-.03 3.01 1.43 1.7-2.83 3.25-.74-.3-3.33L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
    </svg>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Subtle layered backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: "var(--gradient-ember)" }}
      />

      {/* TOP NAME BAR */}
      <header className="relative z-30 mx-auto max-w-5xl px-6 pt-14 pb-6 text-center sm:pt-20">
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="font-display text-xl sm:text-2xl tracking-tight text-bone"
        >
          Marlon Ferreira{" "}
          <span className="text-muted-foreground font-light mx-1">|</span>{" "}
          Direct Response
          <VerifiedMark />
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mx-auto mt-5 h-px w-16 bg-ember/70 origin-center"
        />
      </header>

      {/* WELCOME / HERO */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-16 pt-6 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[10px] uppercase tracking-[0.45em] text-muted-foreground"
        >
          Portfólio · 2026
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] text-bone text-balance font-300"
        >
          Você chegou no
          <br />
          <em className="not-italic italic text-bone">lugar certo.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-7 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto"
        >
          Aqui não tem ruído. Tem direção.
          Escolha por onde quer seguir — eu te encontro do outro lado.
        </motion.p>
      </section>

      {/* PORTRAIT — disruptive editorial frame */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          {/* Serial labels — editorial */}
          <div className="absolute -left-2 top-0 -translate-y-6 text-[10px] uppercase tracking-[0.4em] text-muted-foreground hidden sm:block">
            N° 001
          </div>
          <div className="absolute -right-2 bottom-2 translate-y-6 text-[10px] uppercase tracking-[0.4em] text-ember hidden sm:block">
            // Direct Response
          </div>

          {/* Portrait container — tall, edges fade into bg */}
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <img
              src={portrait}
              alt="Marlon Ferreira"
              className="h-full w-full object-cover"
              style={{
                filter: "contrast(1.08) saturate(0.85) brightness(0.95)",
                WebkitMaskImage:
                  "linear-gradient(180deg, transparent 0%, black 18%, black 78%, transparent 100%)",
                maskImage:
                  "linear-gradient(180deg, transparent 0%, black 18%, black 78%, transparent 100%)",
              }}
            />
            {/* subtle red tint vignette */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 100%, oklch(0.30 0.18 25 / 0.35) 0%, transparent 60%)",
                mixBlendMode: "multiply",
              }}
            />
          </div>

          {/* Caption bar */}
          <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>Marlon Ferreira</span>
            <span className="h-px flex-1 mx-4 bg-border" />
            <span className="text-ember">SC · BR</span>
          </div>
        </motion.div>
      </section>

      {/* ENCOURAGEMENT */}
      <section className="relative z-10 mx-auto max-w-2xl px-6 pb-32 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-display italic text-2xl sm:text-3xl text-bone/90 leading-snug text-balance"
        >
          "Você não chegou aqui por acaso.
          <br />
          Decida com calma — e vá com tudo."
        </motion.p>
      </section>

      {/* DIRECTIONS — primary CTAs */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-40 sm:px-10">
        <div className="mb-12 text-center">
          <span className="text-[10px] uppercase tracking-[0.45em] text-ember">
            Próximo passo
          </span>
          <h3 className="mt-4 font-display text-3xl sm:text-4xl leading-tight tracking-tight text-bone">
            Escolha sua direção.
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <DirectionCard
            index="01"
            eyebrow="Mentoria"
            title="Mentoria 1:1 Black Door"
            description="12 semanas, encontros privados e arquitetura completa da sua operação high ticket."
            href="#mentoria"
            delay={0}
          />
          <DirectionCard
            index="02"
            eyebrow="Conteúdo"
            title="Bastidores no Instagram"
            description="Movimentos crus, antes de virarem case. Cobertura diária de bastidor estratégico."
            href="https://instagram.com/marlonferreiratv"
            delay={0.1}
          />
          <DirectionCard
            index="03"
            eyebrow="Contato"
            title="Conversa no WhatsApp"
            description="Para quem já decidiu. Briefing rápido e resposta em até 12h."
            href="https://wa.me/5500000000000"
            delay={0.2}
          />
        </div>
      </section>

      <FocusScrollOverlay />

      <footer className="relative z-10 border-t border-border/40 py-7 text-center text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
        © 2026 Marlon Ferreira · Direct Response
      </footer>
    </main>
  );
}
