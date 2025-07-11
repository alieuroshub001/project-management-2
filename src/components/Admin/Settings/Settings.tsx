// components/Admin/Settings/Settings.tsx
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
    // Save settings logic
    alert('Settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">System Settings</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* General Settings */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FiGlobe className="mr-2" />
              General Settings
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Site Name</label>
                <input
                  type="text"
                  name="siteName"
                  value={formData.siteName}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-secondary border-none focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block mb-1">Site URL</label>
                <input
                  type="url"
                  name="siteUrl"
                  value={formData.siteUrl}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-secondary border-none focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>
          </div>
          
          {/* Email Settings */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FiMail className="mr-2" />
              Email Settings
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Admin Email</label>
                <input
                  type="email"
                  name="adminEmail"
                  value={formData.adminEmail}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-secondary border-none focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block mb-1">SMTP Host</label>
                <input
                  type="text"
                  name="smtpHost"
                  placeholder="smtp.example.com"
                  className="w-full p-2 rounded-lg bg-secondary border-none focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>
          </div>
          
          {/* Security Settings */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FiLock className="mr-2" />
              Security Settings
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="block mb-1">Maintenance Mode</label>
                  <p className="text-sm opacity-70">Take the site offline for maintenance</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="maintenanceMode"
                    checked={formData.maintenanceMode}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              
              <div>
                <label className="block mb-1">Password Policy</label>
                <select className="w-full p-2 rounded-lg bg-secondary border-none focus:ring-2 focus:ring-primary focus:outline-none">
                  <option>Medium (8+ characters)</option>
                  <option>Strong (12+ characters with complexity)</option>
                  <option>Very Strong (16+ characters with complexity)</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Notification Settings */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FiBell className="mr-2" />
              Notification Settings
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="block mb-1">Email Notifications</label>
                  <p className="text-sm opacity-70">Enable email notifications</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="notificationsEnabled"
                    checked={formData.notificationsEnabled}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              
              <div>
                <label className="block mb-1">Notification Types</label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      name="systemAlerts"
                      checked={formData.systemAlerts}
                      onChange={handleChange}
                      className="rounded text-primary focus:ring-primary" 
                    />
                    <span>System Alerts</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      name="userActivities"
                      checked={formData.userActivities}
                      onChange={handleChange}
                      className="rounded text-primary focus:ring-primary" 
                    />
                    <span>User Activities</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      name="securityEvents"
                      checked={formData.securityEvents}
                      onChange={handleChange}
                      className="rounded text-primary focus:ring-primary" 
                    />
                    <span>Security Events</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            <FiSave />
            <span>Save Settings</span>
          </button>
        </div>
      </form>
    </div>
  );
}