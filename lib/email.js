import nodemailer from 'nodemailer';

// Create reusable transporter object using Gmail SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendWaitlistConfirmation(email) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Welcome to Cresca Waitlist! 🚀',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #2563eb; text-align: center;">Welcome to Cresca! 🎉</h1>
        
        <p>Thank you for joining our waitlist! We're excited to have you on board.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1e40af;">What's Next?</h2>
          <ul style="list-style-type: none; padding: 0;">
            <li style="margin: 10px 0;">📧 We'll notify you as soon as we launch</li>
            <li style="margin: 10px 0;">🎯 You'll be among the first to experience our platform</li>
            <li style="margin: 10px 0;">💡 Get early access to exclusive features</li>
          </ul>
        </div>
        
        <p>In the meantime, feel free to:</p>
        <ul>
          <li>Follow us on social media for updates</li>
          <li>Share Cresca with your network</li>
          <li>Stay tuned for our launch announcement</li>
        </ul>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            If you have any questions, just reply to this email - we're here to help!
          </p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return false;
  }
} 