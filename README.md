Polilibro Académico — Teoría Computacional

Polilibro académico interactivo para la materia de **Teoría Computacional**, desarrollado con **React + TypeScript** y **Vite**.

## Tecnologías

| Tecnología                                                                     | Uso                              |
| ------------------------------------------------------------------------------ | -------------------------------- |
| [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | Interfaz y tipado                |
| [Vite](https://vite.dev/)                                                      | Servidor de desarrollo y build   |
| [React Router 7](https://reactrouter.com/)                                     | Navegación entre páginas         |
| [Tailwind CSS 4](https://tailwindcss.com/)                                     | Estilos                          |
| [shadcn/ui](https://ui.shadcn.com/) + [Base UI](https://base-ui.com/)          | Componentes de interfaz          |
| [Motion](https://motion.dev/)                                                  | Animaciones                      |
| [Lucide React](https://lucide.dev/)                                            | Íconos                           |
| React Compiler                                                                 | Optimización automática de React |
| ESLint                                                                         | Revisión de código               |

## Requisitos previos

Necesitas tener instalado:

| Herramienta                    | Versión recomendada          | Verificar con   |
| ------------------------------ | ---------------------------- | --------------- |
| [Node.js](https://nodejs.org/) | **20.19 o superior** (o 22+) | `node -v`       |
| npm                            | Viene incluido con Node.js   | `npm -v`        |
| [Git](https://git-scm.com/)    | Cualquier versión reciente   | `git --version` |

> Vite 8 requiere una versión reciente de Node.js. Si `npm install` o `npm run dev` te da errores raros, lo primero es actualizar Node.

## Cómo correr el proyecto

```bash
# 1. Clonar el repositorio
git clone https://github.com/Leolopez520/polilibro-academico.git

# 2. Entrar a la carpeta
cd polilibro-academico

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

Después abre en tu navegador la dirección que aparece en la terminal (normalmente <http://localhost:5173>).

Para detener el servidor presiona `Ctrl + C`.

## Scripts disponibles

| Comando           | Descripción                                                                  |
| ----------------- | ---------------------------------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con recarga automática                      |
| `npm run build`   | Revisa los tipos con TypeScript y genera la versión de producción en `dist/` |
| `npm run preview` | Sirve localmente el build para probarlo                                      |
| `npm run lint`    | Revisa el código con ESLint                                                  |

## Agregar componentes de shadcn/ui

El proyecto usa shadcn/ui. Para agregar un componente nuevo:

```bash
npx shadcn@latest add nombre-del-componente
```

Por ejemplo: `npx shadcn@latest add button`.

## Problemas comunes

- **`npm: command not found`**: Node.js no está instalado. Descárgalo desde [nodejs.org](https://nodejs.org/).
- **Errores de versión de Node al instalar o correr**: actualiza Node.js a la versión LTS más reciente.
- **Falla `npm install`**: borra `node_modules` y vuelve a ejecutar `npm install` (no borres `package-lock.json`, así todos usan las mismas versiones).
- **El puerto 5173 está ocupado**: Vite usará otro puerto automáticamente; revisa la URL en la terminal.
- **`npm run build` marca errores de TypeScript**: corrígelos antes de subir tus cambios; el build no continúa si hay errores de tipos.
