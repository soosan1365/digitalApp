import React from 'react'
import Title from '../../Helper/Title'
import StoreCard from '../../Helper/StoreCard'
import { bestsellers } from '@/constant/constant'
import Container from '../../Helper/Container'

const Store = () => {
    return (
        <Container>
            <div>
                <Title title="َAvailable goods" />
            </div>
            <div className=' mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-14 gap-7 '>
                {bestsellers?.map((item,i) => (
                <StoreCard  key={i} name={item.name} rating={item.rating}
                 price={item.price} imgSrc={item.imgSrc} />
                ))}
            </div>
        </Container>
    )
}

export default Store