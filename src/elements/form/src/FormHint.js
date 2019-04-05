import React, { PureComponent } from 'react'
import styled, { withTheme } from 'styled-components'

const ScFormHint = styled.div`
  color: ${p => p.theme.grays.silver};
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-size: ${p => p.theme.fontSizeSm};
  font-style: italic;
`

class FormHint extends PureComponent {
  render() {
    return <ScFormHint>{this.props.children}</ScFormHint>
  }
}

export default withTheme(FormHint)
