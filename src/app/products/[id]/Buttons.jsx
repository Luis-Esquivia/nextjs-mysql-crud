"use client"
import axios from "axios"
import { useRouter } from "next/navigation";

export default function Buttons({ productId }) {
    const route = useRouter();
    return (
        <div>
            <div className="flex gap-x-2 justify-end mt-2">
                <button onClick={async () => {
                    if (confirm('are you sure you want to delete this product?')) {
                        const res = await axios.delete('/api/products/' + productId);
                        console.log(res);
                        if (res.status == 200) {
                            route.push('/products');
                            route.refresh();
                        }
                    }
                }} className="text-white bg-red-500 hover:bg-red-700 py-2 px-3 rounded">Delete</button>
                <button onClick={() => {
                    route.push(`/products/edit/` + (productId));
                }} className="text-white bg-gray-500 hover:bg-gray-700 py-2 px-3 rounded">Edit</button>
            </div>
        </div>
    )
}
