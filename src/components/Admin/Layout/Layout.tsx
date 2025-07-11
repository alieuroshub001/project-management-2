"use client";
import { useState } from 'react';
import { ReactNode } from 'react';
import AdminHeader from './Header';
import Sidebar from './Sidebar';

export default function SuperAdminLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isCollapsed={!isSidebarOpen} onToggle={toggleSidebar} />
        <main className="flex-1 p-4 ml-0 transition-all duration-300" 
              style={{ marginLeft: isSidebarOpen ? '16rem' : '5rem' }}>
          {children}
        </main>
      </div>
    </div>
  );
}