export const runtime = "nodejs";

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { getSmtpConfig } from "@/lib/smtp";

export async function POST(req: NextRequest) {
  const data = (await req.json()) as Record<string, unknown>;
  const email = typeof data.email === "string" ? data.email : "";
  const reason = typeof data.reason === "string" ? data.reason : "";

  if (!email) {
    return NextResponse.json(
      { success: false, message: "Email is required." },
      { status: 400 },
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, message: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const smtp = getSmtpConfig();
  if (!smtp) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Email service is not configured. Please try again later or email us directly.",
      },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
  } as SMTPTransport.Options);

  try {
    await transporter.sendMail({
      from: `Fortivo Account Deletion <${smtp.user}>`,
      replyTo: email,
      to: smtp.contactTo,
      subject: `[FortivoVPN Account Deletion Request] ${email}`,
      text:
        `A user has requested to delete their account.\n\n` +
        `Email Address: ${email}\n` +
        `Reason for Deletion: ${reason || "Not provided"}\n` +
        `\n---\n` +
        `Please process this account deletion request. This action should permanently remove the user's account and all associated data.\n` +
        `\nReply directly to this email to respond to the user.`,
      html:
        `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">` +
        `<h2 style="color: #ef4444;">Account Deletion Request</h2>` +
        `<p>A user has requested to delete their FortivoVPN account.</p>` +
        `<div style="background-color: #1f2937; padding: 20px; border-radius: 8px; margin: 20px 0;">` +
        `<p style="color: #f3f4f6; margin: 10px 0;"><strong style="color: #60a5fa;">Email Address:</strong> ${email}</p>` +
        `<p style="color: #f3f4f6; margin: 10px 0;"><strong style="color: #60a5fa;">Reason for Deletion:</strong> ${reason || "Not provided"}</p>` +
        `</div>` +
        `<div style="background-color: #fef2f2; border-left: 4px solid #ef4444; padding: 15px; margin: 20px 0;">` +
        `<p style="color: #991b1b; margin: 0;"><strong>Important:</strong> Please process this account deletion request. This action should permanently remove the user's account and all associated data.</p>` +
        `</div>` +
        `<p style="color: #6b7280; font-size: 12px; margin-top: 30px;">Reply directly to this email to respond to the user.</p>` +
        `</div>`,
    });

    return NextResponse.json({
      success: true,
      message:
        "Your account deletion request has been received. We will process it within 7 business days. You will receive a confirmation email once your account has been permanently deleted.",
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Failed to process deletion request.";
    console.error("Delete user error:", error);
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 },
    );
  }
}
