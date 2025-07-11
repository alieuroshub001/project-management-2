import SuperAdminLayout from '@/components/Admin/Layout/Layout';
import ProjectTable from '@/components/Admin/Projects/ProjectTable';

export default function ProjectsPage() {
  return (
    <SuperAdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Project Management</h1>
        <ProjectTable />
      </div>
    </SuperAdminLayout>
  );
}