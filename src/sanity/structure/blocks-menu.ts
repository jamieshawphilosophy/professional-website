import { ComposeIcon } from "@sanity/icons";
import type { SchemaTypeDefinition } from "sanity";
import type { StructureBuilder } from "sanity/structure";
import { prefix } from "../schemaTypes/blocks/block.ts";

export const blocksMenu = (
  S: StructureBuilder,
  blocks: SchemaTypeDefinition[]
) => {
  return blocks.map((block: SchemaTypeDefinition) =>
    S.menuItem()
      .title(`Create ${block.title?.replace(prefix, "")}`)
      .icon(block.icon ? block.icon : ComposeIcon)
      .intent({ type: "create", params: { type: block.name } })
      .showAsAction(true)
  );
};
