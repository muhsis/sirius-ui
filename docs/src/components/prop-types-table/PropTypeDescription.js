import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Paragraph } from '../../../../src'

export default class PropTypeDescription extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const { children } = this.props
    return <Paragraph color="slate">{children}</Paragraph>
  }
}
