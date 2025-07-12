'use client';

import SuperAdminLayout from '@/components/Admin/Layout/Layout';
import TaskCompletionReport from '@/components/Reporting/TaskCompletionReport/TaskCompletionReport';

export default function TaskReportPage() {
  return (
     <SuperAdminLayout>
      <TaskCompletionReport />
    </SuperAdminLayout>
  );
}