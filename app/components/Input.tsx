import React from "react";

export default function Input({
  type,
  label,
}: {
  type?: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-[1px] w-full">
      <label className="capitalize font-semibold">{label}</label>
      <input
        type={type || "text"}
        className="outline-none bg-[#F1F3FC] p-1 focus:shadow w-full"
      />
    </div>
  );
}
