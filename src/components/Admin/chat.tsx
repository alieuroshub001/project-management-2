'use client';
import { useState } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi there!', sender: 'user', time: '10:00 AM' },
    { id: 2, text: 'Hello! How can I help you today?', sender: 'admin', time: '8:00 AM' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, sender: 'user', time: 'Now' }]);
    setInput('');
  };

  return (
    <div className="h-screen flex overflow-hidden bg-white dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 border-r dark:border-gray-800 bg-gray-100 dark:bg-gray-800 p-4 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Messages</h2>
        <div className="space-y-2">
          {['Client', 'Team ', 'Admin X'].map((user, index) => (
            <div
              key={index}
              className="flex items-center p-2 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer justify-between"
            >
              <div className="flex items-center gap-2">
                <UserIcon />
                <span className="text-sm text-gray-800 dark:text-white">{user}</span>
              </div>
              <span className="text-xs bg-red-500 text-white rounded-full px-2 py-0.5">2</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center justify-between border-b dark:border-gray-800 p-4 bg-white dark:bg-gray-900">
          <div className="flex items-center gap-2">
            <UserIcon size={8} />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Client A</p>
              <p className="text-xs text-green-500">Online</p>
            </div>
          </div>
          <DotsIcon />
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50 dark:bg-gray-900">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-xs p-3 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-primary text-white ml-auto'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
              }`}
            >
              <p>{msg.text}</p>
              <span className="text-xs block mt-1 text-gray-300">{msg.time}</span>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center gap-2">
          <ClipIcon />
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg focus:outline-none"
          />
          <button onClick={sendMessage} className="bg-primary text-white px-4 py-2 rounded-lg">
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

// --- ICONS (SVG) ---
function UserIcon({ size = 6 }: { size?: number }) {
  return (
    <svg className={`w-${size} h-${size} text-gray-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A6.978 6.978 0 0012 20a6.978 6.978 0 006.879-2.196M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ClipIcon() {
  return (
    <svg className="w-5 h-5 text-gray-500 dark:text-gray-300 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.24 7.76a5 5 0 10-7.07 7.07l7.07 7.07a5 5 0 107.07-7.07L9.88 3.88a3 3 0 00-4.24 4.24l9.19 9.19" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L11 13" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L15 22l-4-9-9-4 20-7z" />
    </svg>
  );
}

function DotsIcon() {
  return (
    <svg className="w-5 h-5 text-gray-500 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}
