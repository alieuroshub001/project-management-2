'use client';

import { useState } from 'react';
import { FiEdit, FiTrash2, FiUserPlus, FiSearch } from 'react-icons/fi';
import HrLayout from '@/components/Hr Management/Layout';
import Image from 'next/image';

export default function Leave() {
  const [form, setForm] = useState({ startDate: '', endDate: '', reason: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Leave Request:', form);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-primary">Leave Request</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-xl border border-border">
        <div>
          <label className="block mb-1 font-medium">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">End Date</label>
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Reason</label>
          <textarea
            name="reason"
            value={form.reason}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-teal-600 text-white px-6 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}