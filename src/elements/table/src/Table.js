import styled from 'styled-components'

const Table = styled.table`
  border: 1px solid ${p => p.theme.grays.silver};
  table-layout: fixed;
  border-collapse: collapse;
  background-color: ${p => p.theme.grays.white};
  line-height: 100%;
  width: 100%;
`

export default Table
