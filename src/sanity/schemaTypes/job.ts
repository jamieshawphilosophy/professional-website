//src/saniy/schemaTypes/job.ts

import { CaseIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const jobType = defineType({
  name: "job",
  title: "Job",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "Institution/Company",
      type: "string",
    }),
    defineField({
      name: "location",
      type: "string",
    }),
    defineField({
      name: "startDate",
      type: "date",
    }),
    defineField({
      name: "endDate",
      type: "date",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "company",
    },
  },
});
