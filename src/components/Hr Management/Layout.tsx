// components/HrManagement/Layout.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const navItems = [
  { label: 'Attendance', href: '/hr/attendance' },
  { label: 'Documents', href: '/hr/documents' },
  { label: 'Employees', href: '/hr/employees' },
  { label: 'Leave', href: '/hr/leave' },
  { label: 'Role Access', href: '/hr/roleaccess' },
];

export default function HrLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="w-60 bg-card border-r border-border p-4">
        <h2 className="text-xl font-bold text-primary mb-6">HR Management</h2>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 rounded-lg transition-colors hover:bg-primary hover:text-white ${
                pathname === item.href ? 'bg-primary text-white' : 'text-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
