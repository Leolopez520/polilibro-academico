import {
  Cpu,
  GitBranch,
  HardDrive,
  FolderTree,
  Monitor,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface UnitTopic {
  title: string;
  content: string;
}

export interface Unit {
  num: string;
  title: string;
  desc: string;
  topics: string[];
  icon: LucideIcon;
  externalUrl: string;
  objective: string;
  sections: UnitTopic[];
}

export const units: Unit[] = [
  {
    num: "01",
    title: "Estructura de un sistema operativo",
    desc: "Identifica los sistemas operativos actuales y emergentes con base en su estructura, modos de operación y llamadas a sistema.",
    topics: [
      "Conceptos básicos",
      "Evolución",
      "Tipos de S.O.",
      "Llamadas a sistema",
    ],
    icon: Cpu,
    externalUrl:
      "https://www.escom.ipn.mx/docs/oferta/uaISC2020/teoriaComputacion_ISC2020.pdf",
    objective:
      "El alumno identificará la arquitectura interna de un sistema operativo, sus modos de operación, los servicios que ofrece al usuario y las llamadas a sistema que utiliza para interactuar con el hardware.",
    sections: [
      {
        title: "1.1 Conceptos básicos",
        content:
          "Un sistema operativo es el software de base que actúa como intermediario entre el usuario y el hardware. Gestiona los recursos (CPU, memoria, dispositivos) y proporciona una interfaz uniforme para ejecutar aplicaciones de manera segura y eficiente.",
      },
      {
        title: "1.2 Evolución histórica",
        content:
          "Desde los sistemas por lotes y de tiempo compartido hasta los sistemas distribuidos, móviles y en la nube. Cada generación introdujo conceptos clave: multiprogramación, multitarea, microkernels y virtualización.",
      },
      {
        title: "1.3 Tipos de sistemas operativos",
        content:
          "Monolíticos, por capas, microkernel, modulares e híbridos. Además se clasifican por su uso: tiempo real, embebidos, de escritorio, servidores, móviles y de red.",
      },
      {
        title: "1.4 Modos de operación y llamadas a sistema",
        content:
          "El procesador opera en modo usuario y modo kernel. Las llamadas a sistema (system calls) son la interfaz controlada para que los procesos soliciten servicios privilegiados como E/S, manejo de archivos o creación de procesos.",
      },
    ],
  },
  {
    num: "02",
    title: "Administración de procesos",
    desc: "Administra procesos e hilos con base en su comunicación, sincronización y planificación.",
    topics: ["Procesos", "Hilos", "Sincronización", "Planificación"],
    icon: GitBranch,
    externalUrl:
      "https://www.escom.ipn.mx/docs/oferta/uaISC2020/teoriaComputacion_ISC2020.pdf",
    objective:
      "El alumno administrará la ejecución concurrente de procesos e hilos, aplicando mecanismos de sincronización, comunicación y algoritmos de planificación para optimizar el uso de la CPU.",
    sections: [
      {
        title: "2.1 Procesos e hilos",
        content:
          "Un proceso es una instancia de un programa en ejecución con su propio espacio de memoria. Los hilos comparten el espacio de direcciones y permiten paralelismo ligero dentro del mismo proceso.",
      },
      {
        title: "2.2 Comunicación entre procesos (IPC)",
        content:
          "Mecanismos como pipes, colas de mensajes, memoria compartida y sockets permiten que procesos intercambien información de forma controlada.",
      },
      {
        title: "2.3 Sincronización",
        content:
          "Semáforos, mutex, monitores y variables de condición resuelven problemas clásicos como el productor-consumidor, lectores-escritores y la cena de los filósofos, evitando condiciones de carrera y deadlocks.",
      },
      {
        title: "2.4 Planificación de la CPU",
        content:
          "Algoritmos FCFS, SJF, Round Robin, prioridades y colas multinivel determinan qué proceso se ejecuta y por cuánto tiempo, balanceando equidad, throughput y tiempo de respuesta.",
      },
    ],
  },
  {
    num: "03",
    title: "Administración de memoria",
    desc: "Administra la memoria principal y secundaria con base en paginación, segmentación y swapping.",
    topics: ["Memoria virtual", "Paginación", "Segmentación", "Swapping"],
    icon: HardDrive,
    externalUrl:
      "https://www.escom.ipn.mx/docs/oferta/uaISC2020/teoriaComputacion_ISC2020.pdf",
    objective:
      "El alumno gestionará la asignación, protección y traducción de direcciones de memoria utilizando técnicas de paginación, segmentación y memoria virtual.",
    sections: [
      {
        title: "3.1 Jerarquía de memoria",
        content:
          "Registros, caché L1/L2/L3, RAM y almacenamiento secundario forman una jerarquía donde cada nivel ofrece distinto balance entre velocidad, capacidad y costo.",
      },
      {
        title: "3.2 Paginación",
        content:
          "La memoria se divide en páginas de tamaño fijo. La MMU traduce direcciones virtuales a físicas usando tablas de páginas y un TLB para acelerar el proceso.",
      },
      {
        title: "3.3 Segmentación",
        content:
          "Divide la memoria en segmentos lógicos de tamaño variable (código, datos, pila), facilitando la protección y el compartimiento entre procesos.",
      },
      {
        title: "3.4 Memoria virtual y swapping",
        content:
          "Permite ejecutar procesos más grandes que la RAM disponible mediante paginación bajo demanda. Algoritmos como LRU, FIFO y Clock deciden qué páginas reemplazar al ocurrir un fallo de página.",
      },
    ],
  },
  {
    num: "04",
    title: "Sistema de archivos",
    desc: "Implementa la organización del sistema de archivos a partir de su estructura, asignación de espacio y optimización.",
    topics: ["Estructura", "Implementación", "Optimización", "Journaling"],
    icon: FolderTree,
    externalUrl:
      "https://www.escom.ipn.mx/docs/oferta/uaISC2020/teoriaComputacion_ISC2020.pdf",
    objective:
      "El alumno implementará la organización lógica y física de un sistema de archivos, considerando métodos de asignación, directorios y técnicas de recuperación.",
    sections: [
      {
        title: "4.1 Conceptos y atributos",
        content:
          "Un archivo es una unidad lógica de almacenamiento con atributos (nombre, tipo, tamaño, permisos, timestamps) y operaciones básicas: crear, leer, escribir, abrir, cerrar y eliminar.",
      },
      {
        title: "4.2 Estructuras de directorio",
        content:
          "Directorios de un nivel, dos niveles, jerárquicos en árbol, grafo acíclico y grafos generales permiten organizar grandes cantidades de archivos.",
      },
      {
        title: "4.3 Métodos de asignación",
        content:
          "Asignación contigua, enlazada e indexada (i-nodos) ofrecen distintos compromisos entre rendimiento de acceso secuencial, aleatorio y fragmentación.",
      },
      {
        title: "4.4 Journaling y recuperación",
        content:
          "Sistemas como ext4, NTFS o APFS usan journaling para registrar cambios antes de aplicarlos, garantizando consistencia ante fallos del sistema.",
      },
    ],
  },
  {
    num: "05",
    title: "Dispositivos de entrada y salida",
    desc: "Implementa la interacción de los dispositivos de E/S con el sistema operativo.",
    topics: ["Hardware de E/S", "Software de E/S", "Drivers", "DMA"],
    icon: Monitor,
    externalUrl:
      "https://www.escom.ipn.mx/docs/oferta/uaISC2020/teoriaComputacion_ISC2020.pdf",
    objective:
      "El alumno integrará los dispositivos de entrada y salida al sistema operativo mediante controladores, manejo de interrupciones y técnicas de transferencia.",
    sections: [
      {
        title: "5.1 Hardware de E/S",
        content:
          "Controladores de dispositivo, buses, puertos y registros constituyen el soporte físico para que el sistema se comunique con periféricos.",
      },
      {
        title: "5.2 Interrupciones y polling",
        content:
          "El polling consulta activamente el estado del dispositivo, mientras que las interrupciones notifican al CPU cuando hay un evento, liberándolo para otras tareas.",
      },
      {
        title: "5.3 Acceso directo a memoria (DMA)",
        content:
          "El DMA permite que los dispositivos transfieran datos a/desde memoria sin intervención constante de la CPU, mejorando significativamente el rendimiento.",
      },
      {
        title: "5.4 Capas del software de E/S",
        content:
          "Manejadores de interrupciones, drivers, software independiente del dispositivo y software a nivel de usuario forman las capas que abstraen la complejidad del hardware.",
      },
    ],
  },
  {
    num: "06",
    title: "Seguridad y virtualización",
    desc: "Incrementa la funcionalidad del S.O. con base en seguridad y virtualización.",
    topics: ["Amenazas", "Protección", "Máquinas virtuales", "Contenedores"],
    icon: ShieldCheck,
    externalUrl:
      "https://www.escom.ipn.mx/docs/oferta/uaISC2020/teoriaComputacion_ISC2020.pdf",
    objective:
      "El alumno aplicará mecanismos de seguridad y técnicas de virtualización para incrementar la confiabilidad y flexibilidad del sistema operativo.",
    sections: [
      {
        title: "6.1 Amenazas y vulnerabilidades",
        content:
          "Malware, escalación de privilegios, desbordamientos de buffer e ingeniería social son algunas amenazas comunes que el S.O. debe mitigar.",
      },
      {
        title: "6.2 Mecanismos de protección",
        content:
          "Autenticación, control de acceso (DAC, MAC, RBAC), cifrado, sandboxing y auditoría protegen recursos y datos del usuario.",
      },
      {
        title: "6.3 Virtualización",
        content:
          "Hipervisores tipo 1 (bare-metal) y tipo 2 (hosted) permiten ejecutar múltiples sistemas operativos sobre el mismo hardware con aislamiento.",
      },
      {
        title: "6.4 Contenedores",
        content:
          "Tecnologías como Docker o LXC virtualizan a nivel de sistema operativo, compartiendo el kernel pero aislando procesos, redes y sistemas de archivos.",
      },
    ],
  },
];

export const getUnitByNum = (num: string) => units.find((u) => u.num === num);
