import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Heading } from '../../../../src/'

class Readme extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    introduction: PropTypes.node,
  }

  render() {
    const { name, introduction, ...props } = this.props

    return (
      <>
        <Heading>{name}</Heading>
        {introduction && <>{introduction}</>}
      </>
    )
  }
}

export default Readme
