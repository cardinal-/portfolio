import React, { useState } from 'react'
import Logo from './Logo'
import NavButton from './NavButton'
import { StyledHeader } from './Header.styles.js'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <StyledHeader>
      <Logo />
      <NavButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </StyledHeader>
  )
}

export default Header
