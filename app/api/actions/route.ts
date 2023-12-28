import { NextRequest, NextResponse } from "next/server";
import {
  closeMongoDBConnection,
  connectToMongoDB,
} from "@/app/utils/connectDb";
export async function POST(req: NextRequest, res: NextResponse) {
  const db = await connectToMongoDB();
  const collection = db.collection("employee");
  const data: EmployeeDetails = await req.json();
  const {
    avatar,
    email,
    firstname,
    lastname,
    phone,
    dob,
    previous,
    current,
    position,
    businessAddress,
    soo,
    address,
    city,
    state,
    zipcode,
    gender
  } = data;
  try {
    const newEmployee = await collection.insertOne({
      avatar,
      email,
      gender,
      firstname,
      lastname,
      phone,
      dob,
      previous,
      current,
      position,
      businessAddress,
      soo,
      address,
      city,
      state,
      zipcode,
      createdAt: new Date()
    });
    return Response.json({
      message: `Employee created ${newEmployee.insertedId}`,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, message: error }, { status: 400 });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
    const db = await connectToMongoDB();
    const collection = db.collection("employee");
  try {
    const allEmployees = await collection.find({}).toArray()
    return Response.json([...allEmployees]);
  } catch (error) {
    return Response.json({ success: false, message: error }, { status: 400 });
  }
}
