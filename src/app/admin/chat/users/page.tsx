import SuperAdminLayout from '@/components/Admin/Layout';
import UsersManagementComponent from '@/components/Admin/UserManagement';

export default function UsersManagement() {
  return (
    <SuperAdminLayout toggleSidebar={() => {}}>
      <UsersManagementComponent />
    </SuperAdminLayout>
  );
}