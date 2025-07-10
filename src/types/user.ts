// types/user.ts

export type Role = 'admin' | 'team' | 'client' | 'hr' | 'staff';

export interface User {
  _id?: string;
  name: string;
  email: string;
  password?: string; // Hashed in DB
  role: Role;
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
  phone?: string; // For employee directory
  hireDate?: Date; // For HR management
  leaveBalance?: number; // For leave tracking
  status?: 'active' | 'on-leave' | 'offboarded'; // For HR
}

// Auth related types
export interface AuthResponse {
  user: Omit<User, 'password' | 'otp' | 'otpExpiry' | 'refreshToken'>;
  accessToken: string;
  refreshToken: string;
  expiresIn: number; // Token expiry in seconds
}

export interface TokenPayload {
  userId: string;
  role: Role;
  email: string;
  iat?: number; // Issued at
  exp?: number; // Expiry
}

export interface Session {
  userId: string;
  token: string;
  expiresAt: Date;
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
}

// Input types
export interface SignupInput {
  name: string;
  email: string;
  password: string;
  role?: Role;
  department?: string;
  position?: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface ForgotPasswordInput {
  email: string;
}

export interface ResetPasswordInput {
  token: string;
  newPassword: string;
}

export interface VerifyOTPInput {
  email: string;
  otp: string;
}

export interface ResetPasswordFormValues {
  newPassword: string;
  confirmPassword: string;
}

export interface UpdateProfileInput {
  name?: string;
  avatar?: string;
  phone?: string;
  department?: string;
  position?: string;
}