import React, { PureComponent } from 'react'
import styled, { withTheme } from 'styled-components'
import { space, typography } from 'styled-system'

import { Box } from '../../box'

const ScFormGroup = styled(Box)`
  margin-bottom: 1rem;
  text-align: left;

  ${space}
  ${typography}
`

class FormGroup extends PureComponent {
  render() {
    return <ScFormGroup>{this.props.children}</ScFormGroup>
  }
}

export default withTheme(FormGroup)
