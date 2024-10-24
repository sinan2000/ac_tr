import { defineField, defineType } from 'sanity';

export const newsPage = defineType({
    name: 'newsPage',
    title: 'News Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required().min(10).max(80),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'A brief description of the news',
            validation: Rule => Rule.required().min(50),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Main image for the news',
        }),
        defineField({
            name: 'publishingDate',
            title: 'Publishing Date',
            type: 'datetime',
            validation: Rule => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
            date: 'publishingDate',
        },
        prepare(selection) {
            const { title, media, date } = selection
            return {
                title: `${title}`,
                subtitle: new Date(date).toLocaleDateString(),
                media,
            }
        },
    },
})