import styled from 'styled-components'
import {
  space,
  display,
  color,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
} from 'styled-system'
import { fontFamily, fontSizeBase, lineHeightBase } from '../../../theming'

const Text = styled.span`
  font-family: ${fontFamily};
  font-size: ${fontSizeBase};
  line-height: ${lineHeightBase};

  ${space}
  ${display}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${letterSpacing}
  ${lineHeight}
  ${textAlign}
`

Text.displayName = 'Text'
Text.propTypes = {
  ...space.propTypes,
  ...display.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...letterSpacing.propTypes,
  ...lineHeight.propTypes,
  ...textAlign.propTypes,
}

export default Text
