import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Send welcome email to subscriber
    await resend.emails.send({
      from: 'Grizzly Agency Newsletter <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to Grizzly Agency Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1f2937 0%, #374151 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Welcome to Grizzly Agency!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Thanks for subscribing to our newsletter</p>
          </div>

          <div style="padding: 30px; background-color: #f9fafb; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1f2937; margin-top: 0;">What to expect:</h2>
            <ul style="color: #4b5563; line-height: 1.6;">
              <li>Latest web development insights and trends</li>
              <li>Technical articles and best practices</li>
              <li>Industry news and updates</li>
              <li>Exclusive tips from our development team</li>
            </ul>

            <p style="color: #6b7280; margin-top: 20px;">
              We'll send you valuable content weekly. No spam, just quality insights to help you stay ahead in the digital world.
            </p>

            <div style="text-align: center; margin-top: 30px;">
              <a href="https://grizzly-agency.com"
                 style="background-color: #1f2937; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Visit Our Website
              </a>
            </div>
          </div>

          <p style="text-align: center; color: #9ca3af; font-size: 14px; margin-top: 20px;">
            © ${new Date().getFullYear()} Grizzly Agency. Rochester, NY
          </p>
        </div>
      `,
    });

    // Send notification to admin
    await resend.emails.send({
      from: 'Grizzly Agency Newsletter <onboarding@resend.dev>',
      to: ['delivered@resend.dev'], // Replace with your actual email
      subject: 'New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Newsletter Subscription</h2>
          <p>A new user has subscribed to the Grizzly Agency newsletter:</p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
