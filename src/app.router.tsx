import { createBrowserRouter } from "react-router";
import { AppLayout } from "./AppLayout";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);
