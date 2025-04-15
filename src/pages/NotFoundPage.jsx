import React from 'react'
import {Link} from "react-router-dom";

function NotFoundPage(){
  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen text-5xl'>
        <h1 className='text-red-600'>404:Page Not Found!</h1>
        <Link to="/">Go to Home</Link>
      </div>
    </>
  )
}
export default NotFoundPage;
