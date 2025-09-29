'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import ReactPaginate from 'react-paginate'
function Pagination({ pageCount }: { pageCount: number }) {

  const router =useRouter()
  const handlePageClick = (e:{selected:number}) => {
    const page =e.selected +1
router.push(`/store?page=${page}&per_page=8`)
  }

  return (
    <div>
      <ReactPaginate className='flex gap-5 justify-center items-center mt-5 font-bold
      cursor-pointer '
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
