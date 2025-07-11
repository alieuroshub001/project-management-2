'use client'
import { FiEdit, FiTrash2, FiUserPlus, FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import Image from 'next/image';

const users = [
  {
    id: 1,
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2 hours ago',
    avatar: '/assets/images/avatar1.png'
  },
  {
    id: 2,
    name: 'Maria Garcia',
    email: 'maria@example.com',
    role: 'Project Manager',
    status: 'Active',
    lastLogin: '5 hours ago',
    avatar: '/assets/images/avatar2.png'
  },
  {
    id: 3,
    name: 'James Wilson',
    email: 'james@example.com',
    role: 'Developer',
    status: 'Inactive',
    lastLogin: '2 days ago',
    avatar: '/assets/images/avatar3.png'
  },
  {
    id: 4,
    name: 'Sarah Lee',
    email: 'sarah@example.com',
    role: 'Designer',
    status: 'Active',
    lastLogin: '1 day ago',
    avatar: '/assets/images/avatar4.png'
  },
  {
    id: 5,
    name: 'David Kim',
    email: 'david@example.com',
    role: 'QA Engineer',
    status: 'Pending',
    lastLogin: 'Never',
    avatar: '/assets/images/avatar5.png'
  }
];

export default function UsersManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'All' || user.role === selectedRole;
    const matchesStatus = selectedStatus === 'All' || user.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500/10 text-green-500';
      case 'Inactive': return 'bg-red-500/10 text-red-500';
      case 'Pending': return 'bg-yellow-500/10 text-yellow-500';
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 rounded-lg bg-secondary border-none focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="bg-secondary rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          >
            <option value="All">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Project Manager">Project Manager</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="QA Engineer">QA Engineer</option>
          </select>
          
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-secondary rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          >
            <option value="All">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
          </select>
          
          <button className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
            <FiUserPlus />
            <span>Add User</span>
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y" style={{ borderColor: 'var(--border-color)' }}>
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Last Login</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: 'var(--border-color)' }}>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-secondary transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{user.lastLogin}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-primary">
                      <FiEdit />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500">
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}