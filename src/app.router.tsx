import { createBrowserRouter } from "react-router";
import { AppLayout } from "./AppLayout";
import { HomePage } from "./pages/HomePage";
import { Unidades } from "./pages/Unidades";

import UnidadDetalle from "./components/NavigationGrid/sections/unitsContent/UnitDetail";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "unidades", // Se accede como /unidades
        element: <Unidades />,
      },
      {
        path: "unidades/:num", // Se accede como /unidades/1
        element: <UnidadDetalle />, // <--- Necesitas crear este componente
      },
    ],
  },
]);
