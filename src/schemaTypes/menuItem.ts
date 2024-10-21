import { defineField, defineType } from 'sanity';

export const menuItem = defineType({
    name: 'menuItem',
    title: 'Menu Item',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'link',
            type: 'url', // You can also create an internal link type if needed
            title: 'Link',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'order',
            type: 'number',
            title: 'Order',
            validation: (Rule) => Rule.min(1),
        }),
    ],
});