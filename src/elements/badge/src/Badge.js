import React, { PureComponent } from 'react'
import styled, { css, withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import { space } from 'styled-system'

// TODO@EMRE - Extract this to somewhere
// since it's gonna be used a lot.
const variantStyles = {
  primary: p => css`
    background-color: ${p.theme.tints.primary};
    color: ${p.theme.primary};
  `,
  secondary: p => css`
    background-color: ${p.theme.tints.secondary};
    color: ${p.theme.secondary};
  `,
  success: p => css`
    background-color: ${p.theme.tints.success};
    color: ${p.theme.success};
  `,
  info: p => css`
    background-color: ${p.theme.tints.info};
    color: ${p.theme.info};
  `,
  warning: p => css`
    background-color: ${p.theme.tints.warning};
    color: ${p.theme.warning};
  `,
  danger: p => css`
    background-color: ${p.theme.tints.danger};
    color: ${p.theme.danger};
  `,
  light: p => css`
    background-color: transparent;
    border: 1px solid ${p.theme.light};
    color: ${p.theme.colorYik(p.theme.light)};
  `,
  dark: p => css`
    background-color: ${p.theme.tints.dark};
    color: ${p.theme.dark};
  `,
}

function createStyledComponent(variant, children, props) {
  const variantStyle = variantStyles[variant]

  const ScBadge = styled.span`
    border-radius: ${p => p.theme.borderRadius};
    font-family: ${p => p.theme.fontFamilyBase};
    font-weight: 500;
    font-size: 0.875rem;
    line-height: normal;
    padding: 0rem 0.5rem;
    text-transform: uppercase;

    ${variantStyle}
    ${space}
  `

  return <ScBadge {...props}>{children}</ScBadge>
}

class Badge extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
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
    ...space.propTypes,
  }

  static defaultProps = {
    variant: 'primary',
  }

  render() {
    return createStyledComponent(
      this.props.variant,
      this.props.children,
      ...this.props,
    )
  }
}
Badge.displayName = 'Badge'

export default withTheme(Badge)
