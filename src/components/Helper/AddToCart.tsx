"use client"
import React, { useContext } from 'react'
import { Button } from '@/components/ui'
import { useShoppingCartContext } from '@/app/context/shoppingCart'

interface AddToCartProps{
  id:string
}
function AddToCart({id}:AddToCartProps) {
    const {cartItems,handleIncrease,getProductqty}=useShoppingCartContext()
    console.log(cartItems);
  return (
    <div>
          <div className="flex items-center ">
              <Button  onClick={()=>handleIncrease(parseInt(id))} className="w-3 h-3">+</Button>
              <span className="">{getProductqty(parseInt(id))}</span>
              <Button className="w-3 h-3">-</Button>
            </div>
    </div>
  )
}

export default AddToCart