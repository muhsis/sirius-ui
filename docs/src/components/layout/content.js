import React, { PureComponent } from 'react'
import styled from 'styled-components'

const ScContent = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

class Content extends PureComponent {
  render() {
    return <ScContent>{this.props.children}</ScContent>
  }
}

export default Content
