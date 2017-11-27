
import React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
// import WithTheme from './WithTheme'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

function DarkTheme ({children}) {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}

export default DarkTheme
