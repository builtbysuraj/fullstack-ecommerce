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
const PaymentSuccess = lazy(
  () => import('./pages/payment-success/PaymentSuccess')
)

export {
  CartPage,
  HomePage,
  LoginPage,
  PaymentSuccess,
  ProductDetailsPage,
  ProductListingPage,
  SignUpPage,
}
