import { defineField, defineType } from 'sanity';

export const aboutUs = defineType({
    name: 'aboutUs',
    title: 'About Us Section',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'button',
            title: 'Button',
            type: 'object',
            fields: [
                defineField({
                    name: 'text',
                    title: 'Button Text',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: 'url',
                    title: 'Button URL',
                    type: 'url',
                    validation: (Rule) => Rule.required().uri({
                        scheme: ['http', 'https'],
                    }),
                }),
            ],
        }),
    ],
});
