import styled from '@emotion/styled'
import {mq} from '../styles'

const Grid = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 5vw 1fr 5vw;
  margin-top: 7.5rem;

  ${mq.smallDesktop} {
    grid-template-columns: minmax(10rem, 1fr) 14.2rem minmax(auto, 898px) minmax(10rem, 1fr);
  }
`

export const Center = styled.div`
  grid-column: 2 / 4;
`

export default Grid;
