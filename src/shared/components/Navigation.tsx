'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './Button';

export const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/shipments', label: 'Shipments' },
    { href: '/users', label: 'Users' },
  ];

  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${
            isActive(item.href)
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-900'
          } px-1 py-2 text-sm font-medium transition-colors`}
        >
          {item.label}
        </Link>
      ))}
      <Link
        href="/auth/login"
        className="text-gray-500 hover:text-gray-900 px-1 py-2 text-sm font-medium"
      >
        Login
      </Link>
    </nav>
  );
}; 