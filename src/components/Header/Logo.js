import React from 'react'
import styled from '@emotion/styled'
import logo from '../../assets/svg/bike-logo.svg'

const Img = styled.img`
  width: 1.8rem;
`

const Logo = () => <Img src={logo} alt="" />

export default Logo
