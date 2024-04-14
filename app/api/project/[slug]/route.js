"use server";
import { NextResponse } from "next/server";

import dbConnect from "@/lib/dbConnect";

import { cookies } from "next/headers";
import Project from "@/models/project.model";
import { verifyUser } from "../../auth/verifyUser";

export async function GET(req, { params }) {
  await dbConnect();
  try {


    const res = await Project.findById(params.slug);

    return NextResponse.json({data: res}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `${error}` });
  }
}

export async function PUT(req, {params}) {
  await dbConnect();
  try {
    const data = await req.json();
    const cookie = cookies();
    console.log(params);
    const token = cookie.get("token");

    if (token.value != "" && token.value != null) {
      const user = await verifyUser(token.value);

      if (user) {
        // await Project.findByIdAndUpdate(data._id, {
        //   title: data.title,
        //   description: data.description,
        //   type: data.type,
        //   date: data.date,
        //   image: data.image,
        // });
        return NextResponse.json("Амжилттай.", { status: 201 });
      } else {
        return NextResponse.json("Нэвтрэнэ үү.", { status: 201 });
      }
    } else {
      return NextResponse.json("Нэвтрэнэ үү.", { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: `${error}` });
  }
}
