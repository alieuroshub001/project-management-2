'use client';

import { useState } from 'react';

const mockUsers = [
  { id: 1, email: 'admin@project.com', role: 'admin', status: 'active' },
  { id: 2, email: 'team@project.com', role: 'team', status: 'active' },
  { id: 3, email: 'client@project.com', role: 'client', status: 'disabled' },
];

export default function UserTable() {
  const [search, setSearch] = useState('');
  const filteredUsers = mockUsers.filter((user) =>
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="rounded-xl p-6 mt-6 backdrop-blur-xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-lg">
      <h2 className="text-xl font-semibold text-[var(--primary)] mb-4">User Management</h2>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 px-4 py-2 w-full sm:w-1/3 rounded-lg border border-[var(--border-color)] bg-transparent text-[var(--foreground)] placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-[var(--foreground)]">
          <thead>
            <tr className="text-white/70 border-b border-[var(--border-color)]">
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="border-t border-[var(--border-color)] hover:bg-white/5 transition"
              >
                <td className="p-3">{user.email}</td>
                <td className="p-3 capitalize">{user.role}</td>
                <td
                  className={`p-3 capitalize ${
                    user.status === 'active' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {user.status}
                </td>
                <td className="p-3 flex gap-3 justify-center">
                  <button className="text-[var(--primary)] hover:underline">Edit</button>
                  <button className="text-red-400 hover:underline">Delete</button>
                  <button className="text-accent hover:underline">Promote</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
