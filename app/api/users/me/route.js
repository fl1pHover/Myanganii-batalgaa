import dbConnect from "@/app/lib/dbConnect";
import { getDataFromToken } from "@/config/getDataFromToken";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request){
    try {
        await dbConnect()
        // Extract user ID from the authentication token
        const payload = await getDataFromToken(request);

        // Find the user in the database based on the user ID
        const user = await User.findOne({registerNumber: payload}).
        select("-password");
        return NextResponse.json({
            message: "Олдсонгүй",
            data: user
        })
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400})
        
    }
}