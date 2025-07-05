import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message, budget } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Grizzly Agency Contact <onboarding@resend.dev>',
      to: ['delivered@resend.dev'], // Replace with your actual email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${budget ? `<p><strong>Budget:</strong> $${budget}K+</p>` : ''}
          </div>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
            <h3 style="color: #1f2937; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
            This email was sent from the Grizzly Agency contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully!', id: data.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
