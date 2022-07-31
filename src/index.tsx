import * as React from "react";
import { createRoot } from "react-dom/client";
import KonvaDemo from "./KonvaDemo";

createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <KonvaDemo />
  </React.StrictMode>
);
