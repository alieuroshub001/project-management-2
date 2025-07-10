'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/dashboard/admin', label: 'Admin' },
  { href: '/dashboard/team', label: 'Team' },
  { href: '/dashboard/client', label: 'Client' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`transition-all duration-300 h-screen shadow-xl border-r border-[var(--card-bg)] backdrop-blur-xl 
      ${collapsed ? 'w-16' : 'w-64'} bg-[var(--background)] text-[var(--foreground)] p-4 relative`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        {!collapsed && (
          <span className="font-bold text-xl tracking-wide text-[var(--primary)]">EurosHub</span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-[var(--primary)] hover:text-[var(--accent)] transition text-sm"
        >
          {collapsed ? '➡️' : '⬅️'}
        </button>
      </div>

      {/* Nav Links */}
      <nav className="space-y-2">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`group block px-3 py-2 rounded-xl font-medium text-sm transition-all duration-200 text-left
              ${isActive ? 'bg-[var(--primary)]/20 text-[var(--primary)]' : 'hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]'}
              `}
              title={collapsed ? label : ''}
            >
              {collapsed ? label.charAt(0) : label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
