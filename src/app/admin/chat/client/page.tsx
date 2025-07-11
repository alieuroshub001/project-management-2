import SuperAdminLayout from '@/components/Admin/Layout/Layout';
import ClientChat from '@/components/Admin/Chat/ClientChat';

export default function ClientChatPage() {
  return (
    <SuperAdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Client Chat</h1>
        <ClientChat />
      </div>
    </SuperAdminLayout>
  );
}