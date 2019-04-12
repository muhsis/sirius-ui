import React, { PureComponent } from 'react'
import styled, { withTheme } from 'styled-components'
import { space } from 'styled-system'

const ScTabGroup = styled.div`
  ${space}
`

class TabGroup extends PureComponent {
  static propTypes = {
    ...space.propTypes,
  }

  render() {
    return <ScTabGroup role="tablist" {...this.props} />
  }
}
TabGroup.displayName = 'TabGroup'

export default withTheme(TabGroup)
