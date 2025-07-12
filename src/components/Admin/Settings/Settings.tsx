"use client"
import { useState } from 'react';
import { FiSave, FiLock, FiMail, FiGlobe, FiBell } from 'react-icons/fi';

export default function Settings() {
  const [formData, setFormData] = useState({
    siteName: 'EurosHub',
    siteUrl: 'https://euroshub.com',
    adminEmail: 'admin@euroshub.com',
    notificationsEnabled: true,
    maintenanceMode: false,
    systemAlerts: true,
    userActivities: true,
    securityEvents: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };

  return (
    <div className="space-y-6 px-4 md:px-8 py-8 text-white">
      <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#17B6B2] to-[#00FFC3] text-transparent bg-clip-text">System Settings</h1>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* General Settings */}
          <div className="p-6 rounded-2xl shadow-md backdrop-blur-lg" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-black">
              <FiGlobe className="text-primary" />
              General Settings
            </h2>

            <div className="space-y-4">
              <div>
              <label className="block mb-1 text-sm font-medium text-black">Site Name</label>
              <input
                type="text"
                name="siteName"
                value={formData.siteName}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-white/10 text-black placeholder-gray-400 border border-black ring-2 border-accent outline-black"
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
          </div>

          {/* Email Settings */}
          <div className="p-6 rounded-2xl shadow-md backdrop-blur-lg" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-black">
              <FiMail className="text-primary" />
              Email Settings
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-black">Admin Email</label>
                <input
                  type="email"
                  name="adminEmail"
                  value={formData.adminEmail}
                  onChange={handleChange}
                 className="w-full p-2 rounded-md bg-white/10 text-blue-600 placeholder-gray-400 border border-black ring-2  ring-accent outline-black"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-black">SMTP Host</label>
                <input
                  type="text"
                  name="smtpHost"
                  placeholder="smtp.example.com"
                  className="w-full p-2 rounded-md bg-black/10 text-black placeholder-gray-400 border border-white/20 focus:ring-2 focus:ring-accent focus:outline-black"
                />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="p-6 rounded-2xl shadow-md backdrop-blur-lg" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-black">
              <FiLock className="text-primary" />
              Security Settings
            </h2>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <label className="block mb-1 text-sm font-medium text-black">Maintenance Mode</label>
                  <p className="text-xs text-gray-300">Take the site offline for maintenance</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="maintenanceMode"
                    checked={formData.maintenanceMode}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-primary relative after:content-[''] after:absolute after:left-[2px] after:top-[2px] after:bg-white after:w-5 after:h-5 after:rounded-full after:transition-transform peer-checked:after:translate-x-full" />
                </label>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-black">Password Policy</label>
                <select className="w-full p-2 rounded-md bg-black/10 text-black border border-white/20 focus:ring-2 focus:ring-accent focus:outline-black">
                  <option>Medium (8+ characters)</option>
                  <option>Strong (12+ characters with complexity)</option>
                  <option>Very Strong (16+ characters with complexity)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="p-6 rounded-2xl shadow-md backdrop-blur-lg" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-black">
              <FiBell className="text-primary" />
              Notification Settings
            </h2>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <label className="block mb-1 text-sm font-medium text-black">Email Notifications</label>
                  <p className="text-xs text-gray-300">Enable email notifications</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="notificationsEnabled"
                    checked={formData.notificationsEnabled}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-primary relative after:content-[''] after:absolute after:left-[2px] after:top-[2px] after:bg-white after:w-5 after:h-5 after:rounded-full after:transition-transform peer-checked:after:translate-x-full" />
                </label>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-black">Notification Types</label>
                <div className="space-y-2 text-sm">
                  {['systemAlerts', 'userActivities', 'securityEvents'].map(type => (
                    <label key={type} className="flex items-center gap-2 text-black">
                      <input
                        type="checkbox"
                        name={type}
                        checked={formData[type as keyof typeof formData] as boolean}
                        onChange={handleChange}
                        className="accent-primary"
                      />
                      <span className="capitalize">{type.replace(/([A-Z])/g, ' $1')}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-xl hover:bg-opacity-90 transition duration-300"
          >
            <FiSave className="text-xl" />
            <span className="font-medium">Save Settings</span>
          </button>
        </div>
      </form>
    </div>
  );
}
