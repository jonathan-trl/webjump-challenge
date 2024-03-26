import { filterTypes } from '@/config/filters'
import { ProductsResponse } from '@/types/product'
import { CategoriesList } from '../CategoriesList'
import Link from 'next/link'

type FilterProductsProps = {
  products: ProductsResponse
}

export const FilterProducts = ({ products }: FilterProductsProps) => {
  const colors: Record<string, string> = {
    Preta: 'bg-gray-900',
    Laranja: 'bg-orange-500',
    Amarela: 'bg-yellow-400', 
    Cinza: 'bg-gray-400',
    Azul: 'bg-blue-500',
    Rosa: 'bg-pink-500',
    Bege: 'bg-yellow-200',
  }

  const getUniqueColors = () => {
    const uniqueColors: string[] = []
    products.items.forEach((product) => {
      product.filter.forEach((filter) => {
        if (!uniqueColors.includes(filter.color!)) {
          uniqueColors.push(filter.color!)
        }
      })
    })
    return uniqueColors
  }

  const uniqueColors = getUniqueColors()

  return (
    <aside className="md:col-span-3">
      <div className="border border-gray-200 px-5 pb-8 pt-4">
        <span className="text-2xl font-bold uppercase text-red-600">
          Filtre por
        </span>
        <div className="mt-5">
          <p className="mb-3 text-lg font-bold text-indigo-900">Categorias</p>
          <ul className="list-disc space-y-1 px-5 text-base text-gray-700">
            <CategoriesList />
          </ul>
        </div>
        {products.items[0].filter[0].color && (
          <div className="mt-7">
            <p className="mb-3 text-lg font-bold text-indigo-900">Cores</p>
            <div className="grid grid-cols-4 gap-1">
              {uniqueColors.map((color, index) => (
                <Link
                  key={index}
                  href={`?color=${color}`}
                  className={`h-6 cursor-pointer ${colors[color]}`}
                />
              ))}
            </div>
          </div>
        )}
        {products.items[0].filter[0].gender && (
          <div className="mt-7">
            <p className="mb-3 text-lg font-bold text-indigo-900">Gênero</p>
            <ul className="list-disc space-y-1 px-5 text-base text-gray-700">
              <li>
                <a href="?gender=Masculina">Masculino</a>
              </li>
              <li>
                <a href="?gender=Feminina">Feminino</a>
              </li>
            </ul>
          </div>
        )}
        <div className="mt-7">
          <p className="mb-3 text-lg font-bold text-indigo-900">Tipos</p>
          <ul className="list-disc space-y-1 px-5 text-base text-gray-700">
            {filterTypes.map((category) => (
              <li key={category.id}>
                <a href="#">{category.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
