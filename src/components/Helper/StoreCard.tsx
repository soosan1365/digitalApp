import Image from 'next/image'
import React from 'react'
import star_icon from '@/../public/assets/star_icon.svg'
import star_dull_icon from '@/../public/assets/star_dull_icon.svg'
import { Button } from '@/components/ui'

export interface PRODUCT  {
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
      <div className="flex  flex-col items-center justify-center mt-5">
        <Image
          src={imgSrc}
          alt={name}
          width={250}
          height={250}
          className="w-full h-[200px] object-cover"
        />
        <h1 className="hover:text-green-900  text-sm sm:text-base font-bold">
          {name}
        </h1>
        <div className="flex items-center justify-between w-full py-5">
          <p className=" text-sm  font-bold">{price}</p>
          <Button
            variant="link" size="sm" className='text-sm'>
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="absolute top-2  right-4 flex gap-2 ">
        <div className="  flex  items-center ">
          <Image src={star_icon} alt="" width={15} height={15}/>
          <Image src={star_icon} alt="" width={15} height={15}/>
          <Image src={star_icon} alt="" width={15} height={15}/>
          <Image src={star_icon} alt="" width={15} height={15}/>
          <Image src={star_dull_icon} alt="" width={15} height={15}/>
        </div>
        <p className='text-sm'>{rating}</p>
      </div>
    </div>
  )
}

export default StoreCard
