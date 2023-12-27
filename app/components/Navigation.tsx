"use client";
import React, { useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Navigation() {
  const pathname = usePathname();
  const [menuToggled, setMenuToggled] = useState(false);
  return (
    <div>
    <button className="text-[1.3rem] p-3 md:hidden" onClick={() => setMenuToggled(true)}><MdMenu/></button>
      <div
        className={`dashboard-menu fixed top-0 ${
          menuToggled ? "left-0 w-[70%]" : "-left-[150%]"
        } duration-300 ease-in transition-all z-50 lg:sticky lg:left-0 lg:min-w-full lg:w-[100%] py-6 bg-[#3D4DC8] h-screen min-w-[20%]`}
      >
        <div className="flex justify-between px-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="p-2"
          />
          <button
            className="md:invisible text-[1.2rem] text-white"
            onClick={() => setMenuToggled(false)}
          >
            <MdOutlineClose />
          </button>
        </div>

        <div className="flex items-center justify-center mt-[4rem]">
          <div className="text-white text-[.9rem] tracking-wider w-full flex flex-col gap-[1.5rem]">
            <Link
              href="/employee"
              className={`navigation ${
                pathname.includes("/employee") ? "bg-white text-[#3D4DC8]" : ""
              }`}
            >
              Employees
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
      </div>
    </div>
  );
}
