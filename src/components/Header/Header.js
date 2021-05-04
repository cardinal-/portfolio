import React, { useState } from 'react'
import Logo from './Logo'
import NavButton from './NavButton'
import Nav from './Nav/Nav.js'
import { StyledHeader, HeaderContent } from './Header.styles.js'
import Grid from '../Grid'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <StyledHeader>
      <HeaderContent>
        <Logo />
        <NavButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </HeaderContent>
      <Nav isNavOpen={isNavOpen} />
    </StyledHeader>
  )
}

export default Header
