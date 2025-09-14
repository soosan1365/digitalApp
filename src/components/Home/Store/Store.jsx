import React from 'react'
import Title from '../Helper/Title'
import StoreCard from './StoreCard'
import { products } from '@/constant/constant'

const Store = () => {
    return (
        <div>
            <div>
                <Title title="َAvailable goods" />
            </div>
            <div className='w-[75%] mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-14 gap-12 '>
                {products?.map((item,i) => (
                <StoreCard  key={i} name={item.name} rating={item.rating}
                 price={item.price} imgSrc={item.imgSrc} />
                ))}
            </div>
        </div>
    )
}

export default Store