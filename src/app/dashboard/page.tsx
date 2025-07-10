'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRole, RoleProvider } from '@/components/Dashboard/RoleProvider';

export default function AdminDashboardPageWrapper() {
  return (
    <RoleProvider>
      <AdminDashboardPage />
    </RoleProvider>
  );
}

function AdminDashboardPage() {
  const { role, isLoggedIn } = useRole();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn || role !== 'admin') {
      router.push('/dashboard/admin/dashboard');
    }
  }, [role, isLoggedIn]);

  if (!isLoggedIn || role !== 'admin') return null;

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-8 relative overflow-hidden">

      {/* Glowing background gradients */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#17b6b2]/10 blur-[100px] rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#00ffc3]/10 blur-[80px] rounded-full z-0 animate-pulse delay-300" />

      <div className="relative z-10 max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-lg p-10">
        <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#17b6b2] via-[#00ffc3] to-[#17b6b2] bg-clip-text text-transparent animate-gradient-x">
          Admin Dashboard
        </h1>
        <p className="text-white/80 text-lg mb-4">Welcome, admin! You have full access to manage the system.</p>
        <ul className="text-white/70 space-y-2">
          <li>✓ Manage Users</li>
          <li>✓ View Reports</li>
          <li>✓ Access All Modules</li>
        </ul>
      </div>
    </div>
  );
}
