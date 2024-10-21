// schema/heroSection.ts
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
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            type: 'text',
            title: 'Subtitle',
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: 'backgroundImage',
            type: 'image',
            title: 'Background Image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'callToAction',
            type: 'object',
            title: 'Call to Action',
            fields: [
                { name: 'text', type: 'string', title: 'Button Text' },
                { name: 'url', type: 'url', title: 'Button URL' },
            ],
        }),
    ],
});
