"use client"
import { FiSearch, FiBell, FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import { ReactNode } from 'react';

export default function SuperAdminLayout({ 
  children,
  toggleSidebar 
}: { 
  children: ReactNode;
  toggleSidebar: () => void;
}) {
  return (
    <div>
      <SuperAdminHeader toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      {children}
    </div>
  );
}

// Header component for Super Admin
function SuperAdminHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-10 border-b" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="mr-4 md:hidden text-gray-500 hover:text-primary"
          >
            <FiMenu size={24} />
          </button>
          
          <div className="relative w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 rounded-lg bg-secondary border-none focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-secondary relative">
            <FiBell size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="text-right hidden sm:block">
              <p className="font-medium">Super Admin</p>
              <p className="text-xs opacity-70">Administrator</p>
            </div>
            <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary">
              <Image
                src="/assets/images/avatar.png"
                alt="User avatar"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
