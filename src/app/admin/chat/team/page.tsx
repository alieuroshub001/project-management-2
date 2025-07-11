import SuperAdminLayout from '@/components/Admin/Layout/Layout';
import TeamChat from '@/components/Admin/Chat/TeamChat';

export default function TeamChatPage() {
  return (
    <SuperAdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Team Chat</h1>
        <TeamChat />
      </div>
    </SuperAdminLayout>
  );
}