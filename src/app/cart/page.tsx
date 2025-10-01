'use client'
import Container from '@/components/Helper/Container'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui'
import CartItem from '@/components/Helper/CartItem'
import Title from '@/components/Helper/Title'
import { useShoppingCartContext } from '../context/shoppingCart'
import { PRODUCT } from '@/components/Helper/StoreCard'
import axios from 'axios'
import { useMinimalRegexFormat } from '@/components/Helper/Number'

interface discountDataType{
  id:number,
  code:string,
  precentage:number
}

function Cart() {
  const { cartItems } = useShoppingCartContext()

  const [data, setData] = useState<PRODUCT[]>([])
  const [discountCode, setDiscountCode] = useState('')
   const [finalPrice, setFinalPrice] = useState(0)
    const [discountPrice, setDiscountPrice] = useState(0)

  useEffect(() => {
        const API_URL=process.env.NEXT_PUBLIC_API_URL ||"http://localhost:3004"

    axios(`${API_URL}/products`).then((result) => {
      const { data } = result
      setData(data)
    })
  }, [])

  let totalPrice = cartItems.reduce((total, item) => {
    let selectProduct = data.find((product) => product.id == item.id)
    return total + (selectProduct?.price || 0) * item.qty
  }, 0)

  const handleSubmitDiscount = () => {
        const API_URL=process.env.NEXT_PUBLIC_API_URL ||"http://localhost:3004"

    axios(`${API_URL}/discounts?code=${discountCode}`).then(
      (result) => {
        const data = result.data as  discountDataType[];
        console.log(data)
        let discountPrice =totalPrice * data[0].precentage /100
        let finalPrice=totalPrice - discountPrice
        setFinalPrice(finalPrice)
        setDiscountPrice(discountPrice)
      },
    )
  }
  return (
    <Container>
      <div className="mt-24 lg:mt-14 shadow-2xs dark:shadow-amber-100 pb-10">
        <Title title="Shopping Cart" />
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="w-50%  mx-auto ml-10 mt-5  gap-4 flex flex-col justify-center items-start   ">
          <h3>
            Total price:
            <span>{useMinimalRegexFormat(totalPrice)}$</span>
          </h3>
          
          <div>
            <Button variant="link" size="sm" onClick={handleSubmitDiscount}>
              Apply
            </Button>
            <input
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Enter discount code ..."
              type="text"
              className="shadow-2xs border-2 p-1 rounded-xl dark:border-white/50"
            />
            <h3>discount:<span>{discountPrice}$</span></h3>
          </div>
          <h3 className='font-semibold'>Final price:<span>{discountPrice?finalPrice:totalPrice}$</span></h3>
          <Button variant="destructive" className='ml-20 text-white'>PAYMENT</Button>
        </div>
      </div>
      
       

    </Container>
  )
}

export default Cart
