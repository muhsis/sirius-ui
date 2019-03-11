import styled, { withTheme } from 'styled-components'
import { lighten } from 'polished'

// There should be two variations
// inline and code block

const Code = styled.code`
  background-color: ${p => p.theme.tints.info};
  border-radius: 0.15rem;
  box-shadow: 0 0 0 1px ${p => lighten(0.4, p.theme.brand.info)};
  color: ${p => p.theme.brand.info};
  font-family: ${p => p.theme.fontFamilyMonospace};
  font-size: 0.875rem;
  font-weight: 500;
  padding: 2px 4px;
`

export default withTheme(Code)
