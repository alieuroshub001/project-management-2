import SuperAdminLayout from '@/components/Admin/Layout/Layout';
import ActiveProject from '@/components/Admin/Projects/ActiveProject';
import ProjectTable from '@/components/Admin/Projects/ActiveProject';

export default function ActiveprojectPage() {
  return (
    <SuperAdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Active Projects</h1>
        <ProjectTable />
      </div>
    </SuperAdminLayout>
  );
}