'use client'
import { useState } from 'react'
import { Button } from '../ui'
import { SearchIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import Container from './Container'

function Search() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    const currentSearchParams = new URLSearchParams(searchParams.toString())
    currentSearchParams.set('name', search)
    // console.log(currentSearchParams.toString());

    router.push(`/store?${currentSearchParams.toString()}`)
  }
  return (
    <Container>
      <div className=" w-[90%] mx-auto flex justify-end items-center  ">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-100 py-2 px-1 rounded-lg shadow-2xs border border-gray-300
         shadow-gray-300"
          type="text"
          placeholder="search..."
        />
        <Button onClick={handleSearch} variant="link">
          <SearchIcon />
        </Button>
      </div>
    </Container>
  )
}

export default Search
