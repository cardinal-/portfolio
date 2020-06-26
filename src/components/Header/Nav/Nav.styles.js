import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { colors, typography } from '../../../styles'

// Container for navigation
export const NavContainer = styled(motion.nav)`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.UIDark};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  padding: 8rem 3rem;
`

/**
 * General styles
 */
export const Title = styled(motion.h3)`
  font-size: 1.2rem;
  color: ${colors.primaryDark};
  margin-bottom: 1.2rem;
  font-weight: normal;
`

export const NavList = styled(motion.ul)`
  list-style-type: none;
`

export const NavItem = styled(motion.li)`
  margin-bottom: 2.4rem;

  a:link,
  a:visited {
    text-decoration: none;
  }

  p {
    font-size: 1.2rem;
    color: ${colors.secondaryLight};
    font-weight: 500;
  }
`

export const NavItemHeading = styled.h4`
  font-size: 2.4rem;
  color: ${colors.primaryLight};
  line-height: ${typography.headingLineHeight};
  margin-bottom: 0.8rem;
`

/**
 * Example section
 */
export const Examples = styled(motion.section)`
  margin-bottom: 4.8rem;
`

/**
 * Learn more section
 */
export const LearnMore = styled(motion.section)``
