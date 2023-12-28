"use client";
import React from "react";
import Image from "next/image";
import { FaBoltLightning } from "react-icons/fa6";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";
export default function TableRow({
  dataurl,
  firstname,
  lastname,
  position,
  email,
  phone,
  id,
}: {
  dataurl: string;
  firstname: string;
  lastname: string;
  position: string;
  email: string;
  phone: string;
  id: string;
}) {
  const router = useRouter();
  return (
    <tr>
      <td onClick={() => router.push(`/employee/${id}`)}>
        <div className="flex items-center justify-center gap-2 whitespace-nowrap">
          <div className="relative rounded-[50%] overflow-hidden h-[2.5rem] w-[2.5rem]">
            <Image
              src={dataurl || "/holder.png"}
              fill
              alt="profile pics"
              className="object-cover"
            />
          </div>
          <p>{`${firstname} ${lastname}`}</p>
        </div>
      </td>
      <td onClick={() => router.push(`/employee/${id}`)}>{position}</td>
      <td className="text-[#3D4DC8]" onClick={() => router.push(`/employee/${id}`)}>{email}</td>
      <td onClick={() => router.push(`/employee/${id}`)}>{phone}</td>
      <td>
        <button
          className="font-bold p-1 rounded-sm bg-[#3D4DC8] text-white"
          onClick={() => enqueueSnackbar("Comming soon", { variant: "info" })}
        >
          <FaBoltLightning />
        </button>
      </td>
    </tr>
  );
}
