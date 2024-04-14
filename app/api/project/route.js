"use server";
import { NextResponse } from "next/server";

import dbConnect from "@/lib/dbConnect";

import { cookies } from "next/headers";
import Project from "@/models/project.model";
import { verifyUser } from "../auth/verifyUser";

export async function GET(req) {
  await dbConnect();
  const token = cookies().get('token')
  try {
    const user = await verifyUser(token.value);

    if (user) {
      const res = await Project.find();
      return NextResponse.json({data: res}, { status: 200 });
    } else {
      return NextResponse.json("Нэвтрэнэ үү.", { status: 201 });
    }
  } catch (error) {
    return NextResponse.json({ error: `${error}` });
  }
}
export async function POST(req) {
  await dbConnect();
  try {
    const data = await req.json();
    const cookie = cookies();
    const token = cookie.get("token");
    if (token.value != "" && token.value != null) {
      const user = await verifyUser(token.value);

      if (user) {
        await Project.create(data);
        return NextResponse.json({ message: "Амжилттай." }, { status: 201 });
      } else {
        return NextResponse.json({ message: "Нэвтрэнэ үү." }, { status: 201 });
      }
    } else {
      return NextResponse.json({ message: "Нэвтрэнэ үү." }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: `${error}` });
  }
}
