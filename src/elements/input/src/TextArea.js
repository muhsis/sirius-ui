import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css, withTheme } from 'styled-components'
import { space } from 'styled-system'
import { controlFocus, transitionBase } from '../../../theming'

const sizeStyles = {
  sm: p => css`
    padding: ${p.theme.inputPaddingYSm} ${p.theme.inputPaddingXSm};
    font-size: ${p.theme.fontSizeSm};
    line-height: ${p.theme.inputLineHeightSm};
    border-radius: ${p.theme.borderRadiusSm};
  `,
  md: p => css`
    padding: ${p.theme.inputPaddingY} ${p.theme.inputPaddingX};
    font-size: ${p.theme.fontSizeBase};
    line-height: ${p.theme.inputLineHeight};
    border-radius: ${p.theme.borderRadius};
  `,
  lg: p => css`
    padding: ${p.theme.inputPaddingYLg} ${p.theme.inputPaddingXLg};
    font-size: ${p.theme.fontSizeLg};
    line-height: ${p.theme.inputLineHeightLg};
    border-radius: ${p.theme.borderRadiusLg};
  `,
}

const ScTextarea = styled.textarea`
  display: block;
  width: 100%;
  border-width: ${p => p.theme.inputBorderWidth};
  border-color: ${p => p.theme.inputBorderColor};
  border-style: solid;
  background-clip: padding-box;
  height: auto;
  overflow: auto;
  resize: vertical;
  min-height: 60px;
  line-height: ${p => p.theme.inputLineHeight};
  color: ${p => p.theme.inputTextColor};
  font-family: ${p => p.theme.fontFamily};

  &::placeholder {
    color: ${p => p.theme.inputPlaceholderText};
  }

  &:focus {
    ${p => controlFocus(p.theme.colors.primary)(p)}
  }

  &:disabled {
    background-color: ${p => p.theme.inputDisabledBgColor};
    color: ${p => p.theme.inputDisabledText};
  }

  ${p => transitionBase(p)};
  ${p => sizeStyles[p.size](p)};

  ${space}
`

function createStyledComponent(size, props) {
  return <ScTextarea size={size} {...props} />
}

class TextArea extends PureComponent {
  static propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    ...space.propTypes,
  }

  static defaultProps = {
    size: 'md',
  }

  render() {
    return createStyledComponent(this.props.size, ...this.props)
  }
}
TextArea.displayName = 'TextArea'

export default withTheme(TextArea)