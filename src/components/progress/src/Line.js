import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css, withTheme } from 'styled-components'
import { space } from 'styled-system'

import {
  fontSizeSm,
  fontSizeBase,
  fontSizeLg,
  transitionBase,
  borderRadiusSemiCircle,
  borderRadiusSemiCircleSm,
  borderRadiusSemiCircleLg,
} from '../../../theming'

import {
  linePaddingYSm,
  linePaddingXSm,
  lineLineHeightSm,
  linePaddingY,
  linePaddingX,
  lineLineHeight,
  linePaddingYLg,
  linePaddingXLg,
  lineLineHeightLg,
  lineVariant,
} from '../../../theming/progress'

const sizeStyles = {
  sm: () => css`
    padding: ${linePaddingYSm} ${linePaddingXSm};
    font-size: ${fontSizeSm};
    border-radius: ${borderRadiusSemiCircleSm};
    line-height: ${lineLineHeightSm};
  `,
  md: () => css`
    padding: ${linePaddingY} ${linePaddingX};
    font-size: ${fontSizeBase};
    border-radius: ${borderRadiusSemiCircle};
    line-height: ${lineLineHeight};
  `,
  lg: () => css`
    padding: ${linePaddingYLg} ${linePaddingXLg};
    font-size: ${fontSizeLg};
    border-radius: ${borderRadiusSemiCircleLg};
    line-height: ${lineLineHeightLg};
  `,
}

function createStyledComponent(variant, size, percent, striped, props) {
  const sizeStyle = sizeStyles[size]

  let stripedCss
  if (striped) {
    stripedCss = css`
      background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
      );
      background-size: 1rem 1rem;
    `
  }

  const ScLine = styled.span`
    display: block;
    width: ${percent}%;
    text-align: center;
    ${p => transitionBase(p)};
    ${p => lineVariant(variant)(p)};
    ${stripedCss};
    ${sizeStyle};
    ${space}
  `
  return <ScLine {...props}>{props.percent}%</ScLine>
}

class Line extends PureComponent {
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
    percent: PropTypes.number,
    striped: PropTypes.bool,
    ...space.propTypes,
  }

  static defaultProps = {
    variant: 'primary',
    size: 'md',
    percent: 0,
    striped: false,
  }

  render() {
    return createStyledComponent(
      this.props.variant,
      this.props.size,
      this.props.percent,
      this.props.striped,
      ...this.props,
    )
  }
}
Line.displayName = 'Line'

export default withTheme(Line)
