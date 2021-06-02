import styled from '@emotion/styled'
import { colors, typography, mq } from '../../styles'

const Title = styled.div`
  color: ${colors.primaryDark};
  font-family: ${typography.displayFont};
  font-size: 3.6rem;
  line-height: 1.2;
  margin-bottom: 2.6rem;
  font-weight: normal;
  
  ${mq.smallDesktop} {
    font-size: 6rem;
  }
`

export default Title
