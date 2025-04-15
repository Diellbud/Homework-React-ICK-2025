import React from "react";
import { Link } from "react-router";

function Content({products ,deleteProduct}) {
    let oldPrice = products.price/(1-parseInt(products.discount)/100);
    oldPrice = oldPrice.toFixed(2);
    return(
        <>
            <div className="font-medium">
                <Link key={products.id} to={`/products/${products.id}`}><h3 className="my-4">{products.title}</h3></Link>
                <h2 className=" text-2xl ">{products.price}€<span className="ml-4 leading-5 px-2 text-sm text-orange-500 bg-red-100">-{products.discount}%</span></h2>
                <h3 className=" line-through text-gray-500 ">{oldPrice}€</h3>
                <button type="button" onClick={()=>{deleteProduct(products.id)}} className="text-red-700 hover:text-white hover:bg-red-700 cursor-pointer border focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500">Delete</button>
            </div>
        </>
    )
}
export default Content;