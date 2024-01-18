import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from './App'
import {
  CartPage,
  HomePage,
  LoginPage,
  PaymentSuccess,
  ProductDetailsPage,
  ProductListingPage,
  SignUpPage,
} from './lazyComponents'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
    </Route>
  )
)

export default router
