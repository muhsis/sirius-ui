import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { space } from 'styled-system'

const ScListItem = styled.li`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  color: ${p => p.theme.colors.dark};
  font-family: ${p => p.theme.fontFamily};
  font-size: ${p => p.theme.fontSizeBase};

  ${p =>
    p.hasIcon &&
    `
    list-style-type: none;
  `}
`

class ListItem extends PureComponent {
  static propTypes = {
    hasIcon: PropTypes.bool,
    variant: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
    ...space.propTypes,
  }

  render() {
    const { children, ...props } = this.props
    return <ScListItem {...props}>{children}</ScListItem>
  }
}

export default withTheme(ListItem)
