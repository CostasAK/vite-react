import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Helmet } from "react-helmet-async";
import { Root } from "./layout/Root";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <StrictMode>
    <Helmet
      defaultTitle={import.meta.env.VITE_APP_NAME}
      titleTemplate={`%s - ${import.meta.env.VITE_APP_NAME}`}
    />
    <Root />
  </StrictMode>,
);
