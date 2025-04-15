import React from 'react';
import { useState } from 'react';
import Products from './components/Products';
import productData from './data/ProductData';

function App(){
    const [products,setProducts] =useState(productData);

    const deleteProduct = (id) => {
        setProducts(products.filter((item) => item.id !== id));
    }

    return(
        <>
            <Products productData={products} deleteProduct={deleteProduct} />
        </>
    )
}
export default App;