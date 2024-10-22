import { defineField, defineType } from 'sanity';

export const homePage = defineType({
    name: 'homePage',
    title: 'Home Pages',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'heroSection',
            title: 'Hero Section',
            type: 'reference',
            to: [{ type: 'heroSection' }],
        }),
        defineField({
            name: 'whyChooseUs',
            title: 'Why Choose Us Section',
            type: 'reference',
            to: [{ type: 'whyChooseUs' }],
        }),
        defineField({
            name: 'aboutUs',
            title: 'About Us Section',
            type: 'reference',
            to: [{ type: 'aboutUs' }],
        }),
    ],
});
