import styled, { withTheme } from 'styled-components'

const Dropdown = styled.div`
  display: inline-block;
  position: relative;
`
Dropdown.displayName = 'Dropdown'
export default withTheme(Dropdown)
