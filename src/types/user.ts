//types/user.ts

export interface User {
  _id?: string;
  name: string;
  email: string;
  password?: string; // Hashed in DB
  role: 'admin' | 'manager' | 'employee' | 'client';
  avatar?: string;
  department?: string;
  position?: string;
  isVerified: boolean;
  otp?: string;
  otpExpiry?: Date;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
  refreshToken?: string;
}

export interface AuthResponse {
  user: Omit<User, 'password' | 'otp' | 'otpExpiry' | 'refreshToken'>;
  accessToken: string;
  refreshToken: string;
}

export interface SignupInput {
  name: string;
  email: string;
  password: string;
  role?: User['role']; // Optional with default
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface ForgotPasswordInput {
  email: string;
}

export interface ResetPasswordInput {
  token: string; // OTP token
  newPassword: string;
}

export interface VerifyOTPInput {
  email: string;
  otp: string;
}