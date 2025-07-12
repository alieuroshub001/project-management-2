
'use client';

import { useState } from 'react';
import { FiEdit, FiTrash2, FiUserPlus, FiSearch } from 'react-icons/fi';
import HrLayout from '@/components/Hr Management/Layout';
import Image from 'next/image';

export default function Attendance() {
  const [attendanceData] = useState(
    Array.from({ length: 30 }, (_, i) => {
      const date = new Date(2025, 6, i + 1);
      const formatted = date.toISOString().split('T')[0];
      return {
        date: formatted,
        status: i % 6 === 0 ? 'Absent' : 'Present',
      };
    })
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-primary">Attendance Tracker</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
        {attendanceData.map(({ date, status }) => (
          <div
            key={date}
            className="bg-card border border-border p-4 rounded-xl flex flex-col items-center"
          >
            <p className="text-sm font-medium">{date}</p>
            <span
              className={`mt-2 px-3 py-1 text-xs rounded-full ${
                status === 'Present'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}