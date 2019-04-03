import React, { PureComponent } from 'react'
import styled, { css, withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import { space } from 'styled-system'
import { IconBlock, IconCheck, IconBell, IconInfo } from '../../../icons'

const variantStyles = {
  success: p => css`
    border-left-color: ${p.theme.success};
  `,
  info: p => css`
    border-left-color: ${p.theme.info};
  `,
  warning: p => css`
    border-left-color: ${p.theme.warning};
  `,
  danger: p => css`
    border-left-color: ${p.theme.danger};
  `,
}

const variantIconStyles = {
  success: p => css`
    color: ${p.theme.success};
  `,
  info: p => css`
    color: ${p.theme.info};
  `,
  warning: p => css`
    color: ${p.theme.warning};
  `,
  danger: p => css`
    color: ${p.theme.danger};
  `,
}

const variantIcons = {
  success: () => <IconCheck />,
  info: () => <IconInfo />,
  warning: () => <IconBell />,
  danger: () => <IconBlock />,
}

const ScAlert = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border: 1px solid #d5dee6;
  border-left-width: 4px;
  box-shadow: 0 0 1px rgba(67, 90, 111, 0.415),
    0 2px 4px -2px rgba(67, 90, 111, 0.301);
  border-radius: ${p => p.theme.borderRadius};
  background: #fff;
  color: #1f4160;
  padding: 1rem;
  text-align: left;

  ${p => variantStyles[p.variant]}
  ${space}
`

const ScAlertContent = styled.div``

const ScAlertIcon = styled.div`
  font-size: 2rem;
  padding: 0 1.25rem 0 0.5rem;

  ${p => variantIconStyles[p.variant]}
`

const ScAlertTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
`

const ScAlertText = styled.p`
  line-height: 1.2;
  margin: 0;
  padding: 0;
  color: #1f4160;
`

class Alert extends PureComponent {
  static propTypes = {
    variant: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
    title: PropTypes.string,
    text: PropTypes.string,
    hasIcon: PropTypes.bool,
  }

  static defaultProps = {
    variant: 'info',
    title: null,
    text: null,
    hasIcon: false,
  }

  render() {
    const IconTag = variantIcons[this.props.variant]

    return (
      <ScAlert {...this.props}>
        {this.props.hasIcon && (
          <ScAlertIcon variant={this.props.variant}>
            <IconTag />
          </ScAlertIcon>
        )}
        <ScAlertContent>
          {this.props.title && <ScAlertTitle>{this.props.title}</ScAlertTitle>}
          {this.props.text && <ScAlertText>{this.props.text}</ScAlertText>}
        </ScAlertContent>
      </ScAlert>
    )
  }
}
Alert.displayName = 'Alert'

export default withTheme(Alert)
