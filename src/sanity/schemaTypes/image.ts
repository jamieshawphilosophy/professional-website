// src/sanity/schemaTypes/image.ts

// Attribution: https://github.com/nuagedelait/sanity-pagebuilder/

export interface ImageType {
  type: string;
  name: string;
  fields: {
    name: string;
    title: string;
    description: string;
    type: string;
  }[];
  options: {
    hotspot: boolean;
    storeOriginalFilename: boolean;
  };
}

export const imageType: ImageType = {
  type: "image",
  name: "image",
  fields: [
    {
      name: "alt",
      title: "Alternative text",
      description:
        "Optional. Consider adding alternative text to make content more accessible.",
      type: "string",
    },
  ],
  options: {
    hotspot: true,
    storeOriginalFilename: false,
  },
};
