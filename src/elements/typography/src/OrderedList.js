import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { space } from 'styled-system'

const ScOrderedList = styled.ol`
  margin-left: 1.25rem;
  padding: 0;
  list-style-position: inside;
  list-style: decimal;

  ${space}
`

class OrderedList extends PureComponent {
  static propTypes = {
    hasIcon: PropTypes.bool,
    variant: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
    ...space.propTypes,
  }

  static defaultProps = {
    hasIcon: false,
  }

  render() {
    const { children, ...props } = this.props
    const finalChildren = React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child
      }

      return React.cloneElement(child, {
        variant: child.props.variant || this.props.variant,
        hasIcon: child.props.hasIcon || this.props.hasIcon,
      })
    })

    return <ScOrderedList {...props}>{finalChildren}</ScOrderedList>
  }
}

export default withTheme(OrderedList)
