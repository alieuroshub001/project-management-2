
import SuperAdminLayout from '@/components/Admin/Layout/Layout';
import GeneralSettings from '@/components/Admin/Settings/General';
import Settings from '@/components/Admin/Settings/Settings';

export default function GeneralSettingsPage() {
  return (
    <SuperAdminLayout>
    <div className="p-6">
         <h1 className="text-2xl font-bold mb-4 ">General Setting</h1>
     <GeneralSettings />
    </div>
    </SuperAdminLayout>
  );
}

