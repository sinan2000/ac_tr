import { defineField, defineType } from 'sanity';

export const category = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required().min(3).max(50),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Optional description of the category',
        }),
    ],
});
