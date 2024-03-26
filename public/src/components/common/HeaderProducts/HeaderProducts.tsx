import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaList } from 'react-icons/fa6'
import { Select } from '../Select'

type HeaderProductsProps = {
  category: string
}
export const HeaderProducts = ({ category }: HeaderProductsProps) => {
  return (
    <div className="mb-10 space-y-3">
      <h1 className="text-[32px] text-red-500">{category}</h1>
      <hr className="border-gray-200" />
      <div className="flex items-center justify-between">
        <div className="hidden items-center gap-2 md:flex">
          <BsFillGrid3X3GapFill size={20} color="#ED1A39" />
          <FaList size={20} color="#00A8A9" />
        </div>
        <div className="flex w-full items-center justify-between gap-3 md:w-auto">
          <span className="text-[11px] font-bold uppercase text-gray-600">
            Ordenar por
          </span>
          <Select />
        </div>
      </div>
    </div>
  )
}
