import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css, withTheme } from 'styled-components'
import { space } from 'styled-system'

import { Box } from '../../../elements/box'
import { IconCheck } from '../../../icons'

const ScStepper = styled.div`
  ${space};
`

const ScStepNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-image: linear-gradient(left, transparent 50%, rgb(255,255,255) 50%, rgb(255,255,255) calc(50% + 1px), transparent calc(50% + 1px)); */

  background-image: linear-gradient(
    transparent calc(50% - 1px),
    ${p => p.theme.colors.smoke} calc(50% - 1px),
    ${p => p.theme.colors.smoke} calc(50% + 1px),
    transparent calc(50% + 1px)
  );
`

const ScStepNavItem = styled.div`
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.borderRadius};
  padding: 0.5rem 1rem;
  position: relative;
  cursor: default;
  display: flex;
  align-items: center;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  ${p =>
    p.isClickable &&
    `
    cursor: pointer;
  `}
`

const ScStepNavIndex = styled.span`
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  min-width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 16px;
  text-align: center;
  padding: 0 0.5rem;
  margin-right: 0.75rem;
  transition: background-color ease 0.15s, color ease 0.15s,
    border-color ease 0.15s;

  ${p =>
    !p.isSelected &&
    css`
      background-color: transparent;
      border: 1px solid ${p => p.theme.silver};
      color: ${p => p.theme.colors.silver};
    `}

    ${p =>
      !p.isSelected &&
      p.isClickable &&
      css`
        ${ScStepNavItem}:hover & {
          background-color: ${p => p.theme.colors.primary};
          border: none;
          color: ${p => p.theme.colors.snow};
        }
      `}

  ${p =>
    p.isCompleted &&
    css`
      background-color: ${p => p.theme.colors.success};
      border: none;
      color: ${p => p.theme.colors.snow};
    `}
`

const ScStepNavTitle = styled.span`
  font-weight: 500;
  transition: color ease 0.15s;

  ${p =>
    !p.isSelected &&
    css`
      color: ${p => p.theme.colors.silver};
    `}

  ${p =>
    !p.isSelected &&
    p.isClickable &&
    css`
      ${ScStepNavItem}:hover & {
        color: ${p => p.theme.colors.slate};
      }
    `}
`

const ScStepNavDescription = styled.span`
  display: block;
  color: ${p => p.theme.colors.slate};
  font-size: ${p => p.theme.fontSizeSm};
  max-width: 150px;

  ${p =>
    !p.isSelected &&
    css`
      color: ${p => p.theme.colors.silver};
    `}
`

const ScStepBody = styled.div``

class Stepper extends PureComponent {
  static propTypes = {
    currentIndex: PropTypes.number,
    onChange: PropTypes.func,
    children: PropTypes.node,
    ...space.propTypes,
  }

  constructor(props) {
    super(props)

    const { currentIndex } = this.props
    this.handleNavClick = this.handleNavClick.bind(this)

    this.state = {
      currentIndex: currentIndex || 0,
    }
  }

  componentDidUpdate(prevProps) {
    const { currentIndex } = this.props

    if (
      prevProps.currentIndex !== currentIndex &&
      this.state.currentIndex !== currentIndex
    ) {
      this.setState({ currentIndex })
    }
  }

  handleNavClick = (event, index) => {
    const { onChange } = this.props
    if (onChange) {
      this.setState({ currentIndex: index })
      onChange(index)
    }
  }

  render() {
    const steps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { ...child.props })
    })

    const navItems = steps.map((step, index) => {
      const isSelected = this.state.currentIndex === index
      const isClickable = this.props.onChange && !isSelected
      const { isCompleted } = step.props

      return (
        <ScStepNavItem
          key={`step-${index}`}
          onClick={event => this.handleNavClick(event, index)}
          isClickable={isClickable}
          isSelected={isSelected}
          isCompleted={isCompleted}
        >
          {!step.props.icon && (
            <ScStepNavIndex
              isSelected={isSelected}
              isCompleted={isCompleted}
              isClickable={isClickable}
            >
              {!isCompleted && index + 1}
              {isCompleted && <IconCheck />}
            </ScStepNavIndex>
          )}

          <Box>
            <ScStepNavTitle isSelected={isSelected} isClickable={isClickable}>
              {step.props.title}
            </ScStepNavTitle>
            {step.props.description && (
              <ScStepNavDescription isSelected={isSelected}>
                {step.props.description}
              </ScStepNavDescription>
            )}
          </Box>
        </ScStepNavItem>
      )
    })

    const currentStep = steps.map((step, index) =>
      index === this.state.currentIndex ? step : null,
    )

    return (
      <ScStepper>
        <ScStepNav>{navItems}</ScStepNav>
        <ScStepBody>{currentStep}</ScStepBody>
      </ScStepper>
    )
  }
}
Stepper.displayName = 'Stepper'

export default withTheme(Stepper)
