import SuperAdminLayout from '@/components/Admin/Layout';
import Dashboard from '@/components/Admin/Dashboard';

export default function DashboardPage() {
  return (
    <SuperAdminLayout toggleSidebar={() => {}}>
      <Dashboard />
    </SuperAdminLayout>
  );
}