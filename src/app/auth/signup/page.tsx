// app/(auth)/signup/page.tsx
import SignupForm from '@/components/Auth/Signup';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up | Project Management',
  description: 'Create a new account to get started with Project Management',
};

export default function SignupPage() {
return (
  <div
    className="min-h-screen flex flex-col justify-center items-center px-4"
    style={{ backgroundColor: '#0F172A' }} // Background
  >
    <div className="w-full max-w-md text-center space-y-4">
      <h1 className="text-3xl font-bold" style={{ color: '#FFFFFF' }}>
        Create an account
      </h1>
    </div>

    <div className="mt-8 w-full max-w-md">
      <div
        className="rounded-2xl shadow-lg backdrop-blur-md p-8 sm:px-10"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)', // Card background
          border: '1px solid rgba(255, 255, 255, 0.1)',  // Border color
        }}
      >
        <SignupForm />
      </div>
    </div>
  </div>
);
}
