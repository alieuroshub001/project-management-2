"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { 
  FiHome, 
  FiUsers, 
  FiFolder, 
  FiMessageSquare, 
  FiSettings,
  FiChevronDown,
  FiChevronRight
} from 'react-icons/fi';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const toggleSubmenu = (menuId: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuId) 
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <FiHome size={18} />,
      href: '/admin/dashboard',
    },
    {
      id: 'users',
      label: 'User Management',
      icon: <FiUsers size={18} />,
      href: '/admin/users',
      submenu: [
        { label: 'All Users', href: '/admin/users' },
        { label: 'Admins', href: '/admin/users/adminuser' },
        { label: 'Project Managers', href: '/admin/users/projectmanager' },
      ]
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: <FiFolder size={18} />,
      href: '/admin/projects',
      submenu: [
        { label: 'All Projects', href: '/admin/projects' },
        { label: 'Active', href: '/admin/projects/activeprojects' },
        { label: 'Completed', href: '/admin/projects/completedprojects' },
      ]
    },
    {
      id: 'chat',
      label: 'Chat',
      icon: <FiMessageSquare size={18} />,
      href: '/admin/chat'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <FiSettings size={18} />,
      href: '/admin/settings',
      submenu: [
        { label: 'General', href: '/admin/settings' },
        { label: 'Security', href: '/admin/settings/securitysetting' },
        { label: 'Notifications', href: '/admin/settings/notificationsetting' },
      ]
    }
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-30 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Logo and toggle button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Image 
              src="/assets/images/logo.png" 
              alt="Logo" 
              width={24} 
              height={24}
              className="rounded"
            />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">EurosHub</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Super Admin</p>
            </div>
          )}
        </div>
        <button
          onClick={onToggle}
          className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <svg className={`w-4 h-4 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => (
          <div key={item.id}>
            {item.submenu ? (
              <div>
                <button
                  onClick={() => toggleSubmenu(item.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                    pathname.startsWith(item.href) ? 'bg-blue-50 dark:bg-blue-900/30' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600 dark:text-gray-300">
                      {item.icon}
                    </span>
                    {!isCollapsed && (
                      <span className="text-gray-700 dark:text-gray-200">
                        {item.label}
                      </span>
                    )}
                  </div>
                  {!isCollapsed && (
                    <span className="text-gray-500">
                      {expandedMenus.includes(item.id) ? (
                        <FiChevronDown size={16} />
                      ) : (
                        <FiChevronRight size={16} />
                      )}
                    </span>
                  )}
                </button>
                
                {/* Submenu */}
                {!isCollapsed && expandedMenus.includes(item.id) && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                          pathname === subItem.href
                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-white'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.href}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200'
                }`}
              >
                <span className="text-gray-600 dark:text-gray-300">
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className="ml-3">{item.label}</span>
                )}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom Section - User Profile */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
            <span className="text-white text-xs font-medium">SA</span>
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Super Admin</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">admin@euroshub.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}