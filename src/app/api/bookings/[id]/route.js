import { auth } from "@/app/auth";
import DBConnect from "@/utils/config/db";
import { NextResponse } from "next/server";
import BookingModel from "../../../../utils/models/Booking"

export async function DELETE(req,{ params }){
    const session =await auth()
    const userid=session?.userid;
    if(!userid){
        return NextResponse.json({message:"invald userid"},{success:false})
    }
    const  bookingId  = params.id;
    await DBConnect();
    try{
        if (!bookingId) {
            return NextResponse.json({ message: "Booking ID is required" }, { success: false, status: 400 });
        }

        const deletedBooking = await BookingModel.findByIdAndDelete(bookingId);

        if (!deletedBooking) {
            return NextResponse.json({ message: "Booking not found" }, { success: false, status: 404 });
        }
        return NextResponse.json({ message: "Booking deleted successfully" ,success: true, status: 200 });
    }
    catch{
        console.log("error in bookingid section");
    }
   
}