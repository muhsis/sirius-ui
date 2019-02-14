import React, { PureComponent } from 'react'
import styled from 'styled-components'

const ScContainer = styled.div`
  margin-left: 250px;
  padding: 2rem 0;
`

class Container extends PureComponent {
  render() {
    return <ScContainer>{this.props.children}</ScContainer>
  }
}

export default Container
