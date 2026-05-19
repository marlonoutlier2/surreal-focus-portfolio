import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import portrait from "@/assets/expert-portrait.jpg";
import { DirectionCard } from "@/components/DirectionCard";
import { FocusScrollOverlay } from "@/components/FocusScrollOverlay";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marcus Vale — Estratégia & Mentoria High Ticket" },
      { name: "description", content: "Portfólio do expert. Três direções para quem chegou aqui pela bio: mentoria, conteúdo e contato direto." },
      { property: "og:title", content: "Marcus Vale — Estratégia & Mentoria High Ticket" },
      { property: "og:description", content: "Três caminhos. Uma decisão." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Ambient ember backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: "var(--gradient-ember)" }}
      />

      {/* Top nav */}
      <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 sm:px-10">
        <div className="font-display text-lg tracking-tight">
          <span className="text-ember">▲</span> MARCUS<span className="text-muted-foreground">.VALE</span>
        </div>
        <span className="hidden sm:block text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
          Portfólio · 2026
        </span>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-28 pt-10 sm:px-10 lg:grid-cols-12 lg:gap-8 lg:pt-20">
        {/* Left: Type */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[11px] uppercase tracking-[0.4em] text-ember mb-8"
          >
            ◇ Estrategista · Mentor · Operador
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[14vw] leading-[0.88] tracking-[-0.04em] text-bone sm:text-[9vw] lg:text-[7.2rem] xl:text-[8.4rem] font-300"
          >
            Quem decide<br />
            <em className="not-italic text-ember font-900 italic">vence cedo.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-10 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            Construí operações de oito dígitos para fundadores que cansaram de
            esperar permissão. Você chegou aqui pelo link da bio — agora escolha
            o seu próximo movimento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex items-center gap-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
              Disponível · 02 vagas Q3
            </span>
          </motion.div>
        </div>

        {/* Right: Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5 order-1 lg:order-2"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm grain ember-glow">
            <img
              src={portrait}
              alt="Marcus Vale — retrato"
              className="h-full w-full object-cover"
              style={{ filter: "contrast(1.05) saturate(1.05)" }}
            />
            {/* edge vignette */}
            <div className="pointer-events-none absolute inset-0" style={{
              background: "radial-gradient(ellipse at center, transparent 55%, oklch(0.08 0.03 25 / 0.6) 100%)"
            }} />
          </div>
          {/* film frame ticks */}
          <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>Frame 001 / VALE</span>
            <span>ISO 1600 · f/1.4</span>
          </div>
        </motion.div>
      </section>

      {/* DIRECTIONS */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-40 sm:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-ember">— Três caminhos</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-bone max-w-2xl text-balance">
              Onde você quer chegar <em className="italic text-muted-foreground">primeiro?</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Escolha uma das frentes abaixo. Cada porta abre um nível diferente
            de proximidade.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <DirectionCard
            index="01"
            eyebrow="Mentoria"
            title="Mentoria 1:1 Black Door"
            description="12 semanas, encontros privados e arquitetura completa da sua operação high ticket. Vagas limitadas."
            href="#mentoria"
            delay={0}
          />
          <DirectionCard
            index="02"
            eyebrow="Conteúdo"
            title="Bastidores no Instagram"
            description="Os movimentos crus, antes de virarem case. Cobertura diária de bastidor estratégico."
            href="https://instagram.com"
            delay={0.12}
          />
          <DirectionCard
            index="03"
            eyebrow="Contato"
            title="Conversa direta no WhatsApp"
            description="Para quem já decidiu. Briefing rápido, agenda priorizada e resposta em até 12h."
            href="https://wa.me/5500000000000"
            delay={0.24}
          />
        </div>
      </section>

      {/* CLOSING WHISPER */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-[40vh] text-center sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-display text-3xl sm:text-5xl leading-tight text-bone/90 text-balance italic"
        >
          "O mercado paga caro pela clareza<br />que ninguém mais tem coragem de oferecer."
        </motion.p>
        <p className="mt-8 text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
          — M.V.
        </p>
      </section>

      <FocusScrollOverlay />

      <footer className="relative z-10 border-t border-border/40 py-8 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        © 2026 Marcus Vale · Todos os direitos reservados
      </footer>
    </main>
  );
}
