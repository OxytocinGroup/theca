import { NextResponse } from "next/server";

export async function POST(req) {
  console.log(req);
  try {
    const { email, password } = await req.json();
    console.log(email, password);

    return NextResponse.json({ message: "user registred." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
