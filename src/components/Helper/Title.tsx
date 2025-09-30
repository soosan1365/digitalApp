import React from 'react'
import Container from './Container'

const Title = (props:{ title: string }) => {
  return (
    <Container>
     <div className='px-10 mx-auto'>
      <hr className=' bg-gradient-to-r h-0.5  from-[#52b36d]  to-[#a9e0bb] '/>
    <div
      className=" mx-auto flex justify-start items-center gap-2 mt-5
    text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold  
    bg-gradient-to-r bg-clip-text text-transparent  from-[#52b36d]  to-[#a9e0bb] "
    >
      <hr className='w-16  bg-gradient-to-r h-0.5  from-[#52b36d]  to-[#a9e0bb] '/>{props.title}
    </div>
  
    </div>
    </Container>
  )
}

export default Title
