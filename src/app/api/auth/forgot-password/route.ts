import { NextResponse } from 'next/server';
import { AuthService } from '@/services/auth';
import { ForgotPasswordInput } from '@/types/user';

export async function POST(request: Request) {
  try {
    const { email }: ForgotPasswordInput = await request.json();
    const { otp } = await AuthService.forgotPassword({ email });

    return NextResponse.json({
      message: 'Password reset OTP sent to your email',
      otp // In production, don't return the OTP
    });

  } catch (error: any) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process forgot password request' },
      { status: 400 }
    );
  }
}