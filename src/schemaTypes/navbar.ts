// sanity/schemas/navbar.ts
import { defineField, defineType } from 'sanity';

export const navbar = defineType({
    name: 'navbar',
    title: 'Navbar',
    type: 'document',
    fields: [
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true }, // Allows for better image cropping.
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
                            type: 'url', // Optional: Set to internal link logic
                            hidden: ({ parent }) => !!parent?.dropdownItems, // Hide link field if it's a dropdown
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
                            hidden: ({ parent }) => !!parent?.link, // Hide dropdown if it's a direct link
                        }),
                        defineField({
                            name: 'order',
                            title: 'Order',
                            type: 'number',
                            validation: (Rule) => Rule.required().min(1),
                        }),
                    ],
                },
            ],
            options: { sortable: true }, // Allow sorting
        }),
    ],
});
