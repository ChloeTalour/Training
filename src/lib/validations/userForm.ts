import { z } from "zod";

export const userFormSchema = z.object({
  name: z.string().min(2, "The field is required"),
  email: z.string().email("The field is required"),
  phone: z.string().min(6, "The field is required"),
});

export type UserFormSchema = z.infer<typeof userFormSchema>;
