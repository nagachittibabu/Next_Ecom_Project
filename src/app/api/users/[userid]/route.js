import { auth } from "@/app/auth";
import UserModel from "@/utils/models/User";
import { NextResponse } from 'next/server';
import DBConnect from "@/utils/config/db";
import BookingModel from "@/utils/models/Booking";

export async function GET(request, { params }) {
    const session = await auth();
    let userid = session?.userid;
    await DBConnect();
    const { fetchedId } = params;
    try {
        if (!userid) {
            return NextResponse.json({ Response: "failed to fetch " }, { success: false }, { status: 404 });
        }
        const specificUser = await UserModel.findById(userid || fetchedId).populate('bookings');
        return NextResponse.json({ success: true, data: specificUser });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: 500 }, { message: "failed to get user" }, { success: false });
    }
}


