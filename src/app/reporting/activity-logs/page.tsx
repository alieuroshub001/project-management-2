'use client';
import SuperAdminLayout from '@/components/Admin/Layout/Layout';
import ActivityLogs from '@/components/Reporting/ActivityLogs/ActivityLogs';

export default function ActivityLogsPage() {
  return(
    <SuperAdminLayout>
         <ActivityLogs />;
    </SuperAdminLayout>
  )
  
}
