'use client';

import { useState } from 'react';
import Link from 'next/link';
import { adminSidebarLinks } from '@/components/Admin/Data/sidebarlinks';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <aside
      className={`bg-white border-r shadow-md h-screen transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b">
        {!isCollapsed && (
          <span className="text-lg font-semibold text-gray-800">Admin</span>
        )}
        <button
          onClick={toggleSidebar}
          className="text-gray-600 hover:text-black transition"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="p-2 space-y-1">
        {adminSidebarLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition group"
          >
            <link.icon className="w-5 h-5 text-gray-500 group-hover:text-black" />
            {!isCollapsed && <span>{link.name}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
