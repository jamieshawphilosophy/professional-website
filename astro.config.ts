// astro.config.ts
// Astro Integrations
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
// Astro Configuration
import { defineConfig } from "astro/config";
import { SITE } from "./src/config";
// Utility Functions

// get the current mode from the NODE_ENV environment variable

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: SITE.website,
  // Astro Integrations
  integrations: [sitemap(), react()],
});
