import { defineField, defineType } from 'sanity';

export const aboutUsPage = defineType({
    name: 'aboutUsPage',
    title: 'About Us Pages',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            validation: (Rule) => Rule.required().min(10).max(200),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            options: {
                layout: 'grid',
            },
            validation: (Rule) => Rule.required().min(1).max(5),
        }),
    ],
});
