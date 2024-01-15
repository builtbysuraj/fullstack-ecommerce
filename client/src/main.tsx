import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './assets/css/reset.css'
import router from './routes'
import store from './state/store'

if (process.env.NODE_ENV !== 'development') {
  console.log = () => {}
}

const queryClient = new QueryClient()

createRoot(document.querySelector('#root') as HTMLElement).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
)
