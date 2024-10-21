// schema/product.ts
import { defineField, defineType } from 'sanity';

export const product = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Product Title',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Product Description',
        }),
        defineField({
            name: 'price',
            type: 'number',
            title: 'Price',
        }),
        defineField({
            name: 'images',
            type: 'array',
            title: 'Product Images',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'category',
            type: 'reference',
            to: [{ type: 'productCategory' }],
            title: 'Category',
        }),
    ],
});
