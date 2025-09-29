'use client'
import { useRouter,useSearchParams } from 'next/navigation'
import React from 'react'
import ReactPaginate from 'react-paginate'
function Pagination({ pageCount }: { pageCount: number }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handlePageClick = (e: { selected: number }) => {
    const page = e.selected + 1
    const currentSearchParams = new URLSearchParams(searchParams.toString())
    currentSearchParams.set('page', page.toString())

    currentSearchParams.set('per_page', '8')

    router.push(`/store?${currentSearchParams.toString()}`)
  }

  return (
    <div>
      <ReactPaginate
        className="flex gap-5 justify-center items-center mt-5 font-bold
      cursor-pointer "
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        // renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination
