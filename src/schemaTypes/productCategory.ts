// schema/productCategory.ts
import { defineField, defineType } from 'sanity';

export const productCategory = defineType({
    name: 'productCategory',
    title: 'Product Category',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Category Name',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Category Description',
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Category Image',
        }),
        defineField({
            name: 'products',
            type: 'array',
            title: 'Products',
            of: [{ type: 'reference', to: [{ type: 'product' }] }],
        }),
    ],
});
