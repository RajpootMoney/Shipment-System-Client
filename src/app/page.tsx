import Link from 'next/link';
import { Button } from '@/shared/components/Button';
import { Navigation } from '@/shared/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Shipment System
              </h1>
            </div>
            <Navigation />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Shipment System
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A modern, comprehensive shipment management system built with Next.js, 
            TypeScript, and Tailwind CSS. Track shipments, manage users, and 
            streamline your logistics operations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Dashboard Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dashboard</h3>
              <p className="text-gray-600 text-sm mb-4">
                View analytics, track performance, and monitor system status.
              </p>
              <Link href="/dashboard">
                <Button size="sm" className="w-full">
                  Go to Dashboard
                </Button>
              </Link>
            </div>

            {/* Shipments Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-green-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Shipments</h3>
              <p className="text-gray-600 text-sm mb-4">
                Manage shipments, track deliveries, and handle logistics.
              </p>
              <Link href="/shipments">
                <Button size="sm" className="w-full">
                  View Shipments
                </Button>
              </Link>
            </div>

            {/* Users Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-purple-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Users</h3>
              <p className="text-gray-600 text-sm mb-4">
                Manage user accounts, roles, and permissions.
              </p>
              <Link href="/users">
                <Button size="sm" className="w-full">
                  Manage Users
                </Button>
              </Link>
            </div>

            {/* Auth Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-orange-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Authentication</h3>
              <p className="text-gray-600 text-sm mb-4">
                Secure login and user authentication system.
              </p>
              <Link href="/auth/login">
                <Button size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Getting Started
            </h3>
            <p className="text-gray-600 mb-6">
              This is a feature-based Next.js application with the following structure:
            </p>
            <div className="text-left bg-gray-50 rounded-lg p-4 font-mono text-sm">
              <pre className="whitespace-pre-wrap">
{`src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── dashboard/         # Dashboard routes
│   ├── shipments/         # Shipment routes
│   ├── users/             # User routes
│   └── auth/              # Auth routes
├── features/              # Feature-based modules
│   ├── auth/              # Authentication feature
│   ├── dashboard/         # Dashboard feature
│   ├── shipments/         # Shipments feature
│   └── users/             # Users feature
└── shared/                # Shared utilities
    ├── components/         # Reusable components
    ├── hooks/             # Custom hooks
    ├── utils/             # Utility functions
    ├── types/             # TypeScript types
    ├── constants/         # Constants
    └── services/          # API services`}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
