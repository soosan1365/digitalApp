import React from 'react'
import Link from 'next/link'
import logo1 from "@/assets/logo1.png"
import Image from 'next/image'


const Footer = () => {
  return (
    <div className='w-full mt-4  flex justify-center items-center'>
     
      <div className="w-[90%]  flex flex-col sm:flex-row  justify-around items-center gap-10 
        ">
        {/* left */}
        <div className="flex justify-center items-center flex-row  ">
             <Link href="/">
          <Image className="w-[6vw] min-w-24" src={logo1}  alt="" />
        </Link>
          <p className=" text-xl shoar text-gray-800 dark:md:text-white font-bold ">
            Innovation in Your Hands
          </p>
        </div>
        {/* center */}
        <div>
          <p className="text-xl font-bold  text-gray-900 dark:text-white">
            {" "}
            COMPANY
          </p>
          <ul className=" flex flex-col gap-1 text-gray-900 dark:text-white">
            <li>
              <a href="#" className="text-gray-800 dark:text-white hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 dark:text-white hover:text-blue-500">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 dark:text-white hover:text-blue-500">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 dark:text-white hover:text-blue-500">
                privacy policy
              </a>
            </li>
          </ul>
        </div>
        {/* right */}
        <div className='ml-16'>
          <p className="text-xl font-bold  text-gray-900 dark:text-white">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-1 text-gray-800 dark:text-white">
            <li>09162003147</li>
            <li>soosan.adh@gmail.com</li>
          </ul>
        </div>
      </div>
      </div>
     
   
  );
};

export default Footer