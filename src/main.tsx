import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { PoliLibro } from "./PoliLibro";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PoliLibro />
  </StrictMode>,
);
