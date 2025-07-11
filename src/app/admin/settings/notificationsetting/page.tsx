import SuperAdminLayout from '@/components/Admin/Layout/Layout';
import NotificationSettings from '@/components/Admin/Settings/Notifications';
import Settings from '@/components/Admin/Settings/Settings';

export default function NotificationSettingPage() {
  return (
    <SuperAdminLayout>
    <div className="p-6">
         <h1 className="text-2xl font-bold mb-4 ">Notification Setting</h1>
     <NotificationSettings />
    </div>
    </SuperAdminLayout>
  );
}
