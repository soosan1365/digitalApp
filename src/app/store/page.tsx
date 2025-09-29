import React from 'react'
import Title from '@/components/Helper/Title'
import Container from '@/components/Helper/Container'
import StoreCard, { PRODUCT } from '@/components/Helper/StoreCard'
import Link from 'next/link'

 async function Store () {
    const result =await fetch("http://localhost:3004/products")
    const data =await result.json() as PRODUCT[]
    return (
        <Container>
            <div className=''>
            <div className='mt-20'>
                <Title title="َstore" />
            </div>
            <div className='max-w-[85%]  sm:max-w-full mx-auto px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-7  '>
                {data?.map((item,i) => (
                <Link key={i}   href={`/store/${item.id}`}>
                <StoreCard  {...item} />
                </Link>
                ))}
            </div>
            </div>
        </Container>
    )
}

export default Store