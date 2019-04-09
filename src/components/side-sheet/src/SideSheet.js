import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, withTheme } from 'styled-components'

import { Overlay } from '../../overlay'
import SideSheetClose from './SideSheetClose'

const ANIMATION_DURATION = 240
const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
}

const slideInAnimation = keyframes`
  from: {
    transform: translateX(100%)
  },
  to: {
    transform: translateX(0)
  }
`

const slideOutAnimation = keyframes`
  from: {
    transform: translateX(0)
  },
  to: {
    transform: translateX(100%)
  }
`

const ScSideSheetContainer = styled.div`
  position: absolute;
  height: 100vh;
  right: 0;
  width: ${p => p.width}px;
  transition: transform 240ms;

  &[data-state='entering'],
  &[data-state='entered'] {
    /* animation: ${slideInAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.deceleration} both; */
  }

  &[data-state='exiting'] {
    transform: translateX(100%);
    /* animation: ${slideOutAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.acceleration} both; */
  }
`

const ScSideSheetContent = styled.div`
  background-color: ${p => p.theme.colors.white};
  overflow-y: auto;
  position: absolute;
  height: 100vh;
  right: 0;
  width: ${p => p.width}px;
`

class SideSheet extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    isShown: PropTypes.bool,
    onCloseComplete: PropTypes.func,
    onOpenComplete: PropTypes.func,
    width: PropTypes.number,
  }

  static defaultProps = {
    width: 500,
    onCloseComplete: () => {},
    onOpenComplete: () => {},
  }

  render() {
    const {
      width,
      isShown,
      children,
      onOpenComplete,
      onCloseComplete,
      theme,
    } = this.props

    return (
      <Overlay
        isShown={isShown}
        onExited={onCloseComplete}
        onEntered={onOpenComplete}
      >
        {({ state, close }) => (
          <ScSideSheetContainer width={width} data-state={state}>
            <SideSheetClose
              data-state={state}
              isClosing={false}
              onClick={close}
            />
            <ScSideSheetContent width={width} theme={theme} data-state={state}>
              {typeof children === 'function' ? children({ close }) : children}
            </ScSideSheetContent>
          </ScSideSheetContainer>
        )}
      </Overlay>
    )
  }
}

export default withTheme(SideSheet)
