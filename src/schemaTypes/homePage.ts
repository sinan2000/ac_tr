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
            name: 'favoriteCategories',
            title: 'Favorite Categories',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'category' }] }],
            description: 'Select up to 4 categories to feature on the home page.',
            validation: (Rule) => Rule.max(4),
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
