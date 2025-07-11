'use client';
import { useState } from 'react';

export default function ClientChat() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello from Client!', sender: 'admin', time: '7:00 AM' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, sender: 'user', time: 'Now' }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b dark:border-gray-700 bg-white dark:bg-gray-900">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Client</h2>
        <p className="text-sm text-green-500">Online</p>
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
      <div className="p-4 border-t dark:border-gray-700 bg-white dark:bg-gray-900 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg focus:outline-none"
        />
        <button onClick={sendMessage} className="bg-primary text-white px-4 py-2 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}

