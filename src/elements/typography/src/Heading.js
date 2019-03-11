import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css } from 'styled-components'
import { space } from 'styled-system'

// TODO@EMRE : Do we really need this here. Can we get it like p => p.theme?
import {
  headingsMarginBottom,
  headingsFontWeight,
  headingsLineHeight,
  headingsColor,
  headingsFontFamily,
  h1FontSize,
  h2FontSize,
  h3FontSize,
  h4FontSize,
  h5FontSize,
  h6FontSize,
  display1Size,
  display1Weight,
  display2Size,
  display2Weight,
  display3Size,
  display3Weight,
  display4Size,
  display4Weight,
  displayLineHeight,
} from '../../../theming'

const variantTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  'display-1': 'h1',
  'display-2': 'h2',
  'display-3': 'h3',
  'display-4': 'h4',
}

const commonHeadingStyle = () => {
  const fontFamily = headingsFontFamily

  return css`
    margin-top: 0;
    margin-bottom: ${headingsMarginBottom};
    font-weight: ${headingsFontWeight};
    line-height: ${headingsLineHeight};
    color: ${headingsColor};
    ${fontFamily && `font-family: ${fontFamily}`};

    ${space}
  `
}

const variantStyles = {
  h1: () => css`
    ${commonHeadingStyle};
    font-size: ${h1FontSize};
  `,
  h2: () => css`
    ${commonHeadingStyle};
    font-size: ${h2FontSize};
  `,
  h3: () => css`
    ${commonHeadingStyle};
    font-size: ${h3FontSize};
  `,
  h4: () => css`
    ${commonHeadingStyle};
    font-size: ${h4FontSize};
  `,
  h5: () => css`
    ${commonHeadingStyle};
    font-size: ${h5FontSize};
  `,
  h6: () => css`
    ${commonHeadingStyle};
    font-size: ${h6FontSize};
  `,
  'display-1': () => css`
    ${commonHeadingStyle};
    font-size: ${display1Size};
    font-weight: ${display1Weight};
    line-height: ${displayLineHeight};
  `,
  'display-2': () => css`
    ${commonHeadingStyle};
    font-size: ${display2Size};
    font-weight: ${display2Weight};
    line-height: ${displayLineHeight};
  `,
  'display-3': () => css`
    ${commonHeadingStyle};
    font-size: ${display3Size};
    font-weight: ${display3Weight};
    line-height: ${displayLineHeight};
  `,
  'display-4': () => css`
    ${commonHeadingStyle};
    font-size: ${display4Size};
    font-weight: ${display4Weight};
    line-height: ${displayLineHeight};
  `,
}

function createStyledComponent(variant, children, props) {
  const element = variantTags[variant]
  const style = variantStyles[variant]
  const ScHeading = styled[element]`
    ${style}
  `

  return <ScHeading {...props}>{children}</ScHeading>
}

class Heading extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf([
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'display-1',
      'display-2',
      'display-3',
      'display-4',
    ]),
  }

  static defaultProps = {
    variant: 'h1',
  }

  render() {
    return createStyledComponent(
      this.props.variant,
      this.props.children,
      this.props,
    )
  }
}

export default withTheme(Heading)
