import React from "react";
import { useState } from "react";

import Card from "./shared/Card";


function Products({productData ,deleteProduct}) {

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        const filtered = productData.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredItems(filtered);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Search query:", searchQuery);
        const filtered = productData.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredItems(filtered);
      };

    return(
        <>
            <div className="mt-10 mb-0">
                <form className="search-bar flex p-3 justify-center items-center " onSubmit={handleSubmit}>
                    <input className="p-3 border text-xl w-110"
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                </form>
            </div>
            <div className="mx-auto max-w-2xl sm:py-20 lg:max-w-7xl">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {searchQuery==="" ? (productData.map((item) => (
                        <div key={item.id} className="mt-4 flex justify-between hover:shadow-2xl shadow-md rounded-md ring ring-gray-200">
                            <Card products={item} deleteProduct={deleteProduct}/>
                        </div>
                    ))) : filteredItems.length > 0 ? (filteredItems.map((item) => (
                        <div key={item.id} className="mt-4 flex justify-between hover:shadow-2xl shadow-md rounded-md ring ring-gray-200">
                            <Card products={item} deleteProduct={deleteProduct}/>
                        </div>
                    ))): (
                        <><p></p><h1 className="text-4xl text-center">No matching items found!</h1><p></p></>
                    )}
                </div>
            </div>
        </>
    )
}
export default Products;