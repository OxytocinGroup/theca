import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const userEmail = await User.findOne({ email }).select("_id");
    console.log("user: ", userEmail);
    return NextResponse.json({ userEmail });
  } catch (error) {
    console.log(error);
  }
}
