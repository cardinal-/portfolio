import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../../styles'
import {ButtonLink} from '../Buttons'
import imagePlaceholder from '../../projects/complex-ui-interface/assets/SpotifyMock.jpg'

const projects = [
  {
    name: 'Project 1',
    subtitle: 'This is where I describe the project a bit',
    description: 'words about the project here that set a little context and give a perspective for setting up the viewer so that they can know what they are getting into',
    tag: 'UX designer',
    date: 2019,
  },
  {
    name: 'Project 2',
    subtitle: 'This is where I describe the project a bit',
    description: 'words about the project here that set a little context and give a perspective for setting up the viewer so that they can know what they are getting into',
    tag: 'UX designer',
    date: 2019,
  },
  {
    name: 'Project 3',
    subtitle: 'This is where I describe the project a bit',
    description: 'words about the project here that set a little context and give a perspective for setting up the viewer so that they can know what they are getting into',
    tag: 'UX designer',
    date: 2019,
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
                  <time datetime={`${project.date}-01-01`}>{project.date}</time>
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
  span {
    margin-right: 4rem;
  }
`

const Details = styled.div`
  display: none;
`