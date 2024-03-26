import { CategoriesResponse } from '@/types/category'
import { ProductsResponse } from '@/types/product'
import { api } from '../api'

const getAll = async (): Promise<CategoriesResponse> => {
  try {
    const response = await api.get('/categories/list')

    return response.data
  } catch (error) {
    console.error('Erro ao buscar categorias:', error)
    throw error
  }
}

const getProductsByCategory = async (id: string): Promise<ProductsResponse> => {
  try {
    const response = await api.get(`/categories/${id}`)

    return response.data
  } catch (error) {
    console.error('Erro ao buscar categorias:', error)
    throw new Error('Erro ao buscar categorias')
  }
}

export const categoryService = { getAll, getProductsByCategory }
