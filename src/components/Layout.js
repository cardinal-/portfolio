import React from 'react'
import SEO from './SEO'
import Header from './Header/Header.js'
import GlobalStyles from '../styles'

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  )
}
export default Layout
