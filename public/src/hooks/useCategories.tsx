import { categoryService } from '@/services/categoryService'
import { useQuery } from '@tanstack/react-query'

const useCategories = () => {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: categoryService.getAll,
    staleTime: 1000 * 60 * 3,
  })

  return { categories, isLoading, error }
}

export default useCategories
