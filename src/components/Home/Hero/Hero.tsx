'use client'
import React from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import AppleLogo from '@/../public/assets/AppleLogo.png'
import LenovoLogo from '@/../public/assets/LenovoLogo.png'
import SamsungLogo from '@/../public/assets/SamsungLogo.png'
import AsusLogo from '@/../public/assets/AsusLogo.png'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import apple from '@/../public/assets/apple.png'
import lenovo from '@/../public/assets/lenovo.jpg'
import sumsung from '@/../public/assets/sumsung.jpg'
import microsoft from '@/../public/assets/microsoft.jpg'
import Container from '../../Helper/Container'

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  )

  return (
    <div className="relative    flex flex-col justify-center  ">
      {/* rightCarousel  */}
      <Container>
      <div
        className=" mx-auto  grid items-center justify-center grid-cols-1
       sm:grid-cols-2  gap-10 "
      >
        <div className="mx-auto w-[70%] sm:w-[88%] md:w-[78%] ">
          <Carousel
            plugins={[plugin.current]}
            className="w-full mt-20 lg:mt-24 "
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {[apple, lenovo, sumsung, microsoft].map((image, index) => (
                <CarouselItem key={index}>
                  <div className="">
                    <Card className="bg-transparent shadow-none border-0 ">
                      <CardContent
                        className="flex  items-center
                 justify-center object-cover "
                      >
                        <Image
                          src={image}
                          alt=""
                          className="object-cover h-full w-full rounded-tr-[50%] shadow-lg shadow-green-300"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        {/* leftcontent */}
        <div
          className="flex flex-col justify-between items-center  font-extrabold
      leading-[2.5rem] md:leading-[4rem] sm:mt-22 gap-2 sm:gap-3  lg:gap-9 "
        >
          <h1
            className="bg-gradient-to-r   from-[#56ce78]  from-50% to-[#a9e0bb] text-transparent
         bg-clip-text text-2xl  md:text-4xl  lg:text-5xl xl:text-7xl font-serif"
          >
            Dijital
          </h1>
          <div className="flex flex-col justify-center items-center  gap-3  ">
            <p className=" text-gray-700 dark:text-white text-xl md:text-2xl  xl:text-3xl">
              {' '}
              Curated Excellence
            </p>
            <p
              className=" text-gray-700 dark:text-white text-center text-sm md:text-base lg:text-xl leading-[2.5rem] 
         "
            >
              Specialized mobile and laptop store with an unparalleled <br/>
              <span className="text-emerald-400 text-base md:text-xl lg:text-2xl">
                collection of top brands
              </span>
            </p>
          </div>
          <div className=" w-[4vh]  md:w-[8vh] lg:w-[20vh] flex  justify-center items-center gap-6 md:gap-10 ">
            <Image src={AppleLogo} alt="apple"/>
            <Image src={SamsungLogo} alt="SamsungLogo" />
            <Image src={LenovoLogo} alt="LenovoLogo" />
            <Image src={AsusLogo} alt="AsusLogo" />
          </div>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default Hero
