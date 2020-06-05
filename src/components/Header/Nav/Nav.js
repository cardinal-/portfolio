import React from 'react'
import { AnimatePresence } from 'framer-motion'

import { NavContainer } from './Nav.styles.js'

const Nav = ({ isNavOpen }) => {
  return (
    <AnimatePresence>
      {isNavOpen && (
        <NavContainer
          initial={{ opacity: 0 }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          this is the nav
        </NavContainer>
      )}
    </AnimatePresence>
  )
}

export default Nav
