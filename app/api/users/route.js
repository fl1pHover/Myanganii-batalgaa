"use server";
import dbConnect from "@/app/lib/dbConnect";
import User, { UserModel } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await dbConnect();
  try {
    const users = await User.find();

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `${error}` });
  }
}
export async function POST(request: NextRequest) {
  await dbConnect();
  try {
    const dto = await request.json();
    const user = await User.findOne({
      registerNumber: dto.registerNumber,
    });
    if (user) {
      return NextResponse.json(false, { status: 201 });
    } else {
      await User.create(dto);
      return NextResponse.json(true, { status: 201 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: `${error}` });
  }
}
