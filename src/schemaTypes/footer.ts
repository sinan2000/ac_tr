// sanity/schemas/footer.ts
import { defineField, defineType } from 'sanity';

export const footer = defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Navbar Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        // Quick Links Section
        defineField({
            name: 'quickLinks',
            title: 'Quick Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Link Name',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'link',
                            title: 'URL',
                            type: 'url',
                            validation: (Rule) => Rule.required().uri({
                                scheme: ['http', 'https'],
                            }),
                        }),
                    ],
                },
            ],
        }),

        // Contact Us Section
        defineField({
            name: 'contactUs',
            title: 'Contact Us',
            type: 'object',
            fields: [
                defineField({
                    name: 'address',
                    title: 'Address',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: 'phone',
                    title: 'Phone Number',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: 'email',
                    title: 'Email Address',
                    type: 'email',
                    validation: (Rule) => Rule.required(),
                }),
            ],
        }),

        // Social Section
        defineField({
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'platform',
                            title: 'Social Media Platform',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Facebook', value: 'facebook' },
                                    { title: 'Instagram', value: 'instagram' },
                                    { title: 'LinkedIn', value: 'linkedin' },
                                    { title: 'YouTube', value: 'youtube' },
                                    { title: 'WhatsApp', value: 'whatsapp' },
                                ],
                            },
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'url',
                            title: 'Profile URL',
                            type: 'url',
                            validation: (Rule) => Rule.required().uri({
                                scheme: ['http', 'https'],
                            }),
                        }),
                    ],
                },
            ],
        }),
    ],
});
