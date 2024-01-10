import { CartType } from '../types'

export const calculateCartPrice = (cartData: CartType[]) => {
  let cartPrice = 0
  for (let i = 0; i < cartData.length; i++) {
    cartPrice += cartData[i].price * cartData[i].quantity
  }
  return cartPrice
}
