import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css, withTheme } from 'styled-components'
import { space } from 'styled-system'

import {
  transitionBase,
  borderRadiusSemiCircle,
  borderRadiusSemiCircleLg,
  borderRadiusSemiCircleSm,
} from '../../../theming'
import Line from './Line'

const sizeStyles = {
  sm: () => css`
    border-radius: ${borderRadiusSemiCircleSm};
  `,
  md: () => css`
    border-radius: ${borderRadiusSemiCircle};
  `,
  lg: () => css`
    border-radius: ${borderRadiusSemiCircleLg};
  `,
}

function createStyledComponent(variant, size, percent, striped, props) {
  const sizeStyle = sizeStyles[size]

  const ScLinearProgress = styled.div`
    background-color: ${p => p.theme.grays.smoke};
    ${p => transitionBase(p)};
    ${sizeStyle};
    ${space}
  `

  return (
    <ScLinearProgress {...props}>
      <Line {...props} />
    </ScLinearProgress>
  )
}

class LinearProgress extends PureComponent {
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
LinearProgress.displayName = 'Linear Progress'

export default withTheme(LinearProgress)
