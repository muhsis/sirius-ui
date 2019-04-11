import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactSelect from 'react-select'
import styled, { css, withTheme } from 'styled-components'
import { lighten } from 'polished'
import { space } from 'styled-system'

import { controlFocus } from '../../../theming'

const sizeBorderStyles = {
  sm: p => css`
    border-radius: ${p.theme.borderRadiusSm};
  `,
  md: p => css`
    border-radius: ${p.theme.borderRadius};
  `,
  lg: p => css`
    border-radius: ${p.theme.borderRadiusLg};
  `,
}

const sizeStyles = {
  sm: p => css`
    padding: ${p.theme.inputSelectPaddingYSm} ${p.theme.inputSelectPaddingXSm};
    font-size: ${p.theme.fontSizeSm};
    line-height: ${p.theme.inputLineHeightSm};
    border-radius: ${p.theme.borderRadiusSm};
  `,
  md: p => css`
    padding: ${p.theme.inputSelectPaddingY} ${p.theme.inputSelectPaddingX};
    font-size: ${p.theme.fontSizeBase};
    line-height: ${p.theme.inputLineHeight};
    border-radius: ${p.theme.borderRadius};
  `,
  lg: p => css`
    padding: ${p.theme.inputSelectPaddingYLg} ${p.theme.inputSelectPaddingXLg};
    font-size: ${p.theme.fontSizeLg};
    line-height: ${p.theme.inputLineHeightLg};
    border-radius: ${p.theme.borderRadiusLg};
  `,
}

const ScReactSelect = styled(ReactSelect)`
  ${space}

  & .select__control {
    border-width: ${p => p.theme.inputBorderWidth};
    border-color: ${p => p.theme.inputBorderColor};
    min-height: unset;

    ${p => sizeBorderStyles[p.size](p)};
  }

  & .select__control--is-focused {
    border-width: ${p => p.theme.inputBorderWidth};
    border-color: ${p => lighten(0.2, p.theme.primary)};

    ${p => controlFocus(p.theme.colors.primary)(p)}
    ${p => sizeBorderStyles[p.size](p)};

    &:hover {
      border-color: ${p => lighten(0.2, p.theme.primary)};
    }
  }

  & .select__placeholder {
    color: ${p => p.theme.colors.silver};
    margin: 0 0.25rem;
  }

  & .select__value-container {
    ${p => sizeStyles[p.size](p)};
  }

  & .select__single-value {
    font-weight: 600;
  }

  & .select__clear-indicator {
    color: ${p => p.theme.colors.slate};
    cursor: pointer;
    padding: 0;

    & > svg {
      height: 16px;
      width: 16px;
    }
  }

  & .select__dropdown-indicator {
    color: ${p => p.theme.colors.silver};
    padding: 0 0.5rem;
  }

  & .select__menu {
    background: ${p => p.theme.colors.white};
  }

  & .select__option {
    cursor: pointer;
    transition: background-color 0.15s, color 0.15s;

    &:hover {
      background-color: ${p => p.theme.tints.primary};
      color: ${p => p.theme.colors.primary};
    }
  }

  & .select__option--is-selected {
    background-color: ${p => p.theme.tints.primary};
    color: ${p => p.theme.colors.primary};
    font-weight: 600;
  }

  & .select__option--is-focused {
    background-color: ${p => p.theme.tints.primary};
  }

  & .select__multi-value {
    background-color: ${p => p.theme.tints.primary};
    border-radius: ${p => p.theme.borderRadius};
    color: ${p => p.theme.colors.primary};
    font-weight: 500;
  }

  & .select__multi-value__remove {
    color: ${p => p.theme.colors.slate};
    cursor: pointer;
  }
`

class Select extends PureComponent {
  static propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    ...space.propTypes,
  }

  static defaultProps = {
    size: 'md',
  }

  render() {
    return (
      <ScReactSelect
        classNamePrefix="select"
        size={this.props.size}
        {...this.props}
      />
    )
  }
}

export default withTheme(Select)
