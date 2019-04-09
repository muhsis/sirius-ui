import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css } from 'styled-components'
import {
  space,
  textAlign,
  width,
  zIndex,
  maxWidth,
  minWidth,
  minHeight,
} from 'styled-system'

const elevationStyles = {
  0: () => css`
    box-shadow: none;
  `,
  1: () => css`
    box-shadow: 0 0 1px rgba(67, 90, 111, 0.3),
      0 2px 4px -2px rgba(67, 90, 111, 0.47);
  `,
  2: () => css`
    box-shadow: 0 0 1px rgba(67, 90, 111, 0.3),
      0 5px 8px -4px rgba(67, 90, 111, 0.47);
  `,
  3: () => css`
    box-shadow: 0 0 1px rgba(67, 90, 111, 0.3),
      0 8px 10px -4px rgba(67, 90, 111, 0.47);
  `,
  4: () => css`
    box-shadow: 0 0 1px rgba(67, 90, 111, 0.3),
      0 16px 24px -8px rgba(67, 90, 111, 0.47);
  `,
}

const ScCard = styled.div`
  border: 1px solid rgb(228, 231, 235);
  background-color: white;
  border-radius: ${p => p.theme.borderRadius};
  padding: 0;

  ${p => elevationStyles[p.elevation]}

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
