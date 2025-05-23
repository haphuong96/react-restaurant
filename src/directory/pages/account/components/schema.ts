import { z } from "zod";

// Password regex patterns
const HAS_LOWERCASE = /[a-z]/;
const HAS_UPPERCASE = /[A-Z]/;
const HAS_NUMBER = /[0-9]/;
const HAS_SPECIAL_CHAR = /[@#*^-]/;

// Define the signup form schema
export const signupSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username cannot exceed 50 characters")
    .trim(),

  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(HAS_LOWERCASE, "Password must contain at least one lowercase letter")
    .regex(HAS_UPPERCASE, "Password must contain at least one uppercase letter")
    .regex(HAS_NUMBER, "Password must contain at least one number")
    .regex(
      HAS_SPECIAL_CHAR,
      "Password must contain at least one special character (@ # * ^ -)"
    )
    .max(100, "Password is too long"),

  newsletterChecked: z.boolean().default(false),
});

// Define the inferred type from the schema
export type SignupFormData = z.infer<typeof signupSchema>;

// Create a separate login schema
export const loginSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),

  password: z.string().min(1, "Password is required"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
