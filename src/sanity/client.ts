import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "0m1l86ta",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});