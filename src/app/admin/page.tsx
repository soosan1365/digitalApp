'use client'
import Container from '@/components/Helper/Container'
import { Button } from '@/components/ui'
import axios from 'axios'
import React, { ChangeEvent, useState } from 'react'

function Admin() {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    imgSrc: '',
    description: '',
  })
  const handleChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target
    setNewProduct({
      ...newProduct,
      [name]: value,
    })
  }
  const handleCreateProduct = () => {
    axios({
      method: 'post',
      url: 'http://localhost:3004/products',
      data: {
        id: Math.floor(Math.random() * 1000),
        name: newProduct.name,
        description: newProduct.description,
        price: newProduct.price,
        imgSrc: newProduct.imgSrc,
      },
    })
  }
  return (
    <div className=" flex flex-col justify-center items-center w-[30vw] mx-auto mt-28 gap-5  dark:text-black">
      <Container>
        <div className="flex flex-col gap-4 py-2  justify-center items-center rounded-3xl">
          <input
            onChange={handleChangeProduct}
            name="name"
            type="text"
            placeholder="name:"
            className="bg-gray-200 px-5 py-2 rounded-lg"
          />
          <input
            onChange={handleChangeProduct}
            name="price"
            type="text"
            placeholder="price:"
            className="bg-gray-200 px-5 py-2 rounded-lg"
          />
          <input
            onChange={handleChangeProduct}
            name="imgSrc"
            type="text"
            placeholder="image"
            className="bg-gray-200 px-5 py-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2  justify-center items-center">
          <textarea
            onChange={handleChangeProduct}
            name="description"
            className=" bg-gray-200 mt-5 px-5 rounded-sm py-3"
            placeholder="description "
          ></textarea>
          <Button onClick={handleCreateProduct}>create</Button>
        </div>
      </Container>
    </div>
  )
}

export default Admin
