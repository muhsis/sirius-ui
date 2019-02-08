import { normalize } from 'polished'
import { createGlobalStyle } from 'styled-components'

import { fontFamily, fontSizeBase, lineHeightBase } from '../../../theming'

export const Normalize = createGlobalStyle`
  ${normalize()}

  html, body {
    font-family: ${fontFamily};
    font-size: ${fontSizeBase};
    line-height: ${lineHeightBase};
  }

  * {
    box-sizing: border-box;
  }
`

export default Normalize
