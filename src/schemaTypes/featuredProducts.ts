// schema/featuredProducts.ts
import { defineField, defineType } from 'sanity';

export const featuredProducts = defineType({
    name: 'featuredProducts',
    title: 'Featured Products',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Section Title',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'products',
            type: 'array',
            title: 'Featured Products',
            of: [{ type: 'reference', to: [{ type: 'product' }] }],
        }),
    ],
});
