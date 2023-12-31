import React from "react";

export default function Modal({
  children,
  closeModal,
}: {
  children: React.ReactNode;
  closeModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  return (
    <div className="modal">
      <div
        className="bg-[rgba(0,0,0,0.1)] fixed inset-0 cursor-pointer"
        id="backdrop"
        onClick={closeModal}
      ></div>
      <div
        className={`absolute bg-white top-[50%] -translate-y-[50%] rounded-[1.5rem] p-[1.5rem] w-[90%] md:w-[60%]`}
      >
        {children}
      </div>
    </div>
  );
}
