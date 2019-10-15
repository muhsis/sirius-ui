import { createGlobalStyle } from 'styled-components'
import { theme } from '../../src'

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fontFamily};
    line-height: ${theme.lineHeightBase};
  }
`

export default GlobalStyles
