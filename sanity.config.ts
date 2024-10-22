import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '@/schemaTypes'

export default defineConfig({
    name: 'default',
    title: 'AC TR',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    basePath: '/admin',
    plugins: [
        structureTool(), 
        visionTool()
    ],
    schema: {
        types: schemaTypes,
    },
    document: {
        newDocumentOptions: (prev, { creationContext}) => {
            const { type, schemaType } = creationContext;
            if ( type === "structure" && schemaType === "newsletterSignup") {
                return [];
            }
            return prev;
        }
    }
})
