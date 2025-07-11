"use client"
import Image from 'next/image';


const users = [
  {
    id: 1,
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'Project Manager',
    avatar: '/assets/images/avatar1.png',
    joined: '2 hours ago'
  },
  {
    id: 2,
    name: 'Maria Garcia',
    email: 'maria@example.com',
    role: 'Developer',
    avatar: '/assets/images/avatar2.png',
    joined: '5 hours ago'
  },
  {
    id: 3,
    name: 'James Wilson',
    email: 'james@example.com',
    role: 'Designer',
    avatar: '/assets/images/avatar3.png',
    joined: '1 day ago'
  },
  {
    id: 4,
    name: 'Sarah Lee',
    email: 'sarah@example.com',
    role: 'QA Engineer',
    avatar: '/assets/images/avatar4.png',
    joined: '2 days ago'
  },
  {
    id: 5,
    name: 'David Kim',
    email: 'david@example.com',
    role: 'Product Owner',
    avatar: '/assets/images/avatar5.png',
    joined: '3 days ago'
  }
];

export default function RecentUsers() {
  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div key={user.id} className="flex items-center p-3 rounded-lg hover:bg-secondary transition-colors">
          <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
            <Image
              src={user.avatar}
              alt={user.name}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium truncate">{user.name}</h4>
            <p className="text-sm opacity-70 truncate">{user.role}</p>
          </div>
          <div className="text-sm opacity-70 whitespace-nowrap ml-2">
            {user.joined}
          </div>
        </div>
      ))}
      <button className="w-full mt-4 py-2 text-primary hover:underline text-sm">
        View all users →
      </button>
    </div>
  );
}