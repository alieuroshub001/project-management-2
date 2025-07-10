import SuperAdminLayout from '@/components/Admin/Layout';
import ProjectsTable from '@/components/Admin/ProjectTable';

export default function ProjectsPage() {
  return (
    <SuperAdminLayout toggleSidebar={() => {}}>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Project Management</h1>
        <ProjectsTable />
      </div>
    </SuperAdminLayout>
  );
}