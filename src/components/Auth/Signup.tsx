"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { SignupInput } from '@/types/user';

const roles = ['admin', 'team', 'client', 'hr', 'staff'] as const;

export default function Signup() {
  const [formData, setFormData] = useState<SignupInput>({
    name: '',
    email: '',
    password: '',
    role: '' as SignupInput['role'], // Initially empty
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.role) {
      setError('Please select a user role.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Signup failed');
      }

      router.push(`/auth/verify-otp?email=${formData.email}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
return (
  <>
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#0F172A' }}>
      <div
        className="w-full max-w-md p-8 rounded-2xl shadow-xl backdrop-blur-md"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <h2 className="text-3xl font-bold text-center mb-1" style={{ color: '#FFFFFF' }}>
          Create an account ✨
        </h2>
        <p className="text-center text-sm mb-6" style={{ color: '#00FFC3' }}>
          Join EurosHub to manage your workspace smartly
        </p>

        {error && (
          <div className="text-red-500 text-sm text-center bg-red-100/10 py-2 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: '#FFFFFF' }}>
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border bg-transparent placeholder-gray-400 text-white focus:outline-none focus:ring-2"
              placeholder="John Doe"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }} />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: '#FFFFFF' }}>
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border bg-transparent placeholder-gray-400 text-white focus:outline-none focus:ring-2"
              placeholder="you@example.com"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }} />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold transition-all duration-300 text-white"
            style={{
              backgroundColor: loading ? '#17B6B2AA' : '#17B6B2',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Signing up...' : 'Sign up'}
          </button>
        </form>
        <div className="text-center text-sm mt-6">
          <span className="text-gray-300">Already have an account? </span>
          <Link href="/auth/login" className="text-[#00FFC3] font-medium hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  </>
);
}
