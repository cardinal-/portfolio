import styled from '@emotion/styled'
import { mq } from '../../styles'
import Grid from '../Grid'

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
  ${mq.smallDesktop} {
    grid-template-areas:
    'banner banner banner banner'
    '  .  content  content   .   ';
  }
`

export default ProjectContainer
