"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="bg-blue-700 h-[100svh] flex items-center justify-center">
      <div className="text-white text-[.9rem] tracking-wider w-full flex flex-col gap-[1.5rem]">
        <Link
          href="/new"
          className={`navigation ${
            pathname === "/new" ? "bg-white text-blue-700" : ""
          }`}
        >
          Newly Added
        </Link>
        <Link
          href="/"
          className={`navigation ${
            pathname === "/" ? "bg-white text-blue-700" : ""
          }`}
        >
          Employees
        </Link>
        <Link
          href="/operations"
          className={`navigation ${
            pathname === "/operations" ? "bg-white text-blue-700" : ""
          }`}
        >
          Operations
        </Link>
        <Link
          href="/settings"
          className={`navigation ${
            pathname === "/settings" ? "bg-white text-blue-700" : ""
          }`}
        >
          Settings
        </Link>
        <Link
          href="/logout"
          className={`navigation ${
            pathname === "/logout" ? "bg-white text-blue-700" : ""
          }`}
        >
          Logout
        </Link>
      </div>
    </div>
  );
}
