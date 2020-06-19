import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Link } from 'gatsby'

import {
  NavContainer,
  Title,
  Examples,
  NavList,
  NavItem,
  NavItemHeading,
  LearnMore,
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
            <NavList>
              <NavItem>
                <Link to="/projects/complex-ui-interface">
                  <NavItemHeading>Complex UI interface</NavItemHeading>
                  <p>
                    Complex interfaces with a lot of metada <br /> How might we
                    make the interface conform to the needs of the user?
                  </p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/projects/ibm-projects">
                  <NavItemHeading>IBM projects</NavItemHeading>
                  <p>Enterprise design thinking for large complex problems</p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/projects/industrial-design">
                  <NavItemHeading>Industrial design</NavItemHeading>
                  <p>Hand and eye skills rendered in real touchable things</p>
                </Link>
              </NavItem>
            </NavList>
          </Examples>
          <LearnMore>
            <Title>Learn More</Title>
            <NavList>
              <NavItem>
                <Link to="/about">
                  <NavItemHeading>About</NavItemHeading>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact">
                  <NavItemHeading>Get in Touch</NavItemHeading>
                </Link>
              </NavItem>
            </NavList>
          </LearnMore>
        </NavContainer>
      )}
    </AnimatePresence>
  )
}

export default Nav
