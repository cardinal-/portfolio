import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Link } from 'gatsby'

import {
  SocialMediaList,
  SocialMediaListItem,
  SocialMediaIcon,
} from '../../SocialMediaList.js'

import {
  NavContainer,
  Title,
  Examples,
  NavList,
  NavItem,
  NavItemHeading,
  LearnMore,
} from './Nav.styles.js'

import useSocialMediaLinks from '../../../hooks/useSocialMediaLinks'

const variants = {
  container: {
    hidden: { y: '-100%', transition: { duration: 0.1 } },
    visible: {
      y: 0,
      transition: { duration: 0.2 },
    },
  },
  section: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2 } },
  },
  navList: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, when: 'beforeChildren' },
    },
  },
  navListItem: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  socialMedia: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2 } },
  },
}

const Nav = ({ isNavOpen }) => {
  const socialLinks = useSocialMediaLinks()

  return (
    <AnimatePresence>
      {isNavOpen && (
        <NavContainer
          variants={variants.container}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Examples variants={variants.section}>
            <Title>Work examples</Title>
            <NavList variants={variants.navList}>
              <NavItem variants={variants.navListItem}>
                <Link to="/projects/complex-ui-interface">
                  <NavItemHeading>Complex UI interface</NavItemHeading>
                  <p>
                    Complex interfaces with a lot of metada <br /> How might we
                    make the interface conform to the needs of the user?
                  </p>
                </Link>
              </NavItem>
              <NavItem variants={variants.navListItem}>
                <Link to="/projects/ibm-projects">
                  <NavItemHeading>IBM projects</NavItemHeading>
                  <p>Enterprise design thinking for large complex problems</p>
                </Link>
              </NavItem>
              <NavItem variants={variants.navListItem}>
                <Link to="/projects/industrial-design">
                  <NavItemHeading>Industrial design</NavItemHeading>
                  <p>Hand and eye skills rendered in real touchable things</p>
                </Link>
              </NavItem>
            </NavList>
          </Examples>

          <LearnMore variants={variants.section}>
            <Title>Learn More</Title>
            <NavList variants={variants.navList}>
              <NavItem variants={variants.navListItem}>
                <Link to="/about">
                  <NavItemHeading>About</NavItemHeading>
                </Link>
              </NavItem>
              <NavItem variants={variants.navListItem}>
                <Link to="/contact">
                  <NavItemHeading>Get in Touch</NavItemHeading>
                </Link>
              </NavItem>
            </NavList>
          </LearnMore>

          <SocialMediaList variants={variants.socialMedia}>
            {socialLinks.map(item => (
              <SocialMediaListItem>
                <a href={item.url} target="_blank">
                  <SocialMediaIcon
                    type="image/svg+xml"
                    data={item.svg}
                    className="icon"
                  />
                </a>
              </SocialMediaListItem>
            ))}
          </SocialMediaList>
        </NavContainer>
      )}
    </AnimatePresence>
  )
}

export default Nav
