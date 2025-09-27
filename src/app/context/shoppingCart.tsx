"use client"
import CartItem from "@/components/Helper/CartItem";
import { createContext,useContext } from "react";
import React, { useState } from "react";
type ShoppingCartContextType={
    children:React.ReactNode
}
 type CartItems={
    id:number;
    qty:number;}

    type TShoppingCartContext={
    cartItems:CartItems[];
    handleIncrease:(id:number)=>void
    getProductqty:(id:number)=>number
}

 export const ShoppingCartContext=createContext({} as TShoppingCartContext)

   export const useShoppingCartContext=()=>{
    return useContext(ShoppingCartContext)}

 export function ShoppingCartProvider({children}:ShoppingCartContextType){
 const [cartItems,setCartItems]=useState<CartItems[]>([])

 const getProductqty=(id:number)=>{
   return cartItems.find((item)=>item.id===id)?.qty||0
 }

  const handleIncrease = (id:number) => {
    setCartItems((currentItem) => {
      let isNotProductExist = currentItem.find((item) => item.id === id)==null;
      if (isNotProductExist) {
        return [...currentItem, { id: id,qty: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
}})};



    return(
        <ShoppingCartContext.Provider value={{cartItems,handleIncrease,getProductqty}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
