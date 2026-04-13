import { RouterProvider } from "react-router";
import { appRouter } from "./app.router";
import "./index.css";
export const PoliLibro = () => {
  return <RouterProvider router={appRouter} />;
};
