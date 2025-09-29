import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {PRODUCT} from "./StoreCard"
import AddToCart from './AddToCart'
import axios from 'axios'
 interface cartItemProps{
  id:number,
  qty:number
 }

const CartItem = ({id,qty}:cartItemProps) => {

  const [data,setData]=useState({} as PRODUCT)

  useEffect(()=>{
    axios(`http://localhost:3004/products/${id}`).then(
      result=>{
        const{data}=result
        setData(data)
      }
    )
  },[])

  return (
    <div className=" mx-auto w-[95%] grid grid-cols-9 mt-5  bg-blue-50  dark:bg-white rounded-3xl justify-center ">
        {/* left */}
        <div
          className="col-span-2    flex items-center
    w-full justify-center rounded-3xl"
        >
          <Image src={data.imgSrc} width={100} height={100} alt={data.name}/>
        </div>
        {/* right */}
        <div
          className="col-span-6   py-3  flex flex-col px-3 justify-center  gap-1 rounded-4xl 
"
        >
          <h1 className="font-semibold dark:text-black">name:{data.name}</h1>
          <p className="text-sm lg:text-base ">
            number:<span>{qty}</span>
          </p>

          <div className="flex flex-col sm:flex-row  items-center md:gap-5 justify-center gap-2">
            <p className="text-sm dark:text-black">
              price: <span>{data.price}</span>
            </p>
            <AddToCart id={id.toString()}/>
          
          </div>
        </div>
      </div>
  )
}

export default CartItem
