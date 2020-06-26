import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { colors } from '../../styles'

const Button = styled(motion.button)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2.4rem;
  height: 1rem;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  z-index: 10;
`

const Line = styled(motion.div)`
  width: 2.4rem;
  height: 2px;
  background-color: ${({ open }) =>
    open ? colors.primaryLight : colors.secondaryDark};
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

  const topLineVariants = {
    closed: { y: 0, rotate: 0 },
    open: { y: 4, rotate: 45 },
  }

  const bottomLineVariants = {
    closed: { y: 0, rotate: 0 },
    open: { y: -4, rotate: -45 },
  }

  return (
    <Button animate={isNavOpen ? 'open' : 'closed'} onClick={toggleNav}>
      <Line open={isNavOpen} initial={false} variants={topLineVariants} />
      <Line open={isNavOpen} initial={false} variants={bottomLineVariants} />
    </Button>
  )
}

export default NavButton
