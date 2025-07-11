import SuperAdminLayout from '@/components/Admin/Layout/Layout';
import UserManagement from '@/components/Admin/Users/UserManagement';

export default function UsersPage() {
  return (
    <SuperAdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">User Management</h1>
        <UserManagement />
      </div>
    </SuperAdminLayout>
  );
}