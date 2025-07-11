'use client';

import { useState } from 'react';
import { FiEdit, FiTrash2, FiUserPlus, FiSearch } from 'react-icons/fi';
import HrLayout from '@/components/Hr Management/Layout';
import Image from 'next/image';

const mockEmployees = [
  { id: 1, name: 'John Doe', email: 'john@example.com', department: 'HR', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'IT', status: 'On Leave' },
];

export default function Employees() {
  const [employees] = useState(mockEmployees);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-primary">Employee Directory</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {employees.map(emp => (
          <div
            key={emp.id}
            className="bg-card border border-border p-4 rounded-xl shadow-sm text-white"
          >
            <h3 className="text-lg font-semibold">{emp.name}</h3>
            <p className="text-sm text-gray-300">{emp.email}</p>
            <p className="text-sm text-gray-400">{emp.department}</p>
            <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-accent text-black">
              {emp.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}