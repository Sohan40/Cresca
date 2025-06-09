import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Waitlist from '@/models/Waitlist';
import { sendWaitlistConfirmation } from '@/lib/email';

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();
    
    // Check if email already exists
    const existingEmail = await Waitlist.findOne({ email });
    if (existingEmail) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    // Create new waitlist entry
    const waitlistEntry = await Waitlist.create({
      email
    });

    // Send confirmation email
    const emailSent = await sendWaitlistConfirmation(email);
    if (!emailSent) {
      console.error('Failed to send confirmation email to:', email);
    }

    return NextResponse.json(
      { 
        message: 'Successfully joined waitlist',
        data: {
          email: waitlistEntry.email,
          createdAt: waitlistEntry.createdAt,
          confirmationEmailSent: emailSent
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
}

// Optional: Add GET method to retrieve waitlist entries (for admin purposes)
export async function GET() {
  try {
    await connectDB();
    const waitlist = await Waitlist.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json(
      { data: waitlist },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    return NextResponse.json(
      { error: 'Failed to fetch waitlist' },
      { status: 500 }
    );
  }
} 