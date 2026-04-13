import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const scrollToContent = () => {
    document
      .getElementById("navegacion")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Instituto Politécnico Nacional · ESCOM
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            {/* <span className="text-foreground">El Pulso Silencioso de los</span> */}
            <br />
            <span className="text-gradient">Teoría Computacional</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
            Polilibro académico — Unidad de aprendizaje Teoría Computacional
          </p>
          <p className="text-muted-foreground/60 text-sm max-w-xl mx-auto mb-10">
            Un recurso didáctico innovador para explorar, comprender y dominar
            los fundamentos que dan vida a la Teoría Computacional.
          </p>
        </motion.div>

        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
        >
          Explorar contenido
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
};
