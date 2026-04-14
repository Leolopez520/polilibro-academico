import { type ReactNode } from "react";
import { WelcomeSection } from "./sections/WelcomeSection";
import { ExamSection } from "./sections/ExamSection";
import { ContentSection } from "./sections/ContentSection";
import { ProgramSection } from "./sections/ProgramSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { AuthorsSection } from "./sections/AuthorsSection";
import { CollabSection } from "./sections/CollabSection";
import { MethodologySection } from "./sections/MethodologySection";
import { ActivitySection } from "./sections/ActivitySection";
import { LabSection } from "./sections/LabSection";
import { LicenseSection } from "./sections/LicenseSection";

export const sectionContent: Record<
  string,
  { title: string; body: ReactNode }
> = {
  bienvenida: {
    title: "Bienvenida",
    body: <WelcomeSection />,
  },
  examen: {
    title: "Examen Diagnóstico",
    body: <ExamSection />,
  },
  contenido: {
    title: "Contenido",
    body: <ContentSection />,
  },
  programa: {
    title: "Programa de la Unidad de Aprendizaje",
    body: <ProgramSection />,
  },
  introduccion: {
    title: "Introducción",
    body: <IntroductionSection />,
  },
  creadores: {
    title: "Autores",
    body: <AuthorsSection />,
  },
  colaboradores: {
    title: "Colaboradores",
    body: <CollabSection />,
  },
  metodologia: {
    title: "Metodología",
    body: <MethodologySection />,
  },
  actividades: {
    title: "Actividades de Aprendizaje",
    body: <ActivitySection />,
  },
  laboratorios: {
    title: "Agenda de Laboratorios",
    body: <LabSection />,
  },
  licencia: {
    title: "Licencia Creative Commons",
    body: <LicenseSection />,
  },
};
