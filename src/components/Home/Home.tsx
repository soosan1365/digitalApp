import React from 'react'
import Hero from './Hero/Hero'
import Store from "./Store/Store"
import Category from './Category/Category'
import TrustUs from './Trust/TrustUs'

const Home = () => {
  return (
    <div className='overflow-x-hidden '>
      <Hero/>
      <Category/>
      <Store/>
      <TrustUs/>
    </div>
  )
}

export default Home
