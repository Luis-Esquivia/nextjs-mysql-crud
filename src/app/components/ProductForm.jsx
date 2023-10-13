"use client"
import { useRef, useState, useEffect } from "react"
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import styled from "styled-components";

export default function ProductForm() {

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: ""
  });

  const [file, setFile] = useState(null);

  const form = useRef(null);
  const router = useRouter();
  const params = useParams();
  // console.log(params)

  const handleChange = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  };

  useEffect(() => {
    if (params.id) {
      axios.get('/api/products/' + params.id)
        .then(res => {
          setProduct({
            name: res.data.name,
            price: res.data.price,
            description: res.data.description
          })
        })
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('description', product.description);
    // console.log(formData);
    if (file) {
      formData.append('image', file);
    }
    if (!params.id) {
      const res = await axios.post('/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // console.log(res)
    } else {
      const res = await axios.put('/api/products/' + params.id, formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res);
    }
    form.current.reset();
    router.refresh();
    router.push('/products');
  };

  /*ESTILOS CON styled-components*/
  let colorH1 = "rgb(8 145 178)"

  const MyH1 = styled.h1`
    color: ${colorH1};
    text-align: center;
    padding-bottom: 6px;
    font-weight: bold;
    font-size: 20px;
  `;

  /******************************/
  return (
    <div className="">
      <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 mr-6"
        onSubmit={handleSubmit} ref={form}>
          <MyH1>New Card</MyH1>
        <label htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>
        <input type="text" name="name" placeholder="name" onChange={handleChange} value={product.name}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black" autoFocus />

        <label htmlFor="price"
          className="block text-gray-700 text-sm font-bold mb-2">Product Price:</label>
        <input type="text" name="price" placeholder="00.00" onChange={handleChange} value={product.price}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black" />

        <label htmlFor="description"
          className="block text-gray-700 text-sm font-bold mb-2">Product Description:</label>
        <textarea rows={3} name="description" placeholder="description" onChange={handleChange} value={product.description}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black" />

        <label htmlFor="productImage"
          className="block text-gray-700 text-sm font-bold mb-2">Product Image:</label>
        <input type="file" className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
          onChange={(e) => {
            setFile(e.target.files[0])
          }} />
        {file && (
          <img className="h-40  object-contain mx-auto pt-3"
            src={URL.createObjectURL(file)} alt="" />
        )}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
          {params.id ? "Update Product" : "Create Product"}
        </button>
      </form>

    </div>
  )
}
