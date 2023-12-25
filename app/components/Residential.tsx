import React from "react";
import Input from "./Input";
export default function Residential() {
  return (
    <div>
      <p className="font-bold text-[.9rem] mb-3 uppercase">
        Residential Information
      </p>
      <div className="flex flex-col gap-3 w-full">
        <Input label="state of origin" />
        <Input label="address" type="address" />
        <div className="flex gap-3">
          <Input label="city" />
          <Input label="state" />
        </div>
        <Input label="zip/postal code" />
      </div>
    </div>
  );
}
