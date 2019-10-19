/**
 * The Theme component is a wrapper around the ThemeProvider to allow the inner
 * components to toggle the theme using the general app context
 */
import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { Context } from '../Context'
import * as themes from '../Styles/theme'

const Theme = ({ children }) => {
  const { state } = useContext(Context)
  return (
    <ThemeProvider theme={state ? themes[state.theme] : themes.light}>
      {children}
    </ThemeProvider>
  )
}

export default Theme
