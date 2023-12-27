import React from "react";
import Input from "./Input";
export default function Residential({
  onChange,
  values,
}: {
  onChange: inputFunction;
  values: EmployeeDetails;
}) {
  const { soo, address, city, state, zipcode } = values;
  return (
    <div>
      <p className="font-bold text-[.9rem] mb-3 uppercase">
        Residential Information
      </p>
      <div className="flex flex-col gap-3 w-full">
        <Input
          label="state of origin"
          name="soo"
          onChange={onChange}
          value={soo}
        />
        <Input
          label="address"
          type="address"
          name="address"
          onChange={onChange}
          value={address}
        />
        <div className="flex gap-3">
          <Input label="city" name="city" onChange={onChange} value={city} />
          <Input label="state" name="state" onChange={onChange} value={state} />
        </div>
        <Input
          label="zip/postal code"
          name="zipcode"
          onChange={onChange}
          value={zipcode}
        />
      </div>
    </div>
  );
}
