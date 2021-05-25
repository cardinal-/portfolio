import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../../styles'
import {ButtonLink} from '../Buttons'
import imagePlaceholder from '../../projects/complex-ui-interface/assets/SpotifyMock.jpg'

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
            <div>
              <div>
                <Subtitle>{project.subtitle}</Subtitle>
                <Meta>
                  <span>{project.tag}</span>
                  <time dateTime={`${project.date}-01-01`}>{project.date}</time>
                </Meta>
                <Details>
                  <p>{project.description}</p>
                  <ButtonLink>
                    View project -
                  </ButtonLink>
                </Details>
              </div>
            </div>
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
`

const Project = styled.article`
  margin-bottom: 5rem;
`

const ProjectTitle = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1.1rem;
`
const Subtitle = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${colors.primaryDark};
  margin-bottom: .8rem;
  max-width: 20rem;
`
const Meta = styled.div`
  font-size: 1.2rem;
  color: ${colors.secondaryColor};
  margin-bottom: 1.8rem;

  span {
    margin-right: 4rem;
  }
`

const Details = styled.div`
  display: none;
`