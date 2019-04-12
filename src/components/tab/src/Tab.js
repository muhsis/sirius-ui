import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css, withTheme } from 'styled-components'
import { darken } from 'polished'

const ScTab = styled.span`
  background-color: ${p => p.theme.colors.snow};
  border-radius: 0.2rem;
  cursor: pointer;
  display: inline-flex;
  font-size: ${p => p.theme.fontSizeBase};
  padding: 0.375rem 0.75rem;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-right: 0.5rem;
  transition: background-color 0.15s, color 0.15s;

  &:hover {
    background-color: ${p => darken(0.1, p.theme.colors.snow)};
  }

  &:last-child {
    margin-right: none;
  }

  ${p =>
    p.isSelected &&
    css`
      background-color: ${p => p.theme.tints.primary};
      color: ${p => p.theme.colors.primary};

      &:hover {
        background-color: ${p => p.theme.tints.primary};
        color: ${p => p.theme.colors.primary};
      }
    `}
`

class Tab extends PureComponent {
  static propTypes = {
    /**
     * Function triggered when tab is selected.
     */
    onSelect: PropTypes.func,
    /**
     * When true, the tab is selected.
     */
    isSelected: PropTypes.bool,
    /**
     * Triggers when tab is clicked. Useful when used as navigation.
     */
    onClick: PropTypes.func,
    /**
     * Triggers when a key pressed if tab is selected. Selects the tab if the key is "Enter"
     */
    onKeyPress: PropTypes.func,
  }

  static defaultProps = {
    onSelect: () => {},
    onClick: () => {},
    onKeyPress: () => {},
  }

  handleClick = e => {
    this.props.onClick(e)
    this.props.onSelect()
  }

  handleKeyPress = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      this.props.onSelect()
      e.preventDefault()
    }
    this.props.onKeyPress(e)
  }

  render() {
    const { onSelect, isSelected, ...props } = this.props
    return (
      <ScTab
        isSelected={isSelected}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        role="tab"
        {...props}
      />
    )
  }
}
Tab.displayName = 'Tab'

export default withTheme(Tab)
