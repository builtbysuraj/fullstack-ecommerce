import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

// Styles
import 'react-image-gallery/styles/css/image-gallery.css'
import './assets/css/global.css'
import './assets/css/reset.css'

// Routes
import router from './routes'

// Store
import store from './state/store'

// Context
import ServerStatusProvider from './context/ServerStatusProvider'

if (process.env.NODE_ENV === 'production') {
  console.log = () => {}
  console.warn = () => {}
  console.error = () => {}
}

createRoot(document.querySelector('#root')!).render(
  <Provider store={store}>
    <ServerStatusProvider>
      <RouterProvider router={router} />
    </ServerStatusProvider>
  </Provider>
)
