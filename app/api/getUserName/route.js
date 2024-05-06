import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log(req);
    await connectMongoDB();
    const { email } = await req.json();
    const userLogin = await User.findOne({ email }).select("login");
    console.log("user: ", userLogin);
    return NextResponse.json({ userLogin });
  } catch (error) {
    console.log(error);
  }
}
