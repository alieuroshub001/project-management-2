'use client';

import { useEffect, useState } from 'react';
import { FiEdit, FiTrash2, FiUserPlus, FiSearch } from 'react-icons/fi';
import HrLayout from '@/components/Hr Management/Layout';
import Image from 'next/image';

export default function AnalyticsDashboard() {
  const [kpis] = useState([
    { label: 'Completed Tasks', value: 124 },
    { label: 'Active Users', value: 36 },
    { label: 'Total Projects', value: 12 },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">Analytics Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {kpis.map((kpi, index) => (
          <div
            key={index}
            className="bg-card border border-border p-6 rounded-xl text-center "
          >
            <p className="text-lg font-medium text-gray-300">{kpi.label}</p>
            <p className="text-3xl font-bold text-accent mt-2">{kpi.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
