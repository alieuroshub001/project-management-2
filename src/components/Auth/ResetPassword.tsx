"use client"
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ResetPasswordInput, ResetPasswordFormValues } from '@/types/user';

interface ResetPasswordProps {
  token: string;
}

export default function ResetPassword({ token }: ResetPasswordProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<ResetPasswordFormValues>({
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          newPassword: formData.newPassword
        } as ResetPasswordInput), // Cast to the API expected type
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to reset password');
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
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0F172A' }}>
      <div
        className="max-w-md w-full space-y-6 p-8 rounded-2xl shadow-md text-center backdrop-blur-md"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <h2 className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>
          Password reset successful
        </h2>
        <p style={{ color: '#FFFFFF' }}>
          Your password has been successfully updated. You can now log in with your new password.
        </p>
        <button
          onClick={() => router.push('/auth/login')}
          className="mt-4 w-full flex justify-center py-2 px-4 rounded-md text-sm font-medium text-white"
          style={{
            backgroundColor: '#17B6B2',
            border: '1px solid transparent',
          }}
        >
          Go to login
        </button>
      </div>
    </div>
  );
}

return (
  <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0F172A' }}>
    <div
      className="max-w-md w-full space-y-6 p-8 rounded-2xl shadow-md backdrop-blur-md"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <h2 className="text-2xl font-bold text-center" style={{ color: '#FFFFFF' }}>
        Reset your password
      </h2>
      {error && <div className="text-red-400 text-center">{error}</div>}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium" style={{ color: '#FFFFFF' }}>
              New Password
            </label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              required
              minLength={8}
              value={formData.newPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 rounded-md text-white bg-transparent border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#00FFC3] focus:border-[#00FFC3]"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium" style={{ color: '#FFFFFF' }}>
              Confirm New Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              minLength={8}
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 rounded-md text-white bg-transparent border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#00FFC3] focus:border-[#00FFC3]"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-2 px-4 rounded-md text-sm font-medium text-white ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            style={{ backgroundColor: '#17B6B2' }}
          >
            {loading ? 'Resetting...' : 'Reset password'}
          </button>
        </div>
      </form>
    </div>
  </div>
);
}