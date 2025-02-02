// src/sanity/structure/siteSettings.ts
import { ControlsIcon } from "@sanity/icons";
import type { StructureBuilder } from "sanity/structure";

export const settings = (S: StructureBuilder) =>
  S.listItem()
    .id("siteSettings")
    .schemaType("siteSettings")
    .title("Site Settings")
    .icon(ControlsIcon)
    .child(
      S.editor()
        .id("siteSettings")
        .schemaType("siteSettings")
        .documentId("siteSettings")
    );
