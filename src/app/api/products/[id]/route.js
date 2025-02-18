

import ProductModel from "../../../utils/models/Product";
import { NextResponse } from "../../../../../node_modules/next/server";
import DBConnect from "../../../../utils/config/db";

export async function GET(request,{params}){
    await DBConnect();
    const {id} = params;
    console.log("fetched ID",id);
    try {
        if(!id){
            return NextResponse.json({Response:"failed to fetch "},{success:false},{status:404})
        }
         const specificUser = await ProductModel.findById(id);
        return NextResponse.json({success:true,data:specificUser})
        
    } catch (error) {
       console.log(error); 
       return NextResponse.json({status:500},{message:"failed to get user"},{success:false})
    }
}