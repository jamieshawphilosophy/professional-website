// src/sanity/structure/content.ts

import {
  DocumentIcon,
  EarthGlobeIcon,
  InsertAboveIcon,
  InsertBelowIcon,
} from "@sanity/icons";
import type { StructureBuilder } from "sanity/structure";
import { blocks } from "./blocks.ts";
import type { CustomSchemaTypes } from "./index.ts";
import { listItems } from "./list-items.ts";

export const content = (customSchemaTypes: CustomSchemaTypes) => {
  const { content: customContentSchemas, blocks: customBlocksSchemas } =
    customSchemaTypes;
  return (S: StructureBuilder) =>
    S.listItem()
      .title("Content")
      .icon(DocumentIcon)
      .child(
        S.list()
          .id("_content")
          .title("Content")
          .items([
            S.listItem()
              .title("Site-wide Header and Footer")
              .icon(EarthGlobeIcon)
              .id("item-header-and-footer-site-wide")
              .child(
                S.list()
                  .id("item-header-and-footer-site-wide")
                  .items([
                    S.listItem()
                      .title("Global Header")
                      .icon(InsertAboveIcon)
                      .child(
                        S.editor()
                          .title("Global header")
                          .schemaType("header")
                          .documentId("global-header")
                          .initialValueTemplate("header")
                      ),
                    S.listItem()
                      .title("Global Footer")
                      .icon(InsertBelowIcon)
                      .child(
                        S.editor()
                          .title("Global footer")
                          .schemaType("footer")
                          .documentId("global-footer")
                          .initialValueTemplate("footer")
                      ),
                  ])
              ),
            ...listItems([...customContentSchemas])(S),
            blocks(customBlocksSchemas)(S),
          ])
      );
};
