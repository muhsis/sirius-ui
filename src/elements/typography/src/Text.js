import styled, { withTheme } from 'styled-components'
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

const Text = styled.span`
  font-family: ${p => p.theme.fontFamily};
  font-size: ${p => p.theme.fontSizeBase};
  line-height: ${p => p.theme.lineHeightBase};

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

export default withTheme(Text)
