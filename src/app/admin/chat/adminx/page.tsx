'use client';
import AdminXChatComponent from '@/components/Admin/AdminXChat';
import SuperAdminLayout from '@/components/Admin/Layout';

export default function AdminXChat() {
  return (
    <SuperAdminLayout toggleSidebar={() => {}}>
      <AdminXChatComponent />
    </SuperAdminLayout>
  );
}