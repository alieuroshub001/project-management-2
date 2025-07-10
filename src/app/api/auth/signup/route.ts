import { NextResponse } from 'next/server';
import { AuthService } from '@/services/auth';
import { Role } from '@/types/user';

const allowedRoles: Role[] = ['admin', 'team', 'client', 'hr', 'staff'];

export async function POST(request: Request) {
  try {
    const userData = await request.json();

    // Validate required fields
    if (!userData.name || !userData.email || !userData.password || !userData.role) {
      return NextResponse.json(
        { error: 'All fields (name, email, password, role) are required' },
        { status: 400 }
      );
    }

    // Validate role value
    if (!allowedRoles.includes(userData.role)) {
      return NextResponse.json(
        { error: 'Invalid role selected' },
        { status: 400 }
      );
    }

    const { user, otp } = await AuthService.signup(userData);

    return NextResponse.json({
      user,
      message: 'Signup successful. Please check your email for verification OTP.',
    });

  } catch (error: any) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred during signup' },
      { status: 400 }
    );
  }
}
