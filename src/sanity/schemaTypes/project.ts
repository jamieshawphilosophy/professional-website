// src/sanity/schemaTypes/project.ts

import { defineField, defineType } from "sanity";
export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  description: "Research projects and academic initiatives",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Name of the research project",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Detailed overview of the project goals and scope",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      description: "Current state of the project (e.g., ongoing, completed)",
      options: {
        list: ["Ongoing", "Completed", "Planning"],
      },
      validation: (rule) => rule.required(),
    }),
  ],
});
