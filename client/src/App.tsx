import { Route, Routes } from 'react-router-dom'
import { Footer, Header } from './layouts'
import {
  CartPage,
  HomePage,
  ProductDetailsPage,
  ProductListingPage,
} from './pages'

export default function App() {
  return (
    <div className="AppContainer">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
