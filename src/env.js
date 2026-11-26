import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/**
 * SMTP / contact vars are optional at build time so Vercel can build
 * without them. Contact + delete-user APIs validate them at runtime.
 */
export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    SMTP_HOST: z.string().min(1).optional(),
    SMTP_PORT: z.coerce.number().optional(),
    SMTP_SECURE: z
      .union([z.literal("true"), z.literal("false")])
      .optional()
      .transform((v) => (v === undefined ? undefined : v === "true")),
    SMTP_USER: z.string().min(1).optional(),
    SMTP_PASS: z.string().min(1).optional(),
    CONTACT_TO: z.string().email().optional(),
  },

  client: {},

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_SECURE: process.env.SMTP_SECURE,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    CONTACT_TO: process.env.CONTACT_TO,
  },

  /**
   * Skip validation during CI / Vercel builds when vars are not injected yet,
   * or when SKIP_ENV_VALIDATION=1 is set.
   */
  skipValidation:
    !!process.env.SKIP_ENV_VALIDATION ||
    process.env.npm_lifecycle_event === "build",

  emptyStringAsUndefined: true,
});
