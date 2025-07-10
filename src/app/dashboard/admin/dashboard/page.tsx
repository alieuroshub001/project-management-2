'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRole } from '@/components/Dashboard/RoleProvider';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import UserTable from '@/components/Dashboard/usertable';

export default function AdminDashboardPage() {
  const { role, isLoggedIn } = useRole();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isLoggedIn || role !== 'admin') {
      router.push('/dashboardd/admin/dashboard');
    }
  }, [role, isLoggedIn]);

  if (!isLoggedIn || role !== 'admin') return null;

  const data = [
    { name: 'Team A', progress: 75 },
    { name: 'Team B', progress: 45 },
    { name: 'Team C', progress: 90 },
    { name: 'Team D', progress: 60 },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Header */}
      <div className="rounded-2xl p-6 backdrop-blur-xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-lg">
        <h1 className="text-3xl font-bold text-[var(--primary)]">Admin Dashboard</h1>
        <p className="text-[var(--foreground)]/70 mt-2">You have full access and control.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Users" value="54" />
        <StatCard label="Projects" value="12" />
        <StatCard label="Tasks" value="284" />
      </div>

      {/* Bar Chart */}
      <div className="rounded-xl p-6 backdrop-blur-xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-lg">
        <h2 className="text-xl font-semibold text-[var(--primary)] mb-4">Project Progress</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Bar dataKey="progress" fill="var(--primary)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* User Table */}
      <UserTable />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl shadow-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">User Modal</h3>
            <p className="text-sm text-[var(--foreground)]/70 mb-4">
              This is a placeholder modal for managing users.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 rounded-md bg-[var(--primary)] text-black hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Stat card
function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 text-center rounded-xl backdrop-blur-xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-md">
      <div className="text-2xl font-bold text-[var(--primary)]">{value}</div>
      <div className="text-sm text-[var(--foreground)]/60 mt-1">{label}</div>
    </div>
  );
}
