"use client";
import React, { useState, useRef } from "react";
import Modal from "./Modal";
import Image from "next/image";
import Personal from "./Personal";
import Employee from "./Employee";
import Residential from "./Residential";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { CircleSpinner } from "react-spinners-kit";
import { enqueueSnackbar } from "notistack";
export default function AddEmployee({
  closeModal,
}: {
  closeModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  let content;
  const [details, setDetails] = useState({
    email: "",
    avatar: "",
    title: "",
    firstname: "",
    lastname: "",
    phone: "",
    dob: "",
    previous: "",
    current: "",
    position: "",
    businessAddress: "",
    soo: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    gender: "Male",
  });
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const genericChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };
  const [value, setValue] = useState(0);
  if (value === 0) {
    content = (
      <Personal
        onChange={genericChangeHanlder}
        values={details}
        onSelect={(e) =>
          setDetails((prev) => ({ ...prev, gender: e.target.value }))
        }
      />
    );
  } else if (value === 1) {
    content = <Employee onChange={genericChangeHanlder} values={details} />;
  } else {
    content = <Residential onChange={genericChangeHanlder} values={details} />;
  }

  const imageReader = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const content = e.target?.result;
      setDetails((prev) => ({ ...prev, avatar: content as string }));
    };
    reader.readAsDataURL(file);
  };

  async function createEmployee() {
    for (const keys of Object.keys(details)) {
      if (!details[keys as unionAl])
        return enqueueSnackbar(`Fill all details and add a profile picture`);
    }
    try {
      setIsLoading(true);
      await fetch("/api/actions", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });
      setDetails({
        email: "",
        avatar: "",
        title: "",
        firstname: "",
        lastname: "",
        phone: "",
        dob: "",
        previous: "",
        current: "",
        position: "",
        businessAddress: "",
        soo: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        gender: "male",
      });
      enqueueSnackbar("New Employee created successfully", { variant: "info" });
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }

  return (
    <Modal closeModal={closeModal}>
      <div className="grid md:grid-cols-[30%_65%] gap-[1rem]">
        <div>
          <div className="relative w-fit">
            <div className="relative h-[6rem] w-[6rem] overflow-hidden rounded-[50%]">
              <Image
                src={details.avatar || "/holder.png"}
                fill
                unoptimized
                alt="profile pictire"
                className="object-cover"
              />
            </div>
            <div
              className="absolute left-[50%] flex items-center justify-center text-white -translate-x-[50%] bottom-0 bg-[#3D4DC8] h-5 w-5 rounded-[50%] font-bold cursor-pointer"
              onClick={() => imageRef.current?.click()}
            >
              +
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={imageRef}
                onChange={imageReader}
              />
            </div>
          </div>

          {/* different information details */}
          <div className="information my-3">
            <p
              className={`${value === 0 && "highlight"}`}
              onClick={() => setValue(0)}
            >
              Personal
              <br />
              information
            </p>
            <p
              className={`${value === 1 && "highlight"}`}
              onClick={() => setValue(1)}
            >
              Employee
              <br />
              information
            </p>
            <p
              className={`${value === 2 && "highlight"}`}
              onClick={() => setValue(2)}
            >
              Residential
              <br />
              information
            </p>
          </div>
        </div>

        <div>
          {content}
          <div className="flex flex-col">
            <div className="flex justify-between text-white font-bold mt-3">
              <button
                className={`p-2 bg-[#3D4DC8] rounded-[50%] ${
                  value === 0 && "invisible"
                }`}
                onClick={() => setValue((prev) => prev - 1)}
              >
                <MdNavigateBefore />
              </button>

              <button
                className={`p-2 bg-[#3D4DC8] rounded-[50%] ${
                  value >= 2 && "invisible"
                }`}
                onClick={() => setValue((prev) => prev + 1)}
              >
                <MdNavigateNext />
              </button>
            </div>

            {value == 2 && (
              <button
                className="font-bold mt-3 text-white py-2 px-6 rounded-[1.5rem] w-full bg-[#3D4DC8] modal flex items-center justify-center disabled:cursor-wait"
                disabled={isLoading}
                onClick={createEmployee}
              >
                {isLoading ? <CircleSpinner size={15} /> : <p>Create</p>}
              </button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}
