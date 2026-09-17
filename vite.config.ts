import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // "/" sirve para un repo de organización llamado <org>.github.io (la URL queda en
  // la raíz). Si por algún motivo el catálogo va en un repo común, acá va
  // "/<nombre-del-repo>/" o los assets no cargan.
  base: "/",
  plugins: [react()],
  server: {
    port: 5176,
  },
});
