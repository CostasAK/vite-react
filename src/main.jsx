import "./index.css";

import { Helmet } from "react-helmet";
import { Root } from "./layout/Root";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

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
