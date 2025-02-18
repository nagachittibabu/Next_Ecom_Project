"use client"
import { useState } from "react"

const AddProduct = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const onSubmit = async (e) => {
        e.preventDefault();

        console.log({ title: title, description: description, price: price, image: image });
        const data = new FormData()
        data.append('title', title);
        data.append('description', description);
        data.append('price', price);
        data.append('image', image);
        try {
            const response = await fetch('http://localhost:3000/api/admin/add-product', {
                method: 'POST',
                body: data
            })
            const result = await response.json();
            console.log(result);
            
            if (result.success) {
                alert("record added successfully")
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="w-full h-full bg-red-300 flex flex-col justify-center items-center">
            <h1>Add Product</h1>
            <div>
                <div>
                    <label>Title</label>
                    <div><input type="text" onChange={(e) => setTitle(e.target.value)} /></div>
                </div>
                <div>
                    <label>Description</label>
                    <div><textarea typeof="text" rows={3} cols={25} onChange={(e) => setDescription(e.target.value)} /></div>
                </div>
                <div>
                    <label>Price</label>
                    <div><input type="text" onChange={(e) => setPrice(e.target.value)} /></div>
                </div>
                <div><input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} /></div>
                <button onClick={(e) => onSubmit(e)}>Submit</button>
            </div>
        </div>
    )
}
export default AddProduct