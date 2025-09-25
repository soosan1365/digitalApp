import React from 'react'
import { MenuIcon } from 'lucide-react'
import { Navlinks } from '../../../constant/constant'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'


const MobileNav = () => {
  return (
    <div className=" md:hidden  ">
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <div className="  flex flex-col justify-center items-start ml-8 gap-6 lg:gap-12 mt-15 ">
            {Navlinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-black dark:text-white hover:text-green-700 w-fit
            font-bold "
            ><p>{link.label}</p>
            
            </Link>
          ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
