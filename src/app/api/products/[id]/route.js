import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";
import cloudinary from "@/libs/cloudinary"
import processImage from "@/libs/processImage";
import { unlink } from 'fs/promises'

export const GET = async (request, { params }) => {
    try {
        const id = params.id

        const result = await conn.query('SELECT *FROM product WHERE id = ?', [id])

        if (result.length == 0) {
            return NextResponse.json({
                message: 'Producto no encontrado'
            }, {
                status: 400,
            });
        }
        return NextResponse.json(
            result[0]
        )
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        })
    }

}

export async function DELETE(request, { params }) {
    try {
        const id = params.id;

        const result = await conn.query('DELETE FROM product WHERE id = ?', [id]);

        if (result.affectedRows == 0) {
            return NextResponse.json({
                message: 'Producto no encontrado'
            }, {
                status: 400,
            });
        }

        return NextResponse.json({
            message: "Producto eliminado"
        }, {
            status: 200
        }
        );
    } catch (error) {
        return NextResponse.json({
            message: error.message,
        }, {
            status: 500
        });
    }

}

export async function PUT(request, { params }) {
    try {
        const id = params.id
        const data = await request.formData();
        const image = data.get("image");
        const updatedData = {
            name: data.get("name"),
            price: data.get("price"),
            description: data.get("description"),
        }

        if (!data.get("name")) {
            return NextResponse.json({
                message: "name is required",
            }, {
                status: 400,
            })
        };

        if (image) {
            const filePath = await processImage(image);
            const res = await cloudinary.uploader.upload(filePath);
            updatedData.image = res.secure_url

            if (res) {
                await unlink(filePath);
            }
        }

        const result = await conn.query('UPDATE product SET ? WHERE id = ?', [
            updatedData,
            params.id
        ]);

        if (result.affectedRows == 0) {
            return NextResponse.json({
                message: 'Producto no encontrado'
            }, {
                status: 400,
            });
        }

        const updateProduct = await conn.query("SELECT *FROM product WHERE id = ?", [id]);

        return NextResponse.json({ seActualizo: [data, ['De:', updateProduct[0]]] })

    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500,
        });
    }


}