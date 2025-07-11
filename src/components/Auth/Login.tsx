"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ FIXED
import Link from 'next/link';
import { LoginInput } from '@/types/user';

export default function Login() {
  const [formData, setFormData] = useState<LoginInput>({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Store user data and redirect (you might use context or state management)
      router.push('/admin/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
return (
  <div className="min-h-screen flex items-center justify-center px-4 " style={{ backgroundColor: '#0F172A' }}>
    <div
      className="w-full max-w-md p-8 rounded-2xl shadow-xl backdrop-blur-md"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <h2 className="text-3xl font-bold text-center" style={{ color: '#FFFFFF' }}>
        Welcome Back 👋
      </h2>
      <p className="text-center text-sm mb-6" style={{ color: '#00FFC3' }}>
        Log in to continue to EurosHub
      </p>

      {error && (
        <div className="text-red-500 text-sm text-center bg-red-100/10 py-2 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: '#FFFFFF' }}>
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border bg-transparent placeholder-gray-400 text-white focus:outline-none focus:ring-2"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.2)',
              backgroundColor: 'transparent',
            }}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1" style={{ color: '#FFFFFF' }}>
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border bg-transparent placeholder-gray-400 text-white focus:outline-none focus:ring-2"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.2)',
              backgroundColor: 'transparent',
            }}
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2" style={{ color: '#FFFFFF' }}>
            <input
              type="checkbox"
              className="form-checkbox text-[#17B6B2] border-gray-300 rounded focus:ring-2 focus:ring-[#00FFC3]"
            />
            Remember me
          </label>
          <Link href="/auth/forgot-password" className="text-[#00FFC3] hover:underline">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300"
          style={{
            backgroundColor: loading ? '#17B6B2AA' : '#17B6B2',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Logging in...' : 'Log in'}
        </button>
      </form>

      <div className="text-center text-sm mt-6">
        <span className="text-gray-300">Don’t have an account? </span>
        <Link href="/auth/signup" className="text-[#00FFC3] font-medium hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  </div>
);
}