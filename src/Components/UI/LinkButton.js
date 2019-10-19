import styled from 'styled-components'
import { color, space, layout, } from 'styled-system'

const LinkButton = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  cursor: pointer;
  outline:none;
  ${color}
  ${space}
  ${layout}
`
export default LinkButton