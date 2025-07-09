import {
  User,
  SignupInput,
  LoginInput,
  ForgotPasswordInput,
  ResetPasswordInput,
  VerifyOTPInput,
  Role,
} from '../types/user';
import { connectToDatabase } from '../lib/mongodb';
import { generateOTP, hashPassword } from '../lib/authUtils';
import { sendEmail } from '../lib/email';
import { ObjectId } from 'mongodb';

export class AuthService {
  // User signup
  static async signup(userData: SignupInput): Promise<{ user: User; otp: string }> {
    const { db } = await connectToDatabase();

    const existingUser = await db.collection<User>('users').findOne({ email: userData.email });
    if (existingUser) throw new Error('User already exists');

    if (!userData.role) {
      throw new Error('User role is required');
    }

    const hashedPassword = await hashPassword(userData.password);
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    const newUser: User = {
      _id: new ObjectId().toString(),
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      role: userData.role,
      isVerified: false,
      otp,
      otpExpiry,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await db.collection<User>('users').insertOne(newUser);

    await sendEmail(
      newUser.email,
      'Verify Your Account',
      `<p>Your verification OTP is: <strong>${otp}</strong></p>`
    );

    return {
      user: { ...newUser },
      otp,
    };
  }

  // Verify OTP
  static async verifyOTP({ email, otp }: VerifyOTPInput): Promise<User> {
    const { db } = await connectToDatabase();

    const user = await db.collection<User>('users').findOne({ email });
    if (!user) throw new Error('User not found');
    if (user.isVerified) throw new Error('User already verified');
    if (user.otp !== otp) throw new Error('Invalid OTP');
    if (user.otpExpiry && new Date() > user.otpExpiry) throw new Error('OTP expired');

    await db.collection<User>('users').updateOne(
      { _id: user._id },
      {
        $set: { isVerified: true },
        $unset: { otp: '', otpExpiry: '' },
      }
    );

    return { ...user, isVerified: true };
  }

  // Forgot password - send OTP
  static async forgotPassword({ email }: ForgotPasswordInput): Promise<{ otp: string }> {
    const { db } = await connectToDatabase();

    const user = await db.collection<User>('users').findOne({ email });
    if (!user) throw new Error('User not found');

    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    await db.collection<User>('users').updateOne(
      { _id: user._id },
      { $set: { otp, otpExpiry } }
    );

    await sendEmail(
      email,
      'Password Reset OTP',
      `<p>Your password reset OTP is: <strong>${otp}</strong></p>`
    );

    return { otp };
  }

  // Reset password with OTP
  static async resetPassword({ token, newPassword }: ResetPasswordInput): Promise<User> {
    const { db } = await connectToDatabase();

    const user = await db.collection<User>('users').findOne({ otp: token });
    if (!user) throw new Error('Invalid OTP');
    if (user.otpExpiry && new Date() > user.otpExpiry) throw new Error('OTP expired');

    const hashedPassword = await hashPassword(newPassword);

    await db.collection<User>('users').updateOne(
      { _id: user._id },
      {
        $set: { password: hashedPassword },
        $unset: { otp: '', otpExpiry: '' },
      }
    );

    return { ...user, password: hashedPassword };
  }
}
