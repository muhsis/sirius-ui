import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css, withTheme } from 'styled-components'
import { space } from 'styled-system'

import { Spinner } from '../../../components/spinner'
import { transitionBase } from '../../../theming'
import { btnVariant } from '../../../theming/button'

const sizeStyles = {
  sm: p => css`
    padding: ${p.theme.btnPaddingYSm} ${p.theme.btnPaddingXSm};
    font-size: ${p.theme.fontSizeSm};
    border-radius: ${p.theme.borderRadiusSm};
    line-height: ${p.theme.btnLineHeightSm};
  `,
  md: p => css`
    padding: ${p.theme.btnPaddingY} ${p.theme.btnPaddingX};
    font-size: ${p.theme.fontSizeBase};
    border-radius: ${p.theme.borderRadiusSm};
    line-height: ${p.theme.btnLineHeight};
  `,
  lg: p => css`
    padding: ${p.theme.btnPaddingYLg} ${p.theme.btnPaddingXLg};
    font-size: ${p.theme.fontSizeLg};
    border-radius: ${p.theme.borderRadiusLg};
    line-height: ${p.theme.btnLineHeightLg};
  `,
}

function createStyledComponent(variant, size, loading, block, props) {
  const sizeStyle = sizeStyles[size]

  const ScButton = styled.button`
    display: inline-block;
    border-width: ${p => p.theme.btnBorderWidth};
    font-family: ${p => p.theme.fontFamily};
    cursor: pointer;

    ${p => transitionBase(p)};
    ${p => btnVariant(variant)(p)};
    ${p => sizeStyle(p)};

    ${p =>
      p.loading &&
      `
        opacity: ${p.theme.btnDisabledOpacity};
        cursor: not-allowed;
      `}

    ${p =>
      p.block &&
      `
        display: block;
        width: 100%;
      `}

    /* When used as link */
    text-decoration: none;

    &:disabled {
      cursor: not-allowed;
      opacity: ${p => p.theme.btnDisabledOpacity};
    }

    ${space}
  `

  return (
    <ScButton {...props}>
      {loading && (
        <>
          <Spinner mr={1} /> Yükleniyor
        </>
      )}
      {!loading && props.children}
    </ScButton>
  )
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
    loading: PropTypes.bool,
    block: PropTypes.bool,
    ...space.propTypes,
  }

  static defaultProps = {
    variant: 'primary',
    size: 'md',
    loading: false,
    block: false,
  }

  render() {
    return createStyledComponent(
      this.props.variant,
      this.props.size,
      this.props.loading,
      this.props.block,
      ...this.props,
    )
  }
}
Button.displayName = 'Button'

export default withTheme(Button)
