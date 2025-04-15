import React from "react";

import Image from "./Image";
import Content from "./Content";

function Card({products ,deleteProduct}) {
    
    return(
        <>
            <div className="p-4 h-full">
                <Image products={products}/>
                <Content products={products} deleteProduct={deleteProduct} />
            </div>
        </>
    )
}
export default Card;