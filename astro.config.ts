// astro.config.ts
// Astro Integrations
import sitemap from "@astrojs/sitemap";
// Astro Configuration
import { defineConfig, passthroughImageService } from "astro/config";
import { SITE } from "./src/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  output: "static",
  site: SITE.website,
  image: {
    service: passthroughImageService(),
  },
  // Astro Integrations
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
