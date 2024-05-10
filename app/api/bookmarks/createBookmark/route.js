import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { user, title, url } = await req.json();
    console.log(user, title, url);
    await connectMongoDB();
    await User.findOneAndUpdate(
      { username: user },
      { $push: { bookmarks: { title, url } } }
    );

    return NextResponse.json({ message: "Bookmark created" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occurred while creating the bookmark." },
      { status: 500 }
    );
  }
}
