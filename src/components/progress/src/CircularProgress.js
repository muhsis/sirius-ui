import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css, withTheme } from 'styled-components'
import { space } from 'styled-system'

import { transitionBase } from '../../../theming'
import Circle from './Circle'

const sizeStyles = {
  sm: () => css``,
  md: () => css``,
  lg: () => css``,
}

function createStyledComponent(variant, size, percent, radius, stroke, props) {
  const sizeStyle = sizeStyles[size]

  const ScCircularProgress = styled.div`
    display: inline-block;
    ${p => transitionBase(p)};
    ${sizeStyle};
    ${space}
  `

  return (
    <ScCircularProgress {...props}>
      <Circle {...props} />
    </ScCircularProgress>
  )
}

class CircularProgress extends PureComponent {
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
CircularProgress.displayName = 'Circular Progress'

export default withTheme(CircularProgress)
