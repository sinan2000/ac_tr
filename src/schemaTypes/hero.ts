import { defineField, defineType } from 'sanity';

export const heroSection = defineType({
    name: 'heroSection',
    title: 'Hero Section',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule) => Rule.required().min(10).max(100),
        }),
        defineField({
            name: 'subtitle',
            type: 'text',
            title: 'Subtitle',
            validation: (Rule) => Rule.required().min(20).max(300),
        }),
        defineField({
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [{ type: 'image', options: { hotspot: true } }],
            options: {
                layout: 'grid',
            },
            validation: (Rule) => Rule.required().min(1).max(5),
        }),
    ],
});
