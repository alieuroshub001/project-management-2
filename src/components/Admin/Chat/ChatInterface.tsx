// components/Admin/Chat/ChatInterface.tsx
"use client";
import { useState } from 'react';
import { FiMessageSquare, FiUsers, FiSend } from 'react-icons/fi';
import dynamic from 'next/dynamic';

// Dynamically import chat components to avoid SSR issues
const TeamChat = dynamic(() => import('./TeamChat'));
const AdminXChat = dynamic(() => import('./AdminXChat'));
const ClientChat = dynamic(() => import('./ClientChat'));

export default function ChatInterface() {
  const [activeTab, setActiveTab] = useState<'team' | 'adminx' | 'client'>('team');

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden h-[calc(100vh-200px)]">
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
          <div className="p-4 border-b border-gray-200 dark:border-gray-800">
            <h2 className="font-semibold text-lg">Conversations</h2>
          </div>
          <div className="space-y-1 p-2">
            <button
              onClick={() => setActiveTab('team')}
              className={`w-full text-left p-3 rounded-lg flex items-center ${
                activeTab === 'team' ? 'bg-blue-100 dark:bg-blue-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <FiUsers className="mr-3" />
              Team Chat
            </button>
            <button
              onClick={() => setActiveTab('adminx')}
              className={`w-full text-left p-3 rounded-lg flex items-center ${
                activeTab === 'adminx' ? 'bg-blue-100 dark:bg-blue-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <FiUsers className="mr-3" />
              Admin X Chat
            </button>
            <button
              onClick={() => setActiveTab('client')}
              className={`w-full text-left p-3 rounded-lg flex items-center ${
                activeTab === 'client' ? 'bg-blue-100 dark:bg-blue-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <FiUsers className="mr-3" />
              Client Chat
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {activeTab === 'team' && <TeamChat />}
          {activeTab === 'adminx' && <AdminXChat />}
          {activeTab === 'client' && <ClientChat />}
        </div>
      </div>
    </div>
  );
}