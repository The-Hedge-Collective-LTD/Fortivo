export const runtime = 'nodejs';

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';
import { env } from '@/env';

export async function POST(req: NextRequest) {
  const data = await req.json() as Record<string, unknown>;
  const name = typeof data.name === 'string' ? data.name : '';
  const email = typeof data.email === 'string' ? data.email : '';
  const subject = typeof data.subject === 'string' ? data.subject : '';
  const message = typeof data.message === 'string' ? data.message : '';
  const inquiryType = typeof data.inquiryType === 'string' ? data.inquiryType : 'general';

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { success: false, message: 'Missing required fields.' },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_SECURE,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  } as SMTPTransport.Options);

  try {
    await transporter.sendMail({
      from: `Fortivo Contact <${email}>`, // Always send from SMTP_USER
      replyTo: `${name} <${email}>`, // Reply-To set to user's email
      to: env.CONTACT_TO,
      subject: `[FortivoVPN Contact] ${subject}`,
      text:
        `You have received a new message from the contact form.\n` +
        `Type of Inquiry: ${inquiryType}\n` +
        `Full Name: ${name}\n` +
        `Email Address: ${email}\n` +
        `Subject: ${subject}\n` +
        `Message: ${message}\n` +
        `\n---\nReply directly to this email to respond to the sender.`,
    });
    return NextResponse.json({
      success: true,
      message:
        'Thank you for contacting FortivoVPN! Our security experts will get back to you within 24 hours.',
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to send message.';
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}
