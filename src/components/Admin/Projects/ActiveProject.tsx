"use client"
import { FiEdit, FiTrash2, FiEye, FiMoreVertical } from 'react-icons/fi';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    name: 'EurosHub Platform',
    status: 'Active',
    team: 'Core Team',
    progress: 75,
    deadline: '2023-12-15'
  },
  {
    id: 2,
    name: 'Marketing Website',
    status: 'Completed',
    team: 'Marketing',
    progress: 100,
    deadline: '2023-11-20'
  },
  {
    id: 3,
    name: 'Mobile App Redesign',
    status: 'On Hold',
    team: 'Design',
    progress: 30,
    deadline: '2024-02-10'
  },
  {
    id: 4,
    name: 'API Integration',
    status: 'Active',
    team: 'Development',
    progress: 60,
    deadline: '2023-12-30'
  },
  {
    id: 5,
    name: 'Database Migration',
    status: 'Active',
    team: 'DevOps',
    progress: 45,
    deadline: '2024-01-15'
  }
];

export default function ActiveProject() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500/10 text-green-500';
      case 'Completed': return 'bg-blue-500/10 text-blue-500';
      case 'On Hold': return 'bg-yellow-500/10 text-yellow-500';
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y" style={{ borderColor: 'var(--border-color)' }}>
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Project Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Team</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Progress</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Deadline</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y" style={{ borderColor: 'var(--border-color)' }}>
          {projects.map((project) => (
            <tr key={project.id} className="hover:bg-secondary transition-colors">
              <td className="px-6 py-4 whitespace-nowrap font-medium">{project.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{project.team}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full" 
                    style={{ 
                      width: `${project.progress}%`,
                      backgroundColor: 'var(--primary)'
                    }}
                  ></div>
                </div>
                <span className="text-xs opacity-70 mt-1 block">{project.progress}%</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{project.deadline}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <button 
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  >
                    <FiMoreVertical />
                  </button>
                  {selectedProject === project.id && (
                    <div className="absolute right-0 mt-8 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                      <div className="py-1">
                        <button className="flex items-center px-4 py-2 text-sm w-full hover:bg-gray-100 dark:hover:bg-gray-700">
                          <FiEye className="mr-2" /> View
                        </button>
                        <button className="flex items-center px-4 py-2 text-sm w-full hover:bg-gray-100 dark:hover:bg-gray-700">
                          <FiEdit className="mr-2" /> Edit
                        </button>
                        <button className="flex items-center px-4 py-2 text-sm w-full hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500">
                          <FiTrash2 className="mr-2" /> Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}