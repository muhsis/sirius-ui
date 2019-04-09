import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, withTheme } from 'styled-components'

import { IconCross } from '../../../icons'

const ANIMATION_DURATION = 240
const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
}

const rotate360InAnimation = keyframes`
  from: {
    transform: translateX(100%) rotate(0deg)
  },
  to: {
    transform: translateX(-100%) rotate(-360deg)
  }
`

const rotate360OutAnimation = keyframes`
  from: {
    transform: translateX(-100%) rotate(0deg)
  },
  to: {
    transform: translateX(100%) rotate(360deg)
  }
`

const ScSideSheetClose = styled.div`
  cursor: pointer;
  transform: translateX(-100%);
  background-color: rgba(255, 255, 255, 0.4);
  transition: background-color 120ms;
  position: absolute;
  margin-left: -1rem;
  margin-top: 0.75rem;
  border-radius: 3rem;
  padding-top: 0.25rem;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.4);
  }

  &[data-state='entering'],
  &[data-state='entered'] {
    animation: ${rotate360InAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.deceleration} both;
  }

  &[data-state='exiting'] {
    animation: ${rotate360OutAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.acceleration} both;
  }
`

class SideSheetClose extends PureComponent {
  static propTypes = {
    isClosing: PropTypes.bool,
  }

  render() {
    const { isClosing, ...props } = this.props

    return (
      <ScSideSheetClose {...props}>
        <IconCross />
      </ScSideSheetClose>
    )
  }
}

export default withTheme(SideSheetClose)
