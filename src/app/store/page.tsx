import React from 'react'
import Title from '@/components/Helper/Title'
import Container from '@/components/Helper/Container'
import StoreCard, { ProductListType } from '@/components/Helper/StoreCard'
import Link from 'next/link'
import Pagination from '@/components/Helper/Pagination'
import Search from '@/components/Helper/Search'
import Category from '@/components/Helper/Category'
interface IStoreProps {
  params: Promise<{}>
  searchParams: Promise<{
    page: string
    per_page: string
    name: string
    category?: string
  }>
}

async function Store({ searchParams }: IStoreProps) {
  const page = (await searchParams).page ?? '1'
  const per_page = (await searchParams).per_page ?? '8'
  const name = (await searchParams).name ?? ''
  const category = (await searchParams).category ?? ''

  const result = await fetch(
    `http://localhost:3004/products?_page=${page}&_per_page=${per_page}&name=${name}&category=${category}`,
  )
  const data = (await result.json()) as ProductListType
  return (
    <Container>
      <div className="mt-32 flex flex-col justify-center  ">
        <Title title="َstore" />
        <div className="text-right">
          <Search />
        </div>
        <Category />
        

        <div className=" w-fit mx-auto px-3  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-5  ">
          {data.data?.map((item, i) => (
            <Link key={i} href={`/store/${item.id}`}>
              <StoreCard {...item} />
            </Link>
          ))}
        </div>

        <Pagination pageCount={data.pages} />
      </div>
    </Container>
  )
}

export default Store
