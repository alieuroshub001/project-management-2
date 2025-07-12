'use client';
import { useState } from 'react';
import { FiEdit, FiTrash2, FiUserPlus, FiSearch } from 'react-icons/fi';
import HrLayout from '@/components/Hr Management/Layout';
import Image from 'next/image';

export default function ExportButtons() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">Export Reports</h2>
      <div className="flex gap-4">
      <button className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600">Export CSV</button>

        <button className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600">Export PDF</button>
      </div>
    </div>
  );
}
