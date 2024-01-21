import type { CartType } from '@/types'

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
