import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import {
  space,
  textAlign,
  width,
  zIndex,
  maxWidth,
  minWidth,
  minHeight,
} from 'styled-system'
import { Elevations } from '../../../constants'

const ScCard = styled.div`
  border: 1px solid rgb(228, 231, 235);
  background-color: white;
  border-radius: ${p => p.theme.borderRadius};
  padding: 0;

  ${p => Elevations[p.elevation]}

  ${space}
  ${width}
  ${maxWidth}
  ${minWidth}
  ${minHeight}
  ${zIndex}
`

const ScCardBody = styled.div`
  padding: 1rem 1.5rem;

  ${textAlign}
`

class Card extends PureComponent {
  static propTypes = {
    elevation: PropTypes.number,
    children: PropTypes.node,
  }

  static defaultValues = {
    elevation: 0,
  }

  render() {
    return (
      <ScCard {...this.props}>
        <ScCardBody {...this.props}>{this.props.children}</ScCardBody>
      </ScCard>
    )
  }
}

export default withTheme(Card)
