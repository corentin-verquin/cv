import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    links: defineCollection({
      type: "data",
      source: "navbar.yaml",
      schema: z.object({
        links: z.array(
          z.object({
            name: z.string(),
            url: z.string(),
          }),
        ),
      }),
    }),
    hero: defineCollection({
      type: "page",
      source: "hero.md",
      schema: z.object({
        title: z.string(),
        skills: z.array(z.string()),
      }),
    }),
    experience: defineCollection({
      type: 'page',
      source: 'experience/**/*.md',
      schema: z.object({
        companyName: z.string(),
        jobTitle: z.string(),
        location: z.string(),
        startDate: z.string(),
        endDate: z.string().optional(),
        skills: z.array(z.string()).optional(),
      })
    })
  },
});
