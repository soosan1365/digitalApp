import React from 'react'
import { products } from '@/constant/constant'
import Title from '@/components/Helper/Title'
import Container from '@/components/Helper/Container'
import StoreCard, { PRODUCT } from '@/components/Helper/StoreCard'
import Link from 'next/link'

 async function Store () {
    const result =await fetch("http://localhost:3004/products")
    const data =await result.json() as PRODUCT[]
    return (
        <Container>
            <div className='mt-28'>
                <Title title="َThe best sellers" />
            </div>
            <div className=' mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-7 '>
                {data?.map((item,i) => (
                <Link key={i}   href={`/store/${item.id}`}>
                <StoreCard  {...item} />
                </Link>
                ))}
            </div>
        </Container>
    )
}

export default Store