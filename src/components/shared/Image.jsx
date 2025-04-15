import React from "react";
import { Link } from "react-router";

function Image({products}) {
    return(
        <>
            <Link key={products.id} to={`/products/${products.id}`}>
                <img src={products.img} className="h-100 cursor-pointer mb-4 p-3 rounded-md object-cover group-hover:opacity-75"/>
            </Link>
        </>
    )
}
export default Image;