// app/(auth)/reset-password/page.tsx
import ResetPasswordForm from '@/components/Auth/ResetPassword';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password | Project Management',
  description: 'Set a new password for your Project Management account',
};

interface ResetPasswordPageProps {
  searchParams: { token?: string };
}

export default function ResetPasswordPage({ searchParams }: ResetPasswordPageProps) {
  const token = searchParams.token;

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#0F172A' }}>
        <div
          className="max-w-md w-full p-8 rounded-2xl shadow-xl backdrop-blur-md text-center"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <h1 className="text-2xl font-bold text-red-500">Invalid Token</h1>
          <p className="mt-4 text-sm text-[#FFFFFF]">
            The password reset link is invalid or has expired. Please try resetting your password again.
          </p>
          <a
            href="/forgot-password"
            className="mt-6 inline-block px-4 py-2 text-sm font-medium rounded-lg text-white transition-all"
            style={{ backgroundColor: '#17B6B2' }}
          >
            Request New Reset Link
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#0F172A' }}>
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-center text-3xl font-bold" style={{ color: '#FFFFFF' }}>
          Set a new password
        </h1>

        <div
          className="w-full p-8 rounded-2xl shadow-xl backdrop-blur-md"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <ResetPasswordForm token={token} />
        </div>
      </div>
    </div>
  );
}
