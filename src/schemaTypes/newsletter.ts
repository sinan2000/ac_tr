import { defineField, defineType } from 'sanity';

export const newsletter = defineType({
    name: 'newsletter',
    title: 'Newsletter',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Publish Date',
            type: 'datetime',
        }),
    ],
});
