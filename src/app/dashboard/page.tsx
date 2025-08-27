"use client";

import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      {/* Header */}
      <header className="p-4 flex justify-end bg-gray-200 dark:bg-gray-800 shadow-md">
        <SignOutButton>
          <Button
            className="bg-red-500 dark:bg-red-600 text-white hover:bg-red-600 dark:hover:bg-red-700"
          >
            Sign Out
          </Button>
        </SignOutButton>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 drop-shadow-sm">
          Welcome to your Dashboard
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-lg mb-6">
          Manage your tasks, projects, and settings all in one place.
        </p>
      </main>
    </div>
  );
}
