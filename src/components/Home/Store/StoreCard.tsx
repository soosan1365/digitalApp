import Image from 'next/image'
import React from 'react'
import star_icon from '@/../public/assets/star_icon.svg'
import star_dull_icon from '@/../public/assets/star_dull_icon.svg'
import { Button } from '@/components/ui'

type PRODUCT = {
  id: number
  name: string
  description: string
  rating: number
  price: string
  imgSrc: string
}

const StoreCard = ({ name, rating, price, imgSrc }: PRODUCT) => {
  return (
    <div className="relative flex flex-col justify-between items-center shadow-[#ece7e7] shadow-lg
     dark:shadow-white/35 bg-gray-50 dark:bg-gradient-to-b text-gray-800 from-[#cff7d8]
      to-[#f4f7f8] rounded-2xl border-[0.5px] border-[#e2dada]">
      <div className="flex  flex-col items-center justify-center">
        <Image
          src={imgSrc}
          alt={name}
          width={300}
          height={300}
          className="w-full h-[250px] object-cover"
        />
        <h1 className="hover:text-green-900  text-base sm:text-lg font-bold">
          {name}
        </h1>
        <div className="flex items-center justify-between w-full py-5">
          <p className="text-base sm:text-lg font-bold">{price}</p>
          <Button
            variant="link">
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="absolute top-2  right-4 flex gap-2 ">
        <div className="  flex  items-center ">
          <Image src={star_icon} alt="" />
          <Image src={star_icon} alt="" />
          <Image src={star_icon} alt="" />
          <Image src={star_icon} alt="" />
          <Image src={star_dull_icon} alt="" />
        </div>
        <p>{rating}</p>
      </div>
    </div>
  )
}

export default StoreCard
