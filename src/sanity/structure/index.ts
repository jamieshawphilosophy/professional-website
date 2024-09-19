// src/sanity/studioStructure/index.ts

import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Website Admin")
    .items([
      S.documentTypeListItem("siteSettings").title("Site Settings"),
      S.divider(),
      S.listItem()
        .title("Content")
        .child(
          S.list()
            .title("Content")
            .items([
              S.documentTypeListItem("post").title("Posts"),
              S.documentTypeListItem("page").title("Pages"),
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
