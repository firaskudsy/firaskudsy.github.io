import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    topic: z.enum(['Agents', 'Evals', 'RAG', 'Security', 'Engineering', 'Science']),
    tags: z.array(z.string()).default([]),
    kind: z.enum(['note', 'article']).default('note'),
    source: z
      .object({
        title: z.string(),
        url: z.url(),
        publisher: z.string(),
        date: z.coerce.date(),
      })
      .optional(),
    linkedin: z.url().or(z.literal('')).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
