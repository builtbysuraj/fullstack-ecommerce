import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from './App'
import {
  CartPage,
  LoginPage,
  PaymentSuccessPage,
  ProductDetailsPage,
  ProductListingPage,
  SignUpPage,
} from './lazyComponents'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/" element={<ProductListingPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/payment-success" element={<PaymentSuccessPage />} />
    </Route>
  )
)

export default router
