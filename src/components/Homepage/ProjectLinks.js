import React from 'react'
import styled from '@emotion/styled'
import { colors, mq } from '../../styles'
import {ButtonLink} from '../Buttons'
import imagePlaceholder from '../../projects/complex-ui-interface/assets/SpotifyMock.jpg'

// TODO: get this from graphQL and not hardcoded 
const projects = [
  {
    name: 'ViewPoint',
    subtitle: 'Educating sellers to create offerings using Design Thinking',
    description: 'We were told to create 100 offerings that would each bring in 100 million dollars of revenue. Easy, right? ',
    tag: 'UX design team lead',
    date: 2018,
  },
  {
    name: 'COPLINK',
    subtitle: 'Software for Police Officers',
    description: 'Police Officers have a lot to keep track of. How might we help lower their cognitive load and help them see through the noise?',
    tag: 'UX designer, Researcher',
    date: 2017,
  },
  {
    name: 'Signal + Ziba',
    subtitle: 'Designing the ultimate city bike',
    description: 'My bicycle company Signal Cycles partnered with design firm Ziba to answer the question: "What is the ultimate city bike?"',
    tag: 'Designer, Fabricator',
    date: 2011,
  },
  {
    name: 'Signal + Ziba',
    subtitle: 'Designing the ultimate city bike',
    description: 'My bicycle company Signal Cycles partnered with design firm Ziba to answer the question: "What is the ultimate city bike?"',
    tag: 'Designer, Fabricator',
    date: 2011,
  },
]

export const ProjectContainer = () => {
  return (
    <Container>
      <ul>
        {projects.map(project => (
          <Project>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ContentGrid>
              <Left>
                <Subtitle>{project.subtitle}</Subtitle>
                <Meta>
                  <span>{project.tag}</span>
                  <time dateTime={`${project.date}-01-01`}>{project.date}</time>
                </Meta>
              </Left>
              <Details>
                <p>{project.description}</p>
                <ButtonLink>
                  View project -
                </ButtonLink>
              </Details>
            </ContentGrid>
            <img src={imagePlaceholder} alt="" />
          </Project>
       ))}
      </ul>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  grid-column: 2 / 3;
  margin-top: 5rem;

  ${mq.smallDesktop} {
    grid-column: 2 / 4;
  }
`

const Project = styled.article`
  margin-bottom: 5rem;
`

const ProjectTitle = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1.1rem;
  ${mq.smallDesktop} {
    font-size: 4.6rem;
    margin-bottom: 4rem;
  }
`
const Subtitle = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${colors.primaryDark};
  margin-bottom: .8rem;
  max-width: 20rem;

  ${mq.smallDesktop} {
    font-size: 2.5rem;
    max-width: 33.2rem;
    margin-bottom: 3rem;
    line-height: 1.16;
  }
`
const Meta = styled.div`
  font-size: 1.2rem;
  color: ${colors.secondaryColor};
  margin-bottom: 1.8rem;

  span {
    margin-right: 4rem;
  }
  
  ${mq.smallDesktop} {
    font-size: 1.6rem;
    margin-bottom: 3.7rem;
  }
  
`

const Details = styled.div`
  display: none;
  
  ${mq.smallDesktop} {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    margin-bottom: 3rem;


    p {
      font-size: 1.6rem;
    }
  }
`

const ContentGrid = styled.div`
  ${mq.smallDesktop} {
    display: grid;
    grid-template-columns: 1fr 39rem;
  }
`

const Left = styled.div`
  ${mq.smallDesktop} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
`;