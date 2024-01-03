import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import App from './App'
import './assets/global.css'
import store from './state/store'

if (process.env.NODE_ENV !== 'development') {
  console.log = () => {}
  // console.error = () => {}
  // console.warn = () => {}
}

const theme = createTheme({
  typography: {},
  palette: {
    primary: {
      main: '#1D3557',
    },
    secondary: {
      main: '#DDA15E',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // color: red[300],
        },
      },
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        disableFocusRipple: true,
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#2874f0',
          // padding: '0.7rem',
          // margin: '0.4rem',
        },
      },
      defaultProps: {
        elevation: 1,
        position: 'sticky',
      },
    },
  },
})

createRoot(document.querySelector('#root') as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)
