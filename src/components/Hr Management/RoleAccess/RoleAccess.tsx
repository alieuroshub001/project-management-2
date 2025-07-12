
'use client';

import { useState } from 'react';
import { FiEdit, FiTrash2, FiUserPlus, FiSearch } from 'react-icons/fi';
import HrLayout from '@/components/Hr Management/Layout';
import Image from 'next/image';

const roles = ['Admin', 'HR', 'Employee'];

export default function RoleAccess() {
  const [role, setRole] = useState('Employee');

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-primary">Role-Based Access</h2>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="mb-6 px-4 py-2 rounded-md border border-border bg-background "
      >
        {roles.map(r => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>
      <div className="bg-card p-6 rounded-xl border border-border text-white space-y-3">
        {role === 'Admin' && <p className="text-green-400">✔ Admin can manage users and settings.</p>}
        {role === 'HR' && <p className="text-blue-400">✔ HR can approve leaves and view attendance.</p>}
        {role === 'Employee' && <p className="text-yellow-300">✔ Employees can request leave and upload documents.</p>}
      </div>
    </div>
  );
}
