import styled from '@emotion/styled'
import { colors, mq } from '../../styles'

export const IntroContainer = styled.section`
  grid-column: 2 / 3;
  padding-top: 2rem;
`

export const SubTitle = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1.4rem;
  font-weight: 700;

  ${mq.smallDesktop} {
    font-size: 2.4rem;
  }
`

export const SubTitleLead = styled.p`
  max-width: 50rem;
  color: ${colors.secondaryColor};
  margin-bottom: 5.9rem;

  ${mq.smallDesktop} {
    font-size: 1.6rem;
  }
`
