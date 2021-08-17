import React from 'react'
import SEO from './SEO'
import Header from './Header/Header.js'
import Footer from './Footer';
import GlobalStyles from '../styles'

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
