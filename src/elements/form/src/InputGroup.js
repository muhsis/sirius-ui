import styled, { withTheme } from 'styled-components'
// import { TextInput } from '../../input'

// const ScTextInput = styled(TextInput)``
// console.log('TI', ScTextInput)

const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
`

export default withTheme(InputGroup)
