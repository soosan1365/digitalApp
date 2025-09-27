import Container from '@/components/Helper/Container'
import React from 'react'
import { Button } from '@/components/ui'
import CartItem from '@/components/Helper/CartItem'
import Title from '@/components/Helper/Title'

function Cart() {
  return (
    <Container>
      <Title title="Shopping Cart" />
      <div>
        <CartItem />
      </div>
      <div className=" flex flex-col justify-center items-start   ">
        <h3>Total price:</h3>
        <h3>discount:</h3>
        <input
          placeholder="Enter discount code"
          type="text"
          className="shadow-2xs"
        />
        <h3> shipping cost:</h3>
        <h3>Final price:</h3>
      </div>
    </Container>
  )
}

export default Cart
