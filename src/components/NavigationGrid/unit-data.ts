import {
  BookOpen,
  ClipboardCheck,
  FileText,
  List,
  Lightbulb,
  Users,
  Handshake,
  Compass,
  CalendarDays,
  FlaskConical,
  Scale,
  type LucideIcon,
} from "lucide-react";

export interface CardData {
  icon: LucideIcon;
  title: string;
  desc: string;
  section: string;
  color: string;
}

export const cards: CardData[] = [
  {
    icon: BookOpen,
    title: "Bienvenida",
    desc: "El porqué y para quién de este recurso.",
    section: "bienvenida",
    color: "text-primary",
  },
  {
    icon: ClipboardCheck,
    title: "Examen diagnóstico",
    desc: "Evaluación de conocimientos previos.",
    section: "examen",
    color: "text-red-400",
  },
  {
    icon: FileText,
    title: "Contenido",
    desc: "Propósito y estructura de la unidad.",
    section: "contenido",
    color: "text-amber-400",
  },
  {
    icon: List,
    title: "Programa",
    desc: "Programa sintético de la UA.",
    section: "programa",
    color: "text-green-400",
  },
  {
    icon: Lightbulb,
    title: "Introducción",
    desc: "Contexto y relevancia de los S.O.",
    section: "introduccion",
    color: "text-emerald-400",
  },
  {
    icon: Users,
    title: "Creadores",
    desc: "Información sobre los autores.",
    section: "creadores",
    color: "text-purple-400",
  },
  {
    icon: Handshake,
    title: "Colaboradores",
    desc: "Equipo de desarrollo.",
    section: "colaboradores",
    color: "text-orange-400",
  },
  {
    icon: Compass,
    title: "Metodología",
    desc: "Estrategia y métodos de aprendizaje.",
    section: "metodologia",
    color: "text-sky-400",
  },
  {
    icon: CalendarDays,
    title: "Actividades",
    desc: "Ejercicios y dinámicas.",
    section: "actividades",
    color: "text-pink-400",
  },
  {
    icon: FlaskConical,
    title: "Laboratorios",
    desc: "Prácticas de código.",
    section: "laboratorios",
    color: "text-violet-400",
  },
  {
    icon: Scale,
    title: "Licencia",
    desc: "Términos de uso CC BY-NC 4.0.",
    section: "licencia",
    color: "text-muted-foreground",
  },
];
