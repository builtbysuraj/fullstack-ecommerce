export type ProductType = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
}

export type CartType = ProductType & {
  quantity: number
  cartItemId: string
}
