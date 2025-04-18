import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../components/Context/ProductContext";

function TableFilePage() {
  const {
    form,
    setForm,
    errorMessage,
    setErrorMessage,
    product,
    setProduct,
  } = useContext(ProductContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.product || !form.description || !form.price) {
      setErrorMessage("You must Fill all of these Inputs")
    }else{
      setProduct([form, ...product]);
      setForm({ product: "", description: "", price: "" });
    }
  };

  return (
    <div className="p-8">
      <Link className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-semibold" to="/">Go back to home</Link>
      <div className="flex gap-[1rem] mb-[1rem]">
        <Input type="text" label="Product" name="product" value={form.title} onChange={handleChange} />
        <Input type="text" label="Description" name="description" value={form.description} onChange={handleChange} />
        <Input type="number" label="Price" name="price" value={form.price} onChange={handleChange} />
      </div>
      <p className="text-2xl text-red-600">{errorMessage}</p> 
      <Button onClick={handleSubmit}>Create new Product</Button>

      <table className="mt-8 w-full text-left border border-collapse" cellPadding="10">
        <thead>
          <tr>
            <th className="text-center">PRODUCT</th>
            <th className="text-center">DESCRIPTION</th>
            <th className="text-center">PRICE</th>
          </tr>
        </thead>
        <tbody>
          {product.map((productsObject, index) => (
            <tr key={index}>
              <td className="max-w-[200px]">{productsObject.title}</td>
              <td className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap text-center pr-[20px]">{productsObject.description}</td>
              <td className="max-w-[200px] text-center">{productsObject.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableFilePage;
