'use client'

import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

type PaginationProps = {
  currentPage: string
  totalPages: number
}

export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  )

  const iCurrentPage = parseInt(currentPage)

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    isEnabled: boolean,
  ) => {
    if (!isEnabled) {
      event.preventDefault()
      alert('O link está desativado.')
    }
  }

  const isEnablePrevLink = iCurrentPage > 1

  const isEnableNextLink = iCurrentPage < totalPages

  return (
    <div className="mt-10 flex items-center justify-center gap-5">
      <Link
        href={`?page=${iCurrentPage - 1}`}
        onClick={(event) => handleClick(event, isEnablePrevLink)}
        className={`font-bold ${!isEnablePrevLink ? 'pointer-events-none' : ''}`}
      >
        <FaChevronLeft
          color={`${isEnablePrevLink ? '#00A8A9' : '#E2DEDC'}`}
          size={14}
        />
      </Link>
      <div className="flex items-center gap-3 text-base text-gray-700">
        {pageNumbers.map((pageNumber) => (
          <Link
            href={`?page=${pageNumber}`}
            key={pageNumber}
            className={
              iCurrentPage === pageNumber ? 'font-bold text-red-600' : ''
            }
          >
            {pageNumber}
          </Link>
        ))}
      </div>
      <a
        href={`?page=${iCurrentPage + 1}`}
        onClick={(event) => handleClick(event, isEnableNextLink)}
        className={`font-bold ${!isEnableNextLink ? 'pointer-events-none' : ''}`}
      >
        <FaChevronRight
          color={`${isEnableNextLink ? '#00A8A9' : '#E2DEDC'}`}
          size={14}
        />
      </a>
    </div>
  )
}
