import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css } from 'styled-components'
import { space } from 'styled-system'

import { Button } from '../../../elements/button'
import { Text } from '../../../elements/typography'
import { IconNew } from '../../../icons'

const ScPopConfirmWrapper = styled.div`
  display: inline-block;
  position: relative;

  ${space}
`

const ScPopConfirmDirectionalStyles = direction => {
  let result

  switch (direction) {
    case 'top':
      result = css`
        top: 0;
        left: 50%;
        margin-top: -10px;
        transform: translate(-50%, -100%);
      `
      break
    case 'right':
      result = css`
        top: 50%;
        right: 0;
        margin-right: -5px;
        transform: translate(100%, -50%);
      `
      break
    case 'bottom':
      result = css`
        bottom: 0;
        left: 50%;
        margin-bottom: -5px;
        transform: translate(-50%, 100%);
      `
      break
    case 'left':
      result = css`
        top: 50%;
        left: 0;
        margin-left: -5px;
        transform: translate(-100%, -50%);
      `
      break
    default:
      result = css`
        top: 0;
        left: 50%;
        margin-top: -5px;
        transform: translate(-50%, -100%);
      `
      break
  }
  return result
}

const ScPopConfirm = styled.div`
  background-color: white;
  /* border: 1px solid ${p => p.theme.colors.smoke}; */
  border-radius: ${p => p.theme.borderRadius};
  display: ${p => (p.show ? 'flex' : 'none')};
  flex-direction: column;
  padding: 1rem 1.25rem;
  position: absolute;
  min-width: 250px;
  transition: all 200ms;
  box-shadow: 0 0 1px rgba(67, 90, 111, 0.3),
      0 5px 8px -4px rgba(67, 90, 111, 0.47);

  ${p => ScPopConfirmDirectionalStyles(p.direction)};
`

const ScPopConfirmHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
`

const ScPopConfirmText = styled.div`
  color: ${p => p.theme.colors.slate};
  font-size: ${p => p.theme.fontSizeSm};
  line-height: 1.2;
  text-align: left;
`

const ScPopConfirmActions = styled.div`
  padding: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

class PopConfirm extends Component {
  constructor(props) {
    super(props)

    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)

    this.state = {
      show: this.props.show || false,
    }
  }

  static propTypes = {
    /**
     * Sets the direction of Popconfirm component. Can be one of 'top', 'right', 'bottom', 'left'
     */
    direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    /**
     * Set true to show by default.
     */
    show: PropTypes.bool,
    /**
     * Text of confirm button
     */
    okButtonText: PropTypes.string,
    /**
     * Text of cancel button text
     */
    cancelButtonText: PropTypes.string,
  }

  static defaultProps = {
    direction: 'top',
    show: false,
    okButtonText: 'Ok',
    cancelButtonText: 'Cancel',
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleShow = () => {
    this.setState({ show: true })
  }

  handleConfirm = () => {
    this.setState({ show: false })
    this.props.onResult(true)
  }

  handleCancel = () => {
    this.setState({ show: false })
    this.props.onResult(false)
  }

  handlePopConfirmClick = event => {
    event.stopPropagation()
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ show: false })
      this.props.onResult(false)
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  render() {
    return (
      <ScPopConfirmWrapper onClick={this.handleShow} ref={this.setWrapperRef}>
        <ScPopConfirm
          direction={this.props.direction}
          show={this.state.show}
          onClick={e => this.handlePopConfirmClick(e)}
          theme={this.props.theme}
        >
          <ScPopConfirmHeader theme={this.props.theme}>
            <Text color="warning" mr={3} fontSize="1.5rem">
              <IconNew />
            </Text>
            <ScPopConfirmText>{this.props.title}</ScPopConfirmText>
          </ScPopConfirmHeader>
          <ScPopConfirmActions>
            <Button
              size="sm"
              variant="light"
              mr={1}
              onClick={this.handleCancel}
            >
              {this.props.cancelButtonText}
            </Button>
            <Button size="sm" onClick={this.handleConfirm}>
              {this.props.okButtonText}
            </Button>
          </ScPopConfirmActions>
        </ScPopConfirm>

        {this.props.children}
      </ScPopConfirmWrapper>
    )
  }
}
PopConfirm.displayName = 'PopConfirm'

export default withTheme(PopConfirm)
