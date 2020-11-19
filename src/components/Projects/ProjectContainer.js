import styled from '@emotion/styled'
import { mq } from '../../styles'
import Grid from '../Grid';

const containerMaxwidth = '104rem'

const ProjectContainer = styled(Grid)`
  grid-template-areas:
    'banner banner banner'
    '  .    content   .   ';

  .banner {
    grid-area: banner;
  }

  .content {
    grid-area: content;
  }

  /* Breakpoints */
  /* ${mq[0]} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${mq[1]} {
    grid-template-columns: 1fr 1fr 1fr;
  } */
`

export default ProjectContainer
