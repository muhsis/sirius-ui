import styled, { withTheme } from 'styled-components'

const Media = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
Media.displayName = 'Media'

export default withTheme(Media)
