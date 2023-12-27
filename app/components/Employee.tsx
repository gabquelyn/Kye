import React from "react";
import Input from "./Input";
export default function Employee({
  onChange,
  values,
}: {
  onChange: inputFunction;
  values: EmployeeDetails;
}) {
  const { previous, current, businessAddress, position } = values;
  return (
    <div>
      <p className="font-bold text-[.9rem] mb-3 uppercase">
        Employees Information
      </p>
      <div className="flex flex-col gap-3 w-full">
        <Input
          label="previous workplace"
          onChange={onChange}
          value={previous}
          name="previous"
        />
        <Input
          label="current workplace"
          onChange={onChange}
          value={current}
          name="current"
        />
        <Input
          label="business address"
          onChange={onChange}
          value={businessAddress}
          name="businessAddress"
        />

        <Input
          label="position"
          onChange={onChange}
          value={position}
          name="position"
        />
      </div>
    </div>
  );
}
