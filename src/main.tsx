import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./commons/app/routes.tsx";
import { Translation } from "./commons/app/context/Translation.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Translation>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Translation>
  </StrictMode>
);
