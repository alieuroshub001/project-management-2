import { NextResponse } from 'next/server';
import { AuthService } from '@/services/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token, newPassword } = body;

    // Basic validation
    if (!token || !newPassword) {
      return NextResponse.json(
        { error: 'Both token and newPassword are required' },
        { status: 400 }
      );
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters long' },
        { status: 400 }
      );
    }

    const user = await AuthService.resetPassword({ token, newPassword });

    return NextResponse.json({
      user,
      message: 'Password reset successfully',
    });

  } catch (error: any) {
    console.error('Reset password error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to reset password' },
      { status: 400 }
    );
  }
}
