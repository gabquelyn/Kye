import React from "react";
import { IoScan } from "react-icons/io5";
import { getServerSession } from "next-auth/next"
import Link from "next/link";
import { MdOutlineRocketLaunch, MdOutlineLogin } from "react-icons/md";
export default async function Home() {
 const session = await getServerSession()
  return (
    <div className="flex items-center gap-4 justify-center h-[100svh]">
      { session ? <Link
        href="/employee"
        className="bg-[#3D4DC8] font-bold flex gap-3 items-center  text-white p-3 px-4 rounded-[2rem]"
      >
        Launch records <MdOutlineRocketLaunch />
      </Link> : <Link
        href="/api/auth/signin"
        className="bg-[#3D4DC8] font-bold flex gap-3 items-center  text-white p-3 px-4 rounded-[2rem]"
      >
        Login <MdOutlineLogin />
      </Link>}

      <Link
        href="/scan"
        className="bg-[#3D4DC8] font-bold flex gap-3 items-center  text-white p-3 px-4 rounded-[2rem]"
      >
        Scan record <IoScan />
      </Link>
    </div>
  );
}
