import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

const ScStep = styled.div``

class Step extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.node,
    children: PropTypes.node,
    isCompleted: PropTypes.bool,
  }

  static defaultValues = {
    isCompleted: false,
  }

  render() {
    const { children } = this.props
    return <ScStep>{children}</ScStep>
  }
}
Step.displayName = 'Step'

export default withTheme(Step)
