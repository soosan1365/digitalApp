import React from 'react'
import Hero from './Hero/Hero'
import BestSellers from "./BestSellers/BestSellers"
import TrustUs from './Trust/TrustUs'

const Home = () => {
  return (
    <div className='overflow-x-hidden  flex flex-col gap-10 '>
      <Hero/>
      <BestSellers/>
      <TrustUs/>
    </div>
  )
}

export default Home
