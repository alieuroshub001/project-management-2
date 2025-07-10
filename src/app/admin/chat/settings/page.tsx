import SuperAdminLayout from '@/components/Admin/Layout';
import Settings from '@/components/Admin/Settings';

export default function SettingsPage() {
  return (
    <SuperAdminLayout toggleSidebar={() => {}}>
      <Settings />
    </SuperAdminLayout>
  );
}