"use client";
import React, { useState } from "react";
import Table from "./components/Table";
import { BiSearch, BiBell } from "react-icons/bi";
import Image from "next/image";
import AddEmployee from "./components/AddEmployee";
export default function Home() {
  const [modal, setModal] = useState(false);

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const id = e.currentTarget.id;
    if (id === "backdrop") setModal(false);
  };

  return (
    <div className="mx-[4rem] my-[2rem]">
      <div className="mb-[1rem] flex items-center justify-between">
        <div className="relative">
          <input
            type="search"
            className="bg-blue-50 outline-none border-none p-2 rounded-[2rem] pl-8"
            placeholder="Search"
          />
          <BiSearch className="absolute top-[50%] text-[1.2rem] left-2 -translate-y-[50%] text-[#A1A8B2]" />
        </div>
        <div className="flex items-center gap-[1rem] text-[1.4rem]">
          <div className="relative">
            <BiBell />
            <div className="absolute top-2 bg-red-500 h-2 w-2 rounded-[50%]"></div>
          </div>
          <div className="relative h-[3rem] w-[3rem] overflow-hidden rounded-[50%] border-[1px] border-blue-50">
            <Image
              src="/avatar.png"
              fill
              unoptimized
              alt="avatar"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <hr className="bg-[#A1A8B2] my-[1rem]" />
      <div className="flex justify-between items-center mb-[1rem]">
        <p className="font-bold">Employees</p>
        <button
          className="font-bold text-white py-2 px-4 rounded-[1.5rem] bg-[#3D4DC8]"
          onClick={() => setModal(true)}
        >
          + Add new user
        </button>
      </div>
      <Table />
      {modal && <AddEmployee closeModal={closeModal} />}
    </div>
  );
}
