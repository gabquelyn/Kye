"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";
import Personal from "./Personal";
import Employee from "./Employee";
import Residential from "./Residential";

export default function AddEmployee({
  closeModal,
}: {
  closeModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  let content;
  const [value, setValue] = useState(0);
  if (value === 0) {
    content = <Personal />;
  } else if (value === 1) {
    content = <Employee />;
  } else {
    content = <Residential />;
  }

  return (
    <Modal closeModal={closeModal}>
      <div className="grid grid-cols-[30%_65%] gap-[1rem]">
        <div>
          <div className="relative h-[6rem] w-[6rem] overflow-hidden rounded-[50%]">
            <Image
              src="/holder.png"
              fill
              unoptimized
              alt="profile pictire"
              className="object-cover"
            />
          </div>

          {/* different information details */}
          <div className="information my-3">
            <p
              className={`${value === 0 && "highlight"}`}
              onClick={() => setValue(0)}
            >
              Personal
              <br />
              information
            </p>
            <p
              className={`${value === 1 && "highlight"}`}
              onClick={() => setValue(1)}
            >
              Employee
              <br />
              information
            </p>
            <p
              className={`${value === 2 && "highlight"}`}
              onClick={() => setValue(2)}
            >
              Residential
              <br />
              information
            </p>
          </div>
        </div>

        <div>
          {content}
          <div className="flex justify-end">
            <button className="font-bold mt-3 text-white py-2 px-6 rounded-[1.5rem] bg-[#3D4DC8]">
              Create
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
