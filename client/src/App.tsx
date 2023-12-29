import { Route, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import {
  CartPage,
  HomePage,
  ProductDetailsPage,
  ProductListingPage,
} from './pages'

export default function App() {
  return (
    <div
    >
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductListingPage />} />
        <Route path='/products/:id' element={<ProductDetailsPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  )
}
