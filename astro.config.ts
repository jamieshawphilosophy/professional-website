// astro.config.ts
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import { defineConfig, envField } from "astro/config";
import { loadEnv } from "vite";
import { coerceBoolean } from "./src/utils";
import { parseString } from "./src/utils";
// get the current mode from the NODE_ENV environment variable
const mode = process.env.NODE_ENV || "development";

const {
  PUBLIC_SANITY_API_VERSION,
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_BASE_PATH,
  PUBLIC_SANITY_USE_CDN,
} = loadEnv(mode, process.cwd(), "");
// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: "https://jamieshawphilsophy-staging.netlify.app",

  experimental: {
    env: {
      schema: {
        PUBLIC_SANITY_PROJECT_ID: envField.string({
          context: "client",
          access: "public",
        }),
        PUBLIC_SANITY_DATASET: envField.string({
          context: "client",
          access: "public",
          default: "production",
        }),
        PUBLIC_SANITY_API_VERSION: envField.string({
          context: "client",
          access: "public",
          default: "2024-05-09",
        }),
        PUBLIC_SANITY_USE_CDN: envField.boolean({
          context: "client",
          access: "public",
          default: false,
        }),
        PUBLIC_SANITY_STUDIO_BASE_PATH: envField.string({
          context: "client",
          access: "public",
          default: "/admin",
        }),
        PUBLIC_SANITY_VISUAL_EDITING_ENABLED: envField.boolean({
          context: "client",
          access: "public",
          default: true,
        }),
        SANITY_API_READ_TOKEN: envField.string({
          context: "server",
          access: "secret",
        }),
      },
    },
  },

  integrations: [
    sitemap(),
    sanity({
      projectId: parseString(PUBLIC_SANITY_PROJECT_ID),
      dataset: parseString(PUBLIC_SANITY_DATASET),
      apiVersion: parseString(PUBLIC_SANITY_API_VERSION),
      useCdn: coerceBoolean(PUBLIC_SANITY_USE_CDN),
      studioBasePath: parseString(PUBLIC_SANITY_STUDIO_BASE_PATH),
      stega: {
        studioUrl: parseString(PUBLIC_SANITY_STUDIO_BASE_PATH),
      },
    }),
    react(),
  ],

  adapter: netlify(),
});
