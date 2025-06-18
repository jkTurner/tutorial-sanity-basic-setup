import { defineType } from "sanity";
 
export const post = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
        },
        {
            name: 'body',
            title: 'Body',
            type: 'text',
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true, // enables image cropping focus in the studio
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative Text",
                    description: "Describe the image for screen readers",
                }
            ]
        }
    ]
})