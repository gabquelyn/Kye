import React from "react";
import { ObjectId } from "mongodb";
import QrCode from "@/app/components/QrCode";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import {
  closeMongoDBConnection,
  connectToMongoDB,
} from "@/app/utils/connectDb";
type Params = {
  params: {
    employeeId: string;
  };
};
export default async function EmployeeDetails({
  params: { employeeId },
}: Params) {
  console.log(employeeId);
  const session = await getServerSession();
  const db = await connectToMongoDB();
  const collection = db.collection("employee");
  const employeeDetails = await collection.findOne({
    _id: new ObjectId(employeeId),
  });

  if (!employeeDetails) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <Image
          src="/404.png"
          alt="not found"
          height={300}
          width={349}
          unoptimized
        />
      </div>
    );
  }
  const {
    avatar,
    firstname,
    lastname,
    email,
    phone,
    gender,
    dob,
    previous,
    current,
    businessAddress,
    position,
    soo,
    city,
    state,
    zipcode,
  } = employeeDetails;
  return (
    <div className="m-[3rem] flex flex-col gap-3 items-center justify-center">
      <div className="relative h-[9rem] w-[9rem] rounded-[50%] overflow-hidden">
        <Image
          src={avatar || "/holder.png"}
          alt="profile pics"
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-[#F1F3FC] p-6 rounded-md w-[95%] md:w-[85%]">
        <p className="font-bold text-[.9rem] mb-3 uppercase">
          Personal information
        </p>
        <div className="board">
          <p>
            First name: <span>{firstname}</span>
          </p>
          <p>
            Last name: <span>{lastname}</span>
          </p>
          <p>
            E-mail: <span>{email}</span>
          </p>
          <p>
            Phone number: <span>{phone}</span>
          </p>
          <p>
            Gender: <span>{gender}</span>
          </p>
          <p>
            Date of birth: <span>{dob}</span>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F3FC] p-4 rounded-md w-[95%] md:w-[85%]">
        <p className="font-bold text-[.9rem] mb-3 uppercase">
          Employee&apos;s information
        </p>
        <div className="board">
          <p>
            Previous workplace: <span>{previous}</span>
          </p>
          <p>
            Current workplace: <span>{current}</span>
          </p>
          <p>
            Business address: <span>{businessAddress}</span>
          </p>
          <p>
            Position: <span>{position}</span>
          </p>
        </div>
      </div>

      <div className="bg-[#F1F3FC] p-6 rounded-md w-[95%] md:w-[85%]">
        <p className="font-bold text-[.9rem] mb-3 uppercase">
          Residential Information
        </p>
        <div className="board">
          <p>
            State of orign: <span>{soo}</span>
          </p>
          <p>
            City: <span>{city}</span>
          </p>
          <p>
            State: <span>{state}</span>
          </p>
          <p>
            Zip code: <span>{zipcode}</span>
          </p>
        </div>
      </div>
      <div>{session && <QrCode value={employeeId} />}</div>
    </div>
  );
}

export async function generateStaticParams() {
  const db = await connectToMongoDB();
  const collection = db.collection("employee");
  const allEmployees = await collection.find({}).toArray();
  return allEmployees.map((employee) => ({
    employeeId: employee._id.toString(),
  }));
}
