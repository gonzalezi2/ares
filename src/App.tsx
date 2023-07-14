import React from 'react'
import {
  defaultTheme,
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'
import logo from './logo.svg'
import './App.css'
import { AppTheme } from './styled'

// TODO: move this to its own file + add more styles
const theme: AppTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    button: {
      primary: 'gray-100',
      secondary: 'gray-200',
      tertiary: 'gray-300',
      ghost: 'gray-400',
    },
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App
