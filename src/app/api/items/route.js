import ItemsModel from "../../../utils/models/Items"
import { NextResponse } from "next/server";
import DBConnect from "../../../utils/config/db";


export async function GET(){
    await DBConnect();
    try {
        const products = await ItemsModel.find({})
        console.log("products",products);
        if(!products) {
            return NextResponse.json({success:false},{status:404},{Response :"products not found"})
        }
        return NextResponse.json({success:true,products},{status:201},{Response:"Fetch products succesfully"})
    } catch (error) {
        console.log(error);
        return NextResponse.json({success:false},{status:500},{Response:"failed to get products"})
    }
}