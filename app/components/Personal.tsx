import React from "react";
import Input from "./Input";
import Select from "./Select";
export default function Personal({
  onChange,
  values,
  onSelect
}: {
  onChange: inputFunction;
  values: EmployeeDetails;
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  const { firstname, lastname, phone, dob, email } = values;
  return (
    <div>
      <p className="font-bold text-[.9rem] mb-3 uppercase">
        Personal information
      </p>
      <div className="flex flex-col gap-3">
      <Input
            label="E-mail"
            name="email"
            onChange={onChange}
            value={email}
          />
        <div className="flex gap-3">
          <Input
            label="first name"
            name="firstname"
            onChange={onChange}
            value={firstname}
          />
          <Input
            label="last name"
            name="lastname"
            onChange={onChange}
            value={lastname}
          />
        </div>
        <div className="flex gap-3 items-end">
          <Input
            label="phone number"
            type="tel"
            onChange={onChange}
            name="phone"
            value={phone}
          />
          <Select label="Gender" options={["Male", "Female", "Others"]} onChange={onSelect}/>
        </div>
        <Input
          label="date of birth (optional)"
          type="date"
          name="dob"
          onChange={onChange}
          value={dob}
        />
      </div>
    </div>
  );
}
