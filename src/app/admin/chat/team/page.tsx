'use client';
import TeamChatComponent from '@/components/Admin/TeamChat';
import SuperAdminLayout from '@/components/Admin/Layout';

export default function TeamChat() {
  return (
    <SuperAdminLayout toggleSidebar={() => {}}>
      <TeamChatComponent />
    </SuperAdminLayout>
  );
}

