import styled from '@emotion/styled'
import {mq }  from '../../styles'

const ProjectContent = styled.section`
  img {
    width: 100%;
    margin-bottom: 4rem;
  }

  ${mq.smallDesktop} {
    p {
      font-size: 1.6rem;
    }
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

export default ProjectContent
