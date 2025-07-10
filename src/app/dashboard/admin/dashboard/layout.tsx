'use client';

import { RoleProvider } from '@/components/Dashboard/RoleProvider';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RoleProvider>{children}</RoleProvider>;
}