import React from "react";
import Input from "./Input";
export default function Employee() {
  return (
    <div>
      <p className="font-bold text-[.9rem] mb-3 uppercase">
        Employees Information
      </p>
      <div className="flex flex-col gap-3 w-full">
        <Input label="previous workplace" />
        <Input label="current workplace" />
        <Input label="position" />
        <Input label="business address" />
      </div>
    </div>
  );
}
