import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import portrait from "@/assets/expert-portrait.jpg";
import { DirectionCard } from "@/components/DirectionCard";
import { FocusScrollOverlay } from "@/components/FocusScrollOverlay";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marlon Ferreira | Direct Response" },
      { name: "description", content: "Bem-vindo ao portfólio de Marlon Ferreira — Estrategista digital e especialista em Direct Response." },
      { property: "og:title", content: "Marlon Ferreira | Direct Response" },
      { property: "og:description", content: "Três direções para quem chegou pela bio." },
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
      className="inline-block h-[0.78em] w-[0.78em] translate-y-[-0.04em] ml-1 text-bone"
      fill="currentColor"
    >
      {/* Scalloped Instagram-style badge */}
      <path d="M23 12l-2.18-2.51.3-3.32-3.25-.74L15.87 2.6 12.86 4.03 12 4l-.86-.03L8.13 2.6 6.43 5.43l-3.25.74.3 3.32L1 12l2.18 2.51-.3 3.33 3.25.74 1.7 2.83 3.01-1.43.86.03.86-.03 3.01 1.43 1.7-2.83 3.25-.74-.3-3.33L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
    </svg>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Ambient ember backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: "var(--gradient-ember)" }}
      />

      {/* NAME / TITLE — TOP */}
      <header className="relative z-30 mx-auto max-w-4xl px-6 pt-16 pb-10 text-center sm:pt-24">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-display text-2xl sm:text-3xl tracking-tight text-bone"
        >
          Marlon Ferreira <span className="text-muted-foreground font-light">|</span> Direct Response <VerifiedMark />
        </motion.h1>
      </header>

      {/* WELCOME */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-20 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[11px] uppercase tracking-[0.4em] text-ember"
        >
          ◇ Bem-vindo
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] text-bone text-balance"
        >
          É bom te ver <em className="not-italic italic text-ember">por aqui.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto"
        >
          Este é o ponto onde a curiosidade vira direção.
          Escolha por onde quer começar — eu te acompanho do outro lado.
        </motion.p>
      </section>

      {/* PORTRAIT — full image, circular, blended halo */}
      <section className="relative z-10 mx-auto max-w-md px-6 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-44 w-44 sm:h-52 sm:w-52"
        >
          {/* Outer ember halo — fades into background */}
          <div
            aria-hidden
            className="absolute -inset-10 rounded-full"
            style={{
              background:
                "radial-gradient(circle, oklch(0.55 0.24 30 / 0.45) 0%, oklch(0.55 0.24 30 / 0.15) 35%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />
          {/* Thin ember ring */}
          <div
            aria-hidden
            className="absolute inset-[-3px] rounded-full"
            style={{
              background:
                "conic-gradient(from 140deg, oklch(0.62 0.24 32) 0%, oklch(0.72 0.21 45) 25%, oklch(0.35 0.15 28) 55%, oklch(0.62 0.24 32) 100%)",
              opacity: 0.85,
            }}
          />
          {/* Inner bezel */}
          <div className="absolute inset-0 rounded-full p-[2px] bg-background">
            <img
              src={portrait}
              alt="Marlon Ferreira"
              className="h-full w-full rounded-full object-cover"
              style={{ filter: "contrast(1.06) saturate(1.08)" }}
            />
          </div>
        </motion.div>


        {/* BIO */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="-mt-4 max-w-md mx-auto"
        >
          <p className="text-sm sm:text-base text-bone/90 leading-relaxed">
            Estrategista digital · Direct Response.
            <br />
            <span className="text-muted-foreground">
              Construo respostas para quem decide agir.
            </span>
          </p>
        </motion.div>

        {/* ENCOURAGEMENT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-10 font-display italic text-xl sm:text-2xl text-bone/90 text-balance"
        >
          "Você não chegou aqui por acaso.
          <br />
          Decida com calma — e vá com tudo."
        </motion.p>
      </section>

      {/* DIRECTIONS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32 pt-20 sm:px-10">
        <div className="mb-14 text-center">
          <span className="text-[11px] uppercase tracking-[0.4em] text-ember">
            — Direcionamentos
          </span>
          <h3 className="mt-4 font-display text-3xl sm:text-4xl leading-tight tracking-tight text-bone">
            Por onde quer seguir?
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
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
            delay={0.12}
          />
          <DirectionCard
            index="03"
            eyebrow="Contato"
            title="Conversa no WhatsApp"
            description="Para quem já decidiu. Briefing rápido e resposta em até 12h."
            href="https://wa.me/5500000000000"
            delay={0.24}
          />
        </div>
      </section>

      <FocusScrollOverlay />

      <footer className="relative z-10 border-t border-border/40 py-8 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        © 2026 Marlon Ferreira · Direct Response
      </footer>
    </main>
  );
}
