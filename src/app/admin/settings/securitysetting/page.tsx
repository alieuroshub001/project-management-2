import SuperAdminLayout from '@/components/Admin/Layout/Layout';
import SecuritySettings from '@/components/Admin/Settings/Security';
import Settings from '@/components/Admin/Settings/Settings';

export default function SecuritySettingPage() {
  return (
    <SuperAdminLayout>
    <div className="p-6">
          <h1 className="text-2xl font-bold mb-4 ">Security Setting</h1>
        <SecuritySettings />
    </div>
    </SuperAdminLayout>
  );
}