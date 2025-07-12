'use client';

import SuperAdminLayout from '@/components/Admin/Layout/Layout';
import ExportButtons from '@/components/Reporting/ExportButtons/ExportButtons';

export default function ExportPage() {
  return (
    <SuperAdminLayout>
      <ExportButtons />
    </SuperAdminLayout>
  );
}
