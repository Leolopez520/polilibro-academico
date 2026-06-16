import { Navbar } from "@/components/Navbar";
import { units } from "@/components/NavigationGrid/sections/unitsContent/Units";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

export const Unidades = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3">
            Programa de estudio
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Unidades
            <br />
            <span className="text-gradient">Temáticas</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-lg text-sm md:text-base">
            6 unidades que cubren desde la estructura fundamental hasta la
            seguridad y virtualización de sistemas operativos.
          </p>
        </motion.div>

        {/* Timeline vertical */}
        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="flex flex-col gap-2">
            {units.map((unit, i) => {
              const Icon = unit.icon;
              return (
                <motion.div
                  key={unit.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative flex items-start gap-5 md:gap-8 pl-0"
                >
                  {/* 1. EL NODO SE QUEDA FUERA DEL LINK (Igual que el original) */}
                  <div className="relative z-10 flex-shrink-0 w-12 md:w-16 flex justify-center pt-6">
                    <div className="w-3 h-3 rounded-full bg-primary/40 group-hover:bg-primary group-hover:shadow-[0_0_12px_hsl(var(--primary)/0.6)] transition-all duration-300" />
                  </div>

                  {/* 2. EL LINK SOLO ENVUELVE LA CARD */}
                  <Link to={`/unidades/${unit.num}`} className="flex-1 mb-4">
                    <div className="glass-card rounded-xl p-5 md:p-7 border border-border/30 group-hover:border-primary/40 group-hover:glow-border transition-all duration-300">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-primary/30 font-mono text-2xl md:text-3xl font-bold group-hover:text-primary/60 transition-colors">
                              {unit.num}
                            </span>
                            <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {unit.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {unit.desc}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {unit.topics.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-1 rounded-md bg-primary/5 text-primary/70 text-xs font-mono border border-primary/10 group-hover:border-primary/25 group-hover:text-primary transition-colors"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    {/* <Footer /> */}
  </div>
);
