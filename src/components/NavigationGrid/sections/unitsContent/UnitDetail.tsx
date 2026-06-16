import { useParams, Link, Navigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Target } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getUnitByNum, units } from "./Units";

const UnidadDetalle = () => {
  const { num } = useParams<{ num: string }>();
  const unit = num ? getUnitByNum(num) : undefined;

  if (!unit) return <Navigate to="/unidades" replace />;

  const Icon = unit.icon;
  const idx = units.findIndex((u) => u.num === unit.num);
  const prev = idx > 0 ? units[idx - 1] : null;
  const next = idx < units.length - 1 ? units[idx + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/unidades"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Volver a unidades
            </Link>

            {/* Header */}
            <div className="flex items-start gap-5 mb-10">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl glass-card glow-border flex items-center justify-center">
                <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-2">
                  Unidad {unit.num}
                </p>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  <span className="text-gradient">{unit.title}</span>
                </h1>
              </div>
            </div>

            {/* Topics chips */}
            <div className="flex flex-wrap gap-2 mb-10">
              {unit.topics.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-md bg-primary/5 text-primary/80 text-xs font-mono border border-primary/15"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Objective */}
            <div className="glass-card rounded-xl p-6 md:p-7 border border-border/40 mb-12">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-primary" />
                <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-primary">
                  Objetivo
                </h2>
              </div>
              <p className="text-foreground/90 leading-relaxed">
                {unit.objective}
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-6 mb-12">
              {unit.sections.map((s, i) => (
                <motion.article
                  key={s.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative pl-6 border-l-2 border-border/40 hover:border-primary/60 transition-colors"
                >
                  <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-background border-2 border-primary/40 group-hover:border-primary group-hover:shadow-[0_0_10px_hsl(var(--primary)/0.5)] transition-all" />
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {s.content}
                  </p>
                </motion.article>
              ))}
            </div>

            {/* External resource */}
            <a
              href={unit.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
            >
              <ExternalLink className="w-4 h-4" />
              Consultar recurso original de la ESCOM
            </a>

            {/* Prev / Next */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-border/40">
              {prev ? (
                <Link
                  to={`/unidades/${prev.num}`}
                  className="group glass-card rounded-xl p-5 border border-border/40 hover:border-primary/40 transition-all"
                >
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    <ArrowLeft className="w-3.5 h-3.5" /> Anterior · {prev.num}
                  </div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {prev.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  to={`/unidades/${next.num}`}
                  className="group glass-card rounded-xl p-5 border border-border/40 hover:border-primary/40 transition-all md:text-right"
                >
                  <div className="flex items-center md:justify-end gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    Siguiente · {next.num}{" "}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {next.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UnidadDetalle;
