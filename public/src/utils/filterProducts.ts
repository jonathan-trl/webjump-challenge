import { Product } from '@/types/product'

export const filterProducts = (
  products: Product[],
  searchParams: { [key: string]: string | string[] | undefined },
) => {
  const color = searchParams.color as string
  const gender = searchParams.gender as string
  const query = searchParams.query as string

  let filteredProducts: Product[] = []

  if (query) {
    filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(query.toLowerCase())
    })

    return filteredProducts
  }

  if (color) {
    filteredProducts = products.filter((product) =>
      product.filter.some(
        (filter) =>
          filter.color && filter.color.toLowerCase() === color.toLowerCase(),
      ),
    )
  }

  if (gender) {
    filteredProducts = products.filter((product) =>
      product.filter.some(
        (filter) =>
          filter.gender && filter.gender.toLowerCase() === gender.toLowerCase(),
      ),
    )
  }

  if (!query && !color && !gender) {
    filteredProducts = products
  }

  return filteredProducts
}
