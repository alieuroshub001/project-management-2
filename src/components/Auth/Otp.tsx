"use client";
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { VerifyOTPInput } from '@/types/user';

export default function VerifyOTP() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';

  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resending, setResending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !otp) {
      setError('Email is required');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp } as VerifyOTPInput),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'OTP verification failed');
      }

      router.push('/auth/login');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!email) return;

    setResending(true);
    setError('');

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to resend OTP');
      }

      alert('New OTP sent to your email');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setResending(false);
    }
  };

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
        Verify Your Email
      </h2>
      <p className="text-center text-sm" style={{ color: '#00FFC3' }}>
        We've sent a 6-digit code to {email}
      </p>

      {error && <div className="text-red-400 text-center">{error}</div>}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="otp" className="block text-sm font-medium mb-1" style={{ color: '#FFFFFF' }}>
            Verification Code
          </label>
          <input
            id="otp"
            name="otp"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{6}"
            maxLength={6}
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
            className="w-full px-4 py-3 border rounded-md text-center text-xl tracking-widest focus:outline-none"
            style={{
              backgroundColor: 'transparent',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              color: '#FFFFFF',
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading || otp.length !== 6}
          className={`w-full py-2 px-4 rounded-md text-sm font-medium ${
            loading || otp.length !== 6 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          style={{
            backgroundColor: '#17B6B2',
            color: '#FFFFFF',
          }}
        >
          {loading ? 'Verifying...' : 'Verify'}
        </button>
      </form>

      <div className="text-center text-sm">
        <span style={{ color: '#FFFFFF' }}>Didn't receive a code? </span>
        <button
          type="button"
          onClick={handleResendOTP}
          disabled={resending}
          className={`font-medium ${
            resending ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          style={{ color: '#00FFC3' }}
        >
          {resending ? 'Sending...' : 'Resend code'}
        </button>
      </div>
    </div>
  </div>
);
}