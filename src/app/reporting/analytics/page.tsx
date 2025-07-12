'use client';

import SuperAdminLayout from '@/components/Admin/Layout/Layout';
import AnalyticsDashboard from '@/components/Reporting/AnalyticsDashboard/AnalyticsDashboard';

export default function AnalyticsPage() {
  return (
  <SuperAdminLayout>
      <AnalyticsDashboard />
    </SuperAdminLayout>
  );
}

