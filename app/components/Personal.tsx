import React from "react";
import Input from "./Input";
import Select from "./Select";
export default function Personal() {
  return (
    <div>
      <p className="font-bold text-[.9rem] mb-3 uppercase">Personal information</p>
      <div className="flex flex-col gap-3">
        <Select label="Title" options={["Mr", "Mrs", "Miss"]} />
        <div className="flex gap-3">
          <Input label="first name" />
          <Input label="last name" />
        </div>
        <div className = "flex gap-3 items-end">
          <Input label="phone number" type="tel" />
          <Select label="Gender" options={["Male", "Female", "Others"]} />
        </div>
        <Input label="date of birth (optional)" type="date"/>
      </div>
    </div>
  );
}
