// components/Settings/Notification.tsx
'use client';

import { useState } from 'react';
import { FiSave, FiLock, FiMail, FiGlobe, FiBell } from 'react-icons/fi';
import Image from 'next/image';

export default function NotificationSettings() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [pushNotif, setPushNotif] = useState(true);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Notification Settings</h2>

      <div className="space-y-4">
        <div className="p-5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)]">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-white font-medium">Email Notifications</h4>
              <p className="text-sm text-gray-400">Receive important updates via email.</p>
            </div>
            <button
              onClick={() => setEmailNotif(!emailNotif)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                emailNotif
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-[var(--primary)] text-white hover:bg-[var(--accent)]'
              }`}
            >
              {emailNotif ? 'Disable' : 'Enable'}
            </button>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)]">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-white font-medium">SMS Notifications</h4>
              <p className="text-sm text-gray-400">Receive SMS alerts for critical updates.</p>
            </div>
            <button
              onClick={() => setSmsNotif(!smsNotif)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                smsNotif
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-[var(--primary)] text-white hover:bg-[var(--accent)]'
              }`}
            >
              {smsNotif ? 'Disable' : 'Enable'}
            </button>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)]">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-white font-medium">Push Notifications</h4>
              <p className="text-sm text-gray-400">Get real-time updates directly in your browser.</p>
            </div>
            <button
              onClick={() => setPushNotif(!pushNotif)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                pushNotif
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-[var(--primary)] text-white hover:bg-[var(--accent)]'
              }`}
            >
              {pushNotif ? 'Disable' : 'Enable'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
