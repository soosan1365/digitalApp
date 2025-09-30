import React from 'react'
interface IcontainerProps{
    children:React.ReactNode
}

const Container = ({children}:IcontainerProps) => {
  return (
    <div className='container mx-auto   '>
        {children}
    </div>
  )
}

export default Container