import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import StylesProvider from '@material-ui/styles/StylesProvider'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { JokeProvider } from './context/joke-context'
import JokesCategories from './components/JokesCategories'

import theme from './constants/theme'

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />

          <JokeProvider>
            <JokesCategories />
          </JokeProvider>
        </StyledThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App
