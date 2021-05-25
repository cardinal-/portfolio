import styled from '@emotion/styled'

const Grid = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 5vw 1fr 5vw;
  margin-top: 7.5rem;
`

export const Center = styled.div`
  grid-column: 2 / 3;
`

export default Grid;
