"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui'
import Container from '@/components/Helper/Container'
// import axios from 'axios'
import Cookie from "js-cookie"
import { redirect } from 'next/navigation'
function Login() {
  const[userName,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const handleLogin =()=>{
    // const data = axios({
    //   url:"/login",
    //   method:"post",
    //   data:{
    //     username:userName,
    //     password:password
    //   }
    // })
  const response={
    token:"jhgvfcdxfghj",
    expire:7
  }
  Cookie.set("token",response.token,{expires:response.expire})
  redirect("/admin")
  }

  return (
    <div className=" flex flex-col justify-center items-center w-fit   mx-auto mt-48 gap-5  dark:text-black">
      <Container>
        <div className="flex flex-col gap-4 shadow-2xl py-10 px-10 justify-center items-center rounded-3xl">
          <input  onChange={(e)=>setUserName(e.target.value)} type="text" placeholder='Email...' className="bg-gray-200 px-5  py-2 rounded-lg" />
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password...' className="bg-gray-200 px-5 py-2 rounded-lg" />
          <Button onClick={handleLogin} variant="link" size="lg">login</Button>
        </div>
      </Container>
    </div>
  )

}

export default Login
