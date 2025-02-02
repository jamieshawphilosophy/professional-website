// src/sanity/structure/management.ts
import { CogIcon } from "@sanity/icons";
import type { StructureBuilder } from "sanity/structure";

export const management = (S: StructureBuilder) =>
  S.listItem()
    .title("Management")
    .icon(CogIcon)
    .child(
      S.list()
        .title("Management")
        .items([
          S.documentTypeListItem("author").title("Authors"),
          S.documentTypeListItem("category").title("Categories"),
        ])
    );
