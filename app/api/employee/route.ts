import { NextRequest, NextResponse } from "next/server";
import {
  closeMongoDBConnection,
  connectToMongoDB,
} from "@/app/utils/connectDb";
import { ObjectId } from "mongodb";
export async function PUT(req: NextRequest, res: NextResponse) {
  const db = await connectToMongoDB();
  const collection = db.collection("employee");
  const data = await req.json();
  const { employeeId, activate } = data;
  // get it by its Id
  const filter = { _id: new ObjectId(employeeId) };
  const update = {
    $set: {
      activate,
    },
  };

  try {
    const existingEmployee = await collection.findOneAndUpdate(filter, update, {
      returnDocument: "after",
    });
    console.log(existingEmployee);
    closeMongoDBConnection();
    return Response.json({ message: "Successfully updated" });
  } catch (error) {
    closeMongoDBConnection();
    return Response.json({ success: false, message: error }, { status: 400 });
  }
}

export async function PATCH(req: NextRequest, res: NextResponse) {
  // await dbConnect();
  const data = await req.json();
  const { employeeId } = data;
  const db = await connectToMongoDB();
  const collection = db.collection("employee");
  try {
    const filter = { _id: new ObjectId(employeeId) };
    const update = {
      $set: {
        ...data,
      },
    };
    const existingEmployee = await collection.findOneAndUpdate(filter, update, {
      returnDocument: "after",
    });
    console.log(existingEmployee);
    return Response.json({ message: `Employee edited ${employeeId}` });
  } catch (error) {
    return Response.json({ success: false, message: error }, { status: 400 });
  }
}

