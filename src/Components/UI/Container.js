import styled from 'styled-components'
import { color, space, layout, } from 'styled-system'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  ${color}
  ${space}
  ${layout}
`
export default Container