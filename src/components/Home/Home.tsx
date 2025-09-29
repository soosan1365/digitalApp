import React from 'react'
import Hero from './Hero/Hero'
import BestSellers from "./BestSellers/BestSellers"
import Category from './Category/Category'
import TrustUs from './Trust/TrustUs'

const Home = () => {
  return (
    <div className='overflow-x-hidden '>
      <Hero/>
      <Category/>
      <BestSellers/>
      <TrustUs/>
    </div>
  )
}

export default Home
