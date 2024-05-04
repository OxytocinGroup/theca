import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDB();
    await User.create({ email, password });

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    {
      Schema;
    }
    return NextResponse.json({ error: "Invalid request" }, { status: 500 });
  }
}
