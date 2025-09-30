import React from 'react'
import Title from '../../Helper/Title'
import StoreCard,{PRODUCT} from '@/components/Helper/StoreCard'
import Container from '../../Helper/Container'
import Link from 'next/link'


 async function BestSellers () {
        const result =await fetch("http://localhost:3004/bestSeller")
        const data =await result.json() as PRODUCT[]
    return (
       <Container>
                 <div className=' '>
                     <Title title="َThe best sellers" />
                 </div>
                 <div className=' mx-auto px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-7 '>
                     {data?.map((item,i) => (
                     <Link key={i}   href={`/store/${item.id}`}>
                     <StoreCard  {...item} />
                     </Link>
                     ))}
                 </div>
             </Container>
       
    )
}

export default BestSellers