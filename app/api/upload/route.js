import { google } from "googleapis";
import { NextResponse } from "next/server";

import { Readable } from "node:stream";

export async function POST(request) {
  const formData = await request.formData();
  const file = formData.getAll("file");
  const filename = formData.getAll("fileName");

  const auth = new google.auth.GoogleAuth({
    scopes: "https://www.googleapis.com/auth/drive",
    projectId: process.env.GDRIVE_PROJECTID,
    credentials: {
      client_id: process.env.GDRIVE_CLIENTID,
      client_email: process.env.GDRIVE_CLIENTEMAIL,
      private_key: process.env.GDRIVE_PRIVTKEY.replace(/\\n/gm, "\n"),
    },
  });

  const uploadToGooglDrive = async (fileBuffer) => {
    const fileMetadata = {
      name: filename,
      parents: ["1Wl37cdhwm-TtWc5gA6PCFbagSxmhnYOH"],
    };

    const driveService = google.drive({ version: "v3", auth: auth });

    const res = await driveService.files.create({
      requestBody: fileMetadata,
      media: {
        // mimeType : "application/pdf" ,
        body: Readable.from(fileBuffer),
      },
      fields: "id",
    });
    return res.data.id;
  };
  try {
    const r = [];
    file.map(async (f) => {
      const fileBuffer = f.stream();

      const res = await uploadToGooglDrive(fileBuffer);

      r.push(res);
    });
    return NextResponse.json({
      id: r,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
