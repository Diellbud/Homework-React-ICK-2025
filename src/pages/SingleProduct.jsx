import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';

function SingleProduct() {
    const { id } = useParams();
    const {product} = useContext(ProductContext)
    const productItem = product.find((item) => item.id === parseInt(id));

    if (!productItem) {
        return <h1 className='text-5xl text-center m-50'>Product not found</h1>;
    }

    return (
        <>
            {productData.map((item) =>(
                item.id === parseInt(id) && (
                    <div className='p-15 pb-0'>
                        <div className='mt-1 grid grid-cols-1 font-sm gap-[0.625rem] md:grid-cols-2 md:gap-x-0.75 ' key={item.id}>
                            <div>
                                <img src={item.img} alt="Product" className='w-200 h-full' />
                            </div>
                            <div className='text-center p-2 flex flex-col justify-center items-center'>
                                <h2 className='text-5xl mb-10'>{item.title}</h2>
                                <p className='text-5xl mt-10'>Price:{item.price}€</p>
                            </div>
                        </div>
                        <div className='mt-5 font-medium'>
                            <h1 className='text-3xl mb-5 '>Description</h1>
                            <p className='text-xl '>{item.description}</p>
                        </div>
                    </div>
                )
            ))}
        </>
    )
}

export default SingleProduct;
