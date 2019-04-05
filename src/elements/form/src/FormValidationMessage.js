import React, { PureComponent } from 'react'
import styled, { withTheme } from 'styled-components'
import { IconCross } from '../../../icons'

const ScFormValidationMessage = styled.div`
  color: ${p => p.theme.colors.danger};
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-size: ${p => p.theme.fontSizeBase};
`

class FormValidationMessage extends PureComponent {
  render() {
    return (
      <ScFormValidationMessage>
        <IconCross /> {this.props.children}
      </ScFormValidationMessage>
    )
  }
}

export default withTheme(FormValidationMessage)
