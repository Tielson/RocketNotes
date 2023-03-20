import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './Hooks/auth'
import GlobalStyle from './styles/global'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import { Routes } from './routes'
import React from 'react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
