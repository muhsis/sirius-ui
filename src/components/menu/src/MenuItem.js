import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { colorYik } from '../../../theming/color'

const ScMenuItem = styled.button`
  border: none;
  border-radius: ${p => p.theme.borderRadius};
  font-size: ${p => p.theme.fontSizeBase};
  outline: none;
  cursor: pointer;
  text-align: left;
  display: block;
  width: 100%;
  box-shadow: none;
  color: ${p => p.theme.colors.shaft};
  padding: 0.6rem 0.75rem;
  transition: color 0.15s, background-color 0.15s;

  & svg {
    color: ${p => p.theme.colors[p.variant]};
  }

  &:hover {
    background-color: ${p => p.theme.tints[p.variant]};
  }

  &:active {
    background-color: ${p => p.theme.colors[p.variant]};
    color: ${p => colorYik(p.theme.colors[p.variant])(p)};
  }

  &:active svg {
    color: ${p => colorYik(p.theme.colors[p.variant])(p)};
  }
`

class MenuItem extends PureComponent {
  static propTypes = {
    /**
     * Contextual color option.
     */
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
  }

  static defaultProps = {
    variant: 'primary',
  }

  render() {
    const { variant, children } = this.props

    return <ScMenuItem variant={variant}>{children}</ScMenuItem>
  }
}

export default withTheme(MenuItem)
