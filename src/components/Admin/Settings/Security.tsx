// components/Settings/Security.tsx
'use client';

import { useState } from 'react';
import { FiSave, FiLock, FiMail, FiGlobe, FiBell } from 'react-icons/fi';
import Image from 'next/image';

export default function SecuritySettings() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [loginAlerts, setLoginAlerts] = useState(true);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Security Settings</h2>

      <div className="space-y-4">
        <div className="p-5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)]">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-white font-medium">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-400">Enhance account security with a second step.</p>
            </div>
            <button
              onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                twoFactorEnabled
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-[var(--primary)] text-white hover:bg-[var(--accent)]'
              }`}
            >
              {twoFactorEnabled ? 'Disable' : 'Enable'}
            </button>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)]">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-white font-medium">Login Alerts</h4>
              <p className="text-sm text-gray-400">Receive alerts on new login activity.</p>
            </div>
            <button
              onClick={() => setLoginAlerts(!loginAlerts)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                loginAlerts
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-[var(--primary)] text-white hover:bg-[var(--accent)]'
              }`}
            >
              {loginAlerts ? 'Disable' : 'Enable'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}