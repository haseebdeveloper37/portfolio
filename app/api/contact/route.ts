import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Where you want to RECEIVE the messages (your inbox)
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "haseebdeveloper37@gmail.com";

// The "from" address must be on a domain you've verified in Resend.
// Until you verify your own domain, Resend lets you send from
// "onboarding@resend.dev" — good enough to get this working today.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, projectType, message, recaptchaToken } = body as {
      name?: string;
      email?: string;
      projectType?: string;
      message?: string;
      recaptchaToken?: string;
    };

    if (!name || !email || !message || !recaptchaToken) {
      return NextResponse.json(
        { error: "Name, email, message and security verification are required." },
        { status: 400 }
      );
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      console.error("RECAPTCHA_SECRET_KEY is not configured.");
      return NextResponse.json(
        { error: "Security verification is not configured." },
        { status: 500 }
      );
    }

    const verificationResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: recaptchaSecret,
          response: recaptchaToken,
        }),
        cache: "no-store",
      }
    );
    const verification = (await verificationResponse.json()) as {
      success?: boolean;
      score?: number;
      action?: string;
    };

    if (
      !verification.success ||
      (verification.score ?? 0) < 0.5 ||
      verification.action !== "contact_submit"
    ) {
      return NextResponse.json(
        { error: "Security verification failed. Please try again." },
        { status: 403 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType || "Not specified"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height:1.6;">
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Project type:</strong> ${escapeHtml(projectType || "Not specified")}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
