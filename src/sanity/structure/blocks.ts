// src/sanity/structure/blocks.ts
import { BlockElementIcon } from "@sanity/icons";
import { schema } from "@sanity/schemaTypes/index.ts";
import type { StructureBuilder } from "sanity/structure";
import { defaultBlocks } from "../schemaTypes/blocks/index.ts";
import { blocksMenu } from "./blocks-menu.ts";
import { blocksRequest } from "./queries.ts";

export const blocks = (customBlockNames: string[]) => {
  const { types: schemaTypes } = schema;
  return (S: StructureBuilder) => {
    const customBlockSchemaTypes = customBlockNames.map((blockName) => {
      const schemaType = schemaTypes.find(
        (schema) => schema.name === blockName
      );
      if (schemaType === undefined)
        throw new Error(`Block ${blockName} not found in schema`);
      return schemaType;
    });

    const blocks = [...customBlockSchemaTypes, ...defaultBlocks];

    const filter = blocksRequest(blocks);

    return S.listItem()
      .title("Blocks")
      .id("item-blocks")
      .icon(BlockElementIcon)
      .child(
        S.documentList()
          .id("list-blocks")
          .title("Blocks")
          .menuItems(blocksMenu(S, blocks))
          .filter(filter)
      );
  };
};
