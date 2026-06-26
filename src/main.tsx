import {HeroUIProvider} from "@heroui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import {ThemeProvider} from "./contexts/theme-context.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </HeroUIProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
