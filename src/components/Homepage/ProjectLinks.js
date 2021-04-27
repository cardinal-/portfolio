import React from 'react';
import styled from '@emotion/styled'
import { colors } from '../../styles'
import imagePlaceholder from '../../projects/complex-ui-interface/assets/SpotifyMock.jpg'

const projects = [
  {
    name: 'Project 1', 
    description: 'This is where I describe the project a bit',
    tags: ['UX designer'],
    date: 2019,
  },
  {
    name: 'Project 2', 
    description: 'This is where I describe the project a bit',
    tags: ['UX designer', 'another tag'],
    date: 2019,
  },
  {
    name: 'Project 3', 
    description: 'This is where I describe the project a bit',
    tags: ['UX designer', 'another tag'],
    date: 2019,
  },
]

export const ProjectContainer = () => {
  return (
    <Container>
      <ul>
        {projects.map(project => (
         <article>
           <h2>{project.name}</h2>
           <p>{project.description}</p>
           <div>
             <span>{project.tags.join('  ')}</span>
             <time datetime={`${project.date}-01-01`}>{project.date}</time>
           </div>
           <img src={imagePlaceholder} alt="" />
         </article> 
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

const Project = styled.div`
  width: 100%;
  height: 300px;
  background: red;
`