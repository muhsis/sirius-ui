import React, { PureComponent } from 'react'
import styled, { withTheme } from 'styled-components'

const ScFormGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`

class FormGroup extends PureComponent {
  render() {
    return <ScFormGroup>{this.props.children}</ScFormGroup>
  }
}

export default withTheme(FormGroup)
