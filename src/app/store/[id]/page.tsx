import Container from '@/components/Helper/Container'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui'
import { PRODUCT } from '@/components/Helper/StoreCard'
  import AddToCart from '@/components/Helper/AddToCart'
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
<div className=' mx-auto w-[95%] grid grid-cols-9 mt-32   justify-center '>
    {/* left */}
    <div className='col-span-2 bg-green-100   flex items-center
    w-full justify-center rounded-3xl'>
<Image src={data.imgSrc} width={300} height={300} alt={data.name}/>
    </div>
{/* right */}
<div className='col-span-6  bg-blue-50 py-8  flex flex-col px-4 justify-center  gap-5 rounded-4xl 
'>
<h1 className='font-semibold'>{data.name}</h1>
<p className='text-sm lg:text-base '>{data.description}</p>

<div className='flex flex-col sm:flex-row  items-center md:gap-5 justify-center gap-2'>
  <p className='text-sm'>price: <span>${data.price}</span></p>
  <Button variant="link"  size="sm">Add to Cart</Button>
<AddToCart id={id}/>
</div>

</div>
</div>
    </Container>
  )
}

export default Product