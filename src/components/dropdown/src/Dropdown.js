import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, keyframes, css } from 'styled-components'
import { Transition } from 'react-transition-group'

const ANIMATION_DURATION = 200
const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
}

const openAnimation = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const closeAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.9);
    opacity: 0;
  }
`

const ScDropdown = styled.div`
  display: inline-block;
  position: relative;
`

const ScDropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.smoke};
  border-radius: ${p => p.theme.borderRadius};
  position: absolute;
  top: 100%;
  margin-top: 0.5rem;
  z-index: 12;

  ${p =>
    p.direction === 'right' &&
    css`
      right: 0;
    `}

  ${p =>
    p.direction === 'left' &&
    css`
      left: 0;
    `}

  min-width: ${p => p.width}px;

  &[data-state='entering'],
  &[data-state='entered'] {
    animation: ${openAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.deceleration} both;
    visibility: visible;
  }

  &[data-state='exiting'],
  &[data-state='exited'] {
    animation: ${closeAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.acceleration} both;
  }
`

class Dropdown extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

    /**
     * When true, the dialog is shown.
     */
    isShown: PropTypes.bool,

    /**
     * Width of the Dropdown.
     */
    width: PropTypes.number,

    /**
     * Direction of dropdown content
     */
    direction: PropTypes.oneOf(['right', 'left']),
  }

  static defaultProps = {
    isShown: false,
    width: 200,
    direction: 'right',
  }

  constructor(props) {
    super(props)

    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)

    this.state = {
      isShown: this.props.isShown || false,
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleShow = () => {
    this.setState({ isShown: true })
  }

  handleHide = () => {
    this.setState({ isShown: false })
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ isShown: false })
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  render() {
    const { isShown } = this.state
    const { children, content, width, direction } = this.props

    return (
      <ScDropdown onClick={this.handleShow} ref={this.setWrapperRef}>
        {children}

        <Transition
          appear
          unmountOnExit
          timeout={ANIMATION_DURATION}
          in={isShown}
        >
          {state => (
            <>
              {isShown && (
                <ScDropdownContent
                  role="menu"
                  data-state={state}
                  width={width}
                  direction={direction}
                >
                  {typeof content === 'function'
                    ? content({ close: this.handleHide })
                    : content}
                </ScDropdownContent>
              )}
            </>
          )}
        </Transition>
      </ScDropdown>
    )
  }
}

Dropdown.displayName = 'Dropdown'
export default withTheme(Dropdown)
