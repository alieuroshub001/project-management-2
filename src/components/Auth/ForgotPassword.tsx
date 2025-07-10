"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Correct for App Router
import Link from 'next/link';
import { ForgotPasswordInput } from '@/types/user';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter(); // ✅ App Router hook

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email } as ForgotPasswordInput),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send reset instructions');
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

if (success) {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: '#0F172A' }}
    >
      <div
        className="w-full max-w-md text-center space-y-6 p-8 rounded-2xl shadow-xl backdrop-blur-md"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <h2 className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>Check your email</h2>
        <p style={{ color: '#00FFC3' }}>
          We've sent a password reset link to <strong>{email}</strong>. Please check your inbox.
        </p>
        <button
          onClick={() => router.push('/auth/login')}
          className="w-full py-2 px-4 rounded-md text-sm font-medium"
          style={{
            backgroundColor: '#17B6B2',
            color: '#FFFFFF',
          }}
        >
          Back to login
        </button>
      </div>
    </div>
  );
}

return (
  <div
    className="min-h-screen flex items-center justify-center px-4"
    style={{ backgroundColor: '#0F172A' }}
  >
    <div
      className="w-full max-w-md space-y-6 p-8 rounded-2xl shadow-xl backdrop-blur-md"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <h2 className="text-2xl font-bold text-center" style={{ color: '#FFFFFF' }}>
        Forgot your password?
      </h2>
      <p className="text-center" style={{ color: '#00FFC3' }}>
        Enter your email to reset your password
      </p>
      {error && <div className="text-red-400 text-center">{error}</div>}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: '#FFFFFF' }}>
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-md focus:outline-none"
            style={{
              backgroundColor: 'transparent',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              color: '#FFFFFF',
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md text-sm font-medium ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          style={{
            backgroundColor: '#17B6B2',
            color: '#FFFFFF',
          }}
        >
          {loading ? 'Sending...' : 'Send reset instructions'}
        </button>
      </form>

      <div className="text-center text-sm">
        <Link href="/auth/login" className="font-medium" style={{ color: '#00FFC3' }}>
          Back to login
        </Link>
      </div>
    </div>
  </div>
);
}
