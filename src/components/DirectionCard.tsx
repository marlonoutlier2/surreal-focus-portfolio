import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface DirectionCardProps {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

export function DirectionCard({ index, eyebrow, title, description, href, delay = 0 }: DirectionCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-lg border border-border bg-card p-7 sm:p-9 min-h-[340px] transition-colors hover:border-ember/60"
    >
      {/* Ember corner glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-ember/20 blur-3xl transition-opacity duration-700 opacity-0 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <span className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground">
          {index} — {eyebrow}
        </span>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:text-ember group-hover:rotate-45" />
      </div>

      <div className="relative mt-16">
        <h3 className="font-display text-3xl sm:text-4xl font-300 leading-[1.05] text-bone text-balance">
          {title}
        </h3>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground max-w-[28ch]">
          {description}
        </p>
      </div>

      <div className="relative mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-bone/70">
        <span className="h-px w-8 bg-ember transition-all duration-500 group-hover:w-16" />
        Acessar
      </div>
    </motion.a>
  );
}
