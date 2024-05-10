import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { user } = await req.json();
    await connectMongoDB();
    const bookmarks = await User.findOne({ username: user }).select(
      "bookmarks"
    );

    return NextResponse.json(
      bookmarks,
      { message: "Bookmarks read" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occurred while reading bookmarks." },
      { status: 500 }
    );
  }
}
