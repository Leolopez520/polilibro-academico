import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cards } from "./unit-data";
import { UnitCard } from "./UnitCard";
import { SectionModal } from "./SectionModal";

const categoryGroups = [
  {
    title: "Descubre el Polilibro",
    description: "Fundamentos, diagnóstico y guía de uso del material.",
    keys: ["bienvenida", "introduccion", "examen", "metodologia"],
  },
  {
    title: "Contenido Académico",
    description: "Programa, unidades teóricas, ejercicios y prácticas.",
    keys: ["programa", "contenido", "actividades", "laboratorios"],
  },
  {
    title: "Acerca de",
    description: "Equipo detrás de este proyecto y términos de uso.",
    keys: ["creadores", "colaboradores", "licencia"],
  },
];

export const NavigationGrid = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <>
      <section id="navegacion" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Título Principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground"
          >
            Índice del <span className="text-gradient">Polilibro</span>
          </motion.h2>

          {/* Contenedor de Categorías */}
          <div className="space-y-16">
            {categoryGroups.map((group, groupIndex) => {
              // Filtramos las tarjetas originales para que solo aparezcan las de este grupo
              const groupCards = group.keys
                .map((key) => cards.find((c) => c.section === key))
                .filter(Boolean) as typeof cards;

              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.1 }}
                  className="space-y-6"
                >
                  {/* Cabecera de la Categoría */}
                  <div className="border-b border-border/50 pb-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                      {group.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {group.description}
                    </p>
                  </div>

                  {/* Cuadrícula específica de esta categoría */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {groupCards.map((card, i) => (
                      <UnitCard
                        key={card.section}
                        card={card}
                        index={i}
                        onClick={() => setActiveSection(card.section)}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal interactivo (se mantiene igual) */}
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
