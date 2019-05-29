import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css } from 'styled-components'

const ScListViewItem = styled.div`
  background-color: ${p => p.theme.colors.white};
  border-bottom: 1px solid ${p => p.theme.colors.smoke};
  padding: 1rem;
  transition: background-color 0.15s;

  ${p =>
    p.clickable &&
    css`
      cursor: pointer;

      &:hover {
        background-color: ${p.theme.tints[p.variant]};
      }
    `}

  &:last-child {
    border-bottom: none;
  }
`

class ListViewItem extends PureComponent {
  static propTypes = {
    /**
     * Whether the list item is clickable
     */
    clickable: PropTypes.bool,
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
     * Triggered when list item is selected.
     */
    handleSelected: PropTypes.func,
    /**
     * Children of list view item.
     */
    children: PropTypes.node,
  }

  static defaultProps = {
    clickable: false,
    variant: 'primary',
    handleSelected: () => {},
  }

  handleClick = () => {
    this.props.handleSelected()
  }

  render() {
    return (
      <ScListViewItem {...this.props} onClick={this.handleClick}>
        {this.props.children}
      </ScListViewItem>
    )
  }
}
ListViewItem.displayName = 'ListViewItem'

export default withTheme(ListViewItem)
