'use client'
import useCategories from '@/hooks/useCategories'
import Link from 'next/link'

export const CategoriesList = () => {
  const { categories } = useCategories()

  return (
    <>
      {categories &&
        categories.items.map((category) => (
          <li key={category.id}>
            <Link href={`/catalogo/${category.id}`}>{category.name}</Link>
          </li>
        ))}
    </>
  )
}
