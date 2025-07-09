// app/(auth)/otp/page.tsx
import VerifyOTPForm from '@/components/Auth/Otp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verify Email | Project Management',
  description: 'Verify your email address to complete your registration',
};

export default function VerifyOTPPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-bold text-gray-900">Verify Your Email</h1>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <VerifyOTPForm /> {/* ✅ Removed email prop */}
        </div>
      </div>
    </div>
  );
}
