// src/sanity/studioStructure/index.ts

import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Website Admin")
    .items([
      S.listItem()
        .id("siteSettings")
        .schemaType("siteSettings")
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.divider(),
      S.listItem()
        .title("Content")
        .child(
          S.list()
            .title("Content")
            .items([
              S.documentTypeListItem("post").title("Posts"),
              S.documentTypeListItem("page").title("Pages"),
              S.documentTypeListItem("block").title("Blocks"),
            ])
        ),
      S.listItem()
        .title("Management")
        .child(
          S.list()
            .title("Management")
            .items([
              S.documentTypeListItem("author").title("Authors"),
              S.documentTypeListItem("category").title("Categories"),
            ])
        ),
    ]);
