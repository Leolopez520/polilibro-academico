import { type ReactNode } from "react";
import { ExternalLink } from "lucide-react";

export const sectionContent: Record<
  string,
  { title: string; body: ReactNode }
> = {
  bienvenida: {
    title: "Bienvenida",
    body: (
      <div className="space-y-4">
        <p>
          <strong className="text-foreground">
            El pulso silencioso de los sistemas operativos (polilibro académico)
          </strong>{" "}
          ha sido diseñado como una herramienta educativa dinámica e innovadora,
          orientada al aprendizaje activo. Su objetivo es fortalecer, de manera
          progresiva y aplicada, los fundamentos que explican cómo y por qué los
          sistemas operativos constituyen el eje que organiza y controla todo lo
          que ocurre en una computadora.
        </p>
        <p>
          A diferencia de un texto tradicional, aprovecha las posibilidades de
          la interactividad a través de diagramas dinámicos, simulaciones,
          autoevaluaciones, actividades guiadas y recursos multimedia. La
          estructura modular permite avanzar gradualmente desde los principios
          básicos hasta los temas de mayor complejidad.
        </p>
        <p>
          Este recurso es más que un material de apoyo: es una invitación a
          explorar, descubrir y aprender con creatividad, rigor y pasión por la
          tecnología.
        </p>
      </div>
    ),
  },
  examen: {
    title: "Examen Diagnóstico",
    body: (
      <div className="space-y-4">
        <p>
          Evaluación de conocimientos previos sobre conceptos básicos, funciones
          y tipos de sistemas operativos.{" "}
          <strong className="text-foreground">
            No tiene valor en la calificación final
          </strong>
          , su finalidad es exclusivamente diagnóstica.
        </p>
        <div className="bg-background/30 rounded-lg p-4 border border-border/30">
          <p className="text-xs text-muted-foreground mb-2">
            Duración: 30-45 minutos · 14 preguntas
          </p>
          <p className="text-xs text-muted-foreground">
            Incluye reactivos de opción múltiple, verdadero/falso y preguntas
            abiertas cortas.
          </p>
        </div>
      </div>
    ),
  },
  contenido: {
    title: "Contenido",
    body: (
      <div className="space-y-4">
        <p>
          Fue creado como un recurso didáctico innovador, destinado a las mentes
          creativas y analíticas que se forman en{" "}
          <strong className="text-foreground">
            Ingeniería en Sistemas Computacionales
          </strong>{" "}
          dentro del Instituto Politécnico Nacional. Combina la teoría, la
          práctica y la creatividad digital, permitiendo explorar, construir y
          evaluar soluciones que dan vida a los sistemas operativos modernos.
        </p>
        <p>
          Cada unidad ha sido cuidadosamente estructurada para estimular la
          autonomía, la curiosidad científica y la aplicación práctica del
          conocimiento, desarrollando competencias técnicas y analíticas
          mediante actividades participativas, simulaciones digitales y recursos
          multimedia.
        </p>
      </div>
    ),
  },
  programa: {
    title: "Programa de la Unidad de Aprendizaje",
    body: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            ["Unidad Académica", "ESCOM"],
            ["Programa", "ISC"],
            ["Semestre", "IV"],
            ["Modalidad", "Escolarizada"],
            ["Tipo", "Teórica-Práctica"],
            ["Créditos SATCA", "6.1"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="bg-background/50 rounded-lg p-3 border border-border/50"
            >
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="font-semibold text-foreground text-sm">{value}</p>
            </div>
          ))}
        </div>
        <p>
          <strong className="text-foreground">Propósito:</strong> Construye
          soluciones a problemas computacionales con base en los modelos de
          cómputo para lenguajes regulares, lenguajes independientes del
          contexto y la noción de computabilidad.
        </p>
        <a
          href="https://www.escom.ipn.mx/docs/oferta/uaISC2020/teoriaComputacion_ISC2020.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary text-sm hover:underline"
        >
          Ver programa completo <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    ),
  },
  introduccion: {
    title: "Introducción",
    body: (
      <div className="space-y-4">
        <p>
          Los sistemas operativos son parte fundamental de la operatividad de
          las computadoras y juegan un papel crucial entre el usuario y el
          hardware. Este polilibro invita a un viaje a través de los mecanismos,
          funciones y retos que conforman los S.O. actuales.
        </p>
        <div className="space-y-3">
          {[
            [
              "Unidad I",
              "Estructura de un S.O.",
              "Bases conceptuales, evolución histórica, núcleo, modos de operación y llamadas al sistema.",
            ],
            [
              "Unidad II",
              "Administración de procesos",
              "Modelos de procesos, hilos, comunicación, sincronización y algoritmos de planificación.",
            ],
            [
              "Unidad III",
              "Administración de memoria",
              "Memoria virtual, paginación, segmentación y ejecución eficiente de múltiples programas.",
            ],
            [
              "Unidad IV",
              "Sistema de archivos",
              "Organización, protección y manejo de datos con técnicas avanzadas de optimización.",
            ],
            [
              "Unidad V",
              "Dispositivos de E/S",
              "Principios de hardware y software que administran los dispositivos de entrada/salida.",
            ],
            [
              "Unidad VI",
              "Seguridad y virtualización",
              "Amenazas, mecanismos de protección y entornos virtualizados.",
            ],
          ].map(([unit, title, desc]) => (
            <div
              key={unit}
              className="flex gap-4 items-start bg-background/30 p-3 rounded-lg border border-border/30"
            >
              <span className="text-xs font-mono text-primary whitespace-nowrap mt-0.5">
                {unit}
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  creadores: {
    title: "Autores",
    body: (
      <div className="space-y-1">
        {[
          {
            name: "Luis Enrique Olvera Hernandez",
            email: "lehernandez@ipn.mx",
            desc: "M. en C. en Sistemas Computacionales Móviles - Ing. en Sistemas Computacionales",
            areas:
              "Algoritmia y Programación Estructurada, Estructuras de Datos, Teoría Computacional,  Compiladores, Programación Orientada a Objetos, Análisis y Diseño de Algoritmos",
          },
        ].map((author) => (
          <div
            key={author.name}
            className="flex flex-col gap-1 py-4 border-b border-border/30 last:border-0"
          >
            <h3 className="font-semibold text-foreground">{author.name}</h3>
            <p className="text-xs text-primary font-mono">{author.email}</p>
            <p className="text-sm text-muted-foreground">{author.desc}</p>
            <p className="text-xs text-muted-foreground">
              <strong className="text-secondary-foreground">Áreas:</strong>{" "}
              {author.areas}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  colaboradores: {
    title: "Colaboradores",
    body: (
      <div className="space-y-4">
        <p>
          Estudiantes que contribuyeron a la creación de este recurso digital:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[["Perez Lopez Leonardo", "lperezl1501@alumno.ipn.mx"]].map(
            ([name, email]) => (
              <div
                key={name}
                className="bg-background/30 rounded-lg p-3 border border-border/30"
              >
                <p className="font-medium text-foreground text-sm">{name}</p>
                <p className="text-xs text-primary font-mono">{email}</p>
              </div>
            ),
          )}
        </div>
      </div>
    ),
  },
  metodologia: {
    title: "Metodología",
    body: (
      <div className="space-y-4">
        <p>
          Diseñado con un enfoque pedagógico centrado en la comprensión,
          aplicación y reflexión. El polilibro promueve la colaboración, el
          aprendizaje cooperativo y la evaluación continua.
        </p>
        <div className="space-y-3">
          <div className="bg-background/30 rounded-lg p-4 border border-border/30">
            <h4 className="font-semibold text-foreground text-sm mb-1">
              🎯 Aprendizaje basado en proyectos
            </h4>
            <p className="text-xs text-muted-foreground">
              Colaboración guiada para responder a problemáticas reales en el
              ámbito de los sistemas operativos.
            </p>
          </div>
          <div className="bg-background/30 rounded-lg p-4 border border-border/30">
            <h4 className="font-semibold text-foreground text-sm mb-1">
              📖 Aprendizaje autónomo
            </h4>
            <p className="text-xs text-muted-foreground">
              Navegación autogestionada con recursos interactivos, lecturas
              clave y ejemplos guiados.
            </p>
          </div>
          <div className="bg-background/30 rounded-lg p-4 border border-border/30">
            <h4 className="font-semibold text-foreground text-sm mb-1">
              🧩 Aprendizaje basado en problemas
            </h4>
            <p className="text-xs text-muted-foreground">
              Resolución colaborativa de problemas auténticos en el contexto de
              sistemas operativos.
            </p>
          </div>
        </div>
        <div className="bg-background/30 rounded-lg p-4 border border-border/30">
          <p className="text-xs text-muted-foreground">
            <strong className="text-secondary-foreground">
              Duración total:
            </strong>{" "}
            81 horas · 3.0h teoría/semana + 1.5h presencial/semana
          </p>
        </div>
      </div>
    ),
  },
  actividades: {
    title: "Actividades de Aprendizaje",
    body: (
      <div className="space-y-4">
        <p>
          Compendio de actividades lúdicas y ejercicios prácticos para cada
          unidad:
        </p>
        {[
          {
            unit: "Unidad 1: Estructura de un S.O.",
            count: 5,
            base: "UNIDAD_1/actividad_1_",
          },
          {
            unit: "Unidad 2: Administración de procesos",
            count: 5,
            base: "UNIDAD_2/actividad_2_",
          },
          {
            unit: "Unidad 3: Administración de memoria",
            count: 3,
            base: "UNIDAD_3/Actividad_3_",
          },
          {
            unit: "Unidad 4: Sistema de archivos",
            count: 3,
            base: "UNIDAD_4/Actividad_4_",
          },
          {
            unit: "Unidad 5: Dispositivos de E/S",
            count: 3,
            base: "UNIDAD_5/Actividad_5_",
          },
          {
            unit: "Unidad 6: Seguridad y virtualización",
            count: 3,
            base: "UNIDAD_6/Actividad_6_",
          },
        ].map((u) => (
          <div key={u.unit}>
            <h4 className="font-semibold text-foreground text-sm mb-2">
              {u.unit}
            </h4>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: u.count }, (_, i) => (
                <a
                  key={i}
                  href={`https://escomisr.github.io/Libro_Digital_SO/${u.base}${i + 1}.html`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-md bg-primary/10 text-primary text-xs font-mono hover:bg-primary/20 transition-colors border border-primary/20"
                >
                  Act {i + 1}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  laboratorios: {
    title: "Agenda de Laboratorios",
    body: (
      <div className="space-y-4">
        <p>
          Prácticas de código y programación diseñadas para aplicar los
          conceptos teóricos en entornos reales de sistemas operativos.
        </p>
        <div className="bg-background/30 rounded-lg p-4 border border-border/30">
          <p className="text-sm text-muted-foreground">
            Las prácticas de laboratorio se encuentran distribuidas a lo largo
            de las 6 unidades temáticas. Consulta cada unidad para acceder a los
            ejercicios correspondientes.
          </p>
        </div>
      </div>
    ),
  },
  licencia: {
    title: "Licencia Creative Commons",
    body: (
      <div className="space-y-4">
        <p>
          <strong className="text-foreground">
            El pulso silencioso de los sistemas operativos
          </strong>{" "}
          © 2026 por Israel Salas Ramírez, Benjamín Cruz Torres, Hermelinda
          Patricia Leyva López.
        </p>
        <p>
          Licenciado bajo{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Creative Commons Attribution-NonCommercial 4.0 International (CC
            BY-NC 4.0)
          </a>
        </p>
      </div>
    ),
  },
};
