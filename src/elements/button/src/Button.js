import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css, withTheme } from 'styled-components'
import { space } from 'styled-system'

import {
  fontSizeSm,
  borderRadiusSm,
  fontSizeBase,
  fontSizeLg,
  borderRadiusLg,
  transitionBase,
} from '../../../theming'
import {
  btnPaddingYSm,
  btnPaddingXSm,
  btnLineHeightSm,
  btnPaddingY,
  btnPaddingX,
  btnLineHeight,
  btnPaddingYLg,
  btnPaddingXLg,
  btnLineHeightLg,
  btnBorderWidth,
  btnDisabledOpacity,
  btnVariant,
} from '../../../theming/button'

const sizeStyles = {
  sm: () => css`
    padding: ${btnPaddingYSm} ${btnPaddingXSm};
    font-size: ${fontSizeSm};
    border-radius: ${borderRadiusSm};
    line-height: ${btnLineHeightSm};
  `,
  md: () => css`
    padding: ${btnPaddingY} ${btnPaddingX};
    font-size: ${fontSizeBase};
    border-radius: ${borderRadiusSm};
    line-height: ${btnLineHeight};
  `,
  lg: () => css`
    padding: ${btnPaddingYLg} ${btnPaddingXLg};
    font-size: ${fontSizeLg};
    border-radius: ${borderRadiusLg};
    line-height: ${btnLineHeightLg};
  `,
}

function createStyledComponent(variant, size, props) {
  const sizeStyle = sizeStyles[size]

  const ScButton = styled.button`
    display: inline-block;
    border-width: ${btnBorderWidth};
    cursor: pointer;

    ${p => transitionBase(p)};
    ${p => btnVariant(variant)(p)};
    ${sizeStyle};

    /* When used as link */
    text-decoration: none;

    &:disabled {
      opacity: ${btnDisabledOpacity};
    }

    ${space}
  `

  return <ScButton {...props}>{props.children}</ScButton>
}

class Button extends PureComponent {
  static propTypes = {
    variant: PropTypes.oneOf([
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'danger',
      'light',
      'dark',
    ]),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    ...space.propTypes,
  }

  static defaultProps = {
    variant: 'primary',
    size: 'md',
  }

  render() {
    return createStyledComponent(
      this.props.variant,
      this.props.size,
      ...this.props,
    )
  }
}
Button.displayName = 'Button'

export default withTheme(Button)
