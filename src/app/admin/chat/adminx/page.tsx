import SuperAdminLayout from '@/components/Admin/Layout/Layout';
import AdminXChat from '@/components/Admin/Chat/AdminXChat';

export default function AdminXChatPage() {
  return (
    <SuperAdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Admin X Chat</h1>
        <AdminXChat />
      </div>
    </SuperAdminLayout>
  );
}