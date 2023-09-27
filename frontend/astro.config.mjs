import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sanity from 'astro-sanity';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jamieshawphilosophy-staging.netlify.app/',
  integrations: [sitemap(), sanity({
    projectId: "homselal",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: true
  }), tailwind({
    applyBaseStyles: true
  })],
});
