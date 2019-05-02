import styled, { withTheme } from 'styled-components'
import { colorYik } from '../../../theming/color'

const MenuItem = styled.button`
  border: none;
  border-radius: ${p => p.theme.borderRadius};
  font-size: ${p => p.theme.fontSizeBase};
  outline: none;
  cursor: pointer;
  text-align: left;
  display: block;
  width: 100%;
  box-shadow: none;
  color: ${p => p.theme.colors.shaft};
  padding: 0.6rem 0.75rem;
  transition: color 0.15s, background-color 0.15s;

  & svg {
    color: ${p => p.theme.colors.primary};
  }

  &:hover {
    background-color: ${p => p.theme.tints.primary};
  }

  &:active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => colorYik(p.theme.colors.primary)(p)};
  }

  &:active svg {
    color: ${p => colorYik(p.theme.colors.primary)(p)};
  }
`

export default withTheme(MenuItem)
