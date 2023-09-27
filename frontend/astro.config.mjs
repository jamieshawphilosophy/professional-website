import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sanity from 'astro-sanity';
import tailwind from "@astrojs/tailwind";
import {loadEnv} from "vite";

const env = loadEnv('', process.cwd(), '')

// https://astro.build/config
export default defineConfig({
  site: 'https://jamieshawphilosophy.netlify.app/',
  // Your public domain, e.g.: https://my-site.dev/
  integrations: [sitemap(), sanity({
    projectId: env.PUBLIC_SANITY_PROJECT_ID,
    dataset: env.PUBLIC_SANITY_DATASET,
    apiVersion: env.PUBLIC_SANITY_API_VERSION,
    useCdn: true
  }), tailwind({applyBaseStyles: true,})]
});
