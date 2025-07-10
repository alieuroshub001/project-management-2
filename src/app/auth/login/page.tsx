// app/(auth)/login/page.tsx
import LoginForm from '@/components/Auth/Login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Project Management',
  description: 'Sign in to your Project Management account',
};

export default function LoginPage() {
return (
  <div
    className="min-h-screen flex flex-col justify-center items-center px-4"
    style={{ backgroundColor: '#0F172A' }}
  >
    <div className="w-full max-w-md text-center space-y-4">
      <h1 className="text-3xl font-bold" style={{ color: '#FFFFFF' }}>
        Sign in to your account
      </h1>
    </div>

    <div className="mt-8 w-full max-w-md">
      <div
        className="rounded-2xl shadow-lg backdrop-blur-md p-8 sm:px-10"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <LoginForm />
      </div>
    </div>
  </div>
);
}
