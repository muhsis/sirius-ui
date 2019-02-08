import styled from 'styled-components'
import {
  space,
  color,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
} from 'styled-system'
import {
  colors,
  fontFamily,
  fontSizeBase,
  lineHeightBase,
} from '../../../theming'

const Paragraph = styled.p`
  color: ${colors.dark};
  font-family: ${fontFamily};
  font-size: ${fontSizeBase};
  line-height: ${lineHeightBase};
  margin-bottom: 1rem;

  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${letterSpacing}
  ${lineHeight}
  ${textAlign}
`

Paragraph.displayName = 'Paragraph'
Paragraph.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...letterSpacing.propTypes,
  ...lineHeight.propTypes,
  ...textAlign.propTypes,
}

export default Paragraph
