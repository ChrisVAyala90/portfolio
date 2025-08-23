import {HeroUIProvider, ToastProvider} from "@heroui/react";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import {ThemeProvider} from "./contexts/theme-context.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <ThemeProvider>
        <ToastProvider />
        <main className="text-foreground bg-background">
          <App />
        </main>
      </ThemeProvider>
    </HeroUIProvider>
  </React.StrictMode>,
);
