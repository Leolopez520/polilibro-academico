import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cards } from "./unit-data";
import { UnitCard } from "./UnitCard";
import { SectionModal } from "./SectionModal";

export const NavigationGrid = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <>
      <section id="navegacion" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground"
          >
            Navegación del <span className="text-gradient">Polilibro</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cards.map((card, i) => (
              <UnitCard
                key={card.section}
                card={card}
                index={i}
                onClick={() => setActiveSection(card.section)}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeSection && (
          <SectionModal
            sectionKey={activeSection}
            onClose={() => setActiveSection(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
