import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css } from 'styled-components'

const ScInputGroupText = styled.div`
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  margin-bottom: 0;
  font-size: ${p => p.theme.fontSizeBase};
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  background-color: ${p => p.theme.colors.smoke};
  border: 1px solid ${p => p.theme.colors.smoke};
  border-radius: ${p => p.theme.borderRadius};

  ${p =>
    p.type === 'append' &&
    css`
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}

  ${p =>
    p.type === 'prepend' &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `}
`

class InputGroupText extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['append', 'prepend']),
  }

  static defaultProps = {
    type: 'prepend',
  }

  render() {
    const { children, ...props } = this.props

    return <ScInputGroupText {...props}>{children}</ScInputGroupText>
  }
}

export default withTheme(InputGroupText)
