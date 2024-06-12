import { defineField } from "sanity";

const landingpage_content = {
    name: "landingpage_content",
    title: "Landing Page Content",
    type: "document",
    fields: [
        defineField({
        name: "title",
        title: "Title",
        type: "string",
        validation: (rule) => rule.required(),
        }),
        defineField({
        name: "description",
        title: "Description",
        type: "text",
        validation: (rule) => rule.required(),
        }),
        defineField({
        name: "image",
        title: "Image",
        type: "image",
        validation: (rule) => rule.required(),
        }),
    ],
    };