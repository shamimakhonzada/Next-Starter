"use client";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <>
      <header className="p-4 bg-gray-800 flex justify-end">
        <SignOutButton>
          <Button className="bg-red-500" color="failure">Sign Out</Button>
        </SignOutButton>
      </header>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
        <h1 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-200">
          Welcome to your Dashboard
        </h1>
      </div>
    </>
  );
}
