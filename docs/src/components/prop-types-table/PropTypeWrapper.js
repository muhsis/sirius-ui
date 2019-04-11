import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { styled } from '../../../../src'

const ScPropTypesWrapper = styled.div``

export default class PropTypeWrapper extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const { children } = this.props
    return <ScPropTypesWrapper>{children}</ScPropTypesWrapper>
  }
}
