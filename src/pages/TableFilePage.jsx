
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import {Link} from "react-router-dom";
function TableFilePage() {
  const [form, setForm] = useState({ product: "", description: "", price: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const [products, setProducts] = useState([
    {
      product: "Monitor AOC 25G3ZM/BK",
      description: "24.5\" Full HD, 240Hz Gaming Monitor",
      price: "179.50 €"
    },
    {
      product: "Logitech MX Master 3",
      description: "Advanced Wireless Mouse with Ergonomic Design",
      price: "89.00 €"
    }
  ]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.product || !form.description || !form.price) {
      setErrorMessage("You must Fill all of these Inputs")
    }else{
      setProducts([form, ...products]);
      setForm({ product: "", description: "", price: "" });
    }
  };

  return (
    <div className="p-8">
      <Link className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-semibold" to="/">Go back to home</Link>
      <div className="flex gap-[1rem] mb-[1rem]">
        <Input type="text" label="Product" name="product" value={form.product} onChange={handleChange} />
        <Input type="text" label="Description" name="description" value={form.description} onChange={handleChange} />
        <Input type="number" label="Price" name="price" value={form.price} onChange={handleChange} />
      </div>
      <p className="text-2xl text-red-600">{errorMessage}</p> 
      <Button onClick={handleSubmit}>Create new Product</Button>

      <table className="mt-8 w-full text-left border border-collapse" cellPadding="10">
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {products.map((productObject, index) => (
            <tr key={index}>
              <td>{productObject.product}</td>
              <td>{productObject.description}</td>
              <td>{productObject.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableFilePage;
