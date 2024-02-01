import type { CartType, ProductType } from '@/types'

export const totalCartPrice = (cartData: CartType[]) => {
  let cartPrice = 0
  for (let i = 0; i < cartData.length; i++) {
    cartPrice += cartData[i].price * cartData[i].quantity
  }
  return cartPrice
}

type ClassesType = string | boolean | null | undefined

export const cx = (...classes: ClassesType[]) => {
  return classes.filter(Boolean).join(' ')
}

export const isItemInCart = (cartData: CartType[], data: ProductType) => {
  return cartData?.map((item: CartType) => item.id).includes(data?.id)
}

export const getOriginalAndThumbnailImg = (images: string[]) => {
  return images?.map((url) => {
    return {
      original: url,
      thumbnail: url,
    }
  })
}
