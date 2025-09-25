import Container from '@/components/Helper/Container'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui'
import { PRODUCT } from '@/components/Helper/StoreCard'
  
interface IPoductProps{
  params:Promise<{id:string}>
  searchParams:Promise<{}>
}

async  function Product( {params}:IPoductProps){
  const {id}=await params
  
    const result =await fetch(`http://localhost:3004/products/${id}`)
      const data =await result.json() as PRODUCT
  return (
    <Container>
<div className='grid grid-cols-12 mt-32'>
    {/* left */}
    <div className='col-span-3 h-20 bg-green-200'>
<Image src={data.imgSrc} width={200} height={200} alt={data.name}/>
    </div>
{/* right */}
<div className='col-span-9 h-20 bg-blue-200 p-4'>
<h1>{data.name}</h1>
<p>{data.description}</p>
<p>price: <span >${data.price}</span></p>
<Button   className='w-6 h-6' >+</Button>
<span className='mx-4'>()</span>
<Button  className='w-6 h-6'>-</Button>
</div>
</div>
    </Container>
  )
}

export default Product