'use client'
import { useEffect, useRef, useState } from 'react'
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'

export const Select = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <div className="relative w-[180px] md:w-[216px]" ref={ref}>
      <div
        className="flex cursor-pointer items-center justify-between rounded-[5px] border border-[gray-200] px-4 py-1 select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-sm text-black">Preço</div>
        <div>
          {isOpen ? (
            <IoChevronUpOutline color="#8E8E8E" />
          ) : (
            <IoChevronDownOutline color="#8E8E8E" />
          )}
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute z-20 mt-0.5 w-full cursor-pointer rounded-md bg-blue-700 px-2 py-1 text-sm text-white select-none"
          onClick={() => setIsOpen(false)}
        >
          Preço
        </div>
      )}
    </div>
  )
}
