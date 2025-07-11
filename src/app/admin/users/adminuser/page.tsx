import SuperAdminLayout from '@/components/Admin/Layout/Layout';
import AdminManagement from '@/components/Admin/Users/AdminManagement';

export default function AdminUserPage() {
  return (
    <SuperAdminLayout>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 ">Admin Management</h1>
      <AdminManagement />
    </div>
    </SuperAdminLayout>
  );
}

