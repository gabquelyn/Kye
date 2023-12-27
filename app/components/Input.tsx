"use client";
import React, { useState } from "react";
export default function Input({
  type,
  label,
  onChange,
  value,
  name,
}: {
  type?: string;
  label: string;
  value: string;
  name: string;
  onChange: inputFunction
}) {
  const [isTouched, setIsTouched] = useState(false);
  let valid = true;
  if (isTouched && !value) {
    valid = false;
  }
  return (
    <div className="flex flex-col gap-[1px] w-full">
      <label className="capitalize font-semibold">{label}</label>
      <input
        type={type || "text"}
        onChange={onChange}
        onBlur={() => setIsTouched(true)}
        className={`${
          valid ? "focus:shadow" : "shadow-error"
        } outline-none bg-[#F1F3FC] p-1 w-full`}
        value={value}
        name={name}
      />
    </div>
  );
}
