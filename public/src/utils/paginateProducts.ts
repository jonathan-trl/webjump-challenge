import { Product } from '@/types/product'

export const paginateProducts = (
  filteredProducts: Product[],
  itemsPerPage: number,
  page: string,
) => {
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

  const currentPage = page ?? '1'

  const indexOfLastItem = parseInt(currentPage) * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  let currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  )

  return { currentProducts, currentPage, totalPages }
}
