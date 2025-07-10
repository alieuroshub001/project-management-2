import {
  LayoutDashboard,
  FolderKanban,
  Users,
  FileText,
  MessageCircle,
  Clock,
  BarChart2,
  Settings,
  Bug,
  ShieldCheck,
} from 'lucide-react'; // Or your preferred icon library

interface SidebarLink {
  name: string;
  href: string;
  icon: React.ElementType;
}

export const adminSidebarLinks: SidebarLink[] = [
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Project Management',
    href: '/admin/projects',
    icon: FolderKanban,
  },
  {
    name: 'HR Management',
    href: '/admin/hr',
    icon: Users,
  },
  {
    name: 'Communication',
    href: '/admin/chat',
    icon: MessageCircle,
  },
  {
    name: 'Time Tracking',
    href: '/admin/time-tracking',
    icon: Clock,
  },
  {
    name: 'Reporting & Analytics',
    href: '/admin/reports',
    icon: BarChart2,
  },
  {
    name: 'QA & Deployment',
    href: '/admin/testing',
    icon: Bug,
  },
  {
    name: 'User & Role Management',
    href: '/admin/roles',
    icon: ShieldCheck,
  },
  {
    name: 'System Settings',
    href: '/admin/settings',
    icon: Settings,
  },
];
