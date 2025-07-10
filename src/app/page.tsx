// app/(auth)/login/page.tsx
import LoginForm from '@/components/Auth/Login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Project Management',
  description: 'Sign in to your Project Management account',
};

export default function LoginPage() {
return (
  <div className="min-h-screen flex flex-col justify-center items-center px-4" style={{ backgroundColor: '#0F172A' }}>
    <div className="sm:w-full sm:max-w-md w-full">
      <h1 className="text-center text-3xl font-bold" style={{ color: '#FFFFFF' }}>
        Sign in to your account
      </h1>
    </div>

    <div className="mt-8 sm:w-full sm:max-w-md w-full">
      <div
        className="py-8 px-6 sm:px-10 rounded-2xl shadow-md backdrop-blur-md"
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
