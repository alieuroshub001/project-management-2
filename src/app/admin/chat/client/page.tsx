'use client';
import ClientChatComponent from '@/components/Admin/ClientChat';
import SuperAdminLayout from '@/components/Admin/Layout';

export default function ClientChat() {
  return (
    <SuperAdminLayout toggleSidebar={() => {}}>
      <ClientChatComponent/>
    </SuperAdminLayout>
  );
}