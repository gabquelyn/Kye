"use client";
import React from "react";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { useRouter } from "next/navigation";
export default function TableRow({
  dataurl,
  firstname,
  lastname,
  position,
  email,
  phone,
  id
}: {
  dataurl: string;
  firstname: string;
  lastname: string;
  position: string;
  email: string;
  phone: string;
  id: string
}) {
  const router = useRouter();
  return (
    <tr onClick={() => router.push(`/employee/${id}`)}>
      <td>
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
      <td>{position}</td>
      <td className="text-[#3D4DC8]">{email}</td>
      <td>{phone}</td>
      <td>
        <button>
          <BiEdit />
        </button>
        <button className="ml-3">
          <RiDeleteBinLine />
        </button>
      </td>
    </tr>
  );
}
