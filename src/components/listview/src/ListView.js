import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { space } from 'styled-system'

const ScListView = styled.div`
  border-radius: ${p => p.theme.borderRadius};
  border: 1px solid ${p => p.theme.colors.smoke};

  ${space}
`

class ListView extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return <ScListView {...this.props}>{this.props.children}</ScListView>
  }
}
ListView.displayName = 'ListView'

export default withTheme(ListView)
