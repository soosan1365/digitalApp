import React from 'react'
import Title from '../../Helper/Title'
import { category } from '@/constant/constant'
import Container from '../../Helper/Container'

const Category = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Container >
        <Title title="َCategory" />
      
      <div className="w-[75%] mx-auto grid grid-cols-3 lg:grid-cols-6 justify-center items-center   rounded-full gap-5   ">
        {category?.map((item,i) => (
      <p className='bg-[#ece7e7] rounded-full w-full py-3 text-center text-base  md:text-lg lg:text-xl
       font-bold text-black/75 shadow-lg shadow-gray-300   dark:shadow-[0px_3px_12px] dark:shadow-green-200'>{item.title}</p>
        ))}
      </div>
      </Container>
    </div>
  )
}

export default Category
