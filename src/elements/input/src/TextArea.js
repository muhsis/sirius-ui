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
  border-color: ${p =>
    !p.transparent ? p.theme.inputBorderColor : 'transparent'};
  border-style: solid;
  background-clip: padding-box;
  height: auto;
  overflow: auto;
  min-height: 60px;
  line-height: ${p => p.theme.inputLineHeight};
  color: ${p => p.theme.inputTextColor};
  font-family: ${p => p.theme.fontFamily};

  resize: ${p => (p.autoResize ? 'none' : 'vertical')};

  &::placeholder {
    color: ${p => p.theme.inputPlaceholderText};
  }

  &:focus {
    ${p => controlFocus(p.theme.colors.primary)(p)}
  }

  &:hover {
    border-color: ${p => p.theme.inputBorderColor};
  }

  &:disabled {
    background-color: ${p => p.theme.inputDisabledBgColor};
    color: ${p => p.theme.inputDisabledText};
  }

  ${p => transitionBase(p)};
  ${p => sizeStyles[p.size](p)};

  ${space}
`

class TextArea extends PureComponent {
  static propTypes = {
    rows: PropTypes.number,
    autoResize: PropTypes.bool,
    transparent: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    ...space.propTypes,
  }

  static defaultProps = {
    rows: 3,
    autoResize: false,
    size: 'md',
  }

  handleChange = event => {
    if (!this.props.autoResize) return

    const lineHeight = 22
    // eslint-disable-next-line no-bitwise
    const currentRows = ~~(event.target.scrollHeight / lineHeight)
    const { rows } = this.props

    event.target.rows = currentRows <= rows ? rows : currentRows
    if (currentRows >= rows) {
      event.target.scrollTop = event.target.scrollHeight
    }
  }

  render() {
    const { rows, ...props } = this.props

    return <ScTextarea rows={rows} {...props} onChange={this.handleChange} />
  }
}
TextArea.displayName = 'TextArea'

export default withTheme(TextArea)
