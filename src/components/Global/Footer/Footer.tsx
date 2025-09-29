import React from 'react'
import Link from 'next/link'
import logo1 from '@/../public/assets/logo1.png'
import Image from 'next/image'
import {
  PiInstagramLogoDuotone,
  PiLinkedinLogoDuotone,
  PiGithubLogoDuotone,
} from 'react-icons/pi'

const Footer = () => {
  return (
    <div className=" w-full mt-7 py-5 flex items-start justify-between bg-black/75 text-white">
      <div
        className="w-[90%]  flex flex-col sm:flex-row  justify-around items-center gap-4
        "
      >
        {/* left */}
        <div className="flex justify-center items-center flex-row  ">
          <Link href="/">
            <Image className="w-[6vw] min-w-24" src={logo1} alt="" />
          </Link>
          <p className=" text-base md:text-lg lg:text-xl shoar  font-bold ">
            Innovation in Your Hands
          </p>
        </div>
        <div className="flex justify-between items-start">
          {/* center */}
          <div>
            <p className="text-sm md:text-base font-bold  ">
              {' '}
              COMPANY
            </p>
            <ul className="text-sm flex flex-col gap-1">
              <li>
                <a
                  href="#"
                  className=" hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-blue-500"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-blue-500"
                >
                  Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-blue-500"
                >
                  privacy policy
                </a>
              </li>
            </ul>
          </div>
          {/* right */}
          <div className="ml-16">
            <p className="text-sm md:text-base font-bold ">
              GET IN TOUCH
            </p>
            <ul className="flex flex-col gap-1 text-sm">
              <li>09162003147</li>
              <li>soosan.adh@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className=" text-sm md:text-base font-bold  ">
            SOCIAL NETWORKS
          </p>
          <div className="flex sm:flex-col gap-5 sm:gap-1 justify-center items-start">
            <p className="flex justify-center items-center gap-1">
              <PiInstagramLogoDuotone />
              Instagram
            </p>

            <p className="flex justify-center items-center gap-1">
              <PiLinkedinLogoDuotone />
              Linkedin
            </p>
            <p className="flex justify-center items-center gap-1">
              <PiGithubLogoDuotone />
              Github
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
