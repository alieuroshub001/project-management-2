// app/admin/chat/page.tsx
import SuperAdminLayout from '@/components/Admin/Layout/Layout';
import ChatInterface from '@/components/Admin/Chat/ChatInterface'; // Updated path

export default function ChatPage() {
  return (
    <SuperAdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Chat Dashboard</h1>
        <ChatInterface />
      </div>
    </SuperAdminLayout>
  );
}