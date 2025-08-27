"use client";

import { Button, DarkThemeToggle } from "flowbite-react";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <div
      className="relative min-h-screen flex flex-col 
      bg-gradient-to-br from-blue-400 to-blue-600 
      dark:from-gray-900 dark:to-gray-800 
      overflow-hidden transition-colors duration-500"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full animate-pulse -translate-x-1/2 -translate-y-1/2 dark:bg-gray-200/10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full animate-pulse translate-x-1/3 translate-y-1/4 dark:bg-gray-200/10"></div>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col justify-center items-center text-center px-4 z-10 relative">
        {/* Dark Mode Toggle */}
        <DarkThemeToggle className="absolute top-4 right-4 rounded-full" />

        <h1 className="text-5xl md:text-6xl font-extrabold text-white dark:text-gray-100 mb-4 drop-shadow-lg">
          Welcome to Our Platform
        </h1>
        <p className="text-lg md:text-xl text-white/90 dark:text-gray-300 max-w-xl mb-8 drop-shadow-md">
          Experience a seamless and efficient way to manage your tasks and
          projects. Join us today and boost your productivity.
        </p>
        <Link href="/signin">
          <Button
            size="lg"
            className="bg-white text-blue-600 dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Get Started
          </Button>
        </Link>
      </main>
    </div>
  );
}
