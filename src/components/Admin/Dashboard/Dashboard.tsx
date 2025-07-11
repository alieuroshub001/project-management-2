"use client"
import { FiTrendingUp, FiUsers, FiFolder, FiDatabase } from 'react-icons/fi';
import ProjectActivity from './ProjectActivity';
import RecentUsers from './RecentUser';

export default function Dashboard() {

  const stats = [
    {
      title: 'Total Projects',
      value: '128',
      change: '+12%',
      icon: <FiFolder size={24} />,
      color: 'text-blue-500'
    },
    {
      title: 'Active Users',
      value: '1,243',
      change: '+5.2%',
      icon: <FiUsers size={24} />,
      color: 'text-green-500'
    },
    {
      title: 'Storage Used',
      value: '78%',
      change: '+3.1%',
      icon: <FiDatabase size={24} />,
      color: 'text-purple-500'
    },
    {
      title: 'Revenue',
      value: '$28.7K',
      change: '+8.4%',
      icon: <FiTrendingUp size={24} />,
      color: 'text-orange-500'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="p-6 rounded-xl shadow-sm" 
            style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm opacity-70">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${stat.color}`}>{stat.change} from last month</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div 
          className="lg:col-span-2 p-6 rounded-xl" 
          style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
        >
          <h2 className="text-xl font-semibold mb-4">Project Activity</h2>
          <ProjectActivity />
        </div>
        
        <div 
          className="p-6 rounded-xl" 
          style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
        >
          <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
          <RecentUsers />
        </div>
      </div>
    </div>
  );
}