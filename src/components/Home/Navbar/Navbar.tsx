'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBasketIcon } from 'lucide-react'
import logo1 from "@/../public/assets/logo1.png"
import { Navlinks } from '@/constant/constant'
import MobileNav from './MobileNav'
import { useEffect, useState } from 'react'
import ThemeToggler from '../Helper/ThemeToggler'
import { Button } from '@/components/ui'

const Navbar = () => {
  const [navbg, setNavbg] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavbg(true)
      if (window.scrollY < 90) setNavbg(false)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div
      className={` ${navbg ? 'bg-white dark:bg-gradient-to-b from-[#141b15] to-[#48534c] shadow-sm' : 'fixed'} fixed   top-0
   w-full  px-4   lg:px-16 z-50 transition-all `}
    >
      <nav
        className="flex justify-between items-center h-full w-[90%] xl:w-[80%] mt-2 mx-auto rounded-4xl 
      "
      >
        {/* right */}
        <Link href="/">
          <Image className="w-[7vw] min-w-20" src={logo1}  alt="" />
        </Link>
        {/* center */}
        <div className=" hidden  lg:flex items-center space-x-10 ">
          {Navlinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-gray-800 dark:text-white hover:text-emerald-800
              dark:hover:text-emerald-400
             transition-all duration-200"
            >
              <p className="font-semibold lg:text-base ">{link.label}</p>
            </Link>
          ))}
        </div>
        {/* left */}
        <div className="flex items-center justify-center space-x-4    ">
          <Button variant="link" size="sm">
            sign in
          </Button>
          {/* dark&light menu */}
          <ThemeToggler />
          {/* cart icon */}
          <ShoppingBasketIcon className='lg:w-9 lg:h-9'/>
          {/* mobile nav */}
          <MobileNav />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
