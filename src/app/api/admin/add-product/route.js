import { NextResponse } from "next/server";
import DBConnect from "../../../../utils/config/db"
import path from "path";
import { writeFile } from "fs/promises";
import ProductModel from "../../../../utils/models/Product"
export  async function GET(){
    await DBConnect();
    const value=await ProductModel.find({})
    return NextResponse.json({msg:value})
}

export  async function POST(request){
    await DBConnect();

    const data =await request.formData()

    const title =data.get('title')
    const description =data.get('description')
    const price =data.get('price');
    const image =data.get('image');

    const bufferData = await image.arrayBuffer();
    const buffer= Buffer.from(bufferData);
    const imagepath=path.join(process.cwd(), 'public','uploads',image.name)
    try {
        await writeFile(imagepath,buffer);
        const newProduct = new ProductModel({
            title:title,
            price:price,
            description:description,
            image:`/uploads/${image.name}`
        })
        await newProduct.save();
        return NextResponse.json({response:"successfully posted",success:true},{status:201})
    } catch (error) {
        console.log("invalid error",error);

        return NextResponse.json({success:false},{status:500})
    }
}