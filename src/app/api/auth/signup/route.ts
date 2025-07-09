import { NextResponse } from 'next/server';
import { AuthService } from '@/services/auth';

export async function POST(request: Request) {
  try {
    const userData = await request.json();
    const { user, otp } = await AuthService.signup(userData);

    return NextResponse.json({
      user,
      message: 'Signup successful. Please check your email for verification OTP.'
    });

  } catch (error: any) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred during signup' },
      { status: 400 }
    );
  }
}