import styled from 'styled-components'
import { color, textAlign } from 'styled-system'

const TableCell = styled.td`
  border: inherit;
  font-size: ${p => p.theme.fontSizeBase};
  padding: ${p => p.theme.tableCellPadding};
  vertical-align: middle;

  ${color}
  ${textAlign}
`

export default TableCell
