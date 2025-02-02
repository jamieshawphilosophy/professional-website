// src/sanity/structure/content.ts

import { DocumentIcon, InsertAboveIcon, InsertBelowIcon } from "@sanity/icons";
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
          .items([
            S.listItem()
              .title("Misc")
              .id("item-misc")
              .child(
                S.list()
                  .id("list-misc")
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
