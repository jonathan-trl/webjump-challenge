export type Product = {
  id: number
  sku: string
  path: string
  name: string
  image: string
  price: number
  specialPrice?: number
  filter: {
    color?: string
    gender?: string
  }[]
}

export type ProductsResponse = {
  items: Product[]
}
