import SuperAdminLayout from '@/components/Admin/Layout/Layout';
import Dashboard from '@/components/Admin/Dashboard/Dashboard';

export default function DashboardPage() {
  return (
    <SuperAdminLayout>
      <Dashboard />
    </SuperAdminLayout>
  );
}