'use client';
import { useState } from 'react';
import { FiEdit, FiTrash2, FiUserPlus, FiSearch } from 'react-icons/fi';
import HrLayout from '@/components/Hr Management/Layout';
import Image from 'next/image';

const logs = [
  { user: 'Alice', action: 'Created a task', time: '2h ago' },
  { user: 'Bob', action: 'Completed a milestone', time: '4h ago' },
  { user: 'Eve', action: 'Commented on task', time: '1d ago' },
];

export default function ActivityLogs() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">User Activity Logs</h2>
      <div className="bg-card border border-border p-4 rounded-xl  space-y-2">
        {logs.map((log, index) => (
          <div key={index} className="flex justify-between">
            <span>{log.user} - {log.action}</span>
            <span className="text-gray-400 text-sm">{log.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}