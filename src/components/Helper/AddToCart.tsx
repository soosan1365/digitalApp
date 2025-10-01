"use client"
import React from 'react'
import { Button } from '@/components/ui'
import { useShoppingCartContext } from '@/app/context/shoppingCart'

interface AddToCartProps{
  id:string
}
function AddToCart({id}:AddToCartProps) {
    const {cartItems,handleIncrease,getProductqty,handleDecrease,handleRemove}=useShoppingCartContext()
  
  return (
    <div className=' flex justify-center items-center gap-5 dark:text-black'>
          <div className="flex items-center  ">
              <Button  onClick={()=>handleIncrease(parseInt(id))} className="w-3 h-3">+</Button>
              <span className="px-1 dark:text-white ">{getProductqty(parseInt(id))}</span>
              <Button onClick={()=>handleDecrease(parseInt(id))} className="w-3 h-3">-</Button>
            </div>
            <div>
              <Button  onClick={()=>handleRemove(parseInt(id))} variant="destructive"  size="sm" className='text-white'>Remove</Button>
            </div>
            
    </div>
  )
}

export default AddToCart