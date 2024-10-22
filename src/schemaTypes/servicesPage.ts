import { defineField, defineType } from 'sanity';

export const services = defineType({
    name: 'service',
    title: 'Services Pages',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Service Title',
            type: 'string',
            validation: (Rule) => Rule.required().min(5).max(100),
        }),
        defineField({
            name: 'description',
            title: 'Service Description',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: (Rule) => Rule.required().min(1).max(5),
        }),
    ],
});
