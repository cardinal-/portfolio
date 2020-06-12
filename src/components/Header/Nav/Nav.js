import React from 'react'
import { AnimatePresence } from 'framer-motion'

import {
  NavContainer,
  Title,
  Examples,
  ProjectList,
  ProjectItem,
} from './Nav.styles.js'

const variants = {
  container: {
    hidden: { y: '-100%', transition: { duration: 0.1 } },
    visible: { y: 0, transition: { duration: 0.2 } },
  },
}

const Nav = ({ isNavOpen }) => {
  return (
    <AnimatePresence>
      {isNavOpen && (
        <NavContainer
          variants={variants.container}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Examples>
            <Title>Work examples</Title>
            <ProjectList>
              <ProjectItem>
                <h4>Project 1</h4>
                <p>
                  A type line about the project. <br /> What does this look like
                  with two lines?
                </p>
              </ProjectItem>
              <ProjectItem>
                <h4>Project 2</h4>
                <p>A type line about the project</p>
              </ProjectItem>
              <ProjectItem>
                <h4>Project 3</h4>
                <p>A type line about the project</p>
              </ProjectItem>
            </ProjectList>
          </Examples>
        </NavContainer>
      )}
    </AnimatePresence>
  )
}

export default Nav
