import styled from '@emotion/styled'

const containerMaxwidth = '104rem'

const ProjectContainer = styled.article`
  width: 100vw;
  display: grid;
  grid-template-columns: 1.6rem 1fr 1.6rem;
  grid-template-areas:
    'banner banner banner'
    '  .    content   .   ';

  .banner {
    grid-area: banner;
  }

  .content {
    grid-area: content;
  }
`

export default ProjectContainer
