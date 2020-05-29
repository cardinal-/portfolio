import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { colors } from '../../utils/styles'

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2.4rem;
  height: 1rem;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`

const Line = styled(motion.div)`
  width: 2.4rem;
  height: 2px;
  background-color: ${colors.secondaryDark};
`

const NavButton = ({ isNavOpen, setIsNavOpen }) => {
  function toggleNav() {
    // If the navigation is open
    if (isNavOpen === true) {
      // Then close the nav
      setIsNavOpen(false)
    } else {
      // If the nav is close then open it
      setIsNavOpen(true)
    }
  }

  return (
    <Button onClick={toggleNav}>
      <Line
        initial={false}
        animate={{
          y: isNavOpen ? 4 : 0,
          rotate: isNavOpen ? 45 : 0,
        }}
        transition={{ duration: 3 }}
      />
      <Line
        initial={false}
        animate={{
          y: isNavOpen ? -4 : 0,
          rotate: isNavOpen ? -45 : 0,
        }}
        transition={{ duration: 3 }}
      />
    </Button>
  )
}

export default NavButton
