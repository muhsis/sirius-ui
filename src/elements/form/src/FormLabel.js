import React, { PureComponent } from 'react'
import styled, { withTheme } from 'styled-components'

const ScFormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: ${p => p.theme.fontSizeBase};
  font-weight: 500;
`

class FormLabel extends PureComponent {
  render() {
    return <ScFormLabel>{this.props.children}</ScFormLabel>
  }
}

export default withTheme(FormLabel)
