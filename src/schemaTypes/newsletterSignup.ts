import { defineField, defineType } from 'sanity';

export const newsletterSignup = defineType({
    name: 'newsletterSignup',
    title: 'Newsletter Signups',
    type: 'document',
    fields: [
        defineField({
            name: 'email',
            title: 'Email',
            type: 'email',
            validation: (Rule) => Rule.required(),
            readOnly: true,
        }),
        defineField({
            name: 'date',
            title: 'Signup Date',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
            },
            initialValue: () => new Date().toISOString(),
            readOnly: true,
        }),
    ],
    readOnly: true,
});
