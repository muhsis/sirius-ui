import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css, withTheme } from 'styled-components'
import { space, layout, color, typography } from 'styled-system'
import NumberFormat from 'react-number-format'

import { controlFocus, transitionBase } from '../../../theming'
import { InputGroup } from '../../form'

const sizeStyles = {
  sm: p => css`
    padding: ${p.theme.inputPaddingYSm} ${p.theme.inputPaddingXSm};
    font-size: ${p.theme.fontSizeSm};
    line-height: ${p.theme.inputLineHeightSm};
    border-radius: ${p.theme.borderRadiusSm};
    height: calc(
      ${p.theme.inputLineHeightSm}em + ${p.theme.inputTotalPaddingYSm} + 2px
    );
  `,
  md: p => css`
    padding: ${p.theme.inputPaddingY} ${p.theme.inputPaddingX};
    font-size: ${p.theme.fontSizeBase};
    line-height: ${p.theme.inputLineHeight};
    border-radius: ${p.theme.borderRadius};
    height: calc(
      ${p.theme.inputLineHeight}em + ${p.theme.inputTotalPaddingY} + 2px
    );
  `,
  lg: p => css`
    padding: ${p.theme.inputPaddingYLg} ${p.theme.inputPaddingXLg};
    font-size: ${p.theme.fontSizeLg};
    line-height: ${p.theme.inputLineHeightLg};
    border-radius: ${p.theme.borderRadiusLg};
    height: calc(
      ${p.theme.inputLineHeightLg}em + ${p.theme.inputTotalPaddingYLg} + 2px
    );
  `,
}

const ScNumberInput = styled(NumberFormat)`
  color: ${p => p.theme.inputTextColor};
  font-family: ${p => p.theme.fontFamilyMonospace};
  font-weight: 600;
  display: block;
  width: 100%;

  line-height: ${p => p.theme.inputLineHeight};
  background-color: white;
  background-clip: padding-box;
  border: ${p => p.theme.inputBorderWidth} solid
    ${p => (!p.transparent ? p.theme.inputBorderColor : 'transparent')};
  text-align: right;

  ${p =>
    p.inline &&
    css`
      display: inline-block;
      width: auto;
    `}

  &[type='number'] {
    padding-right: 6px;
  }

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

  ${InputGroup} & {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
  }

  ${InputGroup} &:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  ${InputGroup} &:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  ${space}
  ${layout}
  ${typography}
  ${color}
`

function createStyledComponent(size, inline, transparent, props) {
  return (
    <ScNumberInput
      size={size}
      inline={inline}
      transparent={transparent}
      {...props}
    />
  )
}

class NumberInput extends PureComponent {
  static propTypes = {
    /**
     * Size of input. Same as button. Default is 'md'
     */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    /**
     * Pass this prop if the input is display: inline-block and width: auto.
     */
    inline: PropTypes.bool,
    /**
     * Pass this prop if input is transparent. (Shows border when hovered.)
     */
    transparent: PropTypes.bool,
    /**
     * NumberFormat component prop types.
     */
    ...NumberFormat.propTypes,
    ...space.propTypes,
    ...layout.propTypes,
    ...color.propTypes,
    ...typography.propTypes,
  }

  static defaultProps = {
    size: 'md',
    inline: false,
    transparent: false,
  }

  render() {
    const { size, inline, transparent, ...inputProps } = this.props

    return createStyledComponent(size, inline, transparent, ...inputProps)
  }
}
NumberInput.displayName = 'NumberInput'

export default withTheme(NumberInput)
