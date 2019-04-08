import React, { PureComponent } from 'react'
import styled, { css, withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import { borderRadius, space } from 'styled-system'

const sizeStyles = {
  xs: () => css`
    font-size: 0.875rem;
  `,
  sm: () => css`
    font-size: 1.25rem;
  `,
  md: () => css`
    font-size: 2.5rem;
  `,
  lg: () => css`
    font-size: 5rem;
  `,
  xl: () => css`
    font-size: 8rem;
  `,
}

const variantStyles = {
  primary: p => css`
    background-color: ${p.theme.primary};
    color: ${p.theme.colorYik(p.theme.primary)};
  `,
  secondary: p => css`
    background-color: ${p.theme.secondary};
    color: ${p.theme.colorYik(p.theme.secondary)};
  `,
  success: p => css`
    background-color: ${p.theme.success};
    color: ${p.theme.colorYik(p.theme.success)};
  `,
  info: p => css`
    background-color: ${p.theme.info};
    color: ${p.theme.colorYik(p.theme.info)};
  `,
  warning: p => css`
    background-color: ${p.theme.warning};
    color: ${p.theme.colorYik(p.theme.warning)};
  `,
  danger: p => css`
    background-color: ${p.theme.danger};
    color: ${p.theme.colorYik(p.theme.danger)};
  `,
  light: p => css`
    background-color: ${p.theme.light};
    color: ${p.theme.colorYik(p.theme.light)};
  `,
  dark: p => css`
    background-color: ${p.theme.dark};
    color: ${p.theme.colorYik(p.theme.dark)};
  `,
}

function createStyledComponent(variant, size, initials, props) {
  const variantStyle = variantStyles[variant]
  const sizeStyle = sizeStyles[size]

  const ScAvatar = styled.span`
    border-radius: ${p => p.theme.borderRadius};
    display: inline-block;
    font-family: ${p => p.theme.fontFamilyBase};
    font-weight: 500;
    font-size: 2rem;
    height: ${p => p.theme.avatarSizes[size]};
    line-height: ${p => p.theme.avatarSizes[size]};
    width: ${p => p.theme.avatarSizes[size]};
    text-align: center;
    text-transform: uppercase;
    user-select: none;

    ${sizeStyle}
    ${variantStyle}
    ${borderRadius}
    ${space}
  `

  return <ScAvatar {...props}>{initials}</ScAvatar>
}

class AvatarInitials extends PureComponent {
  static propTypes = {
    initials: PropTypes.string,
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
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    ...borderRadius.propTypes,
    ...space.propTypes,
  }

  static defaultProps = {
    initials: 'EK',
    variant: 'primary',
    size: 'md',
  }

  render() {
    return createStyledComponent(
      this.props.variant,
      this.props.size,
      this.props.initials,
      ...this.props,
    )
  }
}
AvatarInitials.displayName = 'AvatarInitials'

export default withTheme(AvatarInitials)
