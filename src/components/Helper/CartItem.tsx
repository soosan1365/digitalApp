import React from 'react'
import AddToCart from './AddToCart'


const CartItem = () => {
  return (
    <div className=" mx-auto w-[95%] grid grid-cols-9 mt-5   justify-center ">
        {/* left */}
        <div
          className="col-span-2 bg-green-100   flex items-center
    w-full justify-center rounded-3xl"
        >
          {/* <Image src={data.imgSrc} width={300} height={300} alt={data.name}/> */}
        </div>
        {/* right */}
        <div
          className="col-span-6  bg-blue-50 py-8  flex flex-col px-4 justify-center  gap-5 rounded-4xl 
"
        >
          <h1 className="font-semibold">name:</h1>
          <p className="text-sm lg:text-base ">
            number:<span>3</span>
          </p>

          <div className="flex flex-col sm:flex-row  items-center md:gap-5 justify-center gap-2">
            <p className="text-sm">
              price: <span></span>
            </p>
            {/* <AddToCart/> */}
          
          </div>
        </div>
      </div>
  )
}

export default CartItem
