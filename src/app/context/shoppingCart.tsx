"use client"
import CartItem from "@/components/Helper/CartItem";
import { createContext,useContext, useEffect } from "react";
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
    handleDecrease:(id:number)=>void
    getProductqty:(id:number)=>number
    cartTotalQty:number
    handleRemove:(id:number)=>void
}

 export const ShoppingCartContext=createContext({} as TShoppingCartContext)

   export const useShoppingCartContext=()=>{
    return useContext(ShoppingCartContext)}

 export function ShoppingCartProvider({children}:ShoppingCartContextType){
 const [cartItems,setCartItems]=useState<CartItems[]>([])


 const cartTotalQty=cartItems.reduce((totalQty,item)=>{
return totalQty +item.qty
 },0)


 const getProductqty=(id:number)=>{
   return cartItems.find((item)=>item.id===id)?.qty||0
 }

  const handleIncrease = (id:number) => {
    setCartItems((currentItems) => {
      const isNotProductExist = currentItems.find((item) => item.id === id)==null;
      if (isNotProductExist) {
        return [...currentItems, { id: id,qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
}})};

const handleDecrease=(id:number)=>{
  setCartItems(currentItems =>{
    const islastOne=currentItems.find(item =>item.id===id)?.qty==1
    if(islastOne){
      return currentItems.filter(item=>item.id !==id)
    }
    else{
      return cartItems.map(item=>{
        if(item.id==id){
          return{
            ...item,
            qty:item.qty -1
          }
        }
        else{
          return item
        }
      })
    }
  })

}

const handleRemove=(id:number)=>{
  setCartItems(currentItems =>{
    return currentItems.filter((item)=> item.id != id)
  })
}

 useEffect(()=>{
const storedCartItems=localStorage.getItem("cartItems")
if (storedCartItems){
setCartItems(JSON.parse(storedCartItems))
}
},[])


 useEffect(()=>{
  localStorage.setItem("cartItems",JSON.stringify(cartItems))
 },[cartItems])



    return(
        <ShoppingCartContext.Provider value={{cartItems,handleIncrease,getProductqty,
        cartTotalQty,handleDecrease,handleRemove}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
