import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './layouts'

export default function App() {
  return (
    <div className="AppContainer">
      <Header />
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  )
}
