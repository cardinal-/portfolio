import styled from '@emotion/styled'

export const StyledHeader = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 5vw 1fr 5vw;
  padding: 2rem 0;
  position: fixed;
  top: 0;
  left: 0;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 2 / 3;
`
