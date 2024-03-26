import { Breadcrumb } from '@/components/common/Breadcrumb'
import { FilterProducts } from '@/components/common/FilterProducts'
import { HeaderProducts } from '@/components/common/HeaderProducts'
import { Pagination } from '@/components/common/Pagination'
import { Product } from '@/components/common/Product'
import { categoryService } from '@/services/categoryService'
import { filterProducts } from '@/utils/filterProducts'

type PageProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const page = async ({ params, searchParams }: PageProps) => {
  let products = await categoryService.getProductsByCategory(params.id)
  const { items: categories } = await categoryService.getAll()
  const page = searchParams.page as string

  products.items = products.items.sort((a, b) => a.price - b.price)

  let filteredProducts = filterProducts(products.items, searchParams)

  const itemsPerPage = 8

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

  const currentPage = page ?? '1'

  const indexOfLastItem = parseInt(currentPage) * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  let currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  )

  const category = categories.find(
    (category) => category.id === parseInt(params.id),
  )?.name!

  return (
    <>
      <Breadcrumb category={category} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-10">
        <FilterProducts categoryId={params.id} products={products} />
        <div className="md:col-span-7">
          <HeaderProducts category={category} />

          {currentProducts.length > 0 && (
            <div className="grid grid-cols-2 items-start gap-9 md:grid-cols-3 lg:grid-cols-4">
              {currentProducts.map((product) => (
                <Product key={product.id} {...product} />
              ))}
            </div>
          )}

          {currentProducts.length <= 0 && (
            <span className="text-lg">Nenhum item encontrado!</span>
          )}
          <Pagination currentPage={currentPage} totalPages={totalPages!} />
        </div>
      </div>
    </>
  )
}

export default page
