import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './assets/global.css'
import store from './state/store'

if (process.env.NODE_ENV !== 'development') {
  console.log = () => {}
  // console.error = () => {}
  // console.warn = () => {}
}

createRoot(document.querySelector('#root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
