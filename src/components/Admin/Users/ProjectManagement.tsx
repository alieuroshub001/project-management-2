'use client';

import { useState } from 'react';
import { FiSearch, FiEye } from 'react-icons/fi';
import Link from 'next/link';

const projectManagers = [
  {
    id: 1,
    name: 'Ayesha Khalid',
    email: 'ayesha@euros.com',
    totalProjects: 8,
    completedProjects: 5,
    ongoingProjects: 3,
    lastProject: 'HR Portal Redesign',
  },
  {
    id: 2,
    name: 'Amna Khan',
    email: 'amna@euros.com',
    totalProjects: 6,
    completedProjects: 6,
    ongoingProjects: 0,
    lastProject: 'E-Commerce API Upgrade',
  },
  {
    id: 3,
    name: 'Nida Hassan',
    email: 'nida@euros.com',
    totalProjects: 10,
    completedProjects: 7,
    ongoingProjects: 3,
    lastProject: 'Mobile App Launch',
  }
];

export default function ProjectManagement() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredManagers = projectManagers.filter((manager) =>
    manager.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    manager.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-[var(--foreground)]">Project Managers</h2>
        <div className="relative w-full max-w-xs">
          <FiSearch className="absolute top-3 left-3 " />
          <input
            type="text"
            placeholder="Search managers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] placeholder-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredManagers.map((manager) => (
          <div
            key={manager.id}
            className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="mb-3">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{manager.name}</h3>
              <p className="text-sm text-black-400">{manager.email}</p>
            </div>
            <div className="text-sm text-black-300 space-y-2 mb-4">
              <p>Total Projects: <span className="text-black font-medium">{manager.totalProjects}</span></p>
              <p>Completed: <span className="text-green-400 font-medium">{manager.completedProjects}</span></p>
              <p>Ongoing: <span className="text-yellow-400 font-medium">{manager.ongoingProjects}</span></p>
              <p>Last Project: <span className="text-black">{manager.lastProject}</span></p>
            </div>
            <div className="flex justify-end">
              <Link
                href={`/admin/users/projectmanager/${manager.id}`}
                className="inline-flex items-center gap-1 text-[var(--accent)] hover:underline text-sm font-medium"
              >
                <FiEye className="inline-block" /> View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
