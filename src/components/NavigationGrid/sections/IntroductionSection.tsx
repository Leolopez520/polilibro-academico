import { useState } from "react";

export const IntroductionSection = () => {
  const [expandedUnit, setExpandedUnit] = useState<string | null>(null);

  const courseUnits = [
    {
      id: "Unidad I",
      title: "Teoría de Autómatas",
      desc: "Explica la automatización del cómputo a partir de los lenguajes regulares y los autómatas finitos.",
      topics: [
        {
          title: "1.1 Orígenes de la computación",
          subtopics: [
            "1.1.1 Automatización del cómputo",
            "1.1.2 Paradojas de la lógica matemática",
            "1.1.3 Teorema de incompletitud de Gödel",
            "1.1.4 Computabilidad y complejidad",
            "1.1.5 Jerarquía de Chomsky",
          ],
        },
        {
          title: "1.2 Autómatas y lenguajes",
          subtopics: [
            "1.2.1 Alfabetos y cadenas",
            "1.2.2 Operaciones con lenguajes",
            "1.2.3 Autómatas finitos deterministas",
            "1.2.4 Autómatas finitos no deterministas",
            "1.2.5 Equivalencia entre AFD y AFN",
            "1.2.6 Expresiones regulares",
          ],
        },
        { title: "1.3 Propiedades de los lenguajes regulares", subtopics: [] },
        { title: "1.4 Aplicaciones de los lenguajes regulares", subtopics: [] },
      ],
    },
    {
      id: "Unidad II",
      title: "Lenguajes independientes del contexto",
      desc: "Estructura los lenguajes independientes del contexto a partir de las gramáticas y los autómatas de pila.",
      topics: [
        {
          title: "2.1 Gramáticas independientes del contexto",
          subtopics: [
            "2.1.1 Forma de Backus Naur",
            "2.1.2 Derivaciones de una gramática",
            "2.1.3 Árbol de sintaxis",
            "2.1.4 Ambigüedad",
            "2.1.5 Forma normal de Chomsky",
            "2.1.6 Forma normal de Greibach",
          ],
        },
        { title: "2.2 Autómata de Pila", subtopics: [] },
        {
          title: "2.3 Propiedades de los lenguajes independientes del contexto",
          subtopics: [],
        },
        {
          title:
            "2.4 Aplicaciones de los lenguajes independientes del contexto",
          subtopics: [],
        },
      ],
    },
    {
      id: "Unidad III",
      title: "Computabilidad",
      desc: "Clasifica los problemas en computables y no computables a partir de la máquina de Turing y la noción de decidibilidad.",
      topics: [
        {
          title: "3.1 Máquina de Turing",
          subtopics: [
            "3.1.1 Funciones recursivas primitivas parciales y totales",
            "3.1.2 Máquina de Turing con una cinta y multicinta",
            "3.1.3 Máquina de Turing no determinística",
            "3.1.4 Máquina de Turing universal",
            "3.1.5 Tesis Church-Turing",
          ],
        },
        {
          title: "3.2 Decidibilidad",
          subtopics: [
            "3.2.1 Problemas decidibles",
            "3.2.2 Problemas indecidibles",
            "3.2.3 Problema del paro",
          ],
        },
      ],
    },
  ];

  const toggleUnit = (unitId: string) => {
    setExpandedUnit(expandedUnit === unitId ? null : unitId);
  };

  return (
    <div className="space-y-4">
      <p className="text-foreground/80 leading-relaxed">
        Construye soluciones a problemas computacionales con base en los modelos
        de cómputo para lenguajes regulares, lenguajes independientes del
        contexto y la noción de computabilidad.
      </p>

      <div className="space-y-3">
        {courseUnits.map((unit) => (
          <div
            key={unit.id}
            className="bg-background/30 rounded-lg border border-border/30 overflow-hidden shadow-sm"
          >
            <div
              onClick={() => toggleUnit(unit.id)}
              className="flex gap-4 items-start p-4 cursor-pointer hover:bg-background/50 transition-colors group"
            >
              <span className="text-xs font-mono text-primary whitespace-nowrap mt-1 bg-primary/10 px-2 py-1 rounded">
                {unit.id}
              </span>
              <div className="flex-1">
                <p className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                  {unit.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {unit.desc}
                </p>
              </div>
              <div
                className={`text-muted-foreground text-xs mt-1 transition-transform duration-300 ${expandedUnit === unit.id ? "rotate-90" : ""}`}
              >
                ▶
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedUnit === unit.id
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 pb-4 ml-14">
                <div className="border-t border-border/20 pt-4 space-y-5">
                  {unit.topics.map((topic, index) => (
                    <div
                      key={index}
                      className="animate-in fade-in slide-in-from-left-2 duration-300"
                    >
                      <h4 className="text-xs font-bold text-foreground/90 mb-2 uppercase tracking-wider">
                        {topic.title}
                      </h4>
                      {topic.subtopics.length > 0 && (
                        <ul className="grid grid-cols-1 gap-1.5 pl-2 border-l-2 border-primary/20">
                          {topic.subtopics.map((subtopic, subIndex) => (
                            <li
                              key={subIndex}
                              className="text-xs text-muted-foreground hover:text-foreground transition-colors py-0.5"
                            >
                              {subtopic}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
