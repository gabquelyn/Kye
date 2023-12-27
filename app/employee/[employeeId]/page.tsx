import React from "react";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Personal from "@/app/components/Personal";
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
  const db = await connectToMongoDB();
  const collection = db.collection("employee");
  const employeeDetails = await collection.findOne<MongoEmployeeDetails>({
    _id: new ObjectId(employeeId),
  });
  await closeMongoDBConnection();
  if (!employeeDetails) return <p>Cannot find the Employee</p>;
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
        <Image src={avatar || "/holder.png"} alt="profile pics" fill className="object-cover" />
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
          Employee's information
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
    </div>
  );
}

export async function generateStaticParams() {
  const db = await connectToMongoDB();
  const collection = db.collection("employee");
  const allEmployees = await collection.find({}).toArray();
  return allEmployees.map((employee) => ({
    userId: employee._id.toString(),
  }));
}
