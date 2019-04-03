import { createGlobalStyle, theme } from '../../src'

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fontFamily};
    font-size: ${theme.fontSizeBase};
    line-height: ${theme.lineHeightBase};
  }
`

export default GlobalStyles
