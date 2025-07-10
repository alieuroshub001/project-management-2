import { Schema, model } from 'mongoose';
import { User } from '../types/user';

const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },

  role: {
    type: String,
    enum: ['admin', 'team', 'client', 'hr', 'staff'],
    required: true, // No default, must be explicitly set
  },

  avatar: { type: String },
  department: { type: String },
  position: { type: String },

  isVerified: { type: Boolean, default: false },
  otp: { type: String, select: false },
  otpExpiry: { type: Date, select: false },
  lastLogin: { type: Date },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },

  refreshToken: { type: String, select: false },
});

// Auto-update `updatedAt` on save
UserSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

export const UserModel = model<User>('User', UserSchema);
