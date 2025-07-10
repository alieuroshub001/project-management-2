// app/(auth)/otp/page.tsx
import VerifyOTPForm from '@/components/Auth/Otp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verify Email | Project Management',
  description: 'Verify your email address to complete your registration',
};

export default function VerifyOTPPage() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-4"
      style={{ backgroundColor: '#0F172A' }}
    >
      <div className="w-full max-w-md text-center">
        <h1 className="text-3xl font-bold" style={{ color: '#FFFFFF' }}>
          Verify Your Email
        </h1>
        <p className="text-sm mt-2" style={{ color: '#00FFC3' }}>
          Enter the OTP sent to your email
        </p>
      </div>

      <div className="mt-8 w-full max-w-md">
        <div
          className="p-8 rounded-2xl shadow-xl backdrop-blur-md"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <VerifyOTPForm />
        </div>
      </div>
    </div>
  );
}
