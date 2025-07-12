'use client';

import { useState } from 'react';
import { FiEdit, FiTrash2, FiUserPlus, FiSearch } from 'react-icons/fi';
import HrLayout from '@/components/Hr Management/Layout';
import Image from 'next/image';

const dummyTasks = [
  { id: 1, title: 'Design Homepage', completed: true },
  { id: 2, title: 'Fix Login Bug', completed: false },
  { id: 3, title: 'Update Docs', completed: true },
];

export default function TaskCompletionReport() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">Task Completion Report</h2>
      <ul className="space-y-3">
        {dummyTasks.map((task) => (
          <li
            key={task.id}
            className="bg-card border border-border p-4 rounded-xl flex justify-between"
          >
            <span>{task.title}</span>
            <span className={task.completed ? 'text-green-400' : 'text-red-400'}>
              {task.completed ? 'Completed' : 'Incomplete'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}