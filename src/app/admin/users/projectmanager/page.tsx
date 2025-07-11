import SuperAdminLayout from '@/components/Admin/Layout/Layout';
import AdminManagement from '@/components/Admin/Users/ProjectManagement';
import ProjectManagement from '@/components/Admin/Users/ProjectManagement'

export default function ProjectManagerPage() {
  return (
    <SuperAdminLayout>
    <div className="p-6">
      <ProjectManagement />
    </div>
    </SuperAdminLayout>
  );
}

