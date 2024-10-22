'use server';

import { client } from "@/sanity/client";

export async function addNewsletter({ email }: { email: string }) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error('Invalid email address');
    }

    try {
        const document = {
            _type: 'newsletterSignup',
            email,
            date: new Date().toISOString(),
        };

        await client.create(document);
    } catch (error) {
        console.error('Failed to add to signups: ', error);
    }
}