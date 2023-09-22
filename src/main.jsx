import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Root } from "./layout/Root";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
