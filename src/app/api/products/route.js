import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";
import { unlink } from 'fs/promises'
import cloudinary  from "@/libs/cloudinary"
import processImage from "@/libs/processImage";

export async function GET() {
    try {
        const results = await conn.query('select *from product')

        return NextResponse.json(results);

    } catch (error) {
        return NextResponse.json({
            message: error.message
        },
        {
            status: 500,
        });
    }

}

export async function POST(request) {
    try {
        const data = await request.formData();
        // console.log(data.get('image'))
        // console.log(data.get('name'))
        // console.log(data.get('price'))
        const image = data.get('image');
        // console.log(image)
        
        if(!data.get("image")){
            return NextResponse.json({
                message: "Imagen es requerida",
            },{
                status: 400
            })
        }

        const filePath = await processImage(image);

        const res = await cloudinary.uploader.upload(filePath);
        console.log(res);

        if(res){
            await unlink(filePath);
        }

        const result = await conn.query('INSERT INTO product SET ?', {
            name: data.get('name'),
            description: data.get('description'),
            price: data.get('price'),
            image: res.secure_url
        });

        return NextResponse.json({
            name: data.get('name'),
            description: data.get('description'),
            price: data.get('price'),
            id: result.insertId
        });
    } catch (error) {
        console.log(error) 
        return NextResponse.json({ 
            message: error.message
         },
         {
            status: 500,
         });
    }

}