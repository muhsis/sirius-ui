import { css } from 'styled-components'

export const DEFAULT_BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

export const getBreakpoints = props =>
  (props && props.theme && props.theme.breakpoints) || DEFAULT_BREAKPOINTS

export const getBreakpointEntries = props => {
  const breakpoints = getBreakpoints(props)
  const entries = Object.keys(breakpoints).reduce(
    (entries, key) => [...entries, [key, breakpoints[key]]],
    [],
  )

  return entries.sort((a, b) => a[1] > b[1])
}

export const getNextBreakpoint = (name, props) => {
  const entries = getBreakpointEntries(props)
  const index = entries.findIndex(([key]) => key === name)
  return index < entries.length - 1 ? entries[index + 1][0] : null
}

export const getPreviousBreakpoint = (name, props) => {
  const entries = getBreakpointEntries(props)
  const index = entries.findIndex(([key]) => key === name)
  return index >= 1 ? entries[index - 1][0] : null
}
