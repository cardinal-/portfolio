import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import logo from '../../assets/svg/bike-logo.svg'

const Img = styled.img`
  width: 1.8rem;
`

const Logo = () => (
  <Link style={{ zIndex: 10 }} to="/">
    <Img src={logo} alt="" />
  </Link>
)

export default Logo
