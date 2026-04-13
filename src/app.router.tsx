import { createBrowserRouter } from "react-router";
import { AppLayout } from "./AppLayout";
import { HomePage } from "./pages/HomePage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      /* Aquí irán tus futuras rutas, por ejemplo:
      {
        path: "dashboard",
        element: <Dashboard />,
      }, 
      */
    ],
  },
]);
