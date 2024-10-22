import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "0m1l86ta",
    dataset: "production",
    apiVersion: "2024-01-01",
    token: process.env.SANITY_API_WRITE_TOKEN,
    useCdn: false,
});