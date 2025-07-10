import ForgotPasswordForm from '@/components/Auth/ForgotPassword';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot Password | Project Management',
  description: 'Reset your Project Management account password',
};

export default function ForgotPasswordPage() {
return (
  <div
    className="min-h-screen flex flex-col justify-center items-center px-4"
    style={{ backgroundColor: '#0F172A' }}
  >
    <div className="w-full max-w-md text-center space-y-4">
      <h1 className="text-3xl font-bold" style={{ color: '#FFFFFF' }}>
        Reset your password
      </h1>
      <p className="text-sm" style={{ color: '#00FFC3' }}>
        Enter your email to receive a password reset link
      </p>
    </div>

    <div className="mt-8 w-full max-w-md">
      <div
        className="rounded-2xl shadow-lg backdrop-blur-md p-8 sm:px-10"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <ForgotPasswordForm />
      </div>
    </div>
  </div>
);
}