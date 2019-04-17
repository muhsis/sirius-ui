import React, { PureComponent } from 'react'
import styled, { withTheme } from 'styled-components'
import { space } from 'styled-system'

import { IconCross } from '../../../icons'

const ScFormValidationMessage = styled.div`
  color: ${p => p.theme.colors.danger};
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-size: ${p => p.theme.fontSizeBase};

  ${space}
`

class FormValidationMessage extends PureComponent {
  render() {
    const { children, ...props } = this.props
    return (
      <ScFormValidationMessage {...props}>
        <IconCross /> {children}
      </ScFormValidationMessage>
    )
  }
}

export default withTheme(FormValidationMessage)
