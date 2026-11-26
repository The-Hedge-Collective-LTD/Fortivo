import { env } from "@/env";

export function getSmtpConfig() {
  const host = env.SMTP_HOST;
  const port = env.SMTP_PORT;
  const secure = env.SMTP_SECURE;
  const user = env.SMTP_USER;
  const pass = env.SMTP_PASS;
  const contactTo = env.CONTACT_TO;

  if (
    !host ||
    port === undefined ||
    secure === undefined ||
    !user ||
    !pass ||
    !contactTo
  ) {
    return null;
  }

  return { host, port, secure, user, pass, contactTo };
}
