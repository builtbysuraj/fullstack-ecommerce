import { lazy } from 'react'

const HomePage = lazy(() => import('./pages/home/HomePage'))
const CartPage = lazy(() => import('./pages/cart/CartPage'))
const ProductDetailsPage = lazy(
  () => import('./pages/product-details/ProductDetailsPage')
)
const ProductListingPage = lazy(
  () => import('./pages/product-listing/ProductListingPage')
)
const LoginPage = lazy(() => import('./pages/login/LoginPage'))
const SignUpPage = lazy(() => import('./pages/signup/SignUpPage'))
const PaymentSuccessPage = lazy(
  () => import('./pages/payment-success/PaymentSuccessPage')
)

export {
  CartPage,
  HomePage,
  LoginPage,
  PaymentSuccessPage,
  ProductDetailsPage,
  ProductListingPage,
  SignUpPage,
}
