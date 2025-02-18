import DBConnect from "../../../utils/config/db"
import {NextResponse} from "next/server";
import UserModel from "@/utils/models/User";
export async function GET(){
    
    await DBConnect();
    try {
        const users=await UserModel.find({role:{$ne:'admin'}},{password:0});
        if(!users) {
            return NextResponse.json({success:false},{status:404},{Response :"users not found"})
        }
        return NextResponse.json({success:true,data:users,status:201 ,Response:"Fetch users succesfully"})
    } catch (error) {
        console.log(error);
        return NextResponse.json({success:false},{status:500},{Response:"failed to get users"})
    }

}

