// sanity/schemas/navbar.ts
import { defineField, defineType } from 'sanity';

export const navbar = defineType({
    name: 'navbar',
    title: 'Navbar',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Navbar Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'menuItems',
            title: 'Menu Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Menu Item Title',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'link',
                            title: 'Link',
                            type: 'url', // Can be set to internal link logic as well.
                        }),
                        defineField({
                            name: 'dropdownItems',
                            title: 'Dropdown Items',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        defineField({
                                            name: 'title',
                                            title: 'Dropdown Item Title',
                                            type: 'string',
                                            validation: (Rule) => Rule.required(),
                                        }),
                                        defineField({
                                            name: 'link',
                                            title: 'Dropdown Item Link',
                                            type: 'url', // Optional: Can be customized for internal links.
                                        }),
                                    ],
                                },
                            ],
                        }),
                    ],
                },
            ],
            options: { sortable: true }, // Allows sorting within the array.
        }),
    ],
});
