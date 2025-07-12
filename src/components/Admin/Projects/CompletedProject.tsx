'use client';

import { useState } from 'react';
import { FiSearch, FiEye } from 'react-icons/fi';
import Link from 'next/link';

const completedProjects = [
  {
    id: 1,
    name: 'Marketing Dashboard',
    description: 'A dashboard for tracking marketing campaigns and KPIs.',
    completedAt: '2025-06-25',
    status: 'Completed',
  },
  {
    id: 2,
    name: 'Mobile App Redesign',
    description: 'Complete UI/UX overhaul for the company mobile app.',
    completedAt: '2025-06-12',
    status: 'Completed',
  },
  {
    id: 3,
    name: 'Website Migration',
    description: 'Migrated the company site to a new CMS and improved SEO.',
    completedAt: '2025-05-30',
    status: 'Completed',
  }
];

export default function CompletedProject() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = completedProjects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-black">Completed Projects</h2>
        <div className="relative max-w-xs w-full">
          <FiSearch className="absolute top-3 left-3 text-black-400" />
          <input
            type="text"
            placeholder="Search completed projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-secondary text-black border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-black">{project.name}</h3>
              <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full">{project.status}</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex justify-between items-center text-sm text-black-400">
              <span>Completed: {project.completedAt}</span>
              <Link
                href={`/projects/${project.id}`}
                className="flex items-center gap-1 text-[var(--accent)] hover:underline"
              >
                <FiEye className="inline-block" /> View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
