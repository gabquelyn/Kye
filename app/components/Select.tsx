import React from "react";

export default function Select({
  options,
  label,
  onChange,
}: {
  options: string[];
  label: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-[1px] w-full">
      <label className="font-semibold">{label}</label>
      <select
        className="focus:shadow outline-none bg-[#F1F3FC] p-2 w-full"
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
