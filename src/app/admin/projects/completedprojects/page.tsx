import SuperAdminLayout from '@/components/Admin/Layout/Layout';
import ActiveProject from '@/components/Admin/Projects/CompletedProject';
import ProjectTable from '@/components/Admin/Projects/CompletedProject';

export default function CompletedProjectsPage() {
  return (
    <SuperAdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Completed Projects</h1>
         <ProjectTable />
      </div>
    </SuperAdminLayout>
  );
}