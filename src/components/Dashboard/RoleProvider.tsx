'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Role = 'admin' | 'team' | 'client' | null;

type RoleContextType = {
  role: Role;
  setRole: React.Dispatch<React.SetStateAction<Role>>;
  isLoggedIn: boolean;
  login: (email: string, password: string, selectedRole: Role) => void;
  logout: () => void;
};

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    const storedLogin = localStorage.getItem('isLoggedIn');

    if (storedLogin === 'true' && storedRole) {
      setIsLoggedIn(true);
      setRole(storedRole as Role);
    }
  }, []);

  const login = (email: string, password: string, selectedRole: Role) => {
    if (email.trim() && password.trim() && selectedRole) {
      setIsLoggedIn(true);
      setRole(selectedRole);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', selectedRole);
      router.push('/dashboard');
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole(null);
    localStorage.clear();
    router.push('/login');
  };

  return (
    <RoleContext.Provider value={{ role, setRole, isLoggedIn, login, logout }}>
      {children}
    </RoleContext.Provider>
  );
}

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};