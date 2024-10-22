import { defineField, defineType } from 'sanity';

export const whyChooseUs = defineType({
    name: 'whyChooseUs',
    title: 'Why Choose Us Section',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Section Title',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'cardTitle',
                            type: 'string',
                            title: 'Card Title',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'cardDescription',
                            type: 'text',
                            title: 'Card Description',
                            validation: (Rule) => Rule.max(200),
                        }),
                    ],
                },
            ],
            validation: (Rule) => Rule.length(4).error('You must provide exactly 4 cards'),
        }),
    ],
});
