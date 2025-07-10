'use client';

import { useRole } from './RoleProvider';
import { useEffect, useState } from 'react';

type Role = 'admin' | 'team' | 'client';

export default function TopNav() {
  const { role, setRole, logout } = useRole();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    // Initialize theme from system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = prefersDark ? 'dark' : 'light';
    setTheme(initial);
    document.documentElement.classList.add(initial);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-6 py-3 flex justify-between items-center shadow-md backdrop-blur-xl bg-[var(--card-bg)] border-b border-[var(--border-color)]">
      {/* Left: Role & Select */}
      <div className="flex items-center gap-4">
     <h1 className="text-lg md:text-xl font-bold text-[var(--foreground)]">
      {role ? `${role} Panel` : 'Dashboard'}</h1>

        <select
          value={role ?? ''}
          onChange={(e) => setRole(e.target.value as Role)}
          className="px-3 py-1 rounded-md border border-[var(--border-color)] bg-[var(--background)] text-[var(--foreground)] hover:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
        >
          <option value="admin">Admin</option>
          <option value="team">Team</option>
          <option value="client">Client</option>
        </select>

        {/* Role Badge */}
        {role && (
          <span className="px-3 py-1 text-xs rounded-full bg-[var(--primary)] text-black font-medium shadow-sm">
            {role.toUpperCase()}
          </span>
        )}
      </div>

      {/* Right: Theme Toggle & Logout */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-1.5 rounded-md text-sm font-medium text-[var(--foreground)] border border-[var(--border-color)] hover:bg-[var(--primary)] hover:text-black transition-all duration-200"
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button
          onClick={logout}
          className="px-4 py-1.5 rounded-md text-sm font-medium bg-red-600 hover:bg-red-700 text-white transition-all duration-200"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
