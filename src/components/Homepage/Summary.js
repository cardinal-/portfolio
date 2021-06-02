import styled from '@emotion/styled'
import { colors, mq } from '../../styles'

export const SummaryImage = styled.div`
  width: 100%;
  height: 24rem;
  grid-column: 2 / 4;
  background-image: url('https://images.unsplash.com/photo-1490604001847-b712b0c2f967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1380&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const SummaryContent = styled.div`
  grid-column: 1 / 3;
  margin-top: -3.8rem;
  background-color: ${colors.secondaryDark};
  font-size: 1.2rem;
  color: ${colors.primaryLight};
  padding: 3.2rem 5vw;
  font-weight: 500;
  line-height: 1.8;

  p {
    max-width: 63rem;
    ${mq.tablet} {
      columns: 220px 2;
    }
  }

 
`
