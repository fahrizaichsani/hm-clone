import { z } from "zod";

export const UserSchema = z.object({
  name: z.string().optional(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});

export const UserLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
})

export type UserBody = z.infer<typeof UserLoginSchema>

export const ProductSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  excerpt: z.string().optional(),
  price: z.number().optional(),
  tags: z.array(z.string()).optional(),
  thumbnail: z.string().optional(),
  images: z.array(z.string()).optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});
