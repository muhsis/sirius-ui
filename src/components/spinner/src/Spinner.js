import styled, { withTheme, keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { space } from 'styled-system'

const spinnerAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`
const Spinner = styled.span`
  animation: ${spinnerAnimation} 1s linear infinite;
  border: ${p => p.stroke}px solid transparent;

  border-top-color: currentColor;
  border-top-style: solid;
  border-top-width: ${p => p.stroke}px;

  border-left-color: currentColor;
  border-left-style: solid;
  border-left-width: ${p => p.stroke}px;

  border-radius: 50%;
  display: inline-block;
  height: 1em;
  width: 1em;
  line-height: 1.5;
  position: relative;
  top: 2px;

  ${space}
`
Spinner.displayName = 'Spinner'
Spinner.defaultProps = {
  stroke: 2.5,
}

Spinner.propTypes = {
  stroke: PropTypes.number,
}

export default withTheme(Spinner)
