// sanity.config.ts
import {
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
} from "astro:env/client";
import { schema } from "@sanity/schemaTypes";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { structure } from "./src/sanity/structure";
export default defineConfig({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: location.origin,
    }),
    visionTool(),
  ],
  schema,
});
