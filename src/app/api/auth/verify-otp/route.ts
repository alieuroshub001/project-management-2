import { NextResponse } from 'next/server';
import { AuthService } from '@/services/auth';
import { VerifyOTPInput } from '@/types/user';

export async function POST(request: Request) {
  try {
    const { email, otp }: VerifyOTPInput = await request.json();
    const user = await AuthService.verifyOTP({ email, otp });

    return NextResponse.json({
      user,
      message: 'Email verified successfully'
    });

  } catch (error: any) {
    console.error('OTP verification error:', error);
    return NextResponse.json(
      { error: error.message || 'OTP verification failed' },
      { status: 400 }
    );
  }
}