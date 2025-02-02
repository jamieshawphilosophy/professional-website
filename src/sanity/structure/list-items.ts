import type { StructureBuilder } from "sanity/structure";
import { schema } from "../schemaTypes/index.ts";
export const listItems = (schemaNames: string[]) => {
  const { types: schemaTypes } = schema;

  return (S: StructureBuilder) => {
    return schemaNames
      .map((schemaName: string) => {
        const schemaType = schemaTypes.find(
          (schema) => schema.name === schemaName
        );
        if (!schemaType) {
          const title = `${schemaName[0]?.toUpperCase()}${schemaName.slice(1)}s`;
          return S.listItem()
            .title(title)
            .id(`item-${schemaName}`)
            .child(
              S.documentList()
                .schemaType(schemaName)
                .title(title)
                .filter(`_type == "${schemaName}"`)
            );
        }
        return S.listItem()
          .title(schemaType.title ?? schemaType.name)
          .id(`item-${schemaType.name}`)
          .icon(schemaType.icon ?? "")
          .schemaType(schemaType.name)
          .child(
            S.documentList()
              .id(`list-${schemaType.name}`)
              .title(schemaType.title ?? schemaType.name)
              .filter(`_type == "${schemaType.name}"`)
          );
      })
      .filter((result) => result !== null);
  };
};
