import React from 'react'
import Title from '@/components/Helper/Title'
import Container from '@/components/Helper/Container'
import StoreCard, { ProductListType } from '@/components/Helper/StoreCard'
import Link from 'next/link'
import Pagination from '@/components/Helper/Pagination'
import Search from '@/components/Helper/Search'
 interface IStoreProps{
      params:Promise<{}>
  searchParams:Promise<{page:string;per_page:string;name:string}>
}
 

 async function Store ({searchParams}:IStoreProps) {
const page =(await searchParams).page ??"1"
const per_page =(await searchParams).per_page ??"8"
const name =(await searchParams).name ??""


    const result =await fetch(`http://localhost:3004/products?_page=${page}&_per_page=${per_page}&name=${name}`)
    const data =await result.json() as ProductListType
    return (
        <Container>
        <div className='mt-16'>
        
            
                <Title title="َstore" />
                <div className='text-right mr-20 mt-3 md:mr-10'>
                    <Search/>
                </div>
        
            <div className='max-w-[85%]  sm:max-w-full mx-auto px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-7  '>
    
                {data.data?.map((item,i) => (
                <Link key={i}   href={`/store/${item.id}`}>
                <StoreCard  {...item} />
                </Link>
                ))}
            </div>
        
            <Pagination pageCount={data.pages}/>
            </div>
        </Container>
    )
}

export default Store