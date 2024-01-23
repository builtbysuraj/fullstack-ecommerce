import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import './assets/css/reset.css'
import router from './routes'
import store from './state/store'

if (process.env.NODE_ENV === 'production') {
  console.log = () => {}
  console.warn = () => {}
  console.error = () => {}
}

createRoot(document.querySelector('#root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
