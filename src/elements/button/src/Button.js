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

    & svg {
      position: relative;
      top: 2px;
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

/**
 * Button element.
 */
class Button extends PureComponent {
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
    /**
     * Changes the size and spacing of buttons.
     */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    /**
     * Use this when there's a loading operation and you don't want button to be clicked.
     */
    loading: PropTypes.bool,
    /**
     * Whether button will be a block element.
     */
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
