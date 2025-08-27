"use client";

import { SignIn, SignInButton } from "@clerk/nextjs";
import { Button } from "flowbite-react";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <>
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <Link href={"/signin"}>
          <Button>Get Start</Button>
        </Link>
      </header>
    </>
  );
}
