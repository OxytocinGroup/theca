import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { username } = await req.json();
    const userLogin = await User.findOne({ username }).select("_id");
    console.log("user: ", userLogin);
    return NextResponse.json({ userLogin });
  } catch (error) {
    console.log(error);
  }
}
