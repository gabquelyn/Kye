import React from "react";

export default function Modal({
  children,
  closeModal,
}: {
  children: React.ReactNode;
  closeModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  return (
    <div className="relative modal">
      <div
        className="bg-[rgba(0,0,0,0.1)] fixed inset-0 cursor-pointer"
        id="backdrop"
        onClick={closeModal}
      ></div>
      <div
        className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[40%] bg-white rounded-[1.5rem] p-[1.5rem] w-[90%] md:w-[60%]`}
      >
        {children}
      </div>
    </div>
  );
}
