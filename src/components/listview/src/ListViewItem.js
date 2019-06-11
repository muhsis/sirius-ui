import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css } from 'styled-components'

import { Media, MediaItem } from '../../media'

const ScListViewItem = styled.div`
  background-color: ${p => p.theme.colors.white};
  border-bottom: 1px solid ${p => p.theme.colors.smoke};
  display: block;
  padding: 1rem;
  text-decoration: none;
  transition: background-color 0.15s;

  &:hover {
    text-decoration: none;
  }

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
    children: PropTypes.node.isRequired,
    /**
     * Left-hand side of list view item.
     */
    showcase: PropTypes.node,
    /**
     * This is the place where you put the menu.
     */
    actions: PropTypes.node,
  }

  static defaultProps = {
    clickable: false,
    variant: 'primary',
    handleSelected: () => {},
  }

  handleClick = () => {
    if (this.props.handleSelected) this.props.handleSelected()
  }

  render() {
    const { showcase, children, actions, ...props } = this.props
    return (
      <ScListViewItem {...props}>
        <Media>
          {showcase && (
            <MediaItem onClick={this.handleClick} mr={3}>
              {showcase}
            </MediaItem>
          )}
          <MediaItem onClick={this.handleClick} mr="auto" flex="1">
            {children}
          </MediaItem>
          {actions && <MediaItem ml={3}>{actions}</MediaItem>}
        </Media>
      </ScListViewItem>
    )
  }
}
ListViewItem.displayName = 'ListViewItem'

export default withTheme(ListViewItem)
