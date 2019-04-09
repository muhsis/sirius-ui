import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import styled, { withTheme, keyframes } from 'styled-components'

import { Portal } from '../../portal'

const ANIMATION_DURATION = 240
const animationEasing = {
  standard: `cubic-bezier(0.4, 0.0, 0.2, 1)`,
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
  sharp: `cubic-bezier(0.4, 0.0, 0.6, 1)`,
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`,
}

const fadeInAnimation = keyframes`
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
`

const fadeOutAnimation = keyframes`
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
`

const ScOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;

  &::before {
    background-color: rgba(67, 90, 111, 0.7);
    left: 0;
    top: 0;
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    content: ' ';
  }

  &[data-state='entering']::before,
  &[data-state='entered']::before {
    animation: ${fadeInAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.deceleration} both;
  }

  &[data-state='exiting']::before,
  &[data-state='exited']::before {
    animation: ${fadeOutAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.acceleration} both;
  }
`

class Overlay extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    isShown: PropTypes.bool,
    containerProps: PropTypes.object,
    onExit: PropTypes.func,
    onExiting: PropTypes.func,
    onExited: PropTypes.func,
    onEnter: PropTypes.func,
    onEntering: PropTypes.func,
    onEntered: PropTypes.func,
  }

  static defaultProps = {
    onExit: () => {},
    onExiting: () => {},
    onExited: () => {},
    onEnter: () => {},
    onEntering: () => {},
    onEntered: () => {},
  }

  constructor(props) {
    super(props)

    this.state = {
      exiting: false,
      exited: !props.isShown,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isShown && !this.props.isShown) {
      this.setState({ exited: false })
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.onEsc, false)
  }

  /**
   * Methods borrowed from BlueprintJS
   * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
   */
  bringFocusInsideOverlay = () => {
    // Always delay focus manipulation to just before repaint to prevent scroll jumping
    return requestAnimationFrame(() => {
      // Container ref may be undefined between component mounting and Portal rendering
      // activeElement may be undefined in some rare cases in IE

      if (
        this.containerElement == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
        !this.props.isShown
      ) {
        return
      }

      const isFocusOutsideModal = !this.containerElement.contains(
        document.activeElement,
      )
      if (isFocusOutsideModal) {
        // Element marked autofocus has higher priority than the other clowns
        const autofocusElement = this.containerElement.querySelector(
          '[autofocus]',
        )
        const wrapperElement = this.containerElement.querySelector('[tabindex]')
        const buttonElement = this.containerElement.querySelector('button')

        if (autofocusElement) {
          autofocusElement.focus()
        } else if (wrapperElement) {
          wrapperElement.focus()
        } else if (buttonElement) {
          buttonElement.focus()
        }
      }
    })
  }

  bringFocusBackToTarget = () => {
    return requestAnimationFrame(() => {
      if (
        this.containerElement == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
      ) {
        return
      }

      const isFocusInsideModal = this.containerElement.contains(
        document.activeElement,
      )

      // Bring back focus on the target.
      if (
        this.previousActiveElement &&
        (document.activeElement === document.body || isFocusInsideModal)
      ) {
        this.previousActiveElement.focus()
      }
    })
  }

  onEsc = e => {
    // Esc key
    if (e.keyCode === 27) {
      this.close()
    }
  }

  close = () => {
    this.setState({ exiting: true })
  }

  handleEntering = node => {
    document.body.addEventListener('keydown', this.onEsc, false)
    this.props.onEntering(node)
  }

  handleEntered = node => {
    this.previousActiveElement = document.activeElement
    this.bringFocusInsideOverlay()
    this.props.onEntered(node)
  }

  handleExiting = node => {
    document.body.removeEventListener('keydown', this.onEsc, false)
    this.bringFocusBackToTarget()
    this.props.onExiting(node)
  }

  handleExited = node => {
    this.setState({ exiting: false, exited: true })
    this.props.onExited(node)
  }

  handleBackdropClick = e => {
    if (e.target !== e.currentTarget) {
      return
    }

    this.close()
  }

  onContainerRef = ref => {
    this.containerElement = ref
  }

  render() {
    const {
      containerProps = {},
      isShown,
      children,
      onExit,
      onEnter,
    } = this.props

    const { exiting, exited } = this.state
    if (exited) return null

    return (
      <Portal>
        <Transition
          appear
          unmountOnExit
          timeout={ANIMATION_DURATION}
          in={isShown && !exiting}
          onExit={onExit}
          onExiting={this.handleExiting}
          onExited={this.handleExited}
          onEnter={onEnter}
          onEntering={this.handleEntering}
          onEntered={this.handleEntered}
        >
          {state => (
            <ScOverlay
              onClick={this.handleBackdropClick}
              ref={this.onContainerRef}
              data-state={state}
              {...containerProps}
            >
              {typeof children === 'function'
                ? children({ state, close: this.close })
                : children}
            </ScOverlay>
          )}
        </Transition>
      </Portal>
    )
  }
}

export default withTheme(Overlay)
