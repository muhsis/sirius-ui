import React, { PureComponent } from 'react'
import styled, { withTheme } from 'styled-components'

const ScFormHint = styled.div`
  color: ${p => p.theme.grays.silver};
  margin-bottom: 0.5rem;
  margin-top: 0.25rem;
  font-size: ${p => p.theme.fontSizeBase};
`

class FormHint extends PureComponent {
  render() {
    return <ScFormHint>{this.props.children}</ScFormHint>
  }
}

export default withTheme(FormHint)
