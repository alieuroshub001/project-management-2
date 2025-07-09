import { NextResponse } from 'next/server';
import { AuthService } from '@/services/auth';
import { ResetPasswordInput } from '@/types/user';

export async function POST(request: Request) {
  try {
    const { token, newPassword }: ResetPasswordInput = await request.json();
    const user = await AuthService.resetPassword({ token, newPassword });

    return NextResponse.json({
      user,
      message: 'Password reset successfully'
    });

  } catch (error: any) {
    console.error('Reset password error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to reset password' },
      { status: 400 }
    );
  }
}