import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa6'

type BreadcrumbProps = {
  category: string
}
export const Breadcrumb = ({ category }: BreadcrumbProps) => {
  return (
    <div id="breadcrumb" className="mb-5 flex items-center space-x-1">
      <Link href="/" className="text-turquoise-400">
        Página inicial
      </Link>{' '}
      <FaChevronRight color="#ACACAC" size={14} />
      <span className="text-red-600">{category}</span>
    </div>
  )
}
