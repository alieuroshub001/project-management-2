'use client';
import { useState } from 'react';
import { FiGlobe } from 'react-icons/fi';

export default function GeneralSettings() {
  const [formData, setFormData] = useState({
    siteName: 'EurosHub',
    siteUrl: 'https://euroshub.com',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('General settings saved!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto px-4 py-8 space-y-6 text-white">
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#17B6B2] to-[#00FFC3] text-transparent bg-clip-text flex items-center gap-2">
        <FiGlobe />
        General Settings
      </h1>

      <div className="space-y-4 p-6 rounded-2xl shadow-md backdrop-blur-lg" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
        <div>
          <label className="block mb-1 text-sm font-medium text-black">Site Name</label>
          <input
            type="text"
            name="siteName"
            value={formData.siteName}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-white/10 text-black placeholder-gray-400 border border-white/20 ring-2 ring-accent outline-black"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-black">Site URL</label>
          <input
            type="url"
            name="siteUrl"
            value={formData.siteUrl}
            onChange={handleChange}
             className="w-full p-2 rounded-md bg-white/10 text-blue-600 placeholder-gray-400 border border-black ring-2  ring-accent outline-black"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-xl hover:bg-opacity-90 transition duration-300"
        >
          Save Settings
        </button>
      </div>
    </form>
  );
}
