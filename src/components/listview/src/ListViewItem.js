import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

const ScListViewItem = styled.div`
  background-color: ${p => p.theme.colors.white};
  border-bottom: 1px solid ${p => p.theme.colors.smoke};
  padding: 1rem;

  &:last-child {
    border-bottom: none;
  }
`

class ListViewItem extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <ScListViewItem {...this.props}>{this.props.children}</ScListViewItem>
    )
  }
}
ListViewItem.displayName = 'ListViewItem'

export default withTheme(ListViewItem)
