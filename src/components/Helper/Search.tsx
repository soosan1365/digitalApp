'use client'
import {useState}  from 'react'
import { Button } from '../ui'
import { SearchIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

function Search() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [search,setSearch] = useState('')

  const handleSearch = () => {
const currentSearchParams=new URLSearchParams(searchParams.toString())
currentSearchParams.set("name",search)  
// console.log(currentSearchParams.toString());
  
    router.push(`/store?${currentSearchParams.toString()}`)
  }
  return (
    <div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="bg-gray-100 py-2 px-1 rounded-lg"
        type="text"
        placeholder="search..."
      />
      <Button onClick={handleSearch} variant="link">
        <SearchIcon />
      </Button>
    </div>
  )
}

export default Search
