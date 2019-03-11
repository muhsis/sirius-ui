import React, { PureComponent } from 'react'
import styled, { css, withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import { space } from 'styled-system'

// TODO@EMRE - Extract this to somewhere
// since it's gonna be used a lot.
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

function createStyledComponent(variant, children, props) {
  const variantStyle = variantStyles[variant]

  const ScPill = styled.span`
    border-radius: 1.5rem;
    font-family: ${p => p.theme.fontFamilyBase};
    font-weight: 500;
    font-size: 0.875rem;
    padding: 0.25rem 0.75rem;

    ${variantStyle}
    ${space}
  `

  return <ScPill {...props}>{children}</ScPill>
}

class Pill extends PureComponent {
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
Pill.displayName = 'Pill'

export default withTheme(Pill)
