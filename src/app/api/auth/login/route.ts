import { NextResponse } from 'next/server';
import { AuthService } from '@/services/auth';
import { comparePassword } from '@/lib/authUtils';
import { connectToDatabase } from '@/lib/mongodb';
import { LoginInput } from '@/types/user';

export async function POST(request: Request) {
  try {
    const { email, password }: LoginInput = await request.json();
    const { db } = await connectToDatabase();

    const user = await db.collection('users').findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    if (!user.isVerified) {
      return NextResponse.json(
        { error: 'Account not verified. Please verify your email.' },
        { status: 403 }
      );
    }

    // Update last login
    await db.collection('users').updateOne(
      { _id: user._id },
      { $set: { lastLogin: new Date() } }
    );

    // Remove sensitive data before returning
    const { password: _, otp, otpExpiry, refreshToken, ...userData } = user;

    return NextResponse.json({
      user: userData,
      message: 'Login successful'
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'An error occurred during login' },
      { status: 500 }
    );
  }
}