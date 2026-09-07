import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { routeMetadata } from "./build/route-metadata";

export default defineConfig({
  plugins: [react(), tailwindcss(), routeMetadata()],
});
