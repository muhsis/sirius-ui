import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

const ScCardHeader = styled.div`
  border-bottom: 1px solid rgb(228, 231, 235);
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: -2rem -1.5rem 1.5rem -1.5rem;
`

const ScCardHeaderTitle = styled.h3`
  line-height: 1;
  font-weight: 600;
  margin: 0;
  padding: 0;
`

const ScCardHeaderActions = styled.div`
  margin-left: auto;
`

class CardHeader extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    return (
      <ScCardHeader>
        {this.props.title && (
          <ScCardHeaderTitle>{this.props.title}</ScCardHeaderTitle>
        )}
        <ScCardHeaderActions>{this.props.children}</ScCardHeaderActions>
      </ScCardHeader>
    )
  }
}

export default withTheme(CardHeader)
