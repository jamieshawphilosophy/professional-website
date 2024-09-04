import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "@schema/index";

export default defineConfig({
  name: "jamieShawPhilosophy",
  title: "Jamie Shaw Philosophy",
  projectId: import.meta.env["PUBLIC_SANITY_PROJECT_ID"],
  dataset: import.meta.env["PUBLIC_SANITY_DATASET"],
  apiVersion: import.meta.env["PUBLIC_SANITY_API_VERSION"],
  useCdn: import.meta.env["PUBLIC_SANITY_USE_CDN"],
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
