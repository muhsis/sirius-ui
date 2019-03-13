import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css, withTheme } from 'styled-components'
import { space } from 'styled-system'

import { transitionBase } from '../../../theming'

import { circleVariant, circleTextVariant } from '../../../theming/progress'

const sizeStyles = {
  sm: () => css``,
  md: () => css``,
  lg: () => css``,
}

function createStyledComponent(variant, size, percent, radius, stroke, props) {
  const sizeStyle = sizeStyles[size]

  const ScCircle = styled.div`
    display: inline-block;
    position: relative;
    ${p => transitionBase(p)};
    ${sizeStyle};
    ${space}
    svg > circle {
      transition: stroke-dashoffset 0.35s;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
      ${p => circleVariant(variant)(p)};
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      ${p => circleTextVariant(variant)(p)}
    }
  `
  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (percent / 100) * circumference

  return (
    <ScCircle {...props}>
      <span>{props.percent}%</span>
      <svg height={radius * 2} width={radius * 2}>
        <circle
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
    </ScCircle>
  )
}

class Circle extends PureComponent {
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
    radius: PropTypes.number,
    stroke: PropTypes.number,
    ...space.propTypes,
  }

  static defaultProps = {
    variant: 'primary',
    size: 'md',
    percent: 0,
    radius: 0,
    stroke: 0,
  }

  render() {
    return createStyledComponent(
      this.props.variant,
      this.props.size,
      this.props.percent,
      this.props.radius,
      this.props.stroke,
      ...this.props,
    )
  }
}
Circle.displayName = 'Circle'

export default withTheme(Circle)
