"use client";
import { SignIn } from "@clerk/nextjs";
import { DarkThemeToggle } from "flowbite-react";

export default function SignInPage() {
  return (
    <>
      <div
        className="grid min-h-screen grid-cols-1 bg-gray-50 md:grid-cols-2 dark:bg-gray-950"
        style={{
          backgroundImage: "url('/assets/images/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Section */}
        <div className="hidden items-center justify-center bg-transparent md:flex"></div>

        {/* Right Section */}
        <div className="relative flex flex-col items-center justify-center p-6">
          <DarkThemeToggle className="absolute top-4 right-4 rounded-full" />

          <SignIn
            routing="path"
            path="/signin"
            signUpUrl="/signup"
            fallbackRedirectUrl="/dashboard"
          />
        </div>
      </div>
    </>
  );
}
