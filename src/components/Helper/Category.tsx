'use client'
import React from 'react'
import Title from './Title'
import { category } from '@/constant/constant'
import Container from './Container'
import { useRouter, useSearchParams } from 'next/navigation'

// import Link from 'next/link'

const Category = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleCategoryClick = (selected: string) => {
    const currentParams = new URLSearchParams(searchParams.toString())
    currentParams.set('category', selected)
    router.push(`/store?${currentParams.toString()}`)
  }

  return (
    <Container>
      <div className="flex flex-col justify-center items-center mt-5 gap-5">
        <div
          className="w-[90%] mx-auto grid grid-cols-3 lg:grid-cols-6 justify-center
         items-center   rounded-full gap-5    "
        >
          {category?.map((item, i) => (
            <button
              onClick={() => handleCategoryClick(item.title)}
              key={i}
              className="bg-[#ece7e7] rounded-full w-[27vw] sm:w-full 
               py-3 text-center text-sm md:text-base lg:text-lg font-semibold text-black/75 shadow-lg shadow-gray-300 dark:shadow-[0px_3px_12px] dark:shadow-green-200"
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Category
