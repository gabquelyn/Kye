"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="bg-[#3D4DC8] h-[100svh] z-20 flex items-center justify-center">
      <div className="text-white text-[.9rem] tracking-wider w-full flex flex-col gap-[1.5rem]">
        <Link
          href="/new"
          className={`navigation ${
            pathname === "/new" ? "bg-white text-[#3D4DC8]" : ""
          }`}
        >
          Newly Added
        </Link>
        <Link
          href="/"
          className={`navigation ${
            pathname === "/" ? "bg-white text-[#3D4DC8]" : ""
          }`}
        >
          Employees
        </Link>
        <Link
          href="/operations"
          className={`navigation ${
            pathname === "/operations" ? "bg-white text-[#3D4DC8]" : ""
          }`}
        >
          Operations
        </Link>
        <Link
          href="/settings"
          className={`navigation ${
            pathname === "/settings" ? "bg-white text-[#3D4DC8]" : ""
          }`}
        >
          Settings
        </Link>
        <Link
          href="/logout"
          className={`navigation ${
            pathname === "/logout" ? "bg-white text-[#3D4DC8]" : ""
          }`}
        >
          Logout
        </Link>
      </div>
    </div>
  );
}
